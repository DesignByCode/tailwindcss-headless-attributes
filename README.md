# TailwindCSS Attributes

A plugin that provides utilities for adding styles with aria attributes. Create to play nice with [vanilla-headless](https://www.npmjs.com/package/vanilla-headless)

## 📇 Table of Contents

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Usage](#usage)
    * [Data Attributes for Vanilla-Headless](#data-attributes-for-vanilla-headless)
    * [Aria Attributes](#aria-attributes)
    * [Aria attributes variants](#aria-attributes-variants)
    * [Aria attributes variants with modifiers](#aria-attributes-variants-with-modifiers)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Installation

[![NPM](https://nodei.co/npm/tailwindcss-attributes.png?mini=true)](https://nodei.co/npm/tailwindcss-attributes/)

![npm (tag)](https://img.shields.io/npm/v/tailwindcss-attributes/latest?color=brightgreen)
![npm](https://img.shields.io/npm/dt/tailwindcss-attributes)
![NPM](https://img.shields.io/npm/l/tailwindcss-attributes)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tailwindcss-attributes)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/tailwindcss-attributes?style=social)](https://github.com/DesignByCode/tailwindcss-attributes/stargazers)

Install the plugin from npm:

#### Using pnpm

```bash
pnpm add -D tailwindcss-attributes
```

#### Using npm

```bash
npm install tailwindcss-attributes --save-dev
```

#### Using yarn

```bash
yarn add -D tailwindcss-attributes
```

Then add the plugin to your tailwind.config.js file:

```javascript
// tailwind.config.js
module.exports = {
    theme: {},
    corePlugins: {
        aria: false,
    },
    plugins: [require("tailwindcss-attributes")],
}
```

## Usage

Use `aria-*` and `data-*` attributes to style html elements

```html

<headless-toggle class="flex items-center group aria-disabled:bg-gray-300" aria-disabled="true">
    <button
            aria-checked="true"
            class="group-data-switch-on:bg-blue-500 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2  border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
    >
        <span class="sr-only">Use setting</span>
        <span
                aria-hidden="true"
                class="group-data-switch-on:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-50"
                data-switch
        ></span>
    </button>
</headless-toggle>
```

### Data Attributes for Vanilla-Headless

Use these vanilla-headless attributes by using`data-{name}-{value}`

```html
....
<button class="data-switch-on:bg-indigo-500">
    <span class="data-switch-off:translate-x-0 data-switch-on:translate-x-5"></span>
</button>
...
```

| Attribute          | Variant          |
|:-------------------|:-----------------|
| data-state="open"  | data-state-open  |
| data-state="close" | data-state-close |
| data-switch="on"   | data-switch-on   |
| data-switch="off"  | data-switch-off  |

### Aria Attributes

These `aria-*` attribute all translate to a value of `true`

```css
[aria-pressed="true"].aria-pressed\:shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
```

### Aria attributes variants

The following attribute all evaluate to `true`

- aria-atomic:
- aria-busy:
- aria-checked:
- aria-current:
- aria-disabled:
- aria-expanded:
- aria-grabbed:
- aria-haspopup:
- aria-hidden:
- aria-invalid:
- aria-live:
- aria-modal:
- aria-multiline:
- aria-multiselectable:
- aria-pressed:
- aria-readonly:
- aria-required:
- aria-selected:

### Aria attributes variants with modifiers

Use modifier to access attribute value

```html

<div class="aria-activedescendant-application:text-red-500"></div>
```

- aria-activedescendant-{modifier}
    - application
    - combobox
    - composite
    - group
    - textbox
- aria-autocomplete-{modifier}
    - none
    - both
    - inline
    - list
- aria-current-{modifier}
    - page
    - step
    - location
    - date
    - time
- aria-dropeffect-{modifier}
    - copy
    - execute
    - link
    - move
    - none
    - popup
- aria-haspopup-{modifier}
    - menu
    - listbox
    - tree
    - grid
    - dialog
- aria-invalid-{modifier}
    - grammar
    - spelling
- aria-live-{modifier}
    - assertive
    - off
    - polite
- aria-orientation-{modifier}
    - horizontal
    - undefined
    - vertical
- aria-pressed-{modifier}
    - mixed
- aria-relevant-{modifier}
    - additions
    - all
    - removals
    - text
- aria-sort-{modifier}
    - ascending
    - descending
    - none
    - other

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>

## Acknowledgments

- This plugin is inspired by the needs of web developers using Tailwind CSS.
- Special thanks to the Tailwind CSS team for creating such an amazing framework.
