'use strict';

angular.module('app').controller('NavbarLoginController', function($scope, $http, mvIdentity, mvNotifier, mvAuth) {

    $scope.identity = mvIdentity;

    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                mvNotifier.success('You have successfully signed in!');
            } else {
                mvNotifier.error('Username/Password combination incorrect');
                username = "";
                password = "";
            }
        });
    };
});