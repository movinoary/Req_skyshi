import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as Components from "../Components";
import * as cssModule from "../Scss";

const CardActivity = ({ item }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const navigate = useNavigate();

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  return (
    <>
      <Components.ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        title="apakah anda yakin menghapus activity"
        subTitle="Nama"
      />
      <figure className={cssModule.Components.cardActivity}>
        <div
          className={cssModule.Components.cardLink}
          onClick={() => navigate(`detail-activity/${item.id}`)}
        >
          <h3>{item.title}</h3>
        </div>
        <div className={cssModule.Components.cardDate}>
          <p>{item.created_at}</p>
          <span onClick={DeleteModal}>
            <RiIcons.RiDeleteBinLine />
          </span>
        </div>
      </figure>
    </>
  );
};

export default CardActivity;
