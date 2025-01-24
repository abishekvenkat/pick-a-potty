import React from 'react';
import { Player } from '../types/game';

type GameStatusProps = {
  currentPlayer: Player;
  currentTurn: number;
  gameOver: boolean;
  winner: Player | null;
};

export const GameStatus: React.FC<GameStatusProps> = ({
  currentPlayer,
  currentTurn,
  gameOver,
  winner,
}) => {
  return (
    <div className="text-center mb-8 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-bold mb-3">
        {gameOver ? (
          <span className="text-green-400 animate-pulse">
            Player {winner} Wins! 🎉
          </span>
        ) : (
          <span className={`${currentPlayer === 1 ? 'text-blue-400' : 'text-red-400'} drop-shadow-glow`}>
            Player {currentPlayer}'s Turn
          </span>
        )}
      </h2>
      <p className="text-gray-400 text-xl">Turn: {currentTurn}</p>
    </div>
  );
};