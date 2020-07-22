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
          variants: [],
          corePlugins: ['fontSize'],
          plugins: [require('./index.js')(pluginOptions)],
        },
        config
      )
    )
  )
    .process('@tailwind components; @tailwind utilities', {
      from: undefined,
    })
    .then((result) => {
      // console.log('results', result.css)
      return result.css
    })
}

/**
 * Base display classes from TailwindCSS
 * Note: I can't figure out how to get around these. If display
 *       is not added above to corePlugins, nothing shows up
 */
const baseCss = `
`

expect.extend({
  toMatchCss: cssMatcher,
})

test('No precision media queries are generated by default', () => {
  return generatePluginCss(null, {}).then((css) => {
    expect(css).toMatchCss(`
    .text-0 {
      font-size: 0em;
    }

    .text-1 {
      font-size: 0.07142857142857142em;
    }

    .text-2 {
      font-size: 0.14285714285714285em;
    }

    .text-3 {
      font-size: 0.21428571428571427em;
    }

    .text-4 {
      font-size: 0.2857142857142857em;
    }

    .text-5 {
      font-size: 0.35714285714285715em;
    }

    .text-6 {
      font-size: 0.42857142857142855em;
    }

    .text-7 {
      font-size: 0.5em;
    }

    .text-8 {
      font-size: 0.5714285714285714em;
    }

    .text-9 {
      font-size: 0.6428571428571429em;
    }

    .text-10 {
      font-size: 0.7142857142857143em;
    }

    .text-11 {
      font-size: 0.7857142857142857em;
    }

    .text-12 {
      font-size: 0.8571428571428571em;
    }

    .text-13 {
      font-size: 0.9285714285714286em;
    }

    .text-14 {
      font-size: 1em;
    }

    .text-15 {
      font-size: 1.0714285714285714em;
    }

    .text-16 {
      font-size: 1.1428571428571428em;
    }

    .text-17 {
      font-size: 1.2142857142857142em;
    }

    .text-18 {
      font-size: 1.2857142857142858em;
    }

    .text-19 {
      font-size: 1.3571428571428572em;
    }

    .text-20 {
      font-size: 1.4285714285714286em;
    }

    .text-21 {
      font-size: 1.5em;
    }

    .text-22 {
      font-size: 1.5714285714285714em;
    }

    .text-23 {
      font-size: 1.6428571428571428em;
    }

    .text-24 {
      font-size: 1.7142857142857142em;
    }

    .text-25 {
      font-size: 1.7857142857142858em;
    }

    .text-26 {
      font-size: 1.8571428571428572em;
    }

    .text-27 {
      font-size: 1.9285714285714286em;
    }

    .text-28 {
      font-size: 2em;
    }

    .text-29 {
      font-size: 2.0714285714285716em;
    }

    .text-30 {
      font-size: 2.142857142857143em;
    }

    .text-31 {
      font-size: 2.2142857142857144em;
    }

    .text-32 {
      font-size: 2.2857142857142856em;
    }

    .text-33 {
      font-size: 2.357142857142857em;
    }

    .text-34 {
      font-size: 2.4285714285714284em;
    }

    .text-35 {
      font-size: 2.5em;
    }

    .text-36 {
      font-size: 2.5714285714285716em;
    }

    .text-37 {
      font-size: 2.642857142857143em;
    }

    .text-38 {
      font-size: 2.7142857142857144em;
    }

    .text-39 {
      font-size: 2.7857142857142856em;
    }

    .text-40 {
      font-size: 2.857142857142857em;
    }

    .text-41 {
      font-size: 2.9285714285714284em;
    }

    .text-42 {
      font-size: 3em;
    }

    .text-43 {
      font-size: 3.0714285714285716em;
    }

    .text-44 {
      font-size: 3.142857142857143em;
    }

    .text-45 {
      font-size: 3.2142857142857144em;
    }

    .text-46 {
      font-size: 3.2857142857142856em;
    }

    .text-47 {
      font-size: 3.357142857142857em;
    }

    .text-48 {
      font-size: 3.4285714285714284em;
    }

    .text-49 {
      font-size: 3.5em;
    }

    .text-50 {
      font-size: 3.5714285714285716em;
    }

    .text-51 {
      font-size: 3.642857142857143em;
    }

    .text-52 {
      font-size: 3.7142857142857144em;
    }

    .text-53 {
      font-size: 3.7857142857142856em;
    }

    .text-54 {
      font-size: 3.857142857142857em;
    }

    .text-55 {
      font-size: 3.9285714285714284em;
    }

    .text-56 {
      font-size: 4em;
    }

    .text-57 {
      font-size: 4.071428571428571em;
    }

    .text-58 {
      font-size: 4.142857142857143em;
    }

    .text-59 {
      font-size: 4.214285714285714em;
    }

    .text-60 {
      font-size: 4.285714285714286em;
    }

    .text-61 {
      font-size: 4.357142857142857em;
    }

    .text-62 {
      font-size: 4.428571428571429em;
    }

    .text-63 {
      font-size: 4.5em;
    }

    .text-64 {
      font-size: 4.571428571428571em;
    }

    .text-65 {
      font-size: 4.642857142857143em;
    }

    .text-66 {
      font-size: 4.714285714285714em;
    }

    .text-67 {
      font-size: 4.785714285714286em;
    }

    .text-68 {
      font-size: 4.857142857142857em;
    }

    .text-69 {
      font-size: 4.928571428571429em;
    }

    .text-70 {
      font-size: 5em;
    }

    .text-71 {
      font-size: 5.071428571428571em;
    }

    .text-72 {
      font-size: 5.142857142857143em;
    }

    .text-73 {
      font-size: 5.214285714285714em;
    }

    .text-74 {
      font-size: 5.285714285714286em;
    }

    .text-75 {
      font-size: 5.357142857142857em;
    }

    .text-76 {
      font-size: 5.428571428571429em;
    }

    .text-77 {
      font-size: 5.5em;
    }

    .text-78 {
      font-size: 5.571428571428571em;
    }

    .text-79 {
      font-size: 5.642857142857143em;
    }

    .text-80 {
      font-size: 5.714285714285714em;
    }

    .text-81 {
      font-size: 5.785714285714286em;
    }

    .text-82 {
      font-size: 5.857142857142857em;
    }

    .text-83 {
      font-size: 5.928571428571429em;
    }

    .text-84 {
      font-size: 6em;
    }

    .text-85 {
      font-size: 6.071428571428571em;
    }

    .text-86 {
      font-size: 6.142857142857143em;
    }

    .text-87 {
      font-size: 6.214285714285714em;
    }

    .text-88 {
      font-size: 6.285714285714286em;
    }

    .text-89 {
      font-size: 6.357142857142857em;
    }

    .text-90 {
      font-size: 6.428571428571429em;
    }

    .text-91 {
      font-size: 6.5em;
    }

    .text-92 {
      font-size: 6.571428571428571em;
    }

    .text-93 {
      font-size: 6.642857142857143em;
    }

    .text-94 {
      font-size: 6.714285714285714em;
    }

    .text-95 {
      font-size: 6.785714285714286em;
    }

    .text-96 {
      font-size: 6.857142857142857em;
    }

    .text-97 {
      font-size: 6.928571428571429em;
    }

    .text-98 {
      font-size: 7em;
    }

    .text-99 {
      font-size: 7.071428571428571em;
    }

    .text-100 {
      font-size: 7.142857142857143em;
    }

    .text-101 {
      font-size: 7.214285714285714em;
    }

    .text-102 {
      font-size: 7.285714285714286em;
    }

    .text-103 {
      font-size: 7.357142857142857em;
    }

    .text-104 {
      font-size: 7.428571428571429em;
    }

    .text-105 {
      font-size: 7.5em;
    }

    .text-106 {
      font-size: 7.571428571428571em;
    }

    .text-107 {
      font-size: 7.642857142857143em;
    }

    .text-108 {
      font-size: 7.714285714285714em;
    }

    .text-109 {
      font-size: 7.785714285714286em;
    }

    .text-110 {
      font-size: 7.857142857142857em;
    }

    .text-111 {
      font-size: 7.928571428571429em;
    }

    .text-112 {
      font-size: 8em;
    }

    .text-113 {
      font-size: 8.071428571428571em;
    }

    .text-114 {
      font-size: 8.142857142857142em;
    }

    .text-115 {
      font-size: 8.214285714285714em;
    }

    .text-116 {
      font-size: 8.285714285714286em;
    }

    .text-117 {
      font-size: 8.357142857142858em;
    }

    .text-118 {
      font-size: 8.428571428571429em;
    }

    .text-119 {
      font-size: 8.5em;
    }

    .text-120 {
      font-size: 8.571428571428571em;
    }

    .text-121 {
      font-size: 8.642857142857142em;
    }

    .text-122 {
      font-size: 8.714285714285714em;
    }

    .text-123 {
      font-size: 8.785714285714286em;
    }

    .text-124 {
      font-size: 8.857142857142858em;
    }

    .text-125 {
      font-size: 8.928571428571429em;
    }

    .text-126 {
      font-size: 9em;
    }

    .text-127 {
      font-size: 9.071428571428571em;
    }

    .text-128 {
      font-size: 9.142857142857142em;
    }

    .text-129 {
      font-size: 9.214285714285714em;
    }

    .text-130 {
      font-size: 9.285714285714286em;
    }

    .text-131 {
      font-size: 9.357142857142858em;
    }

    .text-132 {
      font-size: 9.428571428571429em;
    }

    .text-133 {
      font-size: 9.5em;
    }

    .text-134 {
      font-size: 9.571428571428571em;
    }

    .text-135 {
      font-size: 9.642857142857142em;
    }

    .text-136 {
      font-size: 9.714285714285714em;
    }

    .text-137 {
      font-size: 9.785714285714286em;
    }

    .text-138 {
      font-size: 9.857142857142858em;
    }

    .text-139 {
      font-size: 9.928571428571429em;
    }

    .text-140 {
      font-size: 10em;
    }

    .text-141 {
      font-size: 10.071428571428571em;
    }

    .text-142 {
      font-size: 10.142857142857142em;
    }

    .text-143 {
      font-size: 10.214285714285714em;
    }

    .text-144 {
      font-size: 10.285714285714286em;
    }

    .text-145 {
      font-size: 10.357142857142858em;
    }

    .text-146 {
      font-size: 10.428571428571429em;
    }

    .text-147 {
      font-size: 10.5em;
    }

    .text-148 {
      font-size: 10.571428571428571em;
    }

    .text-149 {
      font-size: 10.642857142857142em;
    }

    .text-150 {
      font-size: 10.714285714285714em;
    }

    .text-151 {
      font-size: 10.785714285714286em;
    }

    .text-152 {
      font-size: 10.857142857142858em;
    }

    .text-153 {
      font-size: 10.928571428571429em;
    }

    .text-154 {
      font-size: 11em;
    }

    .text-155 {
      font-size: 11.071428571428571em;
    }

    .text-156 {
      font-size: 11.142857142857142em;
    }

    .text-157 {
      font-size: 11.214285714285714em;
    }

    .text-158 {
      font-size: 11.285714285714286em;
    }

    .text-159 {
      font-size: 11.357142857142858em;
    }

    .text-160 {
      font-size: 11.428571428571429em;
    }

    .text-161 {
      font-size: 11.5em;
    }

    .text-162 {
      font-size: 11.571428571428571em;
    }

    .text-163 {
      font-size: 11.642857142857142em;
    }

    .text-164 {
      font-size: 11.714285714285714em;
    }

    .text-165 {
      font-size: 11.785714285714286em;
    }

    .text-166 {
      font-size: 11.857142857142858em;
    }

    .text-167 {
      font-size: 11.928571428571429em;
    }

    .text-168 {
      font-size: 12em;
    }

    .text-169 {
      font-size: 12.071428571428571em;
    }

    .text-170 {
      font-size: 12.142857142857142em;
    }

    .text-171 {
      font-size: 12.214285714285714em;
    }

    .text-172 {
      font-size: 12.285714285714286em;
    }

    .text-173 {
      font-size: 12.357142857142858em;
    }

    .text-174 {
      font-size: 12.428571428571429em;
    }

    .text-175 {
      font-size: 12.5em;
    }

    .text-176 {
      font-size: 12.571428571428571em;
    }

    .text-177 {
      font-size: 12.642857142857142em;
    }

    .text-178 {
      font-size: 12.714285714285714em;
    }

    .text-179 {
      font-size: 12.785714285714286em;
    }

    .text-180 {
      font-size: 12.857142857142858em;
    }

    .text-181 {
      font-size: 12.928571428571429em;
    }

    .text-182 {
      font-size: 13em;
    }

    .text-183 {
      font-size: 13.071428571428571em;
    }

    .text-184 {
      font-size: 13.142857142857142em;
    }

    .text-185 {
      font-size: 13.214285714285714em;
    }

    .text-186 {
      font-size: 13.285714285714286em;
    }

    .text-187 {
      font-size: 13.357142857142858em;
    }

    .text-188 {
      font-size: 13.428571428571429em;
    }

    .text-189 {
      font-size: 13.5em;
    }

    .text-190 {
      font-size: 13.571428571428571em;
    }

    .text-191 {
      font-size: 13.642857142857142em;
    }

    .text-192 {
      font-size: 13.714285714285714em;
    }

    .text-193 {
      font-size: 13.785714285714286em;
    }

    .text-194 {
      font-size: 13.857142857142858em;
    }

    .text-195 {
      font-size: 13.928571428571429em;
    }

    .text-196 {
      font-size: 14em;
    }

    .text-197 {
      font-size: 14.071428571428571em;
    }

    .text-198 {
      font-size: 14.142857142857142em;
    }

    .text-199 {
      font-size: 14.214285714285714em;
    }

    .text-200 {
      font-size: 14.285714285714286em;
    }

    .text-201 {
      font-size: 14.357142857142858em;
    }

    .text-202 {
      font-size: 14.428571428571429em;
    }

    .text-203 {
      font-size: 14.5em;
    }

    .text-204 {
      font-size: 14.571428571428571em;
    }

    .text-205 {
      font-size: 14.642857142857142em;
    }

    .text-206 {
      font-size: 14.714285714285714em;
    }

    .text-207 {
      font-size: 14.785714285714286em;
    }

    .text-208 {
      font-size: 14.857142857142858em;
    }

    .text-209 {
      font-size: 14.928571428571429em;
    }

    .text-210 {
      font-size: 15em;
    }

    .text-211 {
      font-size: 15.071428571428571em;
    }

    .text-212 {
      font-size: 15.142857142857142em;
    }

    .text-213 {
      font-size: 15.214285714285714em;
    }

    .text-214 {
      font-size: 15.285714285714286em;
    }

    .text-215 {
      font-size: 15.357142857142858em;
    }

    .text-216 {
      font-size: 15.428571428571429em;
    }

    .text-217 {
      font-size: 15.5em;
    }

    .text-218 {
      font-size: 15.571428571428571em;
    }

    .text-219 {
      font-size: 15.642857142857142em;
    }

    .text-220 {
      font-size: 15.714285714285714em;
    }

    .text-221 {
      font-size: 15.785714285714286em;
    }

    .text-222 {
      font-size: 15.857142857142858em;
    }

    .text-223 {
      font-size: 15.928571428571429em;
    }

    .text-224 {
      font-size: 16em;
    }

    .text-225 {
      font-size: 16.071428571428573em;
    }

    .text-226 {
      font-size: 16.142857142857142em;
    }

    .text-227 {
      font-size: 16.214285714285715em;
    }

    .text-228 {
      font-size: 16.285714285714285em;
    }

    .text-229 {
      font-size: 16.357142857142858em;
    }

    .text-230 {
      font-size: 16.428571428571427em;
    }

    .text-231 {
      font-size: 16.5em;
    }

    .text-232 {
      font-size: 16.571428571428573em;
    }

    .text-233 {
      font-size: 16.642857142857142em;
    }

    .text-234 {
      font-size: 16.714285714285715em;
    }

    .text-235 {
      font-size: 16.785714285714285em;
    }

    .text-236 {
      font-size: 16.857142857142858em;
    }

    .text-237 {
      font-size: 16.928571428571427em;
    }

    .text-238 {
      font-size: 17em;
    }

    .text-239 {
      font-size: 17.071428571428573em;
    }

    .text-240 {
      font-size: 17.142857142857142em;
    }

    .text-241 {
      font-size: 17.214285714285715em;
    }

    .text-242 {
      font-size: 17.285714285714285em;
    }

    .text-243 {
      font-size: 17.357142857142858em;
    }

    .text-244 {
      font-size: 17.428571428571427em;
    }

    .text-245 {
      font-size: 17.5em;
    }

    .text-246 {
      font-size: 17.571428571428573em;
    }

    .text-247 {
      font-size: 17.642857142857142em;
    }

    .text-248 {
      font-size: 17.714285714285715em;
    }

    .text-249 {
      font-size: 17.785714285714285em;
    }

    .text-250 {
      font-size: 17.857142857142858em;
    }
    `)
  })
})

// Note: If the results contain a backslash, add another to escape it.
test('A single font size can be added', () => {
  return generatePluginCss({}, { total: 1 }).then((css) => {
    expect(css).toMatchCss(`
      .text-0 {
        font-size: 0em;
      }

      .text-1 {
        font-size: 0.07142857142857142em;
      }
    `)
  })
})

test('Format can be changed to rems ', () => {
  return generatePluginCss({}, { total: 1, format: 'rem' }).then((css) => {
    expect(css).toMatchCss(`
      .text-0 {
        font-size: 0rem;
      }

      .text-1 {
        font-size: 0.07142857142857142rem;
      }
    `)
  })
})

test('Format can be changed to pixels ', () => {
  return generatePluginCss({}, { total: 1, format: 'px' }).then((css) => {
    expect(css).toMatchCss(`
      .text-0 {
        font-size: 0px;
      }

      .text-1 {
        font-size: 1px;
      }
    `)
  })
})

test('Multiple font sizes can be added', () => {
  return generatePluginCss({}, { total: 10 }).then((css) => {
    expect(css).toMatchCss(`
      .text-0 {
        font-size: 0em;
      }

      .text-1 {
        font-size: 0.07142857142857142em;
      }

      .text-2 {
        font-size: 0.14285714285714285em;
      }

      .text-3 {
        font-size: 0.21428571428571427em;
      }

      .text-4 {
        font-size: 0.2857142857142857em;
      }

      .text-5 {
        font-size: 0.35714285714285715em;
      }

      .text-6 {
        font-size: 0.42857142857142855em;
      }

      .text-7 {
        font-size: 0.5em;
      }

      .text-8 {
        font-size: 0.5714285714285714em;
      }

      .text-9 {
        font-size: 0.6428571428571429em;
      }

      .text-10 {
        font-size: 0.7142857142857143em;
      }
    `)
  })
})

test('Multiple font sizes can be added in rems', () => {
  return generatePluginCss({}, { total: 10, format: 'rem' }).then((css) => {
    expect(css).toMatchCss(`
      .text-0 {
        font-size: 0rem;
      }

      .text-1 {
        font-size: 0.07142857142857142rem;
      }

      .text-2 {
        font-size: 0.14285714285714285rem;
      }

      .text-3 {
        font-size: 0.21428571428571427rem;
      }

      .text-4 {
        font-size: 0.2857142857142857rem;
      }

      .text-5 {
        font-size: 0.3571428571428571rem;
      }

      .text-6 {
        font-size: 0.42857142857142855rem;
      }

      .text-7 {
        font-size: 0.5rem;
      }

      .text-8 {
        font-size: 0.5714285714285714rem;
      }

      .text-9 {
        font-size: 0.6428571428571428rem;
      }

      .text-10 {
        font-size: 0.7142857142857142rem;
      }
    `)
  })
})
