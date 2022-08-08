import React, { useCallback, useEffect, useRef, useState } from "react";
import { useQuery, useMutation } from "react-query";
import * as Configs from "../Configs";
import * as cssModule from "../Scss";

const ModalEdit = ({ showModal, setShowModal, dataId, refetch }) => {
  const [form, setForm] = useState({
    title: "",
    priority: "",
  });
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

  useQuery("todoCache", async () => {
    const response = await Configs.API.get(`/todo-items/` + dataId);
    setForm({
      title: response.data.title,
      priority: response.data.priority,
    });
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const body = JSON.stringify(form);

      const config = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
      };

      await Configs.API.patch("/todo-items/" + dataId, body, config);
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
          data-cy="components-modal-edit"
        >
          <figure className={cssModule.Components.modalAdd}>
            <div className={cssModule.Components.modalTitle}>
              <h3>tambah list item</h3>

              <p onClick={() => setShowModal(false)}>X</p>
            </div>
            <form
              className={cssModule.Components.modalForm}
              onSubmit={e => handleSubmit.mutate(e)}
            >
              <div className={cssModule.Components.formInput}>
                <label htmlFor="title">nama list item</label>
                <input
                  type="text"
                  placeholder="Tambah nama list item"
                  id="title"
                  name="title"
                  required
                  value={form.title}
                  onChange={handleChange}
                />
              </div>
              <div className={cssModule.Components.formSelect}>
                <label>priority</label>
                <div className={cssModule.Components.widthSelect}>
                  <select
                    name="priority"
                    id="priority"
                    required
                    value={form.priority}
                    onChange={handleChange}
                  >
                    <option hidden>priority</option>
                    <option value="very-high">very High</option>
                    <option value="high">High</option>
                    <option value="normal">Medium</option>
                    <option value="low">Low</option>
                    <option value="very-low">Very Low</option>
                  </select>
                </div>
              </div>
              <div className={cssModule.Components.formButton}>
                <button>simpan</button>
              </div>
            </form>
          </figure>
        </section>
      ) : null}
    </>
  );
};

export default ModalEdit;
