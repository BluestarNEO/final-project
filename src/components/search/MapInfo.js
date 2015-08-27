var
  React    = require('react'),
  Resource = require('./Resource'),
  $        = require('jquery'),
  _ = require('lodash');

var MapInfo = React.createClass({

  render: function() {
    var _option = this.props.urlData;

    if (this.props.data === null) {
      console.log(this)
    } else {
      var mapNodes = this.props.data.map(function(resource, index) {
        var _services = resource.services;
        if (_option) {
          if ($.inArray(_option, _services) != -1) {
            return (
              <Resource
                key={index}
                name={resource.name}
                subtext={resource.subtext}
                website={resource.website}
                summary={resource.summary} 
                services={resource.services}
                address={resource.contact.street_address + ' ' + resource.contact.city + ', ' + resource.contact.state + ' ' + resource.contact.zip_code}
                phone={resource.contact.phone} />
            );
          } else {
            console.log('nope!');
          }
        } else {
          return (
            <Resource
              key={index}
              name={resource.name}
              subtext={resource.subtext}
              website={resource.website}
              summary={resource.summary} 
              services={resource.services}
              address={resource.contact.street_address + ' ' + resource.contact.city + ', ' + resource.contact.state + ' ' + resource.contact.zip_code}
              phone={resource.contact.phone} />
          );
        }
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