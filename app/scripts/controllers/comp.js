'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CompCtrl', function ($scope,$http) {
    $http.get('../data/pres.json').
      success(function(pres) {
        $scope.comp = pres.compinfo;
        $scope.lang = pres.langues;

      })
  });
