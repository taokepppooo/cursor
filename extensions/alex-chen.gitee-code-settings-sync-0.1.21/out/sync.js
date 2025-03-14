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
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const Zip = require("adm-zip");
const plugin_service_1 = require("./service/plugin.service");
const enums_1 = require("./enums");
const vscode = require("vscode");
const commons_1 = require("./commons");
class SyncService {
    constructor() {
        this.outputBind = false;
    }
    static readAnyFile(path) {
        return new Promise((resolve, reject) => {
            fs_extra_1.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    static getAllExt() {
        return plugin_service_1.PluginService.CreateExtensionList();
    }
    static writeFile(path, content) {
        fs_1.writeFile(path, content, (err) => {
            console.log(err);
        });
    }
    static installExtensions(extSetingPath, callback) {
        SyncService.readAnyFile(extSetingPath).then((exts) => {
            plugin_service_1.PluginService.InstallExtensions(exts, SyncService.ignornExts, callback);
        });
    }
    uploadCMD(giteeServer, environment) {
        if (!this.outputBind) {
            commons_1.Commons.initCommons();
            this.output = commons_1.Commons.outPut;
            this.outputBind = true;
        }
        var callback = this.output;
        giteeServer.postGist(environment.FILE_SETTING, environment.FILE_SETTING_NAME, false, false, callback);
        var uploadTime = new Date();
        // upload sync.lock
        giteeServer.postGistV2(JSON.stringify({ "lastUploadTime": uploadTime.toISOString() }, null, 2), environment.FILE_SYNC_LOCK_NAME, callback);
        // upload extension setting
        var extendsList = SyncService.getAllExt();
        giteeServer.postGistV2(JSON.stringify(extendsList, null, 2), environment.FILE_EXTENSION_NAME, callback);
        // upload keyboard bind
        var remoteKeyboardFileName = environment.FILE_KEYBINDING_NAME;
        if (environment.OsType === enums_1.OsType.Mac) {
            remoteKeyboardFileName = environment.FILE_KEYBINDING_MAC;
        }
        giteeServer.postGist(environment.FILE_KEYBINDING, remoteKeyboardFileName, false, false, callback);
        // upload snippets folder
        var snipperZipFile = SyncService.zipFold(environment, callback);
        giteeServer.postGist(snipperZipFile, environment.FILE_SNIPPETS_ZIP_NAME, true, true, callback);
    }
    downodCMD(giteeServer, environment) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.outputBind) {
                commons_1.Commons.initCommons();
                this.output = commons_1.Commons.outPut;
                this.outputBind = true;
            }
            var callback = this.output;
            giteeServer.fetchGist(environment.FILE_SETTING, environment.FILE_SETTING_NAME, false, callback);
            giteeServer.fetchGist(environment.FILE_EXTENSION, environment.FILE_EXTENSION_NAME, false, callback);
            // down keyboard binding
            var remoteKeyboardFileName = environment.FILE_KEYBINDING_NAME;
            if (environment.OsType === enums_1.OsType.Mac) {
                remoteKeyboardFileName = environment.FILE_KEYBINDING_MAC;
            }
            giteeServer.fetchGist(environment.FILE_KEYBINDING, remoteKeyboardFileName, false, callback);
            // down extension json
            giteeServer.fetchGistExtensions(environment.FILE_EXTENSION_NAME, SyncService.ignornExts, plugin_service_1.PluginService.InstallExtensions, callback);
            // SyncService.installExtensions(environment.FILE_EXTENSION, callback);
            // // down snippets zip
            yield giteeServer.fetchGist(environment.FILE_SNIPPETS_ZIP, environment.FILE_SNIPPETS_ZIP_NAME, true, callback);
            SyncService.unZipFold(environment, callback);
        });
    }
    static zipFold(environment, callback) {
        SyncService.zip.addLocalFolder(environment.FOLDER_SNIPPETS);
        SyncService.zip.writeZip(environment.FILE_SNIPPETS_ZIP);
        callback('finished zip');
        return environment.FILE_SNIPPETS_ZIP;
    }
    static unZipFold(environment, callback) {
        var _zip = new Zip(environment.FILE_SNIPPETS_ZIP);
        _zip.extractAllTo(environment.FOLDER_SNIPPETS, true);
        callback('finished unzip');
        // remove zip file
        callback(environment.FILE_SNIPPETS_ZIP);
        fs_extra_1.unlink(environment.FILE_SNIPPETS_ZIP);
    }
    static watch(giteeServer) {
        return vscode.workspace.onDidChangeConfiguration(() => {
            let configuration = vscode.workspace.getConfiguration('gitee');
            giteeServer.access_token = configuration.get('access_token');
            giteeServer.gist = configuration.get('gist');
        });
    }
}
exports.SyncService = SyncService;
SyncService.zip = new Zip();
SyncService.ignornExts = ["Alex-Chen.gitee-code-settings-sync"];
//# sourceMappingURL=sync.js.map