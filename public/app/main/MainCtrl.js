'use strict';

angular.module('app').controller('MainCtrl', function($scope) {
    $scope.articles = [
        {title: 'Article Title #1', featured: true, published: new Date("October 13, 2014 11:13:00")},
        {title: 'Article Title #2', featured: false, published: new Date("October 14, 2014 11:13:00")},
        {title: 'Article Title #3', featured: true, published: new Date("October 15, 2014 11:13:00")},
        {title: 'Article Title #4', featured: true, published: new Date("October 16, 2014 11:13:00")},
        {title: 'Article Title #5', featured: false, published: new Date("October 17, 2014 11:13:00")},
        {title: 'Article Title #6', featured: true, published: new Date("October 18, 2014 11:13:00")},
        {title: 'Article Title #7', featured: false, published: new Date("October 19, 2014 11:13:00")},
        {title: 'Article Title #8', featured: true, published: new Date("October 20, 2014 11:13:00")},
        {title: 'Article Title #9', featured: true, published: new Date("October 21, 2014 11:13:00")},
        {title: 'Article Title #10', featured: false, published: new Date("October 22, 2014 11:13:00")},
        {title: 'Article Title #11', featured: true, published: new Date("October 23, 2014 11:13:00")},
        {title: 'Article Title #12', featured: false, published: new Date("October 24, 2014 11:13:00")},
        {title: 'Article Title #13', featured: true, published: new Date("October 25, 2014 11:13:00")},
        {title: 'Article Title #14', featured: true, published: new Date("October 26, 2014 11:13:00")},
        {title: 'Article Title #15', featured: true, published: new Date("October 27, 2014 11:13:00")},
    ];
});