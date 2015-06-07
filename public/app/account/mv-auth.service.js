'use strict';

angular.module('app').factory('mvAuth', function($http, mvIdentity, $q) {
    return {
        authenticateUser: function(username, password) {

            var dfd = $q.defer();

            $http.post('/login', {
                username: username,
                password: password
            }).then(function(resp) {
                if(resp.data.success) {
                    mvIdentity.currentUser = resp.data.user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });

            return dfd.promise;
        },
        logoutUser: function() {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function() {
                mvIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        }
    }
});