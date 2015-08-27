var
  React = require('react'),
  $     = require('jquery'),
  _     = require('lodash');


var UserProfileRight = React.createClass({

  render: function() {
    var resourceId;
    var resourceName;
    var resourceSite;
    var resourceAddress;
    var resourcePhone;
    var resourceServices;

    if (this.props.user === null) {
      console.log(this.props.user);
    } else {
      var userInfo = this.props.user;
      var _handleClick = this.handleClick;
      var resourceNames = userInfo.saved_resources;
      var resources = [];

      _.forEach(resourceNames, function(n, index) {
        resourceId = n.id
        resourceName = n.name;
        resourceSite = n.website;
        resourceAddress = n.contact.street_address + ', ' + n.contact.city + ', ' + n.contact.state + ' ' + n.contact.zip_code;
        resourcePhone = n.contact.phone;
        resourceServices = n.services;

        resources.push(<div className="resource-info" id={index}><h4><strong>Name:</strong> {resourceName}</h4><h4><strong>Website:</strong> <a href={resourceSite}>{resourceSite}</a></h4><h4><strong>Address:</strong> {resourceAddress}</h4><h4><strong>Phone:</strong> {resourcePhone}</h4><h4><strong>Services:</strong> {resourceServices.join(', ')}</h4><div className="delete-icon" id={index}><i className="fa fa-times"></i></div></div>);
        console.log('this: ' + this);
      });
    }

    return(
      <div>
        <div className="profile-resources">
          {resources}
        </div>  
      </div>
    );
  }
});

module.exports = UserProfileRight;