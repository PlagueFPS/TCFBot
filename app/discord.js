import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config()

export const DiscordBot = () => {
  const discordClient = new Client({ intents: GatewayIntentBits.Guilds })
  
  discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`)
  })
  
  discordClient.on('messageCreate', async (message) => {
    console.log(message.content)
  })
  
  discordClient.login(process.env.DISCORD_TOKEN)
}
