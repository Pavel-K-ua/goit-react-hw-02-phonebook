import React from 'react';
import PropTypes from 'prop-types';

export const AddContacts = ({
  inputChanger,
  inputName,
  inputNumber,
  addContact,
}) => {
  return (
    <form onSubmit={addContact}>
      <h3>Name</h3>
      <input
        onChange={inputChanger}
        value={inputName}
        type="text"
        name="name"
        required
      />
      <input
        onChange={inputChanger}
        value={inputNumber}
        type="tel"
        name="number"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

AddContacts.propTypes = {
  inputChanger: PropTypes.func,
  inputName: PropTypes.string,
  inputNumber: PropTypes.string,
  addContact: PropTypes.func,
};
