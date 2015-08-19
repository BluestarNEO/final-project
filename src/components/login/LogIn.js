var 
  React      = require('react'),
  Home       = require('./../Home'),
  LogInForm = require('./LogInForm');

var LogIn = React.createClass({
  render: function() {
    return (
      <div>
        <Home />
        <div id="login-box">
          <h1>Log In to view your local resources and get updates on events in your area</h1>
          <LogInForm/>
        </div>
      </div>
    );
  }
});

module.exports = LogIn;