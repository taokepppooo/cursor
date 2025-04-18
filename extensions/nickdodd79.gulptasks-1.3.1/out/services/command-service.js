"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class CommandService {
    registerCommand(command, callback, context) {
        return vscode_1.commands.registerCommand(command, callback, context);
    }
    setContext(command, value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield vscode_1.commands.executeCommand('setContext', command, value);
        });
    }
}
exports.CommandService = CommandService;
//# sourceMappingURL=command-service.js.map