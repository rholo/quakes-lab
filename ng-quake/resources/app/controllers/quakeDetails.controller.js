(function (module) {
    'use strict';
    quakeDetailsCtrl.$inject = ['$scope', '$log', '$state','$localStorage', '$sessionStorage', 'usgsService'];
        function quakeDetailsCtrl(scope, log, state, localStorage, sessionStorage, usgsService) {
            log.info('Event ID: ', state.params.id);

            (scope.getQuakesDetails = function() {

                usgsService.getQuakesDetails({
                    callback: 'JSON_CALLBACK',
                    eventid: state.params.id,
                    format: 'geojson'
                })
                .success(function(data, status) {
                    //log.info(status, data);
                    scope.event = data;
                    console.log(data.geometry.coordinates[0], data.geometry.coordinates[1])
                    scope.quakeDetail = data;
                    //scope.getNearbyCities();
                }).error(function(data, status) {
                    log.error(status);
                });
            })();
            // scope.getNearbyCities = function(){
            //     usgsService.getNearbyCities({
            //         callback    :'JSON_CALLBACK',
            //         code        : scope.event.properties.products['nearby-cities'][0].code,
            //         source      : scope.event.properties.products['nearby-cities'][0].source,
            //         updateTime  : scope.event.properties.products['nearby-cities'][0].updateTime
            //     }).success(function(data, status){
            //         log.info(status, data);
            //         scope.cities = data;
            //     }).error(function(data, status){
            //         log.error(status);
            //     });
            // };

        }
    module.controller('quakeDetailsCtrl', quakeDetailsCtrl);
})(angular.module('quakesAPP'));
