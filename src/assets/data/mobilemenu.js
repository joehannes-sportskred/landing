import { ACTION, LINKS } from './enum';

export default {
  HOME: [
    {
      ACTION: ACTION.DIMMER.LOG_IN,
      TITLE: "Log in",
      ICON: "sign in",
    },
    {
      ACTION: ACTION.DIMMER.SIGN_UP,
      TITLE: "Sign up",
      ICON: "signup",
    },
    {
      DIVIDER: true,
    },
    {
      ACTION: "BLOG",
      TITLE: "Blog",
      ICON: "newspaper",
    },
    {
      ACTION: "CONTACT_US",
      TITLE: "Contact Us",
      ICON: "mail",
    },
  ],
  ABOUT_US: [
    {
      ACTION: null,
      TITLE: "See 'Marketeer In Action'",
      ICON: "id badge",
      LINK: LINKS.INACTION.MARKETEER,
    },
    {
      ACTION: null,
      TITLE: "See 'Athlete In Action'",
      ICON: "soccer",
      LINK: LINKS.INACTION.ATHLETE,
    },
    {
      DIVIDER: true,
    },
    {
      ACTION: "PP",
      TITLE: "Privacy Policy",
      ICON: "spy",
      LINK: LINKS.LEGAL.PRIVACY_POLICY,
    },
    {
      ACTION: "TOU",
      TITLE: "Terms of Use",
      ICON: "law",
      LINK: LINKS.LEGAL.TERMS_OF_USE,
    },
  ],
}
