import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <h1 className='title'>ANTAJO's GAMES</h1>
            <p className='p'>Your favourite place</p>
            <p className='p'>for games</p>
            <button className='button' onClick={() => navigate('/game')}>
                Try Demo
                <div className='arrow'></div>
            </button>
        </div>
    );
};

export default HomePage;