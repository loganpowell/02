import * as a from '@thi.ng/associative'

const obj1 = { a: 'b' }

const obj2 = { a: 'b' }

const set = new a.ArraySet([obj1])

set.has(obj2) //?

const mySet = new Set([
  JSON.stringify({ obj_key1: [1, 2] }),
  2,
  'string',
  ['a', 'b']
])

var State
;(function(State) {
  State[(State['BLOCKQUOTE'] = 0)] = 'BLOCKQUOTE'
  State[(State['CODE'] = 1)] = 'CODE'
  State[(State['CODEBLOCK'] = 2)] = 'CODEBLOCK'
  State[(State['EMPHASIS'] = 3)] = 'EMPHASIS'
  State[(State['END_BLOCKQUOTE'] = 4)] = 'END_BLOCKQUOTE'
  State[(State['END_LI'] = 5)] = 'END_LI'
  State[(State['END_PARA'] = 6)] = 'END_PARA'
  State[(State['END_HEADING'] = 7)] = 'END_HEADING'
  State[(State['END_TABLE'] = 8)] = 'END_TABLE'
  State[(State['HEADING'] = 9)] = 'HEADING'
  State[(State['IMG'] = 10)] = 'IMG'
  State[(State['LINK'] = 11)] = 'LINK'
  State[(State['LI'] = 12)] = 'LI'
  State[(State['PARA'] = 13)] = 'PARA'
  State[(State['START'] = 14)] = 'START'
  State[(State['START_CODEBLOCK'] = 15)] = 'START_CODEBLOCK'
  State[(State['STRIKE'] = 16)] = 'STRIKE'
  State[(State['STRONG'] = 17)] = 'STRONG'
  State[(State['TABLE'] = 18)] = 'TABLE'
})(State || (State = {}))

State //?

let Bloop
;(function(Bloop) {
  Bloop[0] = 'Bleep'
})(Bloop || (Bloop = {}))

Bloop //?
