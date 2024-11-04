import React, { useState, useEffect } from 'react';
import he from 'he';
import './MC.css'

function MC() {
    const [question, setQuestion] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [correctScore, setCorrectScore] = useState(0);
    const [askedCount, setAskedCount] = useState(0);
    const [totalQuestions] = useState(10);
    const [resultMessage, setResultMessage] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadQuestion();
    }, []);

    const loadQuestion = async () => {
        setLoading(true);
        try {
            const APIUrl = 'https://opentdb.com/api.php?amount=1&type=multiple';
            const result = await fetch(APIUrl);
            const data = await result.json();
            showQuestion(data.results[0]);
        } catch (error) {
            console.error("Error fetching the question:", error);
            setResultMessage('Error loading question. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const showQuestion = (data) => {
        setCorrectAnswer(data.correct_answer);
        const incorrectAnswers = data.incorrect_answers;
        const allOptions = [...incorrectAnswers, data.correct_answer];

        // Mezclar las opciones para que la respuesta correcta no esté siempre en la misma posición
        const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

        setOptions(shuffledOptions);
        setQuestion(he.decode(data.question));
        setSelectedOption(null);
        setResultMessage('');
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (option === correctAnswer) {
            setCorrectScore(correctScore + 1);
            setResultMessage('Correct Answer!');
        } else {
            setResultMessage(`Incorrect Answer! Correct Answer: ${correctAnswer}`);
        }
        setAskedCount(askedCount + 1);
        if (askedCount + 1 === totalQuestions) {
            setIsGameOver(true);
        } else {
            setTimeout(loadQuestion, 2000);
        }
    };

    const restartQuiz = () => {
        setCorrectScore(0);
        setAskedCount(0);
        setIsGameOver(false);
        loadQuestion();
    };

    return (
        <div className="quiz-container">
            {loading ? (
                <p>Loading question...</p>
            ) : !isGameOver ? (
                <>
                    <h2 className="quiz-question">{question}</h2>
                    <ul className="quiz-options">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => handleOptionClick(option)} className={selectedOption === option ? 'selected' : ''}>
                                {he.decode(option)} {}
                            </li>
                        ))}
                    </ul>
                    {resultMessage && <p id="result">{resultMessage}</p>}
                </>
            ) : (
                <div>
                    <p>Your score is {correctScore} out of {totalQuestions}.</p>
                    <button id="play-again" onClick={restartQuiz}>Play Again</button>
                </div>
            )}
        </div>
    );
}

export default MC;