// src/components/StoryViewer.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importe o useRouter
import StoryPage from './StoryPage';

export default function StoryViewer({ chapterData, chapterSlug }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const pages = chapterData.pages;
    const router = useRouter(); // Inicialize o router

    const handleNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        } else {
            console.log("Fim do capítulo, redirecionando para o menu.");
            router.push('/historias'); // Redireciona para a página de cards
        }
    };

    const handlePreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    // Nova função para voltar para o menu
    const handleBackToMenu = () => {
        router.push('/historias'); // Redireciona para a página de cards
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
                {/* NOVO BOTÃO AQUI */}
                <button onClick={handleBackToMenu} className="back-to-menu-button">
                    Back to Menu
                </button>
                {/* FIM DO NOVO BOTÃO */}
                <button onClick={handleNextPage} disabled={currentPageIndex === pages.length - 1}>
                    Next Page
                </button>
            </div>

            <style jsx>{`
                .story-viewer-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    max-width: 900px; /* Limite a largura para melhor leitura */
                    margin: 0 auto; /* Centraliza */
                }
                .navigation-controls {
                    margin-top: 2rem;
                    display: flex;
                    gap: 1rem;
                    width: 100%; /* Ocupa toda a largura disponível */
                    justify-content: space-around; /* Distribui os botões */
                    flex-wrap: wrap; /* Permite quebrar linha em telas pequenas */
                }
                .navigation-controls button {
                    background-color: #8b4513;
                    color: white;
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1em;
                    transition: background-color 0.3s ease;
                    flex: 1; /* Faz os botões ocuparem espaço igual */
                    min-width: 150px; /* Garante um tamanho mínimo */
                }
                .navigation-controls button:hover:not(:disabled) {
                    background-color: #a0522d;
                }
                .navigation-controls button:disabled {
                    background-color: #c5bba8;
                    cursor: not-allowed;
                }
                .back-to-menu-button {
                    background-color: #5c4033; /* Cor diferente para destaque */
                }
                .back-to-menu-button:hover:not(:disabled) {
                    background-color: #7a5f4f;
                }
                @media (max-width: 768px) {
                    .navigation-controls {
                        flex-direction: column;
                        width: 100%;
                        gap: 0.5rem;
                    }
                    .navigation-controls button {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}