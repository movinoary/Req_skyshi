import React from "react";
import * as cssModule from "../Scss";

const Blank = ({ image }) => {
  return (
    <div className={cssModule.Components.blank}>
      <img src={image} alt="Blank" />
    </div>
  );
};

export default Blank;
