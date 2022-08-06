import React from "react";
import * as Assets from "../Assets";
import * as Components from "../Components";
import * as Configs from "../Configs";
import * as cssModule from "../Scss/index";

const Home = () => {
  const { data } = Configs.GetDataApi();

  return (
    <section className={cssModule.Page.page}>
      <Components.Header title="activity" />
      <div className={cssModule.Page.rowActivity}>
        {data?.length !== 0 ? (
          <>
            {data?.map((item, index) => (
              <Components.CardActivity key={index} item={item} />
            ))}
          </>
        ) : (
          <Components.Blank image={Assets.BlankOne} />
        )}
      </div>
    </section>
  );
};

export default Home;
