import React, { useState, useEffect } from 'react';
import he from 'he'; // Import the he library
import './VoF.css';

function VoF() {
    const [question, setQuestion] = useState(null);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [correctScore, setCorrectScore] = useState(0);
    const [askedCount, setAskedCount] = useState(0);
    const [totalQuestions] = useState(10);
    const [resultMessage, setResultMessage] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        loadQuestion();
    }, []);

    const loadQuestion = async () => {
        setLoading(true); // Set loading to true
        try {
            const APIUrl = 'https://opentdb.com/api.php?amount=1&type=boolean';
            const result = await fetch(APIUrl);
            const data = await result.json();
            showQuestion(data.results[0]);
        } catch (error) {
            console.error("Error fetching the question:", error);
            setResultMessage('Error loading question. Please try again later.');
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    const showQuestion = (data) => {
        setCorrectAnswer(data.correct_answer);
        const incorrectAnswers = data.incorrect_answers;
        const allOptions = [...incorrectAnswers, data.correct_answer];
        setOptions(shuffleArray(allOptions)); // Shuffle options
        setQuestion(he.decode(data.question)); // Decode the question
        setSelectedOption(null);
        setResultMessage('');
    };

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const checkAnswer = () => {
        if (selectedOption) {
            if (selectedOption === correctAnswer) {
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
        } else {
            setResultMessage('Please select an option!');
        }
    };

    const restartQuiz = () => {
        setCorrectScore(0);
        setAskedCount(0);
        setIsGameOver(false);
        loadQuestion();
    };

    return (
        <div>
            {loading ? (
                <p>Loading question...</p>
            ) : !isGameOver ? (
                <>
                    <h2 className="quiz-question">{question}</h2>
                    <ul className="quiz-options">
                        {options.map((option, index) => (
                            <li key={index} onClick={() => setSelectedOption(option)} className={selectedOption === option ? 'selected' : ''}>
                                {he.decode(option)} {/* Decode the option */}
                            </li>
                        ))}
                    </ul>
                    <button id="check-answer" onClick={checkAnswer}>Check Answer</button>
                    {resultMessage && <p id="result">{resultMessage}</p>}
                </>
            ) : (
                <div className="result">
                    <p>Your score is {correctScore} out of {totalQuestions}.</p>
                    <button id="play-again" onClick={restartQuiz}>Play Again</button>
                </div>
            )}
        </div>
    );
}

export default VoF;