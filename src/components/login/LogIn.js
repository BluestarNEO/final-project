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
          <div>
            <h3>Log In to view your local resources and get updates on events in your area</h3>
          </div>
          <LogInForm/>
        </div>
      </div>
    );
  }
});

module.exports = LogIn;