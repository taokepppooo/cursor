"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkJRN2XB6Pcjs = require('./chunk-JRN2XB6P.cjs');
require('./chunk-42PBKAQT.cjs');

// ../../node_modules/.pnpm/node-fetch-native@1.6.6/node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs
require('fs');
require('path');
require('http');
require('https');
require('zlib');
require('stream');
require('buffer');
require('util');
require('url');
require('net');
var U = Object.defineProperty;
var E = (_, o) => U(_, "name", { value: o, configurable: true });
var D = 0;
var t = { START_BOUNDARY: D++, HEADER_FIELD_START: D++, HEADER_FIELD: D++, HEADER_VALUE_START: D++, HEADER_VALUE: D++, HEADER_VALUE_ALMOST_DONE: D++, HEADERS_ALMOST_DONE: D++, PART_DATA_START: D++, PART_DATA: D++, END: D++ };
var F = 1;
var u = { PART_BOUNDARY: F, LAST_BOUNDARY: F *= 2 };
var g = 10;
var N = 13;
var V = 32;
var S = 45;
var Y = 58;
var x = 97;
var C = 122;
var I = E((_) => _ | 32, "lower");
var p = E(() => {
}, "noop");
var _M = class _M {
  constructor(o) {
    this.index = 0, this.flags = 0, this.onHeaderEnd = p, this.onHeaderField = p, this.onHeadersEnd = p, this.onHeaderValue = p, this.onPartBegin = p, this.onPartData = p, this.onPartEnd = p, this.boundaryChars = {}, o = `\r
--` + o;
    const n = new Uint8Array(o.length);
    for (let r = 0; r < o.length; r++) n[r] = o.charCodeAt(r), this.boundaryChars[n[r]] = true;
    this.boundary = n, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = t.START_BOUNDARY;
  }
  write(o) {
    let n = 0;
    const r = o.length;
    let d = this.index, { lookbehind: l, boundary: c, boundaryChars: m, index: e, state: i, flags: A } = this;
    const H = this.boundary.length, O = H - 1, y = o.length;
    let a, L;
    const f = E((h) => {
      this[h + "Mark"] = n;
    }, "mark"), s = E((h) => {
      delete this[h + "Mark"];
    }, "clear"), T = E((h, P, R, k) => {
      (P === void 0 || P !== R) && this[h](k && k.subarray(P, R));
    }, "callback"), b = E((h, P) => {
      const R = h + "Mark";
      R in this && (P ? (T(h, this[R], n, o), delete this[R]) : (T(h, this[R], o.length, o), this[R] = 0));
    }, "dataCallback");
    for (n = 0; n < r; n++) switch (a = o[n], i) {
      case t.START_BOUNDARY:
        if (e === c.length - 2) {
          if (a === S) A |= u.LAST_BOUNDARY;
          else if (a !== N) return;
          e++;
          break;
        } else if (e - 1 === c.length - 2) {
          if (A & u.LAST_BOUNDARY && a === S) i = t.END, A = 0;
          else if (!(A & u.LAST_BOUNDARY) && a === g) e = 0, T("onPartBegin"), i = t.HEADER_FIELD_START;
          else return;
          break;
        }
        a !== c[e + 2] && (e = -2), a === c[e + 2] && e++;
        break;
      case t.HEADER_FIELD_START:
        i = t.HEADER_FIELD, f("onHeaderField"), e = 0;
      case t.HEADER_FIELD:
        if (a === N) {
          s("onHeaderField"), i = t.HEADERS_ALMOST_DONE;
          break;
        }
        if (e++, a === S) break;
        if (a === Y) {
          if (e === 1) return;
          b("onHeaderField", true), i = t.HEADER_VALUE_START;
          break;
        }
        if (L = I(a), L < x || L > C) return;
        break;
      case t.HEADER_VALUE_START:
        if (a === V) break;
        f("onHeaderValue"), i = t.HEADER_VALUE;
      case t.HEADER_VALUE:
        a === N && (b("onHeaderValue", true), T("onHeaderEnd"), i = t.HEADER_VALUE_ALMOST_DONE);
        break;
      case t.HEADER_VALUE_ALMOST_DONE:
        if (a !== g) return;
        i = t.HEADER_FIELD_START;
        break;
      case t.HEADERS_ALMOST_DONE:
        if (a !== g) return;
        T("onHeadersEnd"), i = t.PART_DATA_START;
        break;
      case t.PART_DATA_START:
        i = t.PART_DATA, f("onPartData");
      case t.PART_DATA:
        if (d = e, e === 0) {
          for (n += O; n < y && !(o[n] in m); ) n += H;
          n -= O, a = o[n];
        }
        if (e < c.length) c[e] === a ? (e === 0 && b("onPartData", true), e++) : e = 0;
        else if (e === c.length) e++, a === N ? A |= u.PART_BOUNDARY : a === S ? A |= u.LAST_BOUNDARY : e = 0;
        else if (e - 1 === c.length) if (A & u.PART_BOUNDARY) {
          if (e = 0, a === g) {
            A &= ~u.PART_BOUNDARY, T("onPartEnd"), T("onPartBegin"), i = t.HEADER_FIELD_START;
            break;
          }
        } else A & u.LAST_BOUNDARY && a === S ? (T("onPartEnd"), i = t.END, A = 0) : e = 0;
        if (e > 0) l[e - 1] = a;
        else if (d > 0) {
          const h = new Uint8Array(l.buffer, l.byteOffset, l.byteLength);
          T("onPartData", 0, d, h), d = 0, f("onPartData"), n--;
        }
        break;
      case t.END:
        break;
      default:
        throw new Error(`Unexpected state entered: ${i}`);
    }
    b("onHeaderField"), b("onHeaderValue"), b("onPartData"), this.index = e, this.state = i, this.flags = A;
  }
  end() {
    if (this.state === t.HEADER_FIELD_START && this.index === 0 || this.state === t.PART_DATA && this.index === this.boundary.length) this.onPartEnd();
    else if (this.state !== t.END) throw new Error("MultipartParser.end(): stream ended unexpectedly");
  }
};
E(_M, "MultipartParser");
var M = _M;
function $(_) {
  const o = _.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!o) return;
  const n = o[2] || o[3] || "";
  let r = n.slice(n.lastIndexOf("\\") + 1);
  return r = r.replace(/%22/g, '"'), r = r.replace(/&#(\d{4});/g, (d, l) => String.fromCharCode(l)), r;
}
E($, "_fileName");
async function v(_, o) {
  if (!/multipart/i.test(o)) throw new TypeError("Failed to fetch");
  const n = o.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!n) throw new TypeError("no or bad content-type header, no multipart boundary");
  const r = new M(n[1] || n[2]);
  let d, l, c, m, e, i;
  const A = [], H = new (0, _chunkJRN2XB6Pcjs.Zt)(), O = E((s) => {
    c += f.decode(s, { stream: true });
  }, "onPartData"), y = E((s) => {
    A.push(s);
  }, "appendToFile"), a = E(() => {
    const s = new (0, _chunkJRN2XB6Pcjs.Yr)(A, i, { type: e });
    H.append(m, s);
  }, "appendFileToFormData"), L = E(() => {
    H.append(m, c);
  }, "appendEntryToFormData"), f = new TextDecoder("utf-8");
  f.decode(), r.onPartBegin = function() {
    r.onPartData = O, r.onPartEnd = L, d = "", l = "", c = "", m = "", e = "", i = null, A.length = 0;
  }, r.onHeaderField = function(s) {
    d += f.decode(s, { stream: true });
  }, r.onHeaderValue = function(s) {
    l += f.decode(s, { stream: true });
  }, r.onHeaderEnd = function() {
    if (l += f.decode(), d = d.toLowerCase(), d === "content-disposition") {
      const s = l.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      s && (m = s[2] || s[3] || ""), i = $(l), i && (r.onPartData = y, r.onPartEnd = a);
    } else d === "content-type" && (e = l);
    l = "", d = "";
  };
  for await (const s of _) r.write(s);
  return r.end(), H;
}
E(v, "toFormData");


exports.toFormData = v;
