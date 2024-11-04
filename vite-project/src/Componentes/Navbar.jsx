import './Navbar.css';
import React from 'react';
import imagen from '../Images/1.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar">
                <img src={imagen} alt="Logo" />
                <ul>
                    <li><a onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Home</a></li>
                    <li><a onClick={() => navigate('/game')} style={{ cursor: 'pointer' }}>Game</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;