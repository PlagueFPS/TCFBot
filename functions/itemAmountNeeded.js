const QuestsData = require('../data/quests.json')
const UpgradesData = require('../data/upgrades.json')
const CraftsData = require('../data/crafts.json')
const ForgeData = require('../data/forge.json')

const itemAmountNeeded = (item, neededFor) => {
  let data
  let dataAmount = 0
  let searchString = ''
  switch(neededFor) {
    case 'quests':
      data = QuestsData
      searchString = 'taskitem'
      break
    case 'upgrades':
      data = UpgradesData
      searchString = 'cost'
      break
    case 'crafts':
      data = CraftsData
      searchString = 'cost'
      break
    case 'forge':
      data = ForgeData
      searchString = 'cost'
  }

  data.map(data => {
    const entries = Object.entries(data)
    entries.map((entry, index) => {
      const [key, value] = entry

      if (key.includes(searchString) && value === item._id) {
        const newIndex = index + 1
        const [newKey, newValue] = entries[newIndex]

        if (newValue) dataAmount = dataAmount + parseInt(newValue)
      }
    })
  })

  return dataAmount.toString()
}

module.exports = itemAmountNeeded