import { useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Searchbox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import { initialContacts } from '../../data/contacts';

import css from '../App/App.module.css'



function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <Searchbox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
