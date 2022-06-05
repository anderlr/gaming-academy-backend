"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createJwtAuthToken = exports.isEmpty = exports.randomString = void 0;
const lodash_1 = __importDefault(require("lodash"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const randomString = (length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
exports.randomString = randomString;
const isEmpty = (value) => {
    return (value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0));
};
exports.isEmpty = isEmpty;
const createJwtAuthToken = (user, instructor) => {
    const contents = {
        _id: lodash_1.default.get(user, "_id", ""),
        name: lodash_1.default.get(user, "name", ""),
        instructor,
        createdAt: Date.now(),
    };
    const token = jsonwebtoken_1.default.sign(contents, "JWT_TOKEN_KEY", {
        expiresIn: "365d",
    });
    return token;
};
exports.createJwtAuthToken = createJwtAuthToken;
const verifyToken = (token) => {
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, "JWT_TOKEN_KEY");
        return decodedToken;
    }
    catch (error) {
        console.log({ error });
        return false;
    }
};
exports.verifyToken = verifyToken;
