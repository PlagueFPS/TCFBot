const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('help')
      .setDescription('Returns a link to the bot site for commands list and bot info'),
    async execute(interaction) {
      return await interaction.reply({ embeds: [LinkEmbed('Command List and Bot Info', `https://bot.thecyclefrontier.wiki/`)]})
    },
}