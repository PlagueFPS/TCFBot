const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('tracker')
      .setDescription('Returns a link to the Wiki Item Tracker'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Item Tracker', 'https://tracker.thecyclefrontier.wiki')]})
    },
}