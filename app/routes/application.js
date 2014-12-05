import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('issue');
  },

  actions: {
    loadFeatures: function() {
      this.store.find('feature');
    },

    clearDatabase: function() {
      this.container.lookup('adapter:application').db.destroy(function() {
        window.location.reload();
      });
    }
  }
});
