import PropTypes from 'prop-types'
import React from 'react'
import { cleanAnalytics } from '../../scripts/cleanAnalytics'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const BrowserTitle = ({ title, errors }) => {
  const { trackPageView, pushInstruction, enableLinkTracking } = useMatomo()
  const suffix = ' - Companies House WebFiling account - GOV.UK'

  enableLinkTracking()
  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    // _paq.push(['trackPageView'])
    window.document.title = title + suffix

    if (errors.length > 0) {
      window.document.title = 'Error: ' + window.document.title
      trackPageView({
        documentTitle: window.document.title,
        href: cleanAnalytics([window.location.href])[0]
      })
    }
  }, [title, errors])

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    const currentUrl = window.location.href
    pushInstruction('setCustomUrl', [cleanAnalytics([currentUrl])[0]])
    // console.log(cleanAnalytics([currentUrl])[0])
    pushInstruction('setDocumentTitle', [title + suffix])
    trackPageView({
      documentTitle: title,
      href: cleanAnalytics([currentUrl])[0]
    })
    const content = document.getElementById('__next')
    pushInstruction('FormAnalytics::scanForForms', [content])
  }, [title])

  return null
}

export default BrowserTitle

BrowserTitle.propTypes = {
  children: PropTypes.node
}
