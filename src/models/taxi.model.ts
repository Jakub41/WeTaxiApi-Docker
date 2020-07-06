import { model, Schema } from 'mongoose';
import { ITaxi } from './taxi.interface';

// Taxi schema
const TaxiSchema = new Schema({
	taxiNumber: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	lastLocationLatitude: {
		type: Number,
	},
	lastLocationLongitude: {
		type: Number,
	},
});

// Creating our model with interface
export default model<ITaxi>('Taxi', TaxiSchema);
