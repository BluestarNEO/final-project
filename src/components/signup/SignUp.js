var 
  React      = require('react'),
  Home       = require('./../Home'),
  SignUpForm = require('./SignUpForm');

var SignUp = React.createClass({
  render: function() {
    return (
      <div>
        <Home />
        <div id="signup-box">
          <h1>Sign up to save your local resources and get updates on events in your area</h1>
          <SignUpForm/>
        </div>
      </div>
    );
  }
});

module.exports = SignUp;