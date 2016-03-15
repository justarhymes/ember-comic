import Ember from 'ember';
import Comic from 'ember-comic/models/comic';

const comics = [
  Comic.create({
    id: '1',
    name: 'Page 1',
    image: 'http://40.media.tumblr.com/0cf53eb169a0e35ae2b9d7bdfc2c9834/tumblr_o2b7uo6M0g1trrpq2o1_500.jpg'
  }),

  Comic.create({
    id: '2',
    name: 'Page 2',
    image: 'http://40.media.tumblr.com/297d023983f1bc3a53d61f969ede4925/tumblr_o2b7uo6M0g1trrpq2o2_500.jpg'
  }),

  Comic.create({
    id: '3',
    name: 'Page 3',
    image: 'http://40.media.tumblr.com/03d177b6243773cb6a302dad1bcd5f38/tumblr_o2b7uo6M0g1trrpq2o3_500.jpg'
  }),

  Comic.create({
    id: '4',
    name: 'Page 4',
    image: 'http://36.media.tumblr.com/276bb288fa196fbf61b7cf62bb825bca/tumblr_o2b7uo6M0g1trrpq2o4_500.jpg'
  }),

  Comic.create({
    id: '5',
    name: 'Page 5',
    image: 'http://40.media.tumblr.com/a2b29b230485b794d8448098725bf5e6/tumblr_o2b7uo6M0g1trrpq2o5_500.jpg'
  }),

  Comic.create({
    id: '6',
    name: 'Page 6',
    image: 'http://40.media.tumblr.com/a3e328b42529cbcb3cfa8cf4b90198b5/tumblr_o2b7uo6M0g1trrpq2o6_500.jpg'
  })
];

export default Ember.Service.extend({
  findComicById(id) {
    return this.findAllComics().findBy('id', id);
  },
  findNewestComic() {
    const lastComic = comics.length;
    return this.findAllComics().findBy('id', lastComic);
  },
  findAllComics() {
    return comics;
  },
  comicAmount() {
    //(polls.length + 1).toString()
    return (comics.length).toString();
  }
});
