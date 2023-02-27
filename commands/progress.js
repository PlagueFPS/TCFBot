const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('progress')
      .setDescription('Returns a link to the Wiki Progress Tracker'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Progress Tracker', 'https://tools.thecyclefrontier.wiki/progress')]})
    },
}