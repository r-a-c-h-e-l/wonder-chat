
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(data)
    }
  })
}

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        const user = { id: data.id, name: data.name };
        const uniqueUser = [data.id, user]
        users.push(uniqueUser);
        const serializedData = JSON.stringify({
          type: 'SET_USER_LIST',
          users,
        })
        ws.send(serializedData)
        broadcast(serializedData, ws)
        break
      }
      case 'ADD_MESSAGE':
        const serializedMessage = JSON.stringify(data)
        broadcast(serializedMessage, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    // const user = users[ws];
    // delete users[ws]
    // broadcast({
    //   type: 'REMOVE_USER',
    //   user,
    // }, ws)
  })
})

console.log('websocket server listening on port: 8989');
