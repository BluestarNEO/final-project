var
  React      = require('react'),
  Router     = require('react-router'),
  Navigation = Router.Navigation,
  $          = require('jquery'),
  _          = require('lodash');

var LogInForm = React.createClass({
  mixins: [Navigation],
  
  render: function() {
    return (
      <form>
        <div className="form-input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-input">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button onClick={this.handleClick}>Log In</button>
      </form>
    );
  },

  handleClick: function(e) {
    e.preventDefault();

    var _this = this;
    var loginFields = $('form').serializeArray();
    var loginUser = {};
    _.forEach(loginFields, function(loginField) {
      loginUser[loginField.name] = loginField.value;
    });

    $.get('http://localhost:3000/users')
      .done(function(users) {
        User = _.find(users, loginUser);
        console.log(User);
        _this.transitionTo('/');
      });
  }
});

module.exports = LogInForm;