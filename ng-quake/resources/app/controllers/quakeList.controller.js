(function(module) {
    'use strict';
    quakeListCtrl.$inject = ['$scope', '$localStorage', '$timeout', '$location', 'usgsService'];
    function quakeListCtrl(scope, localStorage, timeout, location, usgsService) {
        
        var date = new Date();
        date.setDate(date.getDate() -60);
        var userConfig = {
            maxRadius:'450',
            mag:4.5,
            date 
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
                    .success(function(data, _status) {
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

                    }).error(function(_data, status) {
                        throw new Error(status);
                    });
            };
            scope.getQuakes();
        //}
        scope.quakeList = localStorage.quakeList;

        scope.reloadCity = function () {
            delete localStorage.userPosition;
            timeout(function() {
                location.path('/location');
            });
        };

    }
    module.controller('quakeListCtrl', quakeListCtrl);
})(angular.module('quakesAPP'));
