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
const vscode = require("vscode");
class Commons {
    static initCommons() {
        Commons.outPutChannel = vscode.window.createOutputChannel('Gitee Code Settings Sync');
        Commons.outPutChannel.show(true);
    }
    static outPut(msg) {
        if (Commons.outPutChannel === null) {
            Commons.initCommons();
        }
        Commons.outPutChannel.appendLine(msg);
    }
}
exports.Commons = Commons;
function showInputBox() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield vscode.window.showInputBox({
            value: 'abcdef',
            valueSelection: [2, 4],
            placeHolder: 'For example: fedcba. But not: 123',
            validateInput: text => {
                vscode.window.showInformationMessage(`Validating: ${text}`);
                return text === '123' ? 'Not 123!' : null;
            }
        });
        vscode.window.showInformationMessage(`Got: ${result}`);
        return result;
    });
}
exports.showInputBox = showInputBox;
//# sourceMappingURL=commons.js.map