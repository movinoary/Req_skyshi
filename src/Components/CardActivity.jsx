import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import * as RiIcons from "react-icons/ri";
import * as Configs from "../Configs";
import * as Components from "../Components";
import * as cssModule from "../Scss";
import * as Sub from "./Sub";

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
      const alert = <Sub.Alert title="activity berhasil dihapus" />;
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

  useEffect(() => {
    if (confirmDelete) {
      setShowModalDelete(prev => !prev);
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

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
        >
          <h3>{item.title}</h3>
        </div>
        <div className={cssModule.Components.cardDate}>
          <p>{dateFormat(item.created_at, "d mmmm yyyy")}</p>
          <span onClick={() => handleDelete(item.id)}>
            <RiIcons.RiDeleteBinLine />
          </span>
        </div>
      </figure>
    </>
  );
};

export default CardActivity;
