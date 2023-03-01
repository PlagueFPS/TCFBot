const QuestData = require('../data/quests.json')

const getQuestOption = (interaction) => {
  const questOption = interaction.options.get('quest')
  const argument = questOption.value
  let quest = QuestData.find(quest => quest._id === argument.toLowerCase().replaceAll(/\s/g, ''))

  if (!quest) {
    const newArgument = argument.split(' ')
    quest = QuestData.find(quest => newArgument.every(argument => quest._id.includes(argument)))
  }

  if (!quest) {
    const newArgument = argument.split(' ')
    quest = QuestData.find(quest => newArgument.some(argument => quest._id.includes(argument)))
  }

  return quest
}

module.exports = getQuestOption