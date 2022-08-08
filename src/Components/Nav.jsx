import React from "react";
import { Link } from "react-router-dom";
import * as cssModule from "../Scss";

const Nav = () => {
  return (
    <nav className={cssModule.Components.nav}>
      <Link to="/" className={cssModule.Components.link}>
        <h1 data-cy="header-title">TO DO LIST APP</h1>
      </Link>
    </nav>
  );
};

export default Nav;
