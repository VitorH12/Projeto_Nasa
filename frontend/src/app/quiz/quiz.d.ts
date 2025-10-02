// src/types/quiz.d.ts

export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    relatedChapterId?: string; // Opcional, caso não haja um capítulo relacionado para todas
}

