import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <h1 className='titulo'>ANTAJO's GAMES</h1>
            <p className='p'>Your</p>
            <p className='p'>favourite site</p>
            <p className='p'>of games</p>
            <button className='boton' onClick={() => navigate('/game')}>
                Prueba la beta
            </button>
        </div>
    );
};

export default HomePage;