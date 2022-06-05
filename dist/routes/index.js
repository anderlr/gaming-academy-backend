"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const AuthController_1 = require("../controllers/AuthController");
class Routes {
    constructor() {
        this.authController = new AuthController_1.AuthController();
    }
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "Server is running",
            });
        });
        app.route("/api/v1/login").post(this.authController.login);
        app.route("/api/v1/me").get(this.authController.authenticate);
        app.route("/api/v1/registration").post(this.authController.registration);
    }
}
exports.Routes = Routes;
