const { SlashCommandBuilder } = require('discord.js')
const CraftEmbed = require('../embeds/craftembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('craft')
      .setDescription('Returns craft information including craft time, craft costs, effect of item, and rarity')
      .addStringOption(option => {
        return option.setName('craft')
          .setDescription('The craft to display')
          .setRequired(true)
      }),
    async execute(interaction, craft) {
      await interaction.reply({ embeds: [CraftEmbed(craft)]})
    },
}