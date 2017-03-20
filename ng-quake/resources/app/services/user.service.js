(function(module) {
    'use strict';
    userService.$inject = ['$http'];

    function userService(http) {
        return {
           user:{
               city:'',
               date:'',
               mag:3.5,
               maxRadius:'450'
           },
           location:{
               lat:localStorage.lat,
               lng:localStorage.lng
           }
        };
    }
    module.factory('userService', userService);
})(angular.module('quakesAPP'));
