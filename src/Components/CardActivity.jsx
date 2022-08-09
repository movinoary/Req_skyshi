import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import * as RiIcons from "react-icons/ri";
import * as Configs from "../Configs";
import * as Components from "../Components";
import * as cssModule from "../Scss";
import * as SubComponents from "./Sub";

const CardActivity = ({ item, refetch }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const deleteById = useMutation(async id => {
    try {
      await Configs.API.delete(`/activity-groups/${id}`);
      refetch();
      const alert = (
        <SubComponents.Alert
          title="Activity Berhasil Dihapus"
          data-cy="modal-information"
        />
      );
      setMessage(alert);
    } catch (error) {
      console.log(error);
    }
  });

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
        title="apakah anda yakin menghapus activity"
        subTitle={item.title}
      />
      {message && message}
      <figure className={cssModule.Components.cardActivity}>
        <div
          className={cssModule.Components.cardLink}
          onClick={() => navigate(`detail-activity/${item.id}`)}
          data-cy="activity-item"
        >
          <h3 data-cy="activity-item-title">{item.title}</h3>
        </div>
        <div className={cssModule.Components.cardDate}>
          <p data-cy="activity-item-date">
            {dateFormat(item.created_at, "d mmmm yyyy")}
          </p>
          <button onClick={() => handleDelete(item.id)} data-cy="modal-delete">
            <RiIcons.RiDeleteBinLine />
          </button>
        </div>
      </figure>
    </>
  );
};

export default CardActivity;
