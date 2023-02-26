require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const ItemsData = require('../data/items.json')
const bot = require('./bot')
// import { promises as fs } from 'fs';
// import path from 'path';
// import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
// import ItemsData from '../data/items.json' assert { type: 'json' }
// import { config } from "dotenv";
// import { bot } from './bot.js'
// config()

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
  
  discordClient.on('messageCreate', async (message) => {
    if (message.author.bot) return
    else bot(discordClient, undefined, undefined, message.content, message)
  })

  discordClient.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)

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

module.exports = DiscordBot
