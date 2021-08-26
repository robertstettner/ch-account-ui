/* eslint-disable no-template-curly-in-string */
import errorSignedOut from './shared/errorSignedOut.js'

const SEND_MFA_EMAIL_ERROR = (lang, tokens) => [
  {
    component: 'BrowserTitle',
    props: {
      title: tokens('SHARED.sorryThereIsAProblemWithTheService')
    }
  },
  {
    component: 'Fragment',
    content: errorSignedOut(lang, tokens)
  }
]
export default SEND_MFA_EMAIL_ERROR
