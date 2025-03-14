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
class ExtensionInformation {
    static fromJSON(text) {
        try {
            // TODO: JSON.parse may throw error
            // Throw custom error should be more friendly
            const obj = JSON.parse(text);
            const meta = new ExtensionMetadata(obj.meta.galleryApiUrl, obj.meta.id, obj.meta.downloadUrl, obj.meta.publisherId, obj.meta.publisherDisplayName, obj.meta.date);
            const item = new ExtensionInformation();
            item.metadata = meta;
            item.name = obj.name;
            item.publisher = obj.publisher;
            item.version = obj.version;
            return item;
        }
        catch (err) {
            throw err;
        }
    }
    static fromJSONList(text) {
        const extList = [];
        try {
            // TODO: JSON.parse may throw error
            // Throw custom error should be more friendly
            var list = null;
            if (typeof (text) === 'string') {
                list = JSON.parse(text);
            }
            else {
                list = text;
            }
            // const list = JSON.parse(text);
            list.forEach((obj) => {
                const meta = new ExtensionMetadata(obj.metadata.galleryApiUrl, obj.metadata.id, obj.metadata.downloadUrl, obj.metadata.publisherId, obj.metadata.publisherDisplayName, obj.metadata.date);
                const item = new ExtensionInformation();
                item.metadata = meta;
                item.name = obj.name;
                item.publisher = obj.publisher;
                item.version = obj.version;
                console.log(`extension name -${item.name}`);
                if (item.name !== "code-settings-sync") {
                    extList.push(item);
                }
            });
        }
        catch (err) {
            throw err;
        }
        return extList;
    }
}
exports.ExtensionInformation = ExtensionInformation;
class ExtensionMetadata {
    constructor(galleryApiUrl, id, downloadUrl, publisherId, publisherDisplayName, date) {
        this.galleryApiUrl = galleryApiUrl;
        this.id = id;
        this.downloadUrl = downloadUrl;
        this.publisherId = publisherId;
        this.publisherDisplayName = publisherDisplayName;
        this.date = date;
    }
}
exports.ExtensionMetadata = ExtensionMetadata;
class PluginService {
    static GetMissingExtensions(remoteExt, ignoredExtensions) {
        const remoteList = ExtensionInformation.fromJSONList(remoteExt);
        const localList = this.CreateExtensionList();
        return remoteList.filter(ext => !ignoredExtensions.includes(ext.name) &&
            !localList.map(e => e.name).includes(ext.name));
    }
    static GetDeletedExtensions(remoteExtensions, ignoredExtensions) {
        const localExtensions = this.CreateExtensionList();
        // for (var i = 0; i < remoteList.length; i++) {
        //     var ext = remoteList[i];
        //     var found: boolean = false;
        //     for (var j = 0; j < localList.length; j++) {
        //         var localExt = localList[j];
        //         if (ext.name == localExt.name) {
        //             found = true;
        //             break;
        //         }
        //     }
        //     if (!found) {
        //         deletedList.push(localExt);
        //     }
        // }
        return localExtensions.filter(ext => ext.name !== "code-settings-sync" &&
            !remoteExtensions.map(e => e.name).includes(ext.name) &&
            !ignoredExtensions.includes(ext.name));
    }
    static CreateExtensionList() {
        return vscode.extensions.all
            .filter(ext => !ext.packageJSON.isBuiltin)
            .map(ext => {
            const meta = ext.packageJSON.__metadata || {
                id: ext.packageJSON.uuid,
                publisherId: ext.id,
                publisherDisplayName: ext.packageJSON.publisher
            };
            const data = new ExtensionMetadata(meta.galleryApiUrl, meta.id, meta.downloadUrl, meta.publisherId, meta.publisherDisplayName, meta.date);
            const info = new ExtensionInformation();
            info.metadata = data;
            info.name = ext.packageJSON.name;
            info.publisher = ext.packageJSON.publisher;
            info.version = ext.packageJSON.version;
            return info;
        });
    }
    static DeleteExtension(extension) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield vscode.commands.executeCommand("workbench.extensions.uninstallExtension", `${extension.publisher}.${extension.name}`);
                return true;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static DeleteExtensions(extensionsJson, ignoredExtensions) {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteExtensions = ExtensionInformation.fromJSONList(extensionsJson);
            const toDelete = PluginService.GetDeletedExtensions(remoteExtensions, ignoredExtensions);
            return Promise.all(toDelete.map((selectedExtension) => __awaiter(this, void 0, void 0, function* () {
                try {
                    yield PluginService.DeleteExtension(selectedExtension);
                    return selectedExtension;
                }
                catch (err) {
                    throw new Error(`Sync : Unable to delete extension ${selectedExtension.name} ${selectedExtension.version}: ${err}`);
                }
            })));
        });
    }
    static InstallExtensions(extensions, ignoredExtensions, notificationCallBack) {
        return __awaiter(this, void 0, void 0, function* () {
            let addedExtensions = [];
            const missingExtensions = PluginService.GetMissingExtensions(extensions, ignoredExtensions);
            if (missingExtensions.length === 0) {
                notificationCallBack("Gitee : No Extensions needs to be installed.");
                return [];
            }
            addedExtensions = yield PluginService.InstallWithAPI(missingExtensions, notificationCallBack);
            return addedExtensions;
        });
    }
    static InstallWithAPI(missingExtensions, notificationCallBack) {
        return __awaiter(this, void 0, void 0, function* () {
            const addedExtensions = [];
            const missingExtensionsCount = missingExtensions.length;
            notificationCallBack("TOTAL EXTENSIONS : " + missingExtensionsCount);
            notificationCallBack("");
            notificationCallBack("");
            for (const ext of missingExtensions) {
                const name = ext.publisher + "." + ext.name;
                try {
                    notificationCallBack("");
                    notificationCallBack(`[x] - EXTENSION: ${ext.name} - INSTALLING`);
                    yield vscode.commands.executeCommand("workbench.extensions.installExtension", name);
                    notificationCallBack("");
                    notificationCallBack(`[x] - EXTENSION: ${ext.name} INSTALLED.`);
                    notificationCallBack(`      ${missingExtensions.indexOf(ext) +
                        1} OF ${missingExtensionsCount} INSTALLED`, true);
                    notificationCallBack("");
                    addedExtensions.push(ext);
                }
                catch (err) {
                    throw err;
                }
            }
            return addedExtensions;
        });
    }
}
exports.PluginService = PluginService;
//# sourceMappingURL=plugin.service.js.map