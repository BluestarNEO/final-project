var
  AppDispatcher = require('../dispatcher/AppDispatcher'),
  MapConstants = requireI('../constants/FluxMapConstants');

  var ActionTypes = MapConstants.ActionTypes;

  module.exports = {
    addService: function(service) {
      AppDispatcher.dispatch({
      type: ActionTypes.ADD_SERVICE,
      service: service
      });
    }
  }
