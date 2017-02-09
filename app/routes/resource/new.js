import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('resource');
  },

  deactivate() {
    this.currentModel.rollbackAttributes();

    return this._super(...arguments);
  }
});
