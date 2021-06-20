import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../../redux/modules/search-field/search-field.actions';

import './search-field.styles.scss';

const SearchField = () => {
  const dispatch = useDispatch();

  const search = (event) => dispatch(setSearchField(event.target.value.toUpperCase()));

  return (
    <input
      className="searchField"
      onChange={search}
      placeholder="Search for pokemon"
    />
  );
};

export default SearchField;
