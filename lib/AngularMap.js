/*
* rwdImageMaps AngularJS Directive v1.0
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
* 
* Original Copyright (c) 2013 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*
* angular-rwdImageMaps.js (by Philip Saa)
* https://github.com/cowglow/
* @cowglow
*/

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