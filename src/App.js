import React from "react";
import Template from "./components/Template";
import Insert from "./components/Insert";
import List from "./components/List";

const App = () => {
  return (
    <Template>
      <Insert />
      <List />
    </Template>
  );
};

export default App;
