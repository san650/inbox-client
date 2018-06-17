import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Service.extend({
  isAuthenticated: false,

  authenticate() {
    return new RSVP.Promise((resolve) => {
      window.setTimeout(() => {
        var username = window.prompt('User name');
        var password = window.prompt('Password');

        Ember.$.ajaxPrefilter((options) => {
          options.xhrFields = { withCredentials: true };
          options.username = username;
          options.password = password;
          return true;
        });

        this.setProperties({
          isAuthenticated: true,
        });

        resolve();
      }, 0);
    });
  }
});
