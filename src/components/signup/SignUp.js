var 
  React      = require('react'),
  Home       = require('./../Home'),
  SignUpForm = require('./SignUpForm'),
  $          = require('jquery'),
  _          = require('lodash');

var SignUp = React.createClass({
  render: function() {
    return (
      <div>
        <Home />
        <div id="signup-box">
          <h3>Sign up to save your local resources and get updates on events in your area</h3>
          <SignUpForm/>
        </div>
      </div>
    );
  }
});

module.exports = SignUp;