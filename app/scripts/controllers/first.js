'use strict';

angular.module('eggheadApp')
  .controller('FirstCtrl', function ($scope, Data) {
        $scope.data = Data;
  });