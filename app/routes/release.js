import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const { pages } = this.modelFor('application');
    return pages.findBy('version', params.version);
  }
});
