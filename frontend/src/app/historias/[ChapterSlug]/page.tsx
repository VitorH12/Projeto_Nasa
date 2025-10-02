// /app/historias/[slug]/page.tsx (Exemplo de como ficaria)
'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import { libraryData } from '../../../data/libraryData'; // Seus dados dos capítulos
import StoryViewer from '../../../../components/StoryViewer';
import Navbar from '../../../../components/Navbar';

type ChapterSlug = keyof typeof libraryData;

export default function ChapterPage() {
  const params = useParams();
  const slug = params.slug as ChapterSlug;
  const chapterData = libraryData[slug];

  if (!chapterData) {
    return notFound();
  }

  // --- LÓGICA ADICIONADA ---
  // 1. Pegue a lista ordenada de todos os capítulos
  const chapterSlugs = Object.keys(libraryData);
  // 2. Encontre o índice do capítulo atual
  const currentChapterIndex = chapterSlugs.indexOf(slug);
  // 3. Determine qual é o próximo capítulo (se houver)
  const nextChapterSlug = 
    currentChapterIndex < chapterSlugs.length - 1 
      ? chapterSlugs[currentChapterIndex + 1] 
      : null;
  // --- FIM DA LÓGICA ADICIONADA ---

  return (
    <>
      <Navbar />
      <StoryViewer
        chapterData={chapterData}
        handlebacktomenu="/historias" // Define o caminho base para voltar ao menu
        nextChapterSlug={nextChapterSlug} // <-- 4. Passe o slug do próximo capítulo como prop
      />
    </>
  );
}