'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ActCtrl', function ($scope,$http) {
    $http.get('../data/pres.json').
      success(function(pres) {
        $scope.act = pres;
        $scope.div = pres.divers;

      })
  });
