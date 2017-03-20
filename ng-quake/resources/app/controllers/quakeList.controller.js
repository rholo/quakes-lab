(function(module) {
    'use strict';
    quakeListCtrl.$inject = ['$scope','$state', '$log', '$localStorage', '$timeout', '$location', '$sessionStorage', 'usgsService', 'geoLocationService'];
    function quakeListCtrl(scope, state, log, localStorage, timeout, location, sessionStorage, usgsService, geoLocationService) {
        if (!localStorage.userPosition) {
            timeout(function() {
                log.info('lost!');
                location.path('/location');
            });
            return false;
        }
        var date = new Date();
        date.setDate(date.getDate() -60); //30 dias atras
        var userConfig = {
            maxRadius:'450',
            mag:4.9,
            date: date
        };
        scope.userLocation = localStorage.userPosition;

        //localStorage.userConfig = userConfig;

        //if (!localStorage.quakeList) {
            scope.getQuakes = function() {
                usgsService.getQuakes({
                        //callback      :'JSON_CALLBACK',
                        starttime       :userConfig.date,
                        //maxlatitude   :'-36.739055',
                        //maxlongitude  :'-71.0574942',
                        latitude        :localStorage.userPosition.lat,
                        longitude       :localStorage.userPosition.lng,
                        //minradiuskm   :'0',
                        maxradiuskm     :userConfig.maxRadius,
                        minmagnitude    :userConfig.mag,
                        //eventtype     :'earthquake',
                        format          :'geojson'
                    })
                    .success(function(data, status) {
                        log.info(status, data);
                        if (angular.equals(localStorage.quakeList,data.features)) {
                            scope.quakeList = localStorage.quakeList;
                            console.info('from localStorage');
                        } else {
                            console.info('from service, new data');
                            angular.forEach(data.features, function (k,v) {

                            });
                            scope.quakeList = data.features;
                            localStorage.quakeList = data.features;
                        }

                    }).error(function(data, status) {
                        log.error(status);
                    });
            };
            scope.getQuakes();
        //}
        scope.quakeList = localStorage.quakeList;

        scope.reloadCity = function () {
            delete localStorage.userPosition;
            timeout(function() {
                log.info('reloadCity');
                location.path('/location');
            });
        };

    }
    module.controller('quakeListCtrl', quakeListCtrl);
})(angular.module('quakesAPP'));
