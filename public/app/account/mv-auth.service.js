'use strict';

angular.module('app').factory('mvAuth', function($http, mvIdentity, $q) {
    return {
        authenticateUser: function(user) {

            var dfd = $q.defer();

            $http.post('/login', {
                username: user.username,
                password: user.password
            }).then(function(resp) {
                if(resp.data.success) {
                    mvIdentity.currentUser = resp.data.user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });

            return dfd.promise;
        }
    }
});