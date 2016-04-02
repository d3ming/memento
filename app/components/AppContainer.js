var React = require('react');

var AppContainer = React.createClass({
  getInitialState: function() {
    var query = this.props.location.query,
        locState = this.props.location.state;

    if (query) {
      // query param test hooks for userId and name
      return {
        name: query.name,
        userToken: query.userToken,
        userId: query.userId
      }
    }

    return {
        // Get data from state if possible
        userId: !!locState.userId ? locState.userId : '',
        name: !!locState.name ? locState.name : '',
        userToken: !!locState.userToken ? locState.userToken : ''
      }
  },
  render: function() {
    return (<div className="jumbotrol col-sm-12 text-center">
        <h1>Memento - {this.state.name}!</h1>
    </div>
    );
  }
});

module.exports = AppContainer;
