/**
 * Created by Radu on 25.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const SearchBar = ({searchTerm, onChange}) => {
  return (
    <form>
        <TextInput
          name="search"
          label="Search"
          value={searchTerm}
          onChange={onChange}/>
    </form>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
