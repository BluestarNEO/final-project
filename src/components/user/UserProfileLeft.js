var React = require('react');

var UserProfileLeft = React.createClass({
  render: function() {
    if (this.props.user === null) {
      console.log(this.props.user);
    } else {
      var userInfo = this.props.user;
      console.log('user info: ' + userInfo);
      var id = userInfo.id;
      var firstName = userInfo.first_name;
      var lastName = userInfo.last_name;
      var email = userInfo.email;
      var password = userInfo.password;
      var editUrl = '/#/user/' + id + '/edit';
    }

    return(
      <div>
        <div id="profile-info">
          <h2>First Name: {firstName}</h2>
          <h2>Last Name: {lastName}</h2>
          <h2>Email: {email}</h2>
          <h2>Password: {password}</h2>
          <div id="edit-btn">
            <a href={editUrl}>Edit Info</a>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = UserProfileLeft;