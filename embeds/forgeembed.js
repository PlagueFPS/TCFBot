const { EmbedBuilder } = require("discord.js")
const COLORS = require("../utils/colors")
const date = require("../utils/date")

const ForgeEmbed = (forge) => {
  let url = `/forge/${forge._id}`
  switch(forge.type) {
    case 'perk':
      url = `/forge/perks/${forge._id}`
      break
    case 'item':
      url = `/forge/items/${forge._id}`
  }
  const costs = []
  if (forge.cost1) costs.push(`${forge.amount1.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${forge.cost1}`)
  if (forge.cost2) costs.push(`${forge.amount2.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${forge.cost2}`)
  if (forge.cost3) costs.push(`${forge.amount3.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${forge.cost3}`)
  if (forge.cost4) costs.push(`${forge.amount4.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${forge.cost4}`)
  if (forge.cost5) costs.push(`${forge.amount5.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${forge.cost5}`)

  const costsValues = costs.join('\n')
  const type = forge.type.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join(' ')
  const Compatability = []
  if (forge.backpack) Compatability.push(`Backpack: ${forge.backpack}`)
  if (forge.shield) Compatability.push(`Shield: ${forge.shield}`)
  if (forge.helmet) Compatability.push(`Helmet: ${forge.helmet}`)

  const compatabilityValue = Compatability.join('\n')
  const rarity = forge.rarity ? forge.rarity.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join(' ') : null

  return new EmbedBuilder()
    .setColor(forge.rarity ? COLORS[forge.rarity] : COLORS['legendary'])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/favicon.png'
    })
    .setTitle(forge.name)
    .setURL(`https://tracker.thecyclefrontier.wiki${url}`)
    .setThumbnail(`https://tracker.thecyclefrontier.wiki${forge.img}`)
    .addFields([
      {
        name: 'Type:',
        value: type,
        inline: true,
      },
      {
        name: 'Rarity:',
        value: `${rarity ? rarity : 'none'}`,
        inline: true,
      },
      {
        name: 'Item Chance:',
        value: `${forge.itemChance ? forge.itemChance : 'none'}`,
        inline: true,
      },
      {
        name: 'Armor Value:',
        value: `${forge.armorValue ? forge.armorValue : 'none'}`,
        inline: true
      },
      {
        name: 'Compatability:',
        value: `${compatabilityValue ? compatabilityValue : 'none'}`,
      },
      {
        name: 'Minimum Stat:',
        value: `${forge.minimumstat ? forge.minimumstat : 'none'}`,
      },
      {
        name: 'Maximum Stat:',
        value: `${forge.maximumstat ? forge.maximumstat : 'none'}`,
      },
      {
        name: 'Compatible Items:',
        value: costsValues
      }
    ])
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
}

module.exports = ForgeEmbed