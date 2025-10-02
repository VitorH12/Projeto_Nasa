// src/app/historias/[slug]/page.tsx
import { notFound } from "next/navigation";
import { libraryData } from "../../../data/libraryData"; 
import StoryViewer from "../../../../components/StoryViewer";
import Navbar from "../../../../components/Navbar";

type ChapterSlug = keyof typeof libraryData;

interface ChapterPageProps {
  params: { slug: string };
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const slug = params.slug as ChapterSlug;
  const chapterData = libraryData[slug];

  if (!chapterData) {
    notFound();
  }

  // Ordena os capítulos e acha o próximo
  const chapterSlugs = Object.keys(libraryData);
  const currentChapterIndex = chapterSlugs.indexOf(slug);
  const nextChapterSlug =
    currentChapterIndex < chapterSlugs.length - 1
      ? chapterSlugs[currentChapterIndex + 1]
      : null;

  return (
    <>
      <Navbar />
      <StoryViewer
        chapterData={chapterData}
        chapterSlug={slug}
      />
    </>
  );
}
