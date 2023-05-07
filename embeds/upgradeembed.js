const { EmbedBuilder } = require("discord.js")
const dataTimes = require("../functions/dataTimes")
const COLORS = require("../utils/colors")
const date = require("../utils/date")

const UpgradeEmbed = (upgrade) => {
  let url = `/upgrades/${upgrade._id}`
  let image = 'playerquarter.png'
  switch(upgrade.type) {
    case 'Generator':
      url = `/upgrades/generators/${upgrade._id}`
      image = 'Generator.png'
      break
    case 'Inventory':
      url = `/upgrades/inventory/${upgrade._id}`
      image = 'Inventory.png'
      break
    case 'Workbench':
      url = `/upgrades/workbench/${upgrade._id}`
      image = 'Workbench.png'
  }
  switch(upgrade.subType) {
    case 'Kmarks':
      image = 'genkmarks.png'
      break
    case 'Aurum':
      image = 'genaurum.png'
      break
    case 'SupplyCrate':
      image = 'supplycrate.png'
  }
  const costs = []
  if (upgrade.cost1) costs.push(`${upgrade.amount1.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${upgrade.cost1}`)
  if (upgrade.cost2) costs.push(`${upgrade.amount2.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${upgrade.cost2}`)
  if (upgrade.cost3) costs.push(`${upgrade.amount3.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${upgrade.cost3}`)
  if (upgrade.cost4) costs.push(`${upgrade.amount4.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${upgrade.cost4}`)

  const costValues = costs.join('\n')

  return new EmbedBuilder()
    .setColor(COLORS['legendary'])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/favicon.png'
    })
    .setTitle(`${upgrade.tier ? `${upgrade.name} - ${upgrade.tier}` : upgrade.name }`)
    .setURL(`https://tracker.thecyclefrontier.wiki${url}`)
    .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${image}`)
    .addFields([
      {
        name: 'Type:',
        value: upgrade.type,
        inline: true,
      },
      {
        name: 'Tier:',
        value: `${upgrade.tier ? upgrade.tier : 'none'}`,
        inline: true,
      },
      {
        name: `${upgrade.type === 'Level' ? 'Upgrades Required:' : 'PQ Level Required:'}`,
        value: upgrade.upgradesRequired
      },
      {
        name: 'Upgrade Amount:',
        value: `${upgrade.upgradeAmount ? upgrade.upgradeAmount.replace(/\B(?=(\d{3})+(?!\d))/g,",") : 'none'}`
      },
      {
        name: 'Upgrade Time:',
        value: dataTimes(upgrade.upgradeTime).replace(/\B(?=(\d{3})+(?!\d))/g,",")
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

module.exports = UpgradeEmbed