
'use strict';

angular.module('myApp.shop', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/shop', {
            templateUrl: 'shop/shop.html',
            controller: 'ShopCtrl'
        });
    }])



    .controller('ShopCtrl', ['$scope', 'ItemService', 'CategoryService', 'Basket',
        function ($scope, Item, Category, Basket) {
            $scope.items = Item.query();
            $scope.categories = Category.query();
            $scope.addToBasket = function (item) {
                Basket.addItem(item);
                console.log(Basket.getItemsList());
            };
        }])

    .controller('CategoryCtrl', ['$scope', 'CategoryService',
        function ($scope, Category, ShopCtrl) {

            $scope.categories = Category.query();
            // Add all to categories
            //$scope.categories.categories.unshift('all');
            $scope.activeCategory = {};
            $scope.activeCategoryName = '';

            $scope.setActiveCategory = function(category){
                if ($scope.isActive(category)){
                    // toggle active category
                    $scope.activeCategory = {};
                    $scope.activeCategoryName = '';
                } else {
                    // set active category
                    $scope.activeCategory = category;
                    $scope.activeCategoryName = category.categoryId;
                }
            };

            $scope.isActive = function(item){
                return item === $scope.activeCategory;
            };

        }])
    .directive('categorySelect', ['CategoryService',
            function(Category){
                return{
                    restrict: 'A',
                    templateUrl: "shop/categoryTpl.html",
                    link: function($scope, element, attrs){
                        $scope.categories = Category.query();
                    },
                    controller: function ($scope){
                        $scope.setActiveCategory = function(category){
                            if ($scope.isActive(category)){
                                // toggle active category
                                $scope.activeCategory = {};
                                $scope.activeCategoryName = '';
                            } else {
                                // set active category
                                $scope.activeCategory = category;
                                $scope.activeCategoryName = category.categoryId;
                            }
                        };

                        $scope.isActive = function(item){
                            return item === $scope.activeCategory;


                        };
                        $scope.blabla = function(){
                            console.log("bla-bla")
                        }
                    },
                    scope: {
                        activeCategoryName: "="
                    }
                }
            }]);