// src/components/ChapterList.tsx
'use client'; 
import ChapterCard from '../../components/ChapterCard'; // Ajuste o caminho

// Agora o componente recebe 'libraryData' como uma propriedade (prop)
export default function ChapterList({ libraryData }) {
    // A lógica que estava na sua página agora está aqui
    const chapters = Object.keys(libraryData);

    return (
        <div className="chapter-cards-grid">
            {chapters.map((slug) => (
                <ChapterCard 
                    key={slug}
                    slug={slug}
                    title={libraryData[slug].title}
                    description={libraryData[slug].summary || 'Uma história incrível de Kuarasy.'}
                    coverImage={libraryData[slug].coverImage || '/placeholder.jpg'}
                />
            ))}
        </div>
    );
}