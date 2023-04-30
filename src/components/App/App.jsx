import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Container, Phonebook, Contacts, AllСontacts } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useLocalStorage();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === newContact)) {
      return alert(`${name} is already in contacts`);
    }

    setContacts([newContact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm onSubmit={addContact} />

      <Contacts>Contacts</Contacts>
      <AllСontacts>All contacts: {contacts.length}</AllСontacts>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;
