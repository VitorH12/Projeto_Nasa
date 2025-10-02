// /src/app/impactos/[id]/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
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
    }, 300); // Duração da animação de fade
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
        <div className="story-header">
          <h1>{story.title}</h1>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>

        <div className={`story-viewer ${isFading ? 'fading' : ''}`}>
          <div className="story-media-container"> {/* Renomeei para ser mais genérico */}
            {pageContent.videoSrc ? ( // <-- VERIFICAÇÃO SE É VÍDEO
              <video 
                src={pageContent.videoSrc} 
                className="story-video" // <-- Nova classe CSS
                controls 
                autoPlay 
                loop 
                muted // Mute para autoplay para melhor UX
                aria-label={pageContent.imageAlt} // Use imageAlt para descrição do vídeo
              />
            ) : ( // <-- SE NÃO FOR VÍDEO, RENDERIZA IMAGEM
              <img 
                src={pageContent.imageSrc} 
                alt={pageContent.imageAlt} 
                className="story-image" 
              />
            )}
          </div>
          <div className="story-text-content">
            <p className="story-text" dangerouslySetInnerHTML={{ __html: pageContent.storyText }} />
            
            {currentPage === totalPages - 1 && pageContent.interactiveNote && (
              <div className="interactive-note">
                <h3>{pageContent.interactiveNote.title}</h3>
                <p>{pageContent.interactiveNote.content}</p>
                <small>Source: {pageContent.interactiveNote.source}</small>
              </div>
            )}
          </div>
        </div>
        
        <div className="story-navigation">
          <button onClick={handlePrevPage} disabled={currentPage === 0}>
            Previous Page
          </button>
          <button onClick={handleBackToMenu} className="back-to-menu-button">
            Back to Menu
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}