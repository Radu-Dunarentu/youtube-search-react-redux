/**
 * Created by Radu on 25.06.2017.
 */
import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as favoriteAction from "../../actions/favoriteAction";
import toastr from "toastr";

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Favorites</h1>
        <hr />
        {this.props.favorites.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.favorites.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() =>
                        this.props.actions.removeFromFavorite(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

SearchPage.propTypes = {
  actions: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(favoriteAction, dispatch)
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);
