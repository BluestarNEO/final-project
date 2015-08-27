var
  AppDispatcher = require('../dispatcher/AppDispatcher'),
  MapConstants = require('../constants/FluxMapConstants'),
  EventEmmitter = require('events').EventEmmitter;

  var ActionTypes = MapConstants.ActionTypes;

  _services = [];

  function addServices(service) {
    _services.push(service);
  }

  function clearServices(){
    _services = [];
  }

module.exports = ServiceStore;