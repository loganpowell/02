import * as A from '@thi.ng/associative'
import * as rand from '@thi.ng/random'
import { Atom, Cursor, Transacted } from '@thi.ng/atom'
import { updateIn, setIn } from '@thi.ng/paths'
import css from '@styled-system/css'
import deCamel from 'decamelize-keys-deep'
import * as C from '@thi.ng/checks'
import * as E from '@thi.ng/equiv'
import {
  at_media,
  injectStyleSheet,
  PRETTY,
  css as CSS,
  sec
} from '@thi.ng/hiccup-css'

/**
 *@todo: Test with Router.. tomato
 **/

const queries_atom = new Atom({})
const queries_table = new Transacted(queries_atom)

queries_table.begin()

const swap_depth_0 = (atom, hier) => atom.swap(v => ({ [hier]: {}, ...v }))

const swap_depth_1 = (atom, hash, hier) =>
  atom.swapIn(hier, v => ({ [hash]: {}, ...v }))

const swap_depth_2 = (atom, spec, hash, hier) =>
  atom.swapIn([hier, hash], v => ({ ...spec, ...v }))

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
const mergeInStyles = (atom, spec, hash, hier) => {
  const state = atom.deref()
  const lv_1s = Object.keys(state)
  const has_lv_1s = !!state[hier]
  const has_lv_2s = has_lv_1s && !!state[hier][hash]
  return has_lv_1s && has_lv_2s
    ? swap_depth_2(atom, spec, hash, hier)
    : has_lv_1s
    ? (swap_depth_1(atom, hash, hier), swap_depth_2(atom, spec, hash, hier))
    : (swap_depth_0(atom, hier),
      swap_depth_1(atom, hash, hier),
      swap_depth_2(atom, spec, hash, hier))
}

/**
 * A HOF that takes in a theme object and returns
 * a custom hash. This hash is used to save css rules
 * under a unique class-name.
 * This function tests against a few rules to decide
 * how the CSS should be stored in the Atom
 * */
export const fireStyles = theme => (styles, classname) => {
  const hash = `${classname}_${rand.randomID(
    5,
    'id-',
    '0123456789abcdefghijklmnopqrstuvwxyz'
  )}`
  const dot_hash = `.${hash}`
  const entries = Object.entries(deCamel(css(styles)(theme), '-'))
  for (let [prop, spec] of entries) {
    if (C.isObject(spec) && prop.slice(0, 1) === '&') {
      // pseudo selector
      mergeInStyles(queries_table, spec, dot_hash, prop)
    } else if (C.isObject(spec) && prop.slice(0, 6) === '@media') {
      // media query
      const rgx = /\(.*?\)/g
      const media_query = prop.match(rgx)[0].slice(1, -1)
      mergeInStyles(queries_table, spec, dot_hash, media_query)
    } else {
      // nested object
      mergeInStyles(queries_table, { [prop]: spec }, dot_hash)
    }
  }
  return hash
}

/**
 * takes a CSS Transacted Atom and commits all
 * pending mutations at once, then buckets the
 * CSS in order so that precedence rules are
 * applied correctly (e.g., media-queries are reversed)
 * when mapped over in final application
 * */
const unwrap_mediaQueries = atom => {
  atom.commit()
  const init = queries_atom.deref()
  const entries = Object.entries(init)
  // console.table(entries)
  let m_queries = []
  let css_basics = []
  let css_pseudos = []
  for (let entry of entries) {
    const query = entry[0]
    const hashes = entry[1]
    const hash_list = Object.entries(hashes)[0]
    // console.log('hash_list:', hash_list)
    const [m, q] = query.split(':')

    if (m === '&') {
      css_pseudos.push([hash_list[0], [`:${q}`, hash_list[1]]])
    } else if (q) {
      m_queries.push([at_media({ screen: true, [m]: q }, hash_list)])
    } else {
      css_basics.push([hash_list])
    }
  }
  return [m_queries.reverse(), css_pseudos, css_basics]
}

/**
 * Upon DOM content load, unwraps the CSS Atom and
 * injects styles for all registered components into
 * the <head> of the document
 * */
window.addEventListener('DOMContentLoaded', ev => {
  const ordered = unwrap_mediaQueries(queries_table)
  for (let ready of ordered) {
    injectStyleSheet(CSS(ready), { format: PRETTY })
  }
})
