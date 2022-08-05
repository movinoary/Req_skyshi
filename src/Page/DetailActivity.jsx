import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../Scss";
import * as Assets from "../Assets/index";
import * as Sub from "../Components/Sub";
import * as Components from "../Components";

const DetailActivity = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [showModalAdd, setShowModalAdd] = useState(false);

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
                <h1>new activity</h1>
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
        <content className={cssModule.Page.detailActivityBottom}>
          <Components.CardListItem />
        </content>
      </section>
    </>
  );
};

export default DetailActivity;
