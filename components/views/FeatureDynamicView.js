import PropTypes from 'prop-types'
import React from 'react'
import WidthContainer from '../general-ui/layout/WidthContainer'
import BackLink from '../general-ui/interaction/BackLink'
import Main from '../general-ui/layout/Main'
import Column from '../general-ui/layout/Column'
import Row from '../general-ui/layout/Row'
import HeadingCount from '../../services/HeadingCount'
import LanguageSwitcher from '../application-specific/LanguageSwitcher'
import { errorsPropType } from '../../services/propTypes'
import Header from '../general-ui/Header'
import AccountLinks from '../application-specific/AccountLinks'
import Footer from '../general-ui/Footer'
import Script from 'next/script'

const FeatureDynamicView = (props) => {
  const {
    hasBackLink,
    hasLanguageSwitcher,
    hasLogoutLink,
    hasAccountLinks,
    accountLinksItem,
    titleLinkHref,
    width,
    formAction,
    formRef,
    onSubmit,
    onBack,
    renderFeatures,
    children
  } = props

  const BASE_PATH = process.env.BASE_PATH || ''

  return (
    <>
      <Script src={`${BASE_PATH}/js/cookie-consent-1.0.0.js`} strategy="beforeInteractive" />
      <Header hasLogoutLink={hasLogoutLink} titleLinkHref={titleLinkHref} />
      <WidthContainer style={{ paddingTop: '2ex' }}>
        {hasAccountLinks === true && <AccountLinks currentItem={accountLinksItem} />}
      </WidthContainer>
      <WidthContainer>
          {hasBackLink === true && <Column width={hasLanguageSwitcher ? 'two-thirds' : 'full'}><BackLink testId="backLink" onClick={onBack}/></Column>}
          {hasLanguageSwitcher === true && <Column width={hasBackLink ? 'one-third' : 'full'}><LanguageSwitcher /></Column>}
      </WidthContainer>
      <WidthContainer>
        <Main className="govuk-main-wrapper--auto-spacing">
          <WidthContainer>
            <Row>
              <Column width={width}>
                {Boolean(formAction || onSubmit) === true &&
                <form action={formAction} onSubmit={onSubmit} method="post" noValidate={true} ref={formRef}>
                  {renderFeatures(props)}
                  {children}
                </form>}
                {Boolean(formAction || onSubmit) === false && <>
                  {renderFeatures(props)}
                  {children}
                </>}
              </Column>
            </Row>
          </WidthContainer>
        </Main>
      </WidthContainer>
      <Footer />
    </>
  )
}

export default FeatureDynamicView

FeatureDynamicView.propTypes = {
  errors: errorsPropType,
  formAction: PropTypes.string,
  headingCount: PropTypes.instanceOf(HeadingCount),
  formRef: PropTypes.object,
  onBack: PropTypes.func,
  onSubmit: PropTypes.func,
  renderFeatures: PropTypes.func,
  uiElements: PropTypes.array,
  uiFeatures: PropTypes.array,
  width: PropTypes.string,
  hasBackLink: PropTypes.bool,
  hasLanguageSwitcher: PropTypes.bool,
  children: PropTypes.node,
  hasLogoutLink: PropTypes.bool,
  hasAccountLinks: PropTypes.bool,
  accountLinksItem: PropTypes.number,
  titleLinkHref: PropTypes.string
}

FeatureDynamicView.defaultProps = {
  errors: [],
  formAction: '',
  uiElements: [],
  uiFeatures: [],
  width: 'two-thirds',
  hasBackLink: true,
  hasLanguageSwitcher: true,
  hasLogoutLink: false,
  hasAccountLinks: false,
  renderFeatures: () => { return null }
}
