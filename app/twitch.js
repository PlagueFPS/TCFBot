require('dotenv').config()
const tmi = require('tmi.js')
const bot = require('./bot')
// import tmi from 'tmi.js'
// import { config } from 'dotenv'
// import { bot } from './bot.js'
// config()

const TwitchBot = () => {
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
    channels: ['plaguefps']
  })
  twitchClient.connect().catch(console.error)
  twitchClient.on('message', (channel, userstate, message, self) => {
    if (self) return
    else bot(twitchClient, channel, userstate, message)
  })
}

module.exports = TwitchBot