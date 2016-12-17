angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function($location) {
    var url = { url: $scope.url};
    Links.addOne(url);
  };

});
