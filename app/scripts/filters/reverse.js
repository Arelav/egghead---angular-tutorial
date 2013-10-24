'use strict';

angular.module('eggheadApp')
  .filter('reverse', function (Data) {
    return function (input) {
      return input.split("").reverse().join("") + " " + Data.message;
    };
  });
