import { useState } from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from "react-redux";
import { addContancts, addFilter, deleteContacts } from '../redux/actions';
import Form from './Form/Form';
import Title from "./Form/Title";

import ContactList from "./Form/ContacsList";
import Filter from "./Form/FilterSearch";





export const App = () => {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter)
  
  const [values, setValues] = useState('');

  const dispatch = useDispatch();
  
  const onChangeFilter = (event) => {
    const filterValue = event.target.value
     const action = addFilter({filter: filterValue})
    dispatch(action)

  }
 


 const onChangeInput = (event) => {
   const { name, value} = event.currentTarget;
   setValues((prevValues) => ({
     ...prevValues,
     [name]: value,
   }));
  }


  const onClickSubmit = (event) => {
    event.preventDefault(); 
    const { name } = values;
    const isExist = contacts.findIndex(el => el.name.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());

    if (isExist >= 0) {
      alert(`Contact ${name} already exists!`);
      return;
    }
    
    setValues({
      contacts: [
        ...contacts,
        {
          number: values.number,
          name: values.name,
          id: nanoid(),
        }
      ],
      name: '',
      number: '',
    });
    event.currentTarget.reset()

    
    const action = addContancts(values)
    dispatch(action)
  }

  const onClickDelete = (event) => {
     const selectContact = event.currentTarget.id
  dispatch(deleteContacts(selectContact));
}  
 
  const filteredContacts = contacts.filter(item=> item.name?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    return <div className="App">
     <Title title="Phonebook">
        <Form onChangeInput={onChangeInput}  onClickSubmit={onClickSubmit}/>
      </Title> 
       <Filter onChangeInput={onChangeFilter} /> 
      <ContactList filterContacts={filteredContacts}  onClickDelete={onClickDelete} /> 
    </div>
  }
  
