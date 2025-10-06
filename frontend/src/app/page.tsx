'use client'
import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.loop = true;
      audioEl.volume = volume;
      audioEl.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlayPause = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    if (audioEl.paused) audioEl.play().then(() => setIsPlaying(true));
    else {
      audioEl.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  const handleStartAdventure = () => {
    router.push('/historias');
  };

  return (
    <div
      style={{
        background: 'radial-gradient(ellipse at bottom, #0d1b2a 0%, #000 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Head>
        <title>Ocllo Space — Journey Through the Solar System</title>
        <meta
          name="description"
          content="Explore space weather through Ocllo Space, a journey across the Solar System."
        />
      </Head>

      <Navbar />
      <div className="stars"></div>

      {/* --- CONTROLES DE ÁUDIO FIXOS --- */}
      <div className="audio-controls">
        <audio ref={audioRef} src="/audio/about.mp3" loop />

        <button onClick={togglePlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span>Background Music</span>
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="content">
        <h1 className="main-title">Ocllo Space</h1>
        <p className="subtitle">
          Journey Through the Solar System — Explore Space Weather and the Sun’s Moods 🌞
        </p>
        <p className="text">
          Welcome to <strong>Ocllo Space</strong>, your cosmic gateway to the weather beyond Earth.
          Discover how solar winds dance through planets, storms rage on Jupiter, and icy winds blow
          on Neptune. Let the background music and golden glow take you on a journey through the
          stars.
        </p>

        {/* --- BOTÃO DOURADO SOLAR --- */}
        <button className="start-btn" onClick={handleStartAdventure}>
          <span className="btn-glow"></span>
          <span className="btn-text"> Start Adventure</span>
        </button>
      </div>

      {/* --- ESTILOS --- */}
      <style jsx>{`
        .audio-controls {
          position: fixed;
          top: 80px;
          right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.25);
          padding: 10px 12px;
          border-radius: 20px;
          backdrop-filter: blur(6px);
        }

        .audio-controls button {
          background: linear-gradient(135deg, #facc15, #f59e0b);
          color: black;
          border: none;
          width: 42px;
          height: 42px;
          font-size: 1.4rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 8px rgba(255, 255, 0, 0.4);
        }

        .audio-controls input[type='range'] {
          width: 120px;
          height: 6px;
          border-radius: 6px;
          background: linear-gradient(90deg, #facc15, #fde047);
          appearance: none;
          cursor: pointer;
          outline: none;
        }

        .audio-controls input[type='range']::-webkit-slider-thumb,
        .audio-controls input[type='range']::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
        }

        .audio-controls span {
          font-size: 0.7rem;
          color: #facc15aa;
        }

        .content {
          font-family: 'Poppins', sans-serif;
          color: #e2e8f0;
          padding: 4rem 2rem;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .main-title {
          font-size: 3rem;
          color: #ffd700;
          margin-bottom: 2rem;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        }

        .subtitle {
          font-size: 1.3rem;
          color: #fefcbf;
          text-shadow: 0 0 10px rgba(255, 255, 200, 0.5);
        }

        .text {
          margin-top: 2rem;
          font-size: 1.1rem;
          color: #cbd5e1;
          line-height: 1.8;
        }

        /* --- BOTÃO DOURADO SOLAR --- */
        .start-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          padding: 1.2rem 3rem;
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: black;
          background: linear-gradient(135deg, #fde047, #fbbf24);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 40px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 0 25px rgba(255, 215, 0, 0.4),
            0 0 50px rgba(255, 200, 0, 0.3);
        }

        .start-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: translateX(-100%);
          animation: shine 3.5s infinite linear;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .start-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 0 40px rgba(255, 255, 100, 0.6),
            0 0 80px rgba(255, 200, 0, 0.5);
          background: linear-gradient(135deg, #fff176, #fcd34d);
        }

        .btn-glow {
          position: absolute;
          width: 120%;
          height: 200%;
          top: -50%;
          left: -10%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.2),
            transparent 70%
          );
          opacity: 0.6;
          filter: blur(6px);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background: transparent url('/images/stars.png') repeat top center;
          animation: moveStars 200s linear infinite;
          z-index: 0;
        }

        @keyframes moveStars {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -10000px 5000px;
          }
        }
      `}</style>
    </div>
  );
}
