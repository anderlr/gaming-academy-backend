import { Request, Response } from "express";
import mongoose from "mongoose";
import _ from "lodash";

import Course from "../models/Course";
import User from "../models/User";

export class CourseController {
  public async getAll(req: Request, res: Response) {
    try {
      const courses = await Course.find({ isDeleted: false }).populate(["instructor", "lections"]);
      return res.status(200).send({
        status: true,
        message: "Courses lists.",
        data: courses,
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
      const id = req.params.id;
      const course = await Course.findOne({
        _id: new mongoose.Types.ObjectId(id as string),
      }).populate(["instructor", "lections"]);

      return res.status(200).send({
        status: true,
        message: "Course by id.",
        data: course,
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

      const course = await Course.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { isDeleted: true } },
        { new: true }
      );

      return res.status(200).send({
        status: true,
        message: "Course item deleted successfully.",
        data: course,
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

      const course = await Course.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(payload.id) },
        { $set: { status: payload.status } },
        { new: true }
      );
      return res.status(200).send({
        status: true,
        message: "Course updated successfully.",
        data: course,
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

      const course = await Course.create(payload);
      return res.status(200).send({
        status: true,
        message: "Course create successfully.",
        data: course,
      });
    } catch (e: any) {
      return res.status(200).send({
        status: false,
        message: e.message,
        data: [],
      });
    }
  }

  public async getCourseByUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;

      const user = await User.findById(userId).populate(["courses"]);

      return res.status(200).send({
        status: true,
        message: "Courses lists.",
        data: user.courses,
      });
    } catch (error: any) {
      return res.status(200).send({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  public async addCourseToUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const courseId = req.params.courseId;

      const user = await User.findById(userId);

      user.courses.push(courseId);
      await user.save();

      return res.status(200).send({
        status: true,
        message: "Course added successfully.",
        data: user,
      });
    } catch (error: any) {
      return res.status(200).send({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }
}
