import Square from "./components/Square";
import { useState } from "react";
import Turns from "./components/Turns";

const TURNS = {
  X: "X",
  O: "O",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); //null es que no hay ganador, false es empate

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="bg-zinc-700 text-slate-200 h-screen flex justify-center flex-col text-center">
      <h1 className="text-3xl font-bold mb-2">TA TE TI</h1>
      <section className="grid grid-cols-3 max-w-2xl ml-auto mr-auto gap-2">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="flex justify-center">
        <Turns isSelected={turn === TURNS.X}>{TURNS.X}</Turns>
        <Turns isSelected={turn === TURNS.O}>{TURNS.O}</Turns>
      </section>
      {winner !== null && (
        <section className="fixed inset-0 bg-gray-600 bg-opacity-80 flex justify-center items-center">
          <div className="flex flex-col items-center bg-slate-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-xl mb-1">{winner === false ? "Empate" : "Ganó "}</h2>
            <header>
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button className="bg-cyan-100 rounded-md text-cyan-950 p-2 mt-4 font-bold" onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
