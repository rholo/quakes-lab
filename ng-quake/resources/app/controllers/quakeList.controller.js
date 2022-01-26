(function (module) {
    'use strict';
    quakeListCtrl.$inject = [
        '$scope',
        '$timeout',
        '$location',
        'UsgsService',
        'LocationService'
    ];
    function quakeListCtrl(
        scope,
        timeout,
        location,
        UsgsService,
        LocationService) {
        const vm = this;
        vm.$onInit = function () {
            console.log(vm)
            vm.getQuakes()
        }
        var date = new Date();
        date.setDate(date.getDate() - 60);
        var userConfig = {
            maxRadius: '450',
            mag: 4.2,
            date
        };
        scope.city = LocationService.currentPosition.city;

        vm.getQuakes = function () {
            UsgsService.getQuakes({
                //callback      :'JSON_CALLBACK',
                starttime: userConfig.date,
                //maxlatitude   :'-36.739055',
                //maxlongitude  :'-71.0574942',
                latitude: LocationService.currentPosition.lat,
                longitude: LocationService.currentPosition.lng,
                //minradiuskm   :'0',
                maxradiuskm: userConfig.maxRadius,
                minmagnitude: userConfig.mag,
                //eventtype     :'earthquake',
                format: 'geojson'
            })
                .then(({ data, status }) => {
                    scope.quakeList = data.features;
                }).catch(error => {
                    throw new Error(error);
                });
        };

        scope.reloadCity = function () {
            timeout(function () {
                location.path('/location');
            });
        };

    }
    module.controller('quakeListCtrl', quakeListCtrl);
})(angular.module('quakesAPP'));
