import Square from "./components/Square";
import { useState } from "react";
import Turns from "./components/Turns";
import ResetGame from "./components/ResetGame";
import { MdOutlineEmail } from "react-icons/md";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import WinnerModal from "./components/WinnerModal";
import { checkWinnerFrom, checkEndGame } from "./logic/board";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    if (turnFromStorage) return JSON.parse(turnFromStorage);
    return TURNS.X;
  });
  const [winner, setWinner] = useState(null); //null es que no hay ganador, false es empate

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    //actualizo el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //cambio el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardo la partida en localstorage
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));
    //reviso si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <main className="bg-zinc-700 text-slate-200 h-screen flex justify-center flex-col text-center">
      <h1 className="text-3xl font-bold font-serif">TA TE TI</h1>
      <ResetGame resetGame={resetGame} />
      <section className="grid grid-cols-3 max-w-2xl ml-auto mr-auto gap-2">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square !== null ? square : ""}
            </Square>
          );
        })}
      </section>
      <section className="flex justify-center">
        <Turns isSelected={turn === TURNS.X}>{TURNS.X}</Turns>
        <Turns isSelected={turn === TURNS.O}>{TURNS.O}</Turns>
      </section>
      <footer className="flex items-center justify-center font-mono text-sm mt-2">
        Creado por Gherex, <MdOutlineEmail className="ml-1 mr-1" />
        germilagger@gmail.com
      </footer>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
