import { Client, Events, GatewayIntentBits } from "discord.js";
import ItemsData from '../data/items.json' assert { type: 'json' }
import { config } from "dotenv";
import { DISCORD_COMMANDS } from "../utils/discordcommands.js";
import { bot } from './bot.js'
config()

export const DiscordBot = () => {
  const discordClient = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ]
  })
  
  discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`)
  })
  
  discordClient.on('messageCreate', async (message) => {
    if (message.author.bot) return
    else bot(discordClient, undefined, undefined, message.content, message)
  })

  discordClient.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return
    const command = DISCORD_COMMANDS[interaction.commandName]

    if (!command) {
      return console.error(`No command matching ${interaction.commandName} was found`)
    }

    try {
      await command.execute(interaction)
    }
    catch(error) {
      console.error(error)
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true })
      }
      else {
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
      }
    }
  })
  
  discordClient.login(process.env.DISCORD_TOKEN)
}
