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
const { google } = require('googleapis');
const getGoogleUrl = (id, secret, burl, scope) => {
    const oauth2Client = new google.auth.OAuth2(id, secret, burl);
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope
    });
    return url;
};
// export const getRedirectUrl = async (req, res) => { // Should be moved to the controller
//     res.sendFile(path.join(__dirname + '/../public/app/auth.html'))
// }
const getGoogleCallback = (id, secret, burl, code) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const oauth2Client = new google.auth.OAuth2(id, secret, burl, code);
            const { tokens } = yield oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);
            var oauth2 = google.oauth2({
                auth: oauth2Client,
                version: 'v2'
            });
            const { data } = yield oauth2.userinfo.get();
            resolve(data);
        }
        catch (error) {
            reject(error);
        }
    }));
};
// export const roleAuthorization = (roles) => {
//     return (req, res, next) => {
//         var user = req.user
//         /*         dummyUser.findById(user._id, (err, foundUser) => {
//                     if (err) {
//                         res.status(422).json({ error: 'No user found.' });
//                         return next(err);
//                     }
//                     if (roles.indexOf(foundUser.role) > -1) {
//                         return next();
//                     }
//                     res.status(401).json({ error: 'You are not authorized to view this content' });
//                     return next('Unauthorized');
//                 }); */
//     }
// }
exports.default = {
    getGoogleUrl,
    getGoogleCallback
};
