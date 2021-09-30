const colors = {
  olive1: '#A19D45',
  olive2: '#ADAA69',
  olive3: '#979215',

  white1: '#FFFFFF',
  white2: '#F3F3F2',
  white3: 'rgba(255,255,255,0.66)',
  white4: 'rgba(216,216,216,0.3)',

  black1: '#000000',
  black2: '#1A1A1A',
  black3: '#545454',
  black4: 'rgba(0,0,0,0.87)',
  black5: 'rgba(0,0,0,0.56)',
  black6: 'rgba(0,0,0,0.61)',
  black7: 'rgba(0,0,0,0.05)',
  black8: 'rgba(255,255,255,0.07)',
  black9: '#363636',
  black10: 'rgba(0,0,0,0.11)',
  black11: '#2E2E2E',
  black12: 'rgba(0,0,0,0.75)',
  black13: 'rgba(0,0,0,0.55)',
  black14: 'rgba(0,0,0,0.14)',
  black15: 'rgba(0,0,0,0.4)',
  blackOpacity90: 'rgba(0,0,0,0.9)',
  transparent: 'transparent',

  red1: '#E33134',
  red2: '#E0594A',
  red3: '#EB3F42',

  pink1: '#F1637B',
  pink2: '#A6248A',
  pink3: '#7D286B',
  pink4: '#ffb6c1',

  grey1: '#808080',
  grey2: 'rgba(91,37,31,0.2)',
  grey3: '#C0C0C0',
  grey4: '#AFAFAF',
  grey5: '#8F8E94',
  grey6: 'rgba(0,0,0,0.1)',
  grey7: '#D8D8D8',
  grey8: '#686866',
  grey9: '#EFEFEF',
  grey10: '#4A4A4A',
  grey11: '#8C8D8D',
  grey12: '#E3E3E3',
  grey13: '#737373',
  grey14: '#E6E6E3',
  grey15: '#9F9F9F',
  blue1: '#3E5F97',
  blue2: '#0757DB',

  green1: '#5DC700',
  green2: '#91D961',

  orange1: '#E39B03',
  yellow1: '#FAE215',

  purple1: '#353B50',

  primary: '#87ceeb',
  facebookcolor: '#3B5999',
  secondry: '#2c385e',
};

const commonColors = () => {
  const color = {
    themeColor: colors.black2,
  };

  return color;
};

const colorCodes = {
  FgBlack: '\x1b[30m\x1b[1m%s\x1b[0m',
  FgRed: '\x1b[31m\x1b[1m%s\x1b[0m',
  FgGreen: '\x1b[32m\x1b[1m%s\x1b[0m',
  FgYellow: '\x1b[33m\x1b[1m%s\x1b[0m',
  FgBlue: '\x1b[34m\x1b[1m%s\x1b[0m',
  FgMagenta: '\x1b[35m\x1b[1m%s\x1b[0m',
  FgCyan: '\x1b[36m\x1b[1m%s\x1b[0m',
  FgWhite: '\x1b[37m\x1b[1m%s\x1b[0m',

  BgBlack: '\x1b[40m%s\x1b[0m',
  BgRed: '\x1b[41m%s\x1b[0m',
  BgGreen: '\x1b[42m%s\x1b[0m',
  BgYellow: '\x1b[43m%s\x1b[0m',
  BgBlue: '\x1b[44m%s\x1b[0m',
  BgMagenta: '\x1b[45m%s\x1b[0m',
  BgCyan: '\x1b[46m%s\x1b[0m',
  BgWhite: '\x1b[47m%s\x1b[0m',
};

export {colors, colorCodes, commonColors};
