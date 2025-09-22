'use client';
import Navbar from '../../components/Navbar'; // Ajuste o caminho conforme sua estrutura
import Link from 'next/link';
import Image from 'next/image'; 

export default function HomePage() {
    return (
        <div className="homepage-container">
            <Navbar />
            
            <main className="homepage-content">
                <div className="hero-section">
                    {/* Imagem principal do Kuarasy no topo do conteúdo, mantendo proporções */}

                    <h1 className="hero-title">Bem-vindo ao Mundo do Occlo!</h1>
                    <p className="hero-subtitle">Uma jornada mágica pela história e ciência do nosso Sol, guiada por Kuarasy!</p>
                    <Link href="/historias" passHref>
                        <button className="start-journey-button">Começar a Aventura!</button>
                    </Link>
                </div>
            </main>

            <style jsx>{`
                .homepage-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    /* Gradiente de fundo preenchendo a tela */
                    background: linear-gradient(135deg, #4A0000 0%, #FF4500 50%, #FFD700 100%); 
                    color: #fff; 
                    font-family: 'Comic Sans MS', cursive; 
                    position: relative; 
                }

                .homepage-content {
                    flex-grow: 1; 
                    display: flex;
                    align-items: center; 
                    justify-content: center; 
                    padding: 2rem;
                    text-align: center;
                    position: relative; 
                    z-index: 2; 
                    margin-top: 60px; /* Espaço para a Navbar fixa */
                }

                .hero-section {
                    max-width: 800px;
                    padding: 2rem;
                    background-color: rgba(0, 0, 0, 0.6); 
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(5px); /* Efeito de desfoque sutil no fundo */
                    border: 1px solid rgba(255, 255, 255, 0.3); /* Borda clara */
                }

                .kuarasy-image-wrapper {
                    margin-bottom: 2rem;
                    position: relative;
                    width: fit-content; /* Se ajusta ao tamanho da imagem */
                    margin-left: auto;
                    margin-right: auto;
                }

                .kuarasy-image {
                    border-radius: 10px; /* Borda arredondada para a imagem */
                    box-shadow: 0 5px 20px rgba(0,0,0,0.5); /* Sombra para dar destaque */
                }

                .hero-title {
                    font-size: 4em; 
                    margin-bottom: 0.5em;
                    color: #FFD700; 
                    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
                    line-height: 1.1;
                }

                .hero-subtitle {
                    font-size: 1.8em;
                    margin-bottom: 2em;
                    color: #FFECB3; 
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
                }

                .start-journey-button {
                    background-color: #FFA500; 
                    color: white;
                    border: none;
                    padding: 1.2em 2.5em;
                    border-radius: 50px; 
                    font-size: 1.5em;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .start-journey-button:hover {
                    background-color: #FF8C00; 
                    transform: translateY(-3px); 
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                }

                /* Responsividade */
                @media (max-width: 768px) {
                    .homepage-content {
                        margin-top: 50px; 
                        padding: 1rem;
                    }
                    .hero-title {
                        font-size: 2.5em;
                    }
                    .hero-subtitle {
                        font-size: 1.2em;
                    }
                    .start-journey-button {
                        padding: 1em 2em;
                        font-size: 1.2em;
                    }
                    .hero-section {
                        padding: 1.5rem;
                    }
                    .kuarasy-image-wrapper {
                        width: 200px; /* Reduzir em mobile */
                        height: 300px; /* Manter proporção */
                    }
                }

                @media (max-width: 480px) {
                    .hero-title {
                        font-size: 2em;
                    }
                    .hero-subtitle {
                        font-size: 1em;
                    }
                    .start-journey-button {
                        padding: 0.8em 1.5em;
                        font-size: 1em;
                    }
                    .kuarasy-image-wrapper {
                        width: 150px; /* Reduzir mais em telas muito pequenas */
                        height: 225px;
                    }
                }
            `}</style>
        </div>
    );
}