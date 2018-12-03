const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

let waitingUsers = new Map();
const users = [];
const pairs = new Map();

const serializeUserList = (users) => {
  return JSON.stringify({
    type: 'SET_USER_LIST',
    users,
  });
}

const holdMessage = JSON.stringify({
    type: 'ADD_MESSAGE',
    payload: {
      message: '...Hello! Someone will be along in a moment, thank you for your patience.',
      authorId: 'admin',
      authorName: 'John',
    }
  })

const broadcastToPair = (data, socketList) => {
  socketList.forEach((ws) => {
    if (wss.clients.has(ws)) {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client === ws) {
          client.send(data)
        }
      })
    }
  })
}

const broadcastToPairPartner = (data, socketList, ws) => {
  const pairedClient = socketList.find((socket) => socket !== ws)
  pairedClient.send(data);
}

wss.on('connection', (ws) => {
  let userIndex;
  let userId
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        userId = data.id;
        userIndex = users.length
        const mappedUser = [data.id, { id: data.id, name: data.name }]
        users.push(mappedUser);
        waitingUsers.set(data.id, { userIdx: userIndex, ws });

        if (waitingUsers.size === 1) {
          const waitingUser = [users[userIndex]]
          ws.send(holdMessage)
          ws.send(serializeUserList(waitingUser))
        }
        if (waitingUsers.size === 2) {
          const pair = new Map(waitingUsers);
          let pairUserList = [];
          let pairSocketList = [];
          for (const k of pair.keys()) {
            const { userIdx, ws } = waitingUsers.get(k)
            pairs.set(k, { pair, pairList: pairUserList, socketList: pairSocketList })
            pairUserList.push(users[userIdx])
            pairSocketList.push(ws);
            waitingUsers.delete(k);
          }
          broadcastToPair(serializeUserList(pairUserList), pairSocketList)
        }
        break
      }
      case 'ADD_MESSAGE':
        const serializedMessage = JSON.stringify(data)
        const { authorId } = data.payload;
        const foundPair = pairs.get(authorId);
        if (foundPair) {
          const socketList = foundPair.socketList
          broadcastToPairPartner(serializedMessage, socketList, ws)
        }
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    users.splice(userIndex, 1)
    const foundPair = pairs.get(userId);
    if(foundPair) {
      const socketList = foundPair.socketList
      const pairList = foundPair.pairList
      const remainingUser = pairList.find((user) => user[0] !== userId);
      broadcastToPairPartner(serializeUserList([remainingUser]), socketList, ws)
    }
  })
})

console.log('websocket server listening on port: 8989');
