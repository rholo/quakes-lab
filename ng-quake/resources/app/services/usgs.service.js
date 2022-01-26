(function (module) {
    'use strict';
    usgsService.$inject = ['$http'];

    function usgsService(http) {
        return {
            getQuakes(params) {
                return http.get('http://earthquake.usgs.gov/fdsnws/event/1/query', {
                    params
                });
            },
            getQuakesDetails(params) {
                return http.jsonp('http://earthquake.usgs.gov/fdsnws/event/1/query', {
                    params
                });
            },
            getNearbyCities(params) {
                return http.get('http://earthquake.usgs.gov/archive/product/nearby-cities/' + params.code + '/' + params.source + '/' + params.updateTime + '/nearby-cities.json');
            },
            quakesList: []
        };
    }
    module.factory('usgsService', usgsService);
})(angular.module('quakesAPP'));
