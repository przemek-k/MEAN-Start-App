'use strict';

angular.module('app').controller('NavbarLoginController', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {

    $scope.identity = mvIdentity;

    $scope.signin = function (username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                mvNotifier.success('You have successfully signed in!');
            } else {
                mvNotifier.error('Username/Password combination incorrect');
            }
            $scope.username = "";
            $scope.password = "";
        });
    };

    $scope.signout = function () {
        mvAuth.logoutUser().then(function() {
            mvNotifier.success('You have successfully signed out!');
            $location.path('/');
        });
    };
});