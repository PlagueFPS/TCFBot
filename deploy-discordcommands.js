require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const { REST, Routes } = require("discord.js")

const commands = []
const commandPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN)

const deploy = async () => {
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
}

deploy()