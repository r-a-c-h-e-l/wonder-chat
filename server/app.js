
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const serializeUserList = () => {
  return JSON.stringify({
    type: 'SET_USER_LIST',
    users,
  });
}

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(data)
    }
  })
}

wss.on('connection', (ws) => {
  let userIndex;
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        const user = { id: data.id, name: data.name };
        const uniqueUser = [data.id, user]
        userIndex = users.length
        users.push(uniqueUser);
        ws.send(serializeUserList())
        broadcast(serializeUserList(), ws)
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
    users.splice(userIndex, 1)
    broadcast(serializeUserList(), ws)
  })
})

console.log('websocket server listening on port: 8989');
