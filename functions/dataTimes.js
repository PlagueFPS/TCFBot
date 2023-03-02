const dataTimes = (times) => {
  const newTimes = parseInt(times)
  let hours = Math.floor(newTimes / 3600)
  let mins = Math.floor(newTimes % 3600 / 60)

  if (hours > 0) {
    if (mins > 0) return hours + "h " + mins + "m"
    else return hours + "h"
  }

  return mins + "m"
}

module.exports = dataTimes