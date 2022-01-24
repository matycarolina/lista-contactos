import React, { useReducer, useEffect } from "react";
import "./styles.css";
import { ContactAdd } from "./ContactAdd";
import { ContactList } from "./ContactList";
import { contactReducer } from "./contactReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("contacts")) || [];
};

export const ContactsApp = () => {
  const [contacts, dispatch] = useReducer(contactReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts)); // hace que la informacion sea persistente y no se borre al refrescar la pagina
  }, [contacts]);

  const handleDelete = (contactId) => {
    const action = {
      type: "delete",
      payload: contactId,
    };
    dispatch(action);
  };

  const handleAddContact = (newContact) => {
    dispatch({
      type: "add",
      payload: newContact,
    });
  };

  return (
    <div className="row">
      <h1>ContactsApp ({contacts.length})</h1>
      <hr />
      <div className="col-7">
        <ContactList
          contacts={contacts}
          handleDelete={handleDelete}
        />
      </div>
      <div className="col-5">
        <ContactAdd handleAddContact={handleAddContact} />
      </div>
    </div>
  );
};
