const { EmbedBuilder } = require("discord.js")
const dataTimes = require("../functions/dataTimes")
const COLORS = require("../utils/colors")
const date = require("../utils/date")

const CraftEmbed = (craft) => {
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
  const costs = []
  if (craft.cost1) costs.push(`${craft.amount1.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${craft.cost1}`)
  if (craft.cost2) costs.push(`${craft.amount2.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${craft.cost2}`)
  if (craft.cost3) costs.push(`${craft.amount3.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${craft.cost3}`)
  if (craft.cost4) costs.push(`${craft.amount4.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${craft.cost4}`)
  if (craft.cost5) costs.push(`${craft.amount5.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${craft.cost5}`)

  const costValues = costs.join('\n')
  const rarity = craft.rarity.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join(' ')
  const type = craft.type.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join(' ')

  return new EmbedBuilder()
    .setColor(COLORS[craft.rarity])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/favicon.png'
    })
    .setTitle(craft.name)
    .setURL(`https://tracker.thecyclefrontier.wiki${url}`)
    .setThumbnail(`https://tracker.thecyclefrontier.wiki${craft.img}`)
    .addFields([
      {
        name: 'Type:',
        value: type,
        inline: true
      },
      {
        name: 'Rarity:',
        value: rarity,
        inline: true,
      },
      {
        name: 'Armor Value:',
        value: `${craft.armorValue ? craft.armorValue : 'none'}`,
        inline: true,
      },
      {
        name: 'Effect:',
        value: `${craft.effect ? craft.effect : 'none'}`,
      },
      {
        name: 'Craft Time:',
        value: dataTimes(craft.craftTime).replace(/\B(?=(\d{3})+(?!\d))/g,","),
      },
      {
        name: 'Costs:',
        value: costValues
      }
    ])
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
}

module.exports = CraftEmbed