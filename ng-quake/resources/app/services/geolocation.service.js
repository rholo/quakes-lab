(function (module) {
    'use strict';
    geoLocationService.$inject = ['$http'];

    function geoLocationService(http) {
        return {
            currentPosition: {
                lat: '-32.8337995',
                lng: '-70.5972179',
                city: 'Los Andes'
            },
            getPosition(callback) {
                return navigator.geolocation.getCurrentPosition((pos) => {
                    if (callback) {
                        callback(pos);
                    }
                });
            },
            newPosition(callback) {
                const options = {
                    enableHighAccuracy: true,
                    timeout: 10 * 1000,
                    maximumAge: 5 * 60 * 1000
                };
                const locationSuccess = position => callback(position);
                const locationError = error => callback({ ...error });
                navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
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
