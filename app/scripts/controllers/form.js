'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('AboutCtrl', function ($scope,$http) {
    $http.get('../data/pres.json').
      success(function(pres) {
        $scope.myself = pres;
        $scope.form = pres.formation;
        $scope.exp = pres.exppro;
        $scope.comp = pres.compinfo;
        $scope.lang = pres.langues;
        $scope.act = pres.activite;
        $scope.act = pres.divers;

      })
  });
'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('FormCtrl', function ($scope,$http) {
    $http.get('../data/pres.json').
      success(function(pres) {
        $scope.form = pres.formation;


      })
  });
