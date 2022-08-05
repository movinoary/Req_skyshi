import React from "react";
import * as Components from "../Components";
import * as cssModule from "../Scss/index";

const Home = () => {
  return (
    <section className={cssModule.Page.page}>
      <Components.Header title="activity" />
      <div className={cssModule.Page.rowActivity}>
        <Components.CardActivity />
        <Components.CardActivity />
        <Components.CardActivity />
        <Components.CardActivity />
        <Components.CardActivity />
      </div>
    </section>
  );
};

export default Home;
