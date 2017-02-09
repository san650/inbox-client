import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({
  queryParams: {
    filter: {
      refreshModel: true
    }
  },

  model() {
    return RSVP.hash({
      resources: this.store.findAll('resource'),
      tags: this.store.findAll('tag')
    });
  },

  setupController(controller, model) {
    controller.set('resources', model.resources);
    controller.set('tags', model.tags);
  },

  renderTemplate() {
    this.render();
    this.render('resources-sidebar', {
      into: 'application',
      outlet: 'sidebar'
    });
  }
});
