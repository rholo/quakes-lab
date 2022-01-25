(function(module) {
    'use strict';
    locationCtrl.$inject = ['$scope', '$location', '$timeout', '$localStorage', 'geoLocationService'];

    function locationCtrl(scope, location, timeout, localStorage, geoLocationService) {

        scope.redirect = function () {
            timeout(function() {
                location.path('/quake-list');
            });
        };

        if (!localStorage.userPosition) {
            (geoLocationService.newPosition(function(_position) {

                var userPosition = {
                    lat: '-32.8337995',
                    lng: '-70.5972179',
                    city:'Los Andes'
                };
                localStorage.userPosition = userPosition;

                var positioned = [localStorage.userPosition.lat,localStorage.userPosition.lng];

                    geoLocationService.getCity({
                           latlng: positioned.toString(positioned),
                           sensor: 'true'
                        })
                        .success(function(data) {
                            localStorage.userPosition.city = 'Los Andes'
                        })
                        .error(function(status) {
                            throw new Error(status)
                        });
                    scope.redirect();
            }));
        } else {
            scope.redirect();
        }
    }
    module.controller('locationCtrl', locationCtrl);
})(angular.module('quakesAPP'));
