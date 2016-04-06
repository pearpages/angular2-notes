(function() {
	'use strict';

	angular.module("app")
	.controller('MyController',[MyController]);

	function MyController() {
		var vm = this;
		vm.story = {id:100, name: 'Super cool title'};
	}
})();

// --------------------------------------------------

(function() {
	'use strict';

	angular.module("app")
	.service('VehicleService',[VehicleService]);

	function VehicleService() {
		this.getVehciles = function () {
			return [
				{id:1, name="xyz" },
				{id:2, name="xyz-342" },
				{id:3, name="a2000" }
			];
		};
	}
})();