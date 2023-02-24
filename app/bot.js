import { COMMANDS } from '../utils/commands.js'

const regExpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

export const bot = (client, channel, userstate, message, msg) => {
  const formattedMessage = message.toLowerCase()
  if (formattedMessage.match(regExpCommand)) {
    const [raw, command, argument] = formattedMessage.match(regExpCommand)
    const { response } = COMMANDS[command] || {}
    
    if (typeof response !== 'function') return 
  
    if (!channel && !userstate) return msg.reply(response(argument))
    else {
      const returnString = `@${userstate.username}, ${response(argument)}`
      return client.say(channel, returnString)
    }
  }
}