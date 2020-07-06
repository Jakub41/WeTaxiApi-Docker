import dotenv from 'dotenv';
dotenv.config();

// Check ENV
if (!process.env.PORT) {
	process.exit(1);
}

// Server
export const PORT = process.env.PORT;

// Messages
export const WELCOME_MESSAGE = process.env.WELCOME_MESSAGE;

// DB
const MONGO_URL = process.env.DB_URL;
const MONGO_LOC = process.env.DB_URL_LOC;
const MONGO_NAME = process.env.DB_NAME;
const MONGO_PORT = process.env.DB_PORT;

export const MONGO_DB = `${MONGO_URL}${MONGO_PORT}/${MONGO_NAME}`;

// Taxi setup values
export const NUMBER_OF_AVAILABLE_SLOTS = process.env.NUMBER_OF_AVAILABLE_SLOTS;
export const NUMBER_OF_PARKING_LOTS = process.env.NUMBER_OF_PARKING_LOTS;
export const GPS_THRESHOLD = process.env.GPS_THRESHOLD;
