
const HOME_AUTHORISED_PERSON = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('HOME_AUTHORISED_PERSON.[0].BrowserTitle.authorisedPersonsDetails')
    }
  },
  {
    component: 'Caption',
    dynamicProps: {
      children: '${company.name}'
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.authorisedPersonsDetails')
    }
  },
  {
    component: 'SummaryList',
    dynamicProps: {
      'listItems.0.value': '${user.name}',
      'listItems.1.value': '${user.email}',
      'listItems.2.value': {
        component: 'Fragment',
        content: [
          {
            conditional: {
              prop: '${user.membershipStatus}',
              operator: 'eeq',
              value: 'confirmed'
            },
            component: 'Tag',
            props: {
              colour: 'green',
              children: tokens('SHARED.confirmed')
            }
          },
          {
            conditional: {
              prop: '${user.membershipStatus}',
              operator: 'eeq',
              value: 'pending'
            },
            component: 'Tag',
            props: {
              colour: 'yellow',
              children: tokens('SHARED.awaitingConfirmation')
            }
          },
          {
            conditional: {
              prop: '${user.membershipStatus}',
              operator: 'eeq',
              value: 'pending'
            },
            component: 'BodyText',
            content: [
              {
                component: 'Br'
              },
              {
                component: 'Fragment',
                dynamicProps: {
                  children: tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.weHaveSentAnEmailToUserMailThisPersonMust')
                }
              }
            ]
          }
        ]
      },
      'listItems.2.action': {
        conditional: {
          prop: '${user.membershipStatus}',
          operator: 'eeq',
          value: 'pending'
        },
        component: 'LinkText',
        props: {
          children: tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.resendEmail'),
          testId: 'resendAuthorisedUserRequestLink'
        },
        dynamicProps: {
          href: '${company.resendPath}'
        }
      }
    },
    props: {
      hasActions: true,
      listItems: [
        {
          label: tokens('HOME_AUTHORISED_PERSON.[3].SummaryList.name'),
          value: ''
        },
        {
          label: tokens('SHARED.emailAddress'),
          value: ''
        },
        {
          label: tokens('SHARED.authorisationStatus'),
          value: ''
        }
      ]
    }
  },
  // {
  //   conditional: {
  //     prop: '${user.membershipStatus}',
  //     operator: 'eeq',
  //     value: 'pending'
  //   },
  //   component: 'Button',
  //   props: {
  //     warning: true,
  //     renderAs: 'link',
  //     children: tokens('HOME_AUTHORISED_PERSON.[4].Button.cancelRequest'),
  //     href: '/account/associate/_start?action=cancel',
  //     testId: 'cancelAuthorisedUserRequestLink'
  //   }
  // },
  {
    conditional: {
      prop: '${user.membershipStatus}',
      operator: 'eeq',
      value: 'confirmed'
    },
    component: 'LinkText',
    props: {
      children: tokens('HOME_AUTHORISED_PERSON.[5].LinkText.removeAuthorisationToFileOnlineForThis'),
      href: '',
      testId: 'removeAuthorisedUserRequestLink'
    },
    dynamicProps: {
      href: '${company.removeAuthorisedPath}'
    }
  }
]
export default HOME_AUTHORISED_PERSON
