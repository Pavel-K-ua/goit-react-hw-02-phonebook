import React from 'react';
import { AddContacts } from './AddContacts/AddContacts';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';
// import { Statistics, Notification } from './Statistics/Statistics.jsx';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddContact = e => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    const contactsNames = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    console.log(contactsNames);
    if (contactsNames.includes(contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, contact],
        name: '',
        number: '',
      }));
    }
  };

  handleChancheFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContactsArr = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = this.filteredContactsArr();
    return (
      <>
        <h1>Phonebook</h1>
        <AddContacts
          addContact={this.handleAddContact}
          inputChanger={this.handleChangeInput}
          // inputNumberChanger={this.handleChangeNumberInput}
          inputName={name}
          inputNumber={number}
          // onSubmit={this.onSubmit}
        />
        <h2>Contacts</h2>
        <FilterContacts
          takeData={this.handleChancheFilter}
          filterValue={filter}
        />

        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
