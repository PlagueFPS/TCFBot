const { SlashCommandBuilder } = require('discord.js')
const MapEmbed = require('../embeds/mapembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('map')
      .setDescription('Returns link to the Interactve Map')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to search for')
      })
      .addStringOption(option => {
        return option.setName('location')
          .setDescription('The location to search for')
      }),
    async execute(interaction, item, location) {
      if (item && location) {
        return await interaction.reply({ embeds: [MapEmbed(item, location)]})
      }
      else if (item) {
        return await interaction.reply({ embeds: [MapEmbed(item)]})
      }
      else if (location) {
        return await interaction.reply({ embeds: [MapEmbed(undefined, location)]})
      }
      else return await interaction.reply({ embeds: [MapEmbed()]})
    },
}