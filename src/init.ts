// Constants
import {
	NUMBER_OF_AVAILABLE_SLOTS,
	NUMBER_OF_PARKING_LOTS,
} from './constants/WeTaxiApi.constants';
// models
import models from './models';

export class InitApp {
	private async initializeParkingLot() {
		console.log('#### Init ####');
		await models.ParkingLot.find({})
			.then((parkingLot) => {
				if (parkingLot.length === 0) {
					// create a new parking lots
					for (let i = 0; i < NUMBER_OF_PARKING_LOTS; i++) {
						const taxiQueue = [];
						const parkingLot = new models.ParkingLot({
							parkingLotName: 'PL:' + i,
							availableSlots: NUMBER_OF_AVAILABLE_SLOTS,
							taxiQueue: taxiQueue,
						});
						parkingLot.save();
					}
				}
			})
			.catch((error) => {
				console.error('Retrieve parking lots failed::', error);
			});
	}
}
