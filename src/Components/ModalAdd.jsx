import React, { useCallback, useEffect, useRef } from "react";
import * as cssModule from "../Scss";

const ModalAdd = ({ showModal, setShowModal }) => {
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

  return (
    <>
      {showModal ? (
        <section
          className={cssModule.Components.modal}
          onClick={closeModal}
          ref={modalRef}
        >
          <figure className={cssModule.Components.modalAdd}>
            <div className={cssModule.Components.modalTitle}>
              <h3>tambah list item</h3>
              <p onClick={() => setShowModal(false)}>X</p>
            </div>
            <form className={cssModule.Components.modalForm}>
              <div>
                <label>nama list item</label>
                <input type="text" placeholder="Tambah nama list item" />
              </div>
              <div>
                <label>priority</label>
                <select>
                  <option hidden>
                    <div /> pilih priority
                  </option>
                  <option>
                    <div /> very high
                  </option>
                  <option>
                    <div /> high
                  </option>
                  <option>
                    <div /> medium
                  </option>
                  <option>
                    <div /> low
                  </option>
                  <option>
                    <div /> very low
                  </option>
                </select>
              </div>
              <div>
                <button>simpan</button>
              </div>
            </form>
          </figure>
        </section>
      ) : null}
    </>
  );
};

export default ModalAdd;
