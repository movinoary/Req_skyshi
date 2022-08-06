import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../Scss";
import * as Assets from "../Assets/index";
import * as Configs from "../Configs";
import * as Sub from "../Components/Sub";
import * as Components from "../Components";
import { useQuery } from "react-query";

const DetailActivity = () => {
  const [click, setClick] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const navigate = useNavigate();
  let { id } = useParams();

  let { data } = useQuery("silabusCache", async () => {
    const response = await Configs.API.get("/activity-groups/" + id);
    console.log(response.data);
    return response.data;
  });

  const AddModal = () => {
    setShowModalAdd(prev => !prev);
  };

  const HandleClick = () => setClick(!click);

  return (
    <>
      <Components.ModalAdd
        showModal={showModalAdd}
        setShowModal={setShowModalAdd}
        title="apakah anda yakin menghapus activity"
        subTitle="Nama"
      />
      <section className={cssModule.Page.page}>
        <header className={cssModule.Page.detailActivityTop}>
          <div>
            <button onClick={() => navigate("/")}>
              <MdIcons.MdArrowBackIosNew />
            </button>
            {click ? (
              <form className={cssModule.Page.inputActive}>
                <input type="text" />
              </form>
            ) : (
              <div className={cssModule.Page.inputHide}>
                <h1>{data?.title}</h1>
              </div>
            )}
            <span onClick={HandleClick}>
              <BsIcons.BsPencil />
            </span>
          </div>
          <div onClick={AddModal}>
            <Sub.ButtonAdd />
          </div>
        </header>
        <div className={cssModule.Page.detailActivityBottom}>
          {data?.todo_items.map((item, index) => (
            <Components.CardListItem key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DetailActivity;
