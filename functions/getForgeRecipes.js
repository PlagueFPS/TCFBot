const ForgeData = require('../data/forge.json')

const getForgeRecipes = (item) => {
  const newRecipes = []

  ForgeData.map(forge => {
    if (forge._id !== item._id) {
      const matchedRecipe = Object.values(forge).toLowerCase().replaceAll(/\s/g, '').includes(item._id)

      if (matchedRecipe) newRecipes.push(forge)
      else return '\u200b'
    }
  })

  return newRecipes
}

module.exports = getForgeRecipes