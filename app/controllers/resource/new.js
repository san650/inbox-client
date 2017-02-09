import Ember from 'ember';

export default Ember.Controller.extend({
  uri: null,
  tags: null,

  actions: {
    onSubmit(uri, tagsString) {
      this.toggleProperty('saving');
      var tags = tagsString.split(' ').map((tag) => tag.trim());
      uri = uri.trim();

      var model = this.get('model');
      model.set('uri', uri);
      model.set('tags', tags);

      model.save().then(() => {
        this.toggleProperty('saving');
        this.transitionToRoute('resources');
      });

      return false;
    }
  }
});
