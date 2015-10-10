import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('release', {path: ':version'}, function(){
    this.route('change', {path: ':slug'});
  });
});

export default Router;
