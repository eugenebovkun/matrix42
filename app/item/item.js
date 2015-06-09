'use strict';

angular.module('myApp.item', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fruit', {
    templateUrl: 'item/item.html',
    controller: 'ItemCtrl'
  });
}])

.controller('ItemCtrl', [function() {

}]);