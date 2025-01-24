import React, { useState, useCallback } from 'react';
import { GameBoard } from './components/GameBoard';
import { GameStatus } from './components/GameStatus';
import { HelpModal } from './components/HelpModal';
import { GameState, Player, UrinalState } from './types/game';
import { HelpCircle, RotateCcw, Github } from 'lucide-react';

const URINAL_COUNT = 14;
const TURNS_BEFORE_REMOVAL = 5;

const createInitialState = (): GameState => ({
  urinals: Array(URINAL_COUNT).fill(null).map(() => ({
    occupied: false,
    player: null,
    turnNumber: null,
  })),
  currentPlayer: 1,
  currentTurn: 1,
  gameOver: false,
  winner: null,
});

function App() {
  const [gameState, setGameState] = useState<GameState>(createInitialState());
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const checkGameOver = useCallback((urinals: UrinalState[]): boolean => {
    return !urinals.some((urinal, index) => {
      if (urinal.occupied) return false;
      
      const hasAdjacentOccupied = [-1, 1].some(offset => {
        const adjacentIndex = index + offset;
        return adjacentIndex >= 0 && 
               adjacentIndex < urinals.length && 
               urinals[adjacentIndex].occupied;
      });

      return !hasAdjacentOccupied;
    });
  }, []);

  const handleUrinalSelect = (index: number) => {
    if (gameState.gameOver) return;

    setGameState(prevState => {
      const newUrinals = [...prevState.urinals];
      newUrinals[index] = {
        occupied: true,
        player: prevState.currentPlayer,
        turnNumber: prevState.currentTurn,
      };

      if (prevState.currentTurn > TURNS_BEFORE_REMOVAL) {
        const turnToRemove = prevState.currentTurn - TURNS_BEFORE_REMOVAL;
        newUrinals.forEach((urinal, i) => {
          if (urinal.turnNumber === turnToRemove) {
            newUrinals[i] = {
              occupied: false,
              player: null,
              turnNumber: null,
            };
          }
        });
      }

      const nextPlayer = prevState.currentPlayer === 1 ? 2 : 1;
      const isGameOver = checkGameOver(newUrinals);

      return {
        urinals: newUrinals,
        currentPlayer: nextPlayer,
        currentTurn: prevState.currentTurn + 1,
        gameOver: isGameOver,
        winner: isGameOver ? prevState.currentPlayer : null,
      };
    });
  };

  const handleReset = () => {
    setGameState(createInitialState());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-8">
      <div className="relative w-full max-w-4xl">
        <h1 className="text-6xl font-black mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          PICK-A-POTTY
        </h1>
        <div className="absolute right-0 top-2 flex gap-4">
          <button
            onClick={handleReset}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Restart Game"
          >
            <RotateCcw size={24} className="drop-shadow-glow" />
          </button>
          <button
            onClick={() => setIsHelpOpen(true)}
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Help"
          >
            <HelpCircle size={24} className="drop-shadow-glow" />
          </button>
          <a
            href="https://github.com/abishekvenkat/pick-a-potty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={24} className="drop-shadow-glow" />
          </a>
        </div>
      </div>
      
      <GameStatus
        currentPlayer={gameState.currentPlayer}
        currentTurn={gameState.currentTurn}
        gameOver={gameState.gameOver}
        winner={gameState.winner}
      />

      <GameBoard
        gameState={gameState}
        onUrinalSelect={handleUrinalSelect}
      />

      {gameState.gameOver && (
        <button
          onClick={handleReset}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Play Again
        </button>
      )}

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}

export default App;