(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Immutable'] };
  }

  define('immutable', [], vendorModule);
})();
