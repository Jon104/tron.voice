import websocket from './websocket'
import { stopMusic } from './musicService'

const msg = {}

const sendCommand = (msg) => {
  websocket.send(msg)
}

const correctedName = name => {
  switch(name.toLowerCase()) {
    case 'bowl':
      return 'bulma';
    default:
      return name.toLowerCase();
  }
}

const commands = [
  {
    command: ['add package :name', 'add the package :name'],
    callback: (name) => sendCommand(`addPackage_${correctedName(name)}`)
  },
  {
    command: ['delete package :name', 'remove package :name'],
    callback: (name) => sendCommand(`deletePackage_${correctedName(name)}`)
    
  },
  {
    command: 'clear',
    callback: ({ resetTranscript }) => resetTranscript()
  },
  {
    command: ['create a new directory called :name'],
    callback: (name) => {
      msg.command = `createDir_${name.toLowerCase()}`
      websocket.send(msg)
    }
  },
  {
    command: ['initialize react application', 'initialize react app'],
    callback: () => sendCommand({ command: 'createReactApp', parameters: { name: '.'}})
  },
  {
    command: ['create an application called :name', 'create an app called :name', 'create a project called :name'],
    callback: (name) => sendCommand({ command: 'createReactApp', parameters: { name: `${name.toLowerCase()}`}})
  },
  {
    command: ['create a component called :name'],
    callback: (name) => sendCommand({ command: 'createComponent', parameters: { name: `${name.toLowerCase()}`}})
  },
  {
    command: ['create a method called :name'],
    callback: (name) => sendCommand({ command: 'createMethod', parameters: { name: `${name.toLowerCase()}`}})
  },
  {
    command: ['create a reducer called :name'],
    callback: (name) => sendCommand({ command: 'createReducers', parameters: { name: `${name.toLowerCase()}`}})
  },
  {
    command: ['create a module called :name'],
    callback: (name) => sendCommand({ command: 'createStateModule', parameters: { name: `${name.toLowerCase()}`}})
  },
  {
    command: 'Initialize get', 
    callback: () => sendCommand({ command: 'initGit' })
  },
  { 
    command: 'How are you?', 
    callback: () => {
      msg.command = 'howAreYou' 
      websocket.send(msg)
    }
  },
  {
    command: ["Let's get down to business", "Lock and loaded"],
    callback: () => {
      msg.command = 'workModeEnabled'
      websocket.send(msg)
    }
  },
  {
    command: 'Thank you.',
    callback: () => {
      msg.command = 'thanks'
      websocket.send(msg)
    }
  },
  {
    command: 'I would like to order a pizza',
    callback: () => {
      msg.command = 'orderPizza'
      websocket.send(msg)
    },
  },
  {
    command: ['Hello', 'Hi', 'Sup', 'Aloha'],
    callback: () => {
      msg.command = 'salutation'
      websocket.send(msg)
    },
  },
  {
    command: 'Stop the music',
    callback: () => {
      msg.command = 'stopMusic'
      websocket.send(msg)
      stopMusic()
    }
  }
]

export default commands