const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('calculator')
      .setDescription('Returns a link to the Wiki Weapon Calculator'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Weapon Calculator', 'https://tools.thecyclefrontier.wiki/calculator')]})
    },
}