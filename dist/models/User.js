"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: String,
    courses: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "course" }],
}, { timestamps: true, versionKey: false });
exports.default = mongoose_1.default.model("user", schema);
