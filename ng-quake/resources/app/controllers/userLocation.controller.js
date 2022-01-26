(function (module) {
    'use strict';
    locationCtrl.$inject = [
        '$scope',
        '$location',
        '$timeout',
        'geoLocationService'
    ];

    function locationCtrl(scope, location, timeout, geoLocationService) {
        const vm = this;
        vm.$onInit = () => {
            console.log(vm);
            vm.getLocalPosition();
        }
        vm.$onChanges = (changes) => { console.log(changes) }
        scope.redirect = function () {
            timeout(function () {
                location.path('/quake-list');
            });
        };
        vm.getLocalPosition = () => {
            location.path('/quake-list');
        }
        vm.getBrowserPosition = () => {
            geoLocationService.newPosition(({ lat, lng }) => {

                let positioned = [lat, lng];

                geoLocationService.getCity({
                    latlng: positioned.toString(positioned),
                    sensor: 'true'
                })
                    .success(function (data) {
                        geoLocationService.currentPosition.city = 'Los Andes'
                    })
                    .error(function (status) {
                        throw new Error(status)
                    });
                scope.redirect();
            });
        }
    }
    module.controller('locationCtrl', locationCtrl);
})(angular.module('quakesAPP'));
