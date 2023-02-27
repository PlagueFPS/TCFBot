const UpgradesData = require('../data/upgrades.json')

const getUpgrades = (item) => {
  const newUpgrades = []
  
  UpgradesData.map(upgrade => {
    const matchedUpgrade = Object.values(upgrade).includes(item._id)

    if (matchedUpgrade) newUpgrades.push(upgrade)
    else return '\u200b'
  })

  return newUpgrades
}

module.exports = getUpgrades