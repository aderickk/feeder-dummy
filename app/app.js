'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
  ,'feedList'
  ,'feedDetail'
  ,'fancyFeed'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  	when('/feeds', {
      template: '<feed-list></feed-list>'
  	}).
    when('/feeds/:feedId', {
      template: '<feed-detail></feed-detail>'
    }).
    when('/fancyFeeds', {
      template: '<fancy-feed></fancy-feed>'
    }).
  	//otherwise({redirectTo: '/view1'});
    otherwise({redirectTo: '/feeds'});
}]);
