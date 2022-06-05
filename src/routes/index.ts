import { Request, Response, Express } from "express";
import { AuthController } from "../controllers/AuthController";

export class Routes {
  public authController: AuthController = new AuthController();

  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Server is running",
      });
    });

    app.route("/api/v1/login").post(this.authController.login);
    app.route("/api/v1/me").get(this.authController.authenticate);
    app.route("/api/v1/registration").post(this.authController.registration);
  }
}
