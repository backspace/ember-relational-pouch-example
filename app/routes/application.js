import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('issue');
  },

  actions: {
    loadFeatures: function() {
      this.store.find('feature');
    },

    printDatabase: function() {
      this.container.lookup('adapter:application').db.allDocs({include_docs: true}, function(err, docs) {
        $('pre').html(JSON.stringify(docs, null, 4));
      });
    },

    clearDatabase: function() {
      this.container.lookup('adapter:application').db.destroy(function() {
        window.location.reload();
      });
    }
  }
});
