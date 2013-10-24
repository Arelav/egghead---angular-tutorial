'use strict';

angular.module('eggheadApp')
  .controller('MainCtrl', function ($scope, Data) {
    $scope.data = Data;
  })
  .controller('FirstCtrl', function ($scope, Data) {
    $scope.data = Data;
  });
