import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './GamePage.css';
import gameImage from '../Imagenes/info.jpeg';

import gameImage from '../Imagenes/info.jpeg';
const GamePage = () => {
    const navigate = useNavigate(); 

    return (
        <div className="game-page">
            <div className="grid-container">
                <img src={gameImage} alt="Descripción del juego" className="game-image" />
                <div className="text-container">
                    <h1>PREGUNTADOS</h1>
                    <h2>Rétate a ti mismo en una batalla de ingenio y habilidades frente a personajes</h2>
                    <button className='boton' onClick={() => navigate('/vof')}> {/* Cambia la ruta aquí */}
                        INICIAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GamePage;