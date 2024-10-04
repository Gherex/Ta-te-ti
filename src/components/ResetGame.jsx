function ResetGame({ resetGame }) {
  return (
    <button
      className="bg-cyan-100 rounded-md text-cyan-950 p-2 mt-4 font-bold max-w-40 ml-auto mr-auto mb-4"
      onClick={resetGame}
    >
      Empezar de nuevo
    </button>
  );
}

export default ResetGame;
