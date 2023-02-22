import ItemsData from '../data/items.json'
import QuestsData from '../data/quests.json'
import UpgradesData from '../data/upgrades.json'
import CraftsData from '../data/crafts.json'
import ForgeData from '../data/forge.json'

const itemError = "Looks like that item doesn't exist. Please check the item name and try again"

const calcRepPerWeight = (item) => {
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
  getItemStat: (client, channel, userstate, message, stat) => {
    const item = ItemsData.find(item => {
      const newMessage = message.split(' ')
      const match = newMessage.some(message => item._id.includes(message))
      if (message.replace(/\s/g, '').includes(item._id)) return item
      else if (match) return item
      else return
    })
    
    if (item) {
      try {
        switch(stat) {
          case 'price':
            return client.say(channel, `@${userstate.username}, The Sell Price of a ${item.name} is ${item.price.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Kmarks.`)
          case 'weight':
            return client.say(channel, `@${userstate.username}, The Weight of a ${item.name} is ${item.weight.replace(/\B(?=(\d{3})+(?!\d))/g,",")}.`)
          case 'rarity':
            return client.say(channel, `@${userstate.username}, The Rarity of a ${item.name} is ${item.rarity}.`)
          case 'rep':
            return client.say(channel, `@${userstate.username}, The Faction Rep of a ${item.name} is ${item.rep.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Rep.`)
          case 'desc':
            return client.say(channel, `@${userstate.username}, A ${item.name} ${item.desc}.`)
          case 'value':
            return client.say(channel, `@${userstate.username}, 
              The Value Per Weight of a ${item.name} is ${item.valuePerWeight.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Kmarks, and ${calcRepPerWeight(item)} Rep.`)
          case 'Quest Amount':
            return client.say(channel, `@${userstate.username}, You'll need a total of ${itemAmountNeeded(item, 'quests')} ${item.name} for all Quests.`)
          case 'Upgrade Amount':
            return client.say(channel, `@${userstate.username}, You'll need a total of ${itemAmountNeeded(item, 'upgrades')} ${item.name} for all Quarter Upgrades.`)
          case 'Craft Amount':
            return client.say(channel, `@${userstate.username}, You'll need a total of ${itemAmountNeeded(item, 'crafts')} ${item.name} for all Crafts.`)
          case 'Forge Amount':
            return client.say(channel, `@${userstate.username}, You'll need a total of ${itemAmountNeeded(item, 'forge')} ${item.name} for all Forge Items.`)
  
        }
      }
      catch (error) {
        console.log(error) 
      }
    }
    else {
      try {
        client.say(channel, `@${userstate.username}, ${itemError}.`)
      }
      catch (error) {
        console.log(error)
      }
    }
  },
  renderLink: (client, channel, userstate, name, link) => {
    try {
      return client.say(channel, `@${userstate.username}, Here is the link to ${name}: ${link}`)
    }
    catch (error) {
      console.log(error)
    }
  },
  getItemInfo: (client, channel, userstate, message) => {
    const item = ItemsData.find(item => {
      const newMessage = message.split(' ')
      const match = newMessage.some(message => item._id.includes(message))
      if (message.replace(/\s/g, '').includes(item._id)) return item
      else if (match) return item
      else return
    })
    const tracker = item && `https://tracker.thecyclefrontier.wiki/item-info/${item._id}`
    const wiki = item && `https://thecyclefrontier.wiki/wiki/${item.name}`

    if (item) {
      try {
        return client.say(channel, `@${userstate.username}, Find info on ${item.name}(s) here: ${tracker} or ${wiki.replace(' ', '_')}`)
      }
      catch (error) {
        console.log(error)
      }
    }
    else {
      try {
        return client.say(channel, `@${userstate.username}, ${itemError}.`)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
}