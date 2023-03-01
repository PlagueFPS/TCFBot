const getItemStat = require('../functions/getItemStat')
const renderLink = require('../functions/renderLink')
const getHelp = require('../functions/getHelp')
const getBotInfo = require('../functions/getBotInfo')
const joinChannel = require('../functions/joinChannel')
const leaveChannel = require('../functions/leaveChannel')

const COMMANDS = {
  price: {
    response: (message) => getItemStat(message, 'price')
  },
  p: {
    response: (message) => getItemStat(message, 'price')
  },
  weight: {
    response: (message) => getItemStat(message, 'weight')
  },
  w: {
    response: (message) => getItemStat(message, 'weight')
  },
  factionrep: {
    response: (message) => getItemStat(message, 'rep')
  },
  rep: {
    response: (message) => getItemStat(message, 'rep')
  },
  rarity: {
    response: (message) => getItemStat(message, 'rarity')
  },
  r: {
    response: (message) => getItemStat(message, 'rarity')
  },
  value: {
    response: (message) => getItemStat(message, 'value')
  },
  v: {
    response: (message) => getItemStat(message, 'value')
  },
  wiki: {
    response: () => renderLink('Official Wiki', 'https://thecyclefrontier.wiki/wiki/Main_Page')
  },
  map: {
    response: (message) => renderLink('Wiki Interactive Map', 'https://tools.thecyclefrontier.wiki/map', message)
  },
  tracker: {
    response: () => renderLink('Wiki Item Tracker', 'https://tracker.thecyclefrontier.wiki')
  },
  loadout: {
    response: () => renderLink('Wiki Loadout Generator', 'https://tools.thecyclefrontier.wiki/loadout')
  },
  calc: {
    response: () => renderLink('Wiki Weapon Calculator', 'https://tools.thecyclefrontier.wiki/calculator')
  },
  guesser: {
    response: () => renderLink('Wiki Fortuna Guesser', 'https://fortunaguessr.com')
  },
  progress: {
    response: () => renderLink('Wiki Progress Tracker', 'https://tools.thecyclefrontier.wiki/progress')
  },
  timer: {
    response: () => renderLink('Wiki Time Tracker', 'https://tools.thecyclefrontier.wiki/timer')
  },
  qamount: {
    response: (message) => getItemStat(message, 'Quest Amount')
  },
  uamount: {
    response: (message) => getItemStat(message, 'Upgrade Amount')
  },
  camount: {
    response: (message) => getItemStat(message, 'Craft Amount')
  },
  famount: {
    response: (message) => getItemStat(message, 'Forge Amount')
  },
  info: {
    response: (message) => getItemStat(message, 'info')
  },
  help: {
    response: () => getHelp()
  },
  botinfo: {
    response: () => getBotInfo()
  },
  join: {
    response: (message, client, user) => joinChannel(client, user)
  },
  removetcfbot: {
    response: (message, client, user) => leaveChannel(client, user)
  }
}

module.exports = COMMANDS