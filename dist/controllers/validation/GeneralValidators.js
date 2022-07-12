"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUUID = void 0;
const checkCharIsLowercaseLetter = (char) => {
    return char >= 'a' && char <= 'f';
};
const checkCharIsNumber = (str) => {
    return str >= '0' && str <= '9';
};
const checkHexString = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (!checkCharIsNumber(str[i]) && !checkCharIsLowercaseLetter(str[i])) {
            return false;
        }
    }
    return true;
};
const checkUUID = (str) => {
    const split = str.split("-");
    if (split.length !== 5) {
        return false;
    }
    const lengths = [8, 4, 4, 4, 12];
    for (let i = 0; i < lengths.length; i++) {
        if (split[i].length !== lengths[i]) {
            return false;
        }
        if (!checkHexString(split[i])) {
            return false;
        }
    }
    return true;
};
exports.checkUUID = checkUUID;
