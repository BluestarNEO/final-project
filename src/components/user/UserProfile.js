var 
  React            = require('react'),
  UserProfileLeft  = require('./UserProfileLeft'),
  UserProfileRight = require('./UserProfileRight'),
  $                = require('jquery'),
  _                = require('lodash');


UserProfile = React.createClass({
  getInitialState: function() {
    return {
      user: null
    };
  },

  componentDidMount: function() {
    if (this.props.userId) {
      var id  = Number(this.props.userId);
    } else {
      var id = Number(this.props.params.id);
    }

    $.get('http://localhost:3000/users', function(results) {
      if (this.isMounted()) {
        var user = _.find(results, {"id": id});
        console.log('user!: ' + user);
        this.setState({
          user: user
        })
      }
    }.bind(this))      
  },

  render: function() {
    if (this.props.userId) {
      var id = this.props.userId;
      console.log('UserId: ' + this.state.user)
    } else {
      var id = this.props.params.id;
      console.log('Params: ' + this.state.user)
    }

    return (
      <div>
        <div id="user-profile">
          <div>
            <h1 className="section-name">USER PROFILE</h1>
            <hr />
            <UserProfileLeft userId={id} user={this.state.user} id="user-info" />
            <UserProfileRight />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;