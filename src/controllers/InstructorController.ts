import _ from "lodash";
import Bcrypt from "bcryptjs";
import { Request, Response } from "express";

import Instructor from "../models/Instructor";

import { validateLogin } from "./validation/AuthValidators";
import { validateRegister } from "./validation/RegistrationValidators";

import { createJwtAuthToken, verifyToken } from "../utils/helper";
import { JwtPayload } from "jsonwebtoken";

export class InstructorController {
  public async login(req: Request, res: Response) {
    try {
      const body = req.body;
      const { errors, isValid } = validateLogin(body);

      if (!isValid) {
        return res
          .status(400)
          .json({ status: false, message: "error", errors: errors });
      }

      const user = await Instructor.findOne(
        { email: body.email },
        { createdAt: 0, updateAt: 0 }
      );
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "Login email not found",
          data: {},
        });
      }

      const passwordCheck = await Bcrypt.compare(body.password, user.password);
      if (!passwordCheck) {
        return res.status(400).json({
          status: false,
          message: "Wrong password",
          data: {},
        });
      }

      const token = createJwtAuthToken(user, true);

      const users = await Instructor.findOne(
        { _id: user._id },
        {
          createdAt: 0,
          updateAt: 0,
          roles: 0,
          password: 0,
          status: 0,
          forgetPasswordToken: 0,
        }
      );

      await Instructor.findOneAndUpdate(
        { _id: user._id },
        { $set: { forgetPasswordToken: "" } }
      );

      return res.status(200).send({
        status: true,
        message: "Logged-in successfully.",
        data: { token, user: users },
      });
    } catch (error: any) {
      console.log(error);
      return res.status(200).send({
        status: false,
        message: error.message,
        data: [],
      });
    }
  }

  public async authenticate(req: Request, res: Response) {
    const token = _.get(req, "headers.authorization", false);
    if (!token) {
      return res.status(200).send({
        status: false,
        message: "Token Not Provided.",
        data: [],
      });
    }

    const decode = verifyToken(token) as JwtPayload;
    if (!decode) {
      return res.status(400).send({
        status: false,
        message: "Token expire. Please Login Again.",
        data: [],
      });
    }

    const user = await Instructor.findOne(
      { _id: decode._id, status: true },
      {
        createdAt: 0,
        updateAt: 0,
        roles: 0,
        password: 0,
        status: 0,
        forgetPasswordToken: 0,
      }
    );

    if (user) {
      const token = createJwtAuthToken(user, false);
      return res.status(200).send({
        status: true,
        message: "ok",
        data: user,
        token: token,
      });
    } else {
      return res.status(400).send({
        status: false,
        message: "Token expire. Please Login Again.",
        data: [],
      });
    }
  }

  public async registration(req: Request, res: Response) {
    try {
      const body = req.body;
      const { errors, isValid } = validateRegister(body);
      if (!isValid) {
        return res
          .status(400)
          .json({ status: false, message: "error", errors: errors });
      }

      let user = await Instructor.findOne({ email: body.email });
      if (user) {
        return res.status(200).send({
          status: false,
          message: "User already exists",
          data: [],
        });
      }

      const salt = await Bcrypt.genSalt(10);
      body.password = await Bcrypt.hash(body.password, salt);
      user = await Instructor.create(body);
      
      return res.status(200).send({
        status: true,
        message: "User created successfully.",
        data: _.pick(user, [
          "name",
          "email",
          "bio",
          "avatar",
          "_id",
        ]),
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
