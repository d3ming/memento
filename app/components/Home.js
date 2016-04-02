var React = require('react');
var MainContainer = require('./MainContainer');
var FacebookLogin = require('react-facebook-login');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      'userToken': '',
      'name': '',
      'id': '',
    }
  },
  responseFacebook: function(response) {
    console.log('FB login response: ', response);
    var id = response.id;
    console.log('FB login id: ', id);
    if (!!id) {
      this.setState({
        'userToken': response.accessToken,
        'userId': response.id,
        'name': response.name,
      });
      this.context.router.push({
        pathname: '/app/',
        state: {
          userId: this.state.userId,
          name: this.state.name,
          userToken: this.state.userToken
        }
      });
    } else {
      console.log('FB login failed!');
    }
  },
  render: function() {
    return (
      <MainContainer>
          <h1>Memento</h1>
          <p className='lead'>Be awesome!</p>
          <FacebookLogin
            appId="214968165526017"
            autoLoad={true}
            icon="fa-facebook"
            textButton='Login'
            size='small'
            cookie={true}
            callback={this.responseFacebook} />
      </MainContainer>
    );
  }
});

module.exports = Home;
