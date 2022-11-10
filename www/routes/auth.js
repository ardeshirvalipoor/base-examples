"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
let router = (0, express_1.Router)();
router.get('/google', controllers_1.default.auth.getGoogleAuthUrl);
router.get('/google/redirect', controllers_1.default.auth.getAuthRedirectUrl);
router.get('/google/callback', controllers_1.default.auth.getGoogleCallBackUrl);
exports.default = router;
