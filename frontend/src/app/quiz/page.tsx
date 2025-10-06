'use client';

import Quiz from '../../components/Quiz';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import styles from './quiz.module.css';
import { useRef, useState, useEffect } from 'react';

export default function QuizPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  // Tentar tocar o áudio automaticamente ao carregar
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

    if (audioEl.paused) {
      audioEl.play().then(() => setIsPlaying(true));
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  return (
    <div
      style={{
        backgroundColor: '#000',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative',
      }}
    >
      <Navbar />

      {/* Áudio invisível */}
      <audio ref={audioRef} src="/audio/space-ambience.mp3" />

      {/* Controles de áudio flutuantes */}
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
        <button
          onClick={togglePlayPause}
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

      <div className={styles.quizPageContent}>
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#facc15',
            marginBottom: '2rem',
            textAlign: 'center',
            paddingTop: '2rem',
          }}
        >
          Kuarasy's Quiz!
        </h1>

        {/* Imagem fixa na esquerda */}
        <div
          style={{
            position: 'absolute',
            left: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <Image
            src="/kuarasy-quiz3.png"
            alt="Kuarasy, the Sun, smiling and ready for the quiz"
            width={350}
            height={500}
          />
        </div>

        {/* Quiz centralizado */}
        <main
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            zIndex: 1,
          }}
        >
          <Quiz />
        </main>
      </div>
    </div>
  );
}
