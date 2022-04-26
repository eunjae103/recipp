import { useState, useRef, useCallback } from "react";
import Template from "./components/Template";
import Insert from "./components/Insert";
import List from "./components/List";
import ListCategory from "./components/ListCategory";

const App = () => {
  // const [categorys, setCategorys] = useState([
  //   { id: 1, text: "야채" },
  //   { id: 2, text: "양파" },
  //   { id: 3, text: "고기" },
  // ]);
  const [veggis, setVeggis] = useState([
    { id: 1, text: "양파" },
    { id: 2, text: "감자" },
    { id: 3, text: "당근" },
  ]);
  const [meats, setMeats] = useState([
    { id: 1, text: "돼지" },
    { id: 2, text: "소" },
    { id: 3, text: "닭" },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const menu = { id: nextId.current, text };
      setVeggis(veggis.concat(menu));
      nextId.current += 1;
    },
    [veggis]
  );

  return (
    <Template>
      <Insert onInsert={onInsert} />
      <ListCategory />
      <List menus={veggis} />
      <ListCategory />
      <List menus={meats} />
    </Template>
  );
};

export default App;
