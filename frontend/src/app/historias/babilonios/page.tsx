// src/app/historias/maori/page.tsx
'use client';
import { notFound } from 'next/navigation';
import { libraryData } from '../../../data/libraryData';
import StoryViewer from '@/../../components/StoryViewer';

export default function MaoriStoryPage() {
    const chapterSlug = 'babilonios';
    const chapter = libraryData[chapterSlug];

    if (!chapter) {
        notFound();
    }

    return (
        <main className="space-main text-white min-h-screen relative overflow-hidden">
  {/* Fundo de estrelas animado */}
  <div className="space-stars"></div>

  {/* Container central com leve brilho espacial */}
  <div className="space-content max-w-5xl mx-auto px-4 py-12 relative z-10">
    <StoryViewer chapterData={chapter} chapterSlug={chapterSlug} />
  </div>

  <style jsx>{`
    /* === Fundo principal espacial === */
    .space-main {
      position: relative;
      min-height: 100vh;
      background: radial-gradient(circle at 20% 20%, #020024 0%, #090979 35%, #000014 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      overflow: hidden;
    }

    /* === Estrelas animadas === */
    .space-stars {
      position: absolute;
      inset: 0;
      background: url("/stars-bg.webp") repeat;
      background-size: cover;
      opacity: 0.25;
      animation: twinkle 12s infinite ease-in-out;
      z-index: 0;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.25;
      }
      50% {
        opacity: 0.4;
      }
    }

    /* === Container do conteúdo === */
    .space-content {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      box-shadow: 0 0 40px rgba(50, 100, 255, 0.2);
      backdrop-filter: blur(8px);
      padding: 3rem;
      transition: box-shadow 0.3s ease-in-out;
    }

    .space-content:hover {
      box-shadow: 0 0 60px rgba(100, 150, 255, 0.3);
    }
  `}</style>
</main>

    );
}
