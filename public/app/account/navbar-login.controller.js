'use strict';

angular.module('app').controller('NavbarLoginController', function($scope, $http, mvIdentity, mvNotifier, mvAuth) {

    $scope.identity = mvIdentity;

    $scope.signin = function (user) {
        mvAuth.authenticateUser(user).then(function(success) {
            success ? mvNotifier.success('You have successfully signed in!') : mvNotifier.error('Username/Password combination incorrect');
            user.username = "";
            user.password = "";
        });
    };
});