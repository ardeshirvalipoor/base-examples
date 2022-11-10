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
const path = require("path");
const configs_1 = require("../configs");
const express_typescript_base_1 = require("../express-typescript-base");
const jwjsonwebtokent = require("jsonwebtoken");
const db_1 = require("../services/db");
function getGoogleAuthUrl(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clientId = configs_1.default.google.GOOGLE_CLIENT_ID;
            const clientSecret = configs_1.default.google.GOOGLE_CLIENT_SECRET;
            const redirectUrl = req.protocol + '://' + req.headers.host + configs_1.default.google.GOOGLE_REDIRECT_URL;
            const scope = configs_1.default.google.GOOGLE_SCOPE;
            const url = express_typescript_base_1.base.services.auth.getGoogleUrl(clientId, clientSecret, redirectUrl, scope);
            res.end(url);
        }
        catch (error) {
            console.log(error);
            res.status(500).end('Something went wrong'); // Todo: handle error better
        }
    });
}
function getAuthRedirectUrl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.sendFile(path.join(__dirname + '/../public/auth.html'));
    });
}
function getGoogleCallBackUrl(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const profile = yield express_typescript_base_1.base.services.auth.getGoogleCallback(configs_1.default.google.GOOGLE_CLIENT_SECRET, req.protocol + '://' + req.headers.host + configs_1.default.google.GOOGLE_REDIRECT_URL, req.query['code']);
            var token = jwjsonwebtokent.sign({ email: profile.email.toLowerCase() }, configs_1.default.jwt.SECRET, { expiresIn: '30d', algorithm: 'RS256' });
            const today = new Date();
            const exp = new Date(today);
            exp.setDate(today.getDate() + 30);
            const roles = ['user'];
            const results = { exp: exp.getTime() / 1000, token, profile, roles };
            const possibleUser = yield db_1.default.findOne('users', { email: results.profile.email });
            if (!possibleUser) {
                yield db_1.default.save('users', Object.assign(Object.assign({}, results.profile), { at: new Date().toISOString() }));
                // Email user
            }
            res.json(results);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong' }); // Todo: handle error better
        }
    });
}
exports.default = {
    getGoogleAuthUrl,
    getAuthRedirectUrl,
    getGoogleCallBackUrl,
};
// Todo: use express-validator
// function generateToken(user) {
//     return jwt.sign(user, SECRET, {
//         expiresIn: 10080
//     })
// }
// function setUserInfo(request) {
//     return {
//         _id: request._id,
//         email: request.email,
//         role: request.role
//     }
// }
// export const emailLogin = async (req: Request, res: Response, next: NextFunction) => {
//     const { user, pass } = req.body
//     if (!user || !pass) {
//         return res.status(400).json({
//             message: 'All fields are required'
//         })
//     }
//     const loggedIn = await usersService.tryRegisterOrLoginUsingEmail(user.toLowerCase(), pass)
//     if (!loggedIn) {
//         return res.status(401).json({
//             message: 'Invalid credentials'
//         })
//     }
//     // const userInfo = setUserInfo(uuser)
//     res.status(200).json(loggedIn)
// }
// export const roleAuthorization = (roles) => {
//     return (req, res, next) => {
//         var user = req.user
//         user.findById(user._id, (err, foundUser) => {
//             if (err) {
//                 res.status(422).json({ error: 'No user found.' })
//                 return next(err)
//             }
//             if (roles.indexOf(foundUser.role) > -1) {
//                 return next()
//             }
//             res.status(401).json({ error: 'You are not authorized to view this content' })
//             return next('Unauthorized')
//         })
//     }
// }
