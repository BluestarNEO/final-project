var
  React    = require('react'),
  Resource = require('./Resource'),
  $        = require('jquery');

var MapInfo = React.createClass({

  render: function() {
    if (this.props.data === null) {
      console.log(this)
    } else {
      var mapNodes = this.props.data.map(function(resource, index) {
        return (
          <Resource
            key={index}
            name={resource.name}
            subtext={resource.subtext}
            website={resource.website}
            summary={resource.summary} 
            services={resource.services}
            address={resource.contact.street_address + ' ' + resource.contact.city + ', ' + resource.contact.state + ' ' + resource.contact.zip_code}
            phone={resource.contact.phone}
          />
        );
      });
    }

    return (
      <div>
        <div id="map-info-container">
          <div id="info-box">
            <div>
              {mapNodes}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MapInfo;