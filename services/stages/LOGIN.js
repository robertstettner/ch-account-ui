/* eslint-disable no-template-curly-in-string */
const LOGIN = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.signInToWebFiling')
    }
  },
  {
    component: 'NotificationBanner',
    dynamicProps: {
      title: 'For information',
      heading: 'Try our new File a confirmation statement service'
    },
    content: [
      {
        component: 'BodyText',
        content: [
          {
            component: 'SpanText',
            props: {
              children: 'If you have a private company limited by shares with 1 director, 1 person of significant control, 1 shareholder, and no company secretaries, you can use our '
            }
          },
          {
            component: 'LinkText',
            props: {
              children: ' new File a confirmation statement service',
              href: 'https://find-and-update.company-information.service.gov.uk/confirmation-statement'
            }
          },
          {
            component: 'SpanText',
            dynamicProps: {
              children: '.'
            }
          }
        ]
      },
      {
        component: 'BodyText',
        props: {
          children: 'You will not be able to pay with a Companies House payment account.'
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.signInToWebFiling')
    }
  },
  {
    component: 'BodyText',
    props: {
      children: tokens('LOGIN.[3].BodyText.inWebFilingYouCan')
    }
  },
  {
    component: 'List',
    props: {
      paddingBottom: 3
    },
    content: [
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanOne')
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanTwo')
        }
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanThree')
        }
      },
      {
        component: 'ListItem',
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('LOGIN.[4].List.inWebFilingYouCanFourSignUp')
            }
          },
          {
            component: 'LinkText',
            props: {
              href: 'https://www.gov.uk/guidance/register-for-email-reminders-from-companies-house',
              children: tokens('LOGIN.[4].List.inWebFilingYouCanFourEmailReminders')
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('LOGIN.[4].List.inWebFilingYouCanFourWhenYour')
            }
          }
        ]
      },
      {
        component: 'ListItem',
        props: {
          children: tokens('LOGIN.[4].List.inWebFilingYouCanFive')
        }
      }
    ]
  },
  {
    component: 'Button',
    props: {
      renderAs: 'link',
      children: tokens('SHARED.signIn'),
      href: '/account/login/',
      testId: 'loginLink',
      matomo: ['trackEvent', 'sign-in', 'sign-in', '[name]optional', '[value]optional']
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('LOGIN.[6].BodyText.createANewAccount'),
          href: '/account/register/_start/',
          testId: 'registerLink',
          matomo: ['trackGoal', 2]
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        props: {
          children: tokens('LOGIN.[7].BodyText.whoCanUseWebFiling'),
          href: 'https://ewf.companieshouse.gov.uk/sframe?name=aboutWebFiling&lang=en',
          testId: 'aboutWebFilingLink'
        }
      }
    ]
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'LinkText',
        dynamicProps: {
          href: '${links.legacyAuthURL}'
        },
        props: {
          children: tokens('SHARED.imAnAgentOrLenderAndIWantToFileACharge'),
          testId: 'lendersLink'
        }
      }
    ]
  }
]
export default LOGIN
