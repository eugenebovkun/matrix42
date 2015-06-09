'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.shop',
  'myApp.shop.item',
  'myApp.shop.itemGrid',
  'myApp.shop.category',
  'myApp.item',
  'myApp.version',
  'myApp.header',
  'myApp.basket',
  'myApp.basketPage'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/shop'});
}]);
