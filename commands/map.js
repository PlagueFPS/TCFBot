const { SlashCommandBuilder } = require('discord.js')
const MapEmbed = require('../embeds/mapembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('map')
      .setDescription('Returns link to the Interactve Map')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to search for')
      }),
    async execute(interaction, item) {
      if (item) {
        return await interaction.reply({ embeds: [MapEmbed(item)]})
      }
      else return await interaction.reply({ embeds: [MapEmbed()]})
    },
}