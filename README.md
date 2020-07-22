# Font Sizes for Tailwind CSS
This plugin allows you to quickly generate font sizes in ems.

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
    // Generates 250 font sizes in ems
    require('tailwindcss-font-sizes')({
        total: 10, // default
        // startingSize: 8, // default
        // baseSize: 14, // default
    }),
  ],
};
```

The above configuration would generate the following CSS:

```css
.text-0 {
  font-size: 0em
}

.text-1 {
  font-size: 0.07142857142857142em
}

.text-2 {
  font-size: 0.14285714285714285em
}

.text-3 {
  font-size: 0.21428571428571427em
}

.text-4 {
  font-size: 0.2857142857142857em
}

.text-5 {
  font-size: 0.35714285714285715em
}

.text-6 {
  font-size: 0.42857142857142855em
}

.text-7 {
  font-size: 0.5em
}

.text-8 {
  font-size: 0.5714285714285714em
}

.text-9 {
  font-size: 0.6428571428571429em
}

.text-10 {
  font-size: 0.7142857142857143em
}
/* etc. */
```

Which you can then use in your HTML like this:

```html
<div class="text-10">
  <p>I'm displayed at a font size of 0.7142857142857143 ems</p>
</div>
```

The above depends on the order of the generated CSS.
