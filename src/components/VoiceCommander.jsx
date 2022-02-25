import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import commands from '../services/commands'

const VoiceCommander = () => {
  const { transcript } = useSpeechRecognition({ commands })

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) return null

  return (
    <div>
      <p>Voice commands</p>
      <div className="ma-4">
        <h6 className="pa-4 inline">Start Listening</h6> 
        <button onClick={SpeechRecognition.startListening}>Start</button>
      </div>
      <div className="ma-4">
        <h6 className="pa-4 inline">StopListening</h6>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
      <p>{transcript}</p>
    </div>
  )
}
export default VoiceCommander