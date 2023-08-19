import {Dimensions, Platform} from 'react-native'

const DESIGN_WIDTH = 375
const DESIGN_HEIGHT = 812
const {width, height} = Dimensions.get('window')

function responsiveWidth(value = 0) {
  return (width * value) / DESIGN_WIDTH
}

function responsiveHeight(value = 0) {
  return (height * value) / DESIGN_HEIGHT
}

function responsiveFont(value = 0) {
  return (width * value) / DESIGN_WIDTH
}

const isIOS = Platform.OS === 'ios'

const shadow = {
  shadowColor: '#000',
  shadowRadius: 5,
  elevation: 5,
  shadowOpacity: 0.2,
  shadowOffset: {width: 0, height: 3},
}
const hitSlop = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10,
}

const metrics = {
  // Devices
  deviceWidth: width,
  deviceHeight: height,

  // Text Size
  title: responsiveFont(20),
  span: responsiveFont(14),

  // spacing
  zero: responsiveHeight(0),
  smallest: responsiveHeight(1),
  mini: responsiveHeight(2),
  puny: responsiveHeight(3),
  tiny: responsiveHeight(4),
  little: responsiveHeight(5),
  teeny: responsiveHeight(6),
  xxs: responsiveHeight(8),
  xs: responsiveHeight(10),
  s: responsiveHeight(12),
  narrow: responsiveHeight(13),
  smaller: responsiveHeight(14),
  diminutive: responsiveHeight(15),
  small: responsiveHeight(16),
  sMedium: responsiveHeight(18),
  medium: responsiveHeight(20),
  sLarge: responsiveHeight(22),
  large: responsiveHeight(24),
  x: responsiveHeight(25),
  xx: responsiveHeight(26),
  xl: responsiveHeight(28),
  xLarge: responsiveHeight(30),
  xxl: responsiveHeight(32),
  xxxl: responsiveHeight(34),
  average: responsiveHeight(36),
  huge: responsiveHeight(40),
  xHuge: responsiveHeight(42),
  enormous: responsiveHeight(44),
  gigantic: responsiveHeight(48),
  vast: responsiveHeight(50),
  ginormous: responsiveHeight(56),
  sMassive: responsiveHeight(60),
  massive: responsiveHeight(64),
  lMassive: responsiveHeight(80),
  xlMassive: responsiveHeight(90),
  norm: responsiveHeight(100),
  hefty: responsiveHeight(120),
  heavy: responsiveHeight(117),

  // height
  heightMedium: responsiveHeight(44),
  heightsLarge: responsiveHeight(140),
  heightSLarge: responsiveHeight(132),
  heightLarge: responsiveHeight(144),
  heightXLarge: responsiveHeight(160),
  workspaceItem: responsiveHeight(76),
  heightGiant: responsiveHeight(170),
  heightEnormous: responsiveHeight(211),
  heightGigantic: responsiveHeight(240),

  // width
  smallWidth: responsiveWidth(7),
  sMediumWidth: responsiveWidth(87),
  mMediumWidth: responsiveWidth(90),
  xMediumWidth: responsiveWidth(117),
  normWidth: responsiveWidth(100),
  mediumWidth: responsiveWidth(135),
  textInputWidth: responsiveWidth(315),
  descWidth: responsiveWidth(300),
  language: responsiveWidth(84),
  deleteAccountWidth: responsiveHeight(220),

  // border
  borderRadius: responsiveHeight(6),
  borderWidth: responsiveHeight(1),
  borderRadiusTextInput: responsiveHeight(8),
  borderRadiusWorkspace: responsiveHeight(12),

  // image & icon
  logoWidth: responsiveWidth(300),
  logoHeight: responsiveHeight(70),
  lexiAvatarWidth: responsiveWidth(110),
  lexiAvatarHeight: responsiveHeight(120),
  registerAvatar: responsiveHeight(144),
  baseCropAvatarSize: responsiveWidth(400),
  deskImage: responsiveWidth(200),
}

const fontSizes = {
  tiny: responsiveFont(11),
  small: responsiveFont(12),
  petty: responsiveFont(13),
  span: responsiveFont(14),
  medium: responsiveFont(15),
  lMedium: responsiveFont(16),
  large: responsiveFont(18),
  xLarge: responsiveFont(23),
  title: responsiveFont(20),
  H2: responsiveFont(32),
  H3: responsiveFont(24),
  H4: responsiveFont(20),
  H5: responsiveFont(20),
  H6: responsiveFont(18),
  caption: responsiveFont(12),
  subTitle1: responsiveFont(16),
  subTitle2: responsiveFont(14),
  body: responsiveFont(14),
  body1: responsiveFont(16),
  body2: responsiveFont(14),
  overLine: responsiveFont(12),
  hug: responsiveFont(40),
  supperHug: responsiveFont(72),
}
const lineHeights = {
  small: responsiveFont(fontSizes.small * 1.5),
  H2: responsiveFont(fontSizes.H2 * 1.313), // 42/32
  H3: responsiveFont(fontSizes.H3 * 1.5), // 36/24
  H4: responsiveFont(fontSizes.H4 * 1.5), // 30/20
  H5: responsiveFont(fontSizes.H5 * 1.4), // 28/20
  H6: responsiveFont(fontSizes.H6 * 1.444), // 26/18
  caption: responsiveFont(fontSizes.caption * 1.5), //18/12
  subTitle1: responsiveFont(fontSizes.subTitle1 * 1.5), // 24 /16
  subTitle2: responsiveFont(fontSizes.subTitle2 * 1.571), // 22/14
  body: responsiveFont(fontSizes.body * 1.428), //20/14
  body1: responsiveFont(fontSizes.body1 * 1.5), // 24/16
  body2: responsiveFont(fontSizes.body2 * 1.571), // 22/14
  overLine: responsiveFont(fontSizes.overLine * 1.5), //18/12
}

export {
  metrics,
  fontSizes,
  lineHeights,
  isIOS,
  shadow,
  hitSlop,
  responsiveFont,
  responsiveHeight,
  responsiveWidth,
}
