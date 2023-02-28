require('dotenv').config()

const getUsers = async () => {
  const res = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-wrotl/endpoint/data/v1/action/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.DB_API_KEY
    },
    body: JSON.stringify({
      dataSource: 'TCFBot',
      database: 'TCFBot',
      collection: 'Twitch Users',
    })
  })
  .then(res => res.json())

  return res['documents']
}

module.exports = getUsers