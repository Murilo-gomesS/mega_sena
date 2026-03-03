export interface Bet {
  id: string;
  numbers: number[];
  date: Date;
}

export interface BetContextType {
  bets: Bet[];
  addBet: (bet: Bet) => void;
  clearHistory: () => void;
}
