module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivate", function() { return deactivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startExtension", function() { return startExtension; });
/* harmony import */ var _application_Commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _application_Features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










let context;
// this function is called when the extension is activated for the first time
const activate = (ctx) => {
    context = ctx;
    _UI_Logger__WEBPACK_IMPORTED_MODULE_4__["default"].init();
    Object(fs__WEBPACK_IMPORTED_MODULE_8__["exists"])(Object(_application_Helper__WEBPACK_IMPORTED_MODULE_9__["getWorkspacePath"])() + '/.git', (exists) => {
        if (exists) {
            initExtension();
        }
        else {
            _application_Commands__WEBPACK_IMPORTED_MODULE_0__["default"].registerDummyCommands(context);
        }
    });
};
// this method is called when your extension is deactivated
const deactivate = () => _UI_Logger__WEBPACK_IMPORTED_MODULE_4__["default"].showMessage('Extension deactivated');
const initExtension = () => __awaiter(void 0, void 0, void 0, function* () {
    _application_Config__WEBPACK_IMPORTED_MODULE_7__["default"].loadConfig();
    yield _application_Commands__WEBPACK_IMPORTED_MODULE_0__["default"].registerCommands(context);
    if (!_application_Config__WEBPACK_IMPORTED_MODULE_7__["default"].isEnabled('enabled')) {
        _UI_Logger__WEBPACK_IMPORTED_MODULE_4__["default"].showMessage('Extension is not enabled in settings');
        return;
    }
    startExtension();
});
const startExtension = () => __awaiter(void 0, void 0, void 0, function* () {
    _UI_StatusBar__WEBPACK_IMPORTED_MODULE_6__["default"].initStatusBar(context);
    yield _application_Features__WEBPACK_IMPORTED_MODULE_1__["default"].enableFeatures();
    const status = _UI_Status__WEBPACK_IMPORTED_MODULE_5__["default"].startingExtension();
    _UI_StatusBar__WEBPACK_IMPORTED_MODULE_6__["default"].addStatus(status);
    yield _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].START);
    _UI_StatusBar__WEBPACK_IMPORTED_MODULE_6__["default"].removeStatus(status);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Commands; });
/* harmony import */ var _commands_PushBeforeClosingIDE_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _commands_ShowOutput_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _commands_StartExtension_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _commands_StopExtension_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);





const COMMANDS = [_commands_PushBeforeClosingIDE_command__WEBPACK_IMPORTED_MODULE_0__["default"], _commands_ShowOutput_command__WEBPACK_IMPORTED_MODULE_1__["default"], _commands_StartExtension_command__WEBPACK_IMPORTED_MODULE_2__["default"], _commands_StopExtension_command__WEBPACK_IMPORTED_MODULE_3__["default"]];
/**
 * this class registers all commands displayed in the VS Code Command Pallette
 */
class Commands {
    /**
     * registers all Commands as a Command in VS Code
     * @param context VS Code ExtensionContext
     */
    static registerCommands(context) {
        COMMANDS.forEach((command) => {
            command.registerCommand(context);
        });
    }
    /**
     * registers dummy Commands as a Command in VS Code so it will not throw an Exception when the Extension
     * is not loaded
     * @param context VS Code ExtensionContext
     */
    static registerDummyCommands(context) {
        COMMANDS.forEach((command) => {
            command.registerDummyCommand(context);
        });
    }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PushBeforeClosingIDECommand; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * this class registers a Command that is activated when the user tries to close
 * the VS Code Window with a keyboard-shortcut
 */
class PushBeforeClosingIDECommand extends _Command__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static registerCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_3__["default"].register(context, 'pushBeforeClosingIDE', PushBeforeClosingIDECommand.pushBeforeClosingIDE);
        _Command__WEBPACK_IMPORTED_MODULE_3__["default"].register(context, 'pushBeforeClosingIDEhard', PushBeforeClosingIDECommand.pushBeforeClosingIDEhard);
    }
    static registerDummyCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_3__["default"].register(context, 'pushBeforeClosingIDE', vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand.bind(null, 'workbench.action.closeActiveEditor'));
        _Command__WEBPACK_IMPORTED_MODULE_3__["default"].register(context, 'pushBeforeClosingIDEhard', vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand.bind(null, 'workbench.action.quit'));
    }
    static pushBeforeClosingIDE() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_1__["default"].EXIT, false);
        });
    }
    static pushBeforeClosingIDEhard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_1__["default"].EXIT, true);
        });
    }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Event;
(function (Event) {
    Event["EXIT"] = "EXIT";
    Event["FILE"] = "FILE";
    Event["FILE_SUBMODULE"] = "FILE_SUBMODULE";
    Event["GIT"] = "GIT";
    Event["GIT_BRANCH_CHANGED"] = "GIT_BRANCH_CHANGED";
    Event["GIT_COMMITS"] = "GIT_COMMITS";
    Event["GIT_COMMITS_LOCAL"] = "GIT_COMMITS_LOCAL";
    Event["GIT_COMMITS_REMOTE"] = "GIT_COMMITS_REMOTE";
    Event["GIT_PUSH"] = "GIT_PUSH";
    Event["START"] = "START";
    Event["SUBMODULE"] = "SUBMODULE";
    Event["SUBMODULE_UPDATE"] = "SUBMODULE_UPDATE";
})(Event || (Event = {}));
/* harmony default export */ __webpack_exports__["default"] = (Event);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHandler; });
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * this class handles the registration and calling of Features of the Extension
 */
class EventHandler {
    /**
     * gets all registered Handlers for a given Event
     * @param changeEvent Event to search for
     */
    static getChangeHandlers(changeEvent) {
        if (!EventHandler.changeHandlers.has(changeEvent)) {
            EventHandler.changeHandlers.set(changeEvent, []);
        }
        const ret = EventHandler.changeHandlers.get(changeEvent);
        if (ret) {
            return ret;
        }
        return [];
    }
    /**
     * resets everything and deletes all Handlers
     */
    static clearAllHandlers() {
        EventHandler.changeHandlers = new Map();
        EventHandler.level = 0;
        _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage(`[event] ChangeHandlers reset`);
    }
    /**
     * registers an Handler for a specific Event
     * @param changeEvent Event, when the Handler should be called
     * @param Handler Handler that is called when the Event was fired
     */
    static registerHandler(changeEvent, Handler) {
        const Handlers = EventHandler.getChangeHandlers(changeEvent);
        Handlers.push(Handler);
        _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage(`[event][register] '${Handler.name}' added to ${changeEvent}-Handlers`);
    }
    /**
     * calls all Handlers for a specific Event
     * @param changeEvent Event to fire
     * @param payload some additional information for the Handlers
     */
    static handle(changeEvent, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const Handlers = EventHandler.getChangeHandlers(changeEvent);
            if (!Handlers.length) {
                return;
            }
            EventHandler.level++;
            const levelStringUp = EventHandler.levelString(true);
            const levelStringDown = EventHandler.levelString(false);
            const timeStartHandler = Date.now();
            for (const Handler of Handlers) {
                const timeStartEvent = Date.now();
                _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage(`[event][call]${levelStringUp} '${Handler.name}'`);
                // call Handler and wait until its finished
                yield Handler.handle(payload);
                const timeEndEvent = Date.now();
                const timeDiffEvent = (timeEndEvent - timeStartEvent) / 1000;
                _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage(`[event][call]${levelStringDown} '${Handler.name}' [${timeDiffEvent}s]`);
            }
            const timeEndHandler = Date.now();
            const timeDiffHandler = (timeEndHandler - timeStartHandler) / 1000;
            _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage(`[event] ${Handlers.length} function${Handlers.length === 1 ? '' : 's'} called for '${changeEvent}' [${timeDiffHandler}s]`);
            EventHandler.level--;
        });
    }
    /**
     * generates the depth-info of the current called function
     * @param up wheter the Event was started or ended
     */
    static levelString(up) {
        return `${new Array(EventHandler.level - 1).fill(' -').join('')} ${up ? '>' : '<'}`;
    }
}
EventHandler.changeHandlers = new Map();
EventHandler.level = 0;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InformationMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



/**
 * this class handles the logging-output
 */
class Logger {
    /**
     * registers a OutputChannel in VS Code
     */
    static init() {
        Logger.output = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].createOutputChannel('git-assistant');
    }
    /**
     * shows the Output-Panel
     */
    static showOutput() {
        Logger.output.show();
    }
    /**
     * logs a message to the OutputChannel
     * @param message message to show
     * @param notification display message as InformationMessage or not
     */
    static showMessage(message, notification = false) {
        Logger.output.appendLine(getCurrentTimestamp() + message);
        if (notification) {
            _InformationMessage__WEBPACK_IMPORTED_MODULE_1__["default"].showInformationMessage(message);
        }
    }
    /**
     * logs an error to the OutputChannel
     * @param error error to show
     * @param notification display error as InformationMessage or not
     */
    static showError(error, notification = false) {
        Logger.output.appendLine(`[ERROR] ${error}`);
        Logger.output.append('' + new Error().stack);
        if (notification) {
            _InformationMessage__WEBPACK_IMPORTED_MODULE_1__["default"].showInformationMessage(error);
        }
    }
}
const getCurrentTimestamp = () => {
    const now = new Date();
    const hour = prefixWithZeros(now.getHours());
    const minute = prefixWithZeros(now.getMinutes());
    const second = prefixWithZeros(now.getSeconds());
    return `[${hour}:${minute}:${second}] `;
};
const prefixWithZeros = (value) => (value < 10 ? '0' : '') + value;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InformationMessage; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * this class is a wrapper for the VS Code InfromationMessage
 */
class InformationMessage {
    /**
     * displays a InformationMessage and some Options
     * @param message message to show
     * @param options options to display
     */
    static showInformationMessage(message, ...options) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            let resolved = false;
            const timeToWait = _application_Config__WEBPACK_IMPORTED_MODULE_4__["default"].getValue('message-wait-time') || 0;
            // auto-resolve message after a certain time so the Extension will not be blocked
            setTimeout(() => {
                if (!resolved) {
                    resolved = true;
                    resolve('');
                }
                return;
            }, timeToWait);
            // display the InformationMessage
            const data = yield vscode__WEBPACK_IMPORTED_MODULE_0__["window"].showInformationMessage(message, {}, ...options);
            if (resolved) {
                _StatusBar__WEBPACK_IMPORTED_MODULE_2__["default"].addStatus(_Status__WEBPACK_IMPORTED_MODULE_3__["default"].messageAutoResolved());
                return;
            }
            if (data) {
                resolve(data.action);
                resolved = true;
                return;
            }
            // user dismissed message without clicking on an action
            _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage(`Message not resolved: '${message}' `);
            resolve('');
            return;
        }));
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK_TIME", function() { return TICK_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusBar; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const DEFAULT_TIMEOUT = 3000;
const TICK_TIME = 500;
const ANIMATION_TIMEOUT = 250;
const NR_OF_ANIMATION_DOTS = 5;
/**
 * this class handles the information displayed in the StatusBar
 */
class StatusBar {
    /**
     * initializes the StatusBar
     * @param context VS Code ExtensionContext
     */
    static initStatusBar(context) {
        StatusBar.statusbarItem = vscode__WEBPACK_IMPORTED_MODULE_0__["window"].createStatusBarItem(vscode__WEBPACK_IMPORTED_MODULE_0__["StatusBarAlignment"].Left, 0);
        StatusBar.statusbarItem.command = 'git-assistant.showOutput';
        context.subscriptions.push(StatusBar.statusbarItem);
        StatusBar.status = [];
        StatusBar.tickCount = 0;
    }
    /**
     * adds a status to the queue
     * @param status status to add
     */
    static addStatus(status) {
        _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage('[status] ' + status.toStringText());
        StatusBar.status.push(status);
        StatusBar.showLatestStatus();
    }
    /**
     * removes a status from the queue
     * @param status status to remove
     */
    static removeStatus(status) {
        StatusBar.status = StatusBar.status.filter((stat) => stat !== status);
        StatusBar.showLatestStatus();
    }
    /**
     * animates a status over time
     * @param status status to animate
     */
    static animateStatus(status) {
        if (!StatusBar.status.length || StatusBar.getPriorityStatusItem() !== status) {
            return;
        }
        let text = `${status.toStringIcon()} `;
        text += new Array(StatusBar.iteration).fill('.').join('');
        text += status.toStringText();
        text += new Array(NR_OF_ANIMATION_DOTS - StatusBar.iteration).fill('.').join('');
        StatusBar.statusbarItem.text = text;
        if (++StatusBar.iteration > NR_OF_ANIMATION_DOTS) {
            StatusBar.iteration = 0;
        }
        setTimeout(() => {
            StatusBar.animateStatus(status);
        }, ANIMATION_TIMEOUT);
    }
    /**
     * displays the status with the highest priority
     */
    static showLatestStatus() {
        const length = StatusBar.status.length;
        if (!length) {
            StatusBar.statusbarItem.hide();
            return;
        }
        let status = StatusBar.status[length - 1];
        const temp = StatusBar.getPriorityStatusItem();
        if (temp) {
            status = temp;
        }
        StatusBar.statusbarItem.text = status.toString();
        StatusBar.statusbarItem.show();
        if (status.isAnimated()) {
            StatusBar.animateStatus(status);
        }
        if (status.isTemporary()) {
            StatusBar.nextTick(status, ++StatusBar.tickCount);
        }
    }
    /**
     * returns a StatusItem with priority if it exists in the queue
     */
    static getPriorityStatusItem() {
        const animated = StatusBar.status.filter((statusItem) => statusItem.isAnimated());
        if (animated.length) {
            return animated.reverse()[0];
        }
        const temporary = StatusBar.status.filter((statusItem) => statusItem.isTemporary());
        if (temporary.length) {
            return temporary[0];
        }
        return undefined;
    }
    /**
     * displays a status for a temporary time
     * @param status status to display
     * @param tickCount incrementing tick count
     */
    static nextTick(status, tickCount) {
        if (StatusBar.tickCount !== tickCount || StatusBar.getPriorityStatusItem() !== status) {
            return;
        }
        const finished = status.reduceDisplayTime();
        if (!finished) {
            setTimeout(() => {
                StatusBar.nextTick(status, tickCount);
            }, TICK_TIME);
            return;
        }
        StatusBar.removeStatus(status);
    }
}
StatusBar.iteration = 0;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Status; });
/* harmony import */ var _StatusItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



/**
 * this class generates all Status Messages
 */
class Status {
    static startingExtension() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newAnimatedStatusItem(`loading git-assistant`);
    }
    static watcherRunning() {
        return new _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"]('git-assistant running');
    }
    static watcherRestarted() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem('git-assistant restarted');
    }
    static configVariableSet(variable, input) {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`git-config variable '${variable}' set to '${input}'`);
    }
    static allConfigVariablesChecked() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`all git-config variables checked`);
    }
    static autoCheckoutForDetachedHead(repositoryPath, branch) {
        const message = `DetachedHEAD detected: auto-checked out '${branch}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static updatingGitModel(repositoryPath) {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newAnimatedStatusItem(`checking repository '${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_1__["getRepositoryName"])(repositoryPath)}'`);
    }
    static publishBranch(repositoryPath, remote, branch) {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newAnimatedStatusItem(`publishing branch '${branch}' to remote '${remote}' for '${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_1__["getRepositoryName"])(repositoryPath)}'`);
    }
    static branchIsUpToDate(repositoryPath, remote, branch) {
        const message = `branch '${getBranchName(remote, branch)}' is up-to-date`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static commitsPushed(repositoryPath, remote, branch, ahead = 0) {
        const message = `${ahead} commits pushed to '${getBranchName(remote, branch)}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static commitsPushing(repositoryPath, remote, branch, ahead = 0) {
        const message = `pushing ${ahead} commits to '${getBranchName(remote, branch)}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newAnimatedStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static commitsPulled(repositoryPath, remote, branch, behind = 0) {
        const message = `${behind} commits pulled from '${getBranchName(remote, branch)}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static commitsPulling(repositoryPath, remote, branch, behind = 0) {
        const message = `pulling ${behind} commits from '${getBranchName(remote, branch)}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newAnimatedStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static commitsMerged(repositoryPath, remote, branch, ahead = 0, behind = 0) {
        const message = `${ahead} / ${behind} commits merged on '${getBranchName(remote, branch)}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static commitsMerging(repositoryPath, remote, branch, ahead = 0, behind = 0) {
        const message = `merging ${ahead} / ${behind} commits on '${getBranchName(remote, branch)}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newAnimatedStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static checkedOutRepositoryBranch(repositoryPath, branch) {
        const message = `Checked out '${branch}'`;
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(addSubmoduleText(message, repositoryPath));
    }
    static stashSaveChanges() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`changes saved to stash`);
    }
    static stashPopChanges() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`changes popped from stash`);
    }
    static branchCreated(branch) {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`new branch '${branch}' created`);
    }
    static submoduleUpdated() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`Submodules updated`);
    }
    static messageAutoResolved() {
        return _StatusItem__WEBPACK_IMPORTED_MODULE_0__["default"].newTemporaryStatusItem(`message was already auto-resolved - no action performed`);
    }
}
const addSubmoduleText = (message, repositoryPath) => {
    if (repositoryPath.length) {
        message += ` in Submodule '${repositoryPath}'`;
    }
    return message;
};
const getBranchName = (remote, branch) => (remote ? `${remote}/` : '') + branch;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Octicon", function() { return Octicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatusItem; });
/* harmony import */ var _StatusBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


var Octicon;
(function (Octicon) {
    Octicon["comment"] = "$(comment)";
    Octicon["sync"] = "$(sync)";
    Octicon["code"] = "$(code)";
})(Octicon || (Octicon = {}));
/**
 * this class is a wrapper for a message displayed in the StatusBar
 */
class StatusItem {
    constructor(text = '', icon = Octicon.comment, animated = false, displayTime = 0) {
        this.icon = icon;
        this.text = text;
        this.animated = animated;
        this.temporary = displayTime > 0;
        this.displayTime = displayTime;
    }
    static newTemporaryStatusItem(text) {
        return new StatusItem(text, Octicon.comment, false, _StatusBar__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_TIMEOUT"]);
    }
    static newAnimatedStatusItem(text) {
        return new StatusItem(text, Octicon.sync, true);
    }
    isAnimated() {
        return this.animated;
    }
    isTemporary() {
        return this.temporary;
    }
    reduceDisplayTime() {
        this.displayTime -= _StatusBar__WEBPACK_IMPORTED_MODULE_0__["TICK_TIME"];
        return this.displayTime < 0;
    }
    toString() {
        return `${this.toStringIcon()} ${this.toStringText()}`;
    }
    toStringIcon() {
        return `${this.icon}`;
    }
    toStringText() {
        return this.text;
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkspacePath", function() { return getWorkspacePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRepositoryName", function() { return getRepositoryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepmerge", function() { return deepmerge; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);


/**
 * returns the path opf the current opened Workspace
 */
const getWorkspacePath = () => {
    if (!vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders) {
        return '';
    }
    return vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders[0].uri.fsPath;
};
/**
 * returns the name of the repository folder
 * @param repositoryPath relative path of the repository
 */
const getRepositoryName = (repositoryPath) => {
    let name = repositoryPath;
    // if the root-folder is passed, find and return its name
    if (!name.length) {
        if (vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders) {
            name = vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders[0].name;
        }
    }
    return name;
};
/**
 * creates a diff of two objects
 * @param target target-object
 * @param source source-object
 */
const deepmerge = (target, source) => {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepmerge(target[key], source[key]));
        }
    }
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigOptions", function() { return ConfigOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Config; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);


var ConfigOptions;
(function (ConfigOptions) {
    ConfigOptions["enabled"] = "enabled";
    ConfigOptions["auto"] = "auto";
    ConfigOptions["disabled"] = "disabled";
})(ConfigOptions || (ConfigOptions = {}));
/**
 * this class is responsible for reading the Configuration-Settings of the Extension
 */
class Config {
    /**
     * loads the current config of the extension
     */
    static loadConfig() {
        this.config = vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].getConfiguration('git-assistant');
    }
    /**
     * gets the value of a specific config-key
     * @param value config-key
     */
    static getValue(value) {
        var _a;
        return (_a = Config.config) === null || _a === void 0 ? void 0 : _a.get(value);
    }
    /**
     * checks if a feature is enabled
     * @param value config-key
     */
    static isEnabled(value) {
        const val = Config.getValue(value);
        if (!val || val === ConfigOptions.disabled) {
            return false;
        }
        return true;
    }
    /**
     * disables a feature in the global-configs
     * @param value config-key
     */
    static disable(value) {
        Config.config.update(value, 'disabled', vscode__WEBPACK_IMPORTED_MODULE_0__["ConfigurationTarget"].Global);
    }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Command; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



/**
 * this class is the template for a Command
 */
class Command {
    /**
     * registers a Command in VS Code
     * @param context VS Code ExtensionContext
     * @param commandString name of the Command to register
     * @param command command that should be executed
     */
    static register(context, commandString, command) {
        context.subscriptions.push(vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].registerCommand('git-assistant.' + commandString, command));
        _UI_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage(`[command] ${commandString} registered`);
    }
    /**
     * this method is called when the Command should register
     * @param context VS Code ExtensionContext
     */
    static registerCommand(_context) {
        throw new TypeError('Must override method');
    }
    /**
     * this method is called when the dummy Command should register
     * @param context VS Code ExtensionContext
     */
    static registerDummyCommand(_context) {
        throw new TypeError('Must override method');
    }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowOutputCommand; });
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



/**
 * this class registers a Command to show the Output of the Logger
 */
class ShowOutputCommand extends _Command__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static registerCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_1__["default"].register(context, 'showOutput', ShowOutputCommand.executeCommand);
    }
    static registerDummyCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_1__["default"].register(context, 'showOutput', _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showMessage.bind(null, 'you must open a git-repository in your workspace root', true));
    }
    static executeCommand() {
        _UI_Logger__WEBPACK_IMPORTED_MODULE_0__["default"].showOutput();
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartExtension; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * this class registers a Command to start the Extension
 */
class StartExtension extends _Command__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static registerCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_0__["default"].register(context, 'startGitAssisitant', StartExtension.startExtension);
    }
    static registerDummyCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_0__["default"].register(context, 'startGitAssisitant', _UI_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage.bind(null, 'you must open a git-repository in your workspace root', true));
    }
    static startExtension() {
        return __awaiter(this, void 0, void 0, function* () {
            _UI_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('Git Assistant started manually');
            _application_Config__WEBPACK_IMPORTED_MODULE_4__["default"].loadConfig();
            _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].clearAllHandlers();
            Object(_extension__WEBPACK_IMPORTED_MODULE_1__["startExtension"])();
        });
    }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StopExtension; });
/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _application_Watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * this class registers a Command to stop the Extension
 */
class StopExtension extends _Command__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static registerCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_0__["default"].register(context, 'stopGitAssisitant', StopExtension.stopExtension);
    }
    static registerDummyCommand(context) {
        _Command__WEBPACK_IMPORTED_MODULE_0__["default"].register(context, 'stopGitAssisitant', _UI_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage.bind(null, 'you must open a git-repository in your workspace root', true));
    }
    static stopExtension() {
        return __awaiter(this, void 0, void 0, function* () {
            _UI_Logger__WEBPACK_IMPORTED_MODULE_2__["default"].showMessage('Git Assistant stopped manually');
            _application_Watcher__WEBPACK_IMPORTED_MODULE_1__["default"].stop();
        });
    }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watcher; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _GitRepository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









const TIME_TO_WAIT_FOR_ALL_CHANGES = 1000;
/**
 * this class handles changes in the curretnt Workspace-folder
 */
class Watcher {
    /**
     * starts listening in the current Workspace-folder
     */
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            Watcher.fsWatcher = Object(fs__WEBPACK_IMPORTED_MODULE_0__["watch"])(Object(_Helper__WEBPACK_IMPORTED_MODULE_7__["getWorkspacePath"])(), { recursive: true }, (_event, filename) => {
                Watcher.handleFileChange(filename);
            });
            Watcher.lastChange = new Map();
            Watcher.changedFiles = new Map();
            Watcher.excludePaths = _Config__WEBPACK_IMPORTED_MODULE_8__["default"].getValue('watcher-excludePaths') || [];
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(Watcher.status);
        });
    }
    /**
     * restarts the watcher
     */
    static restart() {
        Watcher.stop();
        _GitRepository__WEBPACK_IMPORTED_MODULE_6__["default"].reset();
        _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].watcherRestarted());
        _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage('Watcher restarted');
        Watcher.start();
    }
    /**
     * stops listening for file changes
     */
    static stop() {
        if (Watcher.fsWatcher) {
            Watcher.fsWatcher.close();
        }
        _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(Watcher.status);
    }
    /*******************************************************************************************/
    /* HANDLE FILE CHANGES */
    /*******************************************************************************************/
    /**
     * handles what to do next when a file was changed
     * @param filename file that was changed
     */
    static handleFileChange(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filename) {
                return;
            }
            // do nothing when the extension currently executes some Git-Commands
            if (_GitRepository__WEBPACK_IMPORTED_MODULE_6__["default"].isCurrentlyUpdating()) {
                return;
            }
            // relpace Windows- with Unix-paths
            filename = filename.replace(/\\/gi, '/');
            let event;
            if (filename.substring(0, 4) === '.git') {
                if (!(yield _GitRepository__WEBPACK_IMPORTED_MODULE_6__["default"].isUnimportantGitFile(filename))) {
                    // file in .git changed
                    event = _GitRepository__WEBPACK_IMPORTED_MODULE_6__["default"].isChangeInSubmodule(filename) ? (event = _models_Event__WEBPACK_IMPORTED_MODULE_1__["default"].SUBMODULE) : (event = _models_Event__WEBPACK_IMPORTED_MODULE_1__["default"].GIT);
                }
            }
            else if (Watcher.isExcludedFile(filename)) {
                // something changed that was excluded
                return;
            }
            else if ((yield _GitRepository__WEBPACK_IMPORTED_MODULE_6__["default"].isFileInSubmodule(filename)).length) {
                // a file in a submodule has changed
                event = _models_Event__WEBPACK_IMPORTED_MODULE_1__["default"].FILE_SUBMODULE;
            }
            else {
                // some otehr file has changed
                event = _models_Event__WEBPACK_IMPORTED_MODULE_1__["default"].FILE;
            }
            if (event) {
                Watcher.fireChange(event, filename);
            }
        });
    }
    /**
     * waits for multiple changed files in a short period and calls the Event-Handler
     * @param event Event the changed file belongs to
     * @param filename name of the changed file
     */
    static fireChange(event, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const changedFiles = yield Watcher.waitForLastChange(event, filename);
            _handlers_EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"].handle(event, changedFiles);
        });
    }
    /**
     * checks if the file is excluded to trigger a change
     * @param filename filename to check
     */
    static isExcludedFile(filename) {
        return Watcher.excludePaths.some((path) => new RegExp(path, 'gi').test(filename));
    }
    /**
     * returns all changed files for a specific Event
     * @param event Event to get changed files
     */
    static getChangedFiles(event) {
        const ret = Watcher.changedFiles.get(event);
        if (ret) {
            return ret;
        }
        // nothing registered yet for this event => create new Set for it
        const set = new Set();
        Watcher.changedFiles.set(event, set);
        return set;
    }
    /**
     * delays the return of the changed files for a specific Event
     * @param event Event the changed file belongs to
     * @param filename name of the changed file
     */
    static waitForLastChange(event, filename) {
        const increased = Watcher.addChange(event, filename);
        return new Promise((resolve) => {
            setTimeout(() => {
                const lastUpdate = Watcher.getLastChange(event);
                // if the file of this call was the last changed file for this Event => return all changed files
                if (lastUpdate === increased) {
                    let changedFiles = [];
                    changedFiles = [...Watcher.getChangedFiles(event)];
                    Watcher.changedFiles.set(event, new Set());
                    _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage(`[changedFiles] ${event}: ${changedFiles.length} files changed`);
                    resolve(changedFiles);
                }
            }, TIME_TO_WAIT_FOR_ALL_CHANGES);
        });
    }
    /**
     * add a file to the changed files and update its lastChanged-counter
     * @param event Event the changed file belongs to
     * @param filename name of the changed file
     */
    static addChange(event, filename) {
        Watcher.getChangedFiles(event).add(filename);
        const incremented = Watcher.getLastChange(event) + 1;
        Watcher.lastChange.set(event, incremented);
        return incremented;
    }
    /**
     * returns the number of the last iteration a file was changed for a specific Event
     * @param event Event to get the last iteration from
     */
    static getLastChange(event) {
        const ret = Watcher.lastChange.get(event);
        return ret ? ret : 0;
    }
}
Watcher.status = _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].watcherRunning();


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitRepository; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Git__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _CMD__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var deep_diff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var deep_diff__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(deep_diff__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









const unimportantGitFiles = ['lock', 'FETCH_HEAD', '.git/objects/'];
/**
 * this class handles the communication with the Git-Repository
 */
class GitRepository {
    /**
     * deletes all Git-Models and simple-git instances
     */
    static reset() {
        GitRepository.gitModels = new Map();
        GitRepository.simplegits = new Map();
    }
    /**
     * creates a new simple-git instance or returns a existing one
     * @param repositoryPath relative path of the Repsoitory
     */
    static getSimplegit(repositoryPath = '') {
        if (GitRepository.simplegits.has(repositoryPath)) {
            return GitRepository.simplegits.get(repositoryPath);
        }
        const simplegit = __webpack_require__(27)(Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(Object(_Helper__WEBPACK_IMPORTED_MODULE_8__["getWorkspacePath"])(), repositoryPath));
        GitRepository.simplegits.set(repositoryPath, simplegit);
        return simplegit;
    }
    /**
     * returns the current status as Git-Model
     * @param repositoryPath relative path of the Repsoitory
     */
    static getGitModel(repositoryPath = '', mainRepositoryPath = '') {
        return __awaiter(this, void 0, void 0, function* () {
            repositoryPath = repositoryPath.replace(/\\/gi, '/');
            let gitModel = GitRepository.gitModels.get(repositoryPath);
            if (gitModel) {
                return gitModel;
            }
            // no Git-Model was created yet => create a new one
            gitModel = yield GitRepository.updateGitModel(repositoryPath, mainRepositoryPath);
            return gitModel;
        });
    }
    /**
     * sets a Git-Model as current status of the Repository
     * @param repositoryPath relative path of the Repsoitory
     * @param gitModel Git-Model to set as current
     */
    static setGitModel(repositoryPath = '', gitModel) {
        repositoryPath = repositoryPath.replace(/\\/gi, '/');
        const oldModel = GitRepository.gitModels.get(repositoryPath);
        GitRepository.gitModels.set(repositoryPath, gitModel);
        // store the old Git-Model in the new one
        if (oldModel) {
            gitModel.setOldModel(oldModel);
        }
    }
    /**
     * checks if a given file is an unimportant file that contains no Status-change-infomrmation
     * @param filename file to check
     */
    static isUnimportantGitFile(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            // root git folder
            if (filename.length === 4) {
                return true;
            }
            // unimportant file
            if (unimportantGitFiles.some((file) => new RegExp(file, 'gi').test(filename))) {
                return true;
            }
            // submodule references
            const subModuleRoots = (yield GitRepository.getGitModel())
                .getSubmodules()
                .filter((submodule) => '.git/modules/' + submodule.getPath() === filename);
            if (subModuleRoots.length) {
                return true;
            }
            return false;
        });
    }
    /**
     * checks if a change occured in a Submodule-Repsoitory
     * @param filename file to check
     */
    static isChangeInSubmodule(filename) {
        return new RegExp('.git/modules/', 'gi').test(filename);
    }
    /**
     * checks if a file is located in a Submodule
     * @param filename file to check
     */
    static isFileInSubmodule(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const submodule = (yield GitRepository.getGitModel())
                .getSubmodules()
                .find((submodule) => new RegExp(submodule.getPath(), 'gi').test(filename));
            return submodule ? submodule.getPath() : '';
        });
    }
    /**
     * checks if the Extension is currently executing a Git-Command
     */
    static isCurrentlyUpdating() {
        return GitRepository.isUpdating;
    }
    /**
     * marks the begin of a Git-Command
     */
    static updatingStart() {
        GitRepository.isUpdating = true;
    }
    /**
     * marks the end of a Git-Command
     * @param repositoryPath relative path of the Repsoitory
     * @param branch current Branch of the Repository
     */
    static updatingEnd(repositoryPath, branch) {
        GitRepository.updateGUI(repositoryPath, branch);
        GitRepository.isUpdating = false;
    }
    /**
     * hack for updating the VS Code GUI
     * @param repositoryPath relative path of the Repsoitory
     * @param branch current Branch of the repository
     */
    static updateGUI(repositoryPath, branch) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!repositoryPath.length) {
                return;
            }
            const simplegit = GitRepository.getSimplegit(repositoryPath);
            const oldBranch = branch ? branch : (yield GitRepository.getGitModel(repositoryPath)).getBranch();
            const helperBranch = oldBranch !== 'master' ? 'master' : 'development';
            let helperBranchExists = false;
            // checkout other Branch
            yield simplegit.checkoutLocalBranch(helperBranch).catch(() => (helperBranchExists = true));
            if (helperBranchExists) {
                yield simplegit.checkout(helperBranch);
            }
            // wait a short time to switch back to the original Branch
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield simplegit.checkout(oldBranch);
                if (!helperBranchExists) {
                    simplegit.deleteLocalBranch(helperBranch);
                }
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage('VS Code SCM-GUI updated');
            }), 10);
        });
    }
    /*******************************************************************************************/
    /* UPDATE GIT MODEL */
    /*******************************************************************************************/
    /**
     * reads the current Status of the Repsoitory
     * @param repositoryPath relative path of the Repsoitory
     */
    static updateGitModel(repositoryPath = '', mainRepositoryPath = '') {
        return __awaiter(this, void 0, void 0, function* () {
            let simplegit;
            try {
                simplegit = GitRepository.getSimplegit(repositoryPath);
            }
            catch (error) {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage(`Repository path ${repositoryPath} not found`);
                return new _models_Git__WEBPACK_IMPORTED_MODULE_2__["default"]();
            }
            const gitModel = new _models_Git__WEBPACK_IMPORTED_MODULE_2__["default"](repositoryPath);
            try {
                // fetch latest changes from Remote
                yield simplegit.fetch();
            }
            catch (error) {
                if (error.message.indexOf('unable to access')) {
                    _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage(`[repository] could not connect to Server`);
                }
                else {
                    _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showMessage(`[repository] No remote repository found for ${repositoryPath}`);
                }
            }
            if (mainRepositoryPath) {
                gitModel.setMainRepositoryPath(mainRepositoryPath);
            }
            const stat = _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].updatingGitModel(repositoryPath);
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(stat);
            const status = yield simplegit.status();
            gitModel.setBehind(status.behind);
            gitModel.setAhead(status.ahead);
            gitModel.setBranch(status.current);
            if (status.tracking) {
                gitModel.setRemote(status.tracking.split('/')[0]);
            }
            const branches = yield simplegit.branch();
            if (gitModel.getBranch() === 'HEAD') {
                gitModel.setBranch(branches.current);
            }
            gitModel.setDetachedHEAD(branches.detached);
            gitModel.setBranches(branches.branches);
            const remotes = yield simplegit.getRemotes();
            gitModel.setRemotes(remotes);
            const result = yield _CMD__WEBPACK_IMPORTED_MODULE_6__["default"].executeCommand('git submodule', gitModel.getPath());
            gitModel.setSubmodules(result.replace(/\r?\n|\r/g, ' ').replace('  ', ' '));
            GitRepository.setGitModel(repositoryPath, gitModel);
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(stat);
            return gitModel;
        });
    }
    /*******************************************************************************************/
    /* GIT MODEL DIFF */
    /*******************************************************************************************/
    /**
     * returns a diff of the last two Git-Models
     * @param repositoryPath relative path of the Repsoitory
     */
    static getModelDiff(repositoryPath = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const newModel = yield GitRepository.getGitModel(repositoryPath);
            const oldModel = newModel.getOldModel();
            if (!oldModel) {
                return newModel;
            }
            const tempDiff = Object(deep_diff__WEBPACK_IMPORTED_MODULE_7__["diff"])(newModel, oldModel) || [];
            let diff = {};
            // converts the deep-diff object to a Git-Model
            tempDiff.forEach((object) => {
                if (object.path[0] === 'oldModel') {
                    return;
                }
                let pathPointer = object.lhs;
                object.path.reverse().forEach((pathSegment) => {
                    const obj = {};
                    obj[pathSegment] = pathPointer;
                    pathPointer = obj;
                });
                if (pathPointer.branches) {
                    pathPointer.branches = undefined;
                }
                diff = Object(_Helper__WEBPACK_IMPORTED_MODULE_8__["deepmerge"])(diff, pathPointer);
            });
            return diff;
        });
    }
    /*******************************************************************************************/
    /* INIT */
    /*******************************************************************************************/
    /**
     * inits a new Git-Repository
     */
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            const gitInstance = GitRepository.getSimplegit();
            yield gitInstance.init();
            yield gitInstance.add('./*');
            yield gitInstance.commit('first commit');
        });
    }
    /*******************************************************************************************/
    /* CONFIG-VARIABLES */
    /*******************************************************************************************/
    /**
     * returns the value of a given config-variable-name
     * @param variable name of the config-variable
     */
    static getConfigVariable(variable) {
        return new Promise((resolve, reject) => {
            _CMD__WEBPACK_IMPORTED_MODULE_6__["default"].executeCommand(`git config --get ${variable}`)
                .then((result) => {
                if (!result.length) {
                    return reject();
                }
                resolve(result);
            })
                .catch(reject);
        });
    }
    /**
     * sets the value of a Git config-variable
     * @param variable name of the config-variable
     * @param value value to set
     * @param scope global or local scope
     */
    static setConfigVariable(variable, value, scope = 'global') {
        return __awaiter(this, void 0, void 0, function* () {
            yield _CMD__WEBPACK_IMPORTED_MODULE_6__["default"].executeCommand(`git config --${scope} ${variable} ${value}`).catch(() => {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`An Error occured while trying to set '${variable}'`);
                return;
            });
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].configVariableSet(variable, value));
        });
    }
    /*******************************************************************************************/
    /* PUBLISH BRANCH */
    /*******************************************************************************************/
    /**
     * publishes a Branch to a given remote
     * @param repositoryPath relative path of the Repsoitory
     * @param remote remote to publish
     * @param branch branch to publish
     */
    static publishBranch(repositoryPath, remote, branch) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].publishBranch(repositoryPath, remote, branch);
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(status);
            GitRepository.updatingStart();
            yield GitRepository.getSimplegit(repositoryPath).push(remote, branch, { '-u': null }).catch();
            GitRepository.updatingEnd(repositoryPath);
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
        });
    }
    /*******************************************************************************************/
    /* BRANCHES */
    /*******************************************************************************************/
    /**
     * creates a new Branch
     * @param repositoryPath relative path of the Repsoitory
     * @param branch Branch to create
     */
    static createNewBranch(repositoryPath = '', branch) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GitRepository.getSimplegit(repositoryPath).checkoutLocalBranch(branch);
            _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].branchCreated(branch);
        });
    }
    /**
     * checks out a branch
     * @param repositoryPath relative path of the Repsoitory
     * @param branch name of the Branch
     */
    static checkoutBranchForRepository(repositoryPath, branch) {
        return __awaiter(this, void 0, void 0, function* () {
            GitRepository.updatingStart();
            yield GitRepository.getSimplegit(repositoryPath)
                .checkout(branch)
                .catch(() => {
                let message = `could not checkout branch '${branch}'`;
                if (repositoryPath.length) {
                    message += ` in Submodule '${repositoryPath}'`;
                }
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(message);
                GitRepository.updatingEnd(repositoryPath, branch);
                return;
            });
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].checkedOutRepositoryBranch(repositoryPath, branch));
            GitRepository.updatingEnd(repositoryPath, branch);
        });
    }
    /**
     * add changes to Stash
     * @param repositoryPath relative path of the Repsoitory
     */
    static stashSaveChanges(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            GitRepository.updatingStart();
            yield _CMD__WEBPACK_IMPORTED_MODULE_6__["default"].executeCommand('git stash save', repositoryPath).catch(() => {
                GitRepository.updatingEnd(repositoryPath);
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`An Error occured while stash changes`, true);
                return;
            });
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].stashSaveChanges());
            GitRepository.updatingEnd(repositoryPath);
        });
    }
    /**
     * restores changes from Stash
     * @param repositoryPath relative path of the Repsoitory
     */
    static stashPopChanges(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            GitRepository.updatingStart();
            yield _CMD__WEBPACK_IMPORTED_MODULE_6__["default"].executeCommand('git stash pop', repositoryPath).catch(() => {
                GitRepository.updatingEnd(repositoryPath);
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`An Error occured while trying to pop from stash`, true);
                return;
            });
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].stashPopChanges());
            GitRepository.updatingEnd(repositoryPath);
        });
    }
    /**
     * checks the '.gitmodules' file for a configured branch
     * @param gitModel Git-Model of Submodule
     */
    static getConfiguredBranchForSubmodule(gitModel) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const mainRepsoitoryPath = gitModel.getMainRepositoryPath();
                const submodulePath = gitModel.getRelativePath();
                Object(fs__WEBPACK_IMPORTED_MODULE_1__["readFile"])(Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(mainRepsoitoryPath, '/.gitmodules'), 'utf8', (err, data) => {
                    if (!data) {
                        return resolve('');
                    }
                    const lines = data.match(/[^\r\n]+/g) || [];
                    let foundSubmodule = false;
                    lines.forEach((line) => {
                        if (line.includes('[submodule')) {
                            foundSubmodule = line.includes(submodulePath);
                        }
                        else if (foundSubmodule) {
                            if (line.includes('branch')) {
                                return resolve(line.replace('branch =', '').trim());
                            }
                        }
                    });
                    resolve('');
                });
            });
        });
    }
    /*******************************************************************************************/
    /* PULL */
    /*******************************************************************************************/
    /**
     * pulls changes from Remote
     * @param repositoryPath relative path of the Repsoitory
     * @param remote name of the Remote
     * @param branch name of the Branch
     * @param behind number of commits behind
     * @param silent iff true => don't show messages
     */
    static pullRepository(repositoryPath, remote, branch, behind = 0, silent = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].commitsPulling(repositoryPath, remote, branch, behind);
            if (!silent) {
                GitRepository.updatingStart();
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(status);
            }
            yield GitRepository.getSimplegit(repositoryPath)
                .pull(remote, branch)
                .catch((error) => {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`Failed to Pull changes from '${remote}/${branch}'`, true);
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(error, true);
                if (!silent) {
                    _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
                    GitRepository.updatingEnd(repositoryPath);
                }
                return;
            });
            if (!silent) {
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].commitsPulled(repositoryPath, remote, branch, behind));
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
                GitRepository.updatingEnd(repositoryPath);
            }
        });
    }
    /*******************************************************************************************/
    /* PUSH */
    /*******************************************************************************************/
    /**
     * pushes changes to Remote
     * @param repositoryPath relative path of the Repsoitory
     * @param remote name of the Remote
     * @param branch name of the Branch
     * @param ahead number of commits ahead
     * @param silent iff true => don't show messages
     */
    static pushRepository(repositoryPath, remote, branch, ahead = 0, silent = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].commitsPushing(repositoryPath, remote, branch, ahead);
            if (!silent) {
                GitRepository.updatingStart();
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(status);
            }
            yield GitRepository.getSimplegit(repositoryPath)
                .push(remote, branch)
                .catch((error) => {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`Failed to Push changes to '${remote}/${branch}'`, true);
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(error, true);
                if (!silent) {
                    _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
                    GitRepository.updatingEnd(repositoryPath);
                }
                return;
            });
            if (!silent) {
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].commitsPushed(repositoryPath, remote, branch, ahead));
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
                GitRepository.updatingEnd(repositoryPath);
            }
        });
    }
    /**
     * pushes the changes from the root-Repository
     */
    static pushRootRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield GitRepository.getGitModel();
            return GitRepository.pushRepository(gitModel.getRelativePath(), gitModel.getRemote(), gitModel.getBranch(), gitModel.getAhead());
        });
    }
    /*******************************************************************************************/
    /* MERGE */
    /*******************************************************************************************/
    /**
     * pulls, merges and pushes changes to the Remote
     * @param repositoryPath relative path of the Repsoitory
     * @param remote name of the Remote
     * @param branch name of the Branch
     * @param ahead number of commits ahead
     * @param behind number of commits behind
     */
    static pullAndPushRepository(repositoryPath, remote, branch, ahead = 0, behind = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            GitRepository.updatingStart();
            const status = _UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].commitsMerging(repositoryPath, remote, branch, ahead, behind);
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(status);
            yield GitRepository.pullRepository(repositoryPath, remote, branch, behind, true).catch((error) => GitRepository.catchPushAndPullRepositoryError(error, repositoryPath, remote, branch, status));
            yield GitRepository.pushRepository(repositoryPath, remote, branch, ahead, true).catch((error) => GitRepository.catchPushAndPullRepositoryError(error, repositoryPath, remote, branch, status));
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_4__["default"].commitsMerged(repositoryPath, remote, branch, ahead, behind));
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
            GitRepository.updatingEnd(repositoryPath);
        });
    }
    /**
     * handles Errors that occure when merging changes
     * @param error Error that occurred
     * @param repositoryPath relative path of the Repsoitory
     * @param remote name of the Remote
     * @param branch name of the Branch
     * @param status StatusItem
     */
    static catchPushAndPullRepositoryError(error, repositoryPath, remote, branch, status) {
        _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`Failed to Merge changes on '${remote}/${branch}'`, true);
        _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(error, true);
        _UI_StatusBar__WEBPACK_IMPORTED_MODULE_5__["default"].removeStatus(status);
        GitRepository.updatingEnd(repositoryPath);
    }
    /*******************************************************************************************/
    /* SUBMODULE UPDATE INIT */
    /*******************************************************************************************/
    /**
     * updates and inits Submodules
     */
    static submoduleUpdateInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _CMD__WEBPACK_IMPORTED_MODULE_6__["default"].executeCommand('git submodule update --init').catch(() => {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_3__["default"].showError(`An Error occured while trying to update submodules`, true);
                return;
            });
        });
    }
}
GitRepository.gitModels = new Map();
GitRepository.simplegits = new Map();
GitRepository.isUpdating = false;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Git; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _Submodule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);





class Git {
    constructor(dirpath = '') {
        dirpath = dirpath.replace(/\\/gi, '/');
        this.dirpath = Object(path__WEBPACK_IMPORTED_MODULE_0__["join"])(Object(_application_Helper__WEBPACK_IMPORTED_MODULE_3__["getWorkspacePath"])(), dirpath);
        this.timestamp = Date.now();
        this.branch = '';
        this.remote = '';
        this.detachedHEAD = false;
        this.branches = [];
        this.remotes = [];
        this.ahead = 0;
        this.behind = 0;
        this.submodules = [];
        this.mainRepositoryPath = '';
        this.oldModel = null;
    }
    getPath() {
        return this.dirpath;
    }
    getRelativePath() {
        const relativePath = this.dirpath.replace(Object(_application_Helper__WEBPACK_IMPORTED_MODULE_3__["getWorkspacePath"])(), '').replace(/\\/gi, '/');
        if (Object(path__WEBPACK_IMPORTED_MODULE_0__["isAbsolute"])(relativePath)) {
            return relativePath.substr(1);
        }
        return relativePath;
    }
    isRootGit() {
        return this.dirpath === Object(_application_Helper__WEBPACK_IMPORTED_MODULE_3__["getWorkspacePath"])();
    }
    getTimestamp() {
        return this.timestamp;
    }
    getBranch() {
        return this.branch;
    }
    setBranch(branch) {
        this.branch = branch;
    }
    getRemote() {
        return this.remote;
    }
    setRemote(remote) {
        this.remote = remote;
    }
    isHeadDetached() {
        return this.detachedHEAD;
    }
    setDetachedHEAD(detachedHEAD) {
        this.detachedHEAD = detachedHEAD;
    }
    setBranches(branches) {
        this.branches = Object.keys(branches)
            .map((key) => branches[key])
            .map((branch) => new _Branch__WEBPACK_IMPORTED_MODULE_1__["default"](branch.name, branch.commit));
    }
    getBranches() {
        return this.branches;
    }
    getLocalBranches() {
        return this.branches.filter((branch) => !branch.isRemote());
    }
    getRemoteBranches() {
        return this.branches.filter((branch) => branch.isRemote());
    }
    setRemotes(remotes) {
        this.remotes = remotes.map((remote) => remote.name);
    }
    getRemotes() {
        return this.remotes;
    }
    getAhead() {
        return this.ahead;
    }
    setAhead(ahead) {
        this.ahead = ahead;
    }
    getBehind() {
        return this.behind;
    }
    setBehind(behind) {
        this.behind = behind;
    }
    setSubmodules(CMDoutput) {
        this.submodules = [];
        if (!CMDoutput.length) {
            return;
        }
        const split = CMDoutput.split(' ');
        for (let i = 0; i < split.length;) {
            if (!split[i].length) {
                i++;
            }
            const hash = split[i];
            const path = split[i + 1];
            let branch = split[i + 2] || '';
            if (branch.indexOf('(') < 0) {
                branch = '';
                i--;
            }
            i += 3;
            this.submodules.push(new _Submodule__WEBPACK_IMPORTED_MODULE_2__["default"](hash, path, branch));
        }
    }
    getSubmodules() {
        return this.submodules;
    }
    setMainRepositoryPath(mainRepositoryPath) {
        this.mainRepositoryPath = mainRepositoryPath;
    }
    getMainRepositoryPath() {
        return this.mainRepositoryPath;
    }
    setOldModel(oldModel) {
        this.oldModel = oldModel;
    }
    getOldModel() {
        return this.oldModel;
    }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Branch; });

class Branch {
    constructor(name, commit) {
        this.name = name;
        this.commit = commit;
    }
    getName() {
        return this.name.replace(/remotes\//, '');
    }
    getCommit() {
        return this.commit;
    }
    isRemote() {
        return this.name.match(/remotes\//) ? true : false;
    }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Submodule; });

class Submodule {
    constructor(commitHash, path, branch) {
        this.commitHash = commitHash;
        this.path = path;
        this.branch = branch;
    }
    getCommitHash() {
        return this.commitHash;
    }
    getPath() {
        return this.path;
    }
    getBranch() {
        return this.branch;
    }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CMD; });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




/**
 * this class allows to execute commands in the OS-shell
 */
class CMD {
    /**
     * executes a given command in the shell
     * @param command command to execute
     * @param workspace path where the command should be executed
     */
    static executeCommand(command, workspace = Object(_Helper__WEBPACK_IMPORTED_MODULE_2__["getWorkspacePath"])()) {
        // input is validated to prevent command-injection
        return new Promise((resolve, reject) => {
            if (!CMD.commandInjectionRegexp.test(command)) {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showError(`Command '${command}' not allowed`, true);
                return reject();
            }
            // execute the passed command
            Object(child_process__WEBPACK_IMPORTED_MODULE_0__["exec"])(command, { cwd: workspace }, (error, stdout, _stderr) => {
                if (error !== null) {
                    return reject(error);
                }
                resolve(stdout.trim());
            });
        });
    }
}
// filter to validate the input
CMD.commandInjectionRegexp = new RegExp(/^[a-zA-Z 0-9\.\-\@]*$/);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) { // eslint-disable-line no-extra-semi
  var deepDiff = factory(root);
  // eslint-disable-next-line no-undef
  if (true) {
      // AMD
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { // eslint-disable-line no-undef
          return deepDiff;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var _deepdiff; }
}(this, function(root) {
  var validKinds = ['N', 'E', 'A', 'D'];

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString === 'function' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  // http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  function hashThisString(string) {
    var hash = 0;
    if (string.length === 0) { return hash; }
    for (var i = 0; i < string.length; i++) {
      var char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  // Gets a hash of the given object in an array order-independent fashion
  // also object key order independent (easier since they can be alphabetized)
  function getOrderIndependentHash(object) {
    var accum = 0;
    var type = realTypeOf(object);

    if (type === 'array') {
      object.forEach(function (item) {
        // Addition is commutative so this is order indep
        accum += getOrderIndependentHash(item);
      });

      var arrayString = '[type: array, hash: ' + accum + ']';
      return accum + hashThisString(arrayString);
    }

    if (type === 'object') {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          var keyValueString = '[ type: object, key: ' + key + ', value hash: ' + getOrderIndependentHash(object[key]) + ']';
          accum += hashThisString(keyValueString);
        }
      }

      return accum;
    }

    // Non object, non array...should be good?
    var stringToHash = '[ type: ' + type + ' ; value: ' + object + ']';
    return accum + hashThisString(stringToHash);
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack, orderIndependent) {
    changes = changes || [];
    path = path || [];
    stack = stack || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined' && key !== null) {
      if (prefilter) {
        if (typeof (prefilter) === 'function' && prefilter(currentPath, key)) {
          return;
        } else if (typeof (prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) {
            return;
          }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    var i, j, k, other;

    var ldefined = ltype !== 'undefined' ||
      (stack && (stack.length > 0) && stack[stack.length - 1].lhs &&
        Object.getOwnPropertyDescriptor(stack[stack.length - 1].lhs, key));
    var rdefined = rtype !== 'undefined' ||
      (stack && (stack.length > 0) && stack[stack.length - 1].rhs &&
        Object.getOwnPropertyDescriptor(stack[stack.length - 1].rhs, key));

    if (!ldefined && rdefined) {
      changes.push(new DiffNew(currentPath, rhs));
    } else if (!rdefined && ldefined) {
      changes.push(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes.push(new DiffEdit(currentPath, lhs, rhs));
    } else if (realTypeOf(lhs) === 'date' && (lhs - rhs) !== 0) {
      changes.push(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      for (i = stack.length - 1; i > -1; --i) {
        if (stack[i].lhs === lhs) {
          other = true;
          break;
        }
      }
      if (!other) {
        stack.push({ lhs: lhs, rhs: rhs });
        if (Array.isArray(lhs)) {
          // If order doesn't matter, we need to sort our arrays
          if (orderIndependent) {
            lhs.sort(function (a, b) {
              return getOrderIndependentHash(a) - getOrderIndependentHash(b);
            });

            rhs.sort(function (a, b) {
              return getOrderIndependentHash(a) - getOrderIndependentHash(b);
            });
          }
          i = rhs.length - 1;
          j = lhs.length - 1;
          while (i > j) {
            changes.push(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i--])));
          }
          while (j > i) {
            changes.push(new DiffArray(currentPath, j, new DiffDeleted(undefined, lhs[j--])));
          }
          for (; i >= 0; --i) {
            deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack, orderIndependent);
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          for (i = 0; i < akeys.length; ++i) {
            k = akeys[i];
            other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack, orderIndependent);
              pkeys[other] = null;
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack, orderIndependent);
            }
          }
          for (i = 0; i < pkeys.length; ++i) {
            k = pkeys[i];
            if (k) {
              deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack, orderIndependent);
            }
          }
        }
        stack.length = stack.length - 1;
      } else if (lhs !== rhs) {
        // lhs is contains a cycle at this element and it differs from rhs
        changes.push(new DiffEdit(currentPath, lhs, rhs));
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes.push(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function observableDiff(lhs, rhs, observer, prefilter, orderIndependent) {
    var changes = [];
    deepDiff(lhs, rhs, changes, prefilter, null, null, null, orderIndependent);
    if (observer) {
      for (var i = 0; i < changes.length; ++i) {
        observer(changes[i]);
      }
    }
    return changes;
  }

  function orderIndependentDeepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    return deepDiff(lhs, rhs, changes, prefilter, path, key, stack, true);
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    var observer = (accum) ?
      function (difference) {
        if (difference) {
          accum.push(difference);
        }
      } : undefined;
    var changes = observableDiff(lhs, rhs, observer, prefilter);
    return (accum) ? accum : (changes.length) ? changes : undefined;
  }

  function accumulateOrderIndependentDiff(lhs, rhs, prefilter, accum) {
    var observer = (accum) ?
      function (difference) {
        if (difference) {
          accum.push(difference);
        }
      } : undefined;
    var changes = observableDiff(lhs, rhs, observer, prefilter, true);
    return (accum) ? accum : (changes.length) ? changes : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (typeof change === 'undefined' && source && ~validKinds.indexOf(source.kind)) {
      change = source;
    }
    if (target && change && change.kind) {
      var it = target,
        i = -1,
        last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i + 1] !== 'undefined' && typeof change.path[i + 1] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          if (change.path && typeof it[change.path[i]] === 'undefined') {
            it[change.path[i]] = [];
          }
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
        i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
        i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function (change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      observableDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    orderIndependentDiff: {
      value: accumulateOrderIndependentDiff,
      enumerable: true
    },
    observableDiff: {
      value: observableDiff,
      enumerable: true
    },
    orderIndependentObservableDiff: {
      value: orderIndependentDeepDiff,
      enumerable: true
    },
    orderIndepHash: {
      value: getOrderIndependentHash,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function () {
        return typeof $conflict !== 'undefined';
      },
      enumerable: true
    }
  });

  // hackish...
  accumulateDiff.DeepDiff = accumulateDiff;
  // ...but works with:
  // import DeepDiff from 'deep-diff'
  // import { DeepDiff } from 'deep-diff'
  // const DeepDiff = require('deep-diff');
  // const { DeepDiff } = require('deep-diff');

  if (root) {
    root.DeepDiff = accumulateDiff;
  }

  return accumulateDiff;
}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise === 'undefined') {
   throw new ReferenceError("Promise wrappers must be enabled to use the promise API");
}

function isAsyncCall (fn) {
   return /^[^)]+then\s*\)/.test(fn) || /\._run\(/.test(fn);
}

module.exports = function (baseDir) {

   var Git = __webpack_require__(28);
   var gitFactory = __webpack_require__(54);
   var git;


   var chain = Promise.resolve();

   try {
      git = gitFactory(baseDir);
   }
   catch (e) {
      chain = Promise.reject(e);
   }

   return Object.keys(Git.prototype).reduce(function (promiseApi, fn) {
      if (/^_|then/.test(fn)) {
         return promiseApi;
      }

      if (isAsyncCall(Git.prototype[fn])) {
         promiseApi[fn] = git ? asyncWrapper(fn, git) : function () {
            return chain;
         };
      }

      else {
         promiseApi[fn] = git ? syncWrapper(fn, git, promiseApi) : function () {
            return promiseApi;
         };
      }

      return promiseApi;

   }, {});

   function asyncWrapper (fn, git) {
      return function () {
         var args = [].slice.call(arguments);

         if (typeof args[args.length] === 'function') {
            throw new TypeError(
               "Promise interface requires that handlers are not supplied inline, " +
               "trailing function not allowed in call to " + fn);
         }

         return chain.then(function () {
            return new Promise(function (resolve, reject) {
               args.push(function (err, result) {
                  if (err) {
                     return reject(toError(err));
                  }

                  resolve(result);
               });

               git[fn].apply(git, args);
            });
         });
      };
   }

   function syncWrapper (fn, git, api) {
      return function () {
         git[fn].apply(git, arguments);

         return api;
      };
   }

};

function toError (error) {

   if (error instanceof Error) {
      return error;
   }

   if (typeof error === 'string') {
      return new Error(error);
   }

   return Object.create(new Error(error), {
      git: { value: error },
   });
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

(function () {

   'use strict';

   var debug = __webpack_require__(29)('simple-git');
   var deferred = __webpack_require__(39);
   var exists = __webpack_require__(40);
   var NOOP = function () {};
   var responses = __webpack_require__(41);

   /**
    * Git handling for node. All public functions can be chained and all `then` handlers are optional.
    *
    * @param {string} baseDir base directory for all processes to run
    *
    * @param {Object} ChildProcess The ChildProcess module
    * @param {Function} Buffer The Buffer implementation to use
    *
    * @constructor
    */
   function Git (baseDir, ChildProcess, Buffer) {
      this._baseDir = baseDir;
      this._runCache = [];

      this.ChildProcess = ChildProcess;
      this.Buffer = Buffer;
   }

   /**
    * @type {string} The command to use to reference the git binary
    */
   Git.prototype._command = 'git';

   /**
    * @type {[key: string]: string} An object of key=value pairs to be passed as environment variables to the
    *                               spawned child process.
    */
   Git.prototype._env = null;

   /**
    * @type {Function} An optional handler to use when a child process is created
    */
   Git.prototype._outputHandler = null;

   /**
    * @type {boolean} Property showing whether logging will be silenced - defaults to true in a production environment
    */
   Git.prototype._silentLogging = /prod/.test("none");

   /**
    * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
    * the system path, or a fully qualified path to the executable.
    *
    * @param {string} command
    * @returns {Git}
    */
   Git.prototype.customBinary = function (command) {
      this._command = command;
      return this;
   };

   /**
    * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
    * a single object to entirely replace the current environment variables.
    *
    * @param {string|Object} name
    * @param {string} [value]
    * @returns {Git}
    */
   Git.prototype.env = function (name, value) {
      if (arguments.length === 1 && typeof name === 'object') {
         this._env = name;
      }
      else {
         (this._env = this._env || {})[name] = value;
      }

      return this;
   };

   /**
    * Sets the working directory of the subsequent commands.
    *
    * @param {string} workingDirectory
    * @param {Function} [then]
    * @returns {Git}
    */
   Git.prototype.cwd = function (workingDirectory, then) {
      var git = this;
      var next = Git.trailingFunctionArgument(arguments);

      return this.exec(function () {
         git._baseDir = workingDirectory;
         if (!exists(workingDirectory, exists.FOLDER)) {
            Git.exception(git, 'Git.cwd: cannot change to non-directory "' + workingDirectory + '"', next);
         }
         else {
            next && next(null, workingDirectory);
         }
      });
   };

   /**
    * Sets a handler function to be called whenever a new child process is created, the handler function will be called
    * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
    *
    * @example
    * require('simple-git')
    *    .outputHandler(function (command, stdout, stderr) {
    *       stdout.pipe(process.stdout);
    *    })
    *    .checkout('https://github.com/user/repo.git');
    *
    * @see https://nodejs.org/api/child_process.html#child_process_class_childprocess
    * @see https://nodejs.org/api/stream.html#stream_class_stream_readable
    * @param {Function} outputHandler
    * @returns {Git}
    */
   Git.prototype.outputHandler = function (outputHandler) {
      this._outputHandler = outputHandler;
      return this;
   };

   /**
    * Initialize a git repo
    *
    * @param {Boolean} [bare=false]
    * @param {Function} [then]
    */
   Git.prototype.init = function (bare, then) {
      var commands = ['init'];
      var next = Git.trailingFunctionArgument(arguments);

      if (bare === true) {
         commands.push('--bare');
      }

      return this._run(commands, function (err) {
         next && next(err);
      });
   };

   /**
    * Check the status of the local repo
    *
    * @param {Function} [then]
    */
   Git.prototype.status = function (then) {
      return this._run(
         ['status', '--porcelain', '-b', '-u'],
         Git._responseHandler(then, 'StatusSummary')
      );
   };

   /**
    * List the stash(s) of the local repo
    *
    * @param {Object|Array} [options]
    * @param {Function} [then]
    */
   Git.prototype.stashList = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var opt = (handler === then ? options : null) || {};

      var splitter = opt.splitter || requireResponseHandler('ListLogSummary').SPLITTER;
      var command = ["stash", "list", "--pretty=format:"
         + requireResponseHandler('ListLogSummary').START_BOUNDARY
         + "%H %ai %s%d %aN %ae".replace(/\s+/g, splitter)
         + requireResponseHandler('ListLogSummary').COMMIT_BOUNDARY
      ];

      if (Array.isArray(opt)) {
         command = command.concat(opt);
      }

      return this._run(command,
         Git._responseHandler(handler, 'ListLogSummary', splitter)
      );
   };

   /**
    * Stash the local repo
    *
    * @param {Object|Array} [options]
    * @param {Function} [then]
    */
   Git.prototype.stash = function (options, then) {
      var command = ['stash'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      command.push.apply(command, Git.trailingArrayArgument(arguments));

      return this._run(command, Git._responseHandler(Git.trailingFunctionArgument(arguments)));
   };

   /**
    * Clone a git repo
    *
    * @param {string} repoPath
    * @param {string} localPath
    * @param {String[]} [options] Optional array of options to pass through to the clone command
    * @param {Function} [then]
    */
   Git.prototype.clone = function (repoPath, localPath, options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['clone'].concat(Git.trailingArrayArgument(arguments));

      for (var i = 0, iMax = arguments.length; i < iMax; i++) {
         if (typeof arguments[i] === 'string') {
            command.push(arguments[i]);
         }
      }

      return this._run(command, function (err, data) {
         next && next(err, data);
      });
   };

   /**
    * Mirror a git repo
    *
    * @param {string} repoPath
    * @param {string} localPath
    * @param {Function} [then]
    */
   Git.prototype.mirror = function (repoPath, localPath, then) {
      return this.clone(repoPath, localPath, ['--mirror'], then);
   };

   /**
    * Moves one or more files to a new destination.
    *
    * @see https://git-scm.com/docs/git-mv
    *
    * @param {string|string[]} from
    * @param {string} to
    * @param {Function} [then]
    */
   Git.prototype.mv = function (from, to, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      var command = [].concat(from);
      command.unshift('mv', '-v');
      command.push(to);

      this._run(command, Git._responseHandler(handler, 'MoveSummary'))
   };

   /**
    * Internally uses pull and tags to get the list of tags then checks out the latest tag.
    *
    * @param {Function} [then]
    */
   Git.prototype.checkoutLatestTag = function (then) {
      var git = this;
      return this.pull(function () {
         git.tags(function (err, tags) {
            git.checkout(tags.latest, then);
         });
      });
   };

   /**
    * Adds one or more files to source control
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.add = function (files, then) {
      return this._run(['add'].concat(files), function (err, data) {
         then && then(err);
      });
   };

   /**
    * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
    * files will be committed.
    *
    * @param {string|string[]} message
    * @param {string|string[]} [files]
    * @param {Object} [options]
    * @param {Function} [then]
    */
   Git.prototype.commit = function (message, files, options, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      var command = ['commit'];

      [].concat(message).forEach(function (message) {
         command.push('-m', message);
      });

      [].push.apply(command, [].concat(typeof files === "string" || Array.isArray(files) ? files : []));

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      return this._run(
         command,
         Git._responseHandler(handler, 'CommitSummary')
      );
   };

   /**
    * Gets a function to be used for logging.
    *
    * @param {string} level
    * @param {string} [message]
    *
    * @returns {Function}
    * @private
    */
   Git.prototype._getLog = function (level, message) {
      var log = this._silentLogging ? NOOP : console[level].bind(console);
      if (arguments.length > 1) {
         log(message);
      }
      return log;
   };

   /**
    * Pull the updated contents of the current repo
    *
    * @param {string} [remote] When supplied must also include the branch
    * @param {string} [branch] When supplied must also include the remote
    * @param {Object} [options] Optionally include set of options to merge into the command
    * @param {Function} [then]
    */
   Git.prototype.pull = function (remote, branch, options, then) {
      var command = ["pull"];
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      return this._run(command, Git._responseHandler(handler, 'PullSummary'));
   };

   /**
    * Fetch the updated contents of the current repo.
    *
    * @example
    *   .fetch('upstream', 'master') // fetches from master on remote named upstream
    *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
    *
    * @param {string} [remote]
    * @param {string} [branch]
    * @param {Function} [then]
    */
   Git.prototype.fetch = function (remote, branch, then) {
      var command = ["fetch"];
      var next = Git.trailingFunctionArgument(arguments);
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      if (Array.isArray(remote)) {
         command = command.concat(remote);
      }

      return this._run(
         command,
         Git._responseHandler(next, 'FetchSummary'),
         {
            concatStdErr: true
         }
      );
   };

   /**
    * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
    * a production environment.
    *
    * @param {boolean} silence
    * @returns {Git}
    */
   Git.prototype.silent = function (silence) {
      this._silentLogging = !!silence;
      return this;
   };

   /**
    * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
    * sort the tags by that property instead of using the default semantic versioning sort.
    *
    * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
    *
    * @param {Object} [options]
    * @param {Function} [then]
    */
   Git.prototype.tags = function (options, then) {
      var next = Git.trailingFunctionArgument(arguments);

      var command = ['-l'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      var hasCustomSort = command.some(function (option) {
         return /^--sort=/.test(option);
      });

      return this.tag(
         command,
         Git._responseHandler(next, 'TagList', [hasCustomSort])
      );
   };

   /**
    * Rebases the current working copy. Options can be supplied either as an array of string parameters
    * to be sent to the `git rebase` command, or a standard options object.
    *
    * @param {Object|String[]} [options]
    * @param {Function} [then]
    * @returns {Git}
    */
   Git.prototype.rebase = function (options, then) {
      var command = ['rebase'];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      command.push.apply(command, Git.trailingArrayArgument(arguments));


      return this._run(command, Git._responseHandler(Git.trailingFunctionArgument(arguments)));
   };

   /**
    * Reset a repo
    *
    * @param {string|string[]} [mode=soft] Either an array of arguments supported by the 'git reset' command, or the
    *                                        string value 'soft' or 'hard' to set the reset mode.
    * @param {Function} [then]
    */
   Git.prototype.reset = function (mode, then) {
      var command = ['reset'];
      var next = Git.trailingFunctionArgument(arguments);
      if (next === mode || typeof mode === 'string' || !mode) {
         var modeStr = ['mixed', 'soft', 'hard'].includes(mode) ? mode : 'soft';
         command.push('--' + modeStr);
      }
      else if (Array.isArray(mode)) {
         command.push.apply(command, mode);
      }

      return this._run(command, function (err) {
         next && next(err || null);
      });
   };

   /**
    * Revert one or more commits in the local working copy
    *
    * @param {string} commit The commit to revert. Can be any hash, offset (eg: `HEAD~2`) or range (eg: `master~5..master~2`)
    * @param {Object} [options] Optional options object
    * @param {Function} [then]
    */
   Git.prototype.revert = function (commit, options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['revert'];

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (typeof commit !== 'string') {
         return this.exec(function () {
            next && next(new TypeError("Commit must be a string"));
         });
      }

      command.push(commit);
      return this._run(command, function (err) {
         next && next(err || null);
      });
   };

   /**
    * Add a lightweight tag to the head of the current branch
    *
    * @param {string} name
    * @param {Function} [then]
    */
   Git.prototype.addTag = function (name, then) {
      if (typeof name !== "string") {
         return this.exec(function () {
            then && then(new TypeError("Git.addTag requires a tag name"));
         });
      }

      var command = [name];
      return then ? this.tag(command, then) : this.tag(command);
   };

   /**
    * Add an annotated tag to the head of the current branch
    *
    * @param {string} tagName
    * @param {string} tagMessage
    * @param {Function} [then]
    */
   Git.prototype.addAnnotatedTag = function (tagName, tagMessage, then) {
      return this.tag(['-a', '-m', tagMessage, tagName], function (err) {
         then && then(err);
      });
   };

   /**
    * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
    * by supplying either a string or array of strings as the `what` parameter.
    *
    * @param {string|string[]} what One or more commands to pass to `git checkout`
    * @param {Function} [then]
    */
   Git.prototype.checkout = function (what, then) {
      var command = ['checkout'];
      command = command.concat(what);

      return this._run(command, function (err, data) {
         then && then(err, !err && this._parseCheckout(data));
      });
   };

   /**
    * Check out a remote branch
    *
    * @param {string} branchName name of branch
    * @param {string} startPoint (e.g origin/development)
    * @param {Function} [then]
    */
   Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
      return this.checkout(['-b', branchName, startPoint], then);
   };

   /**
    * Check out a local branch
    *
    * @param {string} branchName of branch
    * @param {Function} [then]
    */
   Git.prototype.checkoutLocalBranch = function (branchName, then) {
      return this.checkout(['-b', branchName], then);
   };

   /**
    * Delete a local branch
    *
    * @param {string} branchName name of branch
    * @param {Function} [then]
    */
   Git.prototype.deleteLocalBranch = function (branchName, then) {
      return this.branch(['-d', branchName], then);
   };

   /**
    * List all branches
    *
    * @param {Object | string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.branch = function (options, then) {
      var isDelete, responseHandler;
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['branch'];

      command.push.apply(command, Git.trailingArrayArgument(arguments));
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (!arguments.length || next === options) {
         command.push('-a');
      }

      isDelete = ['-d', '-D', '--delete'].reduce(function (isDelete, flag) {
         return isDelete || command.indexOf(flag) > 0;
      }, false);

      if (command.indexOf('-v') < 0) {
         command.splice(1, 0, '-v');
      }

      responseHandler = isDelete
         ? Git._responseHandler(next, 'BranchDeleteSummary', false)
         : Git._responseHandler(next, 'BranchSummary');

      return this._run(command, responseHandler);
   };

   /**
    * Return list of local branches
    *
    * @param {Function} [then]
    */
   Git.prototype.branchLocal = function (then) {
      return this.branch(['-v'], then);
   };

   /**
    * Add config to local git instance
    *
    * @param {string} key configuration key (e.g user.name)
    * @param {string} value for the given key (e.g your name)
    * @param {Function} [then]
    */
   Git.prototype.addConfig = function (key, value, then) {
      return this._run(['config', '--local', key, value], function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Executes any command against the git binary.
    *
    * @param {string[]|Object} commands
    * @param {Function} [then]
    *
    * @returns {Git}
    */
   Git.prototype.raw = function (commands, then) {
      var command = [];
      if (Array.isArray(commands)) {
         command = commands.slice(0);
      }
      else {
         Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      }

      var next = Git.trailingFunctionArgument(arguments);

      if (!command.length) {
         return this.exec(function () {
            next && next(new Error('Raw: must supply one or more command to execute'), null);
         });
      }

      return this._run(command, function (err, data) {
         next && next(err, !err && data || null);
      });
   };

   /**
    * Add a submodule
    *
    * @param {string} repo
    * @param {string} path
    * @param {Function} [then]
    */
   Git.prototype.submoduleAdd = function (repo, path, then) {
      return this._run(['submodule', 'add', repo, path], function (err) {
         then && then(err);
      });
   };

   /**
    * Update submodules
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.submoduleUpdate = function (args, then) {
      if (typeof args === 'string') {
         this._getLog('warn', 'Git#submoduleUpdate: args should be supplied as an array of individual arguments');
      }

      var next = Git.trailingFunctionArgument(arguments);
      var command = (args !== next) ? args : [];

      return this.subModule(['update'].concat(command), function (err, args) {
         next && next(err, args);
      });
   };

   /**
    * Initialize submodules
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.submoduleInit = function (args, then) {
      if (typeof args === 'string') {
         this._getLog('warn', 'Git#submoduleInit: args should be supplied as an array of individual arguments');
      }

      var next = Git.trailingFunctionArgument(arguments);
      var command = (args !== next) ? args : [];

      return this.subModule(['init'].concat(command), function (err, args) {
         next && next(err, args);
      });
   };

   /**
    * Call any `git submodule` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.subModule = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.subModule requires an array of arguments"));
         });
      }

      if (options[0] !== 'submodule') {
         options.unshift('submodule');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * List remote
    *
    * @param {string[]} [args]
    * @param {Function} [then]
    */
   Git.prototype.listRemote = function (args, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var data = next === args || args === undefined ? [] : args;

      if (typeof data === 'string') {
         this._getLog('warn', 'Git#listRemote: args should be supplied as an array of individual arguments');
      }

      return this._run(['ls-remote'].concat(data), function (err, data) {
         next && next(err, data);
      });
   };

   /**
    * Adds a remote to the list of remotes.
    *
    * @param {string} remoteName Name of the repository - eg "upstream"
    * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
    * @param {Function} [then]
    * @returns {*}
    */
   Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
      return this._run(['remote', 'add', remoteName, remoteRepo], function (err) {
         then && then(err);
      });
   };

   /**
    * Removes an entry from the list of remotes.
    *
    * @param {string} remoteName Name of the repository - eg "upstream"
    * @param {Function} [then]
    * @returns {*}
    */
   Git.prototype.removeRemote = function (remoteName, then) {
      return this._run(['remote', 'remove', remoteName], function (err) {
         then && then(err);
      });
   };

   /**
    * Gets the currently available remotes, setting the optional verbose argument to true includes additional
    * detail on the remotes themselves.
    *
    * @param {boolean} [verbose=false]
    * @param {Function} [then]
    */
   Git.prototype.getRemotes = function (verbose, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var args = verbose === true ? ['-v'] : [];

      return this.remote(args, function (err, data) {
         next && next(err, !err && function () {
            return data.trim().split('\n').filter(Boolean).reduce(function (remotes, remote) {
               var detail = remote.trim().split(/\s+/);
               var name = detail.shift();

               if (!remotes[name]) {
                  remotes[name] = remotes[remotes.length] = {
                     name: name,
                     refs: {}
                  };
               }

               if (detail.length) {
                  remotes[name].refs[detail.pop().replace(/[^a-z]/g, '')] = detail.pop();
               }

               return remotes;
            }, []).slice(0);
         }());
      });
   };

   /**
    * Call any `git remote` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.remote = function (options, then) {
      if (!Array.isArray(options)) {
         return this.exec(function () {
            then && then(new TypeError("Git.remote requires an array of arguments"));
         });
      }

      if (options[0] !== 'remote') {
         options.unshift('remote');
      }

      return this._run(options, function (err, data) {
         then && then(err || null, err ? null : data);
      });
   };

   /**
    * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
    * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
    *
    * @param {string} from
    * @param {string} to
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.mergeFromTo = function (from, to, options, then) {
      var commands = [
         from,
         to
      ];
      var callback = Git.trailingFunctionArgument(arguments);

      if (Array.isArray(options)) {
         commands = commands.concat(options);
      }

      return this.merge(commands, callback);
   };

   /**
    * Runs a merge, `options` can be either an array of arguments
    * supported by the [`git merge`](https://git-scm.com/docs/git-merge)
    * or an options object.
    *
    * Conflicts during the merge result in an error response,
    * the response type whether it was an error or success will be a MergeSummary instance.
    * When successful, the MergeSummary has all detail from a the PullSummary
    *
    * @param {Object | string[]} [options]
    * @param {Function} [then]
    * @returns {*}
    *
    * @see ./responses/MergeSummary.js
    * @see ./responses/PullSummary.js
    */
   Git.prototype.merge = function (options, then) {
      var self = this;
      var userHandler = Git.trailingFunctionArgument(arguments) || NOOP;
      var mergeHandler = function (err, mergeSummary) {
         if (!err && mergeSummary.failed) {
            return Git.fail(self, mergeSummary, userHandler);
         }

         userHandler(err, mergeSummary);
      };

      var command = [];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      command.push.apply(command, Git.trailingArrayArgument(arguments));

      if (command[0] !== 'merge') {
         command.unshift('merge');
      }

      if (command.length === 1) {
         return this.exec(function () {
            then && then(new TypeError("Git.merge requires at least one option"));
         });
      }

      return this._run(command, Git._responseHandler(mergeHandler, 'MergeSummary'), {
         concatStdErr: true
      });
   };

   /**
    * Call any `git tag` function with arguments passed as an array of strings.
    *
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.tag = function (options, then) {
      var command = [];
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
      command.push.apply(command, Git.trailingArrayArgument(arguments));

      if (command[0] !== 'tag') {
         command.unshift('tag');
      }

      return this._run(command, Git._responseHandler(Git.trailingFunctionArgument(arguments)));
   };

   /**
    * Updates repository server info
    *
    * @param {Function} [then]
    */
   Git.prototype.updateServerInfo = function (then) {
      return this._run(["update-server-info"], function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Pushes the current committed changes to a remote, optionally specify the names of the remote and branch to use
    * when pushing. Supply multiple options as an array of strings in the first argument - see examples below.
    *
    * @param {string|string[]} [remote]
    * @param {string} [branch]
    * @param {Function} [then]
    */
   Git.prototype.push = function (remote, branch, then) {
      var command = [];
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof remote === 'string' && typeof branch === 'string') {
         command.push(remote, branch);
      }

      if (Array.isArray(remote)) {
         command = command.concat(remote);
      }

      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

      if (command[0] !== 'push') {
         command.unshift('push');
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
    * default configured remote spec.
    *
    * @param {string} [remote]
    * @param {Function} [then]
    */
   Git.prototype.pushTags = function (remote, then) {
      var command = ['push'];
      if (typeof remote === "string") {
         command.push(remote);
      }
      command.push('--tags');

      then = typeof arguments[arguments.length - 1] === "function" ? arguments[arguments.length - 1] : null;

      return this._run(command, function (err, data) {
         then && then(err, !err && data);
      });
   };

   /**
    * Removes the named files from source control.
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.rm = function (files, then) {
      return this._rm(files, '-f', then);
   };

   /**
    * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
    * completely remove the files, use `rm`.
    *
    * @param {string|string[]} files
    * @param {Function} [then]
    */
   Git.prototype.rmKeepLocal = function (files, then) {
      return this._rm(files, '--cached', then);
   };

   /**
    * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
    * size, and type.
    *
    * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.catFile = function (options, then) {
      return this._catFile('utf-8', arguments);
   };

   /**
    * Equivalent to `catFile` but will return the native `Buffer` of content from the git command's stdout.
    *
    * @param {string[]} options
    * @param then
    */
   Git.prototype.binaryCatFile = function (options, then) {
      return this._catFile('buffer', arguments);
   };

   Git.prototype._catFile = function (format, args) {
      var handler = Git.trailingFunctionArgument(args);
      var command = ['cat-file'];
      var options = args[0];

      if (typeof options === 'string') {
         throw new TypeError('Git#catFile: options must be supplied as an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, data);
      }, {
         format: format
      });
   };

   /**
    * Return repository changes.
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.diff = function (options, then) {
      var command = ['diff'];

      if (typeof options === 'string') {
         command[0] += ' ' + options;
         this._getLog('warn',
            'Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      if (typeof arguments[arguments.length - 1] === 'function') {
         then = arguments[arguments.length - 1];
      }

      return this._run(command, function (err, data) {
         then && then(err, data);
      });
   };

   Git.prototype.diffSummary = function (options, then) {
      var next = Git.trailingFunctionArgument(arguments);
      var command = ['--stat=4096'];

      if (options && options !== next) {
         command.push.apply(command, [].concat(options));
      }

      return this.diff(command, Git._responseHandler(next, 'DiffSummary'));
   };

   /**
    * Wraps `git rev-parse`. Primarily used to convert friendly commit references (ie branch names) to SHA1 hashes.
    *
    * Options should be an array of string options compatible with the `git rev-parse`
    *
    * @param {string|string[]} [options]
    * @param {Function} [then]
    *
    * @see https://git-scm.com/docs/git-rev-parse
    */
   Git.prototype.revparse = function (options, then) {
      var command = ['rev-parse'];

      if (typeof options === 'string') {
         command = command + ' ' + options;
         this._getLog('warn',
            'Git#revparse: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      if (typeof arguments[arguments.length - 1] === 'function') {
         then = arguments[arguments.length - 1];
      }

      return this._run(command, function (err, data) {
         then && then(err, err ? null : String(data).trim());
      });
   };

   /**
    * Show various types of objects, for example the file at a certain commit
    *
    * @param {string[]} [options]
    * @param {Function} [then]
    */
   Git.prototype.show = function (options, then) {
      var args = [].slice.call(arguments, 0);
      var handler = typeof args[args.length - 1] === "function" ? args.pop() : null;
      var command = ['show'];
      if (typeof options === 'string') {
         command = command + ' ' + options;
         this._getLog('warn',
            'Git#show: supplying options as a single string is now deprecated, switch to an array of strings');
      }
      else if (Array.isArray(options)) {
         command.push.apply(command, options);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });
   };

   /**
    * @param {string} mode Required parameter "n" or "f"
    * @param {string[]} options
    * @param {Function} [then]
    */
   Git.prototype.clean = function (mode, options, then) {
      var handler = Git.trailingFunctionArgument(arguments);

      if (typeof mode !== 'string' || !/[nf]/.test(mode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean mode parameter ("n" or "f") is required'));
         });
      }

      if (/[^dfinqxX]/.test(mode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean unknown option found in ' + JSON.stringify(mode)));
         });
      }

      var command = ['clean', '-' + mode];
      if (Array.isArray(options)) {
         command = command.concat(options);
      }

      if (command.some(interactiveMode)) {
         return this.exec(function () {
            handler && handler(new TypeError('Git clean interactive mode is not supported'));
         });
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && data);
      });

      function interactiveMode (option) {
         if (/^-[^\-]/.test(option)) {
            return option.indexOf('i') > 0;
         }

         return option === '--interactive';
      }
   };

   /**
    * Call a simple function at the next step in the chain.
    * @param {Function} [then]
    */
   Git.prototype.exec = function (then) {
      this._run([], function () {
         typeof then === 'function' && then();
      });
      return this;
   };

   /**
    * Deprecated means of adding a regular function call at the next step in the chain. Use the replacement
    * Git#exec, the Git#then method will be removed in version 2.x
    *
    * @see exec
    * @deprecated
    */
   Git.prototype.then = function (then) {
      this._getLog(
         'error', `
Git#then is deprecated after version 1.72 and will be removed in version 2.x
To use promises switch to importing 'simple-git/promise'.`);

      return this.exec(then);
   };

   /**
    * Show commit logs from `HEAD` to the first commit.
    * If provided between `options.from` and `options.to` tags or branch.
    *
    * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
    *
    * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
    *
    * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
    * For any other set of options, supply options as an array of strings to be appended to the git log command.
    *
    * @param {Object|string[]} [options]
    * @param {string} [options.from] The first commit to include
    * @param {string} [options.to] The most recent commit to include
    * @param {string} [options.file] A single file to include in the result
    * @param {boolean} [options.multiLine] Optionally include multi-line commit messages
    *
    * @param {Function} [then]
    */
   Git.prototype.log = function (options, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var opt = (handler === then ? options : null) || {};

      var splitter = opt.splitter || requireResponseHandler('ListLogSummary').SPLITTER;
      var format = opt.format || {
         hash: '%H',
         date: '%ai',
         message: '%s',
         refs: '%D',
         body: opt.multiLine ? '%B' : '%b',
         author_name: '%aN',
         author_email: '%ae'
      };
      var rangeOperator = (opt.symmetric !== false) ? '...' : '..';

      var fields = Object.keys(format);
      var formatstr = fields.map(function (k) {
         return format[k];
      }).join(splitter);
      var suffix = [];
      var command = ["log", "--pretty=format:"
         + requireResponseHandler('ListLogSummary').START_BOUNDARY
         + formatstr
         + requireResponseHandler('ListLogSummary').COMMIT_BOUNDARY
      ];

      if (Array.isArray(opt)) {
         command = command.concat(opt);
         opt = {};
      }
      else if (typeof arguments[0] === "string" || typeof arguments[1] === "string") {
         this._getLog('warn',
            'Git#log: supplying to or from as strings is now deprecated, switch to an options configuration object');
         opt = {
            from: arguments[0],
            to: arguments[1]
         };
      }

      if (opt.n || opt['max-count']) {
         command.push("--max-count=" + (opt.n || opt['max-count']));
      }

      if (opt.from && opt.to) {
         command.push(opt.from + rangeOperator + opt.to);
      }

      if (opt.file) {
         suffix.push("--follow", options.file);
      }

      'splitter n max-count file from to --pretty format symmetric multiLine'.split(' ').forEach(function (key) {
         delete opt[key];
      });

      Git._appendOptions(command, opt);

      return this._run(
         command.concat(suffix),
         Git._responseHandler(handler, 'ListLogSummary', [splitter, fields])
      );
   };

   /**
    * Clears the queue of pending commands and returns the wrapper instance for chaining.
    *
    * @returns {Git}
    */
   Git.prototype.clearQueue = function () {
      this._runCache.length = 0;
      return this;
   };

   /**
    * Check if a pathname or pathnames are excluded by .gitignore
    *
    * @param {string|string[]} pathnames
    * @param {Function} [then]
    */
   Git.prototype.checkIgnore = function (pathnames, then) {
      var handler = Git.trailingFunctionArgument(arguments);
      var command = ["check-ignore"];

      if (handler !== pathnames) {
         command = command.concat(pathnames);
      }

      return this._run(command, function (err, data) {
         handler && handler(err, !err && this._parseCheckIgnore(data));
      });
   };

   /**
    * Validates that the current repo is a Git repo.
    *
    * @param {Function} [then]
    */
   Git.prototype.checkIsRepo = function (then) {
      function onError (exitCode, stdErr, done, fail) {
         if (exitCode === 128 && /(Not a git repository|Kein Git-Repository)/i.test(stdErr)) {
            return done(false);
         }

         fail(stdErr);
      }

      function handler (err, isRepo) {
         then && then(err, String(isRepo).trim() === 'true');
      }

      return this._run(['rev-parse', '--is-inside-work-tree'], handler, {onError: onError});
   };

   Git.prototype._rm = function (_files, options, then) {
      var files = [].concat(_files);
      var args = ['rm', options];
      args.push.apply(args, files);

      return this._run(args, function (err) {
         then && then(err);
      });
   };

   Git.prototype._parseCheckout = function (checkout) {
      // TODO
   };

   /**
    * Parser for the `check-ignore` command - returns each
    * @param {string} [files]
    * @returns {string[]}
    */
   Git.prototype._parseCheckIgnore = function (files) {
      return files.split(/\n/g).filter(Boolean).map(function (file) {
         return file.trim()
      });
   };

   /**
    * Schedules the supplied command to be run, the command should not include the name of the git binary and should
    * be an array of strings passed as the arguments to the git binary.
    *
    * @param {string[]} command
    * @param {Function} then
    * @param {Object} [opt]
    * @param {boolean} [opt.concatStdErr=false] Optionally concatenate stderr output into the stdout
    * @param {boolean} [opt.format="utf-8"] The format to use when reading the content of stdout
    * @param {Function} [opt.onError] Optional error handler for this command - can be used to allow non-clean exits
    *                                  without killing the remaining stack of commands
    * @param {number} [opt.onError.exitCode]
    * @param {string} [opt.onError.stdErr]
    *
    * @returns {Git}
    */
   Git.prototype._run = function (command, then, opt) {
      if (typeof command === "string") {
         command = command.split(" ");
      }
      this._runCache.push([command, then, opt || {}]);
      this._schedule();

      return this;
   };

   Git.prototype._schedule = function () {
      if (!this._childProcess && this._runCache.length) {
         var git = this;
         var Buffer = git.Buffer;
         var task = git._runCache.shift();

         var command = task[0];
         var then = task[1];
         var options = task[2];

         debug(command);

         var result = deferred();

         var attempted = false;
         var attemptClose = function attemptClose (e) {

            // closing when there is content, terminate immediately
            if (attempted || stdErr.length || stdOut.length) {
               result.resolve(e);
               attempted = true;
            }

            // first attempt at closing but no content yet, wait briefly for the close/exit that may follow
            if (!attempted) {
               attempted = true;
               setTimeout(attemptClose.bind(this, e), 50);
            }

         };

         var stdOut = [];
         var stdErr = [];
         var spawned = git.ChildProcess.spawn(git._command, command.slice(0), {
            cwd: git._baseDir,
            env: git._env,
            windowsHide: true
         });

         spawned.stdout.on('data', function (buffer) {
            stdOut.push(buffer);
         });

         spawned.stderr.on('data', function (buffer) {
            stdErr.push(buffer);
         });

         spawned.on('error', function (err) {
            stdErr.push(Buffer.from(err.stack, 'ascii'));
         });

         spawned.on('close', attemptClose);
         spawned.on('exit', attemptClose);

         result.promise.then(function (exitCode) {
            function done (output) {
               then.call(git, null, output);
            }

            function fail (error) {
               Git.fail(git, error, then);
            }

            delete git._childProcess;

            if (exitCode && stdErr.length && options.onError) {
               options.onError(exitCode, Buffer.concat(stdErr).toString('utf-8'), done, fail);
            }
            else if (exitCode && stdErr.length) {
               fail(Buffer.concat(stdErr).toString('utf-8'));
            }
            else {
               if (options.concatStdErr) {
                  [].push.apply(stdOut, stdErr);
               }

               var stdOutput = Buffer.concat(stdOut);
               if (options.format !== 'buffer') {
                  stdOutput = stdOutput.toString(options.format || 'utf-8');
               }

               done(stdOutput);
            }

            process.nextTick(git._schedule.bind(git));
         });

         git._childProcess = spawned;

         if (git._outputHandler) {
            git._outputHandler(command[0], git._childProcess.stdout, git._childProcess.stderr);
         }
      }
   };

   /**
    * Handles an exception in the processing of a command.
    */
   Git.fail = function (git, error, handler) {
      git._getLog('error', error);
      git._runCache.length = 0;
      if (typeof handler === 'function') {
         handler.call(git, error, null);
      }
   };

   /**
    * Given any number of arguments, returns the last argument if it is a function, otherwise returns null.
    * @returns {Function|null}
    */
   Git.trailingFunctionArgument = function (args) {
      var trailing = args[args.length - 1];
      return (typeof trailing === "function") ? trailing : null;
   };

   /**
    * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
    * if there is one. When not found, the return value is null.
    * @returns {Object|null}
    */
   Git.trailingOptionsArgument = function (args) {
      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
      return Object.prototype.toString.call(options) === '[object Object]' ? options : null;
   };

   /**
    * Given any number of arguments, returns the trailing options array argument, ignoring a trailing function argument
    * if there is one. When not found, the return value is an empty array.
    * @returns {Array}
    */
   Git.trailingArrayArgument = function (args) {
      var options = args[(args.length - (Git.trailingFunctionArgument(args) ? 2 : 1))];
      return Object.prototype.toString.call(options) === '[object Array]' ? options : [];
   };

   /**
    * Mutates the supplied command array by merging in properties in the options object. When the
    * value of the item in the options object is a string it will be concatenated to the key as
    * a single `name=value` item, otherwise just the name will be used.
    *
    * @param {string[]} command
    * @param {Object} options
    * @private
    */
   Git._appendOptions = function (command, options) {
      if (options === null) {
         return;
      }

      Object.keys(options).forEach(function (key) {
         var value = options[key];
         if (typeof value === 'string') {
            command.push(key + '=' + value);
         }
         else {
            command.push(key);
         }
      });
   };

   /**
    * Given the type of response and the callback to receive the parsed response,
    * uses the correct parser and calls back the callback.
    *
    * @param {Function} callback
    * @param {string} [type]
    * @param {Object[]} [args]
    *
    * @private
    */
   Git._responseHandler = function (callback, type, args) {
      return function (error, data) {
         if (typeof callback !== 'function') {
            return;
         }

         if (error) {
            return callback(error, null);
         }

         if (!type) {
            return callback(null, data);
         }

         var handler = requireResponseHandler(type);
         var result = handler.parse.apply(handler, [data].concat(args === undefined ? [] : args));

         callback(null, result);
      };

   };

   /**
    * Marks the git instance as having had a fatal exception by clearing the pending queue of tasks and
    * logging to the console.
    *
    * @param git
    * @param error
    * @param callback
    */
   Git.exception = function (git, error, callback) {
      git._runCache.length = 0;
      if (typeof callback === 'function') {
         callback(error instanceof Error ? error : new Error(error));
      }

      git._getLog('error', error);
   };

   module.exports = Git;

   /**
    * Requires and returns a response handler based on its named type
    * @param {string} type
    */
   function requireResponseHandler (type) {
      return responses[type];
   }

}());


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(30);
} else {
	module.exports = __webpack_require__(33);
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(31)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(32);

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(34);
const util = __webpack_require__(35);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(36);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(31)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(37);
const hasFlag = __webpack_require__(38);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {


module.exports = function deferred () {
   var d = {};
   d.promise = new Promise(function (resolve, reject) {
      d.resolve = resolve;
      d.reject = reject
   });

   return d;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


var fs = __webpack_require__(18);

function exists (path, isFile, isDirectory) {
   try {
      var matches = false;
      var stat = fs.statSync(path);

      matches = matches || isFile && stat.isFile();
      matches = matches || isDirectory && stat.isDirectory();

      return matches;
   }
   catch (e) {
      if (e.code === 'ENOENT') {
         return false;
      }

      throw e;
   }
}

module.exports = function (path, type) {
   if (!type) {
      return exists(path, true, true);
   }

   return exists(path, type & 1, type & 2);
};

module.exports.FILE = 1;

module.exports.FOLDER = 2;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = {
   BranchDeleteSummary: __webpack_require__(42),
   BranchSummary: __webpack_require__(43),
   CommitSummary: __webpack_require__(44),
   DiffSummary: __webpack_require__(45),
   FetchSummary: __webpack_require__(46),
   FileStatusSummary: __webpack_require__(47),
   ListLogSummary: __webpack_require__(48),
   MergeSummary: __webpack_require__(49),
   MoveSummary: __webpack_require__(51),
   PullSummary: __webpack_require__(50),
   StatusSummary: __webpack_require__(52),
   TagList: __webpack_require__(53),
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {


module.exports = BranchDeletion;

function BranchDeletion (branch, hash) {
   this.branch = branch;
   this.hash = hash;
   this.success = hash !== null;
}

BranchDeletion.deleteSuccessRegex = /(\S+)\s+\(\S+\s([^\)]+)\)/;
BranchDeletion.deleteErrorRegex = /^error[^']+'([^']+)'/;

BranchDeletion.parse = function (data, asArray) {
   var result;
   var branchDeletions = data.trim().split('\n').map(function (line) {
         if (result = BranchDeletion.deleteSuccessRegex.exec(line)) {
            return new BranchDeletion(result[1], result[2]);
         }
         else if (result = BranchDeletion.deleteErrorRegex.exec(line)) {
            return new BranchDeletion(result[1], null);
         }
      })
      .filter(Boolean);

   return asArray ? branchDeletions : branchDeletions.pop();
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {


module.exports = BranchSummary;

function BranchSummary () {
   this.detached = false;
   this.current = '';
   this.all = [];
   this.branches = {};
}

BranchSummary.prototype.push = function (current, detached, name, commit, label) {
   if (current) {
      this.detached = detached;
      this.current = name;
   }
   this.all.push(name);
   this.branches[name] = {
      current: current,
      name: name,
      commit: commit,
      label: label
   };
};

BranchSummary.detachedRegex = /^(\*?\s+)\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/;
BranchSummary.branchRegex = /^(\*?\s+)(\S+)\s+([a-z0-9]+)\s(.*)$/;

BranchSummary.parse = function (commit) {
   var branchSummary = new BranchSummary();

   commit.split('\n')
      .forEach(function (line) {
         var detached = true;
         var branch = BranchSummary.detachedRegex.exec(line);
         if (!branch) {
            detached = false;
            branch = BranchSummary.branchRegex.exec(line);
         }

         if (branch) {
            branchSummary.push(
               branch[1].charAt(0) === '*',
               detached,
               branch[2],
               branch[3],
               branch[4]
            );
         }
      });

   return branchSummary;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {


module.exports = CommitSummary;

function CommitSummary () {
   this.branch = '';
   this.commit = '';
   this.summary = {
      changes: 0,
      insertions: 0,
      deletions: 0
   };
   this.author = null;
}

var COMMIT_BRANCH_MESSAGE_REGEX = /\[([^\s]+) ([^\]]+)/;
var COMMIT_AUTHOR_MESSAGE_REGEX = /\s*Author:\s(.+)/i;

function setBranchFromCommit (commitSummary, commitData) {
   if (commitData) {
      commitSummary.branch = commitData[1];
      commitSummary.commit = commitData[2];
   }
}

function setSummaryFromCommit (commitSummary, commitData) {
   if (commitSummary.branch && commitData) {
      commitSummary.summary.changes = commitData[1] || 0;
      commitSummary.summary.insertions = commitData[2] || 0;
      commitSummary.summary.deletions = commitData[3] || 0;
   }
}

function setAuthorFromCommit (commitSummary, commitData) {
   var parts = commitData[1].split('<');
   var email = parts.pop();

   if (email.indexOf('@') <= 0) {
      return;
   }

   commitSummary.author = {
      email: email.substr(0, email.length - 1),
      name: parts.join('<').trim()
   };
}

CommitSummary.parse = function (commit) {
   var lines = commit.trim().split('\n');
   var commitSummary = new CommitSummary();

   setBranchFromCommit(commitSummary, COMMIT_BRANCH_MESSAGE_REGEX.exec(lines.shift()));

   if (COMMIT_AUTHOR_MESSAGE_REGEX.test(lines[0])) {
      setAuthorFromCommit(commitSummary, COMMIT_AUTHOR_MESSAGE_REGEX.exec(lines.shift()));
   }

   setSummaryFromCommit(commitSummary, /(\d+)[^,]*(?:,\s*(\d+)[^,]*)?(?:,\s*(\d+))?/g.exec(lines.shift()));

   return commitSummary;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {


module.exports = DiffSummary;

/**
 * The DiffSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function DiffSummary () {
   this.files = [];
   this.insertions = 0;
   this.deletions = 0;
   this.changed = 0;
}

/**
 * Number of lines added
 * @type {number}
 */
DiffSummary.prototype.insertions = 0;

/**
 * Number of lines deleted
 * @type {number}
 */
DiffSummary.prototype.deletions = 0;

/**
 * Number of files changed
 * @type {number}
 */
DiffSummary.prototype.changed = 0;

DiffSummary.parse = function (text) {
   var line, handler;

   var lines = text.trim().split('\n');
   var status = new DiffSummary();

   var summary = lines.pop();
   if (summary) {
      summary.trim().split(', ').forEach(function (text) {
         var summary = /(\d+)\s([a-z]+)/.exec(text);
         if (!summary) {
            return;
         }

         if (/files?/.test(summary[2])) {
            status.changed = parseInt(summary[1], 10);
         }
         else {
            status[summary[2].replace(/s$/, '') + 's'] = parseInt(summary[1], 10);
         }
      });
   }

   while (line = lines.shift()) {
      textFileChange(line, status.files) || binaryFileChange(line, status.files);
   }

   return status;
};

function textFileChange (line, files) {
   line = line.trim().match(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/);

   if (line) {
      var alterations = (line[3] || '').trim();
      files.push({
         file: line[1].trim(),
         changes: parseInt(line[2], 10),
         insertions: alterations.replace(/-/g, '').length,
         deletions: alterations.replace(/\+/g, '').length,
         binary: false
      });

      return true;
   }
}

function binaryFileChange (line, files) {
   line = line.match(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
   if (line) {
      files.push({
         file: line[1].trim(),
         before: +line[2],
         after: +line[3],
         binary: true
      });
      return true;
   }
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FetchSummary (raw) {
   this.raw = raw;

   this.remote = null;
   this.branches = [];
   this.tags = [];
}

FetchSummary.parsers = [
   [
      /From (.+)$/, function (fetchSummary, matches) {
         fetchSummary.remote = matches[0];
      }
   ],
   [
      /\* \[new branch\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
         fetchSummary.branches.push({
            name: matches[0],
            tracking: matches[1]
         });
      }
   ],
   [
      /\* \[new tag\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
         fetchSummary.tags.push({
            name: matches[0],
            tracking: matches[1]
         });
      }
   ]
];

FetchSummary.parse = function (data) {
   var fetchSummary = new FetchSummary(data);

   String(data)
      .trim()
      .split('\n')
      .forEach(function (line) {
         var original = line.trim();
         FetchSummary.parsers.some(function (parser) {
            var parsed = parser[0].exec(original);
            if (parsed) {
               parser[1](fetchSummary, parsed.slice(1));
               return true;
            }
         });
      });

   return fetchSummary;
};

module.exports = FetchSummary;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FileStatusSummary (path, index, working_dir) {
   this.path = path;
   this.index = index;
   this.working_dir = working_dir;

   if ('R' === index + working_dir) {
      var detail = FileStatusSummary.fromPathRegex.exec(path) || [null, path, path];
      this.from = detail[1];
      this.path = detail[2];
   }
}

FileStatusSummary.fromPathRegex = /^(.+) -> (.+)$/;

FileStatusSummary.prototype = {
   path: '',
   from: ''
};

module.exports = FileStatusSummary;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


module.exports = ListLogSummary;

var DiffSummary = __webpack_require__(45);

/**
 * The ListLogSummary is returned as a response to getting `git().log()` or `git().stashList()`
 *
 * @constructor
 */
function ListLogSummary (all) {
   this.all = all;
   this.latest = all.length && all[0] || null;
   this.total = all.length;
}

/**
 * Detail for each of the log lines
 * @type {ListLogLine[]}
 */
ListLogSummary.prototype.all = null;

/**
 * Most recent entry in the log
 * @type {ListLogLine}
 */
ListLogSummary.prototype.latest = null;

/**
 * Number of items in the log
 * @type {number}
 */
ListLogSummary.prototype.total = 0;

function ListLogLine (line, fields) {
   for (var k = 0; k < fields.length; k++) {
      this[fields[k]] = line[k] || '';
   }
}

/**
 * When the log was generated with a summary, the `diff` property contains as much detail
 * as was provided in the log (whether generated with `--stat` or `--shortstat`.
 * @type {DiffSummary}
 */
ListLogLine.prototype.diff = null;

ListLogSummary.START_BOUNDARY = 'òòòòòò ';

ListLogSummary.COMMIT_BOUNDARY = ' òò';

ListLogSummary.SPLITTER = ' ò ';

ListLogSummary.parse = function (text, splitter, fields) {
   fields = fields || ['hash', 'date', 'message', 'refs', 'author_name', 'author_email'];
   return new ListLogSummary(
      text
         .trim()
         .split(ListLogSummary.START_BOUNDARY)
         .filter(function(item) { return !!item.trim(); })
         .map(function (item) {
            var lineDetail = item.trim().split(ListLogSummary.COMMIT_BOUNDARY);
            var listLogLine = new ListLogLine(lineDetail[0].trim().split(splitter), fields);

            if (lineDetail.length > 1 && !!lineDetail[1].trim()) {
               listLogLine.diff = DiffSummary.parse(lineDetail[1]);
            }

            return listLogLine;
         })
   );
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MergeSummary;
module.exports.MergeConflict = MergeConflict;

var PullSummary = __webpack_require__(50);

function MergeConflict (reason, file, meta) {
   this.reason = reason;
   this.file = file;
   if (meta) {
      this.meta = meta;
   }
}

MergeConflict.prototype.meta = null;

MergeConflict.prototype.toString = function () {
   return this.file + ':' + this.reason;
};

function MergeSummary () {
   PullSummary.call(this);

   this.conflicts = [];
   this.merges = [];
}

MergeSummary.prototype = Object.create(PullSummary.prototype);

MergeSummary.prototype.result = 'success';

MergeSummary.prototype.toString = function () {
   if (this.conflicts.length) {
      return 'CONFLICTS: ' + this.conflicts.join(', ');
   }
   return 'OK';
};

Object.defineProperty(MergeSummary.prototype, 'failed', {
   get: function () {
      return this.conflicts.length > 0;
   }
});

MergeSummary.parsers = [
   {
      test: /^Auto-merging\s+(.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.merges.push(result[1]);
      }
   },
   {
      // Parser for standard merge conflicts
      test: /^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.conflicts.push(new MergeConflict(result[1], result[2]));
      }
   },
   {
      // Parser for modify/delete merge conflicts (modified by us/them, deleted by them/us)
      test: /^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/,
      handle: function (result, mergeSummary) {
         mergeSummary.conflicts.push(
            new MergeConflict(result[1], result[2], {deleteRef: result[3]})
         );
      }
   },
   {
      // Catch-all parser for unknown/unparsed conflicts
      test: /^CONFLICT\s+\((.+)\):/,
      handle: function (result, mergeSummary) {
         mergeSummary.conflicts.push(new MergeConflict(result[1], null));
      }
   },
   {
      test: /^Automatic merge failed;\s+(.+)$/,
      handle: function (result, mergeSummary) {
         mergeSummary.reason = mergeSummary.result = result[1];
      }
   }
];

MergeSummary.parse = function (output) {
   let mergeSummary = new MergeSummary();

   output.trim().split('\n').forEach(function (line) {
      for (var i = 0, iMax = MergeSummary.parsers.length; i < iMax; i++) {
         let parser = MergeSummary.parsers[i];

         var result = parser.test.exec(line);
         if (result) {
            parser.handle(result, mergeSummary);
            break;
         }
      }
   });

   let pullSummary = PullSummary.parse(output);
   if (pullSummary.summary.changes) {
      Object.assign(mergeSummary, pullSummary);
   }

   return mergeSummary;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {


module.exports = PullSummary;

/**
 * The PullSummary is returned as a response to getting `git().pull()`
 *
 * @constructor
 */
function PullSummary () {
   this.files = [];
   this.insertions = {};
   this.deletions = {};

   this.summary = {
      changes: 0,
      insertions: 0,
      deletions: 0
   };

   this.created = [];
   this.deleted = [];
}

/**
 * Array of files that were created
 * @type {string[]}
 */
PullSummary.prototype.created = null;

/**
 * Array of files that were deleted
 * @type {string[]}
 */
PullSummary.prototype.deleted = null;

/**
 * The array of file paths/names that have been modified in any part of the pulled content
 * @type {string[]}
 */
PullSummary.prototype.files = null;

/**
 * A map of file path to number to show the number of insertions per file.
 * @type {Object}
 */
PullSummary.prototype.insertions = null;

/**
 * A map of file path to number to show the number of deletions per file.
 * @type {Object}
 */
PullSummary.prototype.deletions = null;

/**
 * Overall summary of changes/insertions/deletions and the number associated with each
 * across all content that was pulled.
 * @type {Object}
 */
PullSummary.prototype.summary = null;

PullSummary.FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
PullSummary.SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
PullSummary.ACTION_REGEX = /(create|delete) mode \d+ (.+)/;

PullSummary.parse = function (text) {
   var pullSummary = new PullSummary;
   var lines = text.split('\n');

   while (lines.length) {
      var line = lines.shift().trim();
      if (!line) {
         continue;
      }

      update(pullSummary, line) || summary(pullSummary, line) || action(pullSummary, line);
   }

   return pullSummary;
};

function update (pullSummary, line) {

   var update = PullSummary.FILE_UPDATE_REGEX.exec(line);
   if (!update) {
      return false;
   }

   pullSummary.files.push(update[1]);

   var insertions = update[2].length;
   if (insertions) {
      pullSummary.insertions[update[1]] = insertions;
   }

   var deletions = update[3].length;
   if (deletions) {
      pullSummary.deletions[update[1]] = deletions;
   }

   return true;
}

function summary (pullSummary, line) {
   if (!pullSummary.files.length) {
      return false;
   }

   var update = PullSummary.SUMMARY_REGEX.exec(line);
   if (!update || (update[3] === undefined && update[5] === undefined)) {
      return false;
   }

   pullSummary.summary.changes = +update[1] || 0;
   pullSummary.summary.insertions = +update[3] || 0;
   pullSummary.summary.deletions = +update[5] || 0;

   return true;
}

function action (pullSummary, line) {

   var match = PullSummary.ACTION_REGEX.exec(line);
   if (!match) {
      return false;
   }

   var file = match[2];

   if (pullSummary.files.indexOf(file) < 0) {
      pullSummary.files.push(file);
   }

   var container = (match[1] === 'create') ? pullSummary.created : pullSummary.deleted;
   container.push(file);

   return true;
}


/***/ }),
/* 51 */
/***/ (function(module, exports) {


module.exports = MoveSummary;

/**
 * The MoveSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function MoveSummary () {
   this.moves = [];
   this.sources = {};
}

MoveSummary.SUMMARY_REGEX = /^Renaming (.+) to (.+)$/;

MoveSummary.parse = function (text) {
   var lines = text.split('\n');
   var summary = new MoveSummary();

   for (var i = 0, iMax = lines.length, line; i < iMax; i++) {
      line = MoveSummary.SUMMARY_REGEX.exec(lines[i].trim());

      if (line) {
         summary.moves.push({
            from: line[1],
            to: line[2]
         });
      }
   }

   return summary;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {




var FileStatusSummary = __webpack_require__(47);

module.exports = StatusSummary;

/**
 * The StatusSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */
function StatusSummary () {
   this.not_added = [];
   this.conflicted = [];
   this.created = [];
   this.deleted = [];
   this.modified = [];
   this.renamed = [];
   this.files = [];
   this.staged = [];
}


/**
 * Number of commits ahead of the tracked branch
 * @type {number}
 */
StatusSummary.prototype.ahead = 0;

/**
 * Number of commits behind the tracked branch
 * @type {number}
 */
StatusSummary.prototype.behind = 0;

/**
 * Name of the current branch
 * @type {null}
 */
StatusSummary.prototype.current = null;

/**
 * Name of the branch being tracked
 * @type {string}
 */
StatusSummary.prototype.tracking = null;

/**
 * All files represented as an array of objects containing the `path` and status in `index` and
 * in the `working_dir`.
 *
 * @type {Array}
 */
StatusSummary.prototype.files = null;

/**
 * Gets whether this StatusSummary represents a clean working branch.
 *
 * @return {boolean}
 */
StatusSummary.prototype.isClean = function () {
   return 0 === Object.keys(this).filter(function (name) {
      return Array.isArray(this[name]) && this[name].length;
   }, this).length;
};

StatusSummary.parsers = {
   '##': function (line, status) {
      var aheadReg = /ahead (\d+)/;
      var behindReg = /behind (\d+)/;
      var currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
      var trackingReg = /\.{3}(\S*)/;
      var regexResult;

      regexResult = aheadReg.exec(line);
      status.ahead = regexResult && +regexResult[1] || 0;

      regexResult = behindReg.exec(line);
      status.behind = regexResult && +regexResult[1] || 0;

      regexResult = currentReg.exec(line);
      status.current = regexResult && regexResult[1];

      regexResult = trackingReg.exec(line);
      status.tracking = regexResult && regexResult[1];
   },

   '??': function (line, status) {
      status.not_added.push(line);
   },

   A: function (line, status) {
      status.created.push(line);
   },

   AM: function (line, status) {
      status.created.push(line);
   },

   D: function (line, status) {
      status.deleted.push(line);
   },

   M: function (line, status, indexState) {
      status.modified.push(line);

      if (indexState === 'M') {
         status.staged.push(line);
      }
   },

   R: function (line, status) {
      var detail = /^(.+) -> (.+)$/.exec(line) || [null, line, line];

      status.renamed.push({
         from: detail[1],
         to: detail[2]
      });
   },

   UU: function (line, status) {
      status.conflicted.push(line);
   }
};

StatusSummary.parsers.MM = StatusSummary.parsers.M;

/* Map all unmerged status code combinations to UU to mark as conflicted */
StatusSummary.parsers.AA = StatusSummary.parsers.UU;
StatusSummary.parsers.UD = StatusSummary.parsers.UU;
StatusSummary.parsers.DU = StatusSummary.parsers.UU;
StatusSummary.parsers.DD = StatusSummary.parsers.UU;
StatusSummary.parsers.AU = StatusSummary.parsers.UU;
StatusSummary.parsers.UA = StatusSummary.parsers.UU;

StatusSummary.parse = function (text) {
   var file;
   var lines = text.trim().split('\n');
   var status = new StatusSummary();

   for (var i = 0, l = lines.length; i < l; i++) {
      file = splitLine(lines[i]);

      if (!file) {
         continue;
      }

      if (file.handler) {
         file.handler(file.path, status, file.index, file.workingDir);
      }

      if (file.code !== '##') {
         status.files.push(new FileStatusSummary(file.path, file.index, file.workingDir));
      }
   }

   return status;
};


function splitLine (lineStr) {
   var line = lineStr.trim().match(/(..?)(\s+)(.*)/);
   if (!line || !line[1].trim()) {
      line = lineStr.trim().match(/(..?)\s+(.*)/);
   }

   if (!line) {
      return;
   }

   var code = line[1];
   if (line[2].length > 1) {
      code += ' ';
   }
   if (code.length === 1 && line[2].length === 1) {
      code = ' ' + code;
   }

   return {
      raw: code,
      code: code.trim(),
      index: code.charAt(0),
      workingDir: code.charAt(1),
      handler: StatusSummary.parsers[code.trim()],
      path: line[3]
   };
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {


module.exports = TagList;

function TagList (tagList, latest) {
   this.latest = latest;
   this.all = tagList
}

TagList.parse = function (data, customSort) {
   var number = function (input) {
      if (typeof input === 'string') {
         return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
      }

      return 0;
   };

   var tags = data
      .trim()
      .split('\n')
      .map(function (item) { return item.trim(); })
      .filter(Boolean);

   if (!customSort) {
      tags.sort(function (tagA, tagB) {
         var partsA = tagA.split('.');
         var partsB = tagB.split('.');

         if (partsA.length === 1 || partsB.length === 1) {
            return tagA - tagB > 0 ? 1 : -1;
         }

         for (var i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
            var a = number(partsA[i]);
            var b = number(partsB[i]);

            var diff = a - b;
            if (diff) {
               return diff > 0 ? 1 : -1;
            }
         }

         return 0;
      });
   }

   var latest = customSort ? tags[0] : tags.filter(function (tag) { return tag.indexOf('.') >= 0; }).pop();

   return new TagList(tags, latest);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var Git = __webpack_require__(28);

module.exports = function (baseDir) {

   var dependencies = __webpack_require__(55);

   if (baseDir && !dependencies.exists(baseDir, dependencies.exists.FOLDER)) {
       throw new Error("Cannot use simple-git on a directory that does not exist.");
    }

    return new Git(baseDir || process.cwd(), dependencies.childProcess(), dependencies.buffer());
};



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Exports the utilities `simple-git` depends upon to allow for mocking during a test
 */
module.exports = {

   buffer: function () { return __webpack_require__(56).Buffer; },

   childProcess: function () { return __webpack_require__(25); },

   exists: __webpack_require__(40)

};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Features; });
/* harmony import */ var _handlers_exit_PushBeforeClosingIDE_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _handlers_git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _handlers_git_branch_changed_BranchWarn_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _handlers_git_branch_changed_CheckForRemote_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _handlers_git_branch_changed_DetectDetachedHead_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var _handlers_git_commits_MergeCommits_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var _handlers_git_commits_PullCommits_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69);
/* harmony import */ var _handlers_git_commits_PushCommit_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
/* harmony import */ var _handlers_git_push_PushSubmodulesFirst_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71);
/* harmony import */ var _handlers_start_CheckConfigVariables_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72);
/* harmony import */ var _handlers_start_CheckRemoteChanges_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var _handlers_start_PerformStartupCheckOfRepositories_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74);
/* harmony import */ var _handlers_start_UpdateInitSubmodules_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75);
/* harmony import */ var _handlers_start_WatcherStart_handler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76);
/* harmony import */ var _handlers_submodule_update_HandleSubmoduleUpdate_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77);
/* harmony import */ var _handlers_submodule_SubmoduleHandler_handler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78);

















const HANDLERS = [
    _handlers_exit_PushBeforeClosingIDE_handler__WEBPACK_IMPORTED_MODULE_0__["default"],
    _handlers_git_branch_changed_BranchWarn_handler__WEBPACK_IMPORTED_MODULE_2__["default"],
    _handlers_git_branch_changed_CheckForRemote_handler__WEBPACK_IMPORTED_MODULE_3__["default"],
    _handlers_git_branch_changed_DetectDetachedHead_handler__WEBPACK_IMPORTED_MODULE_4__["default"],
    _handlers_git_commits_MergeCommits_handler__WEBPACK_IMPORTED_MODULE_5__["default"],
    _handlers_git_commits_PullCommits_handler__WEBPACK_IMPORTED_MODULE_6__["default"],
    _handlers_git_commits_PushCommit_handler__WEBPACK_IMPORTED_MODULE_7__["default"],
    _handlers_git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_1__["default"],
    _handlers_git_push_PushSubmodulesFirst_handler__WEBPACK_IMPORTED_MODULE_8__["default"],
    _handlers_start_CheckRemoteChanges_handler__WEBPACK_IMPORTED_MODULE_10__["default"],
    _handlers_start_PerformStartupCheckOfRepositories_handler__WEBPACK_IMPORTED_MODULE_11__["default"],
    _handlers_start_UpdateInitSubmodules_handler__WEBPACK_IMPORTED_MODULE_12__["default"],
    _handlers_start_WatcherStart_handler__WEBPACK_IMPORTED_MODULE_13__["default"],
    _handlers_submodule_SubmoduleHandler_handler__WEBPACK_IMPORTED_MODULE_15__["default"],
    _handlers_submodule_update_HandleSubmoduleUpdate_handler__WEBPACK_IMPORTED_MODULE_14__["default"],
    _handlers_start_CheckConfigVariables_handler__WEBPACK_IMPORTED_MODULE_9__["default"],
];
/**
 * this class registers all feature-handler in the extension
 */
class Features {
    /**
     * registers all files matching the "*.handler.js"-name-pattern to the Event-Handler
     */
    static enableFeatures() {
        HANDLERS.forEach((handler) => {
            handler.registerEventHandler();
        });
    }
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PushBeforeClosingIDE; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _UI_QuickPick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









/**
 * this Handler is responsible for informing the user he hasn't pushed all changes when closing VS Code
 */
class PushBeforeClosingIDE extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_5__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].isEnabled('pushBeforeClosingIDE')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_7__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_6__["default"].EXIT, this);
        }
    }
    static handle(hardQuit) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!hardQuit) {
                vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand('workbench.action.closeActiveEditor');
                let fileOpened = false;
                const rootPath = (vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders &&
                    vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders.length &&
                    vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].workspaceFolders[0].uri.path) ||
                    '';
                // checks if no more files are opened in the current Window
                vscode__WEBPACK_IMPORTED_MODULE_0__["workspace"].textDocuments.forEach((doc) => {
                    if (doc.fileName.includes(rootPath)) {
                        fileOpened = true;
                    }
                });
                if (fileOpened) {
                    return;
                }
            }
            if (!(yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].getGitModel()).getAhead()) {
                _UI_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage('Editor closed');
                vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand(hardQuit ? 'workbench.action.quit' : 'workbench.action.closeWindow');
                return;
            }
            const command = yield _UI_QuickPick__WEBPACK_IMPORTED_MODULE_2__["default"].showQuickPick('choose an option', new _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__["default"]('Push all changes and close Window', 'pushChanges'), _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__["default"].optionQUIT, _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__["default"].optionCANCEL);
            if (command) {
                if (command === 'pushChanges') {
                    yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].pushRootRepository();
                    vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand(_UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__["default"].optionQUIT.command);
                    return;
                }
                vscode__WEBPACK_IMPORTED_MODULE_0__["commands"].executeCommand(command);
            }
        });
    }
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickPick; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * this class is a wrapper for the VS Code QuickPick-Panel
 */
class QuickPick {
    /**
     * shows a QuickPick-Panel in the VS Code Window
     * @param placeHolder text to display when nothing was chosen
     * @param options options to choose from
     */
    static showQuickPick(placeHolder, ...options) {
        return __awaiter(this, void 0, void 0, function* () {
            _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage('Push-QuickPick shown');
            const option = yield vscode__WEBPACK_IMPORTED_MODULE_0__["window"].showQuickPick(options, { placeHolder: placeHolder });
            if (option) {
                return option.command;
            }
            _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage(`No option chosen`);
            return '';
        });
    }
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickPickOption; });

/**
 * this class is a wrapper for the VS Code QuickPickOptions
 */
class QuickPickOption {
    constructor(label, command, description = '') {
        this.label = label;
        this.command = command;
        this.description = description;
    }
}
QuickPickOption.optionCANCEL = new QuickPickOption('Cancel', 'search.action.focusActiveEditor', 'ESC');
QuickPickOption.optionQUIT = new QuickPickOption('Close Window', 'workbench.action.quit');


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeHandler; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * this class is the template for a ChangeHandler
 */
class ChangeHandler {
    /**
     * function that is called when the Handler should register itself
     */
    static registerEventHandler() {
        throw new TypeError('Must override method');
    }
    /**
     * function that is called when a Event was fired
     * @param payload some additional information for the Handlers
     */
    static handle(_payload) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new TypeError('Must override method');
        });
    }
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitHandler; });
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * this Handler is responsible for changes in the Git-Repository
 */
class GitHandler extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static registerEventHandler() {
        _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].GIT, this);
    }
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateGitModel();
            yield GitHandler.handleRepositoryChange(gitModel);
        });
    }
    /**
     * checks for changes in a given Git-Repository
     * @param gitModel gitModel to check for changes
     */
    static handleRepositoryChange(gitModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const repositoryPath = gitModel.getRelativePath();
            const modelDiff = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getModelDiff(repositoryPath);
            // nothing important changed (except timestamp and oldGitModel)
            if (Object.keys(modelDiff).length < 2) {
                return gitModel;
            }
            const ahead = modelDiff.ahead > 0;
            const behind = modelDiff.behind > 0;
            if (!modelDiff.detachedHEAD) {
                if (ahead && behind) {
                    yield _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].GIT_COMMITS, repositoryPath);
                }
                else if (ahead) {
                    yield _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].GIT_COMMITS_LOCAL, repositoryPath);
                }
                else if (behind) {
                    yield _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].GIT_COMMITS_REMOTE, repositoryPath);
                }
            }
            if (modelDiff.branch !== undefined) {
                yield _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].GIT_BRANCH_CHANGED, repositoryPath);
            }
            if (modelDiff.modifiedSubmodules && modelDiff.modifiedSubmodules.length) {
                yield _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].SUBMODULE_UPDATE);
            }
            return gitModel;
        });
    }
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BranchWarn; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _UI_QuickPick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










/**
 * this Handler is responsible to check if the user works on a wrong Branch
 */
class BranchWarn extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_6__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_9__["default"].isEnabled('branchWarn')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_8__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_7__["default"].GIT_BRANCH_CHANGED, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].getGitModel(repositoryPath);
            const currentBranch = gitModel.getBranch();
            if (gitModel.isHeadDetached()) {
                return;
            }
            if (_application_Config__WEBPACK_IMPORTED_MODULE_9__["default"].getValue('branchWarn-illegalBranches').indexOf(currentBranch) < 0) {
                return;
            }
            let message = `You are currently on branch "${currentBranch}"`;
            if (!gitModel.isRootGit()) {
                message += ` in Submodule "${repositoryPath}"`;
            }
            message += `. You should not commit on this branch. Would you like to switch branch?`;
            const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(message, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionNO);
            if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].YES) {
                return;
            }
            // let the user choose a branch to checkout
            const localBranches = gitModel.getLocalBranches();
            const createNewBranchCommand = '[git-assistant][create-new-branch]';
            let branch = '';
            if (localBranches.length > 1) {
                const options = [];
                localBranches.forEach((branch) => {
                    const branchName = branch.getName();
                    if (branchName !== currentBranch) {
                        options.push(new _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_4__["default"](branchName, branchName));
                    }
                });
                options.push(new _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_4__["default"]('+ create a new branch', createNewBranchCommand));
                branch = yield _UI_QuickPick__WEBPACK_IMPORTED_MODULE_3__["default"].showQuickPick('choose the branch to checkout', ...options);
            }
            if (!branch.length || branch === createNewBranchCommand) {
                branch = yield _UI_InputBox__WEBPACK_IMPORTED_MODULE_1__["default"].showInputBox('enter name of the new branch');
                yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].createNewBranch(repositoryPath, branch);
            }
            BranchWarn.checkoutWithoutStash(gitModel, branch);
        });
    }
}
// tries to checkout a branch
// iff checkout fails => try to stash before checkout
BranchWarn.checkoutWithoutStash = (gitModel, branch) => __awaiter(void 0, void 0, void 0, function* () {
    _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].checkoutBranchForRepository(gitModel.getRelativePath(), branch).catch(() => BranchWarn.checkoutWithStash(gitModel, branch));
});
// stashes changes => then checkout
// asks user in the end if it should pop the latest changes from stash
BranchWarn.checkoutWithStash = (gitModel, branch) => __awaiter(void 0, void 0, void 0, function* () {
    const stashed = yield BranchWarn.stashBeforeCheckout(gitModel.getPath(), branch);
    if (!stashed) {
        return;
    }
    yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].checkoutBranchForRepository(gitModel.getRelativePath(), branch);
    BranchWarn.stashPopAfterCheckout(gitModel.getPath());
});
BranchWarn.stashBeforeCheckout = (repositoryPath, branch) => __awaiter(void 0, void 0, void 0, function* () {
    const stashChanges = _application_Config__WEBPACK_IMPORTED_MODULE_9__["default"].getValue('branchWarn-stashChanges');
    if (stashChanges === _application_Config__WEBPACK_IMPORTED_MODULE_9__["ConfigOptions"].disabled) {
        return false;
    }
    if (stashChanges === _application_Config__WEBPACK_IMPORTED_MODULE_9__["ConfigOptions"].auto) {
        _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].stashSaveChanges(repositoryPath)
            .then(() => true)
            .catch(() => false);
    }
    const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`would you like to stash the current changes before checking out branch '${branch}'? The current changes will be lost`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionNO);
    if (action === _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].NO) {
        return false;
    }
    yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].stashSaveChanges(repositoryPath);
    return true;
});
BranchWarn.stashPopAfterCheckout = (repositoryPath) => __awaiter(void 0, void 0, void 0, function* () {
    const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`would you like to unstash the changes?`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionNO);
    if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].YES) {
        return;
    }
    yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].stashPopChanges(repositoryPath);
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidation", function() { return InputValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputBox; });
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vscode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vscode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class InputValidation {
    static NOTEMPTY(text) {
        if (!text || text.length === 0) {
            return 'You must enter something';
        }
        else {
            return undefined;
        }
    }
}
/**
 * this class is a wrapper for the VS Code InputBox
 */
class InputBox {
    /**
     * shows a InputBox in the VS Code Window
     * @param message message to display
     * @param validationFunction a function that validates the Input
     */
    static showInputBox(message, validationFunction = InputValidation.NOTEMPTY) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = yield vscode__WEBPACK_IMPORTED_MODULE_0__["window"].showInputBox({
                prompt: message,
                validateInput: validationFunction,
            });
            if (input) {
                return input;
            }
            _Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage(`Message not resolved: '${message}'`);
            return '';
        });
    }
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageOption; });

/**
 * this class is a wrapper for VS Code MessageOptions
 */
class MessageOption {
    constructor(title, action = title) {
        this.title = title;
        this.action = action;
    }
}
MessageOption.YES = 'y';
MessageOption.NO = 'n';
MessageOption.NEVER = 'never';
MessageOption.ALWAYS = 'always';
MessageOption.optionYES = new MessageOption('yes', MessageOption.YES);
MessageOption.optionNO = new MessageOption('no', MessageOption.NO);
MessageOption.optionNEVERASKAGAIN = new MessageOption('never ask again', MessageOption.NEVER);
MessageOption.optionALWAYS = new MessageOption('always', MessageOption.ALWAYS);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckForRemote; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _UI_QuickPick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
'use static';
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










/**
 * this Handler is responsible for checking if a Remote exists for the current Branch
 */
class CheckForRemote extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_5__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].isEnabled('checkForRemote')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_7__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_6__["default"].GIT_BRANCH_CHANGED, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].getGitModel(repositoryPath);
            const branch = gitModel.getBranch();
            let remote = gitModel.getRemote();
            if (gitModel.isHeadDetached() || remote || remote === null) {
                return;
            }
            const remotes = gitModel.getRemotes();
            if (remotes.length && _application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].getValue('checkForRemote') !== _application_Config__WEBPACK_IMPORTED_MODULE_8__["ConfigOptions"].auto) {
                const option = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`No remote found for '${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_9__["getRepositoryName"])(repositoryPath)}' on branch '${branch}' Would you like to publish this branch to the remote Server?`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionNO);
                if (option !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].YES) {
                    return;
                }
            }
            // only one Remote exists => choose it
            if (remotes.length === 1) {
                remote = remotes[0];
            }
            else {
                // a default-Remote is set => choose it
                remote = _application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].getValue('checkForRemote-defaultRemote');
                if (!remote) {
                    // let the user decide wich Remote he wants to publish the Branch
                    const options = remotes.map((remote) => new _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_3__["default"](remote, remote));
                    if (!options.length) {
                        return CheckForRemote.noRemoteUpstreamSet(repositoryPath);
                    }
                    remote = yield _UI_QuickPick__WEBPACK_IMPORTED_MODULE_2__["default"].showQuickPick(`choose a remote to publish the branch '${branch}'`, ...options);
                }
            }
            if (!remote) {
                return;
            }
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].publishBranch(repositoryPath, remote, branch);
        });
    }
    static noRemoteUpstreamSet(repositoryPath) {
        _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`No Remotes found for your Repository '${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_9__["getRepositoryName"])(repositoryPath)}'. You should add a Remote to have a backup in case of data loss.`);
    }
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetectDetachedHead; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60);
/* harmony import */ var _UI_QuickPick__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












/**
 * this Handler is responsible for resolving the "detached HEAD" status
 */
class DetectDetachedHead extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_6__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_9__["default"].isEnabled('detectDetachedHead')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_8__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_7__["default"].GIT_BRANCH_CHANGED, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].getGitModel(repositoryPath);
            if (!gitModel.isHeadDetached()) {
                return;
            }
            const branch = yield DetectDetachedHead.getRealBranchForHash(gitModel);
            if (!branch.length) {
                return;
            }
            if (_application_Config__WEBPACK_IMPORTED_MODULE_9__["default"].getValue('detectDetachedHead') === _application_Config__WEBPACK_IMPORTED_MODULE_9__["ConfigOptions"].auto) {
                yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].checkoutBranchForRepository(gitModel.getRelativePath(), branch);
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_4__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_3__["default"].autoCheckoutForDetachedHead(gitModel.getRelativePath(), branch));
                return;
            }
            let message = `the HEAD of your Repository is detached. Would you like to checkout its corresponding branch '${branch}'?`;
            if (!gitModel.isRootGit()) {
                message = `The HEAD of the Submodule '${gitModel.getRelativePath()}' in your Repisotory is detached. Would you like to checkout its corresponding branch '${branch}'?`;
            }
            const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(message, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].optionNO);
            if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_2__["default"].YES) {
                return;
            }
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].checkoutBranchForRepository(gitModel.getRelativePath(), branch);
        });
    }
}
/**
 * finds the corresponding Branch for a Commit-Hash
 */
DetectDetachedHead.getRealBranchForHash = (gitModel) => __awaiter(void 0, void 0, void 0, function* () {
    // the first one in the list is the current "detached HEAD"
    const branches = gitModel.getLocalBranches().filter((branch, index) => index > 1);
    const current = gitModel.getBranch();
    const realBranches = [];
    branches.forEach((branch) => {
        if (current === branch.getCommit() || current === branch.getName()) {
            realBranches.push(branch.getName());
        }
    });
    if (realBranches.length) {
        if (realBranches.length === 1) {
            return realBranches[0];
        }
        if (gitModel.getMainRepositoryPath()) {
            const configuredBranch = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_5__["default"].getConfiguredBranchForSubmodule(gitModel);
            if (configuredBranch && realBranches.includes(configuredBranch)) {
                return configuredBranch;
            }
            const options = realBranches.map((branch) => new _UI_QuickPickOption__WEBPACK_IMPORTED_MODULE_10__["default"](branch, branch));
            const selectedBranch = yield _UI_QuickPick__WEBPACK_IMPORTED_MODULE_11__["default"].showQuickPick('choose the branch to check out', ...options);
            if (selectedBranch) {
                return selectedBranch;
            }
        }
    }
    _UI_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showError(`could not find branch for '${current}' ${!gitModel.isRootGit() ? ` in Submodule '${gitModel.getRelativePath()}'` : ''}. You have to checkout the branch manually.`, true);
    return '';
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MergeCommits; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * this Handler is responsible to pull Commits from Remote, merge them and push them to the Remote
 */
class MergeCommits extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].isEnabled('mergeCommits')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_5__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_4__["default"].GIT_COMMITS, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getGitModel(repositoryPath);
            const ahead = gitModel.getAhead();
            const behind = gitModel.getBehind();
            const remote = gitModel.getRemote();
            const branch = gitModel.getBranch();
            if (!(ahead && behind)) {
                return;
            }
            if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].getValue('mergeCommits') === _application_Config__WEBPACK_IMPORTED_MODULE_6__["ConfigOptions"].auto) {
                yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].pullAndPushRepository(repositoryPath, remote, branch, ahead, behind);
                return;
            }
            const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`You are currently behind ${behind} commits. But you also have ${ahead} changes that are currently not on the server for ${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_7__["getRepositoryName"])(repositoryPath)}. Would you like to merge the changes?`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionNO);
            if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].YES) {
                return;
            }
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].pullAndPushRepository(repositoryPath, remote, branch, ahead, behind);
        });
    }
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PullCommits; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * this Handler is responsible for pulling changes from a Remote
 */
class PullCommits extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].isEnabled('pullCommits')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_5__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_4__["default"].GIT_COMMITS_REMOTE, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getGitModel(repositoryPath);
            const behind = gitModel.getBehind();
            const remote = gitModel.getRemote();
            const branch = gitModel.getBranch();
            if (!behind) {
                return;
            }
            if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].getValue('pullCommits') === _application_Config__WEBPACK_IMPORTED_MODULE_6__["ConfigOptions"].auto) {
                yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].pullRepository(repositoryPath, remote, branch, behind);
                return;
            }
            const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`You are currently ${behind} commits behind in '${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_7__["getRepositoryName"])(repositoryPath)}'. Would you like to pull these changes?`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionNO);
            if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].YES) {
                return;
            }
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].pullRepository(repositoryPath, remote, branch, behind);
        });
    }
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PushCommits; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _application_Helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * this Handler is responsible for pushing changes to the Remote
 */
class PushCommits extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].isEnabled('pushCommits')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_5__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_4__["default"].GIT_COMMITS_LOCAL, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getGitModel(repositoryPath);
            const ahead = gitModel.getAhead();
            const remote = gitModel.getRemote();
            const branch = gitModel.getBranch();
            if (!ahead) {
                return;
            }
            if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].getValue('pushCommits') === _application_Config__WEBPACK_IMPORTED_MODULE_6__["ConfigOptions"].auto) {
                yield PushCommits.push(repositoryPath, remote, branch, ahead);
                return;
            }
            const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`You have ${ahead} changes that are currently not on the server for ${Object(_application_Helper__WEBPACK_IMPORTED_MODULE_7__["getRepositoryName"])(repositoryPath)}. Would you like to push the changes?`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionNO).catch(() => { });
            if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].YES) {
                return;
            }
            yield PushCommits.push(repositoryPath, remote, branch, ahead);
        });
    }
    static push(repositoryPath, remote, branch, ahead) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _EventHandler__WEBPACK_IMPORTED_MODULE_5__["default"].handle(_models_Event__WEBPACK_IMPORTED_MODULE_4__["default"]['GIT_PUSH'], repositoryPath);
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].pushRepository(repositoryPath, remote, branch, ahead);
        });
    }
}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PushSubmodulesFirst; });
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _commits_PushCommit_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * this Handler is responsible to push all Submodules for a Repository
 */
class PushSubmodulesFirst extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_5__["default"].isEnabled('pushSubmodulesFirst')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].GIT_PUSH, this);
        }
    }
    static handle(repositoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getGitModel(repositoryPath);
            for (const submodule of gitModel.getSubmodules()) {
                yield _commits_PushCommit_handler__WEBPACK_IMPORTED_MODULE_4__["default"].handle(submodule.getPath());
            }
        });
    }
}


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckConfigVariables; });
/* harmony import */ var _UI_InputBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _UI_Logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









/**
 * this Handler checks for missing config-Variables
 */
class CheckConfigVariables extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_5__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].isEnabled('checkConfigVariables')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_7__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_6__["default"].START, this);
        }
    }
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            // wich variables should be checked for
            const toCheck = _application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].getValue('checkConfigVariables-variablesToCheck');
            let failed = false;
            for (const variable of toCheck) {
                const result = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].getConfigVariable(variable).catch(() => __awaiter(this, void 0, void 0, function* () {
                    failed = true;
                    const input = yield _UI_InputBox__WEBPACK_IMPORTED_MODULE_0__["default"].showInputBox(`Config Variable '${variable}' not set. Please enter a value`);
                    if (input.length) {
                        yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].setConfigVariable(variable, input, _application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].getValue('checkConfigVariables-scope'));
                    }
                }));
                if (result) {
                    _UI_Logger__WEBPACK_IMPORTED_MODULE_1__["default"].showMessage(`Config Variable '${variable}' is '${result}'`);
                }
            }
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_3__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_2__["default"].allConfigVariablesChecked());
            // if all variables were set => disable this Feature
            if (!failed) {
                _application_Config__WEBPACK_IMPORTED_MODULE_8__["default"].disable('checkConfigVariables');
            }
        });
    }
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckRemoteChanges; });
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * this Handler checks periodically for new Commits on the Remote
 */
class CheckRemoteChanges extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_7__["default"].isEnabled('checkRemoteChanges')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].START, this);
        }
    }
    static handle(repositoryPath = '') {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = !CheckRemoteChanges.iterations
                ? yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getGitModel(repositoryPath)
                : yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_3__["default"].updateGitModel(repositoryPath);
            CheckRemoteChanges.nextCheck(gitModel);
            // do nothing on first call, because there exist other Handlers for that
            if (!CheckRemoteChanges.iterations++) {
                return;
            }
            yield _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_6__["default"].handleRepositoryChange(gitModel);
            const ahead = gitModel.getAhead();
            const behind = gitModel.getBehind();
            const remote = gitModel.getRemote();
            const branch = gitModel.getBranch();
            if (!remote.length) {
                return CheckRemoteChanges.nextCheck(gitModel);
            }
            // display message that all is up-to-date
            if (!ahead && !behind) {
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_4__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_5__["default"].branchIsUpToDate(gitModel.getRelativePath(), remote, branch));
            }
            // check all Submodules
            for (const submodulePath of gitModel.getSubmodules().map((submodule) => submodule.getPath())) {
                yield CheckRemoteChanges.handle(submodulePath);
            }
        });
    }
    /**
     * plans the next execution of the check if it is the root-Repository
     * @param gitModel current Model of a Repository
     */
    static nextCheck(gitModel) {
        if (!gitModel.isRootGit()) {
            return;
        }
        const checkEveryNMinutes = _application_Config__WEBPACK_IMPORTED_MODULE_7__["default"].getValue('checkRemoteChanges-checkEveryNMinutes');
        if (checkEveryNMinutes) {
            setTimeout(() => {
                if (!_application_GitRepository__WEBPACK_IMPORTED_MODULE_3__["default"].isCurrentlyUpdating()) {
                    CheckRemoteChanges.handle();
                }
            }, checkEveryNMinutes * 1000 * 60);
        }
    }
}
CheckRemoteChanges.iterations = 0;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerformStartupCheckOfRepositories; });
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * this Hanlder initializes all information for each Repository
 */
class PerformStartupCheckOfRepositories extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static registerEventHandler() {
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].START, this);
    }
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getGitModel();
            yield _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_4__["default"].handleRepositoryChange(gitModel);
            const submodulePaths = gitModel.getSubmodules().map((submodule) => submodule.getPath());
            for (const submodulePath of submodulePaths) {
                const submoduleModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getGitModel(submodulePath, gitModel.getPath());
                yield _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_4__["default"].handleRepositoryChange(submoduleModel);
            }
        });
    }
}


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateInitSubmodules; });
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * this Hanlder updates all Submodules on Extension-start
 */
class UpdateInitSubmodules extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static registerEventHandler() {
        if (_application_Config__WEBPACK_IMPORTED_MODULE_3__["default"].isEnabled('updateSubmodules')) {
            _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].START, this);
        }
    }
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_4__["default"].submoduleUpdateInit();
        });
    }
}
UpdateInitSubmodules.iterations = 0;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WatcherStart; });
/* harmony import */ var _application_Watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * this Handler starts the Watcher on Extension-start
 */
class WatcherStart extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static registerEventHandler() {
        _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].START, this);
    }
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            return _application_Watcher__WEBPACK_IMPORTED_MODULE_0__["default"].start();
        });
    }
}


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HandleSubmoduleUpdate; });
/* harmony import */ var _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _application_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _UI_StatusBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _UI_Status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









/**
 * this Handler is reponsible for updating Submodule references
 */
class HandleSubmoduleUpdate extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static registerEventHandler() {
        _EventHandler__WEBPACK_IMPORTED_MODULE_5__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_4__["default"].SUBMODULE_UPDATE, this);
    }
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            if (_application_Config__WEBPACK_IMPORTED_MODULE_6__["default"].getValue('updateSubmodules') === _application_Config__WEBPACK_IMPORTED_MODULE_6__["ConfigOptions"].auto) {
                yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].submoduleUpdateInit();
                _UI_StatusBar__WEBPACK_IMPORTED_MODULE_7__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_8__["default"].submoduleUpdated());
                return;
            }
            const action = yield _UI_InformationMessage__WEBPACK_IMPORTED_MODULE_0__["default"].showInformationMessage(`Your submodues have updated. Would you like to checkout these commits?`, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionYES, _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].optionNO);
            if (action !== _UI_MessageOption__WEBPACK_IMPORTED_MODULE_1__["default"].YES) {
                return;
            }
            yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_2__["default"].submoduleUpdateInit();
            _UI_StatusBar__WEBPACK_IMPORTED_MODULE_7__["default"].addStatus(_UI_Status__WEBPACK_IMPORTED_MODULE_8__["default"].submoduleUpdated());
        });
    }
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmoduleHandler; });
/* harmony import */ var _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _models_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * this Handler is responsible for whenever something changed in a Submodule
 */
class SubmoduleHandler extends _ChangeHandler__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static registerEventHandler() {
        _EventHandler__WEBPACK_IMPORTED_MODULE_3__["default"].registerHandler(_models_Event__WEBPACK_IMPORTED_MODULE_2__["default"].SUBMODULE, this);
    }
    static handle(changedFiles) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!changedFiles) {
                return;
            }
            // get submodulePaths of files that have changed
            const gitModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getGitModel();
            const submodules = gitModel.getSubmodules();
            const submodulePaths = new Set();
            changedFiles.forEach((changedFile) => {
                const founds = submodules
                    .filter((submodule) => new RegExp(submodule.getPath(), 'gi').test(changedFile))
                    .map((submodule) => submodule.getPath());
                founds.forEach((found) => submodulePaths.add(found));
            });
            for (const submodulePath of submodulePaths) {
                const submoduleModel = yield _application_GitRepository__WEBPACK_IMPORTED_MODULE_0__["default"].updateGitModel(submodulePath, gitModel.getPath());
                yield _git_GitHandler_handler__WEBPACK_IMPORTED_MODULE_4__["default"].handleRepositoryChange(submoduleModel);
            }
        });
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=extension.js.map