import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['comics'],

  nextPost: function(){
    var comics = this.get('controllers.comics'),
        index = comics.indexOf( this.get('model') );
    return comics.objectAt( index + 1 );
  }.property('id'),

  previousPost: function(){
    var comics = this.get('controllers.comics'),
        index = comics.indexOf( this.get('model') );
    return comics.objectAt( index - 1 );
  }.property('id')

});
