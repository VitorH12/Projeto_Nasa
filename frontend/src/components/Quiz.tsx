// src/components/Quiz.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';
import { Question } from '../app/quiz/quiz.d'; // Imports the Question interface - CHECK THIS PATH
import styles from '../app/quiz/quiz.module.css'; // We'll create this CSS later - CHECK THIS PATH

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string>(''); // 'correct', 'incorrect', 'warning', ''
    const [score, setScore] = useState<number>(0);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);

    // To ensure questions are re-shuffled on every restart
    const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

    useEffect(() => {
        if (quizStarted && randomQuestions.length === 0) {
            const shuffled = [...quizData].sort(() => 0.5 - Math.random());
            setRandomQuestions(shuffled.slice(0, 8));
        }
    }, [quizStarted, randomQuestions.length]);

    // If the quiz hasn't started, we don't try to access currentQuestion
    if (!quizStarted) {
        return (
            <div className={styles.quizContainer}>
                <h1 className={styles.quizTitle}>Test Your Knowledge About the Sun!</h1>
                <p className={styles.quizDescription}>
                    Get ready to answer 8 random questions about the mysteries of Kuarasy and Space Weather.
                    Did you listen carefully to the story?
                </p>
                <button onClick={() => {
                    setQuizStarted(true);
                    // Ensures questions are shuffled upon starting
                    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
                    setRandomQuestions(shuffled.slice(0, 8));
                }} className={styles.startButton}>
                    Start the Quiz!
                </button>
            </div>
        );
    }
    
    // If it still hasn't loaded the random questions (first time after starting)
    if (randomQuestions.length === 0) {
        return (
            <div className={styles.quizContainer}>
                <p className={styles.quizDescription}>Loading questions...</p>
            </div>
        );
    }

    // NOW, use currentQuizQuestion for EVERYTHING related to the current question
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
        setQuizStarted(false); // Go back to the initial screen to re-shuffle
        setRandomQuestions([]); // Clear questions so the useEffect re-shuffles on the next start
    };

    if (showResults) {
        return (
            <div className={`${styles.quizContainer} ${styles.resultsContainer}`}>
                <h2 className={styles.quizTitle}>Quiz Completed!</h2>
                <p className={styles.quizScore}>Your final score: {score} out of {randomQuestions.length}</p>
                <p className={styles.quizFeedback}>
                    {score === randomQuestions.length ? "Congratulations, you're a master of Space Weather!" :
                     score >= randomQuestions.length / 2 ? "Great job! You've learned a lot about Kuarasy." :
                     "Keep exploring! There are more secrets of the Sun to discover."}
                </p>
                <button onClick={handleRestartQuiz} className={styles.restartButton}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className={styles.quizContainer}>
            <h2 className={styles.quizTitle}>Quiz on the Sun and Space Weather</h2>
            <div className={styles.questionCounter}>
                Question {currentQuestionIndex + 1} of {randomQuestions.length}
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
                        Confirm Answer
                    </button>
                ) : (
                    <button
                        onClick={handleNextQuestion}
                        className={styles.nextButton}
                    >
                        {currentQuestionIndex < randomQuestions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                )}
            </div>

            {/* Feedback Popup */}
            {feedback && (
                <div className={styles.feedbackPopup}>
                    {feedback === 'correct' && <>
                        <p className={styles.correctText}>Correct! 🎉</p>
                        <p className={styles.explanationText}>{currentQuizQuestion.explanation}</p>
                    </>}
                    {feedback === 'incorrect' && <>
                        <p className={styles.incorrectText}>
                            Incorrect. The right answer was: {currentQuizQuestion.correctAnswer} 😔
                        </p>
                        <p className={styles.explanationText}>{currentQuizQuestion.explanation}</p>
                    </>}
                    {feedback === 'warning' && <p className={styles.warningText}>Please select an option!</p>}
                </div>
            )}
        </div>
    );
}