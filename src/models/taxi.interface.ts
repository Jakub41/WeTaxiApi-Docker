import { Document } from 'mongoose';

// Taxi interface
export interface ITaxi extends Document {
	taxiNumber: string;
	lastLocationLatitude: number;
	lastLocationLongitude: number;
}
