# Font Sizes for Tailwind CSS
This plugin allows you to quickly generate font sizes in rems.

## Requirements

This plugin requires Tailwind CSS 1.2 or later.

## Installation

```bash
yarn add tailwindcss-font-sizes
```

## Usage

The following plugin options are available. See below how these are passed (via an array) to the plugin in your `tailwind.config.js`.

## Options Available
Pass along a number value to generate that many font sizes.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    // Generates 100 sizes
    require('tailwindcss-font-sizes')(100),
  ],
};
```

The above configuration would generate the following CSS:

```css
@media (min-width: only screen and (-webkit-device-pixel-ratio: 1) and (min-width: 320px) and (max-width: 568px)) {
  .psm\:block {
    display: block
  }

  .psm\:inline-block {
    display: inline-block
  }

  .psm\:inline {
    display: inline
  }

  .psm\:flex {
    display: flex
  }

  .psm\:inline-flex {
    display: inline-flex
  }

  .psm\:table {
    display: table
  }

  .psm\:table-caption {
    display: table-caption
  }

  .psm\:table-cell {
    display: table-cell
  }

  .psm\:table-column {
    display: table-column
  }

  .psm\:table-column-group {
    display: table-column-group
  }

  .psm\:table-footer-group {
    display: table-footer-group
  }

  .psm\:table-header-group {
    display: table-header-group
  }

  .psm\:table-row-group {
    display: table-row-group
  }

  .psm\:table-row {
    display: table-row
  }

  .psm\:flow-root {
    display: flow-root
  }

  .psm\:grid {
    display: grid
  }

  .psm\:inline-grid {
    display: inline-grid
  }

  .psm\:hidden {
    display: none
  }
}
/* etc. */
```

Which you can then use in your HTML like this:

```html
<div class="psm:hidden lg:block">
  <p>I'm hidden on small phones.</p>
</div>
```

The above depends on the order of the generated CSS.
