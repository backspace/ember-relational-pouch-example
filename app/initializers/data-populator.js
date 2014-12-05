export default {
  name: 'data-populator',
  after: 'store',

  initialize: function(container, application) {
    application.deferReadiness();

    var store = container.lookup('store:main');

    var issues = store.find('issue');
    issues.then(function() {
      if (issues.get('length') === 0) {
        var issue = store.createRecord('issue', {title: 'An issue'});

        issue.save().then(function() {
          var feature = store.createRecord('feature', {title: 'A feature'});
          issue.get('features').pushObject(feature);
          feature.save();
          issue.save().then(function() {
            application.advanceReadiness();
          });
        });
      }
      else {
        application.advanceReadiness();
      }
    });
  }
};
