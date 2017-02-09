import Ember from 'ember';
import DS from 'ember-data';

const { $ } = Ember;

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',

  ajaxOptions(url, type, options) {
    var hash = this._super(...arguments);
    var data;

    if (options.data && type !== 'GET') {
      hash.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
      data = JSON.parse(options.data).resource;
      hash.data = $.param({
        resource: {
          uri: data.uri
        },
        tags: data.tags
      });
    }

    return hash;
  }
});
