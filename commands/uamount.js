const { SlashCommandBuilder } = require('discord.js')
const ItemAmountEmbed = require('../embeds/itemamountembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('uamount')
      .setDescription('Returns the item amount that is needed for all upgrades, along with the upgrades it is needed for')
      .addStringOption(option => {
        return option.setName('item')
          .setDescription('The item to display')
          .setRequired(true)
      }),
    async execute(interaction, item) {
      await interaction.reply({ embeds: [ItemAmountEmbed(item, 'upgrades')]})
    },
}