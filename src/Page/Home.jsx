import React from "react";
import * as Assets from "../Assets";
import * as Components from "../Components";
import * as SubComponents from "../Components/Sub";
import * as Configs from "../Configs";
import * as cssModule from "../Scss/index";

const Home = () => {
  const { isLoading, data, refetch } = Configs.GetDataApi();

  if (isLoading) {
    return <SubComponents.Loading />;
  }

  return (
    <section className={cssModule.Page.page} data-cy="page-home">
      <Components.Header title="activity" refetch={refetch} />
      <div className={cssModule.Page.rowActivity}>
        {data?.length !== 0 ? (
          <>
            {data?.map((item, index) => (
              <Components.CardActivity
                key={index}
                item={item}
                refetch={refetch}
              />
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
