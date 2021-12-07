import CH_LOGIN_1 from './CH_LOGIN_1.js'
import CH_LOGIN_4 from './CH_LOGIN_4.js'
import EWF_LOGIN_1 from './EWF_LOGIN_1.js'
import EWF_PROFILE from './EWF_PROFILE.js'
import EWF_LOGIN_2 from './EWF_LOGIN_2.js'
import EWF_LOGIN_3 from './EWF_LOGIN_3.js'
import EWF_LOGIN_4 from './EWF_LOGIN_4.js'
import EWF_LOGIN_5 from './EWF_LOGIN_5.js'
import EWF_LOGIN_OTP_METHOD from './EWF_LOGIN_OTP_METHOD.js'
import EWF_LOGIN_OTP from './EWF_LOGIN_OTP.js'
import PHONE_OTP from './PHONE_OTP.js'
import LOGIN_MFA from './LOGIN_MFA.js'
import REGISTRATION_1 from './REGISTRATION_1.js'
import REGISTRATION_MFA from './REGISTRATION_MFA.js'
import REGISTRATION_2 from './REGISTRATION_2.js'
import REGISTRATION_3 from './REGISTRATION_3.js'
import REGISTRATION_4 from './REGISTRATION_4.js'
import REGISTRATION_ERROR from './REGISTRATION_ERROR.js'
import REGISTRATION_RESEND from './REGISTRATION_RESEND.js'
import RESET_PASSWORD_1 from './RESET_PASSWORD_1.js'
import RESET_PASSWORD_2 from './RESET_PASSWORD_2.js'
import RESET_PASSWORD_3 from './RESET_PASSWORD_3.js'
import RESET_PASSWORD_4 from './RESET_PASSWORD_4.js'
import RESET_PASSWORD_5 from './RESET_PASSWORD_5.js'
import RESET_PASSWORD_6 from './RESET_PASSWORD_6.js'
import REMOVE_USER_CONFIRM from './REMOVE_USER_CONFIRM.js'
import REMOVE_AUTHZ_USER_ERROR from './REMOVE_AUTHZ_USER_ERROR.js'
import REMOVAL_CONFIRMATION from './REMOVAL_CONFIRMATION.js'
import RESET_PASSWORD_ERROR from './RESET_PASSWORD_ERROR.js'
import COMPANY_ASSOCIATION_1 from './COMPANY_ASSOCIATION_1.js'
import COMPANY_ASSOCIATION_2 from './COMPANY_ASSOCIATION_2.js'
import COMPANY_ASSOCIATION_3 from './COMPANY_ASSOCIATION_3.js'
import COMPANY_ASSOCIATION_4 from './COMPANY_ASSOCIATION_4.js'
import REQUEST_AUTH_CODE from './REQUEST_AUTH_CODE.js'
import CHANGE_PASSWORD_1 from './CHANGE_PASSWORD_1.js'
import CHANGE_PASSWORD_2 from './CHANGE_PASSWORD_2.js'
import CHANGE_NAME_1 from './CHANGE_NAME_1.js'
import CHANGE_NAME_2 from './CHANGE_NAME_2.js'
import CHANGE_EMAIL_1 from './CHANGE_EMAIL_1.js'
import CHANGE_EMAIL_ERROR from './CHANGE_EMAIL_ERROR.js'
import CHANGE_EMAIL_INPUT from './CHANGE_EMAIL_INPUT.js'
import UPDATE_PHONE_1 from './UPDATE_PHONE_1.js'
import UPDATE_PHONE_2 from './UPDATE_PHONE_2.js'
import UPDATE_PHONE_3 from './UPDATE_PHONE_3.js'
import HOME_OVERVIEW from './HOME_OVERVIEW.js'
import HOME_MANAGE_ACCOUNT from './HOME_MANAGE_ACCOUNT.js'
import HOME_YOUR_COMPANIES from './HOME_YOUR_COMPANIES.js'
import HOME_NOTIFICATIONS from './HOME_NOTIFICATIONS.js'
import HOME_AUTHORISED_PERSON from './HOME_AUTHORISED_PERSON.js'
import NO_SESSION_ERROR from './NO_SESSION_ERROR.js'
import LIMIT_EXCEEDED_ERROR from './LIMIT_EXCEEDED_ERROR.js'
import LOGIN from './LOGIN.js'
import LOGOUT_ERROR from './LOGOUT_ERROR.js'
import GENERIC_ERROR from './GENERIC_ERROR.js'
import GENERIC_404 from './GENERIC_404.js'
import SEND_MFA_SMS_ERROR from './SEND_MFA_SMS_ERROR.js'
import SEND_MFA_EMAIL_ERROR from './SEND_MFA_EMAIL_ERROR.js'
import INVITE_USER_1 from './INVITE_USER_1.js'
import INVITE_USER_2 from './INVITE_USER_2.js'
import INVITE_USER_3 from './INVITE_USER_3.js'
import INVITE_USER_ERROR from './INVITE_USER_ERROR.js'
import INVITE_USER_CONFIRM from './INVITE_USER_CONFIRM.js'
import ONBOARDING_PROFILE from './ONBOARDING_PROFILE.js'
import ONBOARDING_PWD from './ONBOARDING_PWD.js'
import ONBOARDING_ERROR from './ONBOARDING_ERROR.js'
import EMAIL_CONSENT from './EMAIL_CONSENT.js'
import CHANGE_CONSENT_UPDATES from './CHANGE_CONSENT_UPDATES.js'
import CHANGE_CONSENT_MARKETING from './CHANGE_CONSENT_MARKETING.js'
import UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION from './UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION.js'
import UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION from './UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION.js'
import SCRS_EXISTING_USER from './SCRS_EXISTING_USER.js'

import contentTokens from '../lang/content-tokens.json'
import log from '../log'

const getStage = (stage, lang) => {
  const stages = {
    CH_LOGIN_1,
    CH_LOGIN_4,
    EWF_LOGIN_1,
    EWF_PROFILE,
    EWF_LOGIN_2,
    EWF_LOGIN_3,
    EWF_LOGIN_4,
    EWF_LOGIN_5,
    EWF_LOGIN_OTP_METHOD,
    EWF_LOGIN_OTP,
    EMAIL_CONSENT,
    PHONE_OTP,
    LOGIN_MFA,
    REGISTRATION_1,
    REGISTRATION_MFA,
    REGISTRATION_2,
    REGISTRATION_3,
    REGISTRATION_4,
    REGISTRATION_ERROR,
    REGISTRATION_RESEND,
    RESET_PASSWORD_1,
    RESET_PASSWORD_2,
    RESET_PASSWORD_3,
    RESET_PASSWORD_4,
    RESET_PASSWORD_5,
    RESET_PASSWORD_6,
    REMOVE_USER_CONFIRM,
    REMOVE_AUTHZ_USER_ERROR,
    REMOVAL_CONFIRMATION,
    RESET_PASSWORD_ERROR,
    COMPANY_ASSOCIATION_1,
    COMPANY_ASSOCIATION_2,
    COMPANY_ASSOCIATION_3,
    COMPANY_ASSOCIATION_4,
    REQUEST_AUTH_CODE,
    CHANGE_PASSWORD_1,
    CHANGE_PASSWORD_2,
    CHANGE_NAME_1,
    CHANGE_NAME_2,
    CHANGE_EMAIL_1,
    CHANGE_EMAIL_ERROR,
    CHANGE_EMAIL_INPUT,
    UPDATE_PHONE_1,
    UPDATE_PHONE_2,
    UPDATE_PHONE_3,
    HOME_OVERVIEW,
    HOME_MANAGE_ACCOUNT,
    HOME_YOUR_COMPANIES,
    HOME_NOTIFICATIONS,
    HOME_AUTHORISED_PERSON,
    NO_SESSION_ERROR,
    LIMIT_EXCEEDED_ERROR,
    LOGOUT_ERROR,
    LOGIN,
    ONBOARDING_ERROR,
    ONBOARDING_PWD,
    ONBOARDING_PROFILE,
    GENERIC_ERROR,
    GENERIC_404,
    SEND_MFA_SMS_ERROR,
    SEND_MFA_EMAIL_ERROR,
    INVITE_USER_1,
    INVITE_USER_2,
    INVITE_USER_3,
    INVITE_USER_ERROR,
    INVITE_USER_CONFIRM,
    CHANGE_CONSENT_UPDATES,
    CHANGE_CONSENT_MARKETING,
    UPDATE_EMAIL_UPDATES_CONSENT_CONFIRMATION,
    UPDATE_EMAIL_MARKETING_CONSENT_CONFIRMATION,
    SCRS_EXISTING_USER
  }

  const tokens = (key) => {
    const token = contentTokens[key] && contentTokens[key][lang]
    if (!token) {
      log.warn('Missing content token: ' + key)
      return ''
    }
    return token
  }

  return stages[stage](lang, tokens)
}

export default getStage
