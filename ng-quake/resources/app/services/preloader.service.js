quakesAPP.factory('preloaderInterceptor',
    function($q, $rootScope, $log) {
        'use strict';
        var currentCalls = 0;
        return {
            request: function(config) {
                currentCalls++;
                $rootScope.$broadcast("preloader-visible");
                return config || $q.when(config);
            },
            response: function(response) {
                if ((--currentCalls) === 0) {
                    $rootScope.$broadcast("preloader-hidden");
                }
                return response || $q.when(response);
            },
            responseError: function(response) {
                if (!(--currentCalls)) {
                    $rootScope.$broadcast("preloader-hidden");
                }
                return $q.reject(response);
            }
        };
    }).directive('preloader', function($rootScope) {
    'use strict';
    return function($scope, element, attrs) {
        $scope.$on("preloader-visible", function() {
            $scope.preloaderVisible = true;
        });
        return $scope.$on("preloader-hidden", function() {
            $scope.preloaderVisible = false;
        });
    };
}).config(function($httpProvider) {
    'use strict';
    $httpProvider.interceptors.push('preloaderInterceptor');
});
