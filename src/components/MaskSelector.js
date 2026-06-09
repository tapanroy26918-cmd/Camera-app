import React from 'react';
import '../styles/MaskSelector.css';

const MASKS = [
  { id: 'skull', name: '💀 Skull Mask', description: 'Classic skull design' },
  { id: 'neon', name: '⚡ Neon Mask', description: 'Futuristic glow' },
  { id: 'combat', name: '🏅 Combat Mask', description: 'Tactical style' },
  { id: 'diamond', name: '💎 Diamond Mask', description: 'Precious stone' },
  { id: 'fire', name: '🔥 Fire Mask', description: 'Flaming effects' },
  { id: 'shadow', name: '🌑 Shadow Mask', description: 'Ninja style' }
];

const MaskSelector = ({ selectedMask, onMaskChange }) => {
  return (
    <div className="mask-selector">
      <h2>🎭 Available Masks</h2>
      <div className="mask-grid">
        {MASKS.map(mask => (
          <button
            key={mask.id}
            className={`mask-button ${selectedMask === mask.id ? 'active' : ''}`}
            onClick={() => onMaskChange(mask.id)}
            title={mask.description}
          >
            <div className="mask-icon">{mask.name.split(' ')[0]}</div>
            <div className="mask-name">{mask.name.split(' ').slice(1).join(' ')}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaskSelector;