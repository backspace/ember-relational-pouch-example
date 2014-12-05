import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  issue: DS.belongsTo('issue'),

  rev: DS.attr('string')
});
