import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import * as Configs from "../Configs";
import * as Sub from "./Sub";
import * as cssModule from "../Scss";

const Header = ({ title, refetch }) => {
  const [message, setMessage] = useState(null);
  const form = {
    title: "New Activity 1",
  };

  useEffect(() => {
    setTimeout(function () {
      setMessage();
    }, 3000);
  }, []);

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
      const alert = <Sub.Alert title="berhasil menambahkan data" />;
      setMessage(alert);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <header className={cssModule.Components.header}>
      <h1>{title}</h1>
      {message && message}
      <form onSubmit={e => handleOnSubmit.mutate(e)}>
        <Sub.ButtonAdd />
      </form>
    </header>
  );
};

export default Header;
