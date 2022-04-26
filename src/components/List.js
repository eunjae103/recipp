import { React } from "react";
import ListItem from "./ListItem";
import { RiPlantFill } from "react-icons/ri";
import "./List.scss";

const List = ({ menus }) => {
  return (
    <div className="List">
      <div className="category">
        <RiPlantFill />
        야채
      </div>
      {menus.map((menu) => (
        <ListItem menu={menu} key={menu.id} />
      ))}
    </div>
  );
};

export default List;
