(function (module) {
    'use strict';
    class UsgsService {
        static $inject = ['$http'];
        constructor($http) {
            this.$http = $http;
            this.API = 'https://earthquake.usgs.gov';
            this.quakesList = []
        }
        getQuakes(params) {
            return this.$http.get(`${this.API}/fdsnws/event/1/query`, {
                params
            });
        }
        getQuakesDetails(params) {
            return this.$http.jsonp('http://earthquake.usgs.gov/fdsnws/event/1/query', {
                params
            });
        }
        getNearbyCities(params) {
            return this.$http.get('http://earthquake.usgs.gov/archive/product/nearby-cities/' + params.code + '/' + params.source + '/' + params.updateTime + '/nearby-cities.json');
        }
    }
    module.factory('UsgsService', UsgsService);
})(angular.module('quakesAPP'));
