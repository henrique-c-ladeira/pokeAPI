import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/search-field/search-field.actions'

const SearchField = ({setSearchField}) => {

    const search = (event) =>
        setSearchField(event.target.value.toUpperCase());
    
    return (
    <input 
        onChange={search} 
        placeholder='Search for pokemon'/>
)};


const mapDispatchToProps = dispatch => ({
    setSearchField: searchField => dispatch(setSearchField(searchField))
});

export default connect(
    null, mapDispatchToProps
)(SearchField);

