"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCourse = void 0;
/**
 * All fields needs to be sent
 * Instructor needs to be a UUID
 * Name needs to have between 5 and 200 characters
 * Description needs to have between 100 and 5000 characters
 * Image needs to be a URL
 * Duration needs to be between 60 and 36000
 *
 * @param course Course to be inserted
 */
const validateCourse = (course) => {
    const { instructor, name, description, image, duration } = course;
    if (!instructor || !name || !description || !image || !duration) {
        return false;
    }
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    if (!uuidRegex.test(instructor)) {
        return false;
    }
    if (name.length < 5 || name.length > 200) {
        return false;
    }
    if (description.length < 100 || description.length > 5000) {
        return false;
    }
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (!urlRegex.test(image)) {
        return false;
    }
    if (duration < 60 || duration > 36000) {
        return false;
    }
    return true;
};
exports.validateCourse = validateCourse;
