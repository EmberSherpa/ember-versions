import Ember from 'ember';

export function concat(params/*, hash*/) {
  return [].join(params);
}

export default Ember.Helper.helper(concat);
