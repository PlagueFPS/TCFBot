const { SlashCommandBuilder } = require('discord.js')
const ItemAmountEmbed = require('../embeds/itemamountembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('itemamount')
      .setDescription('Returns the item amount that is needed for quests, upgrades, crafts and forge.')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: [ItemAmountEmbed(item)]})
    },
}