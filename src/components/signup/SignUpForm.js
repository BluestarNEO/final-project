var
  React      = require('react'),
  Router     = require('react-router'),
  Navigation = Router.Navigation,
  $          = require('jquery'),
  _          = require('lodash');

var SignUpForm = React.createClass({
  mixins: [Navigation],

  render: function() {
    return (
      <form>
        <div className="form-input">
          <input type="text" name="first_name" placeholder="First Name" />
        </div>
        <div className="form-input">
          <input type="text" name="last_name" placeholder="Last Name" />
        </div>
        <div className="form-input">
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-input">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var _this = this;
    var signupFields = $('form').serializeArray();
    var user = {};
    _.forEach(signupFields, function(signupField) {
      user[signupField.name] = signupField.value;
    });

    user.user_level = {
      admin: false,
      user: true
    };
    user.saved_resources = [];

    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: user
    }).done(function(data) {
      User = data;
      var userProfile = '/user/' + data.id;
      _this.transitionTo(userProfile);
    });  
  }
});

module.exports = SignUpForm;