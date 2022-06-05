import { Request, Response } from "express";
import mongoose from "mongoose";
import _ from "lodash";

import Lection from "../models/Lection";
import Course from "../models/Course";

export class LectionController {
  public async getAll(req: Request, res: Response) {
    try {
      const lections = await Lection.find({ isDeleted: false }).populate("course");
      return res.status(200).send({
        status: true,
        message: "Lections lists.",
        data: lections,
      });
    } catch (error: any) {
      return res.status(200).send({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const lection = await Lection.findOne({
        _id: new mongoose.Types.ObjectId(id as string),
      }).populate("course");

      return res.status(200).send({
        status: true,
        message: "Lection by id.",
        data: lection,
      });
    } catch (error: any) {
      return res.status(200).send({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const lection = await Lection.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { isDeleted: true } },
        { new: true }
      );

      return res.status(200).send({
        status: true,
        message: "Lection item deleted successfully.",
        data: lection,
      });
    } catch (e) {
      return res.status(200).send({
        status: false,
        message: "Invalid Request.",
        data: [],
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const payload = req.body;

      const lection = await Lection.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(payload.id) },
        { $set: { status: payload.status } },
        { new: true }
      );
      return res.status(200).send({
        status: true,
        message: "Lection updated successfully.",
        data: lection,
      });
    } catch (e) {
      return res.status(200).send({
        status: false,
        message: "Invalid Request.",
        data: [],
      });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const payload = req.body;

      const lection = await Lection.create(payload);

      return res.status(200).send({
        status: true,
        message: "Lection create successfully.",
        data: lection,
      });
    } catch (e) {
      return res.status(200).send({
        status: false,
        message: "Invalid Request.",
        data: [],
      });
    }
  }
}
