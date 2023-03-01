const { EmbedBuilder } = require('discord.js')
const COLORS = require('../utils/colors')
const date = require('../utils/date')

const MapEmbed = (item, location) => {
  if (item && location) {
    return new EmbedBuilder()
      .setColor(COLORS['legendary'])
      .setAuthor({
        name: 'The Cycle: Frontier Wiki',
        iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
      })
      .setTitle('Interactive Map')
      .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${item._id}.png`)
      .addFields([
        {
          name: `Search:`,
          value: item.name
        },
        {
          name: `Location:`,
          value: location
        },
        {
          name: 'Results:',
          value: `[Bright Sands](https://tools.thecyclefrontier.wiki/map?map=1&item=${item.name.replaceAll(' ', '_')}&loc=${location.replaceAll(' ', '_')})
          [Crescent Falls](https://tools.thecyclefrontier.wiki/map?map=2&item=${item.name.replaceAll(' ', '_')}&loc=${location.replaceAll(' ', '_')})
          [Tharis Island](https://tools.thecyclefrontier.wiki/map?map=3&item=${item.name.replaceAll(' ', '_')}&loc=${location.replaceAll(' ', '_')})
          `,
        },
      ])
      .setTimestamp(new Date(date))
      .setFooter({
        text: `NOTE: You can use the percentage tool to fine-tune the spawns to only include the best spawns. 

Provided by The Cycle: Frontier Wiki`
      })
  }
  else if (item) {
   return new EmbedBuilder()
      .setColor(COLORS['legendary'])
      .setAuthor({
        name: 'The Cycle: Frontier Wiki',
        iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
      })
      .setTitle('Interactive Map')
      .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${item._id}.png`)
      .addFields([
        {
          name: 'Search:',
          value: item.name,
        },
        {
          name: 'Results:',
          value: `[Bright Sands](https://tools.thecyclefrontier.wiki/map?map=1&item=${item.name.replaceAll(' ', '_')})
          [Crescent Falls](https://tools.thecyclefrontier.wiki/map?map=2&item=${item.name.replaceAll(' ', '_')})
          [Tharis Island](https://tools.thecyclefrontier.wiki/map?map=3&item=${item.name.replaceAll(' ', '_')})
          `,
        },
      ])
      .setTimestamp(new Date(date))
      .setFooter({
        text: `NOTE: You can use the percentage tool to fine-tune the spawns to only include the best spawns. 

Provided by The Cycle: Frontier Wiki`
      })
  }
  else if (location){
    return new EmbedBuilder()
    .setColor(COLORS['legendary'])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
    })
    .setTitle('Interactive Map')
    .addFields([
      {
        name: `Search: ${location}`,
        value: '\u200b'
      },
      {
        name: 'Result',
        value: `[Interactive Map](https://tools.thecyclefrontier.wiki/map?loc=${location})`
      }
    ])
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
  }
  else return new EmbedBuilder()
    .setColor(COLORS['legendary'])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/wikilogowithtext.png'
    })
    .setTitle('Interactive Map')
    .setURL('https://tools.thecyclefrontier.wiki/map')
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
}

module.exports = MapEmbed
