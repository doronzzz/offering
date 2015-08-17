'use strict';

/**
 * @ngdoc overview
 * @name nuregoApp
 * @description
 * # nuregoApp
 *
 * Main module of the application.
 */
angular
  .module('nuregoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree',
    'ngTable',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/selectProduct.html',
        controller: 'SelectProductCtrl',
        //controllerAs: 'main'
      })
      .when('/wizard', {
        templateUrl: 'views/wizard.html',
        controller: 'WizardCtrl',
        //controllerAs: 'about'
      })
      .when('/selectProduct', {
        templateUrl: 'views/selectProduct.html',
        controller: 'SelectProductCtrl',
        //controllerAs: 'about'
      })
      .when('/tree', {
        templateUrl: 'views/tree.html',
        controller: 'TreeCtrl',
        //controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/selectProduct'
      });
  });
