import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  minDuration?: number; // ms
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ minDuration = 10000 }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setFadeOut(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [minDuration]);

  return (
    <div className={`ls-root${fadeOut ? ' ls-fade-out' : ''}`}>
      {/* Ambient background blobs */}
      <div className="ls-blob ls-blob-1" />
      <div className="ls-blob ls-blob-2" />
      <div className="ls-blob ls-blob-3" />

      <div className="ls-content">
        {/* Icon */}
        <div className="ls-icon-wrap">
          <div className="ls-icon-glow" />
          <div className="ls-icon-box">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="12" height="12" rx="3" fill="white" fillOpacity="0.9"/>
              <rect x="20" y="4" width="12" height="12" rx="3" fill="white" fillOpacity="0.6"/>
              <rect x="4" y="20" width="12" height="12" rx="3" fill="white" fillOpacity="0.6"/>
              <rect x="20" y="20" width="12" height="12" rx="3" fill="white" fillOpacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Brand */}
        <p className="ls-brand">Stikkly</p>

        {/* Progress bar */}
        <div className="ls-bar-track">
          <div className="ls-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Label */}
        <p className="ls-label">
          {progress < 100 ? `Loading… ${Math.round(progress)}%` : 'Almost there'}
        </p>

        {/* Dots */}
        <div className="ls-dots">
          <span className="ls-dot" style={{ animationDelay: '0s' }} />
          <span className="ls-dot" style={{ animationDelay: '0.2s' }} />
          <span className="ls-dot" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
