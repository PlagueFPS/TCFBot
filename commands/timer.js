const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('timer')
      .setDescription('Returns a link to the Wiki Time Tracker'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Time Tracker', 'https://tools.thecyclefrontier.wiki/timer')]})
    },
}