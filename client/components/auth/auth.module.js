'use strict';

angular.module('711MygradeFrontendApp.auth', [
  '711MygradeFrontendApp.constants',
  '711MygradeFrontendApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
