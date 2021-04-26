import PropTypes from 'prop-types'
import React from 'react'
import Router, { useRouter } from 'next/router'
import { findCustomPageProps, forgerockFlow, findCustomStage } from '../../services/forgerock'
import HeadingCount from '../../services/HeadingCount'
import { CH_COOKIE_NAME, ID_COOKIE_NAME, FORGEROCK_TREE_FMP } from '../../services/environment'
import { getStageFeatures } from '../../services/translate'
import FeatureDynamicView from '../../components/views/FeatureDynamicView'
import withLang from '../../services/lang/withLang'
import { useCookies } from 'react-cookie'
import componentMap from '../../services/componentMap'
import Dynamic from '../../components/Dynamic'
import withQueryParams from '../../services/withQueryParams'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pageStep: '_start' } },
      { params: { pageStep: '_restart' } },
      { params: { pageStep: 'request' } },
      { params: { pageStep: 'verify' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async () => {
  return { props: {} }
}

const ResetPassword = ({ lang, queryParams }) => {
  const router = useRouter()
  const [, setCookie] = useCookies()
  const [customPageProps, setCustomPageProps] = React.useState({})
  const [errors, setErrors] = React.useState([])
  const [uiStage, setUiStage] = React.useState('')
  const [uiFeatures, setUiFeatures] = React.useState([])
  const [uiElements, setUiElements] = React.useState([])
  const [submitData, setSubmitData] = React.useState((formData) => {})
  const headingCount = new HeadingCount()

  const {
    goto,
    overrideStage = '',
    service = '',
    token
  } = queryParams

  const {
    pageStep = ''
  } = router.query

  let journeyName = ''

  React.useEffect(() => {
    headingCount.reset()
    if (!pageStep) return

    if (pageStep === '_restart') {
      router.replace('/password-recovery/request/')
      return
    }

    if (pageStep === 'verify') {
      // Wait for service and token to become available via the router
      if (!service || !token) return

      // Now set the journey name
      journeyName = service
    } else {
      journeyName = FORGEROCK_TREE_FMP
    }

    setErrors([])

    const stepOptions = {
      query: {
        token
      }
    }

    console.log(`Staring FR with pageStep "${pageStep}", journey "${journeyName}", stepOptions:`, stepOptions)
    forgerockFlow({
      journeyName,
      journeyNamespace: 'RESET_PASSWORD',
      lang,
      stepOptions,
      onSuccess: (loginData) => {
        // Set auth cookie
        setCookie(CH_COOKIE_NAME, loginData.tokens.accessToken, { path: '/' })
        setCookie(ID_COOKIE_NAME, loginData.currentUser, { path: '/' })

        if (queryParams.goto) {
          return Router.push(goto)
        }

        Router.push('/account/home')
      },
      onFailure: (errData, newErrors = []) => {
        // We only get here if there was a fatal error signal from the forgerock client library
        // all other errors are not considered a failure (such as incorrectly formatted inputs etc
        // and are handled gracefully by the onUpdateUi function
        setErrors(newErrors)
        setUiFeatures(getStageFeatures(lang, overrideStage || 'GENERIC_ERROR'))
      },
      onUpdateUi: (step, submitDataFunc, stepErrors = []) => {
        const stepCustomPageProps = findCustomPageProps(step)
        const stage = step.payload.stage || findCustomStage(step)
        step.payload.stage = stage

        if (stepCustomPageProps) {
          if (stepCustomPageProps.apiError) {
            // Transform the apiError structure to the app's errors array structure
            const apiErrorsAsAppErrors = stepCustomPageProps.apiError.errors.map((errorItem) => ({
              label: errorItem.message
            }))

            stepErrors.push(...apiErrorsAsAppErrors)
          }
        }

        // Update the errors for the page
        setErrors((currentErrorsArray) => {
          return [...currentErrorsArray, ...stepErrors]
        })

        setCustomPageProps(stepCustomPageProps)
        setUiStage(stage)
        setUiFeatures(getStageFeatures(lang, overrideStage || stage))
        setUiElements(step.callbacks)
        setSubmitData(() => submitDataFunc)
      }
    })
  }, [pageStep, service, token])

  const onSubmit = (evt) => {
    evt.preventDefault()
    setErrors([])

    // Convert UI element values to JSON key/value pairs
    const formData = Object.entries(evt.target.elements).reduce((obj, [key, element]) => {
      obj[key] = element.value
      return obj
    }, {})

    submitData(formData)
  }

  // Check if the router has been initialised yet
  if (!pageStep) {
    console.log('Not rendering yet, no pageStep has been defined!', pageStep)
    return null
  }

  return (
    <FeatureDynamicView
      onSubmit={onSubmit}
      headingCount={headingCount}
      hasAccountLinks={false}
      hasLogoutLink={false}
      hasBackLink={false}
      titleLinkHref="/"
    >
      <Dynamic
        componentMap={componentMap}
        headingCount={headingCount}
        content={uiFeatures}
        errors={errors}
        uiElements={uiElements}
        uiStage={uiStage}
        {...router.query}
        {...queryParams}
        {...customPageProps}
      />
    </FeatureDynamicView>
  )
}

export default withQueryParams(withLang(ResetPassword))

ResetPassword.propTypes = {
  lang: PropTypes.string.isRequired,
  queryParams: PropTypes.object
}
