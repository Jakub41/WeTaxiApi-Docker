import { model, Schema } from 'mongoose';
import { IParkingLot } from './parkingLot.interface';

// Parking Lot Schema
const ParkingLotSchema = new Schema({
	parkingLotName: {
		type: String,
	},
	availableSlots: {
		type: Number,
	},
	taxiQueue: {
		type: [String],
	},
});

// Creating the model
export default model<IParkingLot>('ParkingLot', ParkingLotSchema);
