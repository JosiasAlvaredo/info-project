import './Navbar.css';
import React from 'react';
import imagen from '../Imagenes/1.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <img src={imagen} alt="Logo" />
                <ul>
                    <li><a onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Inicio</a></li>
                    <li><a onClick={() => navigate('/game')} style={{ cursor: 'pointer' }}>Juego</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;