const ItemsData = require('../data/items.json')
const itemAmountNeeded = require('../functions/itemAmountNeeded')
const calcRepPerWeight = require('../functions/calcRepPerWeight')

const getItemStat = (message, stat) => {
  const item = ItemsData.find(item => {
    const newMessage = message.split(' ')
    const match = newMessage.some(message => item._id.includes(message))
    if (message.replace(/\s/g, '').includes(item._id)) return item
    else if (match) return item
    else return
  })
  const tracker = item && `https://tracker.thecyclefrontier.wiki/item-info/${item._id}`
  const itemError = "Looks like that item doesn't exist. Please check the item name and try again"

  if (item) {
    try {
      switch(stat) {
        case 'price':
          return `The Sell Price of a ${item.name} is ${item.price.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Kmarks.`
        case 'weight':
          return `The Weight of a ${item.name} is ${item.weight.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.`
        case 'rarity':
          return `The Rarity of a ${item.name} is ${item.rarity}.`
        case 'rep':
          return `The Faction Rep of a ${item.name} is ${item.rep.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Rep.`
        case 'desc':
          return `A ${item.name} ${item.desc}.`
        case 'value':
          return `The Value Per Weight of a ${item.name} is ${item.valuePerWeight.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Kmarks, and ${calcRepPerWeight(item)} Rep.`
        case 'Quest Amount':
          return `You'll need a total of ${itemAmountNeeded(item, 'quests')} ${item.name} for all Quests.`
        case 'Upgrade Amount':
          return `You'll need a total of ${itemAmountNeeded(item, 'upgrades')} ${item.name} for all Quarter Upgrades.`
        case 'Craft Amount':
          return `You'll need a total of ${itemAmountNeeded(item, 'crafts')} ${item.name} for all Crafts.`
        case 'Forge Amount':
          return `You'll need a total of ${itemAmountNeeded(item, 'forge')} ${item.name} for all Forge Items.`
        case 'info':
          return `Find info on ${item.name}(s) here: ${tracker}`
      }
    }
    catch (error) {
      console.log(error) 
    }
  }
  else {
    try {
      return itemError
    }
    catch (error) {
      console.log(error)
    }
  }
}

module.exports = getItemStat