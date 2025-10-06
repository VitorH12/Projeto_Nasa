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

      <main className="impactos-container">
        <div className="impactos-header">
          <h1 className="main-title">🌌 How Does the Sun Affect Us?</h1>
          <p className="subtitle">
            Solar activity impacts essential technologies in our daily lives.
            Click on a character to discover their story and the real-life events that affected them.
          </p>

          {/* 🎵 Botão de Música */}
          <div className="music-controls">
            <audio
              ref={audioRef}
              src="/audio/space-ambience.mp3" // coloque aqui o caminho da música
              loop
            />
            <button onClick={toggleMusic} className="music-button" title={isPlaying ? "Pause music" : "Play music"}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            {isPlaying && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
                title="Volume"
              />
            )}
          </div>
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
