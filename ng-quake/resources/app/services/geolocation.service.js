(function(module) {
    'use strict';
    geoLocationService.$inject = ['$http'];

    function geoLocationService(http) {
        return {
           getPosition (callback) {
                return navigator.geolocation.getCurrentPosition(function(pos) {
                    if (callback) callback(pos);
                });
            },
            newPosition(callback) {
                var startPosition;
                var options = {
                    enableHighAccuracy:true,
                    timeout: 10 * 1000,
                    maximumAge: 5 * 60 * 1000
                };
                var locSuccess = function (position) {
                    startPosition = position;
                    callback(startPosition);
                };
                var locError = function (_error) {
                    console.log('send default position');
                    callback({})
                };
                navigator.geolocation.getCurrentPosition(locSuccess, locError, options);
            },
            getCity(params) {
                return http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                    params: params
                });
            }
        };
    }
    module.factory('geoLocationService', geoLocationService);
})(angular.module('quakesAPP'));
