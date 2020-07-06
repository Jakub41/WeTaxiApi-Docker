import { Request, Response } from 'express';
import {
	WELCOME_MESSAGE,
	GPS_THRESHOLD,
} from '../constants/WeTaxiApi.constants';
import models from '../models';

export class WeTaxiService {
	// Welcome message
	public welcomeMessage = (req: Request, res: Response): Response => {
		return res.status(200).send(WELCOME_MESSAGE);
	};

	// Get all Taxies from DB
	public getAllTaxies = async (
		req: Request,
		res: Response
	): Promise<Response> => {
		try {
			await models.Taxi.find({}, (error: Error, taxies: any) => {
				if (error) {
					res.send(error);
				}
				res.json(taxies);
			});
		} catch (e) {
			return res.status(500).send(e.message);
		}
	};

	// Add a Taxi to DB
	public addTaxi = async (req: Request, res: Response): Promise<Response> => {
		try {
			const taxiNumber = req.body.taxiNumber;
			const newTaxi = new models.Taxi({ taxiNumber: taxiNumber });
			const taxi = await newTaxi.save((error: Error, taxi: any) => {
				if (error) return res.send(error);
				return res.status(200).json({ msg: 'Taxi created', taxi });
			});
		} catch (error) {
			return res.status(400).send(error.message);
		}
	};

	// Delete all data in DB
	public deleteAllData = async (
		req: Request,
		res: Response
	): Promise<Response> => {
		try {
			await models.Taxi.deleteMany({});
			console.log('All Data successfully deleted');
			return res.status(200).send('All was deleted from DB');
		} catch (e) {
			console.log(e.message);
			return res.status(500).send(e.message);
		}
	};
}
