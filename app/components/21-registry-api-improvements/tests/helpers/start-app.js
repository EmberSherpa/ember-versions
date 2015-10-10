// BEGIN-SNIPPET 21-registry-api-improvements-unregister
// tests/helpers/start-app.js
import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Application.initializer({
    name: 'Stub PouchDB',
    initialize(application) {
      const InMemeoryDatabaseService = PouchDatabaseService.extend({
        createDB() {
          return new PouchDB('test-database', { adapter: 'memory' });
        }
      });
      application.unregister('service:database');
      application.register('service:database', InMemeoryDatabaseService);
    }
  });

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
//END-SNIPPET
