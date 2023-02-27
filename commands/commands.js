const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('commands')
      .setDescription('Returns a link to where you can find the commands list'),
    async execute(interaction) {
      await interaction.reply({ embeds: [LinkEmbed('Commands List', 'https://main--plaguetcfbot.netlify.app')]})
    },
}