'use strict';

angular.module('app').factory('mvIdentity', function ($window, mvUser) {
    var currentUser;
    if(!!$window.meanBlogUser) {
        currentUser = new mvUser();
        angular.extend(currentUser, $window.meanBlogUser);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
});