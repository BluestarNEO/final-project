var 
  React       = require('react'),
  Router      = require('react-router'),
  UserProfile = require('./../UserProfile'),
  EditForm    = require('./EditForm'),
  $           = require('jquery'),
  _           = require('lodash');

var EditUserProfile = React.createClass({
  mixins: [Router.state],

  render: function() {
    var id = this.props.params.id;
    console.log('id: ' + id);

    return (
      <div>
        <UserProfile userId={id} />
        <div id="edit-box">
          <h3>Edit your info. Be sure to verify that it is correct before saving!</h3>
          <EditForm userId={id} />
        </div>
      </div>
    );
  }
});

module.exports = EditUserProfile;