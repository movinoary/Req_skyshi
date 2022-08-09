import React from "react";
import * as CgIcons from "react-icons/cg";
import * as cssModule from "../../Scss";

const Alert = ({ title }) => {
  return (
    <div className={cssModule.Components.alert}>
      <div>
        <span>
          <CgIcons.CgDanger />
        </span>
        <p data-cy="modal-information">{title}</p>
      </div>
    </div>
  );
};

export default Alert;
