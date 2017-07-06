import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as favoriteAction from '../../actions/favoriteAction';
import { bindActionCreators } from 'redux';

class FavoriteButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      dropdown: true
    };

    this.setFavorite = this.setFavorite.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);

  }

  setFavorite(result) {
    let data = {id: result.id.videoId, title: result.snippet.title};
    this.props.actions.addToFavorite(data);
  }

  toggleDropdown() {
    this.setState({dropdown: !this.state.dropdown});
  }

  render() {
    return (
      <div>
        {/*<button type="button" className="btn btn-secondary" onClick={() => this.setFavorite(this.props.data)}>Favorite</button>*/}
        <button type="button" className="btn btn-secondary" onClick={this.toggleDropdown}>Favorite</button>
        {this.state.dropdown &&
        <div className="rd-dropdown">
          <div className="rd-dropdown-item"><span className="rd-dropdown-item-label">ana</span><input type="checkbox"/></div>
          <div className="rd-dropdown-item"><span className="rd-dropdown-item-label">ana</span><input type="checkbox"/></div>
          <div className="rd-dropdown-item"><span className="rd-dropdown-item-label">ana</span><input type="checkbox"/></div>
        </div>

        }
      </div>
    );
  }
}

FavoriteButton.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return state;
  //console.log('state from favorite', ownProps);
  /*return {
  };*/
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(favoriteAction, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteButton));
