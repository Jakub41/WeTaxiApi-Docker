import { Request, Response } from 'express';
import { WELCOME_MESSAGE } from '../constants/WeTaxiApi.constants';

export class WeTaxiService {
  public welcomeMessage = (req: Request, res: Response): Response => {
    return res.status(200).send(WELCOME_MESSAGE);
  };
}
