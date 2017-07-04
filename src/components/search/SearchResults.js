/**
 * Created by Radu on 25.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ResultRow from './ResultRow';

const SearchResults = ({results}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Channel Title</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {results.map(result => <ResultRow key={result.etag} data={result} /> )}
      </tbody>
    </table>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
