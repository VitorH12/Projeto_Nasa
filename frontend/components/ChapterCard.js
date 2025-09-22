// src/components/ChapterCard.js
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ChapterCard({ slug, title, description, coverImage }) {
    return (
        <Link href={`/historias/${slug}`} className="chapter-card">
            <div className="card-image-wrapper">
                <Image 
                    src={coverImage} 
                    alt={title} 
                    fill // A propriedade 'fill' faz a imagem preencher o contêiner pai
                    style={{ objectFit: 'cover' }} // 'cover' garante que a imagem cubra a área sem distorcer
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <span>Começar Aventura! &rarr;</span>
            </div>
            <style jsx>{`
                .chapter-card {
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #dcd3b8;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                    text-decoration: none;
                    color: inherit;
                    background-color: #fdfaf1;
                }
                .chapter-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                }

                /* --- MUDANÇAS PRINCIPAIS AQUI --- */
                .card-image-wrapper {
                    width: 100%;
                    position: relative; /* Necessário para o <Image fill /> funcionar */
                    /* Força o contêiner a ter a proporção de imagem retrato */
                    aspect-ratio: 832 / 1248; 
                }
                /* --- FIM DAS MUDANÇAS --- */

                .card-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    text-align: left;
                }
                .card-content h2 {
                    font-family: 'Georgia', serif;
                    font-size: 1.5em;
                    color: #8b4513;
                    margin-top: 0;
                    margin-bottom: 0.8rem;
                }
                .card-content p {
                    font-family: 'Arial', sans-serif;
                    font-size: 0.9em;
                    color: #4a4a4a;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                    flex-grow: 1;
                }
                .card-content span {
                    display: inline-block;
                    margin-top: auto;
                    color: #a0522d;
                    font-weight: bold;
                }
            `}</style>
        </Link>
    );
}