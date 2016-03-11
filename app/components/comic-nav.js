import Ember from 'ember';

export default Ember.Component.extend({
  fullNav: true,
  current: 1,
  firstPage: 1,
  url: '',
  lastPage: Ember.computed.alias('counter'),

  prevLink: Ember.computed('url', 'current', 'firstPage', function () {
    let url = this.get('url');
    let current = parseInt(this.get('current'));
    let firstPage = this.get('firstPage');

    url = parseInt(current > firstPage ? current - 1 : current);

    return url;
  }),

  nextLink: Ember.computed('url', 'current', 'counter', function () {
    let url = this.get('url');
    let current = parseInt(this.get('current'));
    let counter = this.get('counter');

    url = parseInt(current < counter ? current + 1 : current);

    return url;
  }),

  firstLink: Ember.computed('url', 'current', 'firstPage', function () {
    let url = this.get('url');
    let firstPage = this.get('firstPage');

    url = parseInt(firstPage);

    return url;
  }),
  lastLink: Ember.computed('url', 'current', 'lastPage', function () {
    let url = this.get('url');
    let lastPage = this.get('lastPage');

    url = parseInt(lastPage);

    return url;
  }),

  currentPage: Ember.computed('current', function () {
    return Number(this.get('current'));
  }),

  isFirstPage: Ember.computed('firstPage', 'currentPage', function () {
    return this.get('currentPage') === this.get('firstPage');
  }),
  isLastPage: Ember.computed('lastPage', 'currentPage', function () {
    return this.get('currentPage') === this.get('lastPage');
  }),
});
