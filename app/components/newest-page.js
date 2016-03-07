import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.get('store').findNewestComic();
  },

  store: Ember.inject.service()
});
