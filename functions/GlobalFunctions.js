import ItemsData from '../data/items.json' assert { type: 'json' }
import QuestsData from '../data/quests.json' assert { type: 'json' }
import UpgradesData from '../data/upgrades.json' assert { type: 'json' }
import CraftsData from '../data/crafts.json' assert { type: 'json' }
import ForgeData from '../data/forge.json' assert { type: 'json' }

const itemError = "Looks like that item doesn't exist. Please check the item name and try again"
const botSite = "https://main--plaguetcfbot.netlify.app"

export const calcRepPerWeight = (item) => {
  const repPerWeight = parseInt(item.rep) / parseInt(item.weight)
  return repPerWeight.toString()
}

const itemAmountNeeded = (item, neededFor) => {
  let data
  let dataAmount = 0
  let searchString = ''
  switch(neededFor) {
    case 'quests':
      data = QuestsData
      searchString = 'taskitem'
      break
    case 'upgrades':
      data = UpgradesData
      searchString = 'cost'
      break
    case 'crafts':
      data = CraftsData
      searchString = 'cost'
      break
    case 'forge':
      data = ForgeData
      searchString = 'cost'
  }

  data.map(data => {
    const entries = Object.entries(data)
    entries.map((entry, index) => {
      const [key, value] = entry

      if (key.includes(searchString) && value === item._id) {
        const newIndex = index + 1
        const [newKey, newValue] = entries[newIndex]

        if (newValue) dataAmount = dataAmount + parseInt(newValue)
      }
    })
  })

  return dataAmount.toString()
}

export const GlobalFunctions = {
  getItemStat: (message, stat) => {
    const item = ItemsData.find(item => {
      const newMessage = message.split(' ')
      const match = newMessage.some(message => item._id.includes(message))
      if (message.replace(/\s/g, '').includes(item._id)) return item
      else if (match) return item
      else return
    })
    const tracker = item && `https://tracker.thecyclefrontier.wiki/item-info/${item._id}`
    
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
  },
  renderLink: (name, link) => {
    try {
      return `Here is the link to ${name}: ${link}`
    }
    catch (error) {
      console.log(error)
    }
  },
  getHelp: () => {
    return `You can find a list of commands here: ${botSite}`
  },
  getBotInfo: () => {
    return `You can find out how to add the bot to your channel/server here: ${botSite}`
  }
}