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
          <h2 className="profile-label">First Name</h2>
          <h2 className="profile-value">{firstName}</h2>
          <h2 className="profile-label">Last Name</h2>
          <h2 className="profile-value">{lastName}</h2>
          <h2 className="profile-label">Email</h2>
          <h2 className="profile-value">{email}</h2>
          <h2 className="profile-label">Password</h2>
          <h2 className="profile-value">{password}</h2>
          <a href={editUrl} id="edit-btn">Edit Info</a>
        </div>
      </div>
    );
  },
});

module.exports = UserProfileLeft;