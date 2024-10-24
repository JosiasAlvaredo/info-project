import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <h1 className='titulo'>Juegos ANTAJO</h1>
            <p className='p'>Tu sitio</p>
            <p className='p2'>preferido</p>
            <p className='p2'>de videojuegos</p>
            <button className='boton' onClick={() => navigate('/game')}>
                Prueba la beta
            </button>
        </div>
    );
};

export default HomePage;