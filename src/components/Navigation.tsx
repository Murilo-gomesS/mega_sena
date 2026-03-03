import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/palpite" className="nav-link">
        Palpite
      </Link>
      <Link to="/historico" className="nav-link">
        Histórico
      </Link>
    </nav>
  );
}
