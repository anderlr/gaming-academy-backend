"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = (0, express_1.default)();
        this.config();
        dotenv_1.default.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    mongoSetup() {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(process.env.MONGODB_URL);
    }
}
exports.default = new App().app;
