import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  const activeStyle = { color: 'blue' };
  return (
    <nav>

      <NavLink to="/search" activeStyle={activeStyle}>Search</NavLink>
      {" | "}
      <NavLink to="/favorites" activeStyle={activeStyle}>Favorites</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
