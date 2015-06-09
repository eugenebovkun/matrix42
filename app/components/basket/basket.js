/**
 * Created by eugenebo on 07-Jun-15.
 */
angular.module('myApp.basket')
.directive("basketList", ['Basket', function(Basket){
        return{
            restrict: 'E',
            templateUrl: 'components/basket/basket.html',
            link: function($scope,elemet, attrs){
                $scope.basket = Basket.basketData;
            },
            controller: function($scope){

                $scope.toggleBasket = function(){
                    element.toggleClass('hidden');
                };
                $scope.deleteItem = function(item){
                  Basket.deleteItem(item);
                };
            },
            scope: {
                basketItems: "="
            }
        }
    }]);