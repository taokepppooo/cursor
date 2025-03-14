"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
// TODO 插件配置文件
class Environment {
    constructor(context) {
        this.PATH = '';
        this.FILE_SETTING = '';
        this.USER_FOLDER = '';
        this.FILE_EXTENSION = '';
        this.SYNC_LOCK = '';
        this.FILE_SETTING_NAME = 'settings.json';
        // public FILE_LAUNCH_NAME: string = "launch.json";
        this.FILE_KEYBINDING_NAME = "keybindings.json";
        this.FILE_KEYBINDING_MAC = "keybindingsMac.json";
        this.FILE_KEYBINDING_DEFAULT = "keybindings.json";
        this.FILE_EXTENSION_NAME = "extensions.json";
        // public FILE_LOCALE_NAME: string = "locale.json";
        this.FILE_SYNC_LOCK_NAME = "syncGitee.lock";
        // public FILE_CLOUDSETTINGS_NAME: string = "cloudSettings";
        this.FOLDER_SNIPPETS_NAME = 'snippets';
        this.FILE_SNIPPETS_ZIP_NAME = 'snippets.zip';
        this.FOLDER_SNIPPETS = '';
        this.FILE_SNIPPETS_ZIP = '';
        this.FILE_KEYBINDING = '';
        // state.context.globalState.update("_", undefined); 
        this.context = context;
        this.PATH = path_1.resolve(this.context.globalStoragePath, "../../..").concat(path_1.normalize("/"));
        this.USER_FOLDER = path_1.resolve(this.PATH, "User").concat(path_1.normalize("/"));
        this.FILE_SETTING = this.USER_FOLDER.concat(this.FILE_SETTING_NAME);
        this.FILE_EXTENSION = this.USER_FOLDER.concat(this.FILE_EXTENSION_NAME);
        this.FOLDER_SNIPPETS = this.USER_FOLDER.concat("snippets");
        this.FILE_SNIPPETS_ZIP = this.USER_FOLDER.concat(this.FILE_SNIPPETS_ZIP_NAME);
        this.FILE_KEYBINDING = this.USER_FOLDER.concat(this.FILE_KEYBINDING_DEFAULT);
        this.OsType = process.platform;
        this.SYNC_LOCK = this.USER_FOLDER.concat(this.FILE_SYNC_LOCK_NAME);
    }
}
exports.Environment = Environment;
//# sourceMappingURL=environmentPath.js.map