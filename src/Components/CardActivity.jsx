import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import * as Components from "../Components";
import * as cssModule from "../Scss";

const CardActivity = () => {
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
      <figure
        className={cssModule.Components.cardActivity}
        // onClick={() => navigate("detail-activity")}
      >
        <Link to="detail-activity" className={cssModule.Components.cardLink}>
          <h3>test</h3>
        </Link>
        <figcaption>
          <p>4 Oktober 2021</p>
          <span onClick={DeleteModal}>
            <RiIcons.RiDeleteBinLine />
          </span>
        </figcaption>
      </figure>
    </>
  );
};

export default CardActivity;
