var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  SERVICE_ADD: null,       // Adds item to service
  SERVICE_REMOVE: null,    // Remove item from service
  SERVICE_VISIBLE: null,   // Shows or hides the service
  SET_SELECTED: null,   // Selects a product option
  RECEIVE_DATA: null    // Loads our mock data
});