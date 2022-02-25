import { playMusic } from "./musicService"

var socket;

const commandWebsocket = {
  init: (setResponse) => { 
    socket = new WebSocket('ws://localhost:8080') // wss://protected-bayou-88972.herokuapp.com/
    socket.onmessage = event => {
      console.log(event)
      switch(event.data) {
        case 'PlayWeBuiltThisCity':
          playMusic()
          break;
        default:
          setResponse(event.data);
      }
    }
  },
  send: command => socket.send(JSON.stringify(command)),
  isNotConnected: () => socket === undefined
}

export default commandWebsocket;