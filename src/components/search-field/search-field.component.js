import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchField } from '../../redux/modules/search-field/search-field.actions';

import { Input } from './search-field.styled';

const SearchField = () => {
  const dispatch = useDispatch();

  const search = (event) => dispatch(setSearchField(event.target.value.toUpperCase()));

  return (
    <Input
      onChange={search}
      placeholder="Search for pokemon"
    />
  );
};

export default SearchField;
