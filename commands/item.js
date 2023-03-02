const { SlashCommandBuilder } = require('discord.js')
const ItemEmbed = require('../embeds/itemembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('item')
      .setDescription('Returns item information including Sell Price, Weight, Faction Rep, Value/Rep Per Weight and Rarity')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: [ItemEmbed(item)]})
    },
}