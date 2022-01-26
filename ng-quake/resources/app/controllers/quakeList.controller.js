(function (module) {
    'use strict';
    quakeListCtrl.$inject = [
        '$scope',
        '$timeout',
        '$location',
        'usgsService',
        'geoLocationService'
    ];
    function quakeListCtrl(
        scope,
        timeout,
        location,
        usgsService,
        geoLocationService) {
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
        scope.city = geoLocationService.currentPosition.city;

        vm.getQuakes = function () {
            usgsService.getQuakes({
                //callback      :'JSON_CALLBACK',
                starttime: userConfig.date,
                //maxlatitude   :'-36.739055',
                //maxlongitude  :'-71.0574942',
                latitude: geoLocationService.currentPosition.lat,
                longitude: geoLocationService.currentPosition.lng,
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
