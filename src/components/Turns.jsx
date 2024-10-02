function Turns({ children, isSelected }) {
  return (
    <div
      className="flex justify-center items-center w-20 h-20 m-2 select-none"
      style={isSelected ? { backgroundColor: "slateblue" } : {}}
    >
      {children}
    </div>
  );
}

export default Turns;
