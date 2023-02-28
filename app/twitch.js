require('dotenv').config()
const tmi = require('tmi.js')
const getUsers = require('../functions/getUsers')
const COMMANDS = require('../utils/twitchcommands')

const TwitchBot = async () => {
  const channelData = await getUsers()
  const channels = channelData.map(channel => channel.user)
  const twitchClient = new tmi.Client({
    options: { debug: true },
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      username: process.env.BOT_USERNAME,
      password: process.env.OAUTH_TOKEN,
    },
    channels: ['plaguetcfbot', ...channels]
  })
  twitchClient.connect().catch(console.error)
  twitchClient.on('message', (channel, userstate, message, self) => {
    if (self) return
    const regExpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)
    const formattedMessage = message.toLowerCase()

    if (formattedMessage.match(regExpCommand)) {
      const [raw, command, argument] = formattedMessage.match(regExpCommand)
      const { response } = COMMANDS[command] || {}
      
      if (typeof response !== 'function') return 
    
      const returnString = `@${userstate.username}, ${response(argument, twitchClient, userstate)}`
      return twitchClient.say(channel, returnString)
    }
  })
}

module.exports = TwitchBot