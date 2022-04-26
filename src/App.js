import { useState, useRef, useCallback } from "react";
import Template from "./components/Template";
import Insert from "./components/Insert";
import List from "./components/List";

const App = () => {
  const [menus, setMenus] = useState([
    { id: 1, text: "양파" },
    { id: 2, text: "감자" },
    { id: 3, text: "당근" },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const menu = { id: nextId.current, text };
      setMenus(menus.concat(menu));
      nextId.current += 1;
    },
    [menus]
  );

  return (
    <Template>
      <Insert onInsert={onInsert} />
      <List menus={menus} />
    </Template>
  );
};

export default App;
