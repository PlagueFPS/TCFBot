const CraftData = require('../data/crafts.json')

const getCrafts = (item) => {
  const newRecipes = []

  CraftData.map(craft => {
    const matchedCraft = Object.values(craft).toLowerCase().replaceAll(/\s/g, '').includes(item._id)

    if (matchedCraft) newRecipes.push(craft)
    else return '\u200b'
  })

  return newRecipes
}

module.exports = getCrafts