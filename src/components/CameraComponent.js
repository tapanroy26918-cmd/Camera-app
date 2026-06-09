import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import '../styles/CameraComponent.css';
import MaskRenderer from './MaskRenderer';

const CameraComponent = ({ maskType }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const maskRendererRef = useRef(null);

  useEffect(() => {
    const loadModelsAndStartVideo = async () => {
      try {
        // Load face detection models
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]);

        // Start video stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera or loading models:', err);
      }
    };

    loadModelsAndStartVideo();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    const detectFacesAndRenderMasks = async () => {
      if (!videoRef.current || !canvasRef.current) return;

      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Draw video frame
      ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      // Render masks on detected faces
      detections.forEach(detection => {
        if (maskRendererRef.current) {
          maskRendererRef.current.renderMask(ctx, detection, maskType);
        }
      });

      requestAnimationFrame(detectFacesAndRenderMasks);
    };

    detectFacesAndRenderMasks();
  }, [maskType]);

  return (
    <div className="camera-container">
      <video
        ref={videoRef}
        className="camera-video"
        autoPlay
        playsInline
      />
      <canvas
        ref={canvasRef}
        className="camera-canvas"
        width="640"
        height="480"
      />
    </div>
  );
};

export default CameraComponent;