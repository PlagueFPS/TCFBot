const UpgradeData = require('../data/upgrades.json')

const getUpgradeOption = (interaction) => {
  let argument
  const upgradeOption = interaction.options.get('upgrade')

  if (interaction.options.get('tier')) {
    const tierOption = interaction.options.get('tier')
    const options = [upgradeOption.value, tierOption.value]
    argument = options.map(option => option).join('_')
  } else argument = upgradeOption.value

  let upgrade = UpgradeData.find(upgrade => upgrade._id === argument.toLowerCase().replaceAll(/\s/g, ''))

  if (!upgrade) {
    const newArgument = argument.split(' ')
    upgrade = UpgradeData.find(upgrade => newArgument.every(argument => upgrade._id.includes(argument)))
  }

  if (!upgrade) {
    const newArgument = argument.split(' ')
    upgrade = UpgradeData.find(upgrade => newArgument.some(argument => upgrade._id.includes(argument)))
  }

  return upgrade
}

module.exports = getUpgradeOption