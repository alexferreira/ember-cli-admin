import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['st-content'],
  didInsertElement: function(){
    Ember.$('html').addClass('st-layout ls-top-navbar sidebar-l2 show-sidebar');
  }
});
