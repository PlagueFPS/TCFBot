const ForgeData = require('../data/forge.json')

const getForgeOption = (interaction) => {
  const ForgeOption = interaction.options.get('recipe')
  const argument = ForgeOption.value
  let forge = ForgeData.find(forge => forge._id === argument.toLowerCase().replaceAll(/\s/g, ''))

  if (!forge) {
    const newArgument = argument.split(' ')
    forge = ForgeData.find(forge => newArgument.every(argument => forge._id.includes(argument)))
  }

  if (!forge) {
    const newArgument = argument.split(' ')
    forge = ForgeData.find(forge => newArgument.some(argument => forge._id.includes(argument)))
  }

  return forge
}

module.exports = getForgeOption