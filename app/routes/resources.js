import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('resource');
  },

  setupController(controller, model) {
    controller.set('resources', model);
  }
});
