angular.module('map', ['AngularMap'])
.controller('MapCtrl', function($scope){
	$scope.data = {
		img: './demo/powerpuff-girls.fw.jpg'
	};

	$scope.data.beacons = [
	{
		coords:{
			x:525,
			y:250
		},
		click:function(){alert('Blossom');},
		glyphicon:'glyphicon-asterisk'
	}
	];
});
