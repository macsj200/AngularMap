angular.module('AngularMap',[])
	.directive('angularMap', function(){
		return{
			restrict: 'E',
    		templateUrl: '/lib/AngularMapTemplate.html',
    		scope:{
    			data: '='
    		},
    		link:function(scope, element, attrs){
    			console.log(scope.data);
    		}
		};
	});
