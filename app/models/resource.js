import DS from 'ember-data';

export default DS.Model.extend({
  uri: DS.attr('string'),
  tags: DS.attr('array'),

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
