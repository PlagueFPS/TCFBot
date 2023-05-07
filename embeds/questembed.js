const { EmbedBuilder } = require('discord.js')
const COLORS = require('../utils/colors')
const date = require('../utils/date')

const QuestEmbed = (quest) => {
  let url = `/quests/${quest._id}`
  switch(quest.faction) {
    case 'ica':
      url = `/quests/ica/${quest._id}`
      break
    case 'osiris':
      url = `/quests/osiris/${quest._id}`
  }
  const tasks = []
  if (quest.task) tasks.push(quest.task)
  if (quest.task2) tasks.push(quest.task2)
  if (quest.task3) tasks.push(quest.task3)

  const tasksValues = tasks.join('\n')

  const taskItems = []
  if (quest.taskitem1) taskItems.push(`${quest.taskitem1amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.taskitem1}`)
  if (quest.taskitem2) taskItems.push(`${quest.taskitem2amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.taskitem2}`)
  if (quest.taskitem3) taskItems.push(`${quest.taskitem3amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.taskitem3}`)

  const taskValues = taskItems.join('\n')
  const rewardItems = []
  if (quest.reward1) rewardItems.push(`${quest.reward1amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.reward1}`)
  if (quest.reward2) rewardItems.push(`${quest.reward2amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.reward2}`)
  if (quest.reward3) rewardItems.push(`${quest.reward3amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.reward3}`)
  if (quest.reward4) rewardItems.push(`${quest.reward4amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.reward4}`)
  if (quest.reward5) rewardItems.push(`${quest.reward5amount.replace(/\B(?=(\d{3})+(?!\d))/g,",")} ${quest.reward5}`)

  const rewardValues = rewardItems.join('\n')
  const faction = quest.faction.split(' ').map(value => value[0].toUpperCase() + value.substring(1)).join(' ')

  return new EmbedBuilder()
    .setColor(COLORS[quest.faction])
    .setAuthor({
      name: 'The Cycle: Frontier Wiki',
      iconURL: 'https://tracker.thecyclefrontier.wiki/images/favicon.png'
    })
    .setTitle(quest.name)
    .setURL(`https://tracker.thecyclefrontier.wiki${url}`)
    .setThumbnail(`https://tracker.thecyclefrontier.wiki/images/${quest.faction}reputation.png`)
    .addFields([
      {
        name: 'Faction:',
        value: faction
      },
      {
        name: 'Part:',
        value: quest.part
      },
      {
        name: 'Tasks:',
        value: tasksValues
      },
      {
        name: 'Items To Collect/Stash:',
        value: `${ taskValues.length > 0 ? taskValues : 'none' }`
      },
      {
        name: 'Rewards:',
        value: rewardValues
      }
    ])
    .setTimestamp(new Date(date))
    .setFooter({
      text: 'Provided by The Cycle: Frontier Wiki'
    })
}

module.exports = QuestEmbed
