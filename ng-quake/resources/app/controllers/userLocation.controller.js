(function (module) {
    'use strict';
    locationCtrl.$inject = [
        '$scope',
        '$location',
        '$timeout',
        'LocationService'
    ];

    function locationCtrl(scope, location, timeout, LocationService) {
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
            LocationService.newPosition(({ lat, lng }) => {

                let positioned = [lat, lng];

                LocationService.getCity({
                    latlng: positioned.toString(positioned),
                    sensor: 'true'
                })
                    .success(function (data) {
                        LocationService.currentPosition.city = 'Los Andes'
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
