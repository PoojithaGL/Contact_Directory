import React, { useContext, useState, useEffect } from "react";
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
    handleEdit,
    setContacts
  } = useContext(PhoneContext);
  const [isEdit,setisEdit] = useState(false);
  const[contact,setContact]=useState({});

  useEffect(() => {
    const localStringContacts = localStorage.getItem('CONTACTS') || '[]';
    const localArrayContacts = JSON.parse(localStringContacts);
    setContacts(localArrayContacts);

  },[])

 const onNameChange = (event) =>{
  handleName(event.target.value);
 } 

 const onNumberChange = (event) =>{
  handleNumber(event.target.value)
 }

 const onEdit = (givenIndex) =>{
 const foundContact = contacts.find((__,currentIndex)=>
  currentIndex === givenIndex);
 setContact(foundContact);
 handleName(foundContact.name);
 handleNumber(foundContact.number);
 setisEdit(true);
 }

 const onAdd = () =>{
  handleAdd(isEdit,contact.id);
  setisEdit(false);
 }
 
  return (
    <>
      <div className="ContactsContainer">
      <h3>{isEdit?"UpdateContact":"AddContact"}</h3>
        <div className="AddContacts">
          <label>Contact Name</label>
          <input type="text" value={name} onChange={onNameChange} />

          <label>Contact Number</label>
          <input type="text" value={number} onChange={onNumberChange} />
        </div>
          {/* <input type="checkbox" 
          name="isEdit"
          id ='isEdit'
          defaultValue={isEdit}
          onChange={(event)=> setisEdit(event.target.checked)} />
          <label htmlFor="isEdit">IS EDIT</label>
          <br/> */}
          <button className="AddButton" onClick={onAdd}>
            {isEdit?"update":"Add"}

          </button>
      </div>

      <div className="DetailsContainer">
        {contacts.map((contact, index) => (
          <div key={index}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <div className="Buttons">
            <button
              className="DeleteButton"
              onClick={() => handleDelete(index)} >
              Delete
            </button>
            <br />
            <button className="EditButton" onClick = {() =>onEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Display;
