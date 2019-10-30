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

const queries = new Atom({})
const queries_table = new Transacted(queries)

queries_table.begin()

// test
const swap_depth_0 = (atom, x0 = null) =>
  x0
    ? atom.swap(v => ({
        [x0]: {},
        ...v
      }))
    : null

// test for existence then...
const swap_depth_1 = (atom, x1, x0 = null) =>
  x0 ? atom.swapIn(x0, v => ({ [x1]: {}, ...v })) : swap_depth_0(atom, x1)

const swap_depth_2 = (atom, x2, x1, x0 = null) =>
  x0
    ? atom.swapIn([x0, x1], v => ({ ...x2, ...v }))
    : atom.swapIn([x1], v => ({ ...x2, ...v }))

const mergeInStyles = (atom, x2, x1, x0) => {
  const state = atom.deref()
  const lv_1s = Object.keys(state)
  const has_lv_1s = !!state[x0]
  const has_lv_2s = has_lv_1s && !!state[x0][x1]
  return has_lv_1s && has_lv_2s
    ? swap_depth_2(atom, x2, x1, x0)
    : has_lv_1s
    ? (swap_depth_1(atom, x1, x0), swap_depth_2(atom, x2, x1, x0))
    : (swap_depth_0(atom, x0),
      swap_depth_1(atom, x1, x0),
      swap_depth_2(atom, x2, x1, x0))
}
// mergeInStyles(
//   queries_table,
//   {
//     'font-size': '2rem',
//     margin: '24px'
//   },
//   'asd-1'
// ) //?
// mergeInStyles(
//   queries_table,
//   {
//     'font-size': '2m',
//     'margin-right': '24px'
//   },
//   'asd-2'
// )
// mergeInStyles(
//   queries_table,
//   {
//     'font-size': '2rem',
//     margin: '24px'
//   },
//   'asd-1',
//   'min-width: 640px'
// )
// mergeInStyles(
//   queries_table,
//   {
//     'font-size': '2rem',
//     margin: '24px'
//   },
//   'asd-2',
//   'min-width: 640px'
// )
// mergeInStyles(
//   queries_table,
//   {
//     'font-size': '2rem',
//     margin: '24px'
//   },
//   'asd-2',
//   'min-width: 650px'
// ) //?

/**
entries: [ [ 'padding-top', '0.5rem' ], 
  [ 'padding-bottom', '0.5rem' ], 
  [ 'padding-left', '1rem' ], 
  [ 'padding-right', '1rem' ], 
  [ 'cursor', 'pointer' ], 
  [ 'line-height', 'inherit' ], 
  [ 'background-color', '#2b6cb0' ], 
  [ 'border', 'none' ], 
  [ 'color', '#fff' ], 
  [ 'font-weight', '700' ], 
  [ 'border-radius', '0.25rem' ], 
  [ '&:hover', { 'background-color': '#2c5282' } ], 
  [ 'font-size', '100px' ], 
  [ '@media screen and (min-width: 640px)', 
    { 'font-size': '2rem', margin: '24px' } ], 
  [ '@media screen and (min-width: 768px)', 
    { 'font-size': '32px', margin: '48px' } ], 
  [ '@media screen and (min-width: 1024px)', 
    { 'font-size': '44px' } ], 
  [ 'margin', '18px' ] ] 

**/

export const fireStyles = theme => (styles, classname) => {
  const hash = `${classname}_${rand.randomID(
    5,
    'id-',
    '0123456789abcdefghijklmnopqrstuvwxyz'
  )}`

  const dot_hash = `.${hash}`
  const entries = Object.entries(deCamel(css(styles)(theme), '-'))
  for (let [prop, spec] of entries) {
    // pseudo selector
    if (C.isObject(spec) && prop.slice(0, 1) === '&') {
      // last.push([prop.slice(1), spec])
      mergeInStyles(queries_table, spec, dot_hash, prop)

      // media query
    } else if (C.isObject(spec) && prop.slice(0, 6) === '@media') {
      const rgx = /\(.*?\)/g
      // const [media, query] = prop
      const media_query = prop.match(rgx)[0].slice(1, -1)
      // .split(': ')
      // const props = last.push(
      //   at_media({ screen: true, [media]: query }, [dot_hash, spec])
      // )
      mergeInStyles(queries_table, spec, dot_hash, media_query)
      // nested object
    } else {
      // first.push({ [prop]: spec })
      mergeInStyles(queries_table, { [prop]: spec }, dot_hash)
    }
  }

  return hash
}

const unwrap_mediaQueries = atom => {
  atom.commit()
  const init = atom.deref()
  const entries = Object.entries(init)
  let queries = []
  let basics = []
  let pseudos = []
  for (let entry of entries) {
    const query = entry[0]
    const hashes = entry[1]
    const hash_list = Object.entries(hashes)
    const [m, q] = query.split(':')

    if (m === '&') {
      console.log('q:', q) //? hover
      console.log('query:', query) //? &:hover
      console.log('hashes:', hashes) //? {".button_id-ru4ao": {background-color: "#feb2b2"}
      console.log('hash_list:', hash_list) //? [".button_id-ru4ao", {background-color: "#2c5282"}]
      pseudos.push([hash_list[0][0], [`:${q}`, hash_list[0][1]]])
    } else if (q) {
      queries.push([at_media({ screen: true, [m]: q }, hash_list)])
    } else {
      basics.push([query, hashes])
    }
  }
  return [basics, queries, pseudos]
}
// <style type="text/css">.no-fouc {display: none;}</style>
// injectStyleSheet('.no-fouc {visibility: hidden;}')
// const s = injectStyleSheet(globalCSS)
window.addEventListener('DOMContentLoaded', e => {
  const [basics, queries, pseudos] = unwrap_mediaQueries(queries_table)
  console.log('pseudos:', JSON.stringify(pseudos))
  const basic_styles = CSS(basics, {
    format: PRETTY
  })
  const media_queries = CSS(queries, {
    format: PRETTY
  })
  const pseudo_styles = CSS(...pseudos, {
    format: PRETTY
  })
  injectStyleSheet(basic_styles)
  injectStyleSheet(pseudo_styles)
  injectStyleSheet(media_queries)
})
