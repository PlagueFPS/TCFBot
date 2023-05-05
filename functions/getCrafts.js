const CraftData = require('../data/crafts.json')

const getCrafts = (item) => {
  const newRecipes = []

  CraftData.map(craft => {
    const matchedCraft = Object.values(craft).includes(item.name)

    if (matchedCraft) newRecipes.push(craft)
    else return '\u200b'
  })

  return newRecipes
}

module.exports = getCrafts