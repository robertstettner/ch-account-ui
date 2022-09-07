import log from '../services/log'

export const matomoHelper = (data) => {
  const eventKeys = ['type', 'category', 'action', 'name', 'value']

  const finalMatomoData = cleanAnalytics(data).reduce((finalMatomoData, field, index) => {
    finalMatomoData[eventKeys[index]] = field
    return finalMatomoData
  }, {})

  return finalMatomoData
}

export const cleanAnalytics = (matomo) => {

  const patterns = [
    'company.name', 
    'emailAddress', 
    'userDisplayName', 
    'user.email', 
    'company.inviter.displayName', 
    'companyNumber=[0-9A-Z]+',
    'companyName=[0-9a-zA-Z\s()%]+',
    'userName=[a-zA-Z\.]+%40[a-zA-Z\.]+[^%0-9]',
    'userName=[a-zA-Z\.].',
    'invitedUser=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]',
    'notifyId=[0-9a-zA-Z\-]+',
    'userId=[0-9a-zA-Z\-]+'

  ]

  const hashMap = {
    ['emailAddress']: '<emailAddress>',
    ['userDisplayName']: '<user>',
    ['user.email']: '<emailAddress>',
    ['company.inviter.displayName']: '<user>',
    ['companyNumber=[0-9A-Z]+']: '<companyNumber>',
    ['companyName=[0-9a-zA-Z\s()%]+']: '<companyName>',
    ['userName=[a-zA-Z\.].']: '<user>',
    ['userName=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]']: '<user>',
    ['invitedUser=[a-zA-z\.]+%40[a-zA-z\.]+[^%0-9]']: '<invitedUser>',
    ['notifyId=[0-9a-zA-Z\-]+']: '<notifyId>',
    ['userId=[0-9a-zA-Z\-]+']: '<userId>'
  }

  let updated = matomo.map((string) => {
    // check the string for matches
    let match = patterns.filter(pattern => {
      const re = new RegExp(pattern)
      return re.test(string)
    });

    let formatted = string

    log.debug("FORMATTED: ", match)

    if (match.length) {
      // we have more than one match
      match.forEach(currentMatch => {
        const re = new RegExp(currentMatch)
        formatted = typeof string == "string" ? formatted.replace(re, hashMap[currentMatch]) : string
      });
    }
    
    log.debug("FORMATTED: ", formatted)
    return formatted
  })
  return updated
}