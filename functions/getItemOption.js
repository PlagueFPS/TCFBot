const ItemsData = require('../data/items.json')

const getItemOption = (interaction) => {
  const itemOption = interaction.options.get('item')
  const argument = itemOption.value
  let item = ItemsData.find(item => item._id === argument.toLowerCase().replaceAll(/\s/g, ''))

  if (!item) {
    const newArgument = argument.split(' ')
    item = ItemsData.find(item => newArgument.every(argument => item._id.includes(argument)))
  }

  if (!item) {
    const newArgument = argument.split(' ')
    item = ItemsData.find(item => newArgument.some(argument => item._id.includes(argument)))
  }


  return item
}

module.exports = getItemOption