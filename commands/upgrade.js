const { SlashCommandBuilder } = require('discord.js')
const UpgradeEmbed = require('../embeds/upgradeembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('upgrade')
      .setDescription('Returns upgrade information including upgrades required, upgrade amount, upgrade time, and costs')
      .addStringOption(option => {
        return option.setName('upgrade')
          .setDescription('The upgrade to display')
          .setRequired(true)
      })
      .addStringOption(option => {
        return option.setName('tier')
          .setDescription('The tier of the upgrade. Ex: 2-5')
      }),
    async execute(interaction, upgrade) {
      await interaction.reply({ embeds: [UpgradeEmbed(upgrade)]})
    },
}