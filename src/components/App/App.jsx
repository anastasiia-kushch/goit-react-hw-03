import { useEffect, useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Searchbox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import { initialContacts } from '../../data/contacts';

import css from '../App/App.module.css';

const getInitialContacts = () => {
  const savedContacts = window.localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : initialContacts;
};

function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
