export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};

export const device = {
  min: {
    mobileS: `(min-width: ${size.mobileS + 1}px)`,
    mobileM: `(min-width: ${size.mobileM + 1}px)`,
    mobileL: `(min-width: ${size.mobileL + 1}px)`,
    tablet: `(min-width: ${size.tablet + 1}px)`,
    laptop: `(min-width: ${size.laptop + 1}px)`,
    laptopL: `(min-width: ${size.laptopL + 1}px)`,
    desktop: `(min-width: ${size.desktop + 1}px)`,
    desktopL: `(min-width: ${size.desktop + 1}px)`
  },
  max: {
    mobileM: `(max-width: ${size.mobileM}px)`,
    mobileS: `(max-width: ${size.mobileS}px)`,
    mobileL: `(max-width: ${size.mobileL}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    laptop: `(max-width: ${size.laptop}px)`,
    laptopL: `(max-width: ${size.laptopL}px)`,
    desktop: `(max-width: ${size.desktop}px)`,
    desktopL: `(max-width: ${size.desktop}px)`
  }
};
