const { SlashCommandBuilder } = require('discord.js')
const LinkEmbed = require('../embeds/linkembed')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('calculator')
      .setDescription('Returns a link to the Wiki Weapon Calculator')
      .addStringOption(option => {
        return option.setName('weapon')
          .setDescription('The weapon to search for')
      }),
    async execute(interaction, weapon) {
      if (weapon) {
        return await interaction.reply({ embeds: [LinkEmbed('Weapon Calculator', `https://tools.thecyclefrontier.wiki/calculator?weapon=${weapon.value}`)]})
      }
      else {
        return await interaction.reply({ embeds: [LinkEmbed('Weapon Calculator', 'https://tools.thecyclefrontier.wiki/calculator')]})
      }
    },
}