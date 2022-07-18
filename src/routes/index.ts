import { Request, Response } from "express";
import { AuthController } from "../controllers/AuthController";
import { InstructorController } from "../controllers/InstructorController";
import { CourseController } from "../controllers/CourseController";
export class Routes {
  public authController: AuthController = new AuthController();
  public instructorController: InstructorController = new InstructorController();
  public courseController: CourseController = new CourseController();

  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Server is running",
      });
    });

    app.route("/api/v1/user/login").post(this.authController.login);
    app.route("/api/v1/user/me").get(this.authController.authenticate);
    app.route("/api/v1/user/registration").post(this.authController.registration);

    app.route("/api/v1/instructor/login").post(this.instructorController.login);
    app.route("/api/v1/instructor/me").get(this.instructorController.authenticate);
    app.route("/api/v1/instructor/registration").post(this.instructorController.registration);

    app.route("/api/v1/course/getAll").get(this.courseController.getAll);
    app.route("/api/v1/course/getById/:id").get(this.courseController.getById);
    app.route("/api/v1/course/create").post(this.courseController.create);
    app.route("/api/v1/course/update").get(this.courseController.update);
    app.route("/api/v1/course/delete/:id").get(this.courseController.delete);
    app.route("/api/v1/course/getByUser/:id").get(this.courseController.getCourseByUser);
    app.route("/api/v1/course/addToUser/:courseId/:userId").post(this.courseController.addCourseToUser);

    app.route("/api/v1/course/getAll").get(this.courseController.getAll);
    app.route("/api/v1/course/getById/:id").get(this.courseController.getById);
    app.route("/api/v1/course/create").post(this.courseController.create);
    app.route("/api/v1/course/update").get(this.courseController.update);
    app.route("/api/v1/course/delete/:id").get(this.courseController.delete);
  }
}
