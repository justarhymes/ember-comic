import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      comic: this.get('store').findComicById(params.comic_id),
      length: this.get('store').comicAmount()
    });
  },

  /*howManyComics() {
    return this.get('store').comicAmount();
  },*/

  store: Ember.inject.service()
});
