import React from "react";
import "./LeftSideBarOption.css";

function LeftSideBarOption({ active, text, Icon }) {
  return (
    <div className="leftSideBarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default LeftSideBarOption;
