/* global PouchDB */
/* global EmberPouch */

export default EmberPouch.Adapter.extend({
  db: new PouchDB('ember-relational-pouch-example')
});
