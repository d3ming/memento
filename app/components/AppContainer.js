var React = require('react');

var AppContainer = React.createClass({
  render: function() {
    return (<div className="jumbotrol col-sm-12 text-center">
        <h1>Memento - {this.props.location.state.name}!</h1>
    </div>
    );
  }
});

module.exports = AppContainer;
