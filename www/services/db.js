"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs");
const express_typescript_base_1 = require("../express-typescript-base");
exports.default = express_typescript_base_1.base.services.mongodb(configs_1.default.db.MONGODB_URI, configs_1.default.db.DB_NAME);
