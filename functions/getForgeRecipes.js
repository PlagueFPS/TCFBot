const ForgeData = require('../data/forge.json')

const getForgeRecipes = (item) => {
  const newRecipes = []

  ForgeData.map(forge => {
    if (forge._id !== item._id) {
      const matchedRecipe = Object.values(forge).includes(item.name)

      if (matchedRecipe) newRecipes.push(forge)
      else return '\u200b'
    }
  })

  return [...new Set(newRecipes)]
}

module.exports = getForgeRecipes