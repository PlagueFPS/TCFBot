import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import { DISCORD_COMMANDS } from "./utils/discordcommands";
config()

const commands = []

for (const command of DISCORD_COMMANDS) {
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN)

(async () => {
  try {
    console.log(`Started refreshing ${commands.length} application (/) commands`)

    const data = await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), 
      { body: commands },
    )
    
    console.log(`Succesfully reloaded ${data.length} application (/) commands`)
  }
  catch(error) {
    console.error(error)
  }
})()