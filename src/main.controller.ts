import { Application } from 'express';
import { WeTaxiService } from './services/weTaxi.service';

export class Controller {
	private weTaxiService: WeTaxiService;

	constructor(private app: Application) {
		this.weTaxiService = new WeTaxiService();
		this.routes();
	}

	public routes = () => {
		// Welcome
		this.app.route('/').get(this.weTaxiService.welcomeMessage);
		// All taxies
		this.app.route('/taxi/all-taxies').get(this.weTaxiService.getAllTaxies);
		// Add taxi
		this.app.route('/taxi/add-new-taxi').post(this.weTaxiService.addTaxi);
		// Delete all
		this.app.route('/taxi/delete-all').delete(this.weTaxiService.deleteAllData);
	};
}
