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
            subtext={resource.subtext} />
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