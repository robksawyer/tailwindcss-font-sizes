/**
 * TailwindCSS Font Sizes
 * Generates font sizes in ems
 * @file index.js
 */
const plugin = require('tailwindcss/plugin')
const _ = require('lodash')
// const selectorParser = require('postcss-selector-parser')

let fontBaseSize = 14
/**
 * convertPxToEms
 * Handles converting the px to ems
 * @param {int} val is the value to be calculated
 * @param {int} baseSize is base size to base the calculations from
 */
const convertPxToEms = (val, baseSize = 14) => `${val / baseSize}em;`

/**
 * @param {int} totalSizes is the total number of fonts to generate
 * @param {int} fontBaseSize is font base size to start the calculations from
 * @param {int} startingValue is the starting value (or the font sizes to skip)
 *                            ex. Not typically important to have a font size of 1px
 * @return {object} is the sizes
 */
function getFontSizes(totalSizes = 250, fontBaseSize = 14, startingValue = 8) {
  // The following generates an array of increasing values from the totalSizes above.
  const fontSizeArray = Array.from(Array(startingValue + totalSizes + 1).keys())
  const fontSizeArraySliced = fontSizeArray.slice(
    startingValue,
    fontSizeArray.length
  )
  // Traverse the array and generate font sizes in ems based on the base pixel value.
  const sizes = fontSizeArraySliced.map((i, x) =>
    convertPxToEms(x, fontBaseSize)
  )
  const sizeObj = Object.assign({}, sizes)
  return sizeObj
}

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, e, variants, theme }) {
      // ...
    }
  },
  function (options) {
    // Font Sizes
    // Option defaults
    // {
    //    total: 250,
    //    startingSize: 8,
    //    baseSize: 14
    // }
    const fontSizes = getFontSizes(
      (options && options.total) || 250,
      (options && options.baseSize) || fontBaseSize,
      (options && options.startingSize) || 8
    )
    return {
      theme: {
        // fontSizes: {
        extend: {
          fontSize: {
            ...fontSizes,
          },
        },
      },
      // variants: {
      //   fontSizes: [],
      // },
    }
  }
)
