import { SlashCommandBuilder } from "discord.js";
import { ItemEmbed } from "./embeds.js";

export const DISCORD_COMMANDS = {
  price: {
    data: new SlashCommandBuilder()
      .setName('price')
      .setDescription('Returns item information including Sell Price')
      .addStringOption(option => {
        option.setName('item')
          .setDescription('The item to display')
      }),
    async execute(interaction, item) {
      await interaction.reply('working')
    }
  }
}