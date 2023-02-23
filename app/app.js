require('dotenv').config()
import tmi from 'tmi.js'
import { bot } from './bot'

const client = new tmi.Client({
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
client.connect()
client.on('message', (channel, userstate, message, self) => {
  const formattedMessage = message.toLowerCase()
  if (self) return
  else bot(client, channel, userstate, formattedMessage)
})