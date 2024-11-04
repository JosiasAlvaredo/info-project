import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './GamePage.css';
import gameImage from '../Imagenes/info.jpeg';

const GamePage = () => {
    const navigate = useNavigate(); 
    const [dropdown1Visible, setDropdown1Visible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('Categoría'); 
    const [selectedOption2, setSelectedOption2] = useState('Dificultad');

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setDropdown1Visible(false);
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setDropdown2Visible(false);
    };

    return (
        <div className="game-page">
            <div className="grid-container">
                <img src={gameImage} alt="Descripción del juego" className="game-image" />
                <div className="text-container">
                    <h1>PREGUNTADOS</h1>
                    <h2>Rétate a ti mismo en una batalla de ingenio y habilidades frente a personajes</h2>
                    <button className='boton' onClick={() => navigate('/vof')}>
                        INICIAR
                        <div className='flecha'></div>
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
                                    <li onClick={() => handleOptionClick1('Verdadero/Falso')}>Verdadero/Falso</li>
                                    <li onClick={() => handleOptionClick1('Opciones Múltiples')}>Opciones Múltiples</li>
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
                                    <li onClick={() => handleOptionClick2('Fácil')}>Fácil</li>
                                    <li onClick={() => handleOptionClick2('Medio')}>Medio</li>
                                    <li onClick={() => handleOptionClick2('Difícil')}>Difícil</li>
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