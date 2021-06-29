
const SEND_MFA_SMS_ERROR = (lang, tokens) => [
  {
    component: 'PageHeading',
    props: {
      children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared'],
      showErrorSummary: false
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens['SHARED.tokenStartTokensSharedTokenStartTokensShared'],
          href: 'https://www.gov.uk/contact-companies-house',
          testId: 'contactCompaniesHouseLink'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens['INVITE_USER_ERROR.[2].BodyText.tokenStartTokensSendMfaEmailError2BodyText']
        }
      }
    ]
  }
]
export default SEND_MFA_SMS_ERROR
