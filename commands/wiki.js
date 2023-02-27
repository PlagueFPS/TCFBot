const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('wiki')
      .setDescription('Returns a link to the Official Wiki'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Official Wiki', 'https://thecyclefrontier.wiki/wiki/Main_Page')]})
    },
}