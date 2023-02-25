import ItemsData from '../data/items.json' assert { type: 'json' }
import { COMMANDS } from '../utils/commands.js'
import { EmbedBuilder } from '@discordjs/builders'
import { calcRepPerWeight } from '../functions/GlobalFunctions.js'
import { COLORS } from '../utils/colors.js'

const regExpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/)

export const bot = (client, channel, userstate, message, msg) => {
  const formattedMessage = message.toLowerCase()
  if (formattedMessage.match(regExpCommand)) {
    const [raw, command, argument] = formattedMessage.match(regExpCommand)
    const { response } = COMMANDS[command] || {}
    
    if (typeof response !== 'function') return 
  
    if (!channel && !userstate) {
      const item = ItemsData.find(item => {
        const newMessage = argument.split(' ')
        const match = newMessage.some(message => item._id.includes(message))
        if (message.replace(/\s/g, '').includes(item._id)) return item
        else if (match) return item
        else return
      })
      const date = new Date().toISOString()
      const embed = new EmbedBuilder()
        .setColor(COLORS[item.rarity])
        .setTitle(item.name)
        .setURL(`https://tracker.thecyclefrontier.wiki/item-info/${item._id}`)
        .setDescription(item.desc)
        .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${item._id}.png`)
        .addFields([
          {
            name: 'Sell Price',
            value: item.price,
            inline: true,
          },
          {
            name: 'Weight',
            value: item.weight,
            inline: true,
          },
          {
            name: 'Faction Rep',
            value: item.rep,
            inline: true,
          },
          {
            name: 'Value/Weight',
            value: item.valuePerWeight,
            inline: true,
          },
          {
            name: 'Faction Rep/Weight',
            value: calcRepPerWeight(item),
            inline: true,
          },
          {
            name: 'Rarity',
            value: item.rarity,
            inline: true,
          }
        ])
        .setTimestamp(new Date(date))
        .setFooter({
          text: 'Provided by PlagueFPS'
        })

      msg.reply({ embeds: [embed] })
    }
    else {
      const returnString = `@${userstate.username}, ${response(argument)}`
      return client.say(channel, returnString)
    }
  }
}