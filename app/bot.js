const ItemsData = require('../data/items.json')
const COMMANDS = require('../utils/twitchcommands')
const ItemEmbed = require('../utils/embeds')
// import ItemsData from '../data/items.json'
// import { COMMANDS } from '../utils/twitchcommands.js'
// import { ItemEmbed } from '../utils/embeds.js'

const regExpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

const bot = (client, channel, userstate, message, msg) => {
  const formattedMessage = message.toLowerCase()
  if (formattedMessage.match(regExpCommand)) {
    const [raw, command, argument] = formattedMessage.match(regExpCommand)
    const { response } = COMMANDS[command] || {}
    
    if (typeof response !== 'function') return 
  
    const returnString = `@${userstate.username}, ${response(argument)}`
    return client.say(channel, returnString)
  }
}

module.exports = bot