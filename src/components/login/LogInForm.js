var React = require('react');

var LogInForm = React.createClass({
  render: function() {
    return (
      <form>
        <div className="form-input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-input">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button>Log In</button>
      </form>
    );
  }
});

module.exports = LogInForm;