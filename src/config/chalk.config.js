import chalk from 'chalk';
const {
  black, red, green, yellow, blue, magenta, cyan, white,
  gray, grey, blackBright, redBright, greenBright, yellowBright,
  blueBright, magentaBright, cyanBright, whiteBright,
  
  bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta,
  bgCyan, bgWhite, bgGray, bgGrey, bgBlackBright, bgRedBright,
  bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright,
  bgCyanBright, bgWhiteBright,

  reset, bold, dim, italic, underline, overline,
  inverse, hidden, strikethrough, visible,

  rgb, hex, ansi256, bgRgb, bgHex, bgAnsi256
} = chalk;

export const COLORS = {
  black, red, green, yellow, blue, magenta,
  cyan, white, gray, grey, blackBright, redBright,
  greenBright, yellowBright, blueBright, magentaBright,
  cyanBright, whiteBright
}

export const BGCOLORS = {
  bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta,
  bgCyan, bgWhite, bgGray, bgGrey, bgBlackBright, bgRedBright,
  bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright,
  bgCyanBright, bgWhiteBright
}

export const MODIFIERS = {
  reset, bold, dim, italic, underline, overline,
  inverse, hidden, strikethrough, visible
};

export const COLORMETHODS = {
  rgb, hex, ansi256, bgRgb, bgHex, bgAnsi256
}
