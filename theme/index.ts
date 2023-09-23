const baseColor = {
  primary: '#7239E5',
  primaryWarning: '#FF860D',
  lightPrimary: '#E3D4FF',
  secondary: '#FFBB33',
  backgroundPrimary: '#F5F2F1',
  backgroundSecondary: '#D1D1D1',
  dark: '#000000',
  dark100: '#263238',
  lightDark: '#4E5969',
  black: '#1F1F1F',
  lightBlack: '#9F99AD',
  white: '#ffffff',
  grey: '#8A86987A',
  gray: '#8A8698',
  lightGray: '#E5E7EB',
  lightGreen: '#BDF0D7',
  lightGrey: '#E5E5EA',
  lightBlueMagenta: '#CAC4D8',
  extraLightGray: '#EDEBF4',
  red: '#ff0009',
  lightRed: '#FCEDED',
  warningLight: '#FFB265',
  extraLightPurple: '#AFA9BE',
  success: '#0BB05D',
  error: '#F03D5B',
  bubbleMessage: '#FAF9FC',
  lightGraySearchBar: '#CECAD5',
  grey100: '#F7F6FA',
  grey900: '#131019',
  grey300: '#E3DFEC',
  grey400: '#F3F5F6',
  dark500: '1D2129',
  neutral: '#6B7280',
  neutralDark: '#271F37',
  greyBackground: '#8A869814',
  blue: '#3F8BE2',
  borderGrey: '#D1D5DB',
  splashprimary: '#3D1390',
  splashDark: '#211948',
  engagementIntro: '#3D1390',
  engagementIntroRadiant: '#211948',
  engagementYellow: '#FEF9F0',
  engagementIntruction: '#FFD166',
}
const textColor = {
  primaryText: '#231F2E',
  disabledText: '#9F99AD',
  secondaryText: '#605973',
  whiteText: '#FFFFFF',
  greyText: '#251F2D',
  lightGreyText: '#707075',
  contrastText: '#FAF8FF',
  redErrorText: '#F03D5B',
  textInputBorder: '#CAC4D8',
}

const colors = {
  ...baseColor,
  ...textColor,
}

const getColorOpacity = (color: string, opacity?: number) => {
  if (opacity && opacity >= 0 && opacity <= 1 && color.includes('#')) {
    const hexValue = Math.round(opacity * 255).toString(16)
    return `${color.slice(0, 7)}${hexValue.padStart(2, '0').toUpperCase()}`
  }
  return color
}

export {colors, getColorOpacity}
