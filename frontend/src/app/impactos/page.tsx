// /src/app/impactos/page.tsx
'use client';

import React, { useRef, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import { impactsDirectory } from '../../../components/impactsDirectory';
import './impactos.css';

export default function ImpactosPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const toggleMusic = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (audioEl.paused) {
      audioEl.play();
      setIsPlaying(true);
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <Navbar />

      {/* --- ÁUDIO DE FUNDO FIXO --- */}
      <div
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 1000,
          background: 'rgba(0,0,0,0.25)',
          padding: '6px 12px',
          borderRadius: '20px',
          backdropFilter: 'blur(6px)',
        }}
      >
        <audio ref={audioRef} src="/audio/space-ambience.mp3" loop />
        <button
          onClick={toggleMusic}
          style={{
            background: 'transparent',
            color: '#facc15',
            border: '2px solid rgba(255,255,255,0.5)',

            width: '36px',
            height: '36px',
            fontSize: '1.4rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            width: '120px',
            height: '6px',
            borderRadius: '6px',
            background: 'linear-gradient(90deg, #ff6ec7, #6ec1ff)',
            appearance: 'none',
            cursor: 'pointer',
            outline: 'none',
          }}
        />
      </div>

      <main className="impactos-container">
        <div className="impactos-header">
          <h1 className="main-title">🌌 How Does the Sun Affect Us?</h1>
          <p className="subtitle">
            Solar activity impacts essential technologies in our daily lives.
            Click on a character to discover their story and the real-life events that affected them.
          </p>
        </div>

        <div className="impacto-cards-grid">
          {impactsDirectory.map((personagem) => (
            <Link href={`/impactos/${personagem.id}`} key={personagem.id} className="card-link">
              <div className="impacto-card">
                <div className="card-header">
                  <span className="impacto-icon">{personagem.icon}</span>
                  <h3>{personagem.title}</h3>
                </div>
                <p className="card-summary">{personagem.summary}</p>
                <div className="card-tags">
                  {personagem.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
