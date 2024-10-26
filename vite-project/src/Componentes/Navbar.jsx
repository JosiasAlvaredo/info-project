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
                    <li><a onClick={() => navigate('/home')}>Inicio</a></li>
                    <li><a href="#">Juego</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;