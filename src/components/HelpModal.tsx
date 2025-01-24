import React from 'react';
import { X } from 'lucide-react';

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-gray-900 text-gray-100 rounded-xl max-w-2xl w-full p-8 relative border border-gray-700 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">How to Play PICK-A-POTTY</h2>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Basic Rules</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Two players take turns selecting urinals</li>
              <li>You cannot select a urinal that is adjacent to an occupied one</li>
              <li>After 5 turns, the oldest selection is removed</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">How to Win</h3>
            <p className="text-gray-300">The game ends when a player cannot make a valid move. That player loses, and their opponent wins!</p>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Game Elements</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-blue-400">Blue urinals belong to Player 1</li>
              <li className="text-red-400">Red urinals belong to Player 2</li>
              <li className="text-gray-300">Numbers show which turn they were selected</li>
              <li className="text-gray-300">Faded urinals cannot be selected</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};