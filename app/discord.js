import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { bot } from './bot.js'
config()

export const DiscordBot = () => {
  const discordClient = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  })
  
  discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`)
  })
  
  discordClient.on('messageCreate', async (message) => {
    if (message.author.bot) return
    else bot(discordClient, undefined, undefined, message.content, message)
  })
  
  discordClient.login(process.env.DISCORD_TOKEN)
}
