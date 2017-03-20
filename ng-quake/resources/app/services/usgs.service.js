(function(module) {
    'use strict';
    usgsService.$inject = ['$http'];

    function usgsService(http) {
        return {
            getQuakes: function(params){
                return http.get('http://earthquake.usgs.gov/fdsnws/event/1/query', {
                    params:params
                });
            },
            getQuakesDetails: function(params){
                return http.jsonp('http://earthquake.usgs.gov/fdsnws/event/1/query', {
                    params:params
                });
            },
            getNearbyCities: function(params){
                return http.get('http://earthquake.usgs.gov/archive/product/nearby-cities/'+ params.code +'/'+ params.source +'/'+ params.updateTime +'/nearby-cities.json');
            },
            quakesList:[]
        };
    }
    module.factory('usgsService', usgsService);
})(angular.module('quakesAPP'));
