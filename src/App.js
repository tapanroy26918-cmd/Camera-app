import React, { useState, useEffect } from 'react';
import './App.css';
import CameraComponent from './components/CameraComponent';
import MaskSelector from './components/MaskSelector';
import Controls from './components/Controls';

function App() {
  const [selectedMask, setSelectedMask] = useState('skull');
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎭 Free Fire Camera Masks</h1>
        <p>Apply epic Free Fire themed masks to your camera</p>
      </header>
      
      <main className="app-main">
        <div className="camera-section">
          <CameraComponent maskType={selectedMask} />
        </div>
        
        <aside className="controls-section">
          <MaskSelector 
            selectedMask={selectedMask} 
            onMaskChange={setSelectedMask}
          />
          
          <Controls 
            isRecording={isRecording}
            onRecordingChange={setIsRecording}
          />
        </aside>
      </main>
      
      <footer className="app-footer">
        <p>Made with ❤️ | Free Fire Camera App v1.0</p>
      </footer>
    </div>
  );
}

export default App;