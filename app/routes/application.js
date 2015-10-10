import Ember from 'ember';
import pages from '../pages/index';

export default Ember.Route.extend({
  model() {
    return { pages };
  }
});
