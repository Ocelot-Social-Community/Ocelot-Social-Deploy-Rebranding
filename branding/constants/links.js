// this file is duplicated in `backend/src/config/links.js` and `webapp/constants/links.js` and replaced on rebranding by https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/tree/master/branding/constants/
export default {
  LANDING_PAGE: '/organization', // examples: '/login', '/registration', '/organization', or external 'https://ocelot.social'

  // you can find and store templates at https://github.com/Ocelot-Social-Community/Ocelot-Social-Deploy-Rebranding/tree/master/branding/templates/

  SUPPORT: 'https://sender.fm/support', // example for internal support page: 'https://staging.ocelot.social/support'. set a full URL please, because it is used in e-mails as well!

  // on null or empty strings internal pages are used, see 'webapp/locales/html/'
  ORGANIZATION: null,
  DONATE: null,
  IMPRINT: null,
  TERMS_AND_CONDITIONS: null,
  CODE_OF_CONDUCT: null,
  DATA_PRIVACY: null,
  FAQ: null,
}
