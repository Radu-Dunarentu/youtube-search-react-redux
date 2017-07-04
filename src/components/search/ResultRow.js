/**
 * Created by Radu on 04.07.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import FavoriteButton from '../common/FavoriteButton';

const ResultRow = ({data}) => {

  return (
    <tr>
      <td><img src={data.snippet.thumbnails.default.url} alt=""/></td>
      <td>{data.snippet.title}</td>
      <td>{data.snippet.channelTitle}</td>
      <td>
        <FavoriteButton data={data}/>
        {/*<button type="button" className="btn btn-secondary" onClick={() => setFavorite(data)}>Favorite</button>
        <ul>
          <li>cici</li>
          <li>are</li>
          <li>mere</li>
        </ul>*/}
      </td>
    </tr>
  );
};

ResultRow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResultRow;
