import Ember from 'ember';

export default Ember.Controller.extend({
  uri: null,
  tags: null,

  actions: {
    onSubmit(uri, newTags, existingTags) {
      this.toggleProperty('saving');
      var tags = newTags.split(' ').map((tag) => tag.trim());
      tags = tags.concat(existingTags.filterBy('isSelected').mapBy('name'));
      uri = uri.trim();

      var resource = this.get('resource');
      resource.set('uri', uri);
      resource.set('tags', tags);

      resource.save().then(() => {
        this.toggleProperty('saving');
        this.transitionToRoute('resources');
      });

      return false;
    }
  }
});
