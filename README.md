
# npx-card

```sh
$ npx geekyorion
```
> Generate your own `npx <your_username>` card easily with provided configurations. 😃
> [Fork](https://github.com/geekyorion/geekyorion-npx-card/fork) & get started and leave a star ⭐ to this repo

**NOTE**: Do not install this package as a global package i.e. **`npm -g geekyorion`**. Always use **`npx geekyorion`** to view the card as this package won't be used as any other command

---

## available scripts

- **build**: to build the output (entry point for the script: `src/index.js`)
- **view**: to view the output (entry point for the script: `src/card.js`)
- **prepublish**: runs before the `npm publish` command to generate the build

---

### files:

| file name              |      path   |  usage                                                      |
|------------------------|-------------|-------------------------------------------------------------|
| index.js               | src/        | entry point file / to generate the output                   |
| card.js                | src/        | to read the output                                          |
| boxen.config.js        | src/config/ | boxen color, bgColor, style, etc configuration              |
| chalk.config.js        | src/config/ | chalk configuration for various methods                     |
| io.config.js           | src/config/ | io provide the path of output file                          |
| boxUI.js               | src/user/   | boxen js user defined UI options                            |
| data.js                | src/user/   | user data with configuration                                |
| createConsoleString.js | src/utils/  | creates the console string which need to be saved as output |
| io.js                  | src/utils/  | to read and write the file to the output location           |
| output                 | bin/        | output file which needs to be displayed                     |

---

## config files:

- `boxen.config.js`: provides the various colors, styles, text aligns and box styles parameters.
  - ___exports___: This file exports four objects:
    - `BOXEN_COLOR`: BLACK, RED, GREEN, etc...
    - `BORDER_STYLE`: TOPLEFT, TOP, TOPRIGHT, RIGHT, BOTTOMRIGHT, BOTTOM, BOTTOMLEFT, LEFT
    - `TEXTALIGN`: LEFT, RIGHT, CENTER
    - `BOX_STYLE`: SINGLE, DOUBLE, ROUND, BOLD, SINGLEDOUBLE, DOUBLESINGLE, CLASSIC, ARROW
  - ___usage___: for complete usage and for more example please visit [BoxenJS](https://www.npmjs.com/package/boxen)
  ```js
  import {
    BOXEN_COLOR,
    BORDER_STYLE,
    TEXTALIGN,
    BOX_STYLE
  } from './config/boxen.config.js' // use relative path here to your file

  // use these while creating boxUI.js or while using boxen() method

  BOXEN_COLOR.RED     // to provide color to the box
  BOXEN_STYLE.ROUND   // to provide border style to the box
  TEXTALIGN.RIGHT     // to provide the text align in the box
  BORDER_STYLE.TOP    // to provide custom deign to the box
  ```
- `chalk.config.js`: It provides colors, background colors, Modifiers and color methods for custom color.
  - ___exports___: This file exports four objects
    - `COLORS`: colors methods
    - `BGCOLORS`: background color methods
    - `MODIFIERS`: style modifiers for the text
    - `COLORMETHODS`: methods to provide the custom colors / user defined colors
  - ___usages___: for complete usage and for more example please visit [ChalkJS](https://www.npmjs.com/package/chalk)
  ```js
  import {
    COLORS,
    BGCOLORS,
    MODIFIERS,
    COLORMETHODS
  } from './config/chalk.config.js'; // use relative path here to your file

  // use these methods in data.js file or with chalk library
  COLORS.blue         // provide color to the text
  BGCOLORS.white      // provide background color to the text
  MODIFIERS.bold      // provide styles to the text
  COLORMETHODS.rgb    // use method to provide custom colors for both text color and text background color
  ```
- `io.config.js`: provide the `__dirname` functionality to the ES modules to generate output correctly
---

## How to publish your own card:

- fork/clone this repo
- change the data in `src/user/data.js` file
- login to your npm account using `npm login`
- publish this to npm using `npm publish`
- udpate the package version using below commands
  - ___patch___: `npm version patch` to update last version number v1.0.**1**
  - ___minor___: `npm version minor` to update middle version number v1.**1**.0
  - ___major___: `npm version major` to update the first version number v**2**.0.0

---

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2012 Shashank Sharma (geekyorion)
