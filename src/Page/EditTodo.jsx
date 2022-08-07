import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as Configs from "../Configs";
import * as cssModule from "../Scss";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    priority: "",
  });

  useQuery("todoCache", async () => {
    const response = await Configs.API.get(`/todo-items/` + id);
    console.log(response.data);
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

      await Configs.API.patch("/todo-items/" + id, body, config);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <section className={cssModule.Components.modal}>
        <figure className={cssModule.Components.modalAdd}>
          <div className={cssModule.Components.modalTitle}>
            <h3>tambah list item</h3>
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
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option hidden>priority</option>
                  <option value="very-high">very High</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
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
    </>
  );
};

export default EditTodo;
