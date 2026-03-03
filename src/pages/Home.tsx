import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import './Home.css';

export function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/palpite');
  };

  return (
    <div className="page home-page">
      <div className="container">
        <h1 className="title">Gerador de Palpites Mega-Sena</h1>
        <p className="subtitle">
          Gere combinações aleatórias de números para suas apostas da Mega-Sena
        </p>
        
        <button onClick={handleStart} className="btn btn-primary btn-large">
          Clique para começar
        </button>

        <Navigation />
      </div>
    </div>
  );
}
