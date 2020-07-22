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
 * convertPxToRems
 * Handles converting the px to rems
 * @param {int} val is the value to be calculated
 * @param {int} baseSize is base size to base the calculations from
 */
const convertPxToRems = (val, baseSize = 14) => `${(1 / baseSize) * val}rem;`

/**
 * addPixels
 * Handles adding px font sizes
 * @param {int} val is the value to be calculated
 * @param {int} baseSize is base size to base the calculations from
 */
const addPixels = (val, baseSize = 14) => `${val}px;`

/**
 * @param {int} totalSizes is the total number of fonts to generate
 * @param {int} fontBaseSize is font base size to start the calculations from
 * @param {int} startingValue is the starting value (or the font sizes to skip)
 *                            ex. Not typically important to have a font size of 1px
 * @return {object} is the sizes
 */
function getFontSizes(
  totalSizes = 250,
  fontBaseSize = 14,
  startingValue = 8,
  format = 'em'
) {
  // The following generates an array of increasing values from the totalSizes above.
  const fontSizeArray = Array.from(Array(startingValue + totalSizes + 1).keys())
  const fontSizeArraySliced = fontSizeArray.slice(
    startingValue,
    fontSizeArray.length
  )
  // Traverse the array and generate font sizes in ems based on the base pixel value.
  let sizes
  switch (format) {
    case 'px':
      sizes = fontSizeArraySliced.map((i, x) => addPixels(x, fontBaseSize))
      break
    case 'em':
      sizes = fontSizeArraySliced.map((i, x) => convertPxToEms(x, fontBaseSize))
      break
    case 'rem':
      sizes = fontSizeArraySliced.map((i, x) =>
        convertPxToRems(x, fontBaseSize)
      )
      break
    default:
      sizes = fontSizeArraySliced.map((i, x) => convertPxToEms(x, fontBaseSize))
      break
  }

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
    //    format: 'em' // em, rem, px
    // }
    const fontSizes = getFontSizes(
      (options && options.total) || 250,
      (options && options.baseSize) || fontBaseSize,
      (options && options.startingSize) || 8,
      (options && options.format) || 'em'
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
