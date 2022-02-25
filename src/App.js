import { useEffect, useState } from 'react';
import './App.css';
import InputCommander from './components/InputCommander';
import VoiceCommander from './components/VoiceCommander';
import websocket from './services/websocket'

function App() {
  const [response, setResponse] = useState('')

  useEffect(() => websocket.init(setResponse), [])
  
  return (
    <div className="App">
      <header className="App-header">
        <InputCommander />
        <VoiceCommander />
        <p>TRON: {response}</p>
      </header>
    </div>
  );
}

export default App;
