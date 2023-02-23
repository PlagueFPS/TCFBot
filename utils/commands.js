import { GlobalFunctions } from "../functions/GlobalFunctions"

export const COMMANDS = {
  price: {
    response: (message) => GlobalFunctions.getItemStat(message, 'price')
  },
  p: {
    response: (message) => GlobalFunctions.getItemStat(message, 'price')
  },
  weight: {
    response: (message) => GlobalFunctions.getItemStat(message, 'weight')
  },
  w: {
    response: (message) => GlobalFunctions.getItemStat(message, 'weight')
  },
  factionrep: {
    response: (message) => GlobalFunctions.getItemStat(message, 'rep')
  },
  rep: {
    response: (message) => GlobalFunctions.getItemStat(message, 'rep')
  },
  rarity: {
    response: (message) => GlobalFunctions.getItemStat(message, 'rarity')
  },
  r: {
    response: (message) => GlobalFunctions.getItemStat(message, 'rarity')
  },
  value: {
    response: (message) => GlobalFunctions.getItemStat(message, 'value')
  },
  v: {
    response: (message) => GlobalFunctions.getItemStat(message, 'value')
  },
  wiki: {
    response: () => GlobalFunctions.renderLink('Official Wiki', 'https://thecyclefrontier.wiki/wiki/Main_Page')
  },
  map: {
    response: () => GlobalFunctions.renderLink('Wiki Interactive Map', 'https://tools.thecyclefrontier.wiki/map')
  },
  tracker: {
    response: () => GlobalFunctions.renderLink('Wiki Item Tracker', 'https://tracker.thecyclefrontier.wiki')
  },
  loadout: {
    response: () => GlobalFunctions.renderLink('Wiki Loadout Generator', 'https://tools.thecyclefrontier.wiki/loadout')
  },
  calc: {
    response: () => GlobalFunctions.renderLink('Wiki Weapon Calculator', 'https://tools.thecyclefrontier.wiki/calculator')
  },
  geo: {
    response: () => GlobalFunctions.renderLink('Wiki Fortuna Guesser', 'https://fortunaguessr.com')
  },
  progress: {
    response: () => GlobalFunctions.renderLink('Wiki Progress Tracker', 'https://tools.thecyclefrontier.wiki/progress')
  },
  qamount: {
    response: (message) => GlobalFunctions.getItemStat(message, 'Quest Amount')
  },
  uamount: {
    response: (message) => GlobalFunctions.getItemStat(message, 'Upgrade Amount')
  },
  camount: {
    response: (message) => GlobalFunctions.getItemStat(message, 'Craft Amount')
  },
  famount: {
    response: (message) => GlobalFunctions.getItemStat(message, 'Forge Amount')
  },
  info: {
    response: (message) => GlobalFunctions.getItemStat(message, 'info')
  }
}