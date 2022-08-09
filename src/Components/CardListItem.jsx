import React, { useState } from "react";
import { useMutation } from "react-query";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as Configs from "../Configs";
import * as cssModule from "../Scss";
import * as Components from "../Components";
import * as SubComponents from "./Sub";

const CardListItem = ({ item, refetch }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [complete, setComplate] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [message, setMessage] = useState(null);

  const HandleClick = () => setComplate(!complete);

  const deleteById = useMutation(async id => {
    try {
      await Configs.API.delete(`/todo-items/${id}`);
      refetch();
      const alert = (
        <SubComponents.Alert
          title="Todo List Berhasil Dihapus"
          data-cy="modal-information"
        />
      );
      setMessage(alert);
    } catch (error) {
      console.log(error);
    }
  });

  const EditModal = () => {
    setShowModalEdit(prev => !prev);
  };

  const DeleteModal = () => {
    setShowModalDelete(prev => !prev);
  };

  const handleDelete = id => {
    setIdDelete(id);
    DeleteModal();
  };

  if (confirmDelete) {
    setShowModalDelete(prev => !prev);
    deleteById.mutate(idDelete);
    setConfirmDelete(null);
  }

  return (
    <>
      <Components.ModalDelete
        setConfirmDelete={setConfirmDelete}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        title="apakah anda yakin menghapus list item"
        subTitle={item.title}
      />
      <Components.ModalEdit
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
        refetch={refetch}
        dataId={item.id}
        title="apakah anda yakin menghapus activity"
        subTitle="Nama"
      />
      {message && message}
      <figure className={cssModule.Components.cardListItem}>
        <div>
          {complete ? (
            <div className={cssModule.Components.complate}>
              <button onClick={HandleClick}>V</button>
              <div className={`circle color-${item.priority}`} />
              <h3 data-cy="todo-item-title">{item.title}</h3>
              <span onClick={() => EditModal(item.id)}>
                <BsIcons.BsPencil />
              </span>
            </div>
          ) : (
            <div className={cssModule.Components.noComplate}>
              <button onClick={HandleClick}></button>
              <div className={`circle color-${item.priority}`} />
              <h3>{item.title}</h3>
              <span onClick={() => EditModal(item.id)}>
                <BsIcons.BsPencil />
              </span>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleDelete(item.id)}
            data-cy="todo-item-delete-button"
          >
            <RiIcons.RiDeleteBinLine />
          </button>
        </div>
      </figure>
    </>
  );
};

export default CardListItem;
