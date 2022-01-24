import React from "react";
import { ContactListItem } from "./ContactListItem";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {contacts.map((contact, i) => (
         <ContactListItem key={contact.id} contact={contact} index={i} handleDelete={handleDelete}/>
        ))}
      </ul>
    </div>
  );
};
