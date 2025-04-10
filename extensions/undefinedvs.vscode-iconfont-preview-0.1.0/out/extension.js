'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const fetch = require("node-fetch");
// 解析文档中可能存在的 iconfont 地址
function getIconfontPath() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const content = editor.document.getText();
        if (content.match(/at\.alicdn\.com/)) {
            const matches = content.match(/url\(['"](.*?at\.alicdn\.com.*?\.svg)/);
            if (matches && matches[1]) {
                const svgPath = matches[1];
                return svgPath;
            }
        }
    }
    return false;
}
function toSvg(path) {
    return `<svg viewBox='0 -128 1035 1035' width='256' xmlns='http://www.w3.org/2000/svg' style='transform:rotateX(180deg);transform-origin:center;scale(.8);'><path fill='#ffffff' d='${path}'></path></svg>`;
}
// 下载远程 iconfont 文件，解析出结构化的数据
function parseIconfont(svgPath, status) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(svgPath.replace(/^\/\//, 'https://'));
            const str = yield res.text();
            // 构建单个 icon 的数据结构
            const singleIconRegx = /<glyph glyph-name=\"(.*?)\" unicode=\"(.*?)\" d=\"(.*?)\".*\/>/g;
            const codeMap = {};
            let match = singleIconRegx.exec(str);
            while (match) {
                const [, , code, path] = match;
                // 解析到的 code 是 10 进制，代码里用的 code 是 16 进制，为了方便匹配做个转换
                const finalName = parseInt(code.replace(/[&#;]/g, ''), 10).toString(16);
                codeMap[finalName] = toSvg(path);
                match = singleIconRegx.exec(str);
            }
            return codeMap;
        }
        catch (error) {
            status.text = 'iconfont 解析出错';
            status.show();
            console.error(error);
            return {};
        }
    });
}
// 解析出文件中可能包含的 icon 引用
function parseScssIcon() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const regex = /content: \'\\([^']+)\';/;
        const lineCount = editor.document.lineCount;
        const map = {};
        let i = 0;
        while (i < lineCount) {
            const line = editor.document.lineAt(i);
            const matches = regex.exec(line.text);
            if (matches) {
                map[i] = matches[1];
            }
            i++;
        }
        return map;
    }
    return {};
}
function activate(context) {
    const status = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
    context.subscriptions.push(status);
    function renderIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const svgPath = getIconfontPath();
                if (svgPath) {
                    status.text = '解析 iconfont 中';
                    status.show();
                    const map = yield parseIconfont(svgPath, status);
                    const iconMap = parseScssIcon();
                    const keys = Object.keys(iconMap);
                    status.text = `${keys.length}个icon`;
                    keys.forEach(line => {
                        const svg = map[iconMap[line]];
                        if (!svg) {
                            return;
                        }
                        const decorations = [
                            {
                                range: new vscode.Range(parseInt(line, 10), 0, parseInt(line, 10), 0),
                                hoverMessage: '',
                            }
                        ];
                        let decorationRenderOptions = {
                            gutterIconPath: vscode.Uri.parse(`data:image/svg+xml;utf8,${svg}`),
                            gutterIconSize: 'contain',
                        };
                        let textEditorDecorationType = vscode.window.createTextEditorDecorationType(decorationRenderOptions);
                        vscode.window.activeTextEditor.setDecorations(textEditorDecorationType, decorations);
                    });
                }
                else {
                    status.hide();
                }
            }
            catch (error) {
                status.text = `[icon]${error.message}`;
                status.show();
                console.error(error);
            }
        });
    }
    vscode.window.onDidChangeActiveTextEditor(renderIcon, null, context.subscriptions);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map