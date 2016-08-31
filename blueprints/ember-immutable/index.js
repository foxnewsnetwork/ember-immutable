/*jshint node:true*/
module.exports = {
  description: 'Installs immutable.js',

  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'immutable', target: '3.8.1'}
    ]);
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
};
