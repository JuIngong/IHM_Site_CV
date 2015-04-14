'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'FormCtrl'
      })
      .when('/act', {
        templateUrl: 'views/act.html',
        controller: 'ActCtrl'
      })
      .when('/comp', {
        templateUrl: 'views/comp.html',
        controller: 'CompCtrl'
      })
      .when('/exp', {
        templateUrl: 'views/exp.html',
        controller: 'ExpCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
