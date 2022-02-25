import React, { useState } from 'react'
import websocket from '../services/websocket'

const InputCommander = () => {
  const [msg, setMsg] = useState('')
  const sendMessage = () => websocket.send({ command: 'salutation'})

  return (
    <div>
      <input type="text" value={msg} onChange={e => setMsg(e.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}
export default InputCommander