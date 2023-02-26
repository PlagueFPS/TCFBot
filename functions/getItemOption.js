const ItemsData = require('../data/items.json')

const getItemOption = (interaction) => {
  const itemOption = interaction.options.get('item')
  const argument = itemOption.value
  item = ItemsData.find(item => {
    const newArgument = argument.split(' ')
    const match = newArgument.some(argument => item._id.includes(argument))
    if (item._id === argument.toLowerCase().replace(/\s/g, '')) return item
    else if (match) return item
    else return
  })

  return item
}

module.exports = getItemOption