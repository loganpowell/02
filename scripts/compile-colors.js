const fs = require('fs')
const util = require('util')
const snakeCase = require('decamelize-keys-deep')

const readFile = util.promisify(fs.readFile)

const files = fs
  .readdirSync('src/styles/colors')
  .map(file => `src/styles/colors/${file}`)

const fileReducer = async (acc, cur) => {
  const todo = await Promise.resolve(acc)
  return readFile(cur)
    .then(res => {
      const data = JSON.parse(res)
      const name = data.props[0].name
      const col = data.props[0].value

      const isString = v => typeof v === 'string'
      const isObject = v => typeof v === 'object'

      const valsArray = col.filter(item => isString(item.value))
      const valsObj = col.filter(item => isObject(item.value))
      const objName = valsObj.length < 1 ? '' : valsObj[0].name

      if (objName === '') {
        return Object.assign(todo, {
          [snakeCase(name)]: valsArray.map(val => val.value)
        })
      } else {
        Object.assign(todo, {
          [snakeCase(name)]: valsArray.map(val => val.value)
        })
        return Object.assign(todo, {
          [snakeCase(`${name}-${objName}`)]: valsObj[0].value
            .filter(v => v.value)
            .map(g => g.value)
        })
      }
    })
    .catch(err => console.warn(err))
}

const reduceFiles = files.reduce(async (acc, cur) => {
  // console.log("cur", cur)
  const result = await fileReducer(acc, cur)
  // console.log("result:", result)
  return result
}, {})

// console.log(reduceFiles)
reduceFiles.then(res =>
  fs.writeFileSync('src/styles/colors-uswds.json', JSON.stringify(res, null, 2))
)
