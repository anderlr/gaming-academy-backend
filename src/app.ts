import Express from "express";
import dotenv from "dotenv";
import cors from "cors"
import BodyParser from "body-parser";
import mongoose from "mongoose";
import { Routes } from "./routes";

class App {
  public app: Express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = Express();
    this.config();
    dotenv.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(BodyParser.json());
    this.app.use(BodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URL as string);
  }
}

export default new App().app;
