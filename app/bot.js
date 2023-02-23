import { COMMANDS } from '../utils/commands'

const regExpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

export const bot = (client, channel, userstate, message) => {
  const formattedMessage = message.toLowerCase()
  const [raw, command, argument] = formattedMessage.match(regExpCommand)
  const { response } = COMMANDS[command] || {}
  
  if (typeof response !== 'function') return 

  const returnString = `@${userstate.username}, ${response(argument)}`
  return client.say(channel, returnString)
}