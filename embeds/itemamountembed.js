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
          name: 'Item Amount Needed',
          value: itemAmountNeeded(item, 'quests')
        },
        {
          name: 'Quests:',
          value: getQuests().map(quest => {
            return  `
              [${quest.name}](https://tracker.thecyclefrontier.wiki/quests/${quest.faction !== 'korolev' ? `${quest.faction}/${quest._id}` : quest._id })
              `
            })
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
        name: 'Item Amount Needed',
        value: itemAmountNeeded(item, 'upgrades')
      },
      {
        name: 'Upgrades:',
        value: getUpgrades().map(upgrade => {
          return  `
            [${upgrade.name}](https://tracker.thecyclefrontier.wiki/upgrades/${upgrade.type !== 'Level' ? `${upgrade.type.toLowerCase()}/${upgrade._id}` : upgrade._id })
            `
          })
      },
    )
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
  }
}

  module.exports = ItemAmountEmbed