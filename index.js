var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require( 'broccoli-merge-trees' );
module.exports = {
  name: 'ember-cli-admin',

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    app.import('vendor/fileicon.png', {
      destDir: 'assets/images'
    });
    app.import(app.bowerDirectory + '/typeahead.js/dist/bloodhound.min.js');
    app.import(app.bowerDirectory + '/typeahead.js/dist/typeahead.jquery.js');
    app.import(app.bowerDirectory + '/jquery-ui-sortable/jquery-ui-sortable.js');
    app.import(app.bowerDirectory + '/jquery-ui-touch-punch-improved/jquery.ui.touch-punch-improved.js');
    app.import('vendor/nested-sortable.js');
  },

  /*treeForPublic: function() {
    var bootstrapFonts = path.join(this.app.bowerDirectory, '/bootstrap/dist/fonts');
    var bootstrapFontsTree = new Funnel(this.treeGenerator(bootstrapFonts), {
      srcDir: '/',
      destDir: '/fonts'
    });

    return bootstrapFontsTree;
  },*/
  postprocessTree: function(type, tree) {
    var bootstrapFonts = path.join(this.app.bowerDirectory, '/bootstrap/dist/fonts');
    var bootstrapFontsTree = new Funnel(this.treeGenerator(bootstrapFonts), {
      srcDir: '/',
      destDir: '/fonts'
    });

    return mergeTrees([tree, bootstrapFontsTree], { overwrite: true });
  }
};
