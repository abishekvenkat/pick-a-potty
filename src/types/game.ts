export type Player = 1 | 2;

export type UrinalState = {
  occupied: boolean;
  player: Player | null;
  turnNumber: number | null;
};

export type GameState = {
  urinals: UrinalState[];
  currentPlayer: Player;
  currentTurn: number;
  gameOver: boolean;
  winner: Player | null;
};