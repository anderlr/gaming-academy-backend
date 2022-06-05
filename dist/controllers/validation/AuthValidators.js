"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const validator_1 = __importDefault(require("validator"));
const helper_1 = require("../../utils/helper");
const validateLogin = (data) => {
    let errors = {};
    data.email = !(0, helper_1.isEmpty)(data.email) ? data.email : "";
    data.password = !(0, helper_1.isEmpty)(data.password) ? data.password : "";
    if (!validator_1.default.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (validator_1.default.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    if (!validator_1.default.isLength(data.password, { min: 4, max: 30 })) {
        errors.password = "Password must have 4 chars";
    }
    if (validator_1.default.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    return {
        errors,
        isValid: (0, helper_1.isEmpty)(errors),
    };
};
exports.validateLogin = validateLogin;
