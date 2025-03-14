"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint8ArrayToString = void 0;
function uint8ArrayToString(fileData) {
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
    }
    return dataString;
}
exports.uint8ArrayToString = uint8ArrayToString;
//# sourceMappingURL=util.js.map