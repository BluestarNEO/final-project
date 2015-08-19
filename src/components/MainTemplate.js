var
  React         = require('react'), 
  Router        = require('react-router'),
  Navigation    = require('react-router').Navigation,
  Route         = Router.Route,
  RouteHandler  = Router.RouteHandler,
  PrimaryHeader = require('./PrimaryHeader'),
  PrimaryFooter = require('./PrimaryFooter');

var MainTemplate = React.createClass({
  mixins: [Navigation],

  render: function() {
    return (
      <div>
        <div>
          <PrimaryHeader />
          <RouteHandler />
        </div>
        <PrimaryFooter />
      </div>
    );
  }
});

module.exports = MainTemplate;