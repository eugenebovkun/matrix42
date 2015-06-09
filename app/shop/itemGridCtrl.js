angular.module('myApp.shop.itemGrid', [])
.controller('ItemGridCtrl', ['$scope', 'Item',
    function($scope, Item) {
        $scope.items = Item.query();
        //$scope.orderProp = 'age';
        console.log($scope.items)
    }]);
