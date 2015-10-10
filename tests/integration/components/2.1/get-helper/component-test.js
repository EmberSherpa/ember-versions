import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('2.1/get-helper', 'Integration | Component | 2.1/get helper', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{2.1/get-helper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#2.1/get-helper}}
      template block text
    {{/2.1/get-helper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
