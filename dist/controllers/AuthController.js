"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const lodash_1 = __importDefault(require("lodash"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const AuthValidators_1 = require("./validation/AuthValidators");
const RegistrationValidators_1 = require("./validation/RegistrationValidators");
const helper_1 = require("../utils/helper");
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { errors, isValid } = (0, AuthValidators_1.validateLogin)(body);
                if (!isValid) {
                    return res
                        .status(400)
                        .json({ status: false, message: "error", errors: errors });
                }
                const user = yield User_1.default.findOne({ email: body.email }, { createdAt: 0, updateAt: 0 });
                if (!user) {
                    return res.status(400).json({
                        status: false,
                        message: "Login email not found",
                        data: {},
                    });
                }
                const passwordCheck = yield bcryptjs_1.default.compare(body.password, user.password);
                if (!passwordCheck) {
                    return res.status(400).json({
                        status: false,
                        message: "Wrong password",
                        data: {},
                    });
                }
                const token = (0, helper_1.createJwtAuthToken)(user);
                const users = yield User_1.default.findOne({ _id: user._id }, {
                    createdAt: 0,
                    updateAt: 0,
                    roles: 0,
                    password: 0,
                    status: 0,
                    forgetPasswordToken: 0,
                });
                yield User_1.default.findOneAndUpdate({ _id: user._id }, { $set: { forgetPasswordToken: "" } });
                return res.status(200).send({
                    status: true,
                    message: "Logged-in successfully.",
                    data: { token, user: users },
                });
            }
            catch (error) {
                console.log(error);
                return res.status(200).send({
                    status: false,
                    message: error.message,
                    data: [],
                });
            }
        });
    }
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = lodash_1.default.get(req, "headers.authorization", false);
            if (!token) {
                return res.status(200).send({
                    status: false,
                    message: "Token Not Provided.",
                    data: [],
                });
            }
            const decode = (0, helper_1.verifyToken)(token);
            if (!decode) {
                return res.status(400).send({
                    status: false,
                    message: "Token expire. Please Login Again.",
                    data: [],
                });
            }
            const user = yield User_1.default.findOne({ _id: decode._id, status: true }, {
                createdAt: 0,
                updateAt: 0,
                roles: 0,
                password: 0,
                status: 0,
                forgetPasswordToken: 0,
            });
            if (user) {
                const token = (0, helper_1.createJwtAuthToken)(user);
                return res.status(200).send({
                    status: true,
                    message: "ok",
                    data: user,
                    token: token,
                });
            }
            else {
                return res.status(400).send({
                    status: false,
                    message: "Token expire. Please Login Again.",
                    data: [],
                });
            }
        });
    }
    registration(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { errors, isValid } = (0, RegistrationValidators_1.validateRegister)(body);
                if (!isValid) {
                    return res
                        .status(400)
                        .json({ status: false, message: "error", errors: errors });
                }
                let user = yield User_1.default.findOne({ email: body.email });
                if (user) {
                    return res.status(200).send({
                        status: false,
                        message: "User already exists",
                        data: [],
                    });
                }
                const salt = yield bcryptjs_1.default.genSalt(10);
                body.password = yield bcryptjs_1.default.hash(body.password, salt);
                user = yield User_1.default.create(body);
                return res.status(200).send({
                    status: true,
                    message: "User created successfully.",
                    data: lodash_1.default.pick(user, [
                        "name",
                        "email",
                        "_id",
                    ]),
                });
            }
            catch (error) {
                return res.status(200).send({
                    status: false,
                    message: error.message,
                    data: [],
                });
            }
        });
    }
}
exports.AuthController = AuthController;
