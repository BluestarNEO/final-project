var
  React   = require('react'),
  MapInfo = require('./MapInfo'),
  $       = require('jquery');

var MapSearch = React.createClass({
  getInitialState: function() {
    return {
      resource: null
    };
  },

  componentDidMount: function() {
    var _thisLoc = this.props.params.zipcode
    if (_thisLoc) {
      map = new GMaps({
        el: '#map',
        lat: 33.4500,
        lng: -112.0667,
        zoom: 10
      });
      GMaps.geocode({
        address: _thisLoc,
        callback: function(results, status) {
          if (status == 'OK') {
            console.log(results[0])
            var latlng = results[0].geometry.location;
            map.setZoom(13);
            map.setCenter(latlng.lat(), latlng.lng());
          }
        }
      });
    } else {
      map = new GMaps({
        el: '#map',
        lat: 33.4500,
        lng: -112.0667,
        zoom: 10
      });
    }

    $.get('http://localhost:3000/resources', function(result) {
      if (this.isMounted()) {
        this.setState({
          resource: result
        })
      }
    }.bind(this))
      .done(function(resources) {
        resources.forEach(function(resource) {
          var address = resource.contact.street_address + ' ' + resource.contact.zip_code;
          
          GMaps.geocode({
            address: address,
             callback: function(results, status) {
              if (status == 'OK') {
                var latlng = results[0].geometry.location;
                if (_thisLoc) { } else {
                  map.setCenter(latlng.lat(), latlng.lng());
                }
                map.addMarker({
                  lat: latlng.lat(),
                  lng: latlng.lng(),
                  infoWindow: {
                    content:
                    '<p>' + '<h1 class="tooltip-name">' + resource.name + '</h1>' + '<br>'
                    + address + '<br>'
                    + resource.contact.phone + '<br>' 
                    + 'Services: ' + resource.services.join(' | ') + '</p>'

                  }
                });
              }
            }
          })
        });
      });
  },

  render: function() {
    console.log('params: ' + this.props.params.zipcode)
    console.log('resource: ' + this.state.resource);
    console.log('user: ' + User.first_name);

    return (
      <div>
        <div id="map">
        </div>
        <MapInfo data={this.state.resource} urlData={this.props.params.option} />
      </div>
    );
  }
});

module.exports = MapSearch;