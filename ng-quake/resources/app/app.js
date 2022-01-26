const quakesAPP = angular.module('quakesAPP', ['ui.router', 'ngAnimate']);

(function (quakesAPP) {
    quakesAPP.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/location');

            $stateProvider
                .state('location', {
                    url: '/location',
                    templateUrl: 'resources/app/partials/user-location-tmpl.html',
                    controller: 'locationCtrl',
                    controllerAs: 'vm',
                })
                .state('quakeList', {
                    url: '/quake-list',
                    templateUrl: 'resources/app/partials/quake-list-tmpl.html',
                    controller: 'quakeListCtrl',
                    controllerAs: 'vm'
                })
                .state('quakeDetails', {
                    url: '/quake-details/:id',
                    templateUrl: 'resources/app/partials/quake-details-tmpl.html',
                    controller: 'quakeDetailsCtrl'
                });
        }]);
})(quakesAPP);
