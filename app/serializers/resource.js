import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(snapshot) {
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
