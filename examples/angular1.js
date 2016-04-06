(function() {
	'use strict';

	angular.module("app")
	.controller('MyController',[MyController]);

	function MyController() {
		var vm = this;
		vm.story = {id:100, name: 'Super cool title'};
	}
})();