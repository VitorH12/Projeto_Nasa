'use client';
import React, { useRef, useState } from 'react';
import { libraryData } from '../../data/libraryData';
import ChapterList from '../../components/ChapterList';
import Navbar from '../../../components/Navbar';

export default function HistoriasIndexPage() {
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
      <div className="page-background">
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
          <audio ref={audioRef} src="/audio/storySun.mp3" loop />
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

        <div className="chapters-container">
          <h1 className="main-title">☀️ Discover the Stories of Kuarasy!</h1>
          <div className="about-book-section">
            <p>
              <strong>Hello, explorer!</strong> Get ready for an incredible adventure through space and time with Kuarasy, our solar guide.
            </p>
            <p>
              In this book, we will travel to meet ancient peoples from different cultures. You will read stories inspired by the mythologies and legends they created to explain the mysteries of the Sun and the sky.
            </p>
            <p>
              We will "play" with the idea that these people perceived solar phenomena, even if they did not have the same scientific knowledge that we have today.
            </p>
            <p>
              When you see the Interactive Notes, Kuarasy will show you real science, with fresh facts and data from NASA, about what really happens on the Sun and how it affects Earth.
            </p>
          </div>

          <h2 className="chapters-heading">Chapters</h2>
          <ChapterList libraryData={libraryData} />
        </div>
      </div>

      <style jsx>{`
    /* === BACKGROUND ESPACIAL === */
    .page-background {
        position: relative;
        min-height: 100vh; /* Alterado para 100vh para garantir que cubra a tela */
        background: radial-gradient(circle at top, #000010 0%, #000015 60%, #000020 100%);
        overflow-x: hidden;
    }

    .page-background::before {
        content: "";
        position: absolute;
        inset: 0;
        background: url('/stars-bg.webp') repeat;
        background-size: cover;
        opacity: 0.25;
        z-index: 0;
        animation: twinkle 10s infinite ease-in-out;
    }

    @keyframes twinkle {
        0%, 100% { opacity: 0.25; }
        50% { opacity: 0.35; }
    }

    /* === CONTAINER DE CAPÍTULOS === */
    .chapters-container {
        position: relative;
        z-index: 1;
        padding: 6rem 2rem 3rem;
        max-width: 1200px;
        margin: auto;
        color: white;
        text-align: center;
    }

    .main-title {
        font-size: 3rem;
        color: #FFD700;
        margin-bottom: 2rem; /* Aumentei o espaço */
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    }

    /* === CONTROLES DE MÚSICA (MODIFICADO) === */
    .music-controls {
        position: fixed; /* Fixa o elemento na tela */
        top: 80px;       /* Distância do topo */
        right: 20px;     /* Distância da direita */
        z-index: 1000;   /* Garante que fique acima de outros elementos */
        
        display: flex;
        align-items: center;
        gap: 0.8rem;
        
        background-color: rgba(30, 41, 59, 0.7); /* Fundo semi-transparente */
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 30px; /* Bordas arredondadas */
        padding: 8px 15px;
        backdrop-filter: blur(8px); /* Efeito de vidro fosco */
    }

    .music-button {
        background: transparent; /* Fundo transparente */
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px; /* Tamanho fixo */
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background 0.3s;
    }

    .music-button:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .volume-slider {
        -webkit-appearance: none;
        appearance: none;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        height: 4px; /* Mais fino */
        width: 100px;
        cursor: pointer;
        outline: none;
    }

    /* Estilo da "bolinha" do slider para Chrome/Safari */
    .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px; /* Bolinha menor */
        height: 14px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
    }

    /* Estilo da "bolinha" do slider para Firefox */
    .volume-slider::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        border: none;
    }

    /* === SEÇÃO SOBRE O LIVRO === */
    .about-book-section {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        padding: 2.5rem;
        margin-bottom: 3rem;
        line-height: 1.8;
        font-size: 1.15em;
        text-align: left;
        color: #d1d1e0;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(6px);
    }

    .about-book-section p {
        margin-bottom: 1.3em;
    }

    .about-book-section strong {
        color: #FFD700;
    }

    .highlight-text {
        background-color: rgba(255, 215, 0, 0.15);
        padding: 0.2em 0.4em;
        border-radius: 5px;
        color: #fff8dc;
    }

    .chapters-heading {
        font-size: 2.4em;
        color: #00bfff;
        margin-top: 3rem;
        margin-bottom: 2rem;
        text-shadow: 0 0 15px rgba(0, 191, 255, 0.5);
    }

    :global(.chapter-cards-grid) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    /* === RESPONSIVIDADE === */
    @media (max-width: 768px) {
        .chapters-container {
            padding: 6rem 1rem 2rem;
        }
        .main-title {
            font-size: 2.2rem;
        }
        .about-book-section {
            padding: 1.5rem;
            font-size: 1em;
        }
        .chapters-heading {
            font-size: 1.6em;
        }
        :global(.chapter-cards-grid) {
            grid-template-columns: 1fr;
        }
    }

    :global(nav) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
    }
`}</style>
    </>
  );
}
