const colors = require('../../data/ratp-colors.json')

module.exports = {
  getColors: () => colors,
  getColor: (_, { name }) => colors.find(c => c.name === name),
  getColorNames: () => colors.reduce((acc, curr) => [...acc, curr.name], [])
}
