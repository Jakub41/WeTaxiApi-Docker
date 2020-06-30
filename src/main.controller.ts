import { Application } from 'express';
import { WeTaxiService } from './services/weTaxi.service';

export class Controller {
  private weTaxiService: WeTaxiService;

  constructor(private app: Application) {
    this.weTaxiService = new WeTaxiService();
    this.routes();
  }

  public routes = () => {
    return this.app.route('/').get(this.weTaxiService.welcomeMessage);
  };
}
