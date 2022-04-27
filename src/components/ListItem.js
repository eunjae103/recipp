import { useState } from "react";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import "./ListItem.scss";
import cn from "classnames";

const ListItem = ({ menu, onToggle }) => {
  const { id, text, checked } = menu;
  const [value, setValue] = useState(0);
  return (
    <div className="ListItem">
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
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
