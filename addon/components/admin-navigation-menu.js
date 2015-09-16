import Ember from 'ember';
import layout from '../templates/components/admin-navigation-menu';

export default Ember.Component.extend({
  layout: layout,

  tagName: "li",
  classNameBindings: ["isActive:active", "content.hasChildren:hasSubmenu"],

  isActive: Ember.computed('content', 'content.children', 'origContext.activeMenu', {
    get: function() {
      if (this.get('content.route') === this.get('origContext.activeMenu')) {
        return true;
      }
      return this._hasChild();
    }
  }),
  url: Ember.computed('content.route', {
    get: function() {
      return `/#${this.get('content.route')}`;
    }
  }),
  _hasChild: function() {
    var hasChild;
    if (!this.get('content.children')) {
      return false;
    }
    hasChild = false;
    this.get('content.children').forEach((function(_this) {
      return function(item) {
        if (item.route === _this.get('origContext.activeMenu')) {
          return hasChild = true;
        }
      };
    })(this));
    return hasChild;
  }
});
