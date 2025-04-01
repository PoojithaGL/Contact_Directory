import React, { useContext } from "react";
import "./Display.css";
import PhoneContext from "./PhoneContext";

const Display = () => {
  const {
    contacts,
    name,
    number,
    handleName,
    handleNumber,
    handleAdd,
    handleDelete,
  } = useContext(PhoneContext);

  return (
    <>
      <div className="ContactsContainer">
        <div className="AddContacts">
          <label>Contact Name</label>
          <input type="text" value={name} onChange={handleName} />

          <label>Contact Number</label>
          <input type="text" value={number} onChange={handleNumber} />
        </div>
        <button className="AddButton" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="DetailsContainer">
        {contacts.map((contact, index) => (
          <div key={index}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button
              className="DeleteButton"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <br />
            <button className="EditButton">Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
