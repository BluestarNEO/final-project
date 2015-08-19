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
      </form>
    );
  }
});

module.exports = LogInForm;