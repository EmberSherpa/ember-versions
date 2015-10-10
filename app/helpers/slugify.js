import Ember from 'ember';

export function slugify(params/*, hash*/) {
  const [value] = params;
  return (''+value).toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text;
}

export default Ember.Helper.helper(slugify);
