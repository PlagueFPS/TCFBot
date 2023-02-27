const { SlashCommandBuilder } = require('discord.js')
const ItemAmountEmbed = require('../embeds/itemamountembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('qamount')
      .setDescription('Returns the item amount that is needed for all quests, along with the quests it is needed for')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: [ItemAmountEmbed(item, 'quests')]})
    },
}