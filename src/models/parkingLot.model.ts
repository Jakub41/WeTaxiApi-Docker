import { model, Schema } from 'mongoose';
import { IParkingLot } from './parkingLot.interface';

// Parking Lot Schema
const ParkingLotSchema = new Schema({
	parkingLotName: {
		type: String,
		required: true,
		unique: true,
	},
	availableSlots: {
		type: Number,
		required: true,
	},
	taxiQueue: {
		type: [String],
	},
});

// Creating the model
export default model<IParkingLot>('ParkingLot', ParkingLotSchema);
