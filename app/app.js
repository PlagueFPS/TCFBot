import tmi from 'tmi.js'
import { COMMANDS } from '../utils/commands'
import { GlobalFunctions } from '../functions/GlobalFunctions'

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
    GlobalFunctions.getItemStat(client, channel, userstate, message, 'price')
  }
  else if (message.toLowerCase().startsWith(COMMANDS.weight) || message.toLowerCase().startsWith(COMMANDS.shortWeight)) {
    GlobalFunctions.getItemStat(client, channel, userstate, message, 'weight')
  }
  else if (message.toLowerCase().startsWith(COMMANDS.rep) || message.toLowerCase().startsWith(COMMANDS.shortRep)) {
    GlobalFunctions.getItemStat(client, channel, userstate, message, 'rep')
  }
  else if (message.toLowerCase().startsWith(COMMANDS.rarity) || message.toLowerCase().startsWith(COMMANDS.shortRarity)) {
    GlobalFunctions.getItemStat(client, channel, userstate, message, 'rarity')
  }
  else if (message.toLowerCase().startsWith(COMMANDS.value) || message.toLowerCase().startsWith(COMMANDS.shortValue)) {
    GlobalFunctions.getItemStat(client, channel, userstate, message, 'value')
  }
})