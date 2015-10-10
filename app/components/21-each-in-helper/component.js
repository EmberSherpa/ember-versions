import Ember from 'ember';

const {
  set,
  merge
} = Ember;

export default Ember.Component.extend({
  init() {
    this._super();
    // BEGIN-SNIPPET 21-each-in-helper
    this.set('contacts', {
      phone: '555-555-5555',
      email: 'me@example.com',
      twitter: '@example'
    });
    // END-SNIPPET
  },

  // BEGIN-SNIPPET 21-each-in-helper-actions
  actions: {
    setProperty() {
      /**
       * This action will not cause {{each-in}} to update because properties
       * are not observed.
       *
       * Note: Using Ember.Object.create will not change the above
       */
      const contacts = this.get('contacts');
      const newPropName = this.get('newPropName');
      const newPropValue = this.get('newPropValue');

      set(contacts, newPropName, newPropValue);

      this.resetNewProperty();
    },
    mergeProperty() {
      /**
       * This action will cause {{each-in}} because contacts property is updated
       * with a new object which has the new property in it.
       */
      const contacts = this.get('contacts');
      const newPropName = this.get('newPropName');
      const newPropValue = this.get('newPropValue');

      const newObject = {};
      newObject[newPropName] = newPropValue;

      this.set('contacts', merge(newObject, contacts));

      this.resetNewProperty();
    }
  },
  resetNewProperty() {
    this.setProperties({
      newPropName: '',
      newPropValue: ''
    });
  }
  // END-SNIPPET
});
