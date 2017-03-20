(function(module) {
    'use strict';
    geoLocationService.$inject = ['$http', '$window'];

    function geoLocationService(http, window) {
        return {
            getPosition: function(callback) {
                return navigator.geolocation.getCurrentPosition(function(pos) {
                    if (callback) callback(pos);
                });
            },
            newPosition:function (callback) {
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
                var locError = function (error) {
                    alert('no ha sido posible localizarte!!');
                };
                navigator.geolocation.getCurrentPosition(locSuccess, locError, options);
            },
            /*
            window.onload = function() {
              var startPos;
              var geoOptions = {
                enableHighAccuracy: true
              }

              var geoSuccess = function(position) {
                startPos = position;
                document.getElementById('startLat').innerHTML = startPos.coords.latitude;
                document.getElementById('startLon').innerHTML = startPos.coords.longitude;
              };
              var geoError = function(error) {
                console.log('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
              };

              navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
            };
            */
            getCity: function(params) {
                return http.get('http://maps.googleapis.com/maps/api/geocode/json', {
                    params: params
                });
            }
        };
    }
    module.factory('geoLocationService', geoLocationService);
})(angular.module('quakesAPP'));
