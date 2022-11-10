'use strict';

function texter(base) {
    return {
        // Todo: use text node, not innerHTML... ghostify not working with it
        text: function (content) {
            if (content === void 0) { content = ''; }
            base.el.textContent = content;
        },
        html: function (content) {
            if (content === void 0) { content = ''; }
            base.el.innerHTML = content;
        }
    };
}

var idGenerator = function (id) {
    if (id === void 0) { id = 0; }
    return function () { return (id++).toString(); };
};
var nextId = idGenerator();

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var _emitter = function () {
    var _listeners = {};
    function on(event, handler) {
        if (!_listeners[event])
            _listeners[event] = [];
        _listeners[event].push(handler);
    }
    function once(event, handler) {
        var onceFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            handler.apply(void 0, __spreadArray([], __read(args), false));
            off(event, onceFunction);
        };
        on(event, onceFunction);
    }
    function off(event, handler) {
        _listeners[event] = (_listeners[event] || []).filter(function (e) { return e !== handler; });
    }
    function emit(event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        (_listeners[event] || []).map(function (e) { return e.apply(void 0, __spreadArray([], __read(params), false)); });
    }
    function removeAllListeners() {
        _listeners = {};
    }
    return {
        on: on,
        once: once,
        off: off,
        emit: emit,
        listeners: _listeners,
        removeAllListeners: removeAllListeners
    };
};
var _emitter$1 = _emitter();

function observe(el) {
    var em = _emitter();
    var observer = new MutationObserver(function (mutations) {
        var e_1, _a;
        try {
            for (var mutations_1 = __values(mutations), mutations_1_1 = mutations_1.next(); !mutations_1_1.done; mutations_1_1 = mutations_1.next()) {
                var mutation = mutations_1_1.value;
                mutation.addedNodes.forEach(function (node) {
                    if (node instanceof HTMLElement) {
                        var id = node === null || node === void 0 ? void 0 : node.getAttribute('data-base-id');
                        em.emit('mutate', id);
                    }
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (mutations_1_1 && !mutations_1_1.done && (_a = mutations_1.return)) _a.call(mutations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // observer.disconnect()
    });
    observer.observe(el, { childList: true });
    return em;
}

var appender = (function (base) {
    var children = [];
    var o = observe(base.el);
    o.on('mutate', function (id) {
        var found = children.find(function (c) { return c.id === id; });
        found === null || found === void 0 ? void 0 : found.emit('mounted', id);
    });
    // .then(nodes => {
    // nodes.forEach(node => {
    //     const id = node?.getAttribute('data-base-id')
    //     const found = children.find(c => c.id === id)
    //     found?.emit('mounted', id)
    // })
    // })
    return {
        children: children,
        append: function () {
            var e_1, _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                    var c = args_1_1.value;
                    base.el.appendChild(c.el);
                    children.push(c);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return base;
        },
        appendBefore: function (component) {
            var e_2, _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            try {
                for (var args_2 = __values(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
                    var c = args_2_1.value;
                    base.el.insertBefore(c.el, component.el);
                    children.unshift(c); // Todo: check if this is correct
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return base;
        },
        prepend: function () {
            var e_3, _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                for (var args_3 = __values(args), args_3_1 = args_3.next(); !args_3_1.done; args_3_1 = args_3.next()) {
                    var c = args_3_1.value;
                    base.el.insertBefore(c.el, base.el.childNodes[0]);
                    children.unshift(c);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (args_3_1 && !args_3_1.done && (_a = args_3.return)) _a.call(args_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return base;
        },
        remove: function () {
            children.forEach(function (child) { return child.remove(); });
            base.removeAllListeners();
            base.el.remove();
        },
        empty: function () {
            children.forEach(function (child) { return child.remove(); });
            children = [];
        },
    };
});

var STYLE_DB = {};
var STYLE_EL = document.createElement('style');
document.head.appendChild(STYLE_EL);
var styler = (function (base) { return ({
    style: function (style, options) {
        var delay = typeof options === 'number' ? options : options === null || options === void 0 ? void 0 : options.delay;
        typeof delay === 'number' ? setTimeout(applyStyle, delay) : applyStyle();
        return base;
        function applyStyle() {
            Object.keys(style).forEach(function (s) {
                base.el.style[s] = typeof style[s] == 'function' ? style[s]() : style[s];
            });
        }
    },
    cssClass: function (style, options) {
        // Todo: urgent fix
        // TODO: check multiple classes
        var delay = typeof options === 'number' ? options : options === null || options === void 0 ? void 0 : options.delay;
        typeof delay === 'number' ? setTimeout(applyCssClass, delay) : applyCssClass();
        return base;
        function applyCssClass() {
            var _a = generateStyleString(), name = _a.name, styleString = _a.styleString;
            var nameReg = new RegExp(name, 'g');
            var key = styleString.replace(nameReg, '');
            if (STYLE_DB[key]) {
                base.el.classList.add(STYLE_DB[key]);
                return;
            }
            STYLE_DB[key] = name;
            STYLE_EL.innerHTML += ".".concat(name, "{").concat(styleString, "}");
            base.el.classList.add(name);
        }
        function generateStyleString() {
            var styleString = '';
            var name = 'style-' + base.id + '-' + Math.floor(Math.random() * 100000);
            Object.keys(style).sort(function (a, b) {
                if (a.match(/\&.*|\@/) && !b.match(/\&.*|\@/))
                    return 1;
                if (!a.match(/\&.*|\@/) && b.match(/\&.*|\@/))
                    return -1;
                return 0;
            }).forEach(function (prop) {
                if (prop.includes('&')) {
                    var key = prop.slice(1);
                    var body = generateStyle(style[prop]);
                    styleString += '}.' + name + key + '{' + body;
                }
                else if (prop.includes('@')) {
                    var body = generateStyle(style[prop]);
                    styleString += '}' + prop + '{.' + name + '{' + body + '}';
                }
                else {
                    styleString += getPropValueLine(prop, style);
                }
            });
            return { name: name, styleString: styleString };
        }
        function generateStyle(obj) {
            return Object.keys(obj).reduce(function (body, o) { return body + getPropValueLine(o, obj); }, '');
        }
        function getPropValueLine(prop, obj) {
            var snake = prop.replace(/[A-Z]/g, function (w) { return "-".concat(w.toLowerCase()); });
            var value = typeof obj[prop] == 'function' ? obj[prop]() : obj[prop];
            return ((value === null || value === void 0 ? void 0 : value.toString()) || 'unset').split(';').map(function (v) { return "".concat(snake, ":").concat(v, ";"); }).join('');
        }
    }
}); });

var ldb = {
    get: function (key) {
        var raw = String(localStorage.getItem(key));
        try {
            return JSON.parse(raw);
        }
        catch (err) {
            return raw;
        }
    },
    save: function (value, key) {
        if (typeof value == 'object')
            value = JSON.stringify(value);
        if (typeof value != 'string')
            value = value === null || value === void 0 ? void 0 : value.toString();
        if (key) {
            localStorage.setItem(key, value);
            return value;
        }
        return {
            value: value,
            as: function (key) {
                localStorage.setItem(key, value);
            }
        };
    }
};

var THEME = ldb.get('BASE_APP_THEME');
function Base(name) {
    if (name === void 0) { name = 'div'; }
    var id = nextId();
    var el = document.createElement(name);
    el.setAttribute('data-base-id', id);
    var base = { id: id, el: el };
    if (THEME)
        base.el.classList.toggle(THEME);
    _emitter$1.on('theme-changed', function (theme) { return base.el.classList.toggle(theme); });
    return Object.assign(base, _emitter(), appender(base), styler(base));
}

var Div = function (content) {
    if (content === void 0) { content = ''; }
    var base = Base('div');
    base.el.innerHTML = content;
    return Object.assign(base, texter(base));
};

var View = function () {
    var base = Div(); // Fragment later
    base.cssClass({
        position: 'relative',
        right: '0',
        height: '100vh',
        overflow: 'hidden',
        width: '100vw',
        maxWidth: '425px',
    });
    return base;
};

var waitFor = function (time) {
    return new Promise(function (resolve) { return setTimeout(resolve, time, true); });
};

var ABSOLUTE = {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
};
var HIDE = {
    opacity: '0',
    pointerEvents: 'none'
};
var SHOW = {
    opacity: '1',
    pointerEvents: 'inherit'
};
var CENTER = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};
var ROUND = {
    borderRadius: '50%'
};
var Y = function (y) { return ({
    transform: "translateY(".concat(y, "px)"),
}); };
var S = function (s) { return ({
    transform: "scale(".concat(s, ")"),
}); };
var EASE = function (time, props, type) {
    if (props === void 0) { props = 'all'; }
    if (type === void 0) { type = ''; }
    return ({
        transition: "".concat(props, " ").concat(time, "s ").concat(type),
    });
};
var WH = function (d1, d2) {
    if (typeof d1 == 'number')
        d1 = d1.toString() + 'px';
    if (typeof d2 == 'number')
        d2 = d2.toString() + 'px';
    return {
        width: d1,
        height: d2 || d1
    };
    // transition: `${props} ${time}s ${type}`,
};

var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    });
    var nil = function () { };
    window.addEventListener('error', nil, opts);
    window.removeEventListener('error', nil, opts);
}
catch (e) {
    console.log({ e: e });
}
var PASSIVE = supportsPassive ? { passive: true } : false;

var Ghost = function (options) {
    if (options === void 0) { options = {}; }
    var base = Base('div');
    var opts = __assign({ opacity: .15, bg: '#00000055', bgDark: '#ffffff', size: 48 }, options);
    base.cssClass(__assign(__assign(__assign(__assign({}, HIDE), WH(opts.size)), ROUND), { backgroundColor: opts.bg, position: 'absolute', willChange: 'transform,opacity', transformOrigin: 'center', pointerEvents: 'none', '&.dark': {
            backgroundColor: opts.bgDark,
        } }));
    var touchStartTime = 0;
    return Object.assign(base, {
        activate: function (x, y) {
            touchStartTime = new Date().valueOf();
            base.style(__assign(__assign(__assign({}, EASE(0)), S(0)), { left: x - opts.size / 2 + 'px', top: y - opts.size / 2 + 'px' }));
            base.style(__assign(__assign(__assign({}, EASE(.06)), S(2)), { opacity: '.2' }), 5);
        },
        deactivate: function () {
            base.style(__assign({}, S(2)));
            base.style(__assign(__assign(__assign({}, EASE(.36)), HIDE), S(3)), 100 - new Date().valueOf() + touchStartTime);
        }
    });
};
var ghostify = function (c, options) {
    if (options === void 0) { options = {}; }
    var ghost = Ghost(options);
    c.el.addEventListener('touchstart', function (e) {
        var _a = c.el.getBoundingClientRect(), x = _a.x, y = _a.y;
        var _b = e.touches[0], pageX = _b.pageX, pageY = _b.pageY;
        ghost.activate(pageX - x, pageY - y);
        // c.style(opts.activeStyle)
    }, PASSIVE);
    c.el.addEventListener('touchend', function () {
        ghost.deactivate();
        // c.style(opts.normalStyle)
    }, PASSIVE);
    c.el.addEventListener('touchcancel', function () {
        ghost.deactivate();
        // c.style(opts.normalStyle)
    }, PASSIVE);
    c.append(ghost);
};

var router = (function () {
    var _routes = [];
    // let _isBusy = false
    var _root = '';
    var _current;
    var _container;
    var _currentPages = [];
    function when(path, handler) {
        // parse params: Example: replace /:id with /([^/]+) per placeholder
        var paramMatch = new RegExp(':([^/]+)', 'g');
        var route = {
            path: path,
            handler: handler,
            params: {},
            reg: new RegExp('^' + _root + path.replace(paramMatch, '[^/]+') + '$'),
            page: undefined
        };
        var match;
        while ((match = paramMatch.exec(path)) !== null) {
            // converts /:param1/test/:param2 to /([^/]+)/test/[^/]+ for example
            var _a = __read(match, 2), replacer = _a[0], param = _a[1];
            var paramReg = path.replace(replacer, '([^/]+)').replace(/(:[^/]+)/g, '[^/]+');
            route.params[param] = new RegExp(paramReg);
        }
        _routes.push(route);
    }
    function back(data) {
        // if (_isBusy) return
        window.history.back();
        setTimeout(function () {
            history.replaceState(data, '', ''); // Todo: fix
        }, 10);
        console.log('back', history.state);
    }
    function replace(to, data) {
        if (to === void 0) { to = ''; }
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                window.history.replaceState({ data: data, to: to }, '', to);
                return [2 /*return*/];
            });
        });
    }
    function goto(to, data) {
        if (to === void 0) { to = ''; }
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var from;
            return __generator(this, function (_a) {
                from = location.pathname;
                window.history.pushState({ data: data, to: to, from: from }, '', _root + to);
                navigate(_root + to, data, from);
                return [2 /*return*/];
            });
        });
    }
    function navigate(to, data, from) {
        if (to === void 0) { to = ''; }
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                if (to.includes('tel:'))
                    return [2 /*return*/];
                found = _routes.find(function (route) { return route.reg.exec(to.split('?')[0]); });
                if (found) {
                    // Todo: 404calling transit through handler
                    // Todo: fix 
                    found.handler({ params: parseParams(found), query: parseQuery(), from: from, to: to.replace(_root, ''), data: data });
                    // return
                }
                _emitter$1.emit('route-changed', to.replace(_root, ''), { to: to, from: from, data: data });
                return [2 /*return*/];
            });
        });
    }
    function transit(route, P, routeParams) {
        return __awaiter(this, void 0, void 0, function () {
            var p, next;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        while (_currentPages.length) {
                            p = _currentPages.pop();
                            p.exit(__assign({ from: location.pathname, to: route.replace('/' + _root, '') }, routeParams));
                        }
                        next = _routes.find(function (_route) {
                            return _route.reg.test(_root + route);
                        });
                        if (!next) {
                            console.log('404', { next: next, _root: _root, route: route });
                            // Todo: 404
                            return [2 /*return*/];
                        }
                        if (!next.page) {
                            next.page = P();
                            _container.append(next.page);
                        }
                        return [4 /*yield*/, next.page.enter(__assign({ from: location.pathname, to: route }, routeParams))];
                    case 1:
                        _a.sent();
                        _currentPages.unshift(next.page);
                        next.page.emit('enter', __assign({ from: location.pathname, to: route }, routeParams));
                        _current = _root + route;
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleClickOnLinks(e) {
        e.preventDefault();
        e.stopPropagation();
        var possibleLink = findPossibleLink(e);
        if (!possibleLink) {
            return;
        }
        if (possibleLink.href.includes('tel:')) {
            window.location.href = possibleLink.href;
            return;
        }
        if (possibleLink.href.includes('mailto:')) {
            window.location.href = possibleLink.href;
            return;
        }
        if (possibleLink.target !== '_self') {
            window.open(possibleLink.href, possibleLink.target);
        }
        if (possibleLink === '/' || possibleLink.href.indexOf(location.origin) == 0 || /(\/|^)\w+\.\w+/.test(possibleLink.href) == false) {
            var route = possibleLink.href.replace(location.origin, '');
            // if (route.charAt(0) != '/') route = '/' + route
            goto(route);
        }
        else {
            window.open(possibleLink.href, possibleLink.target);
        }
    }
    function init(_a) {
        var _this = this;
        var routes = _a.routes, view = _a.view, _b = _a.root, root = _b === void 0 ? '' : _b, _c = _a.home, home = _c === void 0 ? location.pathname : _c;
        _root = root;
        _container = view;
        Object.entries(routes).map(function (_a) {
            var _b = __read(_a, 2), route = _b[0], Page = _b[1];
            when(route, function (routeParams) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, transit(route, Page, routeParams)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            }); }); }); //66
        });
        setTimeout(function () {
            goto(home.replace(root, '') || '/');
        }, 300); // Todo use default page transition
        window.addEventListener('popstate', function (event) {
            var _a;
            navigate(location.pathname, (_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.data, _current);
        }, PASSIVE);
        window.addEventListener('click', handleClickOnLinks);
    }
    return {
        back: back,
        when: when,
        replace: replace,
        goto: goto,
        init: init
    };
})();
function parseParams(found) {
    return Object.entries(found.params).reduce(function (p, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], reg = _c[1];
        p[key] = (_b = location.pathname.match(reg)) === null || _b === void 0 ? void 0 : _b[1];
        return p;
    }, {});
}
function parseQuery() {
    var q = location.search;
    if (!q)
        return {};
    return q.split(/&|\?/).reduce(function (query, item) {
        var _a = __read(item.split('='), 2), key = _a[0], value = _a[1];
        if (key)
            query[key] = value;
        return query;
    }, {});
}
function findPossibleLink(e) {
    if (!e.target)
        return undefined;
    return findParent(e.target);
    // TODO: for touch handling
    function findParent(el) {
        if (!el)
            return undefined;
        if (el.getAttribute('href'))
            return { href: el.getAttribute('href'), target: el.getAttribute('target') };
        return findParent(el.parentElement);
        //TODO return target
    }
}

var MenuIconBar = function (height) {
    if (height === void 0) { height = 4; }
    var base = Base('div');
    base.cssClass({
        width: '100%',
        height: height + 'px',
        backgroundColor: '#000',
        opacity: '.9',
        transition: 'all .2s'
    });
    return base;
};

var colors = {
    BLUE: '#b5c9f0',
    RED: '#ff9cb7',
    GRAY: '#A9ABAE',
    GREEN: '#0b6365',
    DARK_GREEN: '#0d9aad',
    EXTRA_DARK_GREEN: '#0f7280' //'#1ca99e'//'#00d7c7',
};

var fonts = {
    SMALL: '12px',
    MEDIUM: '14px',
    LARGE: '16px',
    XLARGE: '18px',
    XXLARGE: '20px',
    XXXLARGE: '22px',
};

var images = {
    ICONS: {
        EDIT: '/images/edit-icon.svg',
        LOCK: '/images/lock.svg',
        CONFIRM: '/images/confirm-icon.svg',
        DELETE: '/images/trash.svg',
        CANCEL: '/images/cancel-icon.svg',
        ADD: '/images/add-icon.svg',
        DOWNLOAD: '/images/download-icon.svg',
        BACK: '/images/back-icon.svg',
        GOOGLE: '/images/google.svg',
        SPIRAL: '/images/google.svg',
        STAR: '/images/star-icon.svg',
        X: '/images/x-icon.svg'
    }
};

var regexes = {
    NUMBERS: /^[0-9]+$/,
};

var sizes = {
    MOBILE: 425,
    TABLET: 768,
    DESKTOP: 1024,
    WIDESCREEN: 1216,
    FULLHD: 1408,
    LEFT_MARGIN: 20,
    TOP_MARGIN: 9,
    ICON_WIDTH: 112
};

var xhr = {
    BASE_URL: 'http://localhost:3210/',
};

var configs = {
    colors: colors,
    sizes: sizes,
    xhr: xhr,
    regexes: regexes,
    fonts: fonts,
    images: images
};

var MenuIcon = function () {
    var height = 3;
    var base = Base();
    var top = MenuIconBar(height);
    var middle = MenuIconBar(height);
    var bottom = MenuIconBar(height);
    _emitter$1.on('route-changed', function (r) { return r.split('?')[0] === '/' ? show() : hide(); });
    base.el.onclick = function () {
        router.goto('/menu');
    };
    ghostify(base, { bg: 'white' });
    base.append(top, middle, bottom);
    base.cssClass(__assign(__assign({ 
        // backgroundColor: 'gray',
        width: '60px', height: '59px', padding: '20px', transition: 'all .16s', zIndex: '99999' }, CENTER), { flexDirection: 'column', justifyContent: 'space-between' }));
    function collapse() {
        top.style({
            top: '14px',
            right: '17px',
            transform: "rotateZ(-45deg)"
        });
        middle.style({
            right: '10px'
        });
        bottom.style({
            bottom: '14px',
            right: '17px',
            transform: "rotateZ(45deg)"
        });
    }
    function show() {
        base.style({
            opacity: '1',
            transform: 'translateY(0)'
        }, { delay: 100 });
    }
    function hide() {
        base.style({
            opacity: '0',
            transform: 'translateY(-60px)'
        });
    }
    function expand() {
        top.style({
            top: 11 + 'px',
            right: '10px',
            transform: "rotateZ(0deg)"
        });
        middle.style({
            top: (configs.sizes.TOP_MARGIN - 3 * height) / 2 + height + 10 + 'px',
            right: '14px'
        });
        bottom.style({
            bottom: 11 + 'px',
            right: '8px',
            transform: "rotateZ(0deg)"
        });
    }
    return __assign(__assign({}, base), { collapse: collapse, expand: expand });
};

var HomeHeader = function () {
    var base = Div();
    var menuIcon = MenuIcon();
    var logo = Div('Todo app');
    var shadow = Div();
    base.append(menuIcon, logo, shadow);
    logo.cssClass(__assign(__assign({ fontSize: '22px', color: '#333', display: 'flex' }, EASE(.24)), { '&.dark': {
            color: '#fff'
        } }));
    shadow.cssClass({
        boxShadow: '0 0 5px #00000000',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        height: '60px',
        transition: 'all .44s',
        pointerEvents: 'none',
    });
    base.cssClass({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'calc(66px + env(safe-area-inset-top))',
        padding: 'calc(0px + env(safe-area-inset-top)) 0 0',
        transition: 'all .44s',
        backgroundColor: '#fff',
        zIndex: '999999',
    });
    return Object.assign(base, {
        up: function () {
            base.style({ transform: 'translateY(calc(-76px - env(safe-area-inset-top)))' });
        },
        down: function () {
            base.style(__assign({}, Y(0)));
        },
        toggleShadow: function (v) {
            shadow.style({ boxShadow: v > 10 ? '0 0 5px #00000014' : '0 0 5px #00000000' });
        }
    });
};

function Scrollable(base) {
    base.el.addEventListener('scroll', onScroll, PASSIVE);
    // base.el.addEventListener('touchmove', onScroll, PASSIVE)
    function onScroll() {
        base.emit('scroll', Math.ceil(base.el.scrollTop), base.el.offsetHeight, base.el.scrollHeight);
        if (base.el.scrollHeight <= Math.ceil(base.el.scrollTop) + base.el.offsetHeight) {
            base.emit('scrolled-to-end');
        }
        if (base.el.scrollTop == 0) {
            base.emit('scrolled-to-top');
        }
    }
    return Object.assign(base, {
        scrollToBottom: function () {
            base.el.scrollTop = base.el.scrollHeight;
        }
    });
    // Todo: functional mentality?
    // Make it scrollable
}

var PageContents = function (adjustedHeight) {
    if (adjustedHeight === void 0) { adjustedHeight = 0; }
    var base = Scrollable(Base());
    base.cssClass({
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingRight: '20px',
        paddingBottom: '100px',
        paddingLeft: '20px',
        paddingTop: '20px',
        // maxWidth: '660px',
        margin: '0 auto',
        top: '0',
        backgroundColor: 'white',
        height: (window.innerHeight - adjustedHeight) + 'px',
        scrollBehavior: 'smooth',
        display: 'flex',
        flexDirection: 'column',
        zIndex: '1'
    });
    return base;
};

var styles = {
    PAGE_BASE_STYLE: __assign(__assign(__assign(__assign(__assign({}, EASE(.16)), HIDE), Y(60)), ABSOLUTE), { top: 'env(safe-area-inset-top)', zIndex: '9999', willChange: 'opacity,transform' }),
    PAGE_EXIT_STYLE: __assign(__assign({}, HIDE), Y(60)),
    PAGE_ENTER_STYLE: __assign(__assign({}, SHOW), Y(0)),
    PAGE_EXIT_UP_STYLE: __assign(__assign({}, HIDE), Y(-60)),
    PAGE_EXIT_DESKTOP: __assign(__assign({}, HIDE), Y(0)),
    PAGE_ENTER_DESKTOP: __assign(__assign({}, SHOW), Y(0)),
};

var helpers = {
    styles: styles
};

var HomePage = function () {
    var base = Div();
    var header = HomeHeader();
    var contents = PageContents();
    base.append(header, contents);
    contents.on('scroll', header.toggleShadow);
    base.cssClass(helpers.styles.PAGE_BASE_STYLE);
    function exit(_a) {
        _a.to;
        base.style(helpers.styles.PAGE_EXIT_UP_STYLE);
    }
    function enter(_a) {
        _a.query; _a.from; _a.to; _a.data;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, waitFor(200)];
                    case 1:
                        _b.sent();
                        base.style(helpers.styles.PAGE_ENTER_STYLE);
                        return [2 /*return*/];
                }
            });
        });
    }
    return Object.assign(base, { enter: enter, exit: exit });
};

var MenuPage = function () {
    var base = Div();
    base.append(Div('Todo app'));
    base.cssClass(__assign(__assign(__assign({}, ABSOLUTE), { padding: 'calc(env(safe-area-inset-top) + 22px) 60px', color: 'white', willChange: 'transform,opacity' }), HIDE));
    return __assign(__assign({}, base), { exit: function (_a) {
            _a.to;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_c) {
                    base.style(helpers.styles.PAGE_EXIT_STYLE);
                    return [2 /*return*/];
                });
            });
        }, enter: function (_a) {
            _a.from;
            base.style(helpers.styles.PAGE_ENTER_STYLE);
        } });
};

var BackIcon = function () {
    var height = 2;
    var base = Base('div');
    var top = MenuIconBar(height);
    var bottom = MenuIconBar(height);
    _emitter$1.on('route-changed', function (r) { return r == '/' ? hide() : show(); });
    base.el.onclick = function () { return router.back(); };
    top.style({
        bottom: '5px',
        width: '14px',
        backgroundColor: 'black',
        // right: '10px',
        position: 'absolute',
        transform: "rotateZ(45deg)"
    });
    bottom.style({
        top: '6px',
        width: '14px',
        backgroundColor: 'black',
        // right: '10px',
        position: 'absolute',
        transform: "rotateZ(-45deg)"
    });
    var ghost = Ghost({ bg: 'white' });
    base.el.addEventListener('touchstart', function (e) {
        ghost.activate(e.touches[0].pageX, e.touches[0].pageY);
        base.style({
            transform: 'scale(.9)'
        });
    }, PASSIVE);
    base.el.addEventListener('touchend', function () {
        ghost.deactivate();
        base.style({
            transform: 'scale(1)'
        });
    });
    base.append(top, bottom, ghost);
    base.cssClass(__assign({ position: 'fixed', left: "0", top: "0", margin: '20px', width: '22px', height: '22px', transition: 'all .16s', zIndex: '99999', opacity: '0', transform: 'translateY(50px) rotateX(180deg)' }, CENTER));
    ghostify(base);
    function show() {
        base.style({
            opacity: '1',
            transform: 'translateY(0) rotateX(0deg)'
        }, { delay: 260 });
    }
    function hide() {
        base.style({
            opacity: '0',
            transform: 'translateY(50px) rotateX(180deg)'
        });
    }
    return base;
};

var _a;
var view = View();
var app = Div();
var backIcon = BackIcon();
app.append(backIcon, view);
app.cssClass((_a = {
        margin: '0 auto',
        transition: 'all .16s',
        overflow: 'hidden',
        position: 'relative'
    },
    _a["@media (max-width: ".concat(configs.sizes.MOBILE, "px)")] = {
        margin: '0 auto',
    },
    _a));
var routes = {
    '/': HomePage,
    '/menu': MenuPage,
};
router.init({ routes: routes, view: view });

var idb = (function (dbName) { return ({
    // static db: IDBDatabase // Todo: multiple dbs
    info: function (version) {
        return new Promise(function (resolve, reject) {
            var request = indexedDB.open(dbName, version);
            request.onsuccess = function () {
                var _a = request.result, objectStoreNames = _a.objectStoreNames, version = _a.version;
                request.result.close();
                return resolve({ objectStoreNames: objectStoreNames, version: version });
            };
            request.onupgradeneeded = function () {
                var _a = request.result, objectStoreNames = _a.objectStoreNames, version = _a.version;
                request.result.close();
                return resolve({ objectStoreNames: objectStoreNames, version: version });
            };
            request.onerror = function (error) { return reject(error); };
        });
    },
    createStore: function (name, version, options) {
        var opts = __assign({ keyPath: 'id', autoIncrement: true, indices: [] }, options);
        // keyPath = 'id', autoIncrement = true
        return new Promise(function (resolve, reject) {
            var request = indexedDB.open(dbName, version);
            request.onupgradeneeded = function (event) {
                var db = request.result;
                var objectStoreNames = db.objectStoreNames;
                if (!Object.values(objectStoreNames).includes(name)) {
                    var keyPath = opts.keyPath, autoIncrement = opts.autoIncrement;
                    var os_1 = db.createObjectStore(name, { keyPath: keyPath, autoIncrement: autoIncrement });
                    opts.indices.forEach(function (index) { return os_1.createIndex(index, index, { unique: false }); });
                }
                db.close();
                return resolve(event);
            };
            request.onsuccess = function (event) {
                request.result.close();
                return resolve(event);
            };
            request.onerror = function (error) { return reject(error); };
        });
    },
    createindex: function (_store, version, index, options) {
        return new Promise(function (resolve, reject) {
            var request = indexedDB.open(dbName, version);
            request.onupgradeneeded = function (event) {
                var db = request.result;
                var upgradeTransaction = db.transaction(_store, 'readwrite');
                var os = upgradeTransaction.objectStore(_store);
                if (!os.indexNames.contains(index)) {
                    os.createIndex(index, index, { unique: (options === null || options === void 0 ? void 0 : options.unique) || false, multiEntry: (options === null || options === void 0 ? void 0 : options.multiEntry) || false });
                }
                db.close();
                return resolve(event);
            };
            request.onsuccess = function (event) {
                request.result.close();
                return resolve(event);
            };
            request.onerror = function (error) { return reject(error); };
        });
    },
    save: function (store, object, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(dbName, version);
                        request.onsuccess = function () {
                            var transaction = request.result.transaction(store, 'readwrite').objectStore(store).add(object);
                            transaction.onsuccess = function (successEvent) {
                                var _a;
                                request.result.close();
                                return resolve((_a = successEvent === null || successEvent === void 0 ? void 0 : successEvent.target) === null || _a === void 0 ? void 0 : _a.result);
                            };
                            transaction.onerror = function (err) {
                                return reject(err);
                            };
                        };
                        request.onerror = function (err) {
                            return reject(err);
                        };
                    })];
            });
        });
    },
    clear: function (store, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(dbName, version);
                        request.onsuccess = function () {
                            var otransaction = request.result.transaction(store, 'readwrite').objectStore(store);
                            otransaction.clear();
                        };
                        request.onerror = function (err) {
                            return reject(err);
                        };
                    })];
            });
        });
    },
    // request.onsuccess = () => {
    //     const db = request.result;
    //     const transaction = db.transaction(['invoices'], 'readwrite');
    //     const invStore = transaction.objectStore('invoices');
    //     const vendorIndex = invStore.index('VendorIndex');
    //     const keyRng = IDBKeyRange.only('GE');
    //     const cursorRequest = vendorIndex.openCursor(keyRng);
    //     cursorRequest.onsuccess = e => {
    //         const cursor = e.target.result;
    //         if (cursor) {
    //             const invoice = cursor.value;
    //             invoice.vendor = 'P&GE';
    //             const updateRequest = cursor.update(invoice);
    //             cursor.continue();
    //         }
    //     }
    // };
    // request.onsuccess = () => {
    //     const db = request.result;
    //     const transaction = db.transaction(
    //         ['invoices', 'invoice-items'],
    //         'readwrite'
    //     );
    //     const invStore = transaction.objectStore('invoices');
    //     const invItemStore = transaction.objectStore('invoice-items');
    //     // Get invoice cursor
    //     const invoiceCursorRequest = invStore.index('VendorIndex')
    //         .openCursor(IDBKeyRange.only('Frigidaire'));
    //     invoiceCursorRequest.onsuccess = e => {
    //         const invCursor = e.target.result;
    //         if (invCursor) {
    //             // Get invoice item cursor
    //             const invItemCursorRequest = invItemStore
    //                 .index('InvoiceIndex')
    //                 .openCursor(
    //                     IDBKeyRange.only(invCursor.value.invoiceId)
    //                 );
    //             invItemCursorRequest.onsuccess = e => {
    //                 const invItemCursor = e.target.result;
    //                 if (invItemCursor) {
    //                     invItemCursor.delete();
    //                     invItemCursor.continue();
    //                 }
    //             }
    //             invCursor.delete();
    //             invCursor.continue();
    //         }
    //     }
    // };
    byId: function (store, id, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (id === undefined) {
                            return resolve(null);
                        }
                        var request = indexedDB.open(dbName, version);
                        request.onsuccess = function () {
                            var reader = request.result.transaction([store]).objectStore(store).get(id);
                            reader.onerror = function (err) {
                                return reject(err);
                            };
                            reader.onsuccess = function (e) {
                                var _a;
                                return resolve((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.result);
                            };
                        };
                        request.onerror = function (err) {
                            return reject(err);
                        };
                    })];
            });
        });
    },
    find: function (store, options) {
        var _a = options || {}, _b = _a.skip, skip = _b === void 0 ? 0 : _b, _c = _a.limit, limit = _c === void 0 ? 1000 : _c;
        return new Promise(function (resolve, reject) {
            var request = indexedDB.open(dbName);
            request.onsuccess = function (e) {
                var results = [];
                var hasSkipped = false;
                var transaction = request.result.transaction([store], 'readonly');
                var os = transaction.objectStore(store);
                var cursorRequest;
                if (options === null || options === void 0 ? void 0 : options.index) {
                    var index = os.index(options.index);
                    // const cr = index.count(options?.value)
                    // cr.onsuccess = (f) => console.log(store, options, cr.result)
                    var keyRng = null;
                    if (options === null || options === void 0 ? void 0 : options.value) {
                        keyRng =
                            options.upperBound ?
                                IDBKeyRange.upperBound(options.value, options.openUpperBound) :
                                options.lowerBound ?
                                    IDBKeyRange.lowerBound(options.value, options.openLowerBound) :
                                    IDBKeyRange.only(options.value);
                    }
                    cursorRequest = index.openCursor(keyRng, options.reverse ? 'prev' : 'next');
                }
                else {
                    cursorRequest = os.openCursor(null, (options === null || options === void 0 ? void 0 : options.reverse) ? 'prev' : 'next'); //nextunique
                }
                cursorRequest.onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor && !hasSkipped && skip > 0) {
                        hasSkipped = true;
                        cursor.advance(skip);
                        return;
                    }
                    if (cursor) {
                        results.push(cursor.value);
                        if (results.length < limit) {
                            cursor.continue();
                        }
                        else {
                            return resolve(results);
                        }
                    }
                    else {
                        request.result.close();
                        return resolve(results);
                    }
                };
                transaction.onerror = function (err) {
                    return reject(err);
                };
            };
            request.onerror = function (err) {
                return reject(err);
            };
        });
    },
    count: function () { },
    delete: function (store, id, version) {
        return new Promise(function (resolve, reject) {
            var request = indexedDB.open(dbName);
            request.onsuccess = function (e) {
                var transaction = request.result.transaction([store], 'readwrite');
                var objectStore = transaction.objectStore(store);
                objectStore.delete(id);
                return resolve(true);
            };
            request.onerror = function (err) {
                console.log('idb delete', err);
                return reject(err);
            };
        });
    },
    update: function (store, id, payload, version) {
        // or later by query like mongodb
        return new Promise(function (resolve, reject) {
            var request = indexedDB.open(dbName);
            request.onsuccess = function (e) {
                var transaction = request.result.transaction([store], 'readwrite');
                var objectStore = transaction.objectStore(store);
                var reader = objectStore.get(id);
                reader.onerror = function (err) {
                    return reject(err);
                };
                reader.onsuccess = function () {
                    var updateTitleRequest = objectStore.put(payload);
                    updateTitleRequest.onsuccess = function () {
                        request.result.close();
                        return resolve(true);
                    };
                };
            };
            request.onerror = function (err) {
                return reject(err);
            };
        });
    }
}); });

var db = idb('todo-app-db');
var init = function () {
    return new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
        var version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db.info()];
                case 1:
                    version = (_a.sent()).version;
                    return [4 /*yield*/, db.createStore('todos', version + 1, { keyPath: 'id', indices: ['_id', 'at', 'title', 'isDone'] })
                        // await db.createindex('contacts', version + 5, '_id', { unique: true })
                    ];
                case 2:
                    _a.sent();
                    // await db.createindex('contacts', version + 5, '_id', { unique: true })
                    return [2 /*return*/, resolve(true)];
            }
        });
    }); });
};
var db$1 = __assign(__assign({}, db), { init: init });

db$1.init().then(function () {
    document.body.appendChild(app.el);
});
document.addEventListener('rouchstart', function () { return false; }, PASSIVE);
//# sourceMappingURL=bundle.js.map
