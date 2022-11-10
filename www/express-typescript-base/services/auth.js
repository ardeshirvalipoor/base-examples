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
const googleapis_1 = require("googleapis");
function getGoogleUrl(clientId, clientSecret, redirectUrl, scope) {
    const oauth2Client = new googleapis_1.google.auth.OAuth2(clientId, clientSecret, redirectUrl);
    const url = oauth2Client.generateAuthUrl({ access_type: 'offline', scope });
    return url;
}
function getGoogleCallback(clientSecret, redirectUrl, code) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const oauth2Client = new googleapis_1.google.auth.OAuth2(clientSecret, redirectUrl, code);
            const { tokens } = yield oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);
            var oauth2 = googleapis_1.google.oauth2({ auth: oauth2Client, version: 'v2' });
            const { data } = yield oauth2.userinfo.get();
            return data;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.default = {
    getGoogleUrl,
    getGoogleCallback
};