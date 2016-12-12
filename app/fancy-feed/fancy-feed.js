'use strict';
angular
	.module('fancyFeed', [])
	.component('fancyFeed', {
		templateUrl: 'fancy-feed/fancy-feed.html',
		controller: 
			function FancyFeedController($http,$scope){
				var self = this;

				$http.get('jsonlist/elements.json').then(
					function(response){
						self.elements = response.data;
				});

				$scope.do_change = function(){
				 	$scope.elementSelected = $scope.elemid;
				}				
			}
	});

