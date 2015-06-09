/**
 * Created by eugenebo on 07-Jun-15.
 */
angular.module('myApp.shop.item', ['ngResource'])
.factory('ItemService', ['$resource',
    function($resource){
        return $resource('data/items.json', {}, {
            query: {method:'GET'},
            get: {method:'GET'}
        });
    }])