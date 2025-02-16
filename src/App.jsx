
import { useEffect, useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {

  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? 
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const [filterContact, setFilterContact] = useState();
  
  const filterChange = (evt) => {
      const find = evt.target.value;
      setFilterContact(find);
  };
 
  const findContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterContact || '')
  );


  const deleteContact = (idToRemove) => {
    setContacts((prevContacts) => 
        prevContacts.filter((contact) => contact.id !== idToRemove)
    );
  };
    

  return (
    <div className='app'>
      <h1 className='app_title'>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox onChange={filterChange} />
        <ContactList dataContacts={findContacts} deleteContact={deleteContact} />
    </div>

  )
}

export default App;
