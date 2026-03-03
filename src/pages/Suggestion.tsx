import React, { useState, useEffect } from 'react';
import { BetNumbers } from '../components/BetNumbers';
import { Navigation } from '../components/Navigation';
import { useBets } from '../context/BetContext';
import { generateRandomBet, generateBetId } from '../utils/betGenerator';
import './Suggestion.css';

export function Suggestion() {
  const [currentNumbers, setCurrentNumbers] = useState<number[]>([]);
  const { addBet } = useBets();

  // Gera automaticamente o primeiro palpite ao montar o componente
  useEffect(() => {
    const newNumbers = generateRandomBet();
    setCurrentNumbers(newNumbers);
    
    const newBet = {
      id: generateBetId(),
      numbers: newNumbers,
      date: new Date(),
    };
    addBet(newBet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateNewBet = () => {
    const newNumbers = generateRandomBet();
    setCurrentNumbers(newNumbers);
    
    // Adiciona automaticamente ao histórico
    const newBet = {
      id: generateBetId(),
      numbers: newNumbers,
      date: new Date(),
    };
    addBet(newBet);
  };

  return (
    <div className="page suggestion-page">
      <div className="container">
        <Navigation />
        
        <h1 className="page-title">Sua Sugestão de Aposta</h1>
        
        <div className="suggestion-card">
          {currentNumbers.length > 0 ? (
            <>
              <BetNumbers numbers={currentNumbers} />
              
              <div className="button-group">
                <button 
                  onClick={generateNewBet} 
                  className="btn btn-secondary"
                >
                  Nova sugestão
                </button>
              </div>
            </>
          ) : (
            <p className="loading">Gerando números...</p>
          )}
        </div>
      </div>
    </div>
  );
}
