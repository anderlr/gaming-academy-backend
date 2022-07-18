"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const AuthController_1 = require("../controllers/AuthController");
const InstructorController_1 = require("../controllers/InstructorController");
const CourseController_1 = require("../controllers/CourseController");
class Routes {
    constructor() {
        this.authController = new AuthController_1.AuthController();
        this.instructorController = new InstructorController_1.InstructorController();
        this.courseController = new CourseController_1.CourseController();
    }
    routes(app) {
        app.route("/").get((req, res) => {
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
exports.Routes = Routes;
