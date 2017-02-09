import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.decamelize(attr);
  },

  serialize(snapshot, options) {
    var attributes = snapshot.attributes();
    var data = {
      uri: attributes.uri,
      tags: attributes.tags
    };

    if (attributes.id) {
      data.id = attributes.id;
    }

    return data;
  }
});
