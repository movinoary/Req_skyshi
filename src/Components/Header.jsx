import React from "react";
import * as Sub from "./Sub";
import * as cssModule from "../Scss";

const Header = ({ title }) => {
  return (
    <header className={cssModule.Components.header}>
      <h1>{title}</h1>
      <Sub.ButtonAdd />
    </header>
  );
};

export default Header;
