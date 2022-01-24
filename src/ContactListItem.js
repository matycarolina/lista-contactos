import React from "react";

export const ContactListItem = ({contact, index, handleDelete}) => {
  return(
    <li key={contact.id} className="list-group-item">
    <p
    >
      {index + 1}. {contact.desc} - {contact.num}
    </p>
    <button
      onClick={() => handleDelete(contact.id)}
      className="btn btn-danger"
    >
      Borrar
    </button>
  </li>
  );
};
