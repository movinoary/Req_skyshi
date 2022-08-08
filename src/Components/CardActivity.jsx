import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
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

  const deleteById = useMutation(async id => {
    try {
      await Configs.API.delete(`/activity-groups/${id}`);
      refetch();
      const alert = <SubComponents.Alert title="activity berhasil dihapus" />;
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
        data-cy="modal-delete"
      />
      {message && message}
      <figure
        className={cssModule.Components.cardActivity}
        data-cy="components-card-activity"
      >
        <Link
          className={cssModule.Components.cardLink}
          to={`detail-activity/${item.id}`}
        >
          <h3 data-cy="activity-item-title">{item.title}</h3>
        </Link>
        <div className={cssModule.Components.cardDate}>
          <p data-cy="activity-item-date">
            {dateFormat(item.created_at, "d mmmm yyyy")}
          </p>
          <span onClick={() => handleDelete(item.id)}>
            <RiIcons.RiDeleteBinLine data-cy="activity-item-delete-button" />
          </span>
        </div>
      </figure>
    </>
  );
};

export default CardActivity;
