require('dotenv').config()
const tmi = require('tmi.js')
const COMMANDS = require('../utils/twitchcommands')

const TwitchBot = () => {
  const twitchClient = new tmi.Client({
    options: { debug: true },
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      username: process.env.TESTBOT_USERNAME,
      password: process.env.TESTOAUTH_TOKEN,
    },
    channels: ['plaguefps']
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
    
      const returnString = `@${userstate.username}, ${response(argument)}`
      return twitchClient.say(channel, returnString)
    }
  })
}

module.exports = TwitchBot