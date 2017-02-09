import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      resource: this.store.createRecord('resource'),
      tags: this.store.findAll('tag')
    });
  },

  afterModel(model) {
    model.tags = model.tags.map((tag) => Ember.ObjectProxy.create({ content: tag }));
  },

  setupController(controller, model) {
    controller.set('resource', model.resource);
    controller.set('tags', model.tags);
  },

  deactivate() {
    this.currentModel.resource.rollbackAttributes();

    return this._super(...arguments);
  }
});
