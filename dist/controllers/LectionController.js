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
exports.LectionController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Lection_1 = __importDefault(require("../models/Lection"));
class LectionController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lections = yield Lection_1.default.find({ isDeleted: false }).populate("course");
                return res.status(200).send({
                    status: true,
                    message: "Lections lists.",
                    data: lections,
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
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.id;
                const lection = yield Lection_1.default.findOne({
                    _id: new mongoose_1.default.Types.ObjectId(id),
                }).populate("course");
                return res.status(200).send({
                    status: true,
                    message: "Lection by id.",
                    data: lection,
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const lection = yield Lection_1.default.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(id) }, { $set: { isDeleted: true } }, { new: true });
                return res.status(200).send({
                    status: true,
                    message: "Lection item deleted successfully.",
                    data: lection,
                });
            }
            catch (e) {
                return res.status(200).send({
                    status: false,
                    message: "Invalid Request.",
                    data: [],
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const lection = yield Lection_1.default.findOneAndUpdate({ _id: new mongoose_1.default.Types.ObjectId(payload.id) }, { $set: { status: payload.status } }, { new: true });
                return res.status(200).send({
                    status: true,
                    message: "Lection updated successfully.",
                    data: lection,
                });
            }
            catch (e) {
                return res.status(200).send({
                    status: false,
                    message: "Invalid Request.",
                    data: [],
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.body;
                const lection = yield Lection_1.default.create(payload);
                return res.status(200).send({
                    status: true,
                    message: "Lection create successfully.",
                    data: lection,
                });
            }
            catch (e) {
                return res.status(200).send({
                    status: false,
                    message: "Invalid Request.",
                    data: [],
                });
            }
        });
    }
}
exports.LectionController = LectionController;
