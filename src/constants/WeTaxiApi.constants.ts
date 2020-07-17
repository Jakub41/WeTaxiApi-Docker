import dotenv from 'dotenv';
dotenv.config();

// Check ENV
if (!process.env.PORT) {
	process.exit(1);
}

// Server
export const PORT: number = parseInt(process.env.PORT as string, 10);

// Messages
export const WELCOME_MESSAGE: string = process.env.WELCOME_MESSAGE;

// DB
const MONGO_URL: string = process.env.DB_URL;
// const MONGO_LOC: string = process.env.DB_URL_LOC;
const MONGO_NAME: string = process.env.DB_NAME;
const MONGO_PORT: number = parseInt(process.env.DB_PORT as string, 10);

export const MONGO_DB = `${MONGO_URL}${MONGO_PORT}/${MONGO_NAME}`;

// Taxi setup values
export const NUMBER_OF_AVAILABLE_SLOTS: number = parseInt(
	process.env.NUMBER_OF_AVAILABLE_SLOTS as string,
	10
);
export const NUMBER_OF_PARKING_LOTS: number = parseInt(
	process.env.NUMBER_OF_PARKING_LOTS as string,
	10
);
export const GPS_THRESHOLD: number = parseInt(
	process.env.GPS_THRESHOLD as string,
	10
);

// Simulation setup
export const SIM_DURATION: number = parseInt(
	process.env.TIME_DURATION as string,
	10
);

export const SIM_TIMEOUT: number = parseInt(process.env.TIMEOUT as string, 10);
