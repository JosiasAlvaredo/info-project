import React, { useState, useEffect } from 'react';

function VoF() {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=1&type=boolean')
            .then(res => res.json())
            .then(data => {
                setQuestion({
                    text: data.results[0].question,
                    correctAnswer: data.results[0].correct_answer === 'True'
                });
            });
    }, []);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setShowResult(true);
        setIsCorrect(answer === question.correctAnswer);
    };

    return (
        <div>
            {question && (
                <>
                    <h2>{question.text}</h2>
                    <button onClick={() => handleAnswerClick(true)}>Verdadero</button>
                    <button onClick={() => handleAnswerClick(false)}>Falso</button>
                    {showResult && (
                        <p>
                            {isCorrect ? 'Correcto!' : 'Incorrecto'}
                        </p>
                    )}
                </>
            )}
        </div>
    );
}

export default VoF;