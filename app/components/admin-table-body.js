import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "tbody",
  actions: {
    adminAction: function(adminActionName, model) {
      console.log('admin-table-body.adminAction: ', adminActionName, model);
      this.sendAction('adminAction', adminActionName, model);
    }
  }
});