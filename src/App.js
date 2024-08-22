import './App.css';
import { useState, useEffect } from 'react';
import Square from './components/Square';
import { Patterns } from './Patterns';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [message, setMessage] = useState(""); 
  useEffect(() => {
    checkWin();
    checkIfTie();
    setPlayer((prev) => (prev === "X" ? "O" : "X"));
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      setMessage(`Game Finished! Winning player: ${result.winner}`);
      setTimeout(() => {
        setMessage(""); 
        restartGame();
      }, 2000); 
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSq={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSq={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSq={() => chooseSquare(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} chooseSq={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSq={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSq={() => chooseSquare(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} chooseSq={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSq={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSq={() => chooseSquare(8)} />
        </div>
      </div>
      {message && <div className="retro-message">{message}</div>} {/* Retro message display */}
    </div>
  );
}

export default App;
