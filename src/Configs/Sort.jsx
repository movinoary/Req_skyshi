import React from "react";
import * as Assets from "../Assets";
import * as Components from "../Components";
import * as cssModule from "../Scss";

const Default = ({ data, refetch }) => {
  return (
    <section className={cssModule.Page.sortList} data-cy="config-sort-default">
      {data?.todo_items.length !== 0 ? (
        <>
          {data?.todo_items.map((item, index) => (
            <Components.CardListItem
              key={index}
              item={item}
              refetch={refetch}
            />
          ))}
        </>
      ) : (
        <Components.Blank image={Assets.BlankTwo} />
      )}
    </section>
  );
};

const AtoZ = ({ data, refetch }) => {
  return (
    <section className={cssModule.Page.sortList} data-cy="config-sort-a-to-z">
      {data?.todo_items.length !== 0 ? (
        <>
          {data?.todo_items
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((item, index) => (
              <Components.CardListItem
                key={index}
                item={item}
                refetch={refetch}
              />
            ))}
        </>
      ) : (
        <Components.Blank image={Assets.BlankTwo} />
      )}
    </section>
  );
};

const ZtoA = ({ data, refetch }) => {
  return (
    <section className={cssModule.Page.sortList} data-cy="config-sort-z-to-a">
      {data?.todo_items.length !== 0 ? (
        <>
          {data?.todo_items
            .sort((a, b) => (a.title < b.title ? 1 : -1))
            .map((item, index) => (
              <Components.CardListItem
                key={index}
                item={item}
                refetch={refetch}
              />
            ))}
        </>
      ) : (
        <Components.Blank image={Assets.BlankTwo} />
      )}
    </section>
  );
};

const Latest = ({ data, refetch }) => {
  return (
    <section className={cssModule.Page.sortList} data-cy="config-sort-latest">
      {data?.todo_items.length !== 0 ? (
        <>
          {data?.todo_items
            .sort((a, b) => (a.id < b.id ? 1 : -1))
            .map((item, index) => (
              <Components.CardListItem
                key={index}
                item={item}
                refetch={refetch}
              />
            ))}
        </>
      ) : (
        <Components.Blank image={Assets.BlankTwo} />
      )}
    </section>
  );
};

const Longest = ({ data, refetch }) => {
  return (
    <section className={cssModule.Page.sortList} data-cy="config-sort-longest">
      {data?.todo_items.length !== 0 ? (
        <>
          {data?.todo_items
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((item, index) => (
              <Components.CardListItem
                key={index}
                item={item}
                refetch={refetch}
              />
            ))}
        </>
      ) : (
        <Components.Blank image={Assets.BlankTwo} />
      )}
    </section>
  );
};

const Complate = ({ data, refetch }) => {
  return (
    <section className={cssModule.Page.sortList} data-cy="config-sort-complate">
      {data?.todo_items.length !== 0 ? (
        <>
          {data?.todo_items
            .sort((a, b) => (a.is_active > b.is_active ? 1 : -1))
            .map((item, index) => (
              <Components.CardListItem
                key={index}
                item={item}
                refetch={refetch}
              />
            ))}
        </>
      ) : (
        <Components.Blank image={Assets.BlankTwo} />
      )}
    </section>
  );
};

export { Default, AtoZ, ZtoA, Latest, Longest, Complate };
