/* eslint-disable no-template-curly-in-string */
const EWF_LOGIN_2 = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.enterTheDetailsOfTheCompanyYouWantToAccess')
    }
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.enterTheDetailsOfTheCompanyYouWantToAccess')
    }
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken2: {
          label: tokens('SHARED.whatIsTheCompanyNumber'),
          fixedWidth: '10',
          formGroup: 'companyDetails',
          autoComplete: 'off',
          testId: 'companyNumberInputField',
          content: [
            {
              component: 'Details',
              props: {
                summary: tokens('SHARED.helpWithMyCompanyNumber')
              },
              content: [
                {
                  component: 'BodyText',
                  props: {},
                  content: [
                    {
                      component: 'SpanText',
                      props: {
                        children: tokens('SHARED.youCanFindThisBySearchingForTheCompanyOn')
                      }
                    },
                    {
                      component: 'LinkText',
                      props: {
                        children: tokens('SHARED.companiesHouseRegisterOpensInANewTab'),
                        href: 'https://find-and-update.company-information.service.gov.uk',
                        target: '_blank',
                        testId: 'companiesHouseRegisterLink',
                        matomo: ['trackEvent', tokens('SHARED.enterTheDetailsOfTheCompanyYouWantToAccess'), tokens('SHARED.companiesHouseRegisterOpensInANewTab')]
                      }
                    },
                    {
                      component: 'SpanText',
                      props: {
                        children: tokens('SHARED.')
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        IDToken3: {
          label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.whereWasTheCompanyRegistered'),
          formGroup: 'companyDetails',
          options: [
            {
              label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.englandWales'),
              value: 0,
              checked: false
            },
            {
              label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.scotland'),
              value: 1,
              checked: false
            },
            {
              label: tokens('EWF_LOGIN_2.[2].DisplayUiElements.northernIreland'),
              value: 2,
              checked: false
            }
          ],
          customValidation: [
            {
              name: 'radioRequired',
              token: 'COMPANY_NOT_FOUND'
            }
          ],
          matomo: ['trackEvent', tokens('SHARED.enterTheDetailsOfTheCompanyYouWantToAccess'), tokens('EWF_LOGIN_2.[2].DisplayUiElements.whereWasTheCompanyRegistered')]
        }
      }
    }
  },
  {
    component: 'Button',
    props: {
      children: tokens('SHARED.continue'),
      type: 'submit',
      testId: 'submitButton'
    }
  }
]
export default EWF_LOGIN_2
