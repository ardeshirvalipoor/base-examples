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
exports.verifyClient = exports.handleWsConnection = exports.handleWSS = exports.CLIENTS = void 0;
const emitter_1 = require("./emitter");
exports.CLIENTS = new Map();
function handleWSS(wss) {
    wss.on('connection', handleWsConnection);
    wss.on('error', (err) => console.log('wss faced an error', err));
    wss.on('close', (err) => console.log('wss closed', err));
    wss.on('listening', () => console.log('wss listening'));
}
exports.handleWSS = handleWSS;
function handleWsConnection(ws, req) {
    return __awaiter(this, void 0, void 0, function* () {
        ws.on('open', data => console.log('onpoen', data));
        ws.on('upgrade', data => console.log('upgrade', data));
        // ws.on('message', handleMessage(ws))
        ws.on('message', (data) => emitter_1.emitter.emit('ws-message', ws, data));
        ws.on('close', handleClose(ws));
    });
}
exports.handleWsConnection = handleWsConnection;
function handleClose(ws) {
    return function () {
        return __awaiter(this, void 0, void 0, function* () {
            exports.CLIENTS.delete(ws['email']);
            exports.CLIENTS.forEach(client => {
                var _a;
                (_a = client.send) === null || _a === void 0 ? void 0 : _a.call(client, JSON.stringify({ type: 'status', _id: ws['email'], status: 'offline' }));
            });
        });
    };
}
function verifyClient(info, done) {
    return __awaiter(this, void 0, void 0, function* () {
        // done(false, 401, 'Unauthorized')
        done(true);
    });
}
exports.verifyClient = verifyClient;
