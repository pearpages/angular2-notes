getVehicles() {
	return this._http.get('api/vehicles')
		.map((response: Response) =>
			<Vehicle[]>response.json().data
		)
		.catch(this.handleError);
}