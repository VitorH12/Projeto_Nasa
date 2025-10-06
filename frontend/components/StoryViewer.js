// src/components/StoryViewer.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryPage from './StoryPage';

export default function StoryViewer({ chapterData, chapterSlug }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const pages = chapterData.pages;
    const router = useRouter();

    const handleNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        } else {
            router.push('/historias');
        }
    };

    const handlePreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const handleBackToMenu = () => {
        router.push('/historias');
    };

    const currentPage = pages[currentPageIndex];
    if (!currentPage) return <p>Página não encontrada neste capítulo.</p>;

     return (
        <div className="story-viewer-container">
  <div className="content-wrapper">
    <StoryPage
      videoSrc={currentPage.videoSrc}
      imageSrc={currentPage.imageSrc}
      imageAlt={currentPage.imageAlt}
      storyText={currentPage.storyText}
      interactiveNote={currentPage.interactiveNote}
      audioSrc={chapterData.audioSrc}
    />
  </div>

  {/* Botões de navegação lateral do lado de fora do container */}
  <button
    className="side-button left"
    onClick={handlePreviousPage}
    disabled={currentPageIndex === 0}
  >
    ⬅
  </button>
  <button
    className="side-button right"
    onClick={handleNextPage}
    disabled={currentPageIndex === pages.length - 1}
  >
    ➡
  </button>

  {/* Botão Menu do lado direito, acima da seta */}
  <button className="menu-button" onClick={handleBackToMenu}>
    Menu
  </button>

  <style jsx>{`
    .content-wrapper {
      position: relative;
      max-width: 1000px;
      margin: auto;
      border-radius: 15px;
      background: radial-gradient(circle at top, #0b0b1e 0%, #050517 80%);
      overflow: hidden;
      color: #e0e0ff;
    }

    .side-button {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      padding: 1rem 1.2rem;
      background-color: rgba(139, 69, 19, 0.7);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5em;
      z-index: 999;
    }

    .side-button.left {
      left: 1rem;
    }

    .side-button.right {
      right: 1rem;
    }

    .side-button:hover:not(:disabled) {
      background-color: #a0522d;
    }

    .side-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* Botão Menu fixo do lado direito, um pouco acima da seta */
    .menu-button {
      position: fixed;
      right: 1rem;
      top: 40%; /* um pouco acima da posição central */
      padding: 0.8rem 1.5rem;
      background-color: #5c4033;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      z-index: 998;
    }

    .menu-button:hover {
      background-color: #7a5f4f;
    }

    @media (max-width: 768px) {
      .side-button {
        padding: 0.6rem 0.8rem;
        font-size: 1.2em;
      }
      .menu-button {
        top: 35%;
        padding: 0.6rem 1rem;
      }
    }
  `}</style>
</div>

    );
}