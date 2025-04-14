(function () {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'app/items.template.html',
      bindings: {
        items: '<'
      }
    });
})();
