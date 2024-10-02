function Square({ children, isSelected, updateBoard, index }) {
  function handleClick() {
    updateBoard(index);
  }

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center w-40 h-40 bg-cyan-700 rounded-md cursor-pointer select-none"
      style={isSelected ? { backgroundColor: "slateblue" } : {}}
    >
      {children}
    </div>
  );
}

export default Square;
