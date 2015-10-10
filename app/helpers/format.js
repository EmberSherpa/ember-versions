import Ember from 'ember';

export function format(params, hash) {
  const [value] = params;
  const {type} = hash;
  if (type === 'email') {
    return Ember.String.htmlSafe(`<a href="mailto:${value}">${value}</a>`)
  }
  return value;
}

export default Ember.Helper.helper(format);
