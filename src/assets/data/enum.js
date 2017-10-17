import { TweenMax, Bounce, Power3 } from 'gsap';

import PHONE_EXTENSIONS from './phone_extensions';
import SPORTS from './sports';
import STEPS_MENU from './steps_menu';
import TOUR_CHART from './tour_chart';

export const TOUR = {
  BRAND: {
    STEPS: {
      ICONS: STEPS_MENU,
    },
    SLOGAN: ['COMMUNICATE WITH ENGAGED COMMUNITIES WITH', 'ORIGINAL SOCIAL MEDIA SPONSORSHIPS'],
    ACTION: [{
      IMG: 'assets/img/tour/action/discover.png',
      TITLE: 'Discover inspiring athletes and teams',
      DESCRIPTION: `
        Search and select the right athletes and teams to sponsor,
        based on common values and your target audience.
        There are hundreds to choose from and more joining every day...`,
      SLOGAN: 'Discover inspiring athletes and teams',
      IMG_DETAIL: 'assets/img/tour/brand/discover.png',
    }, {
      IMG: 'assets/img/tour/action/choose.png',
      TITLE: 'Choose flexible sponsorship packages',
      DESCRIPTION: `
        For your prefered athletes and teams, select the sponsorship package that suits your needs.
        If the packages do not exactly match what you want, you can discuss this later with the athlete...`,
      SLOGAN: 'Choose flexible sponsorship packages',
      IMG_DETAIL: 'assets/img/tour/brand/choose.png',
    }, {
      IMG: 'assets/img/tour/action/reach.png',
      TITLE: 'Reach large targeted audiences and communities',
      DESCRIPTION: `Engage with large targeted audiences through the social media
         of your selected athletes and teams, and reach engaged communities.
         You’ll be amazed at the results… advocacy is very powerful.`,
      SLOGAN: 'Reach large targeted audiences and communities',
      IMG_DETAIL: 'assets/img/tour/brand/reach.png',
    }, {
      IMG: 'assets/img/tour/action/measure.png',
      TITLE: 'Measure the impact and results',
      DESCRIPTION: `Measure the impact of your digital sponsorship and make decisions to
        improve the results. Everything in digital is measurable, so make the best use
        of the analysis to optimise campaigns.`,
      SLOGAN: 'Measure the impact and results',
      IMG_DETAIL: 'assets/img/tour/brand/measure.png',
    }],
  },
  'MARKETING AGENT': {

  },
  ATHLETE: {

  },
  SIGNUP: {
    SLOGAN: 'Create your free account now and start benefiting from digital sport sponsorships',
    BUTTON: 'Sign up here',
  },
};

export const TEXT = {
  SLOGAN: {
    TITLE: 'The place for digital sport sponsorships',
    EXPLANATION: `With Sportskred, marketers can create campaigns
      with inspiring athletes and teams to reach new consumers
      in an organic and engaging way.`,
  },
  TEAM: {
    TITLE: 'The Sportskred Team',
    EXPLANATION: `We are a European-based creative and commercial team with the mission
      to empower inspiring athletes to get the support they need to achieve
      their maximum potential,
      while providing marketers with the opportunity to reach and engage
      with their target audiences.`,
  },
  WHY: {
    TITLE: 'Why Sportskred',
    EXPLANATION: `Sportskred makes it easier for marketers to communicate with their target audience
      in an authentic and scalable way. Marketers can identify and connect with
      the right athletes to work on each individual campaign, with analytics
      that provide direct insights to the reachable audiences.`,
  },
  HOW: {
    TITLE: 'How do we do it?',
    EXPLANATION: `With our digital marketplace, marketers and athletes can connect and work
      hand in hand to reach very large audiences.
      Our athletes have already created meaningful relationships with their fans
      by generating high value content on their social media channels.
      Sportskred gives brands and advertisers the opportunity to communicate with
      a highly engaged and relevant audience, through admired and trusted athletes.
      By increasing awareness and creating engagement across the internet,
      Sportskred is able to drive the targeted audiences to action.`,
  },
  ROLE: {
    TITLE: 'Choose your role',
  },
  PP: {
    TITLE: 'Privacy Policy',
  },
  TOU: {
    TITLE: 'Terms of Use',
  },
  TOUR: {
    TITLE: 'Feature Tour',
  },
  RESET: {
    TITLE: 'Forgot Password?',
    BUTTON: {
      OK: 'Submit',
      CANCEL: 'Dismiss',
    },
  },
  COPYRIGHT: '© Sportskred',
  SIGN_UP: {
    TITLE: 'Sign Up',
    CONSENT: {
      PREFIX: 'By signing up you agree to our ',
      LINK: 'Terms of Use',
      SUFFIX: '.',
    },
    LOG_IN: {
      PREFIX: 'Already have an account? ',
      LINK: 'Log In',
      SUFFIX: '.',
    },
    BUTTON: {
      CANCEL: 'Cancel',
      LINK: 'Log In',
      OK: 'Sign Up',
    },
  },
  LOG_IN: {
    TITLE: 'Log In',
    BUTTON: {
      CANCEL: 'Cancel',
      OK: 'Log In',
    },
    SIGN_UP: {
      PREFIX: 'Don\'t have an account? ',
      LINK: 'Sign Up',
      SUFFIX: '.',
    },
  },
  SNACKBAR: {
    BUTTON: {
      BACK: 'Back',
    },
  },
};

export const VIDEO = {
  CODE: 'sHFqNYYjogY',
  POSTER: 'assets/video/poster_3.png',
  PROVIDER: 'youtube',
};

export const VIDEO_ICONS = [
  {
    AVATAR: 'assets/video/avatar_1.png',
    CODE: 'H0cg6hcKL7I',
    POSTER: 'assets/video/poster_1.png',
    PROVIDER: 'youtube',
  },
  {
    AVATAR: 'assets/video/avatar_2.png',
    CODE: 'bTImyy0fl5U',
    POSTER: 'assets/video/poster_2.png',
    PROVIDER: 'youtube',
  },
  {
    AVATAR: 'assets/video/avatar_3.png',
    CODE: 'gltP7MBDo9o',
    POSTER: 'assets/video/poster_3.png',
    PROVIDER: 'youtube',
  }
];

export const LINKS = {
  SOCIAL: {
    FACEBOOK: 'https://www.facebook.com/sportskred',
    YOUTUBE: 'https://www.youtube.com/channel/UCze7ro8HeJnl-YoroW2vbcg',
    INSTAGRAM: 'https://www.instagram.com/sportskred/',
    TWITTER: 'https://twitter.com/sportskred',
  },
  LEGAL: {
    TERMS_OF_USE: 'terms',
    PRIVACY_POLICY: 'privacy',
  },
  TOUR: 'tour',
  LANDING: 'landing',
};

export const IMG = {
  TEAM: 'assets/img/team_poster.png',
  LOGO: 'assets/img/logo_large_white.png',
  DYNAMICLOGO: {
    PREFIX: 'assets/img/logo_inner_',
    SUFFIX: '.png',
  },
  TOUR: {
    ACTION: 'assets/img/tour/img_in_action.png',
  },
};

export const ACTION = {
  DIMMER: {
    SIGN_UP: 'SIGN UP',
    TERMS_OF_USE: 'TERMS OF USE',
    LOG_IN: 'LOG IN',
    RESET: 'RESET',
    OFF: '',
  },
  ROLE: 'UPSERT_ROLE',
  UNDO: {
    ENABLE: 'ENABLE_UNDO_HISTORY',
    DISABLE: 'DISABLE_UNDO_HISTORY',
  },
};

export const ROLE = {
  BRAND: {
    name: 'BRAND',
    title: 'Brand',
    icon: 'trademark',
  },
  'MARKETING AGENT': {
    name: 'MARKETING AGENT',
    title: 'Marketing Agent',
    icon: 'vcard',
  },
  TEAM: {
    name: 'TEAM',
    title: 'Team',
    icon: 'users',
  },
  ATHLETE: {
    name: 'ATHLETE',
    title: 'Athlete',
    icon: 'soccer',
  },
  'SPORT AGENT': {
    name: 'SPORT AGENT',
    title: 'Sport Agent',
    icon: 'vcard outline',
  },
};

export const ANIMATION = {
  STD: {
    REVEAL: 'fade',
    BUTTON: 'vertical',
  },
  DURATION: {
    XXFAST: 0.1,
    XFAST: 0.2,
    FAST: 0.3,
    MEDIUM: 0.5,
    SLOW: 1,
    XSLOW: 2,
  },

};

export const DATA = {
  CHART: [
    { name: 'facebook', avg: 23784, 'Antonio Rodriguez': 9743, 'Sonia Ellinger': 19304, 'Simon Mayfair': 39048, 'Chris Nadal': 27040, amt: 50000 },
    { name: 'youtube', avg: 4883, 'Antonio Rodriguez': 3499, 'Sonia Ellinger': 594, 'Simon Mayfair': 5947, 'Chris Nadal': 9490, amt: 10000 },
    { name: 'instagram', avg: 12481, 'Antonio Rodriguez': 24937, 'Sonia Ellinger': 499, 'Simon Mayfair': 14094, 'Chris Nadal': 10394, amt: 15000 },
    { name: 'twitter', avg: 4564, 'Antonio Rodriguez': 0, 'Sonia Ellinger': 12949, 'Simon Mayfair': 979, 'Chris Nadal': 4327, amt: 15000 },
  ],
  PHONE_EXTENSIONS,
  SPORTS,
  STEPS_MENU,
  TOUR: {
    BRAND: TOUR_CHART,
  },
};

export const COLOR = {
  FACEBOOK: '#4267b2',
  YOUTUBE: '#ff0000',
  INSTAGRAM: '#A536B9',
  TWITTER: '#1DA1F2',
  BRAND: '#009F3D',
  ATHLETE: '#0085C7',
  TEAM: '#DF0024',
  MARKETINGAGENT: '#F4C300',
  AVG: '#E16224',
  TRANSPARENCY: 0.3,
};

export const INTRO = {
  SLOGAN: [
    {
      letters: 'REACH',
      style: {
        transform: 'translate(-36deg)',
      },
      animationSource: (target) => {
        TweenMax.staggerFromTo(
          target,
          ANIMATION.DURATION.FAST,
          { 'font-size': 0 },
          { 'font-size': '5rem', ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
        setTimeout(() => {
          TweenMax.staggerTo(
            target,
            ANIMATION.DURATION.MEDIUM,
            {
              opacity: 0,
            },
            ANIMATION.DURATION.XXFAST,
          );
        }, ANIMATION.DURATION.MEDIUM * 7 * 1000)
      },
    }, {
      letters: 'M1LL10NS',
      style: {
        animation: 'pulse 1s infinite',
      },
      animationSource: (target) => {
        TweenMax.staggerFromTo(
          target,
          ANIMATION.DURATION.MEDIUM,
          { 'font-size': 0 },
          { 'font-size': '7rem', ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
        setTimeout(() => {
          TweenMax.staggerTo(
            target,
            ANIMATION.DURATION.MEDIUM,
            {
              opacity: 0,
            },
            ANIMATION.DURATION.XXFAST,
          );
        }, ANIMATION.DURATION.MEDIUM * 6.5 * 1000)
      },
    }, {
      letters: 'of EYES',
      style: {
        textDecoration: 'underline',
        fontWeight: 'bold',
      },
      animationSource: (target) => {
        TweenMax.staggerFromTo(
          target,
          ANIMATION.DURATION.MEDIUM,
          { 'font-size': 0 },
          { 'font-size': '6rem', ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
        setTimeout(() => {
          TweenMax.staggerTo(
            target,
            ANIMATION.DURATION.MEDIUM,
            {
              opacity: 0,
            },
            ANIMATION.DURATION.XXFAST,
          );
        }, ANIMATION.DURATION.MEDIUM * 6 * 1000)
      },
    }, {
      letters: 'with',
      style: {
        transform: 'translateZ(-36deg)',
      },
      animationSource: (target) => {
        TweenMax.staggerFromTo(
          target,
          ANIMATION.DURATION.MEDIUM,
          { 'font-size': 0 },
          { 'font-size': '3rem', ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
        setTimeout(() => {
          TweenMax.staggerTo(
            target,
            ANIMATION.DURATION.MEDIUM,
            {
              opacity: 0,
            },
            ANIMATION.DURATION.XXFAST,
          );
        }, ANIMATION.DURATION.MEDIUM * 5.5 * 1000)
      },
    }, {
      letters: 'SPORTS',
      style: {},
      animationSource: (target) => {
        TweenMax.staggerFromTo(
          target,
          ANIMATION.DURATION.MEDIUM,
          { 'font-size': 0 },
          { 'font-size': '6rem', ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
        setTimeout(() => {
          TweenMax.staggerTo(
            target,
            ANIMATION.DURATION.MEDIUM,
            {
              opacity: 0,
            },
            ANIMATION.DURATION.XXFAST,
          );
        }, ANIMATION.DURATION.MEDIUM * 4.5 * 1000)
      },
    }, {
      letters: 'SPONSORSHIPS',
      style: {},
      animationSource: (target, callback) => {
        TweenMax.staggerFromTo(
          target,
          ANIMATION.DURATION.MEDIUM,
          { 'font-size': 0 },
          { 'font-size': '6rem', ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
        setTimeout(() => {
          TweenMax.staggerTo(
            target,
            ANIMATION.DURATION.MEDIUM,
            {
              opacity: 0,
            },
            ANIMATION.DURATION.XXFAST,
            callback,
          );
        }, ANIMATION.DURATION.MEDIUM * 3.5 * 1000)
      },
    },
  ],
  IMAGES: {
    ATHLETES: {
      path: 'assets/img/photoreel/athletes/',
      src: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'],
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
      },
      animationSource: (target) => {
        TweenMax.fromTo(
          target,
          ANIMATION.DURATION.FAST,
          { scale: 0, rotation: 0 },
          { scale: (0.5 + Math.random()), rotation: (Math.random() * 30 - 15), ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
      },
    },
    BRANDS: {
      path: 'assets/img/photoreel/brands/',
      src: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'],
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
      },
      animationSource: (target) => {
        TweenMax.fromTo(
          target,
          ANIMATION.DURATION.FAST,
          { scale: 0, rotation: 0 },
          { scale: (0.5 + Math.random()), rotation: (Math.random() * 30 - 15), ease: Power3.easeOut },
          ANIMATION.DURATION.XXFAST,
        );
      },
    },
  },
}
