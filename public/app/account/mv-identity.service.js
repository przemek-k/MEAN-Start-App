'use strict';

angular.module('app').factory('mvIdentity', function ($window) {
    var currentUser;
    if(!!$window.meanBlogUser) {
        currentUser = $window.meanBlogUser;
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
});