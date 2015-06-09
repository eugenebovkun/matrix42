/**
 * Created by eugenebo on 07-Jun-15.
 */
angular.module('myApp.shop.category', ['ngResource'])
    .factory('CategoryService', ['$resource',
        function($resource){
            return $resource('data/categories.json', {}, {
                query: {method:'GET'},
                get: {method:'GET'}
            });
        }])