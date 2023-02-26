const calcRepPerWeight = (item) => {
  const repPerWeight = Math.floor(parseInt(item.rep) / parseInt(item.weight))
  return repPerWeight.toString()
}

module.exports = calcRepPerWeight