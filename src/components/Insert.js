import React from "react";
import "./Insert.scss";

const Insert = () => {
  return (
    <div className="Insert">
      <input type="text" placeholder="+Add new item"></input>
      <button type="submit">추가</button>
    </div>
  );
};

export default Insert;
