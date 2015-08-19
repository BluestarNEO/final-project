var React = require('react');

var PrimaryHeader = React.createClass({
  render: function() {
    return (
      <header id="primary-header">
        <div>
            <a href='/#/' id="logo">Phoenix Family Resource</a>
          <nav id="primary-nav">
            <a href='/#/signup'>Sign Up</a>
            <a href='/#/login'>Log In</a>
          </nav>
        </div>
      </header>
    );
  } 
});

module.exports = PrimaryHeader;