require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const getItemOption = require('../functions/getItemOption')
const getLocationOption = require('../functions/getLocationOption')
const getQuestOption = require('../functions/getQuestOption')
const getUpgradeOption = require('../functions/getUpgradeOption')
const getCraftOption = require('../functions/getCraftOption')
const getForgeOption = require('../functions/getForgeOption')

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
    let item
    let location
    let quest
    let upgrade
    let craft
    let forge

    if (interaction.options.get('item')) item = getItemOption(interaction)
    if (interaction.options.get('location')) location = getLocationOption(interaction)
    if (interaction.options.get('quest')) quest = getQuestOption(interaction)
    if (interaction.options.get('upgrade')) upgrade = getUpgradeOption(interaction)
    if (interaction.options.get('craft')) craft = getCraftOption(interaction)
    if (interaction.options.get('recipe')) forge = getForgeOption(interaction)

    if (!command) {
      return console.error(`No command matching ${interaction.commandName} was found`)
    }

    try {
      if (item && location) await command.execute(interaction, item, location)
      else if (item) await command.execute(interaction, item)
      else if (quest) await command.execute(interaction, quest)
      else if (upgrade) await command.execute(interaction, upgrade)
      else if (craft) await command.execute(interaction, craft)
      else if (forge) await command.execute(interaction, forge)
      else await command.execute(interaction)
    }
    catch(error) {
      console.error(error)
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true })
      }
      else {
        await interaction.reply({ content: 'There was an error while executing this command most likely due to no matches being found!', ephemeral: true })
      }
    }
  })
  
  discordClient.login(process.env.DISCORD_TOKEN)
}

module.exports = DiscordBot
