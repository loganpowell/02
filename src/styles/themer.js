import * as rand from "@thi.ng/random"
import { Atom, Transacted, Cursor } from "@thi.ng/atom"
import { setIn, getIn } from "@thi.ng/paths"
import system_css from "@styled-system/css"
import de_cameled from "decamelize-keys-deep"
import { at_media, injectStyleSheet, PRETTY, css as hiccup_css } from "@thi.ng/hiccup-css"

import default_theme from "./theme"
import hljs from "highlight.js/lib/highlight"
import javascript from "highlight.js/lib/languages/javascript"
import typescript from "highlight.js/lib/languages/typescript"
// import fs from "fs"

// const syntax_styles = fs.readdirSync("./node_modules/highlight.js/styles", "utf8") //?

import "highlight.js/styles/mono-blue.css"
/*
Other nice ones:
import "highlight.js/styles/ascetic.css"
import "highlight.js/styles/github-gist.css"
import "highlight.js/styles/nord.css"
import "highlight.js/styles/monokai-sublime.css"
*/
hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("typescript", typescript)

/**
 * Pseudo
 * 1. global style atom contents (transacted)
 *  - media queries -> hash selectors -> style objects
 *  - hash selectors -> pseudo selectors -> style objects
 *  - hash selectors -> style objects
 **/
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
  basics: {},
  pseudos: {},
  queries: {}
}
const global_atom = new Atom(global_structure)

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

const q_crsr = new Cursor(global_atom, "queries")
const p_crsr = new Cursor(global_atom, "pseudos")
const b_crsr = new Cursor(global_atom, "basics")

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
        partitioner(p_crsr, selector, key.slice(1), val)
      } else if (is_query) {
        const rgx = /\(.*?\)/g
        const media_query = key.match(rgx)[0].slice(1, -1)
        partitioner(q_crsr, media_query, selector, val)
      } else if (is_basic) {
        partitioner(b_crsr, selector, { [key]: val })
      } else {
        log("partition failure:", { selector, styles })
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
  // -> to injection! 💉
  partition(dot_hash, computed_styles)

  return hash
}

// registers theme-spec compliant theme
export const themer = theme_spec => {
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

const dereference = (atom, opts) => {
  const entries = Object.entries(atom.deref())
  let results = []
  entries.forEach(([cursor, styles]) => {
    let style_array = Object.entries(styles)
    switch (cursor) {
      case "basics":
        style_array.forEach(style => {
          results.push(style)
        })
        break
      case "pseudos":
        style_array.forEach(([tag, style]) => {
          results.push([tag, ...Object.entries(style)])
        })
        break
      case "queries":
        style_array.forEach(style => {
          let [m, q] = style[0].split(":")
          results.push([at_media({ screen: true, [m]: q }, Object.entries(style[1]))])
        })
        break
      default:
        log("no case found for:", cursor)
    }
  })
  // const results = hiccup_css(res)

  return hiccup_css(results, opts)
}
//?

const opts = process.env.NODE_ENV !== "production" ? { format: PRETTY } : null

window.addEventListener("DOMContentLoaded", ev => {
  const formatted_styles = dereference(global_atom, opts)
  injectStyleSheet(formatted_styles)
})

window.addEventListener("load", ev => {
  document.querySelectorAll("pre code").forEach(block => {
    hljs.highlightBlock(block)
  })
})
