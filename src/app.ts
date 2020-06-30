import express, { Application } from 'express';

// Importing our controller
import { Controller } from './main.controller';
import bodyParser from 'body-parser';
import cors from 'cors';

class App {
  public app: Application;

  // Declaring our controller
  public pokeController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();

    // Creating and assigning a new instance of our controller
    this.pokeController = new Controller(this.app);
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    // Enables cors
    this.app.use(cors());
  }
}

export default new App().app;
