// BEGIN-SNIPPET 21-deprecation-handlers-throw-error
Ember.Debug.registerDeprecationHandler((message, options, next) => {
  if (message.indexOf('should') !== -1) {
    throw new Error('Deprecation message with should: '+message);
  } else {
    // defer to whatever handler was registered before this one
    next(message, options);
  }
});
// END-SNIPPET

// BEGIN-SNIPPET 21-deprecation-handlers-suppress
// next is not called, so no warnings get the default behavior
Ember.Debug.registerWarnHandler(() => {});
// END-SNIPPET
