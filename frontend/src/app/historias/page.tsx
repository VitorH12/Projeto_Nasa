'use client'; // <-- MUITO IMPORTANTE: Marcar como Client Component
import { libraryData } from '../../data/libraryData'; // <-- IMPORTAÇÃO AQUI
import ChapterList from '../../components/ChapterList'; // Importe o Client Component
import Navbar from '../../../components/Navbar'; 

export default function HistoriasIndexPage() {
    return (
        <>
            <Navbar />
            <div className="chapters-container">
                <h1 className="main-title">Descubra as Histórias de Kuarasy!</h1>

                <div className="about-book-section">
                    <p><strong>Olá, explorador! Prepare-se para uma aventura incrível pelo espaço e pelo tempo com Kuarasy, nosso guia solar.</strong></p>
                    <p>Neste livro, vamos viajar para encontrar povos antigos de diferentes culturas. Você vai ler histórias inspiradas nas mitologias e lendas que eles criaram para explicar os mistérios do Sol e do céu. <span className="highlight-text">É importante lembrar que essas histórias são uma forma divertida e imaginativa de contar como o Sol funciona.</span></p>
                    <p><span className="highlight-text">Nós vamos 'brincar' com a ideia de que esses povos percebiam fenômenos solares, mesmo que eles não tivessem o mesmo conhecimento científico que nós temos hoje. Pense nisso como uma ponte mágica entre o mundo das lendas e o mundo da ciência real!</span></p>
                    <p>Quando você vir as Notas Interativas, Kuarasy vai te mostrar a ciência de verdade, com fatos e dados fresquinhos da NASA, sobre o que realmente acontece no Sol e como ele afeta a Terra.</p>
                    <p>Esperamos que você ame essa jornada, onde lendas e ciência se encontram para desvendar os segredos do nosso astro-rei!</p>
                </div>

                <h2 className="chapters-heading">Nossos Capítulos:</h2>
                
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