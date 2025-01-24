import React from 'react';
import { Urinal } from './Urinal';
import { GameState, Player } from '../types/game';

type GameBoardProps = {
  gameState: GameState;
  onUrinalSelect: (index: number) => void;
};

export const GameBoard: React.FC<GameBoardProps> = ({ gameState, onUrinalSelect }) => {
  const isValidMove = (index: number): boolean => {
    if (gameState.gameOver || gameState.urinals[index].occupied) return false;
    
    // Check adjacent urinals
    const hasAdjacentOccupied = [-1, 1].some(offset => {
      const adjacentIndex = index + offset;
      return adjacentIndex >= 0 && 
             adjacentIndex < gameState.urinals.length && 
             gameState.urinals[adjacentIndex].occupied;
    });

    return !hasAdjacentOccupied;
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4 flex-wrap justify-center max-w-[1200px]">
        {gameState.urinals.map((urinal, index) => (
          <Urinal
            key={index}
            state={urinal}
            index={index}
            onSelect={onUrinalSelect}
            isValid={isValidMove(index)}
          />
        ))}
      </div>
    </div>
  );
};