import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findComicById(params.comic_id);
  },

  howManyComics: function() {
    return this.get('store').comicAmount();
  },

  store: Ember.inject.service()
});
