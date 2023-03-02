const CraftData = require('../data/crafts.json')

const getCraftOption = (interaction) => {
  const craftOption = interaction.options.get('craft')
  const argument = craftOption.value
  let craft = CraftData.find(craft => craft._id === argument.toLowerCase().replaceAll(/\s/g, ''))

  if (!craft) {
    const newArgument = argument.split(' ')
    craft = CraftData.find(craft => newArgument.every(argument => craft._id.includes(argument)))
  }

  if (!craft) {
    const newArgument = argument.split(' ')
    craft = CraftData.find(craft => newArgument.some(argument => craft._id.includes(argument)))
  }

  return craft
}

module.exports = getCraftOption