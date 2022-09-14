import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { cleanAnalytics } from '../../../scripts/cleanAnalytics'

import log from '../../../services/log'

const LinkText = (props) => {
  const { children, href, style, className = '', target, testId, renderFeatures, handlers, handler, matomo, name, companyName } = props
  let onClick = props.onClick
  const classes = [className]
  const finalClassName = classes.join(' ').trim()
  // const { trackEvent, pushInstruction, trackLink } = useMatomo()
  const { trackLink } = useMatomo()

  log.debug('Matomo: ', matomo)

  log.debug('LINK: ', href)

  if (!onClick) {
    onClick = (evt) => {
      if (matomo) {
        log.debug('track link')
        trackLink({
          href: cleanAnalytics([evt.target.href], false, 'LinkText')[0]
        })
      }
      // if (matomo) {
      //   const cleanData = matomoHelper(matomo)
      //   cleanData.href = '' // ensure the href is blank
      //   if (cleanData.type === 'trackEvent') {
      //     log.debug("Matomo: cleanData: ", cleanData)
      //     trackEvent(cleanData)
      //   } else if (cleanData.type === 'trackGoal') {
      //     pushInstruction('trackGoal', [matomo[1]])
      //   }
      // console.log(cleanAnalytics([window.location.href])[0])
      // trackLink({
      //   href: cleanAnalytics([evt.target.href], false, 'LinkText')[0]
      // })
      // }
      if (handler) {
        handlers[handler.name](evt, handler.params)
      }
    }
  }
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <a style={style} onClick={onClick} target={target} className={`govuk-link ${finalClassName}`} data-testid={testId}>{children}{renderFeatures(props)}
        <span className="govuk-visually-hidden">{name + ' - ' + companyName}</span>
      </a>
    </Link>
  )
}

export default LinkText

LinkText.propTypes = {
  target: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  handler: PropTypes.object,
  handlers: PropTypes.object,
  href: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  renderFeatures: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  name: PropTypes.string,
  companyName: PropTypes.string
}

LinkText.defaultProps = {
  className: '',
  renderFeatures: () => { return null },
  companyName: '',
  name: ''
}
