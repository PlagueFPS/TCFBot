import { COMMANDS } from '../utils/commands'
import { GlobalFunctions } from '../functions/GlobalFunctions'

export const bot = (client, channel, userstate, message) => {
  const formattedMessage = message.toLowerCase()
  if (formattedMessage === COMMANDS.wiki) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Offical Wiki', 'https://thecyclefrontier.wiki/wiki/Main_Page')
  }
  else if (formattedMessage === COMMANDS.tracker) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Wiki Item Tracker', 'https://tracker.thecyclefrontier.wiki')
  }
  else if (formattedMessage === COMMANDS.map) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Wiki Interactive Map', 'https://tools.thecyclefrontier.wiki/map')
  }
  else if (formattedMessage === COMMANDS.loadout) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Wiki Loadout Generator', 'https://tools.thecyclefrontier.wiki/loadout')
  }
  else if (formattedMessage === COMMANDS.calc) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Wiki Weapon Calculator', 'https://tools.thecyclefrontier.wiki/calculator')
  }
  else if (formattedMessage === COMMANDS.geo) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Wiki Fortuna Guesser', 'https://fortunaguessr.com')
  }
  else if (formattedMessage === COMMANDS.progress) {
    GlobalFunctions.renderLink(client, channel, userstate, 'Wiki Progress Tracker', 'https://tools.thecyclefrontier.wiki/progress')
  }
  else if (formattedMessage.startsWith(COMMANDS.questAmount)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'Quest Amount')
  }
  else if (formattedMessage.startsWith(COMMANDS.upgradeAmount)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'Upgrade Amount')
  }
  else if (formattedMessage.startsWith(COMMANDS.craftAmount)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'Craft Amount')
  }
  else if (formattedMessage.startsWith(COMMANDS.forgeAmount)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'Forge Amount')
  }
  else if (formattedMessage.startsWith(COMMANDS.price) || formattedMessage.startsWith(COMMANDS.shortPrice)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'price')
  }
  else if (formattedMessage.startsWith(COMMANDS.weight) || formattedMessage.startsWith(COMMANDS.shortWeight)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'weight')
  }
  else if (formattedMessage.startsWith(COMMANDS.rep) || formattedMessage.startsWith(COMMANDS.shortRep)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'rep')
  }
  else if (formattedMessage.startsWith(COMMANDS.rarity) || formattedMessage.startsWith(COMMANDS.shortRarity)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'rarity')
  }
  else if (formattedMessage.startsWith(COMMANDS.value) || formattedMessage.startsWith(COMMANDS.shortValue)) {
    GlobalFunctions.getItemStat(client, channel, userstate, formattedMessage, 'value')
  }
  else return
}