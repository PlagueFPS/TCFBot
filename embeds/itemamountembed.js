const { EmbedBuilder } = require('discord.js')
const COLORS = require('../utils/colors')
const getQuests = require('../functions/getQuests')
const getUpgrades = require('../functions/getUpgrades')
const getCrafts = require('../functions/getCrafts')
const getForgeRecipes = require('../functions/getForgeRecipes')
const itemAmountNeeded = require('../functions/itemAmountNeeded')
const date = require('../utils/date')

const ItemAmountEmbed = (item, neededFor) => {
  const questValues = getQuests(item).map(quest => {
    let url = `/quests/${quest._id}`
    switch(quest.faction) {
      case 'korolev':
        url = `/quests/korolev/${quest._id}`
        break
      case 'ica': 
        url = `/quests/ica/${quest._id}`
        break
      case 'osiris':
        url = `/quests/osiris/${quest._id}`
    }

    return `[${quest.name}](https://tracker.thecyclefrontier.wiki${url})`
  })
  const upgradeValues = getUpgrades(item).map(upgrade => {
    let url = `/upgrades/${upgrade._id}`
    switch(upgrade.type) {
      case 'Generator':
        url = `/upgrades/generators/${upgrade._id}`
        break
      case 'Inventory':
        url = `/upgrades/inventory/${upgrade._id}`
        break
      case 'Workbench':
        url = `/upgrades/workbench/${upgrade._id}`
    }

    return `[${upgrade.name}](https://tracker.thecyclefrontier.wiki${url})`
  })
  const craftValues = getCrafts(item).map(craft => {
    let url = `/crafting/${craft._id}`
    switch(craft.type) {
      case 'weapon':
        url = `/crafting/weapons/${craft._id}`
        break
      case 'armor':
        url = `/crafting/armor/${craft._id}`
        break
      case 'attachment':
        url = `/crafting/attachments/${craft._id}`
        break
      case 'consumable':
        url = `/crafting/consumables/${craft._id}`
        break
      case 'material':
        url = `/crafting/materials/${craft._id}`
    }

    return `[${craft.name}](https://tracker.thecyclefrontier.wiki${url})`
  })
  const forgeValues = getForgeRecipes(item).map(forge => {
    let url = `/forge/${forge._id}`
    switch(forge.type) {
      case 'perk':
        url = `/forge/perks/${forge._id}`
        break
      case 'item':
        url = `/forge/items/${forge._id}`
    }

    return `[${forge.name}](https://tracker.thecyclefrontier.wiki${url})`
  })
  const questValue = questValues.join('\n')
  const upgradeValue = upgradeValues.join('\n')
  const craftValue = craftValues.join('\n')
  const forgeValue = forgeValues.join('\n')

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
          name: 'Amount Needed For Quests:',
          value: itemAmountNeeded(item, 'quests')
        },
        {
          name: 'Quests:',
          value: questValue
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
          name: 'Amount Needed For Upgrades:',
          value: itemAmountNeeded(item, 'upgrades')
        },
        {
          name: 'Upgrades:',
          value: upgradeValue
        },
      )
      .setTimestamp(new Date(date))
      .setFooter({
        text: 'Provided by The Cycle: Frontier Wiki'
      })
    case 'crafts': 
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
          name: 'Amount Needed For Crafts:',
          value: itemAmountNeeded(item, 'crafts')
        },
        {
          name: 'Crafts:',
          value: craftValue
        },
      )
      .setTimestamp(new Date(date))
      .setFooter({
        text: 'Provided by The Cycle: Frontier Wiki'
      })
    case 'forge':
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
          name: 'Amount Needed For Forge Recipes:',
          value: itemAmountNeeded(item, 'forge')
        },
        {
          name: 'Forge Recipes:',
          value: forgeValue
        },
      )
      .setTimestamp(new Date(date))
      .setFooter({
        text: 'Provided by The Cycle: Frontier Wiki'
      })
  }
}

  module.exports = ItemAmountEmbed