import React from "react";
import { Link } from 'react-router-dom';
import "../Styles/Header.css"

export default function Header() {
    return (
        <div id="header-content">
            <nav>
                <ul id="menu-list">
                    <li className="menu-list-item">
                        <Link to="/">Início</Link>
                    </li>
                    <li className="menu-list-item">
                        <Link to="/Menu">Menu</Link>
                    </li>
                    <li className="menu-list-item">
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}