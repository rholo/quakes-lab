(function(module) {
    'use strict';
    locationCtrl.$inject = ['$scope', '$log', '$location', '$timeout', '$localStorage', '$sessionStorage', 'geoLocationService'];

    function locationCtrl(scope, log, location, timeout, localStorage, sessionStorage, geoLocationService) {

        log.info('latitud/longitud: ',localStorage.userPosition);

        scope.redirect = function () {
            timeout(function() {
                log.info('located!');
                location.path('/quake-list');
            });
        };

        if (!localStorage.userPosition) {
            (geoLocationService.newPosition(function(pos) {

                var userPosition = {
                    lat: '-32.784169',
                    lng: '-70.601716',
                    city:''
                };
                localStorage.userPosition = userPosition;

                var positioned = [localStorage.userPosition.lat,localStorage.userPosition.lng];

                (scope.getCity = function() {
                    geoLocationService.getCity({
                           latlng: positioned.toString(positioned),
                           sensor: 'true'
                        })
                        .success(function(data, status) {
                            localStorage.userPosition.city = data.results[0].address_components[3].short_name;

                            log.info('Ciudad: ', localStorage.userPosition.city);

                        })
                        .error(function(data, status) {
                           log.error(status);
                        });
                })();
                    scope.redirect();
            }));
        } else {
            scope.redirect();
        }
    }
    module.controller('locationCtrl', locationCtrl);
})(angular.module('quakesAPP'));
