const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('forgesim')
      .setDescription('Returns a link to the Wiki Forge Simulator'),
    async execute(interaction) {
      return await interaction.reply({ embeds: [LinkEmbed('Forge Simulator', `https://tools.thecyclefrontier.wiki/forge`)]})
    },
}