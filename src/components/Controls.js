import React from 'react';
import '../styles/Controls.css';

const Controls = ({ isRecording, onRecordingChange }) => {
  const handleCapture = () => {
    const canvas = document.querySelector('.camera-canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `free-fire-mask-${Date.now()}.png`;
      link.click();
    }
  };

  const handleRecord = () => {
    onRecordingChange(!isRecording);
  };

  return (
    <div className="controls">
      <h2>📸 Controls</h2>
      
      <button className="btn btn-capture" onClick={handleCapture}>
        📸 Capture Photo
      </button>
      
      <button 
        className={`btn btn-record ${isRecording ? 'recording' : ''}`}
        onClick={handleRecord}
      >
        {isRecording ? '⏹️ Stop Recording' : '🎥 Start Recording'}
      </button>
      
      <div className="status">
        <p>Status: <span className={isRecording ? 'active' : 'idle'}>{
          isRecording ? '🔴 Recording' : '⚪ Ready'
        }</span></p>
      </div>
    </div>
  );
};

export default Controls;