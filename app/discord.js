require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const ItemsData = require('../data/items.json')

const DiscordBot = () => {
  const discordClient = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ]
  })

  discordClient.commands = new Collection()
  const commandsPath = path.join(process.cwd(), 'commands')
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ('data' in command && 'execute' in command) {
      discordClient.commands.set(command.data.name, command)
    }
    else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
    }
  }
  
  discordClient.on('ready', () => {
    console.log(`Logged in as ${discordClient.user.tag}!`)
  })

  discordClient.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    const itemOption = interaction.options.get('item')
    const argument = itemOption.value
    const item = ItemsData.find(item => item._id === argument.toLowerCase())

    if (!command) {
      return console.error(`No command matching ${interaction.commandName} was found`)
    }

    try {
      if (item) await command.execute(interaction, item)
      else await command.execute(interaction)
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

module.exports = DiscordBot
