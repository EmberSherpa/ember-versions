// BEGIN-SNIPPET 21-registry-api-improvements-has-registration
  // app/initializers/ensure-flash-messages
  const AlertMessages = Ember.Service.extend({
    warning(msg) {
      window.alert(`WARNING: ${msg}`);
    },
    success(msg) {
      window.alert(msg);
    },
    info(msg) {
      window.alert(`Info: ${msg}`);
    },
    danger(msg) {
      window.alert(`Error: ${msg}`);
    }
  });

  export default {
    name: 'Ensure Flash Messages',
    initialize(application) {
      if (!application.hasRegistration('service:flash-messages')) {
        application.register('service:flash-messages', AlertMessages);
      }
    }
  }
// END-SNIPPET
