const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ addVariant, theme }) => {
  /**
   * https://tailwindcss.com/docs/plugins#parent-and-sibling-states
   * @param name
   * @param value
   * @param prefix
   * @param booleanGenerator
   */
  const variantGenerator = (name, value, prefix = null, booleanGenerator = true) => {
    if (booleanGenerator) {
      addVariant(`${prefix}-${name}`, `[${prefix}-${name}="${value}"]& `)
      addVariant(`peer-${prefix}-${name}`, `:merge(.peer)[${prefix}-${name}="${value}"] ~ &`)
      addVariant(`group-${prefix}-${name}`, `:merge(.group)[${prefix}-${name}="${value}"] &`)
    } else {
      addVariant(`${prefix}-${name}-${value}`, `[${prefix}-${name}="${value}"]&`)
      addVariant(`peer-${prefix}-${name}-${value}`, `:merge(.peer)[${prefix}-${name}="${value}"] ~ &`)
      addVariant(`group-${prefix}-${name}-${value}`, `:merge(.group)[${prefix}-${name}="${value}"] &`)
    }
  }

  /**
   * aria attribute with true and false value
   * @type {string[]}
   */
  const booleanAttributes = [
    "atomic",
    "busy",
    "checked",
    "current",
    "disabled",
    "expanded",
    "grabbed",
    "haspopup",
    "hidden",
    "invalid",
    "live",
    "modal",
    "multiline",
    "multiselectable",
    "pressed",
    "readonly",
    "required",
    "selected",
  ]

  /**
   * custom data attribute for vanilla-headless
   * https://www.npmjs.com/package/vanilla-headless
   * @type {{state: string[], switch: string[]}}
   */
  const headlessDataSets = {
    state: ["open", "close"],
    switch: ["on", "off"],
    theme: ["dark", "light"],
  }

  /**
   * aria attribute with list type
   * @type {{haspopup: string[], relevant: string[], current: string[], orientation: string[], autocomplete: string[], pressed: string[], invalid: string[], sort: string[], activedescendant: string[], dropeffect: string[], live: string[]}}
   */
  const ariaAttributesList = {
    activedescendant: ["application", "combobox", "composite", "group", "textbox"],
    autocomplete: ["none", "both", "inline", "list"],
    current: ["page", "step", "location", "date", "time"],
    dropeffect: ["copy", "execute", "link", "move", "none", "popup"],
    haspopup: ["menu", "listbox", "tree", "grid", "dialog"],
    invalid: ["grammar", "spelling"],
    live: ["assertive", "off", "polite"],
    orientation: ["horizontal", "undefined", "vertical"],
    pressed: ["mixed"],
    relevant: ["additions", "all", "removals", "text"],
    sort: ["ascending", "descending", "none", "other"],
  }

  booleanAttributes.forEach((attr) => variantGenerator(attr, "true", "aria"))

  Object.entries(headlessDataSets).map(([attr, values]) => {
    values.forEach((value) => variantGenerator(attr, value, "data", false))
  })

  Object.entries(ariaAttributesList).map(([attr, values]) => {
    values.forEach((value) => variantGenerator(attr, value, "aria", false))
  })
})
