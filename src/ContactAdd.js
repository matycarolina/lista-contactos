import React from "react";
import { useForm } from "./hooks/useForm";

export const ContactAdd = ({ handleAddContact }) => {
  const [{ description, number }, handleInputChange, reset] = useForm({
    description: "",
    number:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1 || number.trim().length <= 1) {
      return;
    }

    const newContact = {
      id: new Date().getTime(),
      desc: description,
      num: number,
      done: false,
    };
    handleAddContact(newContact);
    reset();
  };

  return (
    <>
      <h4>Agregar Contacto</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="number"
          className="form-control mt-2"
          placeholder="Numero"
          autoComplete="off"
          value={number}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-2 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
