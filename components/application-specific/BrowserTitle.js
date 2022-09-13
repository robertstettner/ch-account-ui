import PropTypes from 'prop-types'
import React from 'react'
import { cleanAnalytics } from '../../scripts/cleanAnalytics'
import { useMatomo } from '@datapunt/matomo-tracker-react'
// import log from '../../services/log'

const BrowserTitle = ({ title, errors }) => {
  const { trackPageView, pushInstruction, enableLinkTracking } = useMatomo()
  const suffix = ' - Companies House WebFiling account - GOV.UK'

  enableLinkTracking()
  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    window.document.title = title + suffix
    let currentTitle = title

    if (errors.length > 0) {
      currentTitle = 'Error: ' + currentTitle
      trackPageView({
        documentTitle: cleanAnalytics([currentTitle])[0],
        href: cleanAnalytics([window.location.href])[0]
      })
    }
  }, [title, errors])

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    window.document.title = title + suffix
    const currentTitle = title
    // log.debug('before matomo trackPageView: ', window.document.title)
    const currentUrl = window.location.href
    pushInstruction('setCustomUrl', [cleanAnalytics([currentUrl])[0]])

    trackPageView({
      documentTitle: cleanAnalytics([currentTitle])[0],
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
