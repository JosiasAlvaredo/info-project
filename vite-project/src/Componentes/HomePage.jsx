import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1 className='titulo'>Juegos ANTAJO</h1>
            <p className='p'>Tu sitio</p>
            <p className='p2'>preferido</p>
            <p className='p2'>de videojuegos</p>
            <button className='boton'>
                Prueba la beta
            </button>
        </div>
    );
};

export default HomePage;