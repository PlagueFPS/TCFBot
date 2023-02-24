import { config } from 'dotenv'
import tmi from 'tmi.js'
import { bot } from './bot.js'
config()

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
client.connect().catch(console.error)
client.on('message', (channel, userstate, message, self) => {
  if (self) return
  else bot(client, channel, userstate, message)
})