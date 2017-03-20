var quakesAPP = angular.module('quakesAPP', ['ui.router','ngAnimate','ngStorage']);

(function(quakesAPP){
    quakesAPP.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/location');

            $stateProvider
                .state('location', {
                    url         :'/location',
                    templateUrl :'resources/app/partials/user-location-tmpl.html',
                    controller  :'locationCtrl'
                })
                .state('custom', {
                    url         :'/custom-search',
                    templateUrl :'resources/app/partials/custom-config-tmpl.html',
                    controller  :'customCtrl'
                })
                .state('quakeList', {
                    url         :'/quake-list',
                    templateUrl :'resources/app/partials/quake-list-tmpl.html',
                    controller  :'quakeListCtrl'
                })
                .state('quakeDetails',{
                    url         :'/quake-details/:id',
                    templateUrl :'resources/app/partials/quake-details-tmpl.html',
                    controller  :'quakeDetailsCtrl'
                });
        }]);
})(quakesAPP);
