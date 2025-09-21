"use client";
import { useState } from 'react';
import StoryPage from './StoryPage';

// Este componente gerencia um "capítulo" inteiro
export default function Book({ title, pages }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    // --- GUARDA DE SEGURANÇA ADICIONADA AQUI ---
    // Se não houver páginas neste capítulo, exibe uma mensagem em vez de quebrar.
    if (!pages || pages.length === 0) {
        return (
            <div className="book-container">
                <h2 className="book-title">{title}</h2>
                <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Georgia, serif' }}>
                    <p>Este capítulo está em breve... 📖</p>
                </div>
            </div>
        );
    }
    // --- FIM DA GUARDA DE SEGURANÇA ---

    const goToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };

    const currentPageData = pages[currentPageIndex];

    return (
        <div className="book-container">
            <h2 className="book-title">{title}</h2>
            <StoryPage 
                imageSrc={currentPageData.imageSrc}
                imageAlt={currentPageData.imageAlt}
                storyText={currentPageData.storyText}
                interactiveNote={currentPageData.interactiveNote}
            />
            <div className="navigation-controls">
                <button onClick={goToPreviousPage} disabled={currentPageIndex === 0}>
                    &larr; Página Anterior
                </button>
                <span>{currentPageIndex + 1} / {pages.length}</span>
                <button onClick={goToNextPage} disabled={currentPageIndex === pages.length - 1}>
                    Próxima Página &rarr;
                </button>
            </div>
            <style jsx>{`
                .book-container {
                    margin-bottom: 4rem; padding-bottom: 2rem;
                    border-bottom: 2px solid #dcd3b8;
                }
                .book-title {
                    text-align: center; font-family: 'Georgia', serif;
                    color: #5c4033; margin-bottom: 1rem;
                }
                .navigation-controls {
                    display: flex; justify-content: center; align-items: center;
                    gap: 2rem; margin-top: 1.5rem; font-family: 'Georgia', serif;
                    color: #5c4033;
                }
                .navigation-controls button {
                    background-color: #8b4513; color: white; border: none;
                    padding: 0.8rem 1.5rem; border-radius: 5px; cursor: pointer;
                    font-size: 1em; transition: background-color 0.3s ease;
                }
                .navigation-controls button:hover:not(:disabled) {
                    background-color: #a0522d;
                }
                .navigation-controls button:disabled {
                    background-color: #c5bba8; cursor: not-allowed;
                }
            `}</style>
        </div>
    );
}