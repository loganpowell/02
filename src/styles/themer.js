import * as rand from "@thi.ng/random"
import { Atom, Transacted, Cursor } from "@thi.ng/atom"
import { setIn, getIn } from "@thi.ng/paths"
import system_css from "@styled-system/css"
import de_cameled from "decamelize-keys-deep"
import { at_media, injectStyleSheet, PRETTY, css as hiccup_css } from "@thi.ng/hiccup-css"
import default_theme from "./theme"

system_css(default_theme.buttons.pill)(default_theme)

const log = (...stuff) => console.log(...stuff)
// Atom structure
const structure_key = {
  queries: {
    "min-width: 10rem": { hash: {} }
  },
  pseudos: {
    hash: { ":hover": {} }
  },
  basics: {
    hash: {}
  }
}
const global_structure = {
  queries: {},
  pseudos: {},
  basics: {}
}
const global_atom = new Atom(global_structure)
// const global_tran = new Transacted(global_atom)
const q_crsr = new Cursor(global_atom, "queries")
const p_crsr = new Cursor(global_atom, "pseudos")
const b_crsr = new Cursor(global_atom, "basics")

const partitioner = (atom, macro, meso, micro = null) => {
  const current = atom.deref()
  const has_macro = !!current[macro]
  const has_meso = !!getIn(current, [macro, meso])
  // 🔥: dot_hash will get it's nuts cut off if you don't use array path syntax
  if (micro) {
    if (has_meso) {
      atom.swapIn([macro, meso], xx => ({ ...xx, ...micro }))
    } else if (has_macro) {
      atom.swapIn([macro], xx => ({ ...xx, [meso]: micro }))
    } else {
      atom.swap(xx => ({ ...xx, [macro]: { [meso]: micro } }))
    }
  } else {
    if (has_macro) {
      atom.swapIn([macro], xx => ({ ...xx, ...meso }))
    } else {
      atom.swap(xx => ({ ...xx, [macro]: meso }))
    }
  }
}

const partition = (selector, styles) => {
  const entries = Object.entries(styles)
  const is_root = selector === "root"
  if (is_root) {
    partitioner(b_crsr, ":root", styles)
  } else {
    entries.forEach(([key, val]) => {
      const is_pseudo = key.slice(0, 1) === "&"
      const is_query = key.slice(0, 6) === "@media"
      const is_basic = typeof val !== "object"
      if (is_pseudo) {
        // log("pseudo:", [selector, styles])
        partitioner(p_crsr, selector, key.slice(1), val)
      } else if (is_query) {
        const rgx = /\(.*?\)/g
        const media_query = key.match(rgx)[0].slice(1, -1)
        // log("query:", [media_query, selector, val])
        partitioner(q_crsr, media_query, selector, val)
      } else if (is_basic) {
        // log("basic:", [selector, { [key]: val }])

        partitioner(b_crsr, selector, { [key]: val })
      } else {
        // log("NA?:", [selector, styles])
        return
      }
    })
  }
}

/**
 * Gives user back the theme-spec compliant theme object * as a ready to wear css to be included in `ctx` * object within `hdom` components
 * */
export const global_theme_obj = theme => de_cameled(system_css(theme)(theme), "-")

let test_theme = global_theme_obj(default_theme).styles

const style_fire = theme_spec => (sel, styles, path = null) => {
  const hash = `${sel}${rand.randomID(5, "_", "0123456789abcdefghijklmnopqrstuvwxyz")}`
  const dot_hash = `.${hash}`
  const spec_lens = getIn(theme_spec, path)
  const style_obj = path ? de_cameled(system_css(spec_lens)(theme_spec), "-") : {}
  const themed_styles = de_cameled(system_css(styles)(theme_spec), "-")
  const computed_styles = { ...style_obj, ...themed_styles }
  // console.log([dot_hash, computed_styles]) //?
  // -> to injection! 💉
  partition(dot_hash, computed_styles)

  return hash
}

// registers theme-spec compliant theme
export const themer = theme_spec => {
  // do some 💩 ...
  // aka DOMContentLoaded stuff
  const THEME = global_theme_obj(theme_spec)
  const BASE = THEME.styles
  const basic_entries = Object.entries(BASE)
  basic_entries.forEach(([selector, styles]) => partition(selector, styles))

  const fireStyles = style_fire(theme_spec)
  // returns tuple [ configured_theme_obj, firestyles_fn ] 😈
  return [THEME, fireStyles]
}

export const [THEME, fireStyles] = themer(default_theme)

export default themer

fireStyles("button", { fontSize: ["10px", "20px", "30px", "40px"] }, ["buttons", "simple"])
fireStyles("ass", { fontSize: ["10px", "20px", "30px"] })
JSON.stringify(global_atom.deref(), null, 2) //?

// console.log(JSON.stringify(default_theme, null, 2)) //?

/*
{ ...,
  "styles": { 
    "root": {  👈 
      "font-family": "\"Open Sans\", system-ui", 
      "line-height": "1.625", 
      "font-weight": "400" 
    }, 
    "a": { 
      "color": "#2b6cb0", 
      "text-decoration": "none", 
      "&:hover": { 👈 
        "text-decoration": "underline" 
      } 
    }, 
    ...
  },
  ...
}
*/
/**
 * Pseudo
 * 1. global style atom contents (transacted)
 *  - media queries -> hash selectors -> style objects
 *  - hash selectors -> pseudo selectors -> style objects
 *  - hash selectors -> style objects
 *
 *
 * First pass:
 * take decamelized system_css and transact them into atom via cursors
 * e.g.:
 **/
