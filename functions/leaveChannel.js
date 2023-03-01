require('dotenv').config()

const leaveChannel = (client, user) => {
  client.part(user.username)
  const res = fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-wrotl/endpoint/data/v1/action/deleteOne', {
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
      filter: {
        user: user.username
      }
    })
  })

  if (res.then(res => res.ok)) return 'leaving your channel'
  else return 'Failed to leave your channel'
}

module.exports = leaveChannel