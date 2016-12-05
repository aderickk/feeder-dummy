'use strict';

angular.
	module('feedList', []).
	component('feedList', {
		templateUrl: 'feed-list/feed-list.html',
		controller:
			function FeedListController($http){
				var self = this;

				$http.get('jsonlist/elements.json').then(
					function(response){
						self.elements = response.data;
					}
				);
			}
	});