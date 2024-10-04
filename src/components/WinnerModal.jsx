import Square from "./Square";
import ResetGame from "./ResetGame";

function WinnerModal({ winner, resetGame }) {
  const winnerText = winner === false ? "Empate" : "Ganó";

  if (winner === null) return null;

  return (
    <section className="fixed inset-0 bg-gray-600 bg-opacity-80 flex justify-center items-center">
      <div className="flex flex-col items-center bg-slate-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl mb-2">{winnerText}</h2>
        <header>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <ResetGame resetGame={resetGame} />
        </footer>
      </div>
    </section>
  );
}

export default WinnerModal;
