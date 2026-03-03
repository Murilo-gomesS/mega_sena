import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BetNumbers } from '../components/BetNumbers';
import { Navigation } from '../components/Navigation';
import { useBets } from '../context/BetContext';
import './History.css';

export function History() {
  const { bets, clearHistory } = useBets();
  const navigate = useNavigate();

  const handleClearHistory = () => {
    if (window.confirm('Tem certeza que deseja limpar todo o histórico?')) {
      clearHistory();
    }
  };

  const handleNewBet = () => {
    navigate('/palpite');
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="page history-page">
      <div className="container">
        <Navigation />
        
        <h1 className="page-title">Histórico de Palpites</h1>

        {bets.length === 0 ? (
          <div className="empty-state">
            <p className="empty-message">Nenhum palpite salvo ainda</p>
            <p className="empty-subtitle">
              Comece gerando e salvando suas combinações de números!
            </p>
            <button onClick={handleNewBet} className="btn btn-primary">
              Gerar Primeiro Palpite
            </button>
          </div>
        ) : (
          <>
            <div className="history-header">
              <p className="history-count">
                Total de palpites salvos: <strong>{bets.length}</strong>
              </p>
              <button 
                onClick={handleClearHistory} 
                className="btn btn-danger"
              >
                Limpar Histórico
              </button>
            </div>

            <div className="history-list">
              {bets.map((bet, index) => (
                <div key={bet.id} className="history-item">
                  <div className="history-item-header">
                    <span className="bet-number">Palpite #{bets.length - index}</span>
                    <span className="bet-date">{formatDate(bet.date)}</span>
                  </div>
                  <BetNumbers numbers={bet.numbers} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
