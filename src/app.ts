// Express
import express, { Application } from 'express';
import bodyParser from 'body-parser';

// Importing our controller
import { Controller } from './main.controller';

// DB
import { MONGO_DB } from './constants/WeTaxiApi.constants';
import mongoose from 'mongoose';

// CORS
import cors from 'cors';

// Errors
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';

// Logging
import morganBody from 'morgan-body';

class App {
  public app: Application;

  // Declaring our controller
  public weTaxiController: Controller;

  constructor() {
    this.app = express();
    // Main App configuration
    this.setConfig();

    // Mongo configuration
    this.setMongoConfig();

    // Creating and assigning a new instance of our controller
    this.weTaxiController = new Controller(this.app);

    // Errors always in the bottom as the cycle of Req/Resp closing with it
    this.setErrors();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    // Enables cors
    this.app.use(cors());
    // Morgan Logging
    morganBody(this.app, { theme: 'darkened' });
  }

  private setErrors() {
    // Error Handling
    this.app.use(errorHandler);
    this.app.use(notFoundHandler);
  }

  // Mongo connection to our DB
  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
    });
  }
}

export default new App().app;
