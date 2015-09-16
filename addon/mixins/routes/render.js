import Ember from 'ember';
var renderMixin;

renderMixin = Ember.Mixin.create({
  renderTemplate: function(controller, model) {
    this._setActiveRoute(controller);
    this._setupBreadscrumbs(controller, model);
    this.render(this._getControllerTemplate(controller), {
      outlet: "main",
      controller: controller
    });
    if (!(this._isLoading(this.controllerName) || this._isError(this.controllerName))) {
      this._renderHeader(controller, model);
      this._renderNavigation(controller, model);
      this.controllerFor('breadcrumbs').set('resource', model);
      this._renderBreadcrumbs(controller, model);
      this._renderActions(controller, model);
      this._renderSearchForm(controller);
      this._renderSidebar(controller);
      this._renderForm(controller, model);
    }
  },
  _renderHeader: function() {
    return this.render('admin/header', {
      outlet: 'header'
    });
  },
  _renderNavigation: function() {
    return this.render('admin/navigation', {
      outlet: 'navigation',
      controller: 'navigation'
    });
  },
  _renderBreadcrumbs: function() {
    return this.render('admin/breadcrumbs', {
      outlet: 'breadcrumbs',
      controller: 'breadcrumbs'
    });
  },
  _renderActions: function(controller, model) {
    if (model) {
      return this.render('admin/actions', {
        outlet: 'actions',
        controller: controller
      });
    }
  },
  _renderForm: function(controller) {
    if (this.get('action') && (this.get('action') === "edit" || this.get('action') === "new") && this._getControllerTemplate(controller).split('/').length < 3) {
      return this.render(this.getOutlet(controller, 'form'), {
        into: `admin/${this.get('action')}`,
        outlet: 'form',
        controller: controller
      });
    }
  },

  _renderSearchForm: function(controller) {
    return this.render(this.getOutlet(controller, 'search'), {
      into: this._getControllerTemplate(controller),
      outlet: 'search',
      controller: controller
    });
  },

  _renderSidebar: function(controller) {
    return this.render(this.getOutlet(controller, 'sidebar'), {
      into: this._getControllerTemplate(controller),
      outlet: 'sidebar',
      controller: controller
    });
  }
});

export default renderMixin;
