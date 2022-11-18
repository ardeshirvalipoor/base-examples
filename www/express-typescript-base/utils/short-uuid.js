"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortUUID = void 0;
function shortUUID() {
    return (Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)).slice(-12);
}
exports.shortUUID = shortUUID;
