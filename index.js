/* jshint node: true */
'use strict';

// Stolen shamelessly from https://github.com/jasonmit/ember-cli-moment-shim/blob/master/index.js
module.exports = {
  name: 'ember-immutable',

  options: {
    nodeAssets: {
      'immutable': {
        vendor: ['dist/immutable.js']
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/immutable/dist/immutable.js', {
      using: [{ transformation: 'amd', as: 'immutable' }]
    });
  }
};
