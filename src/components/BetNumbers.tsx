import React from 'react';
import './BetNumbers.css';

interface BetNumbersProps {
  numbers: number[];
}

export function BetNumbers({ numbers }: BetNumbersProps) {
  return (
    <div className="bet-numbers">
      {numbers.map((number, index) => (
        <div key={index} className="ball">
          {number.toString().padStart(2, '0')}
        </div>
      ))}
    </div>
  );
}
