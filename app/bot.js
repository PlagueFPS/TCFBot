import ItemsData from '../data/items.json' assert { type: 'json' }
import { COMMANDS } from '../utils/commands.js'
import { ItemEmbed } from '../utils/embeds.js'

const regExpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

export const bot = (client, channel, userstate, message, msg) => {
  const formattedMessage = message.toLowerCase()
  if (formattedMessage.match(regExpCommand)) {
    const [raw, command, argument] = formattedMessage.match(regExpCommand)
    const { response } = COMMANDS[command] || {}
    
    if (typeof response !== 'function') return 
  
    if (!channel && !userstate) {
      const item = ItemsData.find(item => {
        const newMessage = argument.split(' ')
        const match = newMessage.some(message => item._id.includes(message))
        if (message.replace(/\s/g, '').includes(item._id)) return item
        else if (match) return item
        else return
      })
      const itemEmbed = ItemEmbed(item)

      msg.reply({ embeds: [itemEmbed] })
    }
    else {
      const returnString = `@${userstate.username}, ${response(argument)}`
      return client.say(channel, returnString)
    }
  }
}