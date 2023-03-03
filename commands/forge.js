const { SlashCommandBuilder } = require('discord.js')
const ForgeEmbed = require('../embeds/forgeembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('forge')
      .setDescription('Returns recipe information including type, compatability, rarity, stats, and costs')
      .addStringOption(option => {
        return option.setName('recipe')
          .setDescription('The forge recipe to display')
          .setRequired(true)
      }),
    async execute(interaction, forge) {
      await interaction.reply({ embeds: [ForgeEmbed(forge)]})
    },
}