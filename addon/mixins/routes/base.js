// Generated by CoffeeScript 1.8.0
import Ember from 'ember';
import IntMixin from 'ember-cli-admin/mixins/routes/intl';
import PaginationMixin from 'ember-cli-admin/mixins/routes/pagination';
import ModelMixin from 'ember-cli-admin/mixins/routes/model';
import ControllerMixin from 'ember-cli-admin/mixins/routes/controller';
import RenderMixin from 'ember-cli-admin/mixins/routes/render';
import SetupControllerMixin from 'ember-cli-admin/mixins/routes/setup-controller';
import ModalMixin from 'ember-cli-admin/mixins/routes/modal';
import QueryParams from 'ember-cli-admin/mixins/routes/query-params';
var mainRouteMixin;

mainRouteMixin = Ember.Mixin.create();

mainRouteMixin.reopen(IntMixin, QueryParams, PaginationMixin, ModelMixin, ControllerMixin, SetupControllerMixin, RenderMixin, ModalMixin);

export default mainRouteMixin;
