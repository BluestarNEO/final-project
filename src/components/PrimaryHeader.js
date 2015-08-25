var React = require('react');

var PrimaryHeader = React.createClass({
  checkLogin: function() {
    if(User) {
      var userUrl = '/#/user/' + User.id

      return (
        <a href={userUrl}>Welcome, {User.first_name}!</a>
      );
    } else {
      return (
        <span>
          <a href='/#/signup'>Sign Up</a>
          <a href='/#/login'>Log In</a>
        </span>
      );
    }
  },

  render: function() {
    return (
      <header id="primary-header">
        <div>
            <a href='/#/' id="logo">Phoenix Family Resource</a>
          <nav id="primary-nav">
            {this.checkLogin()}
          </nav>
        </div>
      </header>
    );
  } 
});

module.exports = PrimaryHeader;