import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  features: DS.hasMany('feature', {inverse: 'issue'}),

  rev: DS.attr('string')
});
