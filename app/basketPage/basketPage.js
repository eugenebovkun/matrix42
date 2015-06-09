'use strict';

angular.module('myApp.basketPage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/basket', {
            templateUrl: 'basketPage/item.html',
            controller: 'BasketCtrl2'
        });
    }])

    .controller('BasketCtrl2', ['$scope', 'Basket', function ($scope, Basket) {
        $scope.basket = Basket.basketData;

        $scope.addToCart = function () {
            Basket.addItem();
        }
    }]);

