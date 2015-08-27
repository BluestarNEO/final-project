var
  React           = require('react'), 
  Router          = require('react-router'),
  Route           = Router.Route,
  DefaultRoute    = Router.DefaultRoute,
  MainTemplate    = require('./components/MainTemplate'),
  Home            = require('./components/Home'),
  SignUp          = require('./components/signup/SignUp'),
  LogIn           = require('./components/login/LogIn'),
  MapSearch       = require('./components/search/MapSearch'),
  MapInfo         = require('./components/search/MapInfo'),
  UserProfile     = require('./components/user/UserProfile'),
  EditUserProfile = require('./components/user/edit/EditUserProfile');

  User = false;

var routes = (
  <Route path='/' handler={MainTemplate}>
    <DefaultRoute handler={Home} />
    <Route name="signup" handler={SignUp} />
    <Route name="login" handler={LogIn} />
    <Route name="map-search" handler={MapSearch} />
    <Route name="map-search/:option/:zipcode" handler={MapSearch} />
    <Route name="user/:id" handler={UserProfile} />
    <Route name="user/:id/edit" handler={EditUserProfile} />
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.body);
});