angular.module('myApp.header', [])
.controller('HeaderCtrl', ['$scope', 'Basket', function($scope, Basket) {
        $scope.basket = Basket.basketData;

        $scope.addToCart = function() {
            Basket.addItem();
        }
    }])
    .directive("shopHeader", ['Basket', function(Basket){
        return{
            restrict: 'E',
            templateUrl: 'components/header/header.html',
            link: function($scope,elemet, attrs){
                $scope.basket = Basket.basketData;
            },
            scope: {
                basketItems: "=",
                searchQuery: "="
            }
        }
    }]);