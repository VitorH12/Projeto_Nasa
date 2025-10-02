'use client'; // <-- MUITO IMPORTANTE: Marcar como Client Component
import { libraryData } from '../../data/libraryData'; // <-- IMPORTAÇÃO AQUI
import ChapterList from '../../components/ChapterList'; // Importe o Client Component
import Navbar from '../../../components/Navbar'; 

export default function HistoriasIndexPage() {
    return (
        <>
            <Navbar />
            <div className="chapters-container">
                <h1 className="main-title">Discover the Stories of Kuarasy!</h1>

                <div className="about-book-section">
                    <p><strong>Hello, explorer! Get ready for an incredible adventure through space and time with Kuarasy, our solar guide.</strong></p>
                    <p>In this book, we will travel to meet ancient peoples from different cultures. You will read stories inspired by the mythologies and legends they created to explain the mysteries of the Sun and the sky. <span className="highlight-text">It is important to remember that these stories are a fun and imaginative way to explain how the Sun works.</span></p>
                    <p><span className="highlight-text">We will 'play' with the idea that these people perceived solar phenomena, even if they did not have the same scientific knowledge that we have today. Think of it as a magical bridge between the world of legends and the world of real science!</span></p>
                    <p>When you see the Interactive Notes, Kuarasy will show you real science, with fresh facts and data from NASA, about what really happens on the Sun and how it affects Earth.</p>
                    <p>We hope you love this journey, where legends and science meet to unravel the secrets of our Sun!</p>

                </div>

                <h2 className="chapters-heading">Chapters:</h2>
                
                {/* Renderiza o Client Component, passando os dados como props */}
                <ChapterList libraryData={libraryData} />

                <style jsx>{`
                    /* Seus estilos existentes para .chapters-container, .main-title, etc. */
                    /* Copie e cole todos os estilos que você já tinha aqui */
                    .chapters-container {
                        text-align: center;
                        padding: 2rem;
                        max-width: 1200px;
                        margin: auto;
                        font-family: 'Georgia', serif; 
                        color: #333; 
                        margin-top: 60px;
                    }
                    .main-title {
                        font-size: 2.8em; 
                        color: #8b4513; 
                        margin-bottom: 2rem;
                        font-family: 'Comic Sans MS', cursive; 
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                    }
                    .about-book-section {
                        background-color: #fdfaf1; 
                        border: 1px solid #dcd3b8;
                        border-radius: 12px;
                        padding: 2.5rem;
                        margin-bottom: 3rem;
                        box-shadow: 0 8px 20px rgba(0,0,0,0.1); 
                        line-height: 1.8;
                        font-size: 1.15em;
                        text-align: left; 
                        color: #5c4033; 
                    }
                    .about-book-section p { margin-bottom: 1.2em; }
                    .about-book-section p:last-child { margin-bottom: 0; }
                    .about-book-section strong { color: #8b4513; }
                    .highlight-text {
                        background-color: #ffe0b3; 
                        padding: 0.1em 0.3em;
                        border-radius: 4px;
                    }
                    .chapters-heading {
                        font-size: 2em;
                        color: #5c4033;
                        margin-top: 3rem;
                        margin-bottom: 2.5rem;
                        font-family: 'Comic Sans MS', cursive; 
                    }
                    /* O estilo do .chapter-cards-grid pode ficar aqui ou ser movido para o ChapterList */
                    :global(.chapter-cards-grid) {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 2rem;
                        margin-top: 2rem; 
                    }
                    @media (max-width: 768px) {
                        .chapters-container {
                            padding: 1rem;
                            margin-top: 50px;
                        }
                        .main-title { font-size: 2em; }
                        .about-book-section {
                            padding: 1.5rem;
                            font-size: 1em;
                        }
                        .chapters-heading { font-size: 1.6em; }
                        :global(.chapter-cards-grid) {
                            grid-template-columns: 1fr; 
                        }
                    }
                `}</style>
            </div>
        </>
    );
}