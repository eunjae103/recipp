import React from "react";
import "./Template.scss";

const Template = ({ children }) => {
  return (
    <div className="Template">
      <div className="title">이유식재료 관리 리스트를 만들자!!!</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Template;
