(function (module) {
    'use strict';
    quakeDetailsCtrl.$inject = ['$scope', '$state', 'usgsService'];
    function quakeDetailsCtrl(scope, state, usgsService) {

        (scope.getQuakesDetails = function () {

            usgsService.getQuakesDetails({
                callback: 'JSON_CALLBACK',
                eventid: state.params.id,
                format: 'geojson'
            })
                .then(function ({ data, status }) {
                    scope.event = data;
                    console.log(data.geometry.coordinates[0], data.geometry.coordinates[1])
                    scope.quakeDetail = data;
                }).catch(function (error) {
                    throw new Error(error);
                });
        })();
    }
    module.controller('quakeDetailsCtrl', quakeDetailsCtrl);
})(angular.module('quakesAPP'));
