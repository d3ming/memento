var React = require('react');
var MainContainer = require('./MainContainer');

var Home = React.createClass({
    render: function() {
        return (
            <MainContainer>
                <h1>Memento</h1>
                <p className='lead'>Be awesome!</p>
            </MainContainer>
        );
    }
});

module.exports = Home;
