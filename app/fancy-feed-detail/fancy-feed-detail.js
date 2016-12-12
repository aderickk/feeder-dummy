'use strict'

function fancyFeedDetailController($http){
	
	this.$onInit = function(){
		this.feedId = 1;
	}

	this.$onChanges = function(changes) {
		if (changes.feedId != null && changes.feedId != ""){
			this.feedId = changes.feedId.currentValue;
			var reqLink = 'jsonlist/element' + this.feedId + '.json';

			$http.get(reqLink).then(
				function (response){
						this.element = response.data;
				}, function (error) {
					console.error('Oh OH: ', error);
				}
			);	
		}			
	};
	
}

angular
	.module('fancyFeed')
	.component('fancyFeedDetail',{
		bindings: {
			feedId: '<'
		},
		templateUrl: 'fancy-feed-detail/fancy-feed-detail.html',
		controller: fancyFeedDetailController		
	});

