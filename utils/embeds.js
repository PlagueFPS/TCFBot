const { EmbedBuilder } = require('discord.js')
const COLORS = require('./colors')
// import { EmbedBuilder } from "discord.js";
// import { calcRepPerWeight } from "../functions/GlobalFunctions.js";
// import { COLORS } from "./colors.js";

const date = new Date().toISOString()

const calcRepPerWeight = (item) => {
  const repPerWeight = parseInt(item.rep) / parseInt(item.weight)
  return repPerWeight.toString()
}

const ItemEmbed = (item) => new EmbedBuilder()
  .setColor(COLORS[item.rarity])
  .setAuthor({
    name: 'The Cycle: Frontier Wiki',
    iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
  })
  .setTitle(item.name)
  .setURL(`https://tracker.thecyclefrontier.wiki/item-info/${item._id}`)
  .setDescription(item.desc)
  .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${item._id}.png`)
  .addFields([
    {
      name: 'Sell Price',
      value: item.price.replace(/\B(?=(\d{3})+(?!\d))/g,","),
      inline: true,
    },
    {
      name: 'Weight',
      value: item.weight,
      inline: true,
    },
    {
      name: 'Faction Rep',
      value: item.rep.replace(/\B(?=(\d{3})+(?!\d))/g,","),
      inline: true,
    },
    {
      name: 'Value/Weight',
      value: item.valuePerWeight.replace(/\B(?=(\d{3})+(?!\d))/g,","),
      inline: true,
    },
    {
      name: 'Faction Rep/Weight',
      value: calcRepPerWeight(item),
      inline: true,
    },
    {
      name: 'Rarity',
      value: item.rarity,
      inline: true,
    }
  ])
  .setTimestamp(new Date(date))
  .setFooter({
    text: 'Provided by The Cycle: Frontier Wiki'
  })

  module.exports = ItemEmbed