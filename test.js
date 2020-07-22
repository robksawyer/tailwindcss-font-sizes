const _ = require('lodash')
const cssMatcher = require('jest-matcher-css')
const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

/**
 * generatePluginCss
 * Handles generating base tailwind css
 * @param {*} config
 * @param {array} pluginOptions are the options passed to the plugin
 * @return
 */
const generatePluginCss = (config, pluginOptions = []) => {
  return postcss(
    tailwindcss(
      _.merge(
        {
          theme: {
            fontSize: {},
          },
          variants: ['responsive'],
          corePlugins: [],
          plugins: [require('./index.js')()],
        },
        config
      )
    )
  )
    .process('@tailwind components; @tailwind utilities', {
      from: undefined,
    })
    .then((result) => {
      return result.css
    })
}

/**
 * Base display classes from TailwindCSS
 * Note: I can't figure out how to get around these. If display
 *       is not added above to corePlugins, nothing shows up
 */
const baseCss = `
.block {
  display: block
}

.inline-block {
  display: inline-block
}

.inline {
  display: inline
}

.flex {
  display: flex
}

.inline-flex {
  display: inline-flex
}

.table {
  display: table
}

.table-caption {
  display: table-caption
}

.table-cell {
  display: table-cell
}

.table-column {
  display: table-column
}

.table-column-group {
  display: table-column-group
}

.table-footer-group {
  display: table-footer-group
}

.table-header-group {
  display: table-header-group
}

.table-row-group {
  display: table-row-group
}

.table-row {
  display: table-row
}

.flow-root {
  display: flow-root
}

.grid {
  display: grid
}

.inline-grid {
  display: inline-grid
}

.hidden {
  display: none
}
`

expect.extend({
  toMatchCss: cssMatcher,
})

test('No precision media queries are generated by default', () => {
  return generatePluginCss(null, []).then((css) => {
    expect(css).toMatchCss(`
      ${baseCss}
    `)
  })
})

// Note: If the results contain a backslash, add another to escape it.
test('A single media query can be added', () => {
  return generatePluginCss({}, ['psm']).then((css) => {
    expect(css).toMatchCss(`
      ${baseCss}
      @media (min-width: only screen and (-webkit-device-pixel-ratio: 1) and (min-width: 320px) and (max-width: 568px)) {
        .psm\\:block {
          display: block
        }

        .psm\\:inline-block {
          display: inline-block
        }

        .psm\\:inline {
          display: inline
        }

        .psm\\:flex {
          display: flex
        }

        .psm\\:inline-flex {
          display: inline-flex
        }

        .psm\\:table {
          display: table
        }

        .psm\\:table-caption {
          display: table-caption
        }

        .psm\\:table-cell {
          display: table-cell
        }

        .psm\\:table-column {
          display: table-column
        }

        .psm\\:table-column-group {
          display: table-column-group
        }

        .psm\\:table-footer-group {
          display: table-footer-group
        }

        .psm\\:table-header-group {
          display: table-header-group
        }

        .psm\\:table-row-group {
          display: table-row-group
        }

        .psm\\:table-row {
          display: table-row
        }

        .psm\\:flow-root {
          display: flow-root
        }

        .psm\\:grid {
          display: grid
        }

        .psm\\:inline-grid {
          display: inline-grid
        }

        .psm\\:hidden {
          display: none
        }
      }
    `)
  })
})

test('Multiple media queries can be added', () => {
  return generatePluginCss({}, ['psm', 'tsm']).then((css) => {
    expect(css).toMatchCss(`
      ${baseCss}
      @media (min-width: only screen and (-webkit-device-pixel-ratio: 1) and (min-width: 320px) and (max-width: 568px)) {
        .psm\\:block {
          display: block
        }

        .psm\\:inline-block {
          display: inline-block
        }

        .psm\\:inline {
          display: inline
        }

        .psm\\:flex {
          display: flex
        }

        .psm\\:inline-flex {
          display: inline-flex
        }

        .psm\\:table {
          display: table
        }

        .psm\\:table-caption {
          display: table-caption
        }

        .psm\\:table-cell {
          display: table-cell
        }

        .psm\\:table-column {
          display: table-column
        }

        .psm\\:table-column-group {
          display: table-column-group
        }

        .psm\\:table-footer-group {
          display: table-footer-group
        }

        .psm\\:table-header-group {
          display: table-header-group
        }

        .psm\\:table-row-group {
          display: table-row-group
        }

        .psm\\:table-row {
          display: table-row
        }

        .psm\\:flow-root {
          display: flow-root
        }

        .psm\\:grid {
          display: grid
        }

        .psm\\:inline-grid {
          display: inline-grid
        }

        .psm\\:hidden {
          display: none
        }
      }

      @media (min-width: only screen and (-webkit-min-device-pixel-ratio: 1) and (min-device-width: 768px) and (max-device-width: 1024px)) {
        .tsm\\:block {
          display: block
        }

        .tsm\\:inline-block {
          display: inline-block
        }

        .tsm\\:inline {
          display: inline
        }

        .tsm\\:flex {
          display: flex
        }

        .tsm\\:inline-flex {
          display: inline-flex
        }

        .tsm\\:table {
          display: table
        }

        .tsm\\:table-caption {
          display: table-caption
        }

        .tsm\\:table-cell {
          display: table-cell
        }

        .tsm\\:table-column {
          display: table-column
        }

        .tsm\\:table-column-group {
          display: table-column-group
        }

        .tsm\\:table-footer-group {
          display: table-footer-group
        }

        .tsm\\:table-header-group {
          display: table-header-group
        }

        .tsm\\:table-row-group {
          display: table-row-group
        }

        .tsm\\:table-row {
          display: table-row
        }

        .tsm\\:flow-root {
          display: flow-root
        }

        .tsm\\:grid {
          display: grid
        }

        .tsm\\:inline-grid {
          display: inline-grid
        }

        .tsm\\:hidden {
          display: none
        }
      }
    `)
  })
})
