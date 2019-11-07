const fs = require('fs')

const exportAllFromDir = dir => {
  const exports = fs.readdirSync(dir).reduce((acc, cur) => {
    if (cur !== 'main.js') {
      return acc.concat(`export * from "./${cur}"`)
      // return acc.concat(`console.log("${cur}")`)
    } else return acc
  }, [])
  return exports
}

fs.writeFileSync(
  'src/index.js',
  exportAllFromDir('./src')
    .map(cur => cur)
    .join('\n')
) //?
