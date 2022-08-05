import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as cssModule from "../Scss";
import * as Components from "../Components";

const CardListItem = () => {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  return (
    <>
      <Components.ModalDelete
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        title="apakah anda yakin menghapus list item"
        subTitle="Nama"
      />
      <figure className={cssModule.Components.cardListItem}>
        <figurecaption>
          <input type="checkbox" />
          <p>Telur Ayam</p>
          <span>
            <BsIcons.BsPencil />
          </span>
        </figurecaption>
        <div onClick={DeleteModal}>
          <span>
            <RiIcons.RiDeleteBinLine />
          </span>
        </div>
      </figure>
    </>
  );
};

export default CardListItem;
