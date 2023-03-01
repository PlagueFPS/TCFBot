const { SlashCommandBuilder } = require('discord.js')
const QuestEmbed = require('../embeds/questembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('quest')
      .setDescription('Returns quest information including tasks, items to acquire, and rewards')
      .addStringOption(option => {
        return option.setName('quest')
          .setDescription('The quest to display')
          .setRequired(true)
      }),
    async execute(interaction, quest) {
      await interaction.reply({ embeds: [QuestEmbed(quest)]})
    },
}