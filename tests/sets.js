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
