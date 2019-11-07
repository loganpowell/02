// import * as A from "@thi.ng/associative"
import * as rand from "@thi.ng/random"
import { Atom, Transacted } from "@thi.ng/atom"
import { setIn } from "@thi.ng/paths"
import systemetize from "@styled-system/css"
import deCamel from "decamelize-keys-deep"
import {
  at_media,
  injectStyleSheet,
  PRETTY,
  css as hiccup_css
} from "@thi.ng/hiccup-css"
import { theme } from "./theme"

/**
 *@todo: Test with Router.. tomato
 **/
const opts = process.env.NODE_ENV !== "production" ? { format: PRETTY } : null
const style_atom = new Atom({ body: {} })
const style_transaction = new Transacted(style_atom)

style_transaction.begin()

/**
 * @param {Atom} atom - a Transacted Atom
 * @param {Object} spec - CSS style object
 * @param {string} hash - a unique class-name
 * @param {string} heir - if a nested rule, the parent
 * Takes in a transacted atom and stores CSS rules
 * so that shared heirarchies can be reused instead of
 * naively storing every pseudo-selector and media-query
 * reduntantly for every class-name
 * */
const mergeInStyles = (atom, styles_obj, selector, parent = "body") => {
  const path = [parent, selector]
  const state = atom.deref()
  const has_parent = !!state[parent]
  const has_selector_w_parent = has_parent && !!state[parent][selector]
  console.log("has_parent:", has_parent)
  console.log("has_selector_w_parent:", has_selector_w_parent)
  console.log("path:", path)
  // parent -> selector path exists
  if (has_selector_w_parent) {
    atom.swapIn(path, sty => ({ ...sty, ...styles_obj }))
    // parent exists, but not with selector
  } else if (has_parent) {
    atom.swapIn(path, selectors => ({ ...selectors, [selector]: styles_obj }))
    // neither parent or selector exists
  } else {
    atom.swap(state => setIn(state, path, styles_obj))
  }
}

/**
 * This function tests against a few rules to decide
 * how the CSS should be stored in the Atom.
 * Every component that leverages this function
 * thereby registers its styles with the global,
 * CSS Atom.
 *
 * */

const partitionStyleEntriesByType = (entries, dot_hash) => {
  console.log(dot_hash, entries)
  for (let [selector, styles] of entries) {
    let is_pseudo_and = selector.slice(0, 1) === "&"
    let is_pseudo_col = selector.slice(0, 1) === ":"
    let is_obj = typeof styles === "object"
    if (is_obj && (is_pseudo_and || is_pseudo_col)) {
      // pseudo selector
      if (is_pseudo_col) selector = "&" + selector
      mergeInStyles(style_transaction, styles, dot_hash, selector)
    } else if (is_obj && selector.slice(0, 6) === "@media") {
      // media query
      const rgx = /\(.*?\)/g
      const media_query = selector.match(rgx)[0].slice(1, -1)
      mergeInStyles(style_transaction, styles, dot_hash, media_query)
      // unidentified object
    } else if (is_obj) {
      mergeInStyles(style_transaction, styles, dot_hash)
      // array
    } else {
      mergeInStyles(style_transaction, { [selector]: styles }, dot_hash)
    }
  }
}

let base_styles = Object.entries(deCamel(systemetize(theme.styles)(theme), "-"))
// console.log(base_styles)
base_styles.forEach(([tag, styles]) => {
  let style_array = Object.entries(styles)
  // console.log(tag, style_array)
  partitionStyleEntriesByType(style_array, tag)
})

// let formatted_base_styles = hiccup_css(deCamel(base_styles, "-"), opts)
// base_styles.forEach(([selector, styles]) =>
//   mergeInStyles(style_transaction, styles, selector)
// )
// partitionStyleEntriesByType("body", base_styles)

/**
 * Exports a HOF that takes in a theme object and returns
 * a custom hash. This hash is used to save css rules
 * under a unique class-name.
 * If no theme is given (called with ()) defaults to
 * packaged theme.js
 * */
export const themedStyleFire = (theme = theme) => (emmet, styles) => {
  const hash = `${emmet}_${rand.randomID(
    5,
    "id-",
    "0123456789abcdefghijklmnopqrstuvwxyz"
  )}`
  const dot_hash = `.${hash}`
  const entries = Object.entries(deCamel(systemetize(styles)(theme), "-"))
  // console.log(dot_hash, entries)
  partitionStyleEntriesByType(entries, dot_hash)
  return hash
}

export const fireStyles = themedStyleFire(theme)

/**
 * takes a CSS Transacted Atom and commits all
 * pending mutations at once, then buckets the
 * CSS in order so that precedence rules are
 * applied correctly (e.g., media-queries are reversed)
 * when mapped over in final application
 * */
const commitAndApplyStyleOrder = atom => {
  atom.commit()
  const init = style_atom.deref()
  console.log(init)
  const entries = Object.entries(init)
  let m_queries = []
  let css_basics = []
  let css_pseudos = []
  for (let entry of entries) {
    const query = entry[0]
    const hashes = entry[1]
    const hash_list = Object.entries(hashes)[0]
    const [m, q] = query.split(":")
    if (m === "&") {
      css_pseudos.push([hash_list[0], [`:${q}`, hash_list[1]]])
    } else if (q) {
      m_queries.push([at_media({ screen: true, [m]: q }, hash_list)])
    } else {
      css_basics.push(hash_list)
    }
  }
  return [css_basics, css_pseudos, m_queries.reverse()]
}

/**
 * Upon DOM content load, unwraps the CSS Atom and
 * injects styles for all registered components into
 * the <head> of the document
 * */
window.addEventListener("DOMContentLoaded", ev => {
  const ordered = commitAndApplyStyleOrder(style_transaction)
  for (let ready of ordered) {
    injectStyleSheet(hiccup_css(ready, opts))
  }
})
