import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('resource', params.id);
  },

  setupController(controller, model) {
    controller.set('resource', model);
  }
});
