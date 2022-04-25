import { React } from "react";
import { FiCheckSquare } from "react-icons/fi";
import "./ListItem.scss";

const ListItem = () => {
  return (
    <div className="ListItem">
      <div className="checkbox" />
      <FiCheckSquare />
      <div className="text">양파</div>
      <div className="btn">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default ListItem;
