this.getVehicles = function() {
	return $http.get('api/vehicles')
		.then(function (response) {
			return response.data.data;
		})
		.catch(handleError);
}