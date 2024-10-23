import './Navbar.css';
import React from 'react';
import imagen from '../Imagenes/1.png';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img src={imagen} ></img>
                <ul>
                    <li><a href="/HomePage.jsx">Inicio</a></li>
                    <li><a href="#">Juego</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;