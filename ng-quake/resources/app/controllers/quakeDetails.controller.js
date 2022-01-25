(function (module) {
    'use strict';
    quakeDetailsCtrl.$inject = ['$scope', '$log', '$state', 'usgsService'];
        function quakeDetailsCtrl(scope, log, state, usgsService) {

            (scope.getQuakesDetails = function() {

                usgsService.getQuakesDetails({
                    callback: 'JSON_CALLBACK',
                    eventid: state.params.id,
                    format: 'geojson'
                })
                .success(function(data, _status) {
                    scope.event = data;
                    console.log(data.geometry.coordinates[0], data.geometry.coordinates[1])
                    scope.quakeDetail = data;
                }).error(function(_data, status) {
                    log.error(status);
                });
            })();
        }
    module.controller('quakeDetailsCtrl', quakeDetailsCtrl);
})(angular.module('quakesAPP'));
