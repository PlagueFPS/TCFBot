const QuestsData = require('../data/quests.json')

const getQuests = (item) => {
  const newQuests = []
  
  QuestsData.map(quest => {
    const entries = Object.entries(quest)
    entries.map(entry => {
      const [key, value] = entry
      if (key.includes('taskitem') && value === item._id) {
        newQuests.push(quest)
      }
      else return '\u200b'
    })
  })

  return newQuests
}

module.exports = getQuests