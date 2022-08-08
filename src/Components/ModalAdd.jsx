import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import * as Configs from "../Configs";
import * as cssModule from "../Scss";

const ModalAdd = ({ showModal, setShowModal, dataId, refetch }) => {
  const [form, setForm] = useState({
    activity_group_id: dataId,
    title: "",
    priority: "",
  });
  const modalRef = useRef();

  const { title, priority } = form;

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

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(form);

      await Configs.API.post("/todo-items", body, config);
      refetch();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {showModal ? (
        <section
          className={cssModule.Components.modal}
          onClick={closeModal}
          ref={modalRef}
          data-cy="components-modal-add"
        >
          <figure className={cssModule.Components.modalAdd}>
            <div className={cssModule.Components.modalTitle}>
              <h3>tambah list item</h3>

              <p onClick={() => setShowModal(false)}>X</p>
            </div>
            <form
              className={cssModule.Components.modalForm}
              onSubmit={e => handleOnSubmit.mutate(e)}
            >
              <div
                className={cssModule.Components.formInput}
                data-cy="modal-add-name-input"
              >
                <label htmlFor="title">nama list item</label>
                <input
                  type="text"
                  placeholder="Tambah nama list item"
                  id="title"
                  required
                  name="title"
                  value={title}
                  onChange={handleOnChange}
                  data-cy="todo-add-button"
                />
              </div>
              <div className={cssModule.Components.formSelect}>
                <label>priority</label>
                <div
                  className={cssModule.Components.widthSelect}
                  data-cy="modal-add-priority-dropdown"
                >
                  <select
                    name="priority"
                    id="priority"
                    required
                    value={priority}
                    onChange={handleOnChange}
                  >
                    <option hidden>priority</option>
                    <option value="very-high">Very High</option>
                    <option value="high" data-cy="modal-add-priority-dropdown">
                      High
                    </option>
                    <option value="normal">Medium</option>
                    <option value="low" data-cy="modal-add-save-button">
                      Low
                    </option>
                    <option value="very-low">Very Low</option>
                  </select>
                </div>
              </div>
              <div
                className={cssModule.Components.formButton}
                data-cy="modal-add-save-button"
              >
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
