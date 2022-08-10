import React, { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as cssModule from "../Scss";
import * as Configs from "../Configs";
import * as Components from "../Components";
import * as SubComponents from "../Components/Sub";

const DetailActivity = () => {
  const [click, setClick] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
  });

  const AddModal = () => {
    setShowModalAdd(prev => !prev);
  };

  const HandleClick = () => setClick(!click);

  const HandleOnClick = () => setShowMenu(!showMenu);

  const { isLoading, data, refetch } = useQuery(
    "activityTodoCache",
    async () => {
      const response = await Configs.API.get("/activity-groups/" + id);
      setForm({
        title: response.data.title,
      });
      return response.data;
    }
  );

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      await Configs.API.patch("/activity-groups/" + id, body, config);
      refetch();
      HandleClick();
    } catch (error) {
      console.log(error);
    }
  });

  if (isLoading) {
    return <SubComponents.Loading />;
  }

  return (
    <>
      <Components.ModalAdd
        showModal={showModalAdd}
        setShowModal={setShowModalAdd}
        dataId={id}
        refetch={refetch}
      />
      <section className={cssModule.Page.page}>
        <header className={cssModule.Page.detailActivityTop}>
          <div>
            <button onClick={() => navigate("/")}>
              <MdIcons.MdArrowBackIosNew />
            </button>
            {click ? (
              <form
                className={cssModule.Page.inputActive}
                onSubmit={e => handleSubmit.mutate(e)}
                data-cy="todo-title"
              >
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={form.title}
                />
                <button>
                  <BsIcons.BsPencil />
                </button>
              </form>
            ) : (
              <div className={cssModule.Page.inputHide}>
                <h1 onClick={HandleClick} data-cy="todo-title">
                  {data?.title}
                </h1>
                <button onClick={HandleClick}>
                  <BsIcons.BsPencil />
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={HandleOnClick}
              className={cssModule.Page.buttonFilter}
            >
              <BsIcons.BsArrowDownUp />
            </button>
            {showMenu ? (
              <ul className={cssModule.Page.dropdown}>
                <li onClick={() => navigate("terbaru")}>
                  <span>
                    <RiIcons.RiSortDesc />
                  </span>
                  <p>Terbaru</p>
                </li>
                <li
                  onClick={() => navigate("terlama")}
                  data-cy="sort-selection"
                >
                  <span>
                    <RiIcons.RiSortAsc />
                  </span>
                  <p>Terlama</p>
                </li>
                <li
                  onClick={() => navigate("a-to-z")}
                  data-cy="todo-sort-button"
                >
                  <span>
                    <BsIcons.BsSortAlphaDown />
                  </span>
                  <p>A - Z</p>
                </li>
                <li onClick={() => navigate("z-to-a")}>
                  <span>
                    <BsIcons.BsSortAlphaDownAlt />
                  </span>
                  <p>Z - A</p>
                </li>
                <li onClick={() => navigate("belum-selesai")}>
                  <span>
                    <BsIcons.BsArrowDownUp />
                  </span>
                  <p>Belum Selesai</p>
                </li>
              </ul>
            ) : null}
            <button
              className={cssModule.Components.buttonAdd}
              onClick={AddModal}
              data-cy="todo-add-button"
            >
              + Tambah
            </button>
          </div>
        </header>
        <div
          className={cssModule.Page.detailActivityBottom}
          data-cy="todo-item"
        >
          <Routes>
            <Route
              path="/"
              element={<Configs.Default data={data} refetch={refetch} />}
            />
            <Route
              path="terbaru"
              element={<Configs.Latest data={data} refetch={refetch} />}
            />
            <Route
              path="terlama"
              element={<Configs.Longest data={data} refetch={refetch} />}
            />
            <Route
              path="a-to-z"
              element={<Configs.AtoZ data={data} refetch={refetch} />}
            />
            <Route
              path="z-to-a"
              element={<Configs.ZtoA data={data} refetch={refetch} />}
            />
            <Route
              path="belum-selesai"
              element={<Configs.Complate data={data} refetch={refetch} />}
            />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default DetailActivity;
