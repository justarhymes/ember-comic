import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAllComics();
  },

  store: Ember.inject.service()
});
