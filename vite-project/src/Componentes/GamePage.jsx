import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './GamePage.css';
import gameImage from '../Imagenes/info.jpeg';

const GamePage = () => {
    const navigate = useNavigate(); 
    const [dropdown1Visible, setDropdown1Visible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('Selecciona una opción'); // Opción seleccionada por defecto
    const [selectedOption2, setSelectedOption2] = useState('Selecciona una opción'); // Opción seleccionada por defecto

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
                    </button>
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <div 
                                className="dropdown-header" 
                                onClick={() => setDropdown1Visible(!dropdown1Visible)}
                                style={{ cursor: 'default' }} // Para indicar que no es clickeable
                            >
                                {selectedOption1}
                            </div>
                            {dropdown1Visible && (
                                <ul>
                                    <li onClick={() => handleOptionClick1('Opción 1')}>Opción 1</li>
                                    <li onClick={() => handleOptionClick1('Opción 2')}>Opción 2</li>
                                    <li onClick={() => handleOptionClick1('Opción 3')}>Opción 3</li>
                                </ul>
                            )}
                        </div>
                        <div className="dropdown">
                            <div 
                                className="dropdown-header" 
                                onClick={() => setDropdown2Visible(!dropdown2Visible)}
                                style={{ cursor: 'default' }} // Para indicar que no es clickeable
                            >
                                {selectedOption2}
                            </div>
                            {dropdown2Visible && (
                                <ul>
                                    <li onClick={() => handleOptionClick2('Opción 1')}>Opción 1</li>
                                    <li onClick={() => handleOptionClick2('Opción 2')}>Opción 2</li>
                                    <li onClick={() => handleOptionClick2('Opción 3')}>Opción 3</li>
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