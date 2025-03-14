"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const environmentPath_1 = require("./environmentPath");
const gitee_oauth_service_1 = require("./service/gitee.oauth.service");
const sync_1 = require("./sync");
const nls = require("vscode-nls");
const localize = nls.config({ messageFormat: nls.MessageFormat.file })();
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // state.context = context;
    let environment = new environmentPath_1.Environment(context);
    let configuration = vscode.workspace.getConfiguration('gitee');
    var gist = configuration.get('gist');
    var aoth = configuration.get('access_token');
    let giteeService = new gitee_oauth_service_1.GiteeOAuthService(aoth, gist);
    let syncService = new sync_1.SyncService();
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let push = vscode.commands.registerCommand('extension.giteeUploadSetting', () => {
        // The code you place here will be executed every time your command is executed
        syncService.uploadCMD(giteeService, environment);
    });
    let pull = vscode.commands.registerCommand('extension.giteeDownloadSetting', () => {
        // The code you place here will be executed every time your command is executed
        syncService.downodCMD(giteeService, environment);
    });
    context.subscriptions.push(push);
    context.subscriptions.push(pull);
    // 监听配置文件变化
    context.subscriptions.push(sync_1.SyncService.watch(giteeService));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map