import { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import "./ListItem.scss";

const ListItem = ({ menu }) => {
  const { text } = menu;
  const [value, setValue] = useState(0);
  return (
    <div className="ListItem">
      <div className="checkbox">
        <MdOutlineCheckBoxOutlineBlank />
      </div>
      <div className="text">{text}</div>
      <div className="btn">
        <button onClick={() => setValue(value - 1)}>-</button>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
};

export default ListItem;
