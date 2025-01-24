import React from 'react';
import { Player, UrinalState } from '../types/game';

type UrinalProps = {
  state: UrinalState;
  index: number;
  onSelect: (index: number) => void;
  isValid: boolean;
};

const playerColors: Record<Player, string> = {
  1: 'text-blue-400',
  2: 'text-red-400',
};

const UrinalIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1000 1000"
    className={className}
    width="64"
    height="64"
    stroke="currentColor"
    fill="none"
    strokeWidth="40"
  >
    <path d="M300 100h100v150h-100zM600 100h100v150h-100z" />
    <path d="M200 250 C 200 250, 500 250, 800 250
             C 900 250, 900 350, 900 450
             C 900 650, 750 800, 500 800
             C 250 800, 100 650, 100 450
             C 100 350, 100 250, 200 250 Z" />
    <path d="M300 350 C 300 350, 500 350, 700 350
             C 800 350, 800 400, 800 450
             C 800 600, 700 700, 500 700
             C 300 700, 200 600, 200 450
             C 200 400, 200 350, 300 350 Z" />
  </svg>
);

export const Urinal: React.FC<UrinalProps> = ({ state, index, onSelect, isValid }) => {
  const handleClick = () => {
    if (isValid) {
      onSelect(index);
    }
  };

  return (
    <div 
      className={`relative transition-all duration-300 transform hover:scale-110 
        ${isValid ? 'cursor-pointer opacity-100 hover:drop-shadow-glow' : 'cursor-not-allowed opacity-30'}
        ${state.occupied ? playerColors[state.player!] : 'text-gray-300'}`}
      onClick={handleClick}
    >
      <UrinalIcon className="drop-shadow-md" />
      {state.turnNumber && (
        <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center border-2 border-current shadow-lg">
          {state.turnNumber}
        </div>
      )}
    </div>
  );
};