const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('guesser')
      .setDescription('Returns a link to the Wiki Fortuna Guesser'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Fortuna Guesser', 'https://fortunaguessr.com')]})
    },
}