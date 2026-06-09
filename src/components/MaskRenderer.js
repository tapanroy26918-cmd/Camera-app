import React from 'react';

class MaskRenderer {
  constructor() {
    this.maskCache = {};
  }

  renderMask(ctx, detection, maskType) {
    const landmarks = detection.landmarks;
    if (!landmarks || landmarks.length === 0) return;

    const positions = landmarks.positions;
    const leftEye = positions[36];
    const rightEye = positions[45];
    const nose = positions[30];
    const mouth = positions[57];

    switch (maskType) {
      case 'skull':
        this.renderSkullMask(ctx, leftEye, rightEye, nose, mouth);
        break;
      case 'neon':
        this.renderNeonMask(ctx, leftEye, rightEye, nose, mouth);
        break;
      case 'combat':
        this.renderCombatMask(ctx, leftEye, rightEye, nose, mouth);
        break;
      case 'diamond':
        this.renderDiamondMask(ctx, leftEye, rightEye, nose, mouth);
        break;
      case 'fire':
        this.renderFireMask(ctx, leftEye, rightEye, nose, mouth);
        break;
      case 'shadow':
        this.renderShadowMask(ctx, leftEye, rightEye, nose, mouth);
        break;
      default:
        break;
    }
  }

  renderSkullMask(ctx, leftEye, rightEye, nose, mouth) {
    ctx.fillStyle = 'rgba(50, 50, 50, 0.6)';
    ctx.beginPath();
    ctx.arc(leftEye.x, leftEye.y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(rightEye.x, rightEye.y, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftEye.x - 15, leftEye.y);
    ctx.lineTo(leftEye.x + 15, leftEye.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(rightEye.x - 15, rightEye.y);
    ctx.lineTo(rightEye.x + 15, rightEye.y);
    ctx.stroke();
  }

  renderNeonMask(ctx, leftEye, rightEye, nose, mouth) {
    ctx.fillStyle = 'rgba(0, 255, 255, 0.4)';
    ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
    ctx.shadowBlur = 20;
    
    ctx.beginPath();
    ctx.arc(leftEye.x, leftEye.y, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(rightEye.x, rightEye.y, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowColor = 'transparent';
  }

  renderCombatMask(ctx, leftEye, rightEye, nose, mouth) {
    ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
    ctx.beginPath();
    ctx.moveTo(leftEye.x - 30, leftEye.y - 15);
    ctx.lineTo(leftEye.x + 30, leftEye.y - 15);
    ctx.lineTo(leftEye.x + 30, leftEye.y + 30);
    ctx.lineTo(leftEye.x - 30, leftEye.y + 30);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
    ctx.beginPath();
    ctx.moveTo(rightEye.x - 30, rightEye.y - 15);
    ctx.lineTo(rightEye.x + 30, rightEye.y - 15);
    ctx.lineTo(rightEye.x + 30, rightEye.y + 30);
    ctx.lineTo(rightEye.x - 30, rightEye.y + 30);
    ctx.fill();
  }

  renderDiamondMask(ctx, leftEye, rightEye, nose, mouth) {
    ctx.fillStyle = 'rgba(100, 200, 255, 0.5)';
    ctx.beginPath();
    ctx.moveTo(leftEye.x, leftEye.y - 20);
    ctx.lineTo(leftEye.x + 20, leftEye.y);
    ctx.lineTo(leftEye.x, leftEye.y + 20);
    ctx.lineTo(leftEye.x - 20, leftEye.y);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(rightEye.x, rightEye.y - 20);
    ctx.lineTo(rightEye.x + 20, rightEye.y);
    ctx.lineTo(rightEye.x, rightEye.y + 20);
    ctx.lineTo(rightEye.x - 20, rightEye.y);
    ctx.fill();
  }

  renderFireMask(ctx, leftEye, rightEye, nose, mouth) {
    ctx.fillStyle = 'rgba(255, 100, 0, 0.6)';
    ctx.shadowColor = 'rgba(255, 165, 0, 0.8)';
    ctx.shadowBlur = 15;
    
    ctx.beginPath();
    ctx.arc(leftEye.x, leftEye.y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(rightEye.x, rightEye.y, 22, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.shadowColor = 'transparent';
  }

  renderShadowMask(ctx, leftEye, rightEye, nose, mouth) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(leftEye.x, leftEye.y, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(rightEye.x, rightEye.y, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(leftEye.x, leftEye.y, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(rightEye.x, rightEye.y, 25, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export default MaskRenderer;