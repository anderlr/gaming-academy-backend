"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// create a schema
var lectionSchema = new mongoose_1.default.Schema({
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    video: { type: String, default: "" },
    duration: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
}, {
    // Automatically include createdAt and updatedAt field
    timestamps: true,
    versionKey: false
});
exports.default = mongoose_1.default.model("lection", lectionSchema);
