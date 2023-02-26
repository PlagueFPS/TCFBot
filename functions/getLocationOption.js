const mapLocations = require('../data/mapLocations.json')

const getLocationOption = (interaction) => {
  const locationOption = interaction.options.get('location')
  const argument = locationOption.value
  loc = mapLocations.find(location => {
    const newArgument = argument.split(' ')
    const match = newArgument.some(argument => location.includes(argument))
    if (location.toLowerCase().replace(/\s/g, '') === argument.toLowerCase().replace(/\s/g, '')) return location
    else if (match) return location
    else return
  })

  return loc
}

module.exports = getLocationOption