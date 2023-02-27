const ItemsData = require('../data/items.json')

const renderLink = (name, link, message) => {
  let item
  if (message) item = ItemsData.find(item => {
    const newMessage = message.split(' ')
    const match = newMessage.some(message => item._id.includes(message))
    if (message.replace(/\s/g, '').includes(item._id)) return item
    else if (match) return item
    else return
  })

  try {
    if (name === 'Wiki Interactive Map' && item) {
      return `Here is the link to ${name}: ${link}?item=${item.name.replaceAll(' ', '_')}`
    }
    else return `Here is the link to ${name}: ${link}`
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = renderLink