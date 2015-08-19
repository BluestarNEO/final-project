var React = require('react');

var SignUpForm = React.createClass({
  render: function() {
    return (
      <form>
        <div className="form-input">
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="form-input">
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="form-input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-input">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
});

module.exports = SignUpForm;