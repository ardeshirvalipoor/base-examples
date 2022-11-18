"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jwt = require("jsonwebtoken");
function authenticateToken(JWT_SECRET) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                errors: [
                    {
                        msg: 'Token not found',
                    },
                ],
            });
        }
        try {
            const user = jwt.verify(token, JWT_SECRET);
            req['user'] = { email: user.email };
            next();
        }
        catch (err) {
            res.status(403).json({
                errors: [
                    {
                        msg: 'Token is not valid',
                    },
                ],
            });
        }
    });
}
exports.authenticateToken = authenticateToken;
