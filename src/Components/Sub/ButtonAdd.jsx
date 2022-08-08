import React from "react";
import * as AiIcons from "react-icons/ai";
import * as cssModule from "../../Scss";

function ButtonAdd({ click }) {
  return (
    <button
      className={cssModule.Components.buttonAdd}
      onClick={click}
      data-cy="todo-add-button"
    >
      <AiIcons.AiOutlinePlus /> tambah
    </button>
  );
}

export default ButtonAdd;
