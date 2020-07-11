import { Application } from 'express';
import { WeTaxiService } from './services/weTaxi.service';
import { WeTaxiServiceSimulation } from './services/weTaxi.service.simulation';

export class Controller {
	private weTaxiService: WeTaxiService;
	private weTaxiServiceSimulation: WeTaxiServiceSimulation;

	constructor(private app: Application) {
		this.weTaxiService = new WeTaxiService();
		this.weTaxiServiceSimulation = new WeTaxiServiceSimulation();
		this.routes();
		this.startSimulation();
	}

	public routes = () => {
		// Welcome
		this.app.route('/').get(this.weTaxiService.welcomeMessage);
		// Taxi routes
		this.taxiRoutes();
		// Parking lot routes
		this.parkingLot();
	};

	private taxiRoutes = () => {
		// All taxies
		this.app.route('/taxi/all-taxies').get(this.weTaxiService.getAllTaxies);
		// Add taxi
		this.app.route('/taxi/add-new-taxi').post(this.weTaxiService.addTaxi);
		// Update location
		this.app
			.route('/taxi/update-location')
			.post(this.weTaxiService.updateLocation);
		// Delete all
		this.app.route('/taxi/delete-all').delete(this.weTaxiService.deleteAllData);
	};

	private parkingLot = () => {
		// Get the parking lots
		this.app
			.route('/parking-lot/get-parking-lots')
			.get(this.weTaxiService.getParkingLots);
		// Get Taxi queue
		this.app
			.route('/parking-lot/get-taxis')
			.post(this.weTaxiService.getParkingLotTaxis);
		// Add bonus
		this.app.route('/parking-lot/add-bonus').post(this.weTaxiService.addBonus);
		// Releases the taxi
		this.app
			.route('/parking-lot/release-taxi')
			.post(this.weTaxiService.releaseTaxi);
		// Add taxi to parking lot
		this.app
			.route('/parking-lot/add-to-parking-lot')
			.post(this.weTaxiService.addToParkingLot);
	};

	// To simulate the Taxi flow
	private startSimulation = () => {
		this.app
			.route('/start-simulation')
			.get(this.weTaxiServiceSimulation.startSimulation);
	};
}
