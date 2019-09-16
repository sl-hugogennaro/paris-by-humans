const generator = (baseObj, dirPath, merger) => {
  const fs = require('fs');
  const files = fs.readdirSync(dirPath);
  let merged = baseObj
  for (const fileName of files) {
    if (fileName !== "index.js")
      merged = merger(merged, require(`${dirPath}/${fileName}`))
  }
  return merged
}

module.exports = {
  objGenerator: (baseObj, dirPath) => generator(baseObj, dirPath, (merge, newData) => { return { ...merge, ...newData } }),
  strGenerator: (baseObj, dirPath) => generator(baseObj, dirPath, (merge, newData) => { return `${merge}${newData}` })
}
