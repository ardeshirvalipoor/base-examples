"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (key, value = '', options = {}) => {
    // only works on dev
    if (process.env.NODE_ENV !== 'development') {
        return;
    }
    console.log(key, value);
};
exports.logger = logger;
