'use strict';

angular.module('app').controller('NavbarLoginController', function($scope, $http) {

    $scope.signin = function (user) {
        $http.post('/login', {
            username: user.username,
            password: user.password
        }).then(function(resp) {
            resp.data.success ? console.log('User logged in!') : console.log('Failed to login');
        });
    };
});