var
  React        = require('react'), 
  Router       = require('react-router'),
  Route        = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  MainTemplate = require('./components/MainTemplate'),
  Home         = require('./components/Home'),
  SignUp       = require('./components/signup/SignUp'),
  LogIn        = require('./components/login/LogIn'),
  MapSearch    = require('./components/search/MapSearch');

var routes = (
  <Route path='/' handler={MainTemplate}>
    <DefaultRoute handler={Home} />
    <Route name="signup" handler={SignUp} />
    <Route name="login" handler={LogIn} />
    <Route name="map-search" handler={MapSearch} />
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});