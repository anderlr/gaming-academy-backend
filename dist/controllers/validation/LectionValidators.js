"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLection = void 0;
/**
 * All fields needs to be sent
 * Curse needs to be a UUID
 * Name needs to have between 5 and 200 characters
 * Description needs to have between 100 and 5000 characters
 * Video needs to be a URL
 * Duration needs to be between 60 and 3600
 *
 * @param lection Lection to be inserted
 */
const validateLection = (lection) => {
    const { course, name, description, video, duration } = lection;
    if (!course || !name || !description || !video || !duration) {
        return false;
    }
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    if (!uuidRegex.test(course)) {
        return false;
    }
    if (name.length < 5 || name.length > 200) {
        return false;
    }
    if (description.length < 100 || description.length > 5000) {
        return false;
    }
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (!urlRegex.test(video)) {
        return false;
    }
    if (duration < 60 || duration > 3600) {
        return false;
    }
    return true;
};
exports.validateLection = validateLection;
