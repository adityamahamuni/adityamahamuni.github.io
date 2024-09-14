import ReactGA from 'react-ga4';

const trackingId = 'G-JWR50PCQ57';

export const initializeAnalytics = () => {
  ReactGA.initialize(trackingId);
};

export const logPageView = () => {
  ReactGA.send('pageview');
};
