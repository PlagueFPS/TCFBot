import tmi from 'tmi.js'
import { COMMANDS } from '../utils/commands'
import itemsData from '../data/items.json'

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: 'plaguetcfbot',
    password: 'dfe3a2z767jp60c4fsjixwrph0sz5n',
  },
  channels: ['plaguefps']
})
client.connect()
client.on('message', (channel, userstate, message, self) => {
  if (self) return
  if (message.toLowerCase().startsWith(COMMANDS.price) || message.toLowerCase().startsWith(COMMANDS.shortPrice)) {
    getPrice(client, channel, userstate, message)
  }
})

const getPrice = (client, channel, userstate, message) => {
  const item = itemsData.find(item => {
    const newMessage = message.split(' ')
    const match = newMessage.some(message => item._id.includes(message))

    if (message.toLowerCase().replace(/\s/g, '').includes(item._id)) return item
    else if (match) return item
    else return
  })
  
  if (item) client.say(channel, `@${userstate.username}, The Sell Price of a ${item.name} is ${item.price.replace(/\B(?=(\d{3})+(?!\d))/g,",")} Kmarks.`)
  else client.say(channel, `@${userstate.username}, Looks like that item doesn't exist. Please check the item name and try again.`)
}