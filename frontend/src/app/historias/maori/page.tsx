// src/app/historias/maori/page.tsx
// Este é um Server Component que passa dados para o StoryViewer (Client Component)

import { notFound } from 'next/navigation';
import { libraryData } from '../../../data/libraryData'; // Caminho para libraryData
import StoryViewer from '@/../../components/StoryViewer'; // Caminho para StoryViewer

export default function MaoriStoryPage() {
    const chapterSlug = 'maori'; // Definimos o slug diretamente aqui

    // Tenta encontrar os dados do capítulo Māori
    const chapter = libraryData[chapterSlug];

    // Se por algum motivo o capítulo Māori não estiver no libraryData, mostra 404
    if (!chapter) {
        notFound();
    }

    // Renderiza o StoryViewer, passando os dados do capítulo Māori específico
    return (
        <main>
            <StoryViewer chapterData={chapter} chapterSlug={chapterSlug} />
        </main>
    );
}