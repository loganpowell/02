const xf = require("@thi.ng/transducers")
const mil = 1000000

console.time("⏲ for of")
let todo_for_of = []
for (let i of Array(mil)) {
  todo_for_of.push(i++)
}
// @ 40 ms
console.timeEnd("⏲ for of")

console.time("⏲ for")
let todo_for = []
for (let i; i < Array(mil).length; i++) {
  todo_for.push(i++)
}
// @ 40 ms
console.timeEnd("⏲ for")

console.time("⏲ Array.map")
const q = [...Array(mil).map((a, i, d) => a++)]
// @ 30 ms
console.timeEnd("⏲ Array.map")

console.time("⏲ forEach")
let todo_forEach = []
const r = Array(mil).forEach((a, i, d) => todo_forEach.push(a++))
// @ 3 ms
console.timeEnd("⏲ forEach")

console.time("⏲ @thi.ng/transducers.map")
const z = [...xf.map((c, i, d) => i++, Array(mil))]
// @ 30 ms
console.timeEnd("⏲ @thi.ng/transducers.map")

/*
⏲: 46.488ms ​​​​​

⏲: 4.809ms ​​​​​

⏲: 43.326ms ​​​​​

⏲: 12.647ms ​​​​​

⏲: 5.664ms ​​​​​
*/

const ass = "butt"
