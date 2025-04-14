(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'app/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
})();
