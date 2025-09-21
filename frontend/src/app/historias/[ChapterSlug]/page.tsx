import { notFound } from 'next/navigation';
import { libraryData } from '../../../data/libraryData'; // Ajuste o caminho
import StoryViewer from '@/../../components/StoryViewer';

// Define os parâmetros estáticos para build (se usar SSG)
export async function generateStaticParams() {
    return Object.keys(libraryData).map((slug) => ({
        chapterSlug: slug,
    }));
}

export default function ChapterPage({ params }) {
    const { chapterSlug } = params;
    const chapter = libraryData[chapterSlug];

    if (!chapter) {
        notFound(); // Redireciona para a página 404 se o capítulo não for encontrado
    }

    return (
        <main>
            <StoryViewer chapterData={chapter} chapterSlug={chapterSlug} />
        </main>
    );
}