import ListItem from "./ListItem";
import "./List.scss";

const List = ({ menus }) => {
  return (
    <div className="List">
      {menus.map((veggis) => (
        <ListItem menu={veggis} key={veggis.id} />
      ))}
    </div>
  );
};

export default List;
