var React = require('react');
var MainContainer = require('./MainContainer');
var FacebookLogin = require('react-facebook-login');

var LoginOrWelcome = function(props) {
  return props.name !== ''
    ? <div col-sm-8 text-center>
        <h2>Welcome {props.name}!</h2>
      </div>
    : <FacebookLogin
            appId="214968165526017"
            autoLoad={true}
            icon="fa-facebook"
            textButton='Login'
            size='small'
            cookie={true}
            callback={props.callback} />
}

var Home = React.createClass({
  getInitialState: function() {
    return {
      'userToken': '',
      'name': '',
      'id': ''
    }
  },
  testApi: function() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log('Login ME response: ' + response)
    });
  },
  responseFacebook: function(response) {
    console.log('FB login response: ', response);
    var id = response.id;
    console.log('FB login id: ', id);
    if (!!id) {
      this.setState({
        'userToken': response.accessToken,
        'userId': response.id,
        'name': response.name
      });
      this.testApi();
    } else {
      console.log('FB login failed!');
    }
  },
  render: function() {
    return (
      <MainContainer>
          <h1>Memento</h1>
          <p className='lead'>Be awesome!</p>
          <LoginOrWelcome name={this.state.name}
            callback={this.responseFacebook} />
          }
      </MainContainer>
    );
  }
});

module.exports = Home;
