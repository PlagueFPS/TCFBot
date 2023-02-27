const { EmbedBuilder } = require('discord.js')
const COLORS = require('../utils/colors')

const date = new Date().toISOString()

const LinkEmbed = (name, link) => new EmbedBuilder()
  .setColor(COLORS['legendary'])
  .setAuthor({
    name: 'The Cycle: Frontier Wiki',
    iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
  })
  .setTitle(name)
  .setURL(link)
  .setTimestamp(new Date(date))
  .setFooter({
    text: 'Provided by The Cycle: Frontier Wiki'
  })

  module.exports = LinkEmbed