'use strict';

angular.module('eggheadApp')
  .filter('reverse', function () {
    return function (input) {
      return input.split('').reverse().join(''); //
    };
  });
