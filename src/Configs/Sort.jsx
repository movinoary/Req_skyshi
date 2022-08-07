import React from "react";
import * as Assets from "../Assets";
import * as Components from "../Components";

const Default = ({ data, refetch }) => {
  return (
    <>
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
    </>
  );
};

const AtoZ = ({ data, refetch }) => {
  return (
    <>
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
    </>
  );
};

const ZtoA = ({ data, refetch }) => {
  return (
    <>
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
    </>
  );
};

const Latest = ({ data, refetch }) => {
  return (
    <>
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
    </>
  );
};

const Longest = ({ data, refetch }) => {
  return (
    <>
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
    </>
  );
};

const Complate = ({ data, refetch }) => {
  return (
    <>
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
    </>
  );
};

export { Default, AtoZ, ZtoA, Latest, Longest, Complate };
