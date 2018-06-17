import Ember from 'ember';

export default Ember.Route.extend({
  authentication: Ember.inject.service('authentication'),

  beforeModel() {
    return this.get('authentication').authenticate();
  }
});
