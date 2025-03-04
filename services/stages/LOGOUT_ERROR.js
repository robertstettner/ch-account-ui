/* eslint-disable no-template-curly-in-string */
const LOGOUT_ERROR = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: 'Sorry, there is a problem with the service',
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: 'Try again later.'
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: 'Contact Companies House',
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink',
          matomo: ['trackEvent', 'Sorry, there is a problem with the service', 'Contact Companies House']
        }
      },
      {
        component: 'SpanText',
        props: {
          children: ' if you have any questions.'
        }
      }
    ]
  }
]
export default LOGOUT_ERROR
