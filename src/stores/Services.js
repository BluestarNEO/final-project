var
  AppDispatcher = require('../dispatcher/AppDispatcher'),
  EventEmmiter = require('events').EventEmmiter;

  _services = [];

  function addServices(service) {
    _services.push(service);
  }

  