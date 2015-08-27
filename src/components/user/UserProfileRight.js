var
  React = require('react'),
  $     = require('jquery'),
  _     = require('lodash');

var _resources = [];

var UserProfileRight = React.createClass({
  getInitialState: function() {
    return {
      resources: ''
    }
  },

  componentDidMount: function() {

    $.get('http://localhost:3000/resources', function(resources) {
        if (this.isMounted()) {
          this.setState({
            resources: resources
          });
        };
      }.bind(this));
  },

  render: function() {
    var _resources = [];
    console.log(this.props.user)

    if(this.props.user == null) {
      console.log('twas null')
    } else {
      var userResources = this.props.user.saved_resources;
      var stateResources = this.state.resources;
      _.forEach(stateResources, function(resource, index) {
        // _.forEach(userResources, function(userResource, _index) {
          if(userResources == resource.id) {
            var resourceId = resource;
            var resourceName = resource.name;
            var resourceSite = resource.website;
            var resourceAddress = resource.contact.street_address + ', ' + resource.contact.city + ', ' + resource.contact.state + ' ' + resource.contact.zip_code;
            var resourcePhone = resource.contact.phone;
            var resourceServices = resource.services;

            _resources.push(
              <div className="resource-info">
                <h4><strong>Name:</strong> {resourceName}</h4>
                <h4><strong>Website:</strong> <a href={resourceSite}>{resourceSite}</a></h4>
                <h4><strong>Address:</strong> {resourceAddress}</h4>
                <h4><strong>Phone:</strong> {resourcePhone}</h4>
                <h4><strong>Services:</strong> {resourceServices.join(', ')}</h4>
              </div>);
          }
        // })
      })
    }
    
    console.log('what is this? ' + _resources);
    return(
      <div>
        <div className="profile-resources">
          {_resources}
        </div>  
      </div>
    );
  }
});

module.exports = UserProfileRight;