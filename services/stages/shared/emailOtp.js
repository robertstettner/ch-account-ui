/* eslint-disable no-template-curly-in-string */
const emailOtp = (lang, tokens) => ([
  {
    conditional: {
      prop: '${resend}',
      operator: 'is'
    },
    component: 'NotificationBanner',
    props: {
      title: tokens('SHARED.success'),
      heading: tokens('SHARED.emailSent'),
      type: 'success'
    },
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.WeveSentAnotherEmailOTP')
        }
      },
      {
        component: 'SpanText',
        props: {
          weight: 'bold'
        },
        dynamicProps: {
          children: '${emailAddress}'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: '. ' + tokens('SHARED.itMayTakeAFewMinutesToArrive')
        }
      }
    ]
  },
  {
    component: 'PageHeading',
    props: {
      children: tokens('SHARED.checkYourEmail')
    }
  },
  {
    component: 'BodyText',
    content: [
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.weveSentAnEmailTo')
        }
      },
      {
        component: 'SpanText',
        dynamicProps: {
          children: '${emailAddress}'
        },
        props: {
          weight: 'bold'
        }
      },
      {
        component: 'SpanText',
        props: {
          children: tokens('SHARED.whichContainsASecurityCode')
        }
      }
    ]
  },
  {
    component: 'DisplayUiElements',
    props: {
      elementProps: {
        IDToken3: {
          label: tokens('SHARED.securityCode'),
          autoComplete: 'off',
          type: 'text',
          inputMode: 'numeric',
          suffix: false,
          fixedWidth: '10',
          testId: 'otpInputField'
        },
        IDToken4: {
          label: tokens('SHARED.securityCode'),
          autoComplete: 'off',
          type: 'text',
          inputMode: 'numeric',
          suffix: false,
          fixedWidth: '10',
          testId: 'otpInputField',
          customValidation: [
            {
              name: 'required',
              token: 'OTP_REQUIRED'
            }
          ]
        },
        IDToken5: {
          _hidden: true
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
  },
  {
    conditional: {
      prop: '${type}',
      operator: 'nee',
      value: 'sms'
    },
    component: 'Details',
    props: {
      summary: tokens('SHARED.iHaveNotReceivedAnEmail'),
      matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), tokens('SHARED.iHaveNotReceivedAnEmail')]
    },
    content: [
      {
        component: 'BodyText',
        props: {
          children: tokens('SHARED.theEmailMayTakeAFewMinutesToArriveItsSubjectOTP')
        }
      },
      {
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.checkYourJunkFolderIfItStillHasNotArrivedYou')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.askUsToSendYouAnotherEmail'),
              handler: {
                name: 'onSecondarySubmit',
                params: {
                  target: 'IDToken5',
                  value: 0,
                  noValidate: true
                }
              },
              href: '',
              testId: 'resendEmail',
              matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), tokens('SHARED.askUsToSendYouAnotherEmail')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.')
            }
          }
        ]
      },
      {
        conditional: {
          prop: '${phoneNumber}',
          operator: 'is'
        },
        component: 'BodyText',
        props: {},
        content: [
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.ifNotRecievedEmail')
            }
          },
          {
            component: 'LinkText',
            props: {
              children: tokens('SHARED.sendSecurityCodeToMobile'),
              handler: {
                name: 'onSecondarySubmit',
                params: {
                  target: 'IDToken5',
                  value: 2,
                  noValidate: true
                }
              },
              href: '',
              testId: 'resendEmail',
              matomo: ['trackEvent', tokens('SHARED.checkYourEmail'), tokens('SHARED.askUsToSendYouAnotherEmail')]
            }
          },
          {
            component: 'SpanText',
            props: {
              children: tokens('SHARED.instead')
            }
          }
        ]
      }
    ]
  }
])

export default emailOtp
