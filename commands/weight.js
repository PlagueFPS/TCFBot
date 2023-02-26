const { SlashCommandBuilder } = require('discord.js')
const ItemEmbed = require('../embeds/itemembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('weight')
      .setDescription('Returns item information including Weight')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: [ItemEmbed(item)]})
    },
}