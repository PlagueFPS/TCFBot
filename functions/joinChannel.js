require('dotenv').config()

const joinChannel = (client, user) => {
  client.join(user.username)
  const res = fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-wrotl/endpoint/data/v1/action/insertOne', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.DB_API_KEY
    },
    body: JSON.stringify({
      collection: 'Twitch Users',
      database: 'TCFBot',
      dataSource: 'TCFBot',
      document: {
        user: user.username
      }
    })
  })

  if (res.then(res => res.ok)) return 'Successfully joined your channel!'
  else return 'Temporarily joined your channel due to a backend issue!'
}

module.exports = joinChannel