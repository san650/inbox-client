import Ember from 'ember';
import ApplicationAdapter from './application';

const { $ } = Ember;

export default ApplicationAdapter.extend({
  ajaxOptions(url, type, options) {
    var hash = this._super(...arguments);
    var data;

    if (options.data && type !== 'GET') {
      hash.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
      data = JSON.parse(options.data);
      hash.data = $.param(data);
    }

    return hash;
  }
});
