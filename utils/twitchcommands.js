const getItemStat = require('../functions/getItemStat')
const renderLink = require('../functions/renderLink')
const getHelp = require('../functions/getHelp')
const getBotInfo = require('../functions/getBotInfo')

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
    response: () => renderLink('Wiki Interactive Map', 'https://tools.thecyclefrontier.wiki/map')
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
  geo: {
    response: () => renderLink('Wiki Fortuna Guesser', 'https://fortunaguessr.com')
  },
  progress: {
    response: () => renderLink('Wiki Progress Tracker', 'https://tools.thecyclefrontier.wiki/progress')
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
  }
}

module.exports = COMMANDS