// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import SearchPage from './search/SearchPage';
import {connect} from 'react-redux';
import FavoritesPage from './favorites/FavoritesPage';
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />

        <Route exact path="/" component={SearchPage}/>
        <Route path="/search" component={SearchPage}/>
        <Route path="/favorites" component={FavoritesPage} />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
