'use strict'

angular
	.module('feedDetail', ['ngRoute'])
	.component('feedDetail', {
		templateUrl: 'feed-detail/feed-detail.html',
		controller: 
			function FeedDetailController($routeParams, $http) {
				var self = this;
				var reqId = $routeParams.feedId;
				var reqLink = 'jsonlist/element' + reqId + '.json';
				
				$http.get(reqLink).then(
					function (response){
						self.element = response.data;
					}
				);
			}		
	});