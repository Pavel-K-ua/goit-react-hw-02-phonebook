import React from 'react';
import PropTypes from 'prop-types';

// import {} from ""

export const FilterContacts = ({ takeData, filterValue }) => {
  return (
    <form action="">
      <input onChange={takeData} value={filterValue} type="text" />
    </form>
  );
};

FilterContacts.propTypes = {
  takeData: PropTypes.func,
  filterValue: PropTypes.string,
};
