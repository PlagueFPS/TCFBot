const { EmbedBuilder } = require('discord.js')
const COLORS = require('../utils/colors')
const getQuests = require('../functions/getQuests')
const getUpgrades = require('../functions/getUpgrades')
const itemAmountNeeded = require('../functions/itemAmountNeeded')

const date = new Date().toISOString()

const ItemAmountEmbed = (item, neededFor) => {
  switch(neededFor) {
    default:
      return new EmbedBuilder()
      .setColor(COLORS[item.rarity])
      .setAuthor({
        name: 'The Cycle: Frontier Wiki',
        iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
      })
      .setTitle(item.name)
      .setURL(`https://tracker.thecyclefrontier.wiki/item-info/${item._id}`)
      .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${item._id}.png`)
      .addFields(
        {
          name: 'Item Amount Needed:',
          value: itemAmountNeeded(item, 'quests')
        },
        {
          name: 'Quests:',
          value: `
          [${getQuests(item)[0].name}](https://tracker.thecyclefrontier.wiki/quests/${getQuests(item)[0].faction !== 'korolev' ? `${getQuests(item)[0].faction}/${getQuests(item)[0]._id}` : getQuests(item)[0]._id })
          `
        },
      )
      .setTimestamp(new Date(date))
      .setFooter({
        text: 'Provided by The Cycle: Frontier Wiki'
      })
    case 'upgrades':
      return new EmbedBuilder()
    .setColor(COLORS[item.rarity])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
    })
    .setTitle(item.name)
    .setURL(`https://tracker.thecyclefrontier.wiki/item-info/${item._id}`)
    .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${item._id}.png`)
    .addFields(
      {
        name: 'Item Amount Needed:',
        value: itemAmountNeeded(item, 'upgrades')
      },
      {
        name: 'Upgrades:',
        value: `
        [${getUpgrades(item)[0].name}](https://tracker.thecyclefrontier.wiki/upgrades/${getUpgrades(item)[0].type !== 'Level' ? `${getUpgrades(item)[0].type.toLowerCase()}/${getUpgrades(item)[0]._id}` : getUpgrades(item)[0]._id })
        `
      },
    )
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
  }
}

  module.exports = ItemAmountEmbed