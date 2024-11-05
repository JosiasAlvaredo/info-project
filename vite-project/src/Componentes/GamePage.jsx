import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './GamePage.css';
import gameImage from '../Images/info.jpeg';

const GamePage = () => {
    const navigate = useNavigate(); 
    const [dropdown1Visible, setDropdown1Visible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('Category'); 
    const [selectedOption2, setSelectedOption2] = useState('Difficulty');
    const [questions, setQuestions] = useState([]); 

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setDropdown1Visible(false);
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setDropdown2Visible(false);
    };

    const fetchQuestions = (category, difficulty) => {
        const url = `https://opentdb.com/api.php?amount=10&category=9&type=${category}&difficulty=${difficulty}`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Server response error");
                }
                return response.json();
            })
            .then(data => {
                setQuestions(data.results); 
            })
            .catch(error => {
                console.error("Error fetching questions:", error);
                throw error;
            });
    };

    const handleStartClick = () => {
        try {
            if (selectedOption1 === 'Category' || selectedOption2 === 'Difficulty') {
                throw new Error("Please, select a category and difficulty before starting.");
            }
    
            const category = selectedOption1 === 'True/False' ? 'boolean' : 'multiple';
            const difficulty = selectedOption2.toLowerCase();
            fetchQuestions(category, difficulty)
                .then(() => {
                    if (category === 'multiple') {
                        if (difficulty === 'easy') {
                            navigate('/mc/easy'); 
                        } else if (difficulty === 'medium') {
                            navigate('/mc/medium');
                        } else {
                            navigate('/mc/hard'); 
                        }
                    } else {

                        if (difficulty === 'easy') {
                            navigate('/tof/easy'); 
                        } else if (difficulty === 'medium') {
                            navigate('/tof/medium'); 
                        } else {
                            navigate('/tof/hard');
                        }
                    }
                })
                .catch(error => {
                    alert(error.message);
                });
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.message);
        }
    };

    return (
        <div className="game-page">
            <div className="grid-container">
                <img src={gameImage} alt="Game Description" className="game-image" />
                <div className="text-container">
                    <h1>QUIZ</h1>
                    <h2>Challenge yourself in a battle of wits and skills against characters</h2>
                    <button className='button' onClick={handleStartClick}>
                        START
                        <div className='arrow'></div>
                    </button>
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <div 
                                className="dropdown-header" 
                                onClick={() => setDropdown1Visible(!dropdown1Visible)}
                            >
                                {selectedOption1}
                            </div>
                            {dropdown1Visible && (
                                <ul className="dropdown-list">
                                    <li onClick={() => handleOptionClick1('True/False')}>True/False</li>
                                    <li onClick={() => handleOptionClick1('Multiple Choice')}>Multiple Choice</li>
                                </ul>
                            )}
                        </div>
                        <div className="dropdown">
                            <div 
                                className="dropdown-header" 
                                onClick={() => setDropdown2Visible(!dropdown2Visible)}
                            >
                                {selectedOption2}
                            </div>
                            {dropdown2Visible && (
                                <ul className="dropdown-list">
                                    <li onClick={() => handleOptionClick2('Easy') }>Easy</li>
                                    <li onClick={() => handleOptionClick2 ('Medium')}>Medium</li>
                                    <li onClick={() => handleOptionClick2('Hard')}>Hard</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;