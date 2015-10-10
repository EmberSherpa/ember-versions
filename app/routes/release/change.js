import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const release = this.modelFor('release');
    const { changes } = release;
    return {
      release,
      change: changes.findBy('slug', params.slug)
    };
  }
});
