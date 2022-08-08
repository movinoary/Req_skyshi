import React from "react";
import { Link } from "react-router-dom";
import * as cssModule from "../Scss";

const Nav = () => {
  return (
    <nav className={cssModule.Components.nav} data-cy="header-title">
      <Link to="/" className={cssModule.Components.link}>
        <h1>to do list app</h1>
      </Link>
    </nav>
  );
};

export default Nav;
