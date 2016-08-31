/* jshint node: true */
'use strict';

const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')

// Stolen shamelessly from https://github.com/jasonmit/ember-cli-moment-shim/blob/master/index.js
module.exports = {
  name: 'immutable',

  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;

    const vendor = this.treePaths.vendor;

    app.import(vendor + '/immutable/immutable.js', { prepend: true });
    app.import(vendor + '/shims/immutable.js');
    return app;
  },

  treeForVendor(vendorTree) {
    const immutableRoot = require.resolve('immutable');
    const immutablePath = path.dirname(immutableRoot);

    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(immutablePath, {
      destDir: 'immutable',
      include: [new RegExp(/\.js$/)]
    }));

    return mergeTrees(trees);
  }
};
