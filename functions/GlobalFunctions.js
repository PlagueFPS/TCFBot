import itemsData from '../data/items.json'

const calcRepPerWeight = (item) => {
  const repPerWeight = parseInt(item.rep) / parseInt(item.weight)
  return repPerWeight.toString()
}

export const GlobalFunctions = {
  getItemStat: (client, channel, userstate, message, stat) => {
    const item = itemsData.find(item => {
      const newMessage = message.split(' ')
      const match = newMessage.some(message => item._id.includes(message))
      if (message.toLowerCase().replace(/\s/g, '').includes(item._id)) return item
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
  
        }
      }
      catch (error) {
        console.log(error) 
      }
    }
    else {
      try {
        client.say(channel, `@${userstate.username}, Looks like that item doesn't exist. Please check the item name and try again.`)
      }
      catch (error) {
        console.log(error)
      }
    }
  },
}