angular.module('map', ['AngularMap'])
	.controller('MapCtrl', function($scope){
		$scope.data = {
			img: 'powerpuff-girls.fw.jpg',
			areas: [{
				shape:'circle',
				coords:'525,250,200',
				click:function(){alert('Blossom');},
				title:'Blossom',
				alt:'Blossom'
			}]
		};
	});