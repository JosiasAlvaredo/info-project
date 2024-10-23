import './Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img id="logo" src="../Imagenes/1.png" ></img>
                <ul>
                    <li><a href="/HomePage.jsx">Inicio</a></li>
                    <li><a href="#">Juego</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;