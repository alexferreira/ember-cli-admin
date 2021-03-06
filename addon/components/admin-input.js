import Ember from 'ember';
import layout from '../templates/components/admin-input';

export default Ember.Component.extend({
  layout: layout,

  classNameBindings: [":admin-attribute", ":form-group", "isAnyErrors:has-error"],
  type: Ember.computed('name', 'model', {
    get: function() {
      var transformedAttributes = Ember.get(this.get('model.constructor'), 'transformedAttributes');
      if (Ember.isEmpty(this.get('value'))) {
        return transformedAttributes.get(this.get('name'));
      }

      return Ember.typeOf(this.get('model').get(this.get('name')));
    }
  }),

  isString: Ember.computed.equal('type', 'string'),

  isEmail: Ember.computed('isString', {
    get: function() {
      if (this.get('isString') && this.get('value') && this.get('value').match(/.+@\w+\.\w+/)) {
        this.set('isString', false);
        return true;
      }
      return false;
    }
  }),
  isColor: Ember.computed('isString', {
    get: function() {
      if (this.get('isString') && this.get('value') && this.get('value').match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        this.set('isString', false);
        return true;
      }
      return false;
    }
  }),
  isText: Ember.computed('isString', {
    get: function() {
      if (this.get('isString') && this.get('value') && this.get('value').length > 50) {
        this.set('isString', false);
        return true;
      }
      return false;
    }
  }),

  isNumber: Ember.computed.equal('type', 'number'),
  isBoolean: Ember.computed.equal('type', 'boolean'),
  isDate: Ember.computed.equal('type', 'date'),

  value: Ember.computed('name', 'model', {
    set(key, value) {
        this.get('model').set(this.get('name'), value);
        return value;
      },
      get: function() {
        return this.get('model').get(this.get('name'));
      }
  }),
  isAnyErrors: Ember.computed.notEmpty('fieldErrors'),
  fieldErrors: Ember.computed('model', 'model.errors.[]', {
    get: function() {
      return this.get('model.errors').errorsFor(this.get('name'));
    }
  })

});
