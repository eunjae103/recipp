import { useState, useRef, useCallback } from "react";
import Template from "./components/Template";
import Insert from "./components/Insert";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [veggis, setVeggis] = useState([
    { id: 1, text: "양파", checked: false },
    { id: 2, text: "감자", checked: false },
    { id: 3, text: "당근", checked: false },
  ]);
  // const [meats, setMeats] = useState([
  //   { id: 1, text: "돼지고기", checked: false },
  //   { id: 2, text: "소고기", checked: false },
  //   { id: 3, text: "닭고기", checked: false },
  // ]);
  // const [fishs, setFishs] = useState([
  //   { id: 1, text: "흰살생선", checked: false },
  //   { id: 2, text: "대구살", checked: false },
  //   { id: 3, text: "새우살", checked: false },
  // ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const menu = { id: nextId.current, text };
      setVeggis(veggis.concat(menu));
      nextId.current += 1;
    },
    [veggis]
  );
  const onToggle = useCallback(
    (id) => {
      setVeggis(
        veggis.map((menu) =>
          menu.id === id ? { ...menu, checked: !menu.checked } : menu
        )
      );
    },
    [veggis]
  );
  return (
    <Template>
      <Insert onInsert={onInsert} />
      <h2>야채</h2>
      <List menus={veggis} onToggle={onToggle} />
      {/* <h2>고기</h2>
      <List menus={meats} />
      <h2>생선</h2>
      <List menus={fishs} /> */}
    </Template>
  );
};

export default App;
