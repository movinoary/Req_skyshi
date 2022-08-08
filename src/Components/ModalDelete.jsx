import React, { useCallback, useEffect, useRef } from "react";
import * as cssModule from "../Scss";
import * as Assets from "../Assets/index";

const ModalDelete = ({
  showModal,
  setShowModal,
  setConfirmDelete,
  title,
  subTitle,
}) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  return (
    <>
      {showModal ? (
        <section
          className={cssModule.Components.modal}
          onClick={closeModal}
          ref={modalRef}
          data-cy="modal-delete-cancel-button"
        >
          <div className={cssModule.Components.modalDelete}>
            <div>
              <img src={Assets.DangerBig} alt="danger" />
            </div>
            <div>
              <p>{title}</p>
              <h3>"{subTitle}"</h3>
            </div>
            <div>
              <button
                onClick={() => setShowModal(false)}
                data-cy="modal-delete-cancel-button"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                data-cy="activity-item-delete-button"
              >
                hapus
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ModalDelete;
