var
  React      = require('react'),
  Router     = require('react-router'),
  Navigation = Router.Navigation,
  $          = require('jquery'),
  _          = require('lodash');

var EditForm = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      user: null
    };
  },

  componentDidMount: function() {
    var id = Number(this.props.userId);

    $.get('http://localhost:3000/users', function(results) {
      if (this.isMounted()) {
        var user = _.find(results, {"id": id});
        this.setState({
          user: user
        })
      }
    }.bind(this))      
  },

  render: function() {
    if (this.state.user === null) {
      console.log(this.state.user)
    } else {
      var userInfo = this.state.user;
      var firstName = userInfo.first_name;
      var lastName = userInfo.last_name;
      var email = userInfo.email;
      var password = userInfo.password;
    }

    return (
      <form>
        <div className="form-label">
          <label>First Name: </label>
        </div>
        <div className="form-input">
          <input type="text" name="first_name" placeholder={firstName} />
        </div>
        <div className="form-label">
          <label>Last Name: </label>
        </div>
        <div className="form-input">
          <input type="text" name="last_name"  placeholder={lastName} />
        </div>
        <div className="form-label">
          <label>Email: </label>
        </div>
        <div className="form-input">
          <input type="email" name="email" placeholder={email} />
        </div>
        <div className="form-label">
          <label>Password: </label>
        </div>
        <div className="form-input">
          <input type="password" name="password" placeholder={password} />
        </div>
        <button onClick={this.handleSubmit}>Save</button>
        <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var id = this.props.userId;
    var _this = this;
    var editFields = $('form').serializeArray();
    var user = {};
    _.forEach(editFields, function(editField) {
      user[editField.name] = editField.value;
    });

    if(user.first_name === '') {
      user.first_name = User.first_name;
    }

    if(user.last_name === '') {
      user.lase_name = User.last_name;
    }

    if(user.email === '') {
      user.email = User.email;
    }

    if(user.password === '') {
      user.password = User.password;
    }

    user.user_level = {
      admin: false,
      user: true
    };
    user.saved_resources = [];

    $.ajax({
      url: 'http://localhost:3000/users/' + this.state.user.id,
      method: 'PUT',
      data: user
    }).done(function(data) {
      var userProfile = '/user/' + data.id;
      _this.transitionTo(userProfile);
    });  
  },

  handleCancel: function(e) {
    e.preventDefault();

    var userProfile = '/user/' + this.state.user.id;

    this.transitionTo(userProfile);
  }

});

module.exports = EditForm;