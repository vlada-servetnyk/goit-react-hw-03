
import { useState } from 'react';
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

function App() {

  const [contacts, setConacts] = useState(
    [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
  );
  const [filterContact, setFilterContact] = useState();
  
  const filterChange = (evt) => {
      const find = evt.target.value;
      setFilterContact(find);
  };
 
  const findContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterContact)
  );
  setConacts(findContacts);
  

  // if (filterContact) {
  //   const findContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filterContact)
  //   );
  //   return setConacts(findContacts);
  // }

  // const findContacts = contacts.filter(item =>
  //   item.name.toLowerCase().includes(filterContact)
  // );
  // setConacts(findContacts);

  // setConacts(
  //   contacts.filter(item =>
  //     item.name.toLowerCase().includes(filterContact)
  //   ));


  return (
    <div className='app'>
      <h1 className='app_title'>Phonebook</h1>
        <ContactForm />
        <SearchBox onChange={filterChange} />
        <ContactList dataContacts={contacts} />
    </div>

  )
}

export default App
