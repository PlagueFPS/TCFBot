const { SlashCommandBuilder } = require('discord.js')
const ItemEmbed = require('../utils/embeds')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('price')
      .setDescription('Returns item information including Sell Price')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: ItemEmbed(item)})
    },
}