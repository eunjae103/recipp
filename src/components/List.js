import React from "react";
import ListItem from "./ListItem";
import { RiPlantFill } from "react-icons/ri";
import "./List.scss";

const List = () => {
  return (
    <div className="List">
      <div className="category">
        <RiPlantFill />
        Veggies
      </div>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
    </div>
  );
};

export default List;
