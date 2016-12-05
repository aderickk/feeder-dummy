'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
  ,'feedList'
  ,'feedDetail'
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
  	//otherwise({redirectTo: '/view1'});
    otherwise({redirectTo: '/feeds'});
}]);
