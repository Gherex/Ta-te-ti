import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";

function Square({ children, isSelected, updateBoard, index }) {
  function handleClick() {
    updateBoard(index);
  }

  const renderIcon = (value) => {
    if (value === "X") return <ImCross />;
    if (value === "O") return <FaRegCircle />;
    return null;
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center w-36 h-36 bg-cyan-700 rounded-md cursor-pointer select-none text-6xl"
      style={isSelected ? { backgroundColor: "slateblue" } : {}}
    >
      {renderIcon(children)}
    </div>
  );
}

export default Square;
