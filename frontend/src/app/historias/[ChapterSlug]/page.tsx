// src/components/StoryViewer.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StoryPage from '../../../../components/StoryPage';

// ATENÇÃO: Adicione 'nextChapterSlug' como uma prop recebida
export default function StoryViewer({ chapterData, handlebacktomenu, nextChapterSlug }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const pages = chapterData.pages;
    const router = useRouter();

    // VARIÁVEL ADICIONADA: Facilita a verificação se estamos na última página
    const isLastPage = currentPageIndex === pages.length - 1;

    // LÓGICA ATUALIZADA: Agora lida com o próximo capítulo
    const handleNextPage = () => {
        if (!isLastPage) {
            // Se não for a última página, apenas avança para a próxima
            setCurrentPageIndex(currentPageIndex + 1);
        } else if (nextChapterSlug) {
            // Se for a última página E existir um próximo capítulo, navega para ele
            router.push(`/historias/${nextChapterSlug}`);
        } else {
            // Se for a última página do último capítulo, volta para o menu
            router.push(handlebacktomenu);
        }
    };

    const handlePreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const handleBackToMenu = () => {
        router.push(handlebacktomenu);
    };

    const currentPage = pages[currentPageIndex];

    if (!currentPage) {
        return <p>Página não encontrada neste capítulo.</p>;
    }

    return (
        <div className="story-viewer-container">
            <StoryPage
               imageSrc={currentPage.imageSrc}
                imageAlt={currentPage.imageAlt}
                storyText={currentPage.storyText}
                interactiveNote={currentPage.interactiveNote}
                audioSrc={chapterData.audioSrc}

  
            />
            <div className="navigation-controls">
                <button onClick={handlePreviousPage} disabled={currentPageIndex === 0}>
                    Previous Page
                </button>
                <button onClick={handleBackToMenu} className="back-to-menu-button">
                    Back to Menu
                </button>
                
                {/* BOTÃO ATUALIZADO: O texto e o estado 'disabled' agora são dinâmicos */}
                <button onClick={handleNextPage} disabled={isLastPage && !nextChapterSlug}>
                    {isLastPage && nextChapterSlug ? 'Next Chapter' : 'Next Page'}
                </button>
            </div>

            <style jsx>{`
                /* Seus estilos JSX aqui, sem alterações necessárias */
            `}</style>
        </div>
    );
}