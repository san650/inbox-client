import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  group: DS.attr('string'),
  system: DS.attr('boolean')
});
