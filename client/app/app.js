'use strict';

angular.module('711MygradeFrontendApp', [
  '711MygradeFrontendApp.auth',
  '711MygradeFrontendApp.admin',
  '711MygradeFrontendApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
