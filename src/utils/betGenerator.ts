/**
 * Gera uma aposta aleatória da Mega-Sena
 * @returns Array com 6 números únicos entre 1 e 60, ordenados crescentemente
 */
export function generateRandomBet(): number[] {
  const numbers = new Set<number>();
  
  // Gera 6 números únicos
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;
    numbers.add(randomNumber);
  }
  
  // Converte para array e ordena
  return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Gera um ID único para uma aposta
 * @returns String com timestamp e número aleatório
 */
export function generateBetId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
