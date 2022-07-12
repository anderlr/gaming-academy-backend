"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInstructor = void 0;
/**
 * All fields needs to be sent
 * Name must have between 5 and 200 characters
 * Email needs to be a valid email
 * Password needs to have between 5 and 20 characters
 * Bio needs to have between 100 and 5000 characters
 * Avatar needs to be a URL
 *
 * @param instructor Instructor to be inserted
 */
const validateInstructor = (instructor) => {
    const { name, email, password, bio, avatar } = instructor;
    if (!name || !email || !password || !bio || !avatar) {
        return false;
    }
    if (name.length < 5 || name.length > 200) {
        return false;
    }
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(email)) {
        return false;
    }
    if (password.length < 5 || password.length > 20) {
        return false;
    }
    if (password.match(/[0-9]{3,}/)) {
        return false;
    }
    if (password.match(/^[^a-zA-Z0-9]$/)) {
        return false;
    }
    if (bio.length < 100 || bio.length > 5000) {
        return false;
    }
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (!urlRegex.test(avatar)) {
        return false;
    }
    return true;
};
exports.validateInstructor = validateInstructor;
