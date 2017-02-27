import Ember from 'ember';

class Filters {
  constructor(initial) {
    if (initial && initial.length > 0) {
      this.tags = (initial || '').split(' ');
    } else {
      this.tags = [];
    }
  }

  add(tag) {
    if (this.tags.includes(tag)) {
      this.tags.removeObject(tag);
    } else {
      this.tags.pushObject(tag);
    }
  }

  serialize() {
    return this.tags.join(' ');
  }
}

export default Ember.Controller.extend({
  queryParams: ['filter'],

  filter: null,

  actions: {
    filterBy(tag) {
      var filters = new Filters(this.get('filter'));

      filters.add(tag);

      this.set('filter', filters.serialize());
    },
    clearFilters() {
      this.set('filter', null);
    }
  }
});
