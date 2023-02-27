const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('loadout')
      .setDescription('Returns a link to the Wiki Loadout Generator'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Loadout Generator', 'https://tools.thecyclefrontier.wiki/loadout')]})
    },
}