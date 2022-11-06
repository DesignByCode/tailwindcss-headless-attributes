# TailwindCSS Headless Attributes
A plugin that provides utilities for adding styles with aria attributes. Create to play nice with [vanilla-headless](https://www.npmjs.com/package/vanilla-headless)
## Installation


Install the plugin from npm:
```bash
npm install tailwindcss-headless-attributes
```
Then add the plugin to your tailwind.config.js file:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    
  },
  plugins: [
    require("tailwindcss-headless-attributes"),
  ],
}
```

## Usage
Use ``aria-*`` and ``data-*`` attributes to style html elements
```html
<headless-toggle class="flex items-center group aria-disabled:bg-gray-300" aria-disabled="true">
    <button aria-checked="true" class="group-data-switch-on:bg-blue-500 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2  border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" class="group-data-switch-on:translate-x-5 translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-50" data-switch></span>
    </button>
</headless-toggle>
```

### Data Attributes for Vanilla-Headless
Use these vanilla-headless attributes by using``data-{name}-{value}``

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
These ``aria-*`` attribute all translate to a value of ``true``
```css
[aria-pressed="true"].aria-pressed\:shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
```
- aria-atomic
- aria-busy
- aria-checked
- aria-current
- aria-disabled
- aria-expanded
- aria-grabbed
- aria-haspopup
- aria-hidden
- aria-invalid
- aria-live
- aria-modal
- aria-multiline
- aria-multiselectable
- aria-pressed
- aria-readonly
- aria-required
- aria-selected
