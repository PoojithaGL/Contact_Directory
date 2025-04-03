import React, { createContext, useState } from "react";

const PhoneContext = createContext();

export const PhoneProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleName = (name) => {
    setName(name);
  };

  const handleNumber = (number) => {
    setNumber(number);
  };

  const handleAdd = (isEdit, contactId) => {
    if (name && number) {
      if (number.length !== 10) {
        return;
      }
      let newContacts = [];
      if (isEdit) {
        const otherContacts = contacts.filter(({ id }) => contactId !== id);
        newContacts = [
          ...otherContacts,
          { name, number, id: otherContacts.length + 1 },
        ]
      } else {
        newContacts = [...contacts, { name, number, id: contacts.length + 1 }];
      }
      setContacts(newContacts);
      localStorage.setItem('CONTACTS', JSON.stringify(newContacts));
      setName("");
      setNumber("");
    }
  };

  const handleDelete = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  const handleEdit = () => {};
  return (
    <PhoneContext.Provider
      value={{
        name,
        number,
        contacts,
        handleName,
        handleNumber,
        handleAdd,
        handleDelete,
        handleEdit,
        setContacts,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContext;
