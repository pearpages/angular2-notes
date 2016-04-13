@Injectable()
export class VehicleService {
	constructor(private _http: Htpp) {}

	getVehicles() {
		// make and return the async GET call
		return this._http.get('api/vehicles.json')
			// we map the response
			.map((response: Response) => <Vehicle[]>response.json().data)
			.catch(this.handleError);
	}

	// handle the exception. always!!
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}