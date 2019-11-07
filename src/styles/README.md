## themed hdom components

### Objective
1. Make responsive styling of components based on a global theme easy
2. Enable styling for both single page apps and SSR rendering (npm script?)
3. Enable user-provided theme upon instantiation of component styler function (once)
4. Enable components to inject their styles once in the <head> element (global) and scoped by component
5. use the `hdom` injected `ctx` object to retrieve theme styles at use-site

### User-land experience (DX)
1. User instantiates themer-component with [theme spec](https://styled-system.com/theme-specification) compliant theme file
2. The themer-component is returned from instantiation (HOF). The returned function references a single module's internal state [ revealing module pattern - Object.freeze({...})? ]
3. The returned function is 3-arity:
  1. name
  2. styles object
  3. (optional) a named path to any sub component/object within the provided theme for spreading [ prepended ] into the component's styles [ style object spec overrides lensed spread ]
4. To use, the themer-component takes in a class/component "name" and custom (theme-spec compliant style object) styles then returns a custom (random id gen) hash
5. The user only then needs to use this hash either in the tag position of her hdom component or as the `class` name with an hdom component's attribute object (second arg to an hdom array)

### Under the hood
1. First, upon instantiation of the themer-component, global styles (e.g., `h1`) located in the `theme.styles` object are registered with the themer
2. When using the themer, the custom hash - internal within the themer-component - is generated as a random id appended to the user provided "name"
3. The themer uses this hash as a selector for css styling
  1. If the custom theme-spec style object supplied to the themer-component contains responsive values (e.g., `{ fontSize: [1, 2, 3], ...}`) these are used as a "parent" selector within with the hash becomes a child
  2. If the object contains a pseudo selector (e.g, `{ a: { color: "blue", "&:hover": { color: "red" } } }`), it is nested as a child under the selector
  3. If it's just a regular key-value pair, the styles are nested as a single child object under the selector
4.  If the user provides the third arity (path - either as a string or array) this is looked up first and instantiates a style object
5.  Any custom styles are then spread over the style object
6.  Then the object is "systemetized" into regular css strings (de-camelcased) and added to the global style Atom
7. All components within the app that register using the themer component are processed at initialization of the application (this might be changed to a compile/script step for SSR/efficieny - TODO) and are only processed once for speed (used eventlistener `DOMContentLoaded` to activate the styles)
   
## Example

```js
import { fireStyles } from "./themer"

const onclickNA = name => ({ 
  onclick: () => console.warn(`no handler assigned to ${name} 'onclick' event`) 
})

// a HOF that takes a config and returns an HDOM node function
export const button_x = cfg => {
  cfg = { tag: "button", 
    tagDisabled: "span",
    ...cfg }// allow user-defined config overrides (e.g., tagActive for route link)

  const hash = fireStyles("button", {
    fontSize: ["10px", "20px", "30px", "40px"],
    m: ["18px", "24px", "48px"],
  }, "buttons.simple") // also accepts ["buttons", "simple"]
  // the returned hdom node fn with user-provided arbitrary context object
  return (ctx, attrs, ...children) => attrs.disabled ? 
  [ cfg.tag,
    { class: hash,
      ...onclickNA(hash) 
      ...attrs }, 
    ...children ]
  :
  [ cfg.tagDisabled,
    { class: hash,
      style: { color: ctx.theme.colors.muted || "grey" }, // inline theme-derived overrides
      ...attrs }, 
    ...children ]
}

export const button = button_x() // default dis/enabled button

```
### Order of style application

1. user-defined config -> determines DOM node type (e.g, 'button'/'span')
2. optional theme-path (3rd arg to `fireStyles` themer-fn) -> theme-derived styles
3. 2nd arg to `fireStyles` -> 'styled-system' responsive style object
4. inline styles via `style` property on the `attrs` object at instantiation


## TODO
1. Consider SSR / compiling styles
2. Consider sniffing the provided theme to see if it's an object (regular styling) or function (for color modes)
  1. if function, upon invocation, resets styles to different [mode](https://styled-system.com/guides/color-modes#adding-color-mode-state)
  2. if object, just static theme styles (regular `DOMContentLoaded` listener)