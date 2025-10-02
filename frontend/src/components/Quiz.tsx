// src/components/Quiz.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { quizData } from '../data/quizData';
import { Question } from '../app/quiz/quiz.d'; // Importa a interface Question - VERIFIQUE ESTE CAMINHO
import styles from '../app/quiz/quiz.module.css'; // Criaremos este CSS depois - VERIFIQUE ESTE CAMINHO

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string>(''); // 'correct', 'incorrect', 'warning', ''
    const [score, setScore] = useState<number>(0);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);

    // Para garantir que as perguntas sejam re-embaralhadas a cada reinício
    const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

    // --- REMOVA ESTA LINHA ---
    // const questions: Question[] = useMemo(() => {
    //     const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    //     return shuffled.slice(0, 8);
    // }, []);

    // --- REMOVA ESTA LINHA ---
    // const currentQuestion: Question = questions[currentQuestionIndex];


    useEffect(() => {
        if (quizStarted && randomQuestions.length === 0) {
            const shuffled = [...quizData].sort(() => 0.5 - Math.random());
            setRandomQuestions(shuffled.slice(0, 8));
        }
    }, [quizStarted, randomQuestions.length]);


    // Se o quiz não tiver começado, não tentamos acessar currentQuestion
    if (!quizStarted) {
        return (
            <div className={styles.quizContainer}>
                <h1 className={styles.quizTitle}>Teste Seus Conhecimentos sobre o Sol!</h1>
                <p className={styles.quizDescription}>
                    Prepare-se para responder a 8 perguntas aleatórias sobre os mistérios de Kuarasy e o Clima Espacial.
                    Será que você ouviu bem a história?
                </p>
                <button onClick={() => {
                    setQuizStarted(true);
                    // Garante que as perguntas sejam embaralhadas ao iniciar
                    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
                    setRandomQuestions(shuffled.slice(0, 8));
                }} className={styles.startButton}>
                    Começar o Quiz!
                </button>
            </div>
        );
    }
    
    // Se ainda não carregou as perguntas aleatórias (primeira vez após iniciar)
    if (randomQuestions.length === 0) {
        return (
            <div className={styles.quizContainer}>
                <p className={styles.quizDescription}>Carregando perguntas...</p>
            </div>
        );
    }

    // AGORA SIM, use currentQuizQuestion para TUDO relacionado à pergunta atual
    const currentQuizQuestion: Question = randomQuestions[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        if (feedback) return;
        setSelectedOption(option);
    };

    const handleSubmitAnswer = () => {
        if (!selectedOption) {
            setFeedback('warning');
            return;
        }

        // CORREÇÃO AQUI: Compare com currentQuizQuestion.correctAnswer
        if (selectedOption === currentQuizQuestion.correctAnswer) {
            setScore(prevScore => prevScore + 1);
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }
    };

    const handleNextQuestion = () => {
        setFeedback('');
        setSelectedOption(null);
        // CORREÇÃO AQUI: Use randomQuestions.length
        if (currentQuestionIndex < randomQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            setShowResults(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setFeedback('');
        setScore(0);
        setShowResults(false);
        setQuizStarted(false); // Volta para a tela inicial para re-embaralhar
        setRandomQuestions([]); // Limpa as perguntas para que o useEffect re-embaralhe no próximo início
    };

    if (showResults) {
        return (
            <div className={`${styles.quizContainer} ${styles.resultsContainer}`}>
                <h2 className={styles.quizTitle}>Quiz Concluído!</h2>
                <p className={styles.quizScore}>Sua pontuação final: {score} de {randomQuestions.length}</p>
                <p className={styles.quizFeedback}>
                    {score === randomQuestions.length ? "Parabéns, você é um mestre do Clima Espacial!" :
                     score >= randomQuestions.length / 2 ? "Muito bom! Você aprendeu bastante sobre Kuarasy." :
                     "Continue explorando! Há mais segredos do Sol para descobrir."}
                </p>
                <button onClick={handleRestartQuiz} className={styles.restartButton}>
                    Tentar Novamente
                </button>
            </div>
        );
    }

    return (
        <div className={styles.quizContainer}>
            <h2 className={styles.quizTitle}>Quiz sobre o Sol e Clima Espacial</h2>
            <div className={styles.questionCounter}>
                Questão {currentQuestionIndex + 1} de {randomQuestions.length}
            </div>
            <p className={styles.questionText}>{currentQuizQuestion.question}</p>

            <div className={styles.optionsContainer}>
                {currentQuizQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        className={`${styles.optionButton} 
                            ${selectedOption === option ? styles.selected : ''}
                            ${feedback === 'correct' && option === currentQuizQuestion.correctAnswer ? styles.correct : ''}
                            ${feedback === 'incorrect' && option === selectedOption ? styles.incorrect : ''}
                            ${feedback && option !== currentQuizQuestion.correctAnswer && option !== selectedOption ? styles.disabled : ''}`}
                        onClick={() => handleOptionSelect(option)}
                        disabled={!!feedback}
                    >
                        {option}
                    </button>
                ))}
            </div>

            <div className={styles.quizNavigation}>
                {!feedback || feedback === 'warning' ? (
                    <button
                        onClick={handleSubmitAnswer}
                        className={styles.submitButton}
                        disabled={!selectedOption}
                    >
                        Confirmar Resposta
                    </button>
                ) : (
                    <button
                        onClick={handleNextQuestion}
                        className={styles.nextButton}
                    >
                        {currentQuestionIndex < randomQuestions.length - 1 ? 'Próxima Questão' : 'Ver Resultados'}
                    </button>
                )}
            </div>

            {/* Popup de feedback */}
            {feedback && (
                <div className={styles.feedbackPopup}>
                    {feedback === 'correct' && <>
                        <p className={styles.correctText}>Correto! 🎉</p>
                        <p className={styles.explanationText}>{currentQuizQuestion.explanation}</p>
                    </>}
                    {feedback === 'incorrect' && <>
                        <p className={styles.incorrectText}>
                            Incorreto. A resposta certa era: {currentQuizQuestion.correctAnswer} 😔
                        </p>
                        <p className={styles.explanationText}>{currentQuizQuestion.explanation}</p>
                    </>}
                    {feedback === 'warning' && <p className={styles.warningText}>Por favor, selecione uma opção!</p>}
                </div>
            )}
        </div>

);
}
