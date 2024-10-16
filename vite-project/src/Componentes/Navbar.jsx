import './Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img id="logo" src="INCLUIR_RUTA_DE_IMAGEN" ></img>
                <ul>
                    <li><a href="/HomePage.jsx">Inicio</a></li>
                    <li><a href="#">Juego</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;