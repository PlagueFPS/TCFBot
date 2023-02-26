const renderLink = (name, link) => {
  try {
    return `Here is the link to ${name}: ${link}`
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = renderLink