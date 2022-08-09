import React, { useState } from "react";
import { useMutation } from "react-query";
import * as Configs from "../Configs";
import * as SubComponents from "./Sub";
import * as cssModule from "../Scss";

const Header = ({ title, refetch }) => {
  const [message, setMessage] = useState(null);
  const form = {
    title: "New Activity",
  };

  const handleOnSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);

      await Configs.API.post("/activity-groups", body, config);
      refetch();
      const alert = <SubComponents.Alert title="berhasil menambahkan data" />;
      setMessage(alert);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <header className={cssModule.Components.header}>
      <h1 data-cy="activity-title">{title}</h1>
      {message && message}
      <form onSubmit={e => handleOnSubmit.mutate(e)}>
        <button
          className={cssModule.Components.buttonAdd}
          data-cy="activity-add-button"
        >
          + Tambah
        </button>
      </form>
    </header>
  );
};

export default Header;
