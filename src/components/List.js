import ListItem from "./ListItem";
import "./List.scss";

const List = ({ menus, onToggle }) => {
  return (
    <div className="List">
      {menus.map((veggis) => (
        <ListItem menu={veggis} key={veggis.id} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default List;
