import React from "react";
import * as CgIcons from "react-icons/cg";
import * as cssModule from "../../Scss";

const Alert = ({ title }) => {
  return (
    <div className={cssModule.Components.alert} data-cy="sub-components-alert">
      <div>
        <span>
          <CgIcons.CgDanger />
        </span>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Alert;
