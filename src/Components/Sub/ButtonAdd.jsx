import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../Scss";

function ButtonAdd() {
  return (
    <button className={cssModule.Components.buttonAdd}>
      <AiIcons.AiOutlinePlus /> tambah
    </button>
  );
}

export default ButtonAdd;
