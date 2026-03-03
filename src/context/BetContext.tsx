import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Bet, BetContextType } from '../types';

const BetContext = createContext<BetContextType | undefined>(undefined);

interface BetProviderProps {
  children: ReactNode;
}

export function BetProvider({ children }: BetProviderProps) {
  const [bets, setBets] = useState<Bet[]>([]);

  const addBet = useCallback((bet: Bet) => {
    setBets((prevBets) => [...prevBets, bet]);
  }, []);

  const clearHistory = useCallback(() => {
    setBets([]);
  }, []);

  return (
    <BetContext.Provider value={{ bets, addBet, clearHistory }}>
      {children}
    </BetContext.Provider>
  );
}

export function useBets() {
  const context = useContext(BetContext);
  if (context === undefined) {
    throw new Error('useBets deve ser usado dentro de um BetProvider');
  }
  return context;
}
