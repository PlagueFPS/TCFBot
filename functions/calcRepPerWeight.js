const calcRepPerWeight = (item) => {
  const repPerWeight = parseInt(item.rep) / parseInt(item.weight)
  return repPerWeight.toFixed(1)
}

module.exports = calcRepPerWeight