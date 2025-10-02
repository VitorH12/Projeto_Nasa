// src/app/quiz/page.tsx
import Quiz from '../../components/Quiz';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import styles from './quiz.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kuarasy's Quiz - Test your knowledge about the Sun!",
  description:
    "Test what you've learned about the mysteries of the Sun and Space Weather with Kuarasy's interactive quiz.",
};

export default function QuizPage() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative', // permite posicionar a imagem independente
      }}
    >
      <Navbar />

      <div className={styles.quizPageContent}>
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#facc15',
            marginBottom: '2rem',
            textAlign: 'center',
            paddingTop: '2rem',
          }}
        >
          Kuarasy's Quiz!
        </h1>

        {/* Imagem fixa na esquerda */}
        <div
          style={{
            position: 'absolute',
            left: '5%', // distância da borda esquerda
            top: '50%',
            transform: 'translateY(-50%)', // centralização vertical
          }}
        >
          <Image
            src="/kuarasy-quiz3.png"
            alt="Kuarasy, the Sun, smiling and ready for the quiz"
            width={350}
            height={500}
          />
        </div>

        {/* Quiz centralizado independente */}
        <main
          style={{
            maxWidth: '600px',
            margin: '0 auto', // centraliza horizontalmente
            zIndex: 1, // garante que fique acima da imagem se sobrepor
          }}
        >
          <Quiz />
        </main>
      </div>
    </div>
  );
}
