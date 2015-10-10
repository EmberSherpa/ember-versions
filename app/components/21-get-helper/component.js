import Ember from 'ember';

export default Ember.Component.extend({

  // BEGIN-SNIPPET 21-get-helper-user-model
  user: {
    name: 'Joe Doh',
    email: 'joe@example.com',
    phone: '555-555-5555',
    preferredContactMethod: 'phone',
    availableContactMethods: ['phone', 'email']
  }
  // END-SNIPPET

});
