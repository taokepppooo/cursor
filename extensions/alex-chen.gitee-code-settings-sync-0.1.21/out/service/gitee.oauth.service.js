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
const fs_1 = require("fs");
const node_fetch_1 = require("node-fetch");
class GiteeOAuthService {
    constructor(access_token, gist) {
        this.access_token = access_token;
        this.gist = gist;
        this.access_token = access_token;
        this.gist = gist;
    }
    getGist(access_token, host) {
        const source_url = `https://gitee.com/api/v5/gists?access_token=${this.access_token}`;
        node_fetch_1.default(source_url, {
            method: 'get',
        }).then(res => res.text()).then(host);
    }
    postGist(source_path, source_name, isBase64, isDelete, callback) {
        const url = `https://gitee.com/api/v5/gists/${this.gist}`;
        function readfile(path) {
            return new Promise((resolve, reject) => {
                var code = 'utf8';
                if (isBase64) {
                    code = 'base64';
                }
                else {
                    code = 'utf8';
                }
                fs_1.readFile(path, code, (err, data) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(data);
                });
            });
        }
        readfile(source_path).then((params) => {
            console.log("gist: ", this.gist);
            var _this = this;
            var data = {
                access_token: _this.access_token,
                files: {
                    [`${source_name}`]: {
                        content: params
                    }
                },
            };
            node_fetch_1.default(url, {
                method: 'PATCH',
                // body: params
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }).then(res => {
                return source_name;
            }).then((source_name) => {
                if (isDelete) {
                    fs_1.unlink(source_path, ((err) => {
                        console.log(err);
                    }));
                }
                return source_name;
            }).then(callback).catch(err => {
                callback('ERROR: ' + err);
            });
        });
    }
    fetchGist(source_path, source_name, isBase64, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = `https://gitee.com/api/v5/gists?access_token=${this.access_token}&page=1&per_page=20`;
            node_fetch_1.default(url, {
                method: 'get'
            }).then(res => res.json()).then((result) => {
                let my_discribtion;
                result.forEach((item) => {
                    if (item.id === this.gist) {
                        my_discribtion = item;
                    }
                });
                return my_discribtion.files;
            }).then((files) => {
                let content = files[source_name].content;
                if (isBase64) {
                    content = Buffer.from(content, 'base64');
                }
                else {
                    content = content;
                }
                fs_1.writeFile(source_path, content, (err) => {
                    console.log(err);
                });
                return source_name;
            }).then(callback);
        });
    }
    /**
     * fetchGistExtensions
     */
    fetchGistExtensions(source_name, ignoredExtensions, installExtent, callback) {
        var url = `https://gitee.com/api/v5/gists?access_token=${this.access_token}&page=1&per_page=20`;
        node_fetch_1.default(url, {
            method: 'get'
        }).then(res => res.json()).then((result) => {
            let my_discribtion;
            result.forEach((item) => {
                if (item.id === this.gist) {
                    my_discribtion = item;
                }
            });
            return my_discribtion.files;
        }).then((files) => {
            let content = files[source_name].content;
            content = content;
            return content;
        }).then((content) => {
            installExtent(content, ignoredExtensions, callback);
            return "exts download finished";
        }).then(callback);
    }
    /**
     * postGistV2
        just update or post gist  */
    postGistV2(source, source_name, callback) {
        const url = `https://gitee.com/api/v5/gists/${this.gist}`;
        var data = {
            access_token: this.access_token,
            files: {
                [`${source_name}`]: {
                    content: source
                }
            },
        };
        return new Promise((resolve, rejects) => {
            node_fetch_1.default(url, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            }).then(res => {
                callback(source_name);
                resolve(res);
            }).catch(err => {
                callback('ERROR: ' + err);
                rejects(err);
            });
        });
    }
}
exports.GiteeOAuthService = GiteeOAuthService;
//# sourceMappingURL=gitee.oauth.service.js.map