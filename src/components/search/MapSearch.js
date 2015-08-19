var
  React = require('react'),
  $     = require('jquery');

var MapSearch = React.createClass({
  componentDidMount: function() {
    map = new GMaps({
      el: '#map',
      lat: 33.4500,
      lng: -112.0667,
      zoom: 10
    });
  },

  render: function() {
    return (
      <div>
        <div id="map">
        </div>
      </div>
    );
  }
});

module.exports = MapSearch;