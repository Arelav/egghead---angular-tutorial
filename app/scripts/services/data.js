'use strict';

angular.module('eggheadApp')
      .service('Data', function Data() {
    // AngularJS will instantiate a singleton by calling "new" on this function
        return {message: 'It works'};
      });