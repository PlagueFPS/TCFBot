const { SlashCommandBuilder } = require('discord.js')
const ItemAmountEmbed = require('../embeds/itemamountembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('famount')
      .setDescription('Returns the item amount used in/for all forge recipes, along with the recipes it is used in/for')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: [ItemAmountEmbed(item, 'forge')]})
    },
}