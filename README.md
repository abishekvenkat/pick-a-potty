# PICK-A-POTTY
A strategic two-player game about optimal urinal selection, built with React, TypeScript, and Tailwind CSS.

### 🎮 Game Rules
- Two players take turns selecting unoccupied urinals
- You cannot select a urinal adjacent to an occupied one
- After 5 turns, the oldest selection is removed
- The game ends when a player cannot make a valid move
- The player who cannot make a valid move loses

### 🚀 Features
- Clean, modern UI with smooth animations
- Turn tracking with move numbers
- Player color coding (Blue: Player 1, Red: Player 2)
- Built-in help modal
- Responsive design
- Auto-removal of old selections

### 🏃‍♂️ Running Locally
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

### 🔍 Code Structure
The game is organized into several key components:

- `App.tsx` - Main game logic and state management
- `GameBoard.tsx` - Game board and move validation
- `Urinal.tsx` - Individual urinal component with SVG
- `GameStatus.tsx` - Game status display
- `HelpModal.tsx` - Help documentation

### 📝 License
MIT