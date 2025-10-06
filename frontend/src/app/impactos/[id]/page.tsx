// /src/app/impactos/[id]/page.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from "next/navigation";
import { impactsData } from '../../../../components/impactsData';
import Navbar from '../../../../components/Navbar';
import './historia.css';

type StoryId = keyof typeof impactsData;

interface ImpactoPageProps {
  params: Promise<{ id: string }>;
}

export default function ImpactoPage({ params }: ImpactoPageProps) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const storyId = resolvedParams.id as StoryId;
  const story = impactsData[storyId];

  const [currentPage, setCurrentPage] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); 

  useEffect(() => {
  const audioEl = audioRef.current;
  if (!audioEl || !story?.audioSrc) return;

  // Atualiza a fonte do áudio
  if (audioEl.src !== window.location.origin + story.audioSrc) {
    audioEl.src = story.audioSrc;
    audioEl.loop = true;
  }

  // Tenta tocar automaticamente
  audioEl.volume = volume;
  audioEl.muted = false; // Começa com som
  audioEl.play()
    .then(() => setIsPlaying(true)) // Sucesso: autoplay permitido
    .catch(() => {
      // Autoplay bloqueado: toca mudo até que o usuário clique
      audioEl.muted = true;
      audioEl.play().catch(() => {}); // Ignora erro
      setIsPlaying(false);
    });
}, [story]);


  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newVolume = parseFloat(e.target.value);
  setVolume(newVolume);
  if (audioRef.current) {
    audioRef.current.volume = newVolume;
    audioRef.current.muted = newVolume === 0; // se volume 0, mantém mudo
  }
};


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

  if (!story) {
    return notFound();
  }

  const totalPages = story.pages.length;
  const progressPercentage = ((currentPage + 1) / totalPages) * 100;

  const changePage = (newPage: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsFading(false);
    }, 300); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      changePage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      changePage(currentPage - 1);
    }
  };
  
  const handleBackToMenu = () => {
    router.push('/impactos');
  };

  const pageContent = story.pages[currentPage];

  return (
  <>
    <Navbar />

    <div className="story-container">
      {/* CABEÇALHO */}
      <div className="story-header">
        <h1>{story.title}</h1>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* VISUALIZADOR: MÍDIA + TEXTO */}
      <div className={`story-viewer ${isFading ? 'fading' : ''}`}>
        <div className="story-media-container">
          {pageContent.videoSrc ? (
            <video
              src={pageContent.videoSrc}
              className="story-video"
              controls
              autoPlay
              loop
              muted
              aria-label={pageContent.imageAlt}
            />
          ) : (
            <img
              src={pageContent.imageSrc}
              alt={pageContent.imageAlt}
              className="story-image"
            />
          )}
        </div>

        <div className="story-text-content">
          <p
            className="story-text"
            dangerouslySetInnerHTML={{ __html: pageContent.storyText }}
          />

          {currentPage === totalPages - 1 && pageContent.interactiveNote && (
            <div className="interactive-note">
              <h3>{pageContent.interactiveNote.title}</h3>
              <p>{pageContent.interactiveNote.content}</p>
              <small>Source: {pageContent.interactiveNote.source}</small>
            </div>
          )}
        </div>
      </div>

      {/* NAVEGAÇÃO */}
      <div className="story-navigation">
        {/* Botão voltar */}
        <button
          className="story-side-button left"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          ⬅
        </button>

        {/* WRAPPER VERTICAL: ÁUDIO FLOUTANTE ACIMA DA SETA + SETA + BOTÃO DE MENU */}
        <div className="next-volume-wrapper">
          {story.audioSrc && (
            <div className="audio-controls-floating">
              <button
                onClick={togglePlayPause}
                className="play-pause-button"
                title={isPlaying ? "Pause" : "Play"}
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
                className="volume-slider"
                title="Volume"
              />
            </div>
          )}

          <button
            className="story-side-button right"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            ➡
          </button>

          <button
            onClick={handleBackToMenu}
            className="back-to-menu-button"
          >
            Back to Menu
          </button>
        </div>
      </div>

      {/* Elemento de áudio invisível */}
      <audio ref={audioRef} />
    </div>
  </>
);
}