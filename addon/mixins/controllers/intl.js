import Ember from 'ember';

export default Ember.Mixin.create({
  intl: Ember.inject.service(),
  controllerNameT: Ember.computed('_name',function() {
    let name = this.get('_name');
    return `controller.${name}`;
  })
});
