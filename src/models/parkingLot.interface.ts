import { Document } from 'mongoose';

// Parking Lot Interface
export interface IParkingLot extends Document {
	availableSlots: number;
	parkingLotName: string;
	taxiQueue: Array<string>;
}
