/**
 * Created by Radu on 25.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as searchActions from '../../actions/searchActions';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import toastr from 'toastr';

let debounce;

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchTerm: ''
    };

    this.searchVideo = this.searchVideo.bind(this);
    this.updateSearchState = this.updateSearchState.bind(this);
  }

  searchVideo() {

    this.props.actions.searchVideos(this.state.searchTerm)
      .then((data) => {
        this.props.actions.loadSearchResults(data.items);
        this.setState({searching: false});
      })
      .catch(error => {
        toastr.error(error);
        this.setState({searching: false});
      });
  }

  updateSearchState(event) {
    if (debounce) {
      clearTimeout(debounce);
    }
    this.setState({searchTerm: event.target.value});
    debounce = setTimeout(this.searchVideo, 1500);
  }

  render() {
    return (
      <div>
        <h1>Search stuff</h1>
        <SearchBar
          searchTerm={this.state.searchTerm}
          onChange={this.updateSearchState}
        />
        {this.props.searchResults.length > 0 &&
          <SearchResults
          results={this.props.searchResults}
          />}
      </div>
    );
  }
}

SearchPage.propTypes = {
  actions: PropTypes.object.isRequired,
  searchResults: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    searchResults: state.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
