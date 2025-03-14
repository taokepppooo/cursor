"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }




var _chunk42PBKAQTcjs = require('./chunk-42PBKAQT.cjs');

// ../../node_modules/.pnpm/node-fetch-native@1.6.6/node_modules/node-fetch-native/dist/shared/node-fetch-native.DfbY2q-x.mjs
var t = Object.defineProperty;
var o = (e, l) => t(e, "name", { value: l, configurable: true });
var n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o(f, "getDefaultExportFromCjs");

// ../../node_modules/.pnpm/node-fetch-native@1.6.6/node_modules/node-fetch-native/dist/node.mjs
var _http = require('http'); var _http2 = _interopRequireDefault(_http);
var _https = require('https'); var _https2 = _interopRequireDefault(_https);
var _zlib = require('zlib'); var _zlib2 = _interopRequireDefault(_zlib);
var _stream = require('stream'); var _stream2 = _interopRequireDefault(_stream);
var _buffer = require('buffer');
var _util = require('util');
var _url = require('url');
var _net = require('net');
var _fs = require('fs');
var _path = require('path');
var Va = Object.defineProperty;
var n2 = (i, o2) => Va(i, "name", { value: o2, configurable: true });
function ts(i) {
  if (!/^data:/i.test(i)) throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  i = i.replace(/\r?\n/g, "");
  const o2 = i.indexOf(",");
  if (o2 === -1 || o2 <= 4) throw new TypeError("malformed data: URI");
  const a = i.substring(5, o2).split(";");
  let l = "", u = false;
  const m = a[0] || "text/plain";
  let h = m;
  for (let A = 1; A < a.length; A++) a[A] === "base64" ? u = true : a[A] && (h += `;${a[A]}`, a[A].indexOf("charset=") === 0 && (l = a[A].substring(8)));
  !a[0] && !l.length && (h += ";charset=US-ASCII", l = "US-ASCII");
  const S = u ? "base64" : "ascii", E = unescape(i.substring(o2 + 1)), w = Buffer.from(E, S);
  return w.type = m, w.typeFull = h, w.charset = l, w;
}
n2(ts, "dataUriToBuffer");
var Eo = {};
var ct = { exports: {} };
var rs = ct.exports;
var vo;
function ns() {
  return vo || (vo = 1, function(i, o2) {
    (function(a, l) {
      l(o2);
    })(rs, function(a) {
      function l() {
      }
      n2(l, "noop");
      function u(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n2(u, "typeIsObject");
      const m = l;
      function h(e, t2) {
        try {
          Object.defineProperty(e, "name", { value: t2, configurable: true });
        } catch (e2) {
        }
      }
      n2(h, "setFunctionName");
      const S = Promise, E = Promise.prototype.then, w = Promise.reject.bind(S);
      function A(e) {
        return new S(e);
      }
      n2(A, "newPromise");
      function T(e) {
        return A((t2) => t2(e));
      }
      n2(T, "promiseResolvedWith");
      function b(e) {
        return w(e);
      }
      n2(b, "promiseRejectedWith");
      function q(e, t2, r) {
        return E.call(e, t2, r);
      }
      n2(q, "PerformPromiseThen");
      function g(e, t2, r) {
        q(q(e, t2, r), void 0, m);
      }
      n2(g, "uponPromise");
      function V(e, t2) {
        g(e, t2);
      }
      n2(V, "uponFulfillment");
      function I(e, t2) {
        g(e, void 0, t2);
      }
      n2(I, "uponRejection");
      function F(e, t2, r) {
        return q(e, t2, r);
      }
      n2(F, "transformPromiseWith");
      function Q(e) {
        q(e, void 0, m);
      }
      n2(Q, "setPromiseIsHandledToTrue");
      let se = n2((e) => {
        if (typeof queueMicrotask == "function") se = queueMicrotask;
        else {
          const t2 = T(void 0);
          se = n2((r) => q(t2, r), "_queueMicrotask");
        }
        return se(e);
      }, "_queueMicrotask");
      function O(e, t2, r) {
        if (typeof e != "function") throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t2, r);
      }
      n2(O, "reflectCall");
      function z(e, t2, r) {
        try {
          return T(O(e, t2, r));
        } catch (s) {
          return b(s);
        }
      }
      n2(z, "promiseCall");
      const $ = 16384;
      const _M = class _M {
        constructor() {
          this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: void 0 }, this._back = this._front, this._cursor = 0, this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(t2) {
          const r = this._back;
          let s = r;
          r._elements.length === $ - 1 && (s = { _elements: [], _next: void 0 }), r._elements.push(t2), s !== r && (this._back = s, r._next = s), ++this._size;
        }
        shift() {
          const t2 = this._front;
          let r = t2;
          const s = this._cursor;
          let f2 = s + 1;
          const c = t2._elements, d = c[s];
          return f2 === $ && (r = t2._next, f2 = 0), --this._size, this._cursor = f2, t2 !== r && (this._front = r), c[s] = void 0, d;
        }
        forEach(t2) {
          let r = this._cursor, s = this._front, f2 = s._elements;
          for (; (r !== f2.length || s._next !== void 0) && !(r === f2.length && (s = s._next, f2 = s._elements, r = 0, f2.length === 0)); ) t2(f2[r]), ++r;
        }
        peek() {
          const t2 = this._front, r = this._cursor;
          return t2._elements[r];
        }
      };
      n2(_M, "SimpleQueue");
      let M = _M;
      const pt = Symbol("[[AbortSteps]]"), an = Symbol("[[ErrorSteps]]"), ar = Symbol("[[CancelSteps]]"), sr = Symbol("[[PullSteps]]"), ur = Symbol("[[ReleaseSteps]]");
      function sn(e, t2) {
        e._ownerReadableStream = t2, t2._reader = e, t2._state === "readable" ? fr(e) : t2._state === "closed" ? ri(e) : un(e, t2._storedError);
      }
      n2(sn, "ReadableStreamReaderGenericInitialize");
      function lr(e, t2) {
        const r = e._ownerReadableStream;
        return X(r, t2);
      }
      n2(lr, "ReadableStreamReaderGenericCancel");
      function ue(e) {
        const t2 = e._ownerReadableStream;
        t2._state === "readable" ? cr(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : ni(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t2._readableStreamController[ur](), t2._reader = void 0, e._ownerReadableStream = void 0;
      }
      n2(ue, "ReadableStreamReaderGenericRelease");
      function yt(e) {
        return new TypeError("Cannot " + e + " a stream using a released reader");
      }
      n2(yt, "readerLockException");
      function fr(e) {
        e._closedPromise = A((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r;
        });
      }
      n2(fr, "defaultReaderClosedPromiseInitialize");
      function un(e, t2) {
        fr(e), cr(e, t2);
      }
      n2(un, "defaultReaderClosedPromiseInitializeAsRejected");
      function ri(e) {
        fr(e), ln(e);
      }
      n2(ri, "defaultReaderClosedPromiseInitializeAsResolved");
      function cr(e, t2) {
        e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n2(cr, "defaultReaderClosedPromiseReject");
      function ni(e, t2) {
        un(e, t2);
      }
      n2(ni, "defaultReaderClosedPromiseResetToRejected");
      function ln(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0);
      }
      n2(ln, "defaultReaderClosedPromiseResolve");
      const fn = Number.isFinite || function(e) {
        return typeof e == "number" && isFinite(e);
      }, oi = Math.trunc || function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      };
      function ii(e) {
        return typeof e == "object" || typeof e == "function";
      }
      n2(ii, "isDictionary");
      function ne(e, t2) {
        if (e !== void 0 && !ii(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n2(ne, "assertDictionary");
      function G(e, t2) {
        if (typeof e != "function") throw new TypeError(`${t2} is not a function.`);
      }
      n2(G, "assertFunction");
      function ai(e) {
        return typeof e == "object" && e !== null || typeof e == "function";
      }
      n2(ai, "isObject");
      function cn(e, t2) {
        if (!ai(e)) throw new TypeError(`${t2} is not an object.`);
      }
      n2(cn, "assertObject");
      function le(e, t2, r) {
        if (e === void 0) throw new TypeError(`Parameter ${t2} is required in '${r}'.`);
      }
      n2(le, "assertRequiredArgument");
      function dr(e, t2, r) {
        if (e === void 0) throw new TypeError(`${t2} is required in '${r}'.`);
      }
      n2(dr, "assertRequiredField");
      function hr(e) {
        return Number(e);
      }
      n2(hr, "convertUnrestrictedDouble");
      function dn(e) {
        return e === 0 ? 0 : e;
      }
      n2(dn, "censorNegativeZero");
      function si(e) {
        return dn(oi(e));
      }
      n2(si, "integerPart");
      function mr(e, t2) {
        const s = Number.MAX_SAFE_INTEGER;
        let f2 = Number(e);
        if (f2 = dn(f2), !fn(f2)) throw new TypeError(`${t2} is not a finite number`);
        if (f2 = si(f2), f2 < 0 || f2 > s) throw new TypeError(`${t2} is outside the accepted range of 0 to ${s}, inclusive`);
        return !fn(f2) || f2 === 0 ? 0 : f2;
      }
      n2(mr, "convertUnsignedLongLongWithEnforceRange");
      function br(e, t2) {
        if (!Te(e)) throw new TypeError(`${t2} is not a ReadableStream.`);
      }
      n2(br, "assertReadableStream");
      function ze(e) {
        return new ye(e);
      }
      n2(ze, "AcquireReadableStreamDefaultReader");
      function hn(e, t2) {
        e._reader._readRequests.push(t2);
      }
      n2(hn, "ReadableStreamAddReadRequest");
      function pr(e, t2, r) {
        const f2 = e._reader._readRequests.shift();
        r ? f2._closeSteps() : f2._chunkSteps(t2);
      }
      n2(pr, "ReadableStreamFulfillReadRequest");
      function gt(e) {
        return e._reader._readRequests.length;
      }
      n2(gt, "ReadableStreamGetNumReadRequests");
      function mn(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !ge(t2));
      }
      n2(mn, "ReadableStreamHasDefaultReader");
      const _ye = class _ye {
        constructor(t2) {
          if (le(t2, 1, "ReadableStreamDefaultReader"), br(t2, "First parameter"), Ce(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          sn(this, t2), this._readRequests = new M();
        }
        get closed() {
          return ge(this) ? this._closedPromise : b(_t4("closed"));
        }
        cancel(t2 = void 0) {
          return ge(this) ? this._ownerReadableStream === void 0 ? b(yt("cancel")) : lr(this, t2) : b(_t4("cancel"));
        }
        read() {
          if (!ge(this)) return b(_t4("read"));
          if (this._ownerReadableStream === void 0) return b(yt("read from"));
          let t2, r;
          const s = A((c, d) => {
            t2 = c, r = d;
          });
          return et(this, { _chunkSteps: n2((c) => t2({ value: c, done: false }), "_chunkSteps"), _closeSteps: n2(() => t2({ value: void 0, done: true }), "_closeSteps"), _errorSteps: n2((c) => r(c), "_errorSteps") }), s;
        }
        releaseLock() {
          if (!ge(this)) throw _t4("releaseLock");
          this._ownerReadableStream !== void 0 && ui(this);
        }
      };
      n2(_ye, "ReadableStreamDefaultReader");
      let ye = _ye;
      Object.defineProperties(ye.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h(ye.prototype.cancel, "cancel"), h(ye.prototype.read, "read"), h(ye.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ye.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
      function ge(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof ye;
      }
      n2(ge, "IsReadableStreamDefaultReader");
      function et(e, t2) {
        const r = e._ownerReadableStream;
        r._disturbed = true, r._state === "closed" ? t2._closeSteps() : r._state === "errored" ? t2._errorSteps(r._storedError) : r._readableStreamController[sr](t2);
      }
      n2(et, "ReadableStreamDefaultReaderRead");
      function ui(e) {
        ue(e);
        const t2 = new TypeError("Reader was released");
        bn(e, t2);
      }
      n2(ui, "ReadableStreamDefaultReaderRelease");
      function bn(e, t2) {
        const r = e._readRequests;
        e._readRequests = new M(), r.forEach((s) => {
          s._errorSteps(t2);
        });
      }
      n2(bn, "ReadableStreamDefaultReaderErrorReadRequests");
      function _t4(e) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
      }
      n2(_t4, "defaultReaderBrandCheckException");
      const li = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      const _pn = class _pn {
        constructor(t2, r) {
          this._ongoingPromise = void 0, this._isFinished = false, this._reader = t2, this._preventCancel = r;
        }
        next() {
          const t2 = n2(() => this._nextSteps(), "nextSteps");
          return this._ongoingPromise = this._ongoingPromise ? F(this._ongoingPromise, t2, t2) : t2(), this._ongoingPromise;
        }
        return(t2) {
          const r = n2(() => this._returnSteps(t2), "returnSteps");
          return this._ongoingPromise ? F(this._ongoingPromise, r, r) : r();
        }
        _nextSteps() {
          if (this._isFinished) return Promise.resolve({ value: void 0, done: true });
          const t2 = this._reader;
          let r, s;
          const f2 = A((d, p) => {
            r = d, s = p;
          });
          return et(t2, { _chunkSteps: n2((d) => {
            this._ongoingPromise = void 0, se(() => r({ value: d, done: false }));
          }, "_chunkSteps"), _closeSteps: n2(() => {
            this._ongoingPromise = void 0, this._isFinished = true, ue(t2), r({ value: void 0, done: true });
          }, "_closeSteps"), _errorSteps: n2((d) => {
            this._ongoingPromise = void 0, this._isFinished = true, ue(t2), s(d);
          }, "_errorSteps") }), f2;
        }
        _returnSteps(t2) {
          if (this._isFinished) return Promise.resolve({ value: t2, done: true });
          this._isFinished = true;
          const r = this._reader;
          if (!this._preventCancel) {
            const s = lr(r, t2);
            return ue(r), F(s, () => ({ value: t2, done: true }));
          }
          return ue(r), T({ value: t2, done: true });
        }
      };
      n2(_pn, "ReadableStreamAsyncIteratorImpl");
      let pn = _pn;
      const yn = { next() {
        return gn(this) ? this._asyncIteratorImpl.next() : b(_n2("next"));
      }, return(e) {
        return gn(this) ? this._asyncIteratorImpl.return(e) : b(_n2("return"));
      } };
      Object.setPrototypeOf(yn, li);
      function fi(e, t2) {
        const r = ze(e), s = new pn(r, t2), f2 = Object.create(yn);
        return f2._asyncIteratorImpl = s, f2;
      }
      n2(fi, "AcquireReadableStreamAsyncIterator");
      function gn(e) {
        if (!u(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl")) return false;
        try {
          return e._asyncIteratorImpl instanceof pn;
        } catch (e2) {
          return false;
        }
      }
      n2(gn, "IsReadableStreamAsyncIterator");
      function _n2(e) {
        return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
      }
      n2(_n2, "streamAsyncIteratorBrandCheckException");
      const Sn = Number.isNaN || function(e) {
        return e !== e;
      };
      var yr, gr, _r2;
      function tt(e) {
        return e.slice();
      }
      n2(tt, "CreateArrayFromList");
      function wn(e, t2, r, s, f2) {
        new Uint8Array(e).set(new Uint8Array(r, s, f2), t2);
      }
      n2(wn, "CopyDataBlockBytes");
      let fe = n2((e) => (typeof e.transfer == "function" ? fe = n2((t2) => t2.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? fe = n2((t2) => structuredClone(t2, { transfer: [t2] }), "TransferArrayBuffer") : fe = n2((t2) => t2, "TransferArrayBuffer"), fe(e)), "TransferArrayBuffer"), _e5 = n2((e) => (typeof e.detached == "boolean" ? _e5 = n2((t2) => t2.detached, "IsDetachedBuffer") : _e5 = n2((t2) => t2.byteLength === 0, "IsDetachedBuffer"), _e5(e)), "IsDetachedBuffer");
      function Rn(e, t2, r) {
        if (e.slice) return e.slice(t2, r);
        const s = r - t2, f2 = new ArrayBuffer(s);
        return wn(f2, 0, e, t2, s), f2;
      }
      n2(Rn, "ArrayBufferSlice");
      function St(e, t2) {
        const r = e[t2];
        if (r != null) {
          if (typeof r != "function") throw new TypeError(`${String(t2)} is not a function`);
          return r;
        }
      }
      n2(St, "GetMethod");
      function ci(e) {
        const t2 = { [Symbol.iterator]: () => e.iterator }, r = async function* () {
          return yield* t2;
        }(), s = r.next;
        return { iterator: r, nextMethod: s, done: false };
      }
      n2(ci, "CreateAsyncFromSyncIterator");
      const Sr = (_r2 = (yr = Symbol.asyncIterator) !== null && yr !== void 0 ? yr : (gr = Symbol.for) === null || gr === void 0 ? void 0 : gr.call(Symbol, "Symbol.asyncIterator")) !== null && _r2 !== void 0 ? _r2 : "@@asyncIterator";
      function Tn(e, t2 = "sync", r) {
        if (r === void 0) if (t2 === "async") {
          if (r = St(e, Sr), r === void 0) {
            const c = St(e, Symbol.iterator), d = Tn(e, "sync", c);
            return ci(d);
          }
        } else r = St(e, Symbol.iterator);
        if (r === void 0) throw new TypeError("The object is not iterable");
        const s = O(r, e, []);
        if (!u(s)) throw new TypeError("The iterator method must return an object");
        const f2 = s.next;
        return { iterator: s, nextMethod: f2, done: false };
      }
      n2(Tn, "GetIterator");
      function di(e) {
        const t2 = O(e.nextMethod, e.iterator, []);
        if (!u(t2)) throw new TypeError("The iterator.next() method must return an object");
        return t2;
      }
      n2(di, "IteratorNext");
      function hi(e) {
        return !!e.done;
      }
      n2(hi, "IteratorComplete");
      function mi(e) {
        return e.value;
      }
      n2(mi, "IteratorValue");
      function bi(e) {
        return !(typeof e != "number" || Sn(e) || e < 0);
      }
      n2(bi, "IsNonNegativeNumber");
      function Cn(e) {
        const t2 = Rn(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
        return new Uint8Array(t2);
      }
      n2(Cn, "CloneAsUint8Array");
      function wr(e) {
        const t2 = e._queue.shift();
        return e._queueTotalSize -= t2.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t2.value;
      }
      n2(wr, "DequeueValue");
      function Rr(e, t2, r) {
        if (!bi(r) || r === 1 / 0) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        e._queue.push({ value: t2, size: r }), e._queueTotalSize += r;
      }
      n2(Rr, "EnqueueValueWithSize");
      function pi(e) {
        return e._queue.peek().value;
      }
      n2(pi, "PeekQueueValue");
      function Se(e) {
        e._queue = new M(), e._queueTotalSize = 0;
      }
      n2(Se, "ResetQueue");
      function Pn(e) {
        return e === DataView;
      }
      n2(Pn, "isDataViewConstructor");
      function yi(e) {
        return Pn(e.constructor);
      }
      n2(yi, "isDataView");
      function gi(e) {
        return Pn(e) ? 1 : e.BYTES_PER_ELEMENT;
      }
      n2(gi, "arrayBufferViewElementSize");
      const _ve = class _ve {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!Tr(this)) throw Ar("view");
          return this._view;
        }
        respond(t2) {
          if (!Tr(this)) throw Ar("respond");
          if (le(t2, 1, "respond"), t2 = mr(t2, "First parameter"), this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
          if (_e5(this._view.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
          Ct(this._associatedReadableByteStreamController, t2);
        }
        respondWithNewView(t2) {
          if (!Tr(this)) throw Ar("respondWithNewView");
          if (le(t2, 1, "respondWithNewView"), !ArrayBuffer.isView(t2)) throw new TypeError("You can only respond with array buffer views");
          if (this._associatedReadableByteStreamController === void 0) throw new TypeError("This BYOB request has been invalidated");
          if (_e5(t2.buffer)) throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
          Pt(this._associatedReadableByteStreamController, t2);
        }
      };
      n2(_ve, "ReadableStreamBYOBRequest");
      let ve = _ve;
      Object.defineProperties(ve.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h(ve.prototype.respond, "respond"), h(ve.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ve.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
      const _ce = class _ce {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!Ae(this)) throw nt("byobRequest");
          return vr(this);
        }
        get desiredSize() {
          if (!Ae(this)) throw nt("desiredSize");
          return Fn(this);
        }
        close() {
          if (!Ae(this)) throw nt("close");
          if (this._closeRequested) throw new TypeError("The stream has already been closed; do not close it again!");
          const t2 = this._controlledReadableByteStream._state;
          if (t2 !== "readable") throw new TypeError(`The stream (in ${t2} state) is not in the readable state and cannot be closed`);
          rt(this);
        }
        enqueue(t2) {
          if (!Ae(this)) throw nt("enqueue");
          if (le(t2, 1, "enqueue"), !ArrayBuffer.isView(t2)) throw new TypeError("chunk must be an array buffer view");
          if (t2.byteLength === 0) throw new TypeError("chunk must have non-zero byteLength");
          if (t2.buffer.byteLength === 0) throw new TypeError("chunk's buffer must have non-zero byteLength");
          if (this._closeRequested) throw new TypeError("stream is closed or draining");
          const r = this._controlledReadableByteStream._state;
          if (r !== "readable") throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
          Tt(this, t2);
        }
        error(t2 = void 0) {
          if (!Ae(this)) throw nt("error");
          Z(this, t2);
        }
        [ar](t2) {
          En(this), Se(this);
          const r = this._cancelAlgorithm(t2);
          return Rt(this), r;
        }
        [sr](t2) {
          const r = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            In(this, t2);
            return;
          }
          const s = this._autoAllocateChunkSize;
          if (s !== void 0) {
            let f2;
            try {
              f2 = new ArrayBuffer(s);
            } catch (d) {
              t2._errorSteps(d);
              return;
            }
            const c = { buffer: f2, bufferByteLength: s, byteOffset: 0, byteLength: s, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
            this._pendingPullIntos.push(c);
          }
          hn(r, t2), Be(this);
        }
        [ur]() {
          if (this._pendingPullIntos.length > 0) {
            const t2 = this._pendingPullIntos.peek();
            t2.readerType = "none", this._pendingPullIntos = new M(), this._pendingPullIntos.push(t2);
          }
        }
      };
      n2(_ce, "ReadableByteStreamController");
      let ce = _ce;
      Object.defineProperties(ce.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h(ce.prototype.close, "close"), h(ce.prototype.enqueue, "enqueue"), h(ce.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
      function Ae(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof ce;
      }
      n2(Ae, "IsReadableByteStreamController");
      function Tr(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof ve;
      }
      n2(Tr, "IsReadableStreamBYOBRequest");
      function Be(e) {
        if (!Ti(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        g(r, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Be(e)), null), (s) => (Z(e, s), null));
      }
      n2(Be, "ReadableByteStreamControllerCallPullIfNeeded");
      function En(e) {
        Pr(e), e._pendingPullIntos = new M();
      }
      n2(En, "ReadableByteStreamControllerClearPendingPullIntos");
      function Cr(e, t2) {
        let r = false;
        e._state === "closed" && (r = true);
        const s = vn(t2);
        t2.readerType === "default" ? pr(e, s, r) : Bi(e, s, r);
      }
      n2(Cr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
      function vn(e) {
        const t2 = e.bytesFilled, r = e.elementSize;
        return new e.viewConstructor(e.buffer, e.byteOffset, t2 / r);
      }
      n2(vn, "ReadableByteStreamControllerConvertPullIntoDescriptor");
      function wt(e, t2, r, s) {
        e._queue.push({ buffer: t2, byteOffset: r, byteLength: s }), e._queueTotalSize += s;
      }
      n2(wt, "ReadableByteStreamControllerEnqueueChunkToQueue");
      function An(e, t2, r, s) {
        let f2;
        try {
          f2 = Rn(t2, r, r + s);
        } catch (c) {
          throw Z(e, c), c;
        }
        wt(e, f2, 0, s);
      }
      n2(An, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
      function Bn(e, t2) {
        t2.bytesFilled > 0 && An(e, t2.buffer, t2.byteOffset, t2.bytesFilled), je(e);
      }
      n2(Bn, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
      function Wn(e, t2) {
        const r = Math.min(e._queueTotalSize, t2.byteLength - t2.bytesFilled), s = t2.bytesFilled + r;
        let f2 = r, c = false;
        const d = s % t2.elementSize, p = s - d;
        p >= t2.minimumFill && (f2 = p - t2.bytesFilled, c = true);
        const R = e._queue;
        for (; f2 > 0; ) {
          const y = R.peek(), C = Math.min(f2, y.byteLength), P = t2.byteOffset + t2.bytesFilled;
          wn(t2.buffer, P, y.buffer, y.byteOffset, C), y.byteLength === C ? R.shift() : (y.byteOffset += C, y.byteLength -= C), e._queueTotalSize -= C, kn(e, C, t2), f2 -= C;
        }
        return c;
      }
      n2(Wn, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
      function kn(e, t2, r) {
        r.bytesFilled += t2;
      }
      n2(kn, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
      function qn(e) {
        e._queueTotalSize === 0 && e._closeRequested ? (Rt(e), lt(e._controlledReadableByteStream)) : Be(e);
      }
      n2(qn, "ReadableByteStreamControllerHandleQueueDrain");
      function Pr(e) {
        e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = null, e._byobRequest = null);
      }
      n2(Pr, "ReadableByteStreamControllerInvalidateBYOBRequest");
      function Er(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const t2 = e._pendingPullIntos.peek();
          Wn(e, t2) && (je(e), Cr(e._controlledReadableByteStream, t2));
        }
      }
      n2(Er, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
      function _i(e) {
        const t2 = e._controlledReadableByteStream._reader;
        for (; t2._readRequests.length > 0; ) {
          if (e._queueTotalSize === 0) return;
          const r = t2._readRequests.shift();
          In(e, r);
        }
      }
      n2(_i, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
      function Si(e, t2, r, s) {
        const f2 = e._controlledReadableByteStream, c = t2.constructor, d = gi(c), { byteOffset: p, byteLength: R } = t2, y = r * d;
        let C;
        try {
          C = fe(t2.buffer);
        } catch (B) {
          s._errorSteps(B);
          return;
        }
        const P = { buffer: C, bufferByteLength: C.byteLength, byteOffset: p, byteLength: R, bytesFilled: 0, minimumFill: y, elementSize: d, viewConstructor: c, readerType: "byob" };
        if (e._pendingPullIntos.length > 0) {
          e._pendingPullIntos.push(P), Ln(f2, s);
          return;
        }
        if (f2._state === "closed") {
          const B = new c(P.buffer, P.byteOffset, 0);
          s._closeSteps(B);
          return;
        }
        if (e._queueTotalSize > 0) {
          if (Wn(e, P)) {
            const B = vn(P);
            qn(e), s._chunkSteps(B);
            return;
          }
          if (e._closeRequested) {
            const B = new TypeError("Insufficient bytes to fill elements in the given buffer");
            Z(e, B), s._errorSteps(B);
            return;
          }
        }
        e._pendingPullIntos.push(P), Ln(f2, s), Be(e);
      }
      n2(Si, "ReadableByteStreamControllerPullInto");
      function wi(e, t2) {
        t2.readerType === "none" && je(e);
        const r = e._controlledReadableByteStream;
        if (Br(r)) for (; Dn(r) > 0; ) {
          const s = je(e);
          Cr(r, s);
        }
      }
      n2(wi, "ReadableByteStreamControllerRespondInClosedState");
      function Ri(e, t2, r) {
        if (kn(e, t2, r), r.readerType === "none") {
          Bn(e, r), Er(e);
          return;
        }
        if (r.bytesFilled < r.minimumFill) return;
        je(e);
        const s = r.bytesFilled % r.elementSize;
        if (s > 0) {
          const f2 = r.byteOffset + r.bytesFilled;
          An(e, r.buffer, f2 - s, s);
        }
        r.bytesFilled -= s, Cr(e._controlledReadableByteStream, r), Er(e);
      }
      n2(Ri, "ReadableByteStreamControllerRespondInReadableState");
      function On(e, t2) {
        const r = e._pendingPullIntos.peek();
        Pr(e), e._controlledReadableByteStream._state === "closed" ? wi(e, r) : Ri(e, t2, r), Be(e);
      }
      n2(On, "ReadableByteStreamControllerRespondInternal");
      function je(e) {
        return e._pendingPullIntos.shift();
      }
      n2(je, "ReadableByteStreamControllerShiftPendingPullInto");
      function Ti(e) {
        const t2 = e._controlledReadableByteStream;
        return t2._state !== "readable" || e._closeRequested || !e._started ? false : !!(mn(t2) && gt(t2) > 0 || Br(t2) && Dn(t2) > 0 || Fn(e) > 0);
      }
      n2(Ti, "ReadableByteStreamControllerShouldCallPull");
      function Rt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0;
      }
      n2(Rt, "ReadableByteStreamControllerClearAlgorithms");
      function rt(e) {
        const t2 = e._controlledReadableByteStream;
        if (!(e._closeRequested || t2._state !== "readable")) {
          if (e._queueTotalSize > 0) {
            e._closeRequested = true;
            return;
          }
          if (e._pendingPullIntos.length > 0) {
            const r = e._pendingPullIntos.peek();
            if (r.bytesFilled % r.elementSize !== 0) {
              const s = new TypeError("Insufficient bytes to fill elements in the given buffer");
              throw Z(e, s), s;
            }
          }
          Rt(e), lt(t2);
        }
      }
      n2(rt, "ReadableByteStreamControllerClose");
      function Tt(e, t2) {
        const r = e._controlledReadableByteStream;
        if (e._closeRequested || r._state !== "readable") return;
        const { buffer: s, byteOffset: f2, byteLength: c } = t2;
        if (_e5(s)) throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
        const d = fe(s);
        if (e._pendingPullIntos.length > 0) {
          const p = e._pendingPullIntos.peek();
          if (_e5(p.buffer)) throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
          Pr(e), p.buffer = fe(p.buffer), p.readerType === "none" && Bn(e, p);
        }
        if (mn(r)) if (_i(e), gt(r) === 0) wt(e, d, f2, c);
        else {
          e._pendingPullIntos.length > 0 && je(e);
          const p = new Uint8Array(d, f2, c);
          pr(r, p, false);
        }
        else Br(r) ? (wt(e, d, f2, c), Er(e)) : wt(e, d, f2, c);
        Be(e);
      }
      n2(Tt, "ReadableByteStreamControllerEnqueue");
      function Z(e, t2) {
        const r = e._controlledReadableByteStream;
        r._state === "readable" && (En(e), Se(e), Rt(e), lo(r, t2));
      }
      n2(Z, "ReadableByteStreamControllerError");
      function In(e, t2) {
        const r = e._queue.shift();
        e._queueTotalSize -= r.byteLength, qn(e);
        const s = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
        t2._chunkSteps(s);
      }
      n2(In, "ReadableByteStreamControllerFillReadRequestFromQueue");
      function vr(e) {
        if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
          const t2 = e._pendingPullIntos.peek(), r = new Uint8Array(t2.buffer, t2.byteOffset + t2.bytesFilled, t2.byteLength - t2.bytesFilled), s = Object.create(ve.prototype);
          Pi(s, e, r), e._byobRequest = s;
        }
        return e._byobRequest;
      }
      n2(vr, "ReadableByteStreamControllerGetBYOBRequest");
      function Fn(e) {
        const t2 = e._controlledReadableByteStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n2(Fn, "ReadableByteStreamControllerGetDesiredSize");
      function Ct(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2 !== 0) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
        } else {
          if (t2 === 0) throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          if (r.bytesFilled + t2 > r.byteLength) throw new RangeError("bytesWritten out of range");
        }
        r.buffer = fe(r.buffer), On(e, t2);
      }
      n2(Ct, "ReadableByteStreamControllerRespond");
      function Pt(e, t2) {
        const r = e._pendingPullIntos.peek();
        if (e._controlledReadableByteStream._state === "closed") {
          if (t2.byteLength !== 0) throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
        } else if (t2.byteLength === 0) throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
        if (r.byteOffset + r.bytesFilled !== t2.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
        if (r.bufferByteLength !== t2.buffer.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
        if (r.bytesFilled + t2.byteLength > r.byteLength) throw new RangeError("The region specified by view is larger than byobRequest");
        const f2 = t2.byteLength;
        r.buffer = fe(t2.buffer), On(e, f2);
      }
      n2(Pt, "ReadableByteStreamControllerRespondWithNewView");
      function zn(e, t2, r, s, f2, c, d) {
        t2._controlledReadableByteStream = e, t2._pullAgain = false, t2._pulling = false, t2._byobRequest = null, t2._queue = t2._queueTotalSize = void 0, Se(t2), t2._closeRequested = false, t2._started = false, t2._strategyHWM = c, t2._pullAlgorithm = s, t2._cancelAlgorithm = f2, t2._autoAllocateChunkSize = d, t2._pendingPullIntos = new M(), e._readableStreamController = t2;
        const p = r();
        g(T(p), () => (t2._started = true, Be(t2), null), (R) => (Z(t2, R), null));
      }
      n2(zn, "SetUpReadableByteStreamController");
      function Ci(e, t2, r) {
        const s = Object.create(ce.prototype);
        let f2, c, d;
        t2.start !== void 0 ? f2 = n2(() => t2.start(s), "startAlgorithm") : f2 = n2(() => {
        }, "startAlgorithm"), t2.pull !== void 0 ? c = n2(() => t2.pull(s), "pullAlgorithm") : c = n2(() => T(void 0), "pullAlgorithm"), t2.cancel !== void 0 ? d = n2((R) => t2.cancel(R), "cancelAlgorithm") : d = n2(() => T(void 0), "cancelAlgorithm");
        const p = t2.autoAllocateChunkSize;
        if (p === 0) throw new TypeError("autoAllocateChunkSize must be greater than 0");
        zn(e, s, f2, c, d, r, p);
      }
      n2(Ci, "SetUpReadableByteStreamControllerFromUnderlyingSource");
      function Pi(e, t2, r) {
        e._associatedReadableByteStreamController = t2, e._view = r;
      }
      n2(Pi, "SetUpReadableStreamBYOBRequest");
      function Ar(e) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
      }
      n2(Ar, "byobRequestBrandCheckException");
      function nt(e) {
        return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
      }
      n2(nt, "byteStreamControllerBrandCheckException");
      function Ei(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.mode;
        return { mode: r === void 0 ? void 0 : vi(r, `${t2} has member 'mode' that`) };
      }
      n2(Ei, "convertReaderOptions");
      function vi(e, t2) {
        if (e = `${e}`, e !== "byob") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
        return e;
      }
      n2(vi, "convertReadableStreamReaderMode");
      function Ai(e, t2) {
        var r;
        ne(e, t2);
        const s = (r = e == null ? void 0 : e.min) !== null && r !== void 0 ? r : 1;
        return { min: mr(s, `${t2} has member 'min' that`) };
      }
      n2(Ai, "convertByobReadOptions");
      function jn(e) {
        return new we(e);
      }
      n2(jn, "AcquireReadableStreamBYOBReader");
      function Ln(e, t2) {
        e._reader._readIntoRequests.push(t2);
      }
      n2(Ln, "ReadableStreamAddReadIntoRequest");
      function Bi(e, t2, r) {
        const f2 = e._reader._readIntoRequests.shift();
        r ? f2._closeSteps(t2) : f2._chunkSteps(t2);
      }
      n2(Bi, "ReadableStreamFulfillReadIntoRequest");
      function Dn(e) {
        return e._reader._readIntoRequests.length;
      }
      n2(Dn, "ReadableStreamGetNumReadIntoRequests");
      function Br(e) {
        const t2 = e._reader;
        return !(t2 === void 0 || !We(t2));
      }
      n2(Br, "ReadableStreamHasBYOBReader");
      const _we = class _we {
        constructor(t2) {
          if (le(t2, 1, "ReadableStreamBYOBReader"), br(t2, "First parameter"), Ce(t2)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          if (!Ae(t2._readableStreamController)) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          sn(this, t2), this._readIntoRequests = new M();
        }
        get closed() {
          return We(this) ? this._closedPromise : b(Et("closed"));
        }
        cancel(t2 = void 0) {
          return We(this) ? this._ownerReadableStream === void 0 ? b(yt("cancel")) : lr(this, t2) : b(Et("cancel"));
        }
        read(t2, r = {}) {
          if (!We(this)) return b(Et("read"));
          if (!ArrayBuffer.isView(t2)) return b(new TypeError("view must be an array buffer view"));
          if (t2.byteLength === 0) return b(new TypeError("view must have non-zero byteLength"));
          if (t2.buffer.byteLength === 0) return b(new TypeError("view's buffer must have non-zero byteLength"));
          if (_e5(t2.buffer)) return b(new TypeError("view's buffer has been detached"));
          let s;
          try {
            s = Ai(r, "options");
          } catch (y) {
            return b(y);
          }
          const f2 = s.min;
          if (f2 === 0) return b(new TypeError("options.min must be greater than 0"));
          if (yi(t2)) {
            if (f2 > t2.byteLength) return b(new RangeError("options.min must be less than or equal to view's byteLength"));
          } else if (f2 > t2.length) return b(new RangeError("options.min must be less than or equal to view's length"));
          if (this._ownerReadableStream === void 0) return b(yt("read from"));
          let c, d;
          const p = A((y, C) => {
            c = y, d = C;
          });
          return $n(this, t2, f2, { _chunkSteps: n2((y) => c({ value: y, done: false }), "_chunkSteps"), _closeSteps: n2((y) => c({ value: y, done: true }), "_closeSteps"), _errorSteps: n2((y) => d(y), "_errorSteps") }), p;
        }
        releaseLock() {
          if (!We(this)) throw Et("releaseLock");
          this._ownerReadableStream !== void 0 && Wi(this);
        }
      };
      n2(_we, "ReadableStreamBYOBReader");
      let we = _we;
      Object.defineProperties(we.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h(we.prototype.cancel, "cancel"), h(we.prototype.read, "read"), h(we.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(we.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
      function We(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof we;
      }
      n2(We, "IsReadableStreamBYOBReader");
      function $n(e, t2, r, s) {
        const f2 = e._ownerReadableStream;
        f2._disturbed = true, f2._state === "errored" ? s._errorSteps(f2._storedError) : Si(f2._readableStreamController, t2, r, s);
      }
      n2($n, "ReadableStreamBYOBReaderRead");
      function Wi(e) {
        ue(e);
        const t2 = new TypeError("Reader was released");
        Mn(e, t2);
      }
      n2(Wi, "ReadableStreamBYOBReaderRelease");
      function Mn(e, t2) {
        const r = e._readIntoRequests;
        e._readIntoRequests = new M(), r.forEach((s) => {
          s._errorSteps(t2);
        });
      }
      n2(Mn, "ReadableStreamBYOBReaderErrorReadIntoRequests");
      function Et(e) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
      }
      n2(Et, "byobReaderBrandCheckException");
      function ot(e, t2) {
        const { highWaterMark: r } = e;
        if (r === void 0) return t2;
        if (Sn(r) || r < 0) throw new RangeError("Invalid highWaterMark");
        return r;
      }
      n2(ot, "ExtractHighWaterMark");
      function vt(e) {
        const { size: t2 } = e;
        return t2 || (() => 1);
      }
      n2(vt, "ExtractSizeAlgorithm");
      function At(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.highWaterMark, s = e == null ? void 0 : e.size;
        return { highWaterMark: r === void 0 ? void 0 : hr(r), size: s === void 0 ? void 0 : ki(s, `${t2} has member 'size' that`) };
      }
      n2(At, "convertQueuingStrategy");
      function ki(e, t2) {
        return G(e, t2), (r) => hr(e(r));
      }
      n2(ki, "convertQueuingStrategySize");
      function qi(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.abort, s = e == null ? void 0 : e.close, f2 = e == null ? void 0 : e.start, c = e == null ? void 0 : e.type, d = e == null ? void 0 : e.write;
        return { abort: r === void 0 ? void 0 : Oi(r, e, `${t2} has member 'abort' that`), close: s === void 0 ? void 0 : Ii(s, e, `${t2} has member 'close' that`), start: f2 === void 0 ? void 0 : Fi(f2, e, `${t2} has member 'start' that`), write: d === void 0 ? void 0 : zi(d, e, `${t2} has member 'write' that`), type: c };
      }
      n2(qi, "convertUnderlyingSink");
      function Oi(e, t2, r) {
        return G(e, r), (s) => z(e, t2, [s]);
      }
      n2(Oi, "convertUnderlyingSinkAbortCallback");
      function Ii(e, t2, r) {
        return G(e, r), () => z(e, t2, []);
      }
      n2(Ii, "convertUnderlyingSinkCloseCallback");
      function Fi(e, t2, r) {
        return G(e, r), (s) => O(e, t2, [s]);
      }
      n2(Fi, "convertUnderlyingSinkStartCallback");
      function zi(e, t2, r) {
        return G(e, r), (s, f2) => z(e, t2, [s, f2]);
      }
      n2(zi, "convertUnderlyingSinkWriteCallback");
      function Un(e, t2) {
        if (!Le(e)) throw new TypeError(`${t2} is not a WritableStream.`);
      }
      n2(Un, "assertWritableStream");
      function ji(e) {
        if (typeof e != "object" || e === null) return false;
        try {
          return typeof e.aborted == "boolean";
        } catch (e2) {
          return false;
        }
      }
      n2(ji, "isAbortSignal");
      const Li = typeof AbortController == "function";
      function Di() {
        if (Li) return new AbortController();
      }
      n2(Di, "createAbortController");
      const _Re = class _Re {
        constructor(t2 = {}, r = {}) {
          t2 === void 0 ? t2 = null : cn(t2, "First parameter");
          const s = At(r, "Second parameter"), f2 = qi(t2, "First parameter");
          if (Nn(this), f2.type !== void 0) throw new RangeError("Invalid type is specified");
          const d = vt(s), p = ot(s, 1);
          Xi(this, f2, p, d);
        }
        get locked() {
          if (!Le(this)) throw Ot("locked");
          return De(this);
        }
        abort(t2 = void 0) {
          return Le(this) ? De(this) ? b(new TypeError("Cannot abort a stream that already has a writer")) : Bt(this, t2) : b(Ot("abort"));
        }
        close() {
          return Le(this) ? De(this) ? b(new TypeError("Cannot close a stream that already has a writer")) : oe(this) ? b(new TypeError("Cannot close an already-closing stream")) : Hn(this) : b(Ot("close"));
        }
        getWriter() {
          if (!Le(this)) throw Ot("getWriter");
          return xn(this);
        }
      };
      n2(_Re, "WritableStream");
      let Re = _Re;
      Object.defineProperties(Re.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h(Re.prototype.abort, "abort"), h(Re.prototype.close, "close"), h(Re.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
      function xn(e) {
        return new de(e);
      }
      n2(xn, "AcquireWritableStreamDefaultWriter");
      function $i(e, t2, r, s, f2 = 1, c = () => 1) {
        const d = Object.create(Re.prototype);
        Nn(d);
        const p = Object.create($e.prototype);
        return Kn(d, p, e, t2, r, s, f2, c), d;
      }
      n2($i, "CreateWritableStream");
      function Nn(e) {
        e._state = "writable", e._storedError = void 0, e._writer = void 0, e._writableStreamController = void 0, e._writeRequests = new M(), e._inFlightWriteRequest = void 0, e._closeRequest = void 0, e._inFlightCloseRequest = void 0, e._pendingAbortRequest = void 0, e._backpressure = false;
      }
      n2(Nn, "InitializeWritableStream");
      function Le(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof Re;
      }
      n2(Le, "IsWritableStream");
      function De(e) {
        return e._writer !== void 0;
      }
      n2(De, "IsWritableStreamLocked");
      function Bt(e, t2) {
        var r;
        if (e._state === "closed" || e._state === "errored") return T(void 0);
        e._writableStreamController._abortReason = t2, (r = e._writableStreamController._abortController) === null || r === void 0 || r.abort(t2);
        const s = e._state;
        if (s === "closed" || s === "errored") return T(void 0);
        if (e._pendingAbortRequest !== void 0) return e._pendingAbortRequest._promise;
        let f2 = false;
        s === "erroring" && (f2 = true, t2 = void 0);
        const c = A((d, p) => {
          e._pendingAbortRequest = { _promise: void 0, _resolve: d, _reject: p, _reason: t2, _wasAlreadyErroring: f2 };
        });
        return e._pendingAbortRequest._promise = c, f2 || kr(e, t2), c;
      }
      n2(Bt, "WritableStreamAbort");
      function Hn(e) {
        const t2 = e._state;
        if (t2 === "closed" || t2 === "errored") return b(new TypeError(`The stream (in ${t2} state) is not in the writable state and cannot be closed`));
        const r = A((f2, c) => {
          const d = { _resolve: f2, _reject: c };
          e._closeRequest = d;
        }), s = e._writer;
        return s !== void 0 && e._backpressure && t2 === "writable" && Dr(s), ea(e._writableStreamController), r;
      }
      n2(Hn, "WritableStreamClose");
      function Mi(e) {
        return A((r, s) => {
          const f2 = { _resolve: r, _reject: s };
          e._writeRequests.push(f2);
        });
      }
      n2(Mi, "WritableStreamAddWriteRequest");
      function Wr(e, t2) {
        if (e._state === "writable") {
          kr(e, t2);
          return;
        }
        qr(e);
      }
      n2(Wr, "WritableStreamDealWithRejection");
      function kr(e, t2) {
        const r = e._writableStreamController;
        e._state = "erroring", e._storedError = t2;
        const s = e._writer;
        s !== void 0 && Qn(s, t2), !Vi(e) && r._started && qr(e);
      }
      n2(kr, "WritableStreamStartErroring");
      function qr(e) {
        e._state = "errored", e._writableStreamController[an]();
        const t2 = e._storedError;
        if (e._writeRequests.forEach((f2) => {
          f2._reject(t2);
        }), e._writeRequests = new M(), e._pendingAbortRequest === void 0) {
          Wt(e);
          return;
        }
        const r = e._pendingAbortRequest;
        if (e._pendingAbortRequest = void 0, r._wasAlreadyErroring) {
          r._reject(t2), Wt(e);
          return;
        }
        const s = e._writableStreamController[pt](r._reason);
        g(s, () => (r._resolve(), Wt(e), null), (f2) => (r._reject(f2), Wt(e), null));
      }
      n2(qr, "WritableStreamFinishErroring");
      function Ui(e) {
        e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0;
      }
      n2(Ui, "WritableStreamFinishInFlightWrite");
      function xi(e, t2) {
        e._inFlightWriteRequest._reject(t2), e._inFlightWriteRequest = void 0, Wr(e, t2);
      }
      n2(xi, "WritableStreamFinishInFlightWriteWithError");
      function Ni(e) {
        e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0, e._state === "erroring" && (e._storedError = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
        const r = e._writer;
        r !== void 0 && to(r);
      }
      n2(Ni, "WritableStreamFinishInFlightClose");
      function Hi(e, t2) {
        e._inFlightCloseRequest._reject(t2), e._inFlightCloseRequest = void 0, e._pendingAbortRequest !== void 0 && (e._pendingAbortRequest._reject(t2), e._pendingAbortRequest = void 0), Wr(e, t2);
      }
      n2(Hi, "WritableStreamFinishInFlightCloseWithError");
      function oe(e) {
        return !(e._closeRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n2(oe, "WritableStreamCloseQueuedOrInFlight");
      function Vi(e) {
        return !(e._inFlightWriteRequest === void 0 && e._inFlightCloseRequest === void 0);
      }
      n2(Vi, "WritableStreamHasOperationMarkedInFlight");
      function Qi(e) {
        e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0;
      }
      n2(Qi, "WritableStreamMarkCloseRequestInFlight");
      function Yi(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      n2(Yi, "WritableStreamMarkFirstWriteRequestInFlight");
      function Wt(e) {
        e._closeRequest !== void 0 && (e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
        const t2 = e._writer;
        t2 !== void 0 && jr(t2, e._storedError);
      }
      n2(Wt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
      function Or(e, t2) {
        const r = e._writer;
        r !== void 0 && t2 !== e._backpressure && (t2 ? sa(r) : Dr(r)), e._backpressure = t2;
      }
      n2(Or, "WritableStreamUpdateBackpressure");
      const _de = class _de {
        constructor(t2) {
          if (le(t2, 1, "WritableStreamDefaultWriter"), Un(t2, "First parameter"), De(t2)) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          this._ownerWritableStream = t2, t2._writer = this;
          const r = t2._state;
          if (r === "writable") !oe(t2) && t2._backpressure ? Ft(this) : ro(this), It(this);
          else if (r === "erroring") Lr(this, t2._storedError), It(this);
          else if (r === "closed") ro(this), ia(this);
          else {
            const s = t2._storedError;
            Lr(this, s), eo(this, s);
          }
        }
        get closed() {
          return ke(this) ? this._closedPromise : b(qe("closed"));
        }
        get desiredSize() {
          if (!ke(this)) throw qe("desiredSize");
          if (this._ownerWritableStream === void 0) throw at("desiredSize");
          return Ji(this);
        }
        get ready() {
          return ke(this) ? this._readyPromise : b(qe("ready"));
        }
        abort(t2 = void 0) {
          return ke(this) ? this._ownerWritableStream === void 0 ? b(at("abort")) : Gi(this, t2) : b(qe("abort"));
        }
        close() {
          if (!ke(this)) return b(qe("close"));
          const t2 = this._ownerWritableStream;
          return t2 === void 0 ? b(at("close")) : oe(t2) ? b(new TypeError("Cannot close an already-closing stream")) : Vn(this);
        }
        releaseLock() {
          if (!ke(this)) throw qe("releaseLock");
          this._ownerWritableStream !== void 0 && Yn(this);
        }
        write(t2 = void 0) {
          return ke(this) ? this._ownerWritableStream === void 0 ? b(at("write to")) : Gn(this, t2) : b(qe("write"));
        }
      };
      n2(_de, "WritableStreamDefaultWriter");
      let de = _de;
      Object.defineProperties(de.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h(de.prototype.abort, "abort"), h(de.prototype.close, "close"), h(de.prototype.releaseLock, "releaseLock"), h(de.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
      function ke(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof de;
      }
      n2(ke, "IsWritableStreamDefaultWriter");
      function Gi(e, t2) {
        const r = e._ownerWritableStream;
        return Bt(r, t2);
      }
      n2(Gi, "WritableStreamDefaultWriterAbort");
      function Vn(e) {
        const t2 = e._ownerWritableStream;
        return Hn(t2);
      }
      n2(Vn, "WritableStreamDefaultWriterClose");
      function Zi(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return oe(t2) || r === "closed" ? T(void 0) : r === "errored" ? b(t2._storedError) : Vn(e);
      }
      n2(Zi, "WritableStreamDefaultWriterCloseWithErrorPropagation");
      function Ki(e, t2) {
        e._closedPromiseState === "pending" ? jr(e, t2) : aa(e, t2);
      }
      n2(Ki, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
      function Qn(e, t2) {
        e._readyPromiseState === "pending" ? no(e, t2) : ua(e, t2);
      }
      n2(Qn, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
      function Ji(e) {
        const t2 = e._ownerWritableStream, r = t2._state;
        return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : Jn(t2._writableStreamController);
      }
      n2(Ji, "WritableStreamDefaultWriterGetDesiredSize");
      function Yn(e) {
        const t2 = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
        Qn(e, r), Ki(e, r), t2._writer = void 0, e._ownerWritableStream = void 0;
      }
      n2(Yn, "WritableStreamDefaultWriterRelease");
      function Gn(e, t2) {
        const r = e._ownerWritableStream, s = r._writableStreamController, f2 = ta(s, t2);
        if (r !== e._ownerWritableStream) return b(at("write to"));
        const c = r._state;
        if (c === "errored") return b(r._storedError);
        if (oe(r) || c === "closed") return b(new TypeError("The stream is closing or closed and cannot be written to"));
        if (c === "erroring") return b(r._storedError);
        const d = Mi(r);
        return ra(s, t2, f2), d;
      }
      n2(Gn, "WritableStreamDefaultWriterWrite");
      const Zn = {};
      const _$e = class _$e {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!Ir(this)) throw zr("abortReason");
          return this._abortReason;
        }
        get signal() {
          if (!Ir(this)) throw zr("signal");
          if (this._abortController === void 0) throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          return this._abortController.signal;
        }
        error(t2 = void 0) {
          if (!Ir(this)) throw zr("error");
          this._controlledWritableStream._state === "writable" && Xn(this, t2);
        }
        [pt](t2) {
          const r = this._abortAlgorithm(t2);
          return kt(this), r;
        }
        [an]() {
          Se(this);
        }
      };
      n2(_$e, "WritableStreamDefaultController");
      let $e = _$e;
      Object.defineProperties($e.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty($e.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
      function Ir(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof $e;
      }
      n2(Ir, "IsWritableStreamDefaultController");
      function Kn(e, t2, r, s, f2, c, d, p) {
        t2._controlledWritableStream = e, e._writableStreamController = t2, t2._queue = void 0, t2._queueTotalSize = void 0, Se(t2), t2._abortReason = void 0, t2._abortController = Di(), t2._started = false, t2._strategySizeAlgorithm = p, t2._strategyHWM = d, t2._writeAlgorithm = s, t2._closeAlgorithm = f2, t2._abortAlgorithm = c;
        const R = Fr(t2);
        Or(e, R);
        const y = r(), C = T(y);
        g(C, () => (t2._started = true, qt(t2), null), (P) => (t2._started = true, Wr(e, P), null));
      }
      n2(Kn, "SetUpWritableStreamDefaultController");
      function Xi(e, t2, r, s) {
        const f2 = Object.create($e.prototype);
        let c, d, p, R;
        t2.start !== void 0 ? c = n2(() => t2.start(f2), "startAlgorithm") : c = n2(() => {
        }, "startAlgorithm"), t2.write !== void 0 ? d = n2((y) => t2.write(y, f2), "writeAlgorithm") : d = n2(() => T(void 0), "writeAlgorithm"), t2.close !== void 0 ? p = n2(() => t2.close(), "closeAlgorithm") : p = n2(() => T(void 0), "closeAlgorithm"), t2.abort !== void 0 ? R = n2((y) => t2.abort(y), "abortAlgorithm") : R = n2(() => T(void 0), "abortAlgorithm"), Kn(e, f2, c, d, p, R, r, s);
      }
      n2(Xi, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
      function kt(e) {
        e._writeAlgorithm = void 0, e._closeAlgorithm = void 0, e._abortAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n2(kt, "WritableStreamDefaultControllerClearAlgorithms");
      function ea(e) {
        Rr(e, Zn, 0), qt(e);
      }
      n2(ea, "WritableStreamDefaultControllerClose");
      function ta(e, t2) {
        try {
          return e._strategySizeAlgorithm(t2);
        } catch (r) {
          return it(e, r), 1;
        }
      }
      n2(ta, "WritableStreamDefaultControllerGetChunkSize");
      function Jn(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      n2(Jn, "WritableStreamDefaultControllerGetDesiredSize");
      function ra(e, t2, r) {
        try {
          Rr(e, t2, r);
        } catch (f2) {
          it(e, f2);
          return;
        }
        const s = e._controlledWritableStream;
        if (!oe(s) && s._state === "writable") {
          const f2 = Fr(e);
          Or(s, f2);
        }
        qt(e);
      }
      n2(ra, "WritableStreamDefaultControllerWrite");
      function qt(e) {
        const t2 = e._controlledWritableStream;
        if (!e._started || t2._inFlightWriteRequest !== void 0) return;
        if (t2._state === "erroring") {
          qr(t2);
          return;
        }
        if (e._queue.length === 0) return;
        const s = pi(e);
        s === Zn ? na(e) : oa(e, s);
      }
      n2(qt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
      function it(e, t2) {
        e._controlledWritableStream._state === "writable" && Xn(e, t2);
      }
      n2(it, "WritableStreamDefaultControllerErrorIfNeeded");
      function na(e) {
        const t2 = e._controlledWritableStream;
        Qi(t2), wr(e);
        const r = e._closeAlgorithm();
        kt(e), g(r, () => (Ni(t2), null), (s) => (Hi(t2, s), null));
      }
      n2(na, "WritableStreamDefaultControllerProcessClose");
      function oa(e, t2) {
        const r = e._controlledWritableStream;
        Yi(r);
        const s = e._writeAlgorithm(t2);
        g(s, () => {
          Ui(r);
          const f2 = r._state;
          if (wr(e), !oe(r) && f2 === "writable") {
            const c = Fr(e);
            Or(r, c);
          }
          return qt(e), null;
        }, (f2) => (r._state === "writable" && kt(e), xi(r, f2), null));
      }
      n2(oa, "WritableStreamDefaultControllerProcessWrite");
      function Fr(e) {
        return Jn(e) <= 0;
      }
      n2(Fr, "WritableStreamDefaultControllerGetBackpressure");
      function Xn(e, t2) {
        const r = e._controlledWritableStream;
        kt(e), kr(r, t2);
      }
      n2(Xn, "WritableStreamDefaultControllerError");
      function Ot(e) {
        return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
      }
      n2(Ot, "streamBrandCheckException$2");
      function zr(e) {
        return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
      }
      n2(zr, "defaultControllerBrandCheckException$2");
      function qe(e) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
      }
      n2(qe, "defaultWriterBrandCheckException");
      function at(e) {
        return new TypeError("Cannot " + e + " a stream using a released writer");
      }
      n2(at, "defaultWriterLockException");
      function It(e) {
        e._closedPromise = A((t2, r) => {
          e._closedPromise_resolve = t2, e._closedPromise_reject = r, e._closedPromiseState = "pending";
        });
      }
      n2(It, "defaultWriterClosedPromiseInitialize");
      function eo(e, t2) {
        It(e), jr(e, t2);
      }
      n2(eo, "defaultWriterClosedPromiseInitializeAsRejected");
      function ia(e) {
        It(e), to(e);
      }
      n2(ia, "defaultWriterClosedPromiseInitializeAsResolved");
      function jr(e, t2) {
        e._closedPromise_reject !== void 0 && (Q(e._closedPromise), e._closedPromise_reject(t2), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected");
      }
      n2(jr, "defaultWriterClosedPromiseReject");
      function aa(e, t2) {
        eo(e, t2);
      }
      n2(aa, "defaultWriterClosedPromiseResetToRejected");
      function to(e) {
        e._closedPromise_resolve !== void 0 && (e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved");
      }
      n2(to, "defaultWriterClosedPromiseResolve");
      function Ft(e) {
        e._readyPromise = A((t2, r) => {
          e._readyPromise_resolve = t2, e._readyPromise_reject = r;
        }), e._readyPromiseState = "pending";
      }
      n2(Ft, "defaultWriterReadyPromiseInitialize");
      function Lr(e, t2) {
        Ft(e), no(e, t2);
      }
      n2(Lr, "defaultWriterReadyPromiseInitializeAsRejected");
      function ro(e) {
        Ft(e), Dr(e);
      }
      n2(ro, "defaultWriterReadyPromiseInitializeAsResolved");
      function no(e, t2) {
        e._readyPromise_reject !== void 0 && (Q(e._readyPromise), e._readyPromise_reject(t2), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected");
      }
      n2(no, "defaultWriterReadyPromiseReject");
      function sa(e) {
        Ft(e);
      }
      n2(sa, "defaultWriterReadyPromiseReset");
      function ua(e, t2) {
        Lr(e, t2);
      }
      n2(ua, "defaultWriterReadyPromiseResetToRejected");
      function Dr(e) {
        e._readyPromise_resolve !== void 0 && (e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled");
      }
      n2(Dr, "defaultWriterReadyPromiseResolve");
      function la() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof n < "u") return n;
      }
      n2(la, "getGlobals");
      const $r = la();
      function fa(e) {
        if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException") return false;
        try {
          return new e(), true;
        } catch (e2) {
          return false;
        }
      }
      n2(fa, "isDOMExceptionConstructor");
      function ca() {
        const e = $r == null ? void 0 : $r.DOMException;
        return fa(e) ? e : void 0;
      }
      n2(ca, "getFromGlobal");
      function da() {
        const e = n2(function(r, s) {
          this.message = r || "", this.name = s || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }, "DOMException");
        return h(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
      }
      n2(da, "createPolyfill");
      const ha = ca() || da();
      function oo(e, t2, r, s, f2, c) {
        const d = ze(e), p = xn(t2);
        e._disturbed = true;
        let R = false, y = T(void 0);
        return A((C, P) => {
          let B;
          if (c !== void 0) {
            if (B = n2(() => {
              const _ = c.reason !== void 0 ? c.reason : new ha("Aborted", "AbortError"), v = [];
              s || v.push(() => t2._state === "writable" ? Bt(t2, _) : T(void 0)), f2 || v.push(() => e._state === "readable" ? X(e, _) : T(void 0)), x(() => Promise.all(v.map((W) => W())), true, _);
            }, "abortAlgorithm"), c.aborted) {
              B();
              return;
            }
            c.addEventListener("abort", B);
          }
          function ee() {
            return A((_, v) => {
              function W(Y) {
                Y ? _() : q(Ne(), W, v);
              }
              n2(W, "next"), W(false);
            });
          }
          n2(ee, "pipeLoop");
          function Ne() {
            return R ? T(true) : q(p._readyPromise, () => A((_, v) => {
              et(d, { _chunkSteps: n2((W) => {
                y = q(Gn(p, W), void 0, l), _(false);
              }, "_chunkSteps"), _closeSteps: n2(() => _(true), "_closeSteps"), _errorSteps: v });
            }));
          }
          if (n2(Ne, "pipeStep"), me(e, d._closedPromise, (_) => (s ? K(true, _) : x(() => Bt(t2, _), true, _), null)), me(t2, p._closedPromise, (_) => (f2 ? K(true, _) : x(() => X(e, _), true, _), null)), U(e, d._closedPromise, () => (r ? K() : x(() => Zi(p)), null)), oe(t2) || t2._state === "closed") {
            const _ = new TypeError("the destination writable stream closed before all data could be piped to it");
            f2 ? K(true, _) : x(() => X(e, _), true, _);
          }
          Q(ee());
          function Ee() {
            const _ = y;
            return q(y, () => _ !== y ? Ee() : void 0);
          }
          n2(Ee, "waitForWritesToFinish");
          function me(_, v, W) {
            _._state === "errored" ? W(_._storedError) : I(v, W);
          }
          n2(me, "isOrBecomesErrored");
          function U(_, v, W) {
            _._state === "closed" ? W() : V(v, W);
          }
          n2(U, "isOrBecomesClosed");
          function x(_, v, W) {
            if (R) return;
            R = true, t2._state === "writable" && !oe(t2) ? V(Ee(), Y) : Y();
            function Y() {
              return g(_(), () => be(v, W), (He) => be(true, He)), null;
            }
            n2(Y, "doTheRest");
          }
          n2(x, "shutdownWithAction");
          function K(_, v) {
            R || (R = true, t2._state === "writable" && !oe(t2) ? V(Ee(), () => be(_, v)) : be(_, v));
          }
          n2(K, "shutdown");
          function be(_, v) {
            return Yn(p), ue(d), c !== void 0 && c.removeEventListener("abort", B), _ ? P(v) : C(void 0), null;
          }
          n2(be, "finalize");
        });
      }
      n2(oo, "ReadableStreamPipeTo");
      const _he = class _he {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!zt(this)) throw Lt("desiredSize");
          return Mr(this);
        }
        close() {
          if (!zt(this)) throw Lt("close");
          if (!Ue(this)) throw new TypeError("The stream is not in a state that permits close");
          Oe(this);
        }
        enqueue(t2 = void 0) {
          if (!zt(this)) throw Lt("enqueue");
          if (!Ue(this)) throw new TypeError("The stream is not in a state that permits enqueue");
          return Me(this, t2);
        }
        error(t2 = void 0) {
          if (!zt(this)) throw Lt("error");
          J(this, t2);
        }
        [ar](t2) {
          Se(this);
          const r = this._cancelAlgorithm(t2);
          return jt(this), r;
        }
        [sr](t2) {
          const r = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const s = wr(this);
            this._closeRequested && this._queue.length === 0 ? (jt(this), lt(r)) : st(this), t2._chunkSteps(s);
          } else hn(r, t2), st(this);
        }
        [ur]() {
        }
      };
      n2(_he, "ReadableStreamDefaultController");
      let he = _he;
      Object.defineProperties(he.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h(he.prototype.close, "close"), h(he.prototype.enqueue, "enqueue"), h(he.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(he.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
      function zt(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof he;
      }
      n2(zt, "IsReadableStreamDefaultController");
      function st(e) {
        if (!io(e)) return;
        if (e._pulling) {
          e._pullAgain = true;
          return;
        }
        e._pulling = true;
        const r = e._pullAlgorithm();
        g(r, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, st(e)), null), (s) => (J(e, s), null));
      }
      n2(st, "ReadableStreamDefaultControllerCallPullIfNeeded");
      function io(e) {
        const t2 = e._controlledReadableStream;
        return !Ue(e) || !e._started ? false : !!(Ce(t2) && gt(t2) > 0 || Mr(e) > 0);
      }
      n2(io, "ReadableStreamDefaultControllerShouldCallPull");
      function jt(e) {
        e._pullAlgorithm = void 0, e._cancelAlgorithm = void 0, e._strategySizeAlgorithm = void 0;
      }
      n2(jt, "ReadableStreamDefaultControllerClearAlgorithms");
      function Oe(e) {
        if (!Ue(e)) return;
        const t2 = e._controlledReadableStream;
        e._closeRequested = true, e._queue.length === 0 && (jt(e), lt(t2));
      }
      n2(Oe, "ReadableStreamDefaultControllerClose");
      function Me(e, t2) {
        if (!Ue(e)) return;
        const r = e._controlledReadableStream;
        if (Ce(r) && gt(r) > 0) pr(r, t2, false);
        else {
          let s;
          try {
            s = e._strategySizeAlgorithm(t2);
          } catch (f2) {
            throw J(e, f2), f2;
          }
          try {
            Rr(e, t2, s);
          } catch (f2) {
            throw J(e, f2), f2;
          }
        }
        st(e);
      }
      n2(Me, "ReadableStreamDefaultControllerEnqueue");
      function J(e, t2) {
        const r = e._controlledReadableStream;
        r._state === "readable" && (Se(e), jt(e), lo(r, t2));
      }
      n2(J, "ReadableStreamDefaultControllerError");
      function Mr(e) {
        const t2 = e._controlledReadableStream._state;
        return t2 === "errored" ? null : t2 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
      }
      n2(Mr, "ReadableStreamDefaultControllerGetDesiredSize");
      function ma(e) {
        return !io(e);
      }
      n2(ma, "ReadableStreamDefaultControllerHasBackpressure");
      function Ue(e) {
        const t2 = e._controlledReadableStream._state;
        return !e._closeRequested && t2 === "readable";
      }
      n2(Ue, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
      function ao(e, t2, r, s, f2, c, d) {
        t2._controlledReadableStream = e, t2._queue = void 0, t2._queueTotalSize = void 0, Se(t2), t2._started = false, t2._closeRequested = false, t2._pullAgain = false, t2._pulling = false, t2._strategySizeAlgorithm = d, t2._strategyHWM = c, t2._pullAlgorithm = s, t2._cancelAlgorithm = f2, e._readableStreamController = t2;
        const p = r();
        g(T(p), () => (t2._started = true, st(t2), null), (R) => (J(t2, R), null));
      }
      n2(ao, "SetUpReadableStreamDefaultController");
      function ba(e, t2, r, s) {
        const f2 = Object.create(he.prototype);
        let c, d, p;
        t2.start !== void 0 ? c = n2(() => t2.start(f2), "startAlgorithm") : c = n2(() => {
        }, "startAlgorithm"), t2.pull !== void 0 ? d = n2(() => t2.pull(f2), "pullAlgorithm") : d = n2(() => T(void 0), "pullAlgorithm"), t2.cancel !== void 0 ? p = n2((R) => t2.cancel(R), "cancelAlgorithm") : p = n2(() => T(void 0), "cancelAlgorithm"), ao(e, f2, c, d, p, r, s);
      }
      n2(ba, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
      function Lt(e) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
      }
      n2(Lt, "defaultControllerBrandCheckException$1");
      function pa(e, t2) {
        return Ae(e._readableStreamController) ? ga(e) : ya(e);
      }
      n2(pa, "ReadableStreamTee");
      function ya(e, t2) {
        const r = ze(e);
        let s = false, f2 = false, c = false, d = false, p, R, y, C, P;
        const B = A((U) => {
          P = U;
        });
        function ee() {
          return s ? (f2 = true, T(void 0)) : (s = true, et(r, { _chunkSteps: n2((x) => {
            se(() => {
              f2 = false;
              const K = x, be = x;
              c || Me(y._readableStreamController, K), d || Me(C._readableStreamController, be), s = false, f2 && ee();
            });
          }, "_chunkSteps"), _closeSteps: n2(() => {
            s = false, c || Oe(y._readableStreamController), d || Oe(C._readableStreamController), (!c || !d) && P(void 0);
          }, "_closeSteps"), _errorSteps: n2(() => {
            s = false;
          }, "_errorSteps") }), T(void 0));
        }
        n2(ee, "pullAlgorithm");
        function Ne(U) {
          if (c = true, p = U, d) {
            const x = tt([p, R]), K = X(e, x);
            P(K);
          }
          return B;
        }
        n2(Ne, "cancel1Algorithm");
        function Ee(U) {
          if (d = true, R = U, c) {
            const x = tt([p, R]), K = X(e, x);
            P(K);
          }
          return B;
        }
        n2(Ee, "cancel2Algorithm");
        function me() {
        }
        return n2(me, "startAlgorithm"), y = ut(me, ee, Ne), C = ut(me, ee, Ee), I(r._closedPromise, (U) => (J(y._readableStreamController, U), J(C._readableStreamController, U), (!c || !d) && P(void 0), null)), [y, C];
      }
      n2(ya, "ReadableStreamDefaultTee");
      function ga(e) {
        let t2 = ze(e), r = false, s = false, f2 = false, c = false, d = false, p, R, y, C, P;
        const B = A((_) => {
          P = _;
        });
        function ee(_) {
          I(_._closedPromise, (v) => (_ !== t2 || (Z(y._readableStreamController, v), Z(C._readableStreamController, v), (!c || !d) && P(void 0)), null));
        }
        n2(ee, "forwardReaderError");
        function Ne() {
          We(t2) && (ue(t2), t2 = ze(e), ee(t2)), et(t2, { _chunkSteps: n2((v) => {
            se(() => {
              s = false, f2 = false;
              const W = v;
              let Y = v;
              if (!c && !d) try {
                Y = Cn(v);
              } catch (He) {
                Z(y._readableStreamController, He), Z(C._readableStreamController, He), P(X(e, He));
                return;
              }
              c || Tt(y._readableStreamController, W), d || Tt(C._readableStreamController, Y), r = false, s ? me() : f2 && U();
            });
          }, "_chunkSteps"), _closeSteps: n2(() => {
            r = false, c || rt(y._readableStreamController), d || rt(C._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Ct(y._readableStreamController, 0), C._readableStreamController._pendingPullIntos.length > 0 && Ct(C._readableStreamController, 0), (!c || !d) && P(void 0);
          }, "_closeSteps"), _errorSteps: n2(() => {
            r = false;
          }, "_errorSteps") });
        }
        n2(Ne, "pullWithDefaultReader");
        function Ee(_, v) {
          ge(t2) && (ue(t2), t2 = jn(e), ee(t2));
          const W = v ? C : y, Y = v ? y : C;
          $n(t2, _, 1, { _chunkSteps: n2((Ve) => {
            se(() => {
              s = false, f2 = false;
              const Qe = v ? d : c;
              if (v ? c : d) Qe || Pt(W._readableStreamController, Ve);
              else {
                let To;
                try {
                  To = Cn(Ve);
                } catch (Vr) {
                  Z(W._readableStreamController, Vr), Z(Y._readableStreamController, Vr), P(X(e, Vr));
                  return;
                }
                Qe || Pt(W._readableStreamController, Ve), Tt(Y._readableStreamController, To);
              }
              r = false, s ? me() : f2 && U();
            });
          }, "_chunkSteps"), _closeSteps: n2((Ve) => {
            r = false;
            const Qe = v ? d : c, Vt = v ? c : d;
            Qe || rt(W._readableStreamController), Vt || rt(Y._readableStreamController), Ve !== void 0 && (Qe || Pt(W._readableStreamController, Ve), !Vt && Y._readableStreamController._pendingPullIntos.length > 0 && Ct(Y._readableStreamController, 0)), (!Qe || !Vt) && P(void 0);
          }, "_closeSteps"), _errorSteps: n2(() => {
            r = false;
          }, "_errorSteps") });
        }
        n2(Ee, "pullWithBYOBReader");
        function me() {
          if (r) return s = true, T(void 0);
          r = true;
          const _ = vr(y._readableStreamController);
          return _ === null ? Ne() : Ee(_._view, false), T(void 0);
        }
        n2(me, "pull1Algorithm");
        function U() {
          if (r) return f2 = true, T(void 0);
          r = true;
          const _ = vr(C._readableStreamController);
          return _ === null ? Ne() : Ee(_._view, true), T(void 0);
        }
        n2(U, "pull2Algorithm");
        function x(_) {
          if (c = true, p = _, d) {
            const v = tt([p, R]), W = X(e, v);
            P(W);
          }
          return B;
        }
        n2(x, "cancel1Algorithm");
        function K(_) {
          if (d = true, R = _, c) {
            const v = tt([p, R]), W = X(e, v);
            P(W);
          }
          return B;
        }
        n2(K, "cancel2Algorithm");
        function be() {
        }
        return n2(be, "startAlgorithm"), y = uo(be, me, x), C = uo(be, U, K), ee(t2), [y, C];
      }
      n2(ga, "ReadableByteStreamTee");
      function _a5(e) {
        return u(e) && typeof e.getReader < "u";
      }
      n2(_a5, "isReadableStreamLike");
      function Sa(e) {
        return _a5(e) ? Ra(e.getReader()) : wa(e);
      }
      n2(Sa, "ReadableStreamFrom");
      function wa(e) {
        let t2;
        const r = Tn(e, "async"), s = l;
        function f2() {
          let d;
          try {
            d = di(r);
          } catch (R) {
            return b(R);
          }
          const p = T(d);
          return F(p, (R) => {
            if (!u(R)) throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            if (hi(R)) Oe(t2._readableStreamController);
            else {
              const C = mi(R);
              Me(t2._readableStreamController, C);
            }
          });
        }
        n2(f2, "pullAlgorithm");
        function c(d) {
          const p = r.iterator;
          let R;
          try {
            R = St(p, "return");
          } catch (P) {
            return b(P);
          }
          if (R === void 0) return T(void 0);
          let y;
          try {
            y = O(R, p, [d]);
          } catch (P) {
            return b(P);
          }
          const C = T(y);
          return F(C, (P) => {
            if (!u(P)) throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
          });
        }
        return n2(c, "cancelAlgorithm"), t2 = ut(s, f2, c, 0), t2;
      }
      n2(wa, "ReadableStreamFromIterable");
      function Ra(e) {
        let t2;
        const r = l;
        function s() {
          let c;
          try {
            c = e.read();
          } catch (d) {
            return b(d);
          }
          return F(c, (d) => {
            if (!u(d)) throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
            if (d.done) Oe(t2._readableStreamController);
            else {
              const p = d.value;
              Me(t2._readableStreamController, p);
            }
          });
        }
        n2(s, "pullAlgorithm");
        function f2(c) {
          try {
            return T(e.cancel(c));
          } catch (d) {
            return b(d);
          }
        }
        return n2(f2, "cancelAlgorithm"), t2 = ut(r, s, f2, 0), t2;
      }
      n2(Ra, "ReadableStreamFromDefaultReader");
      function Ta(e, t2) {
        ne(e, t2);
        const r = e, s = r == null ? void 0 : r.autoAllocateChunkSize, f2 = r == null ? void 0 : r.cancel, c = r == null ? void 0 : r.pull, d = r == null ? void 0 : r.start, p = r == null ? void 0 : r.type;
        return { autoAllocateChunkSize: s === void 0 ? void 0 : mr(s, `${t2} has member 'autoAllocateChunkSize' that`), cancel: f2 === void 0 ? void 0 : Ca(f2, r, `${t2} has member 'cancel' that`), pull: c === void 0 ? void 0 : Pa(c, r, `${t2} has member 'pull' that`), start: d === void 0 ? void 0 : Ea(d, r, `${t2} has member 'start' that`), type: p === void 0 ? void 0 : va(p, `${t2} has member 'type' that`) };
      }
      n2(Ta, "convertUnderlyingDefaultOrByteSource");
      function Ca(e, t2, r) {
        return G(e, r), (s) => z(e, t2, [s]);
      }
      n2(Ca, "convertUnderlyingSourceCancelCallback");
      function Pa(e, t2, r) {
        return G(e, r), (s) => z(e, t2, [s]);
      }
      n2(Pa, "convertUnderlyingSourcePullCallback");
      function Ea(e, t2, r) {
        return G(e, r), (s) => O(e, t2, [s]);
      }
      n2(Ea, "convertUnderlyingSourceStartCallback");
      function va(e, t2) {
        if (e = `${e}`, e !== "bytes") throw new TypeError(`${t2} '${e}' is not a valid enumeration value for ReadableStreamType`);
        return e;
      }
      n2(va, "convertReadableStreamType");
      function Aa(e, t2) {
        return ne(e, t2), { preventCancel: !!(e == null ? void 0 : e.preventCancel) };
      }
      n2(Aa, "convertIteratorOptions");
      function so(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.preventAbort, s = e == null ? void 0 : e.preventCancel, f2 = e == null ? void 0 : e.preventClose, c = e == null ? void 0 : e.signal;
        return c !== void 0 && Ba(c, `${t2} has member 'signal' that`), { preventAbort: !!r, preventCancel: !!s, preventClose: !!f2, signal: c };
      }
      n2(so, "convertPipeOptions");
      function Ba(e, t2) {
        if (!ji(e)) throw new TypeError(`${t2} is not an AbortSignal.`);
      }
      n2(Ba, "assertAbortSignal");
      function Wa(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.readable;
        dr(r, "readable", "ReadableWritablePair"), br(r, `${t2} has member 'readable' that`);
        const s = e == null ? void 0 : e.writable;
        return dr(s, "writable", "ReadableWritablePair"), Un(s, `${t2} has member 'writable' that`), { readable: r, writable: s };
      }
      n2(Wa, "convertReadableWritablePair");
      const _L = class _L {
        constructor(t2 = {}, r = {}) {
          t2 === void 0 ? t2 = null : cn(t2, "First parameter");
          const s = At(r, "Second parameter"), f2 = Ta(t2, "First parameter");
          if (Ur(this), f2.type === "bytes") {
            if (s.size !== void 0) throw new RangeError("The strategy for a byte stream cannot have a size function");
            const c = ot(s, 0);
            Ci(this, f2, c);
          } else {
            const c = vt(s), d = ot(s, 1);
            ba(this, f2, d, c);
          }
        }
        get locked() {
          if (!Te(this)) throw Ie("locked");
          return Ce(this);
        }
        cancel(t2 = void 0) {
          return Te(this) ? Ce(this) ? b(new TypeError("Cannot cancel a stream that already has a reader")) : X(this, t2) : b(Ie("cancel"));
        }
        getReader(t2 = void 0) {
          if (!Te(this)) throw Ie("getReader");
          return Ei(t2, "First parameter").mode === void 0 ? ze(this) : jn(this);
        }
        pipeThrough(t2, r = {}) {
          if (!Te(this)) throw Ie("pipeThrough");
          le(t2, 1, "pipeThrough");
          const s = Wa(t2, "First parameter"), f2 = so(r, "Second parameter");
          if (Ce(this)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          if (De(s.writable)) throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          const c = oo(this, s.writable, f2.preventClose, f2.preventAbort, f2.preventCancel, f2.signal);
          return Q(c), s.readable;
        }
        pipeTo(t2, r = {}) {
          if (!Te(this)) return b(Ie("pipeTo"));
          if (t2 === void 0) return b("Parameter 1 is required in 'pipeTo'.");
          if (!Le(t2)) return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
          let s;
          try {
            s = so(r, "Second parameter");
          } catch (f2) {
            return b(f2);
          }
          return Ce(this) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : De(t2) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : oo(this, t2, s.preventClose, s.preventAbort, s.preventCancel, s.signal);
        }
        tee() {
          if (!Te(this)) throw Ie("tee");
          const t2 = pa(this);
          return tt(t2);
        }
        values(t2 = void 0) {
          if (!Te(this)) throw Ie("values");
          const r = Aa(t2, "First parameter");
          return fi(this, r.preventCancel);
        }
        [Sr](t2) {
          return this.values(t2);
        }
        static from(t2) {
          return Sa(t2);
        }
      };
      n2(_L, "ReadableStream");
      let L = _L;
      Object.defineProperties(L, { from: { enumerable: true } }), Object.defineProperties(L.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h(L.from, "from"), h(L.prototype.cancel, "cancel"), h(L.prototype.getReader, "getReader"), h(L.prototype.pipeThrough, "pipeThrough"), h(L.prototype.pipeTo, "pipeTo"), h(L.prototype.tee, "tee"), h(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(L.prototype, Sr, { value: L.prototype.values, writable: true, configurable: true });
      function ut(e, t2, r, s = 1, f2 = () => 1) {
        const c = Object.create(L.prototype);
        Ur(c);
        const d = Object.create(he.prototype);
        return ao(c, d, e, t2, r, s, f2), c;
      }
      n2(ut, "CreateReadableStream");
      function uo(e, t2, r) {
        const s = Object.create(L.prototype);
        Ur(s);
        const f2 = Object.create(ce.prototype);
        return zn(s, f2, e, t2, r, 0, void 0), s;
      }
      n2(uo, "CreateReadableByteStream");
      function Ur(e) {
        e._state = "readable", e._reader = void 0, e._storedError = void 0, e._disturbed = false;
      }
      n2(Ur, "InitializeReadableStream");
      function Te(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof L;
      }
      n2(Te, "IsReadableStream");
      function Ce(e) {
        return e._reader !== void 0;
      }
      n2(Ce, "IsReadableStreamLocked");
      function X(e, t2) {
        if (e._disturbed = true, e._state === "closed") return T(void 0);
        if (e._state === "errored") return b(e._storedError);
        lt(e);
        const r = e._reader;
        if (r !== void 0 && We(r)) {
          const f2 = r._readIntoRequests;
          r._readIntoRequests = new M(), f2.forEach((c) => {
            c._closeSteps(void 0);
          });
        }
        const s = e._readableStreamController[ar](t2);
        return F(s, l);
      }
      n2(X, "ReadableStreamCancel");
      function lt(e) {
        e._state = "closed";
        const t2 = e._reader;
        if (t2 !== void 0 && (ln(t2), ge(t2))) {
          const r = t2._readRequests;
          t2._readRequests = new M(), r.forEach((s) => {
            s._closeSteps();
          });
        }
      }
      n2(lt, "ReadableStreamClose");
      function lo(e, t2) {
        e._state = "errored", e._storedError = t2;
        const r = e._reader;
        r !== void 0 && (cr(r, t2), ge(r) ? bn(r, t2) : Mn(r, t2));
      }
      n2(lo, "ReadableStreamError");
      function Ie(e) {
        return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
      }
      n2(Ie, "streamBrandCheckException$1");
      function fo(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.highWaterMark;
        return dr(r, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: hr(r) };
      }
      n2(fo, "convertQueuingStrategyInit");
      const co = n2((e) => e.byteLength, "byteLengthSizeFunction");
      h(co, "size");
      const _Dt = class _Dt {
        constructor(t2) {
          le(t2, 1, "ByteLengthQueuingStrategy"), t2 = fo(t2, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!mo(this)) throw ho("highWaterMark");
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!mo(this)) throw ho("size");
          return co;
        }
      };
      n2(_Dt, "ByteLengthQueuingStrategy");
      let Dt = _Dt;
      Object.defineProperties(Dt.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Dt.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
      function ho(e) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
      }
      n2(ho, "byteLengthBrandCheckException");
      function mo(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Dt;
      }
      n2(mo, "IsByteLengthQueuingStrategy");
      const bo = n2(() => 1, "countSizeFunction");
      h(bo, "size");
      const _$t = class _$t {
        constructor(t2) {
          le(t2, 1, "CountQueuingStrategy"), t2 = fo(t2, "First parameter"), this._countQueuingStrategyHighWaterMark = t2.highWaterMark;
        }
        get highWaterMark() {
          if (!yo(this)) throw po("highWaterMark");
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!yo(this)) throw po("size");
          return bo;
        }
      };
      n2(_$t, "CountQueuingStrategy");
      let $t = _$t;
      Object.defineProperties($t.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty($t.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
      function po(e) {
        return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
      }
      n2(po, "countBrandCheckException");
      function yo(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof $t;
      }
      n2(yo, "IsCountQueuingStrategy");
      function ka(e, t2) {
        ne(e, t2);
        const r = e == null ? void 0 : e.cancel, s = e == null ? void 0 : e.flush, f2 = e == null ? void 0 : e.readableType, c = e == null ? void 0 : e.start, d = e == null ? void 0 : e.transform, p = e == null ? void 0 : e.writableType;
        return { cancel: r === void 0 ? void 0 : Fa(r, e, `${t2} has member 'cancel' that`), flush: s === void 0 ? void 0 : qa(s, e, `${t2} has member 'flush' that`), readableType: f2, start: c === void 0 ? void 0 : Oa(c, e, `${t2} has member 'start' that`), transform: d === void 0 ? void 0 : Ia(d, e, `${t2} has member 'transform' that`), writableType: p };
      }
      n2(ka, "convertTransformer");
      function qa(e, t2, r) {
        return G(e, r), (s) => z(e, t2, [s]);
      }
      n2(qa, "convertTransformerFlushCallback");
      function Oa(e, t2, r) {
        return G(e, r), (s) => O(e, t2, [s]);
      }
      n2(Oa, "convertTransformerStartCallback");
      function Ia(e, t2, r) {
        return G(e, r), (s, f2) => z(e, t2, [s, f2]);
      }
      n2(Ia, "convertTransformerTransformCallback");
      function Fa(e, t2, r) {
        return G(e, r), (s) => z(e, t2, [s]);
      }
      n2(Fa, "convertTransformerCancelCallback");
      const _Mt = class _Mt {
        constructor(t2 = {}, r = {}, s = {}) {
          t2 === void 0 && (t2 = null);
          const f2 = At(r, "Second parameter"), c = At(s, "Third parameter"), d = ka(t2, "First parameter");
          if (d.readableType !== void 0) throw new RangeError("Invalid readableType specified");
          if (d.writableType !== void 0) throw new RangeError("Invalid writableType specified");
          const p = ot(c, 0), R = vt(c), y = ot(f2, 1), C = vt(f2);
          let P;
          const B = A((ee) => {
            P = ee;
          });
          za(this, B, y, C, p, R), La(this, d), d.start !== void 0 ? P(d.start(this._transformStreamController)) : P(void 0);
        }
        get readable() {
          if (!go(this)) throw Ro("readable");
          return this._readable;
        }
        get writable() {
          if (!go(this)) throw Ro("writable");
          return this._writable;
        }
      };
      n2(_Mt, "TransformStream");
      let Mt = _Mt;
      Object.defineProperties(Mt.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mt.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
      function za(e, t2, r, s, f2, c) {
        function d() {
          return t2;
        }
        n2(d, "startAlgorithm");
        function p(B) {
          return Ma(e, B);
        }
        n2(p, "writeAlgorithm");
        function R(B) {
          return Ua(e, B);
        }
        n2(R, "abortAlgorithm");
        function y() {
          return xa(e);
        }
        n2(y, "closeAlgorithm"), e._writable = $i(d, p, y, R, r, s);
        function C() {
          return Na(e);
        }
        n2(C, "pullAlgorithm");
        function P(B) {
          return Ha(e, B);
        }
        n2(P, "cancelAlgorithm"), e._readable = ut(d, C, P, f2, c), e._backpressure = void 0, e._backpressureChangePromise = void 0, e._backpressureChangePromise_resolve = void 0, Ut(e, true), e._transformStreamController = void 0;
      }
      n2(za, "InitializeTransformStream");
      function go(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof Mt;
      }
      n2(go, "IsTransformStream");
      function _o(e, t2) {
        J(e._readable._readableStreamController, t2), xr(e, t2);
      }
      n2(_o, "TransformStreamError");
      function xr(e, t2) {
        Nt(e._transformStreamController), it(e._writable._writableStreamController, t2), Nr(e);
      }
      n2(xr, "TransformStreamErrorWritableAndUnblockWrite");
      function Nr(e) {
        e._backpressure && Ut(e, false);
      }
      n2(Nr, "TransformStreamUnblockWrite");
      function Ut(e, t2) {
        e._backpressureChangePromise !== void 0 && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = A((r) => {
          e._backpressureChangePromise_resolve = r;
        }), e._backpressure = t2;
      }
      n2(Ut, "TransformStreamSetBackpressure");
      const _Pe = class _Pe {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!xt(this)) throw Ht("desiredSize");
          const t2 = this._controlledTransformStream._readable._readableStreamController;
          return Mr(t2);
        }
        enqueue(t2 = void 0) {
          if (!xt(this)) throw Ht("enqueue");
          So(this, t2);
        }
        error(t2 = void 0) {
          if (!xt(this)) throw Ht("error");
          Da(this, t2);
        }
        terminate() {
          if (!xt(this)) throw Ht("terminate");
          $a(this);
        }
      };
      n2(_Pe, "TransformStreamDefaultController");
      let Pe = _Pe;
      Object.defineProperties(Pe.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h(Pe.prototype.enqueue, "enqueue"), h(Pe.prototype.error, "error"), h(Pe.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Pe.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
      function xt(e) {
        return !u(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof Pe;
      }
      n2(xt, "IsTransformStreamDefaultController");
      function ja(e, t2, r, s, f2) {
        t2._controlledTransformStream = e, e._transformStreamController = t2, t2._transformAlgorithm = r, t2._flushAlgorithm = s, t2._cancelAlgorithm = f2, t2._finishPromise = void 0, t2._finishPromise_resolve = void 0, t2._finishPromise_reject = void 0;
      }
      n2(ja, "SetUpTransformStreamDefaultController");
      function La(e, t2) {
        const r = Object.create(Pe.prototype);
        let s, f2, c;
        t2.transform !== void 0 ? s = n2((d) => t2.transform(d, r), "transformAlgorithm") : s = n2((d) => {
          try {
            return So(r, d), T(void 0);
          } catch (p) {
            return b(p);
          }
        }, "transformAlgorithm"), t2.flush !== void 0 ? f2 = n2(() => t2.flush(r), "flushAlgorithm") : f2 = n2(() => T(void 0), "flushAlgorithm"), t2.cancel !== void 0 ? c = n2((d) => t2.cancel(d), "cancelAlgorithm") : c = n2(() => T(void 0), "cancelAlgorithm"), ja(e, r, s, f2, c);
      }
      n2(La, "SetUpTransformStreamDefaultControllerFromTransformer");
      function Nt(e) {
        e._transformAlgorithm = void 0, e._flushAlgorithm = void 0, e._cancelAlgorithm = void 0;
      }
      n2(Nt, "TransformStreamDefaultControllerClearAlgorithms");
      function So(e, t2) {
        const r = e._controlledTransformStream, s = r._readable._readableStreamController;
        if (!Ue(s)) throw new TypeError("Readable side is not in a state that permits enqueue");
        try {
          Me(s, t2);
        } catch (c) {
          throw xr(r, c), r._readable._storedError;
        }
        ma(s) !== r._backpressure && Ut(r, true);
      }
      n2(So, "TransformStreamDefaultControllerEnqueue");
      function Da(e, t2) {
        _o(e._controlledTransformStream, t2);
      }
      n2(Da, "TransformStreamDefaultControllerError");
      function wo(e, t2) {
        const r = e._transformAlgorithm(t2);
        return F(r, void 0, (s) => {
          throw _o(e._controlledTransformStream, s), s;
        });
      }
      n2(wo, "TransformStreamDefaultControllerPerformTransform");
      function $a(e) {
        const t2 = e._controlledTransformStream, r = t2._readable._readableStreamController;
        Oe(r);
        const s = new TypeError("TransformStream terminated");
        xr(t2, s);
      }
      n2($a, "TransformStreamDefaultControllerTerminate");
      function Ma(e, t2) {
        const r = e._transformStreamController;
        if (e._backpressure) {
          const s = e._backpressureChangePromise;
          return F(s, () => {
            const f2 = e._writable;
            if (f2._state === "erroring") throw f2._storedError;
            return wo(r, t2);
          });
        }
        return wo(r, t2);
      }
      n2(Ma, "TransformStreamDefaultSinkWriteAlgorithm");
      function Ua(e, t2) {
        const r = e._transformStreamController;
        if (r._finishPromise !== void 0) return r._finishPromise;
        const s = e._readable;
        r._finishPromise = A((c, d) => {
          r._finishPromise_resolve = c, r._finishPromise_reject = d;
        });
        const f2 = r._cancelAlgorithm(t2);
        return Nt(r), g(f2, () => (s._state === "errored" ? xe(r, s._storedError) : (J(s._readableStreamController, t2), Hr(r)), null), (c) => (J(s._readableStreamController, c), xe(r, c), null)), r._finishPromise;
      }
      n2(Ua, "TransformStreamDefaultSinkAbortAlgorithm");
      function xa(e) {
        const t2 = e._transformStreamController;
        if (t2._finishPromise !== void 0) return t2._finishPromise;
        const r = e._readable;
        t2._finishPromise = A((f2, c) => {
          t2._finishPromise_resolve = f2, t2._finishPromise_reject = c;
        });
        const s = t2._flushAlgorithm();
        return Nt(t2), g(s, () => (r._state === "errored" ? xe(t2, r._storedError) : (Oe(r._readableStreamController), Hr(t2)), null), (f2) => (J(r._readableStreamController, f2), xe(t2, f2), null)), t2._finishPromise;
      }
      n2(xa, "TransformStreamDefaultSinkCloseAlgorithm");
      function Na(e) {
        return Ut(e, false), e._backpressureChangePromise;
      }
      n2(Na, "TransformStreamDefaultSourcePullAlgorithm");
      function Ha(e, t2) {
        const r = e._transformStreamController;
        if (r._finishPromise !== void 0) return r._finishPromise;
        const s = e._writable;
        r._finishPromise = A((c, d) => {
          r._finishPromise_resolve = c, r._finishPromise_reject = d;
        });
        const f2 = r._cancelAlgorithm(t2);
        return Nt(r), g(f2, () => (s._state === "errored" ? xe(r, s._storedError) : (it(s._writableStreamController, t2), Nr(e), Hr(r)), null), (c) => (it(s._writableStreamController, c), Nr(e), xe(r, c), null)), r._finishPromise;
      }
      n2(Ha, "TransformStreamDefaultSourceCancelAlgorithm");
      function Ht(e) {
        return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
      }
      n2(Ht, "defaultControllerBrandCheckException");
      function Hr(e) {
        e._finishPromise_resolve !== void 0 && (e._finishPromise_resolve(), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
      }
      n2(Hr, "defaultControllerFinishPromiseResolve");
      function xe(e, t2) {
        e._finishPromise_reject !== void 0 && (Q(e._finishPromise), e._finishPromise_reject(t2), e._finishPromise_resolve = void 0, e._finishPromise_reject = void 0);
      }
      n2(xe, "defaultControllerFinishPromiseReject");
      function Ro(e) {
        return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
      }
      n2(Ro, "streamBrandCheckException"), a.ByteLengthQueuingStrategy = Dt, a.CountQueuingStrategy = $t, a.ReadableByteStreamController = ce, a.ReadableStream = L, a.ReadableStreamBYOBReader = we, a.ReadableStreamBYOBRequest = ve, a.ReadableStreamDefaultController = he, a.ReadableStreamDefaultReader = ye, a.TransformStream = Mt, a.TransformStreamDefaultController = Pe, a.WritableStream = Re, a.WritableStreamDefaultController = $e, a.WritableStreamDefaultWriter = de;
    });
  }(ct, ct.exports)), ct.exports;
}
n2(ns, "requirePonyfill_es2018");
var Ao;
function os() {
  if (Ao) return Eo;
  Ao = 1;
  const i = 65536;
  if (!globalThis.ReadableStream) try {
    const o2 = _chunk42PBKAQTcjs.__require.call(void 0, "process"), { emitWarning: a } = o2;
    try {
      o2.emitWarning = () => {
      }, Object.assign(globalThis, _chunk42PBKAQTcjs.__require.call(void 0, "stream/web")), o2.emitWarning = a;
    } catch (l) {
      throw o2.emitWarning = a, l;
    }
  } catch (e) {
    Object.assign(globalThis, ns());
  }
  try {
    const { Blob: o2 } = _chunk42PBKAQTcjs.__require.call(void 0, "buffer");
    o2 && !o2.prototype.stream && (o2.prototype.stream = n2(function(l) {
      let u = 0;
      const m = this;
      return new ReadableStream({ type: "bytes", async pull(h) {
        const E = await m.slice(u, Math.min(m.size, u + i)).arrayBuffer();
        u += E.byteLength, h.enqueue(new Uint8Array(E)), u === m.size && h.close();
      } });
    }, "name"));
  } catch (e) {
  }
  return Eo;
}
n2(os, "requireStreams"), os();
var Bo = 65536;
async function* Qr(i, o2 = true) {
  for (const a of i) if ("stream" in a) yield* a.stream();
  else if (ArrayBuffer.isView(a)) if (o2) {
    let l = a.byteOffset;
    const u = a.byteOffset + a.byteLength;
    for (; l !== u; ) {
      const m = Math.min(u - l, Bo), h = a.buffer.slice(l, l + m);
      l += h.byteLength, yield new Uint8Array(h);
    }
  } else yield a;
  else {
    let l = 0, u = a;
    for (; l !== u.size; ) {
      const h = await u.slice(l, Math.min(u.size, l + Bo)).arrayBuffer();
      l += h.byteLength, yield new Uint8Array(h);
    }
  }
}
n2(Qr, "toIterator");
var _e, _t, _r, _n, _a;
var Wo = (_a = class {
  constructor(o2 = [], a = {}) {
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _e, []);
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _t, "");
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _r, 0);
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _n, "transparent");
    if (typeof o2 != "object" || o2 === null) throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    if (typeof o2[Symbol.iterator] != "function") throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    if (typeof a != "object" && typeof a != "function") throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    a === null && (a = {});
    const l = new TextEncoder();
    for (const m of o2) {
      let h;
      ArrayBuffer.isView(m) ? h = new Uint8Array(m.buffer.slice(m.byteOffset, m.byteOffset + m.byteLength)) : m instanceof ArrayBuffer ? h = new Uint8Array(m.slice(0)) : m instanceof _a ? h = m : h = l.encode(`${m}`), _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _r, _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _r) + (ArrayBuffer.isView(h) ? h.byteLength : h.size)), _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e).push(h);
    }
    _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _n, `${a.endings === void 0 ? "transparent" : a.endings}`);
    const u = a.type === void 0 ? "" : String(a.type);
    _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _t, /^[\x20-\x7E]*$/.test(u) ? u : "");
  }
  get size() {
    return _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _r);
  }
  get type() {
    return _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _t);
  }
  async text() {
    const o2 = new TextDecoder();
    let a = "";
    for await (const l of Qr(_chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e), false)) a += o2.decode(l, { stream: true });
    return a += o2.decode(), a;
  }
  async arrayBuffer() {
    const o2 = new Uint8Array(this.size);
    let a = 0;
    for await (const l of Qr(_chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e), false)) o2.set(l, a), a += l.length;
    return o2.buffer;
  }
  stream() {
    const o2 = Qr(_chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e), true);
    return new globalThis.ReadableStream({ type: "bytes", async pull(a) {
      const l = await o2.next();
      l.done ? a.close() : a.enqueue(l.value);
    }, async cancel() {
      await o2.return();
    } });
  }
  slice(o2 = 0, a = this.size, l = "") {
    const { size: u } = this;
    let m = o2 < 0 ? Math.max(u + o2, 0) : Math.min(o2, u), h = a < 0 ? Math.max(u + a, 0) : Math.min(a, u);
    const S = Math.max(h - m, 0), E = _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e), w = [];
    let A = 0;
    for (const b of E) {
      if (A >= S) break;
      const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
      if (m && q <= m) m -= q, h -= q;
      else {
        let g;
        ArrayBuffer.isView(b) ? (g = b.subarray(m, Math.min(q, h)), A += g.byteLength) : (g = b.slice(m, Math.min(q, h)), A += g.size), h -= q, w.push(g), m = 0;
      }
    }
    const T = new _a([], { type: String(l).toLowerCase() });
    return _chunk42PBKAQTcjs.__privateSet.call(void 0, T, _r, S), _chunk42PBKAQTcjs.__privateSet.call(void 0, T, _e, w), T;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](o2) {
    return o2 && typeof o2 == "object" && typeof o2.constructor == "function" && (typeof o2.stream == "function" || typeof o2.arrayBuffer == "function") && /^(Blob|File)$/.test(o2[Symbol.toStringTag]);
  }
}, _e = new WeakMap(), _t = new WeakMap(), _r = new WeakMap(), _n = new WeakMap(), n2(_a, "Blob"), _a);
Object.defineProperties(Wo.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
var Ze = Wo;
var _e2, _t2, _a2;
var is = (_a2 = class extends Ze {
  constructor(o2, a, l = {}) {
    if (arguments.length < 2) throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    super(o2, l);
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _e2, 0);
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _t2, "");
    l === null && (l = {});
    const u = l.lastModified === void 0 ? Date.now() : Number(l.lastModified);
    Number.isNaN(u) || _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _e2, u), _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _t2, String(a));
  }
  get name() {
    return _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _t2);
  }
  get lastModified() {
    return _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e2);
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](o2) {
    return !!o2 && o2 instanceof Ze && /^(File)$/.test(o2[Symbol.toStringTag]);
  }
}, _e2 = new WeakMap(), _t2 = new WeakMap(), n2(_a2, "File"), _a2);
var Yr = is;
var { toStringTag: dt, iterator: as, hasInstance: ss } = Symbol;
var ko = Math.random;
var us = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
var qo = n2((i, o2, a) => (i += "", /^(Blob|File)$/.test(o2 && o2[dt]) ? [(a = a !== void 0 ? a + "" : o2[dt] == "File" ? o2.name : "blob", i), o2.name !== a || o2[dt] == "blob" ? new Yr([o2], a, o2) : o2] : [i, o2 + ""]), "f");
var Gr = n2((i, o2) => (o2 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1");
var Fe = n2((i, o2, a) => {
  if (o2.length < a) throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a} arguments required, but only ${o2.length} present.`);
}, "x");
var _e3, _a3;
var Zt = (_a3 = class {
  constructor(...o2) {
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _e3, []);
    if (o2.length) throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
  }
  get [dt]() {
    return "FormData";
  }
  [as]() {
    return this.entries();
  }
  static [ss](o2) {
    return o2 && typeof o2 == "object" && o2[dt] === "FormData" && !us.some((a) => typeof o2[a] != "function");
  }
  append(...o2) {
    Fe("append", arguments, 2), _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3).push(qo(...o2));
  }
  delete(o2) {
    Fe("delete", arguments, 1), o2 += "", _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _e3, _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3).filter(([a]) => a !== o2));
  }
  get(o2) {
    Fe("get", arguments, 1), o2 += "";
    for (var a = _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3), l = a.length, u = 0; u < l; u++) if (a[u][0] === o2) return a[u][1];
    return null;
  }
  getAll(o2, a) {
    return Fe("getAll", arguments, 1), a = [], o2 += "", _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3).forEach((l) => l[0] === o2 && a.push(l[1])), a;
  }
  has(o2) {
    return Fe("has", arguments, 1), o2 += "", _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3).some((a) => a[0] === o2);
  }
  forEach(o2, a) {
    Fe("forEach", arguments, 1);
    for (var [l, u] of this) o2.call(a, u, l, this);
  }
  set(...o2) {
    Fe("set", arguments, 2);
    var a = [], l = true;
    o2 = qo(...o2), _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3).forEach((u) => {
      u[0] === o2[0] ? l && (l = !a.push(o2)) : a.push(u);
    }), l && a.push(o2), _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _e3, a);
  }
  *entries() {
    yield* _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e3);
  }
  *keys() {
    for (var [o2] of this) yield o2;
  }
  *values() {
    for (var [, o2] of this) yield o2;
  }
}, _e3 = new WeakMap(), n2(_a3, "FormData"), _a3);
function ls(i, o2 = Ze) {
  var a = `${ko()}${ko()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), l = [], u = `--${a}\r
Content-Disposition: form-data; name="`;
  return i.forEach((m, h) => typeof m == "string" ? l.push(u + Gr(h) + `"\r
\r
${m.replace(/\r(?!\n)|(?<!\r)\n/g, `\r
`)}\r
`) : l.push(u + Gr(h) + `"; filename="${Gr(m.name, 1)}"\r
Content-Type: ${m.type || "application/octet-stream"}\r
\r
`, m, `\r
`)), l.push(`--${a}--`), new o2(l, { type: "multipart/form-data; boundary=" + a });
}
n2(ls, "formDataToBlob");
var _Kt = class _Kt extends Error {
  constructor(o2, a) {
    super(o2), Error.captureStackTrace(this, this.constructor), this.type = a;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
n2(_Kt, "FetchBaseError");
var Kt = _Kt;
var _te = class _te extends Kt {
  constructor(o2, a, l) {
    super(o2, a), l && (this.code = this.errno = l.code, this.erroredSysCall = l.syscall);
  }
};
n2(_te, "FetchError");
var te = _te;
var Jt = Symbol.toStringTag;
var Oo = n2((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[Jt] === "URLSearchParams", "isURLSearchParameters");
var Xt = n2((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[Jt]), "isBlob");
var fs = n2((i) => typeof i == "object" && (i[Jt] === "AbortSignal" || i[Jt] === "EventTarget"), "isAbortSignal");
var cs = n2((i, o2) => {
  const a = new URL(o2).hostname, l = new URL(i).hostname;
  return a === l || a.endsWith(`.${l}`);
}, "isDomainOrSubdomain");
var ds = n2((i, o2) => {
  const a = new URL(o2).protocol, l = new URL(i).protocol;
  return a === l;
}, "isSameProtocol");
var hs = _util.promisify.call(void 0, _stream2.default.pipeline);
var N = Symbol("Body internals");
var _ht = class _ht {
  constructor(o2, { size: a = 0 } = {}) {
    let l = null;
    o2 === null ? o2 = null : Oo(o2) ? o2 = _buffer.Buffer.from(o2.toString()) : Xt(o2) || _buffer.Buffer.isBuffer(o2) || (_util.types.isAnyArrayBuffer(o2) ? o2 = _buffer.Buffer.from(o2) : ArrayBuffer.isView(o2) ? o2 = _buffer.Buffer.from(o2.buffer, o2.byteOffset, o2.byteLength) : o2 instanceof _stream2.default || (o2 instanceof Zt ? (o2 = ls(o2), l = o2.type.split("=")[1]) : o2 = _buffer.Buffer.from(String(o2))));
    let u = o2;
    _buffer.Buffer.isBuffer(o2) ? u = _stream2.default.Readable.from(o2) : Xt(o2) && (u = _stream2.default.Readable.from(o2.stream())), this[N] = { body: o2, stream: u, boundary: l, disturbed: false, error: null }, this.size = a, o2 instanceof _stream2.default && o2.on("error", (m) => {
      const h = m instanceof Kt ? m : new te(`Invalid response body while trying to fetch ${this.url}: ${m.message}`, "system", m);
      this[N].error = h;
    });
  }
  get body() {
    return this[N].stream;
  }
  get bodyUsed() {
    return this[N].disturbed;
  }
  async arrayBuffer() {
    const { buffer: o2, byteOffset: a, byteLength: l } = await Zr(this);
    return o2.slice(a, a + l);
  }
  async formData() {
    const o2 = this.headers.get("content-type");
    if (o2.startsWith("application/x-www-form-urlencoded")) {
      const l = new Zt(), u = new URLSearchParams(await this.text());
      for (const [m, h] of u) l.append(m, h);
      return l;
    }
    const { toFormData: a } = await Promise.resolve().then(() => _interopRequireWildcard(require("./multipart-parser-ABTUHIKZ.cjs")));
    return a(this.body, o2);
  }
  async blob() {
    const o2 = this.headers && this.headers.get("content-type") || this[N].body && this[N].body.type || "", a = await this.arrayBuffer();
    return new Ze([a], { type: o2 });
  }
  async json() {
    const o2 = await this.text();
    return JSON.parse(o2);
  }
  async text() {
    const o2 = await Zr(this);
    return new TextDecoder().decode(o2);
  }
  buffer() {
    return Zr(this);
  }
};
n2(_ht, "Body");
var ht = _ht;
ht.prototype.buffer = _util.deprecate.call(void 0, ht.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(ht.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: _util.deprecate.call(void 0, () => {
}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
async function Zr(i) {
  if (i[N].disturbed) throw new TypeError(`body used already for: ${i.url}`);
  if (i[N].disturbed = true, i[N].error) throw i[N].error;
  const { body: o2 } = i;
  if (o2 === null) return _buffer.Buffer.alloc(0);
  if (!(o2 instanceof _stream2.default)) return _buffer.Buffer.alloc(0);
  const a = [];
  let l = 0;
  try {
    for await (const u of o2) {
      if (i.size > 0 && l + u.length > i.size) {
        const m = new te(`content size at ${i.url} over limit: ${i.size}`, "max-size");
        throw o2.destroy(m), m;
      }
      l += u.length, a.push(u);
    }
  } catch (u) {
    throw u instanceof Kt ? u : new te(`Invalid response body while trying to fetch ${i.url}: ${u.message}`, "system", u);
  }
  if (o2.readableEnded === true || o2._readableState.ended === true) try {
    return a.every((u) => typeof u == "string") ? _buffer.Buffer.from(a.join("")) : _buffer.Buffer.concat(a, l);
  } catch (u) {
    throw new te(`Could not create Buffer from response body for ${i.url}: ${u.message}`, "system", u);
  }
  else throw new te(`Premature close of server response while trying to fetch ${i.url}`);
}
n2(Zr, "consumeBody");
var Kr = n2((i, o2) => {
  let a, l, { body: u } = i[N];
  if (i.bodyUsed) throw new Error("cannot clone body after it is used");
  return u instanceof _stream2.default && typeof u.getBoundary != "function" && (a = new (0, _stream.PassThrough)({ highWaterMark: o2 }), l = new (0, _stream.PassThrough)({ highWaterMark: o2 }), u.pipe(a), u.pipe(l), i[N].stream = a, u = l), u;
}, "clone");
var ms = _util.deprecate.call(void 0, (i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
var Io = n2((i, o2) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : Oo(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : Xt(i) ? i.type || null : _buffer.Buffer.isBuffer(i) || _util.types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof Zt ? `multipart/form-data; boundary=${o2[N].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${ms(i)}` : i instanceof _stream2.default ? null : "text/plain;charset=UTF-8", "extractContentType");
var bs = n2((i) => {
  const { body: o2 } = i[N];
  return o2 === null ? 0 : Xt(o2) ? o2.size : _buffer.Buffer.isBuffer(o2) ? o2.length : o2 && typeof o2.getLengthSync == "function" && o2.hasKnownLength && o2.hasKnownLength() ? o2.getLengthSync() : null;
}, "getTotalBytes");
var ps = n2(async (i, { body: o2 }) => {
  o2 === null ? i.end() : await hs(o2, i);
}, "writeToStream");
var er = typeof _http2.default.validateHeaderName == "function" ? _http2.default.validateHeaderName : (i) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
    const o2 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
    throw Object.defineProperty(o2, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o2;
  }
};
var Jr = typeof _http2.default.validateHeaderValue == "function" ? _http2.default.validateHeaderValue : (i, o2) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o2)) {
    const a = new TypeError(`Invalid character in header content ["${i}"]`);
    throw Object.defineProperty(a, "code", { value: "ERR_INVALID_CHAR" }), a;
  }
};
var _ae = class _ae extends URLSearchParams {
  constructor(o2) {
    let a = [];
    if (o2 instanceof _ae) {
      const l = o2.raw();
      for (const [u, m] of Object.entries(l)) a.push(...m.map((h) => [u, h]));
    } else if (o2 != null) if (typeof o2 == "object" && !_util.types.isBoxedPrimitive(o2)) {
      const l = o2[Symbol.iterator];
      if (l == null) a.push(...Object.entries(o2));
      else {
        if (typeof l != "function") throw new TypeError("Header pairs must be iterable");
        a = [...o2].map((u) => {
          if (typeof u != "object" || _util.types.isBoxedPrimitive(u)) throw new TypeError("Each header pair must be an iterable object");
          return [...u];
        }).map((u) => {
          if (u.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
          return [...u];
        });
      }
    } else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    return a = a.length > 0 ? a.map(([l, u]) => (er(l), Jr(l, String(u)), [String(l).toLowerCase(), String(u)])) : void 0, super(a), new Proxy(this, { get(l, u, m) {
      switch (u) {
        case "append":
        case "set":
          return (h, S) => (er(h), Jr(h, String(S)), URLSearchParams.prototype[u].call(l, String(h).toLowerCase(), String(S)));
        case "delete":
        case "has":
        case "getAll":
          return (h) => (er(h), URLSearchParams.prototype[u].call(l, String(h).toLowerCase()));
        case "keys":
          return () => (l.sort(), new Set(URLSearchParams.prototype.keys.call(l)).keys());
        default:
          return Reflect.get(l, u, m);
      }
    } });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(o2) {
    const a = this.getAll(o2);
    if (a.length === 0) return null;
    let l = a.join(", ");
    return /^content-encoding$/i.test(o2) && (l = l.toLowerCase()), l;
  }
  forEach(o2, a = void 0) {
    for (const l of this.keys()) Reflect.apply(o2, a, [this.get(l), l, this]);
  }
  *values() {
    for (const o2 of this.keys()) yield this.get(o2);
  }
  *entries() {
    for (const o2 of this.keys()) yield [o2, this.get(o2)];
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((o2, a) => (o2[a] = this.getAll(a), o2), {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((o2, a) => {
      const l = this.getAll(a);
      return a === "host" ? o2[a] = l[0] : o2[a] = l.length > 1 ? l : l[0], o2;
    }, {});
  }
};
n2(_ae, "Headers");
var ae = _ae;
Object.defineProperties(ae.prototype, ["get", "entries", "forEach", "values"].reduce((i, o2) => (i[o2] = { enumerable: true }, i), {}));
function ys(i = []) {
  return new ae(i.reduce((o2, a, l, u) => (l % 2 === 0 && o2.push(u.slice(l, l + 2)), o2), []).filter(([o2, a]) => {
    try {
      return er(o2), Jr(o2, String(a)), true;
    } catch (e) {
      return false;
    }
  }));
}
n2(ys, "fromRawHeaders");
var gs = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var Xr = n2((i) => gs.has(i), "isRedirect");
var re = Symbol("Response internals");
var _H = class _H extends ht {
  constructor(o2 = null, a = {}) {
    super(o2, a);
    const l = a.status != null ? a.status : 200, u = new ae(a.headers);
    if (o2 !== null && !u.has("Content-Type")) {
      const m = Io(o2, this);
      m && u.append("Content-Type", m);
    }
    this[re] = { type: "default", url: a.url, status: l, statusText: a.statusText || "", headers: u, counter: a.counter, highWaterMark: a.highWaterMark };
  }
  get type() {
    return this[re].type;
  }
  get url() {
    return this[re].url || "";
  }
  get status() {
    return this[re].status;
  }
  get ok() {
    return this[re].status >= 200 && this[re].status < 300;
  }
  get redirected() {
    return this[re].counter > 0;
  }
  get statusText() {
    return this[re].statusText;
  }
  get headers() {
    return this[re].headers;
  }
  get highWaterMark() {
    return this[re].highWaterMark;
  }
  clone() {
    return new _H(Kr(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
  }
  static redirect(o2, a = 302) {
    if (!Xr(a)) throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    return new _H(null, { headers: { location: new URL(o2).toString() }, status: a });
  }
  static error() {
    const o2 = new _H(null, { status: 0, statusText: "" });
    return o2[re].type = "error", o2;
  }
  static json(o2 = void 0, a = {}) {
    const l = JSON.stringify(o2);
    if (l === void 0) throw new TypeError("data is not JSON serializable");
    const u = new ae(a && a.headers);
    return u.has("content-type") || u.set("content-type", "application/json"), new _H(l, { ...a, headers: u });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
n2(_H, "Response");
var H = _H;
Object.defineProperties(H.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
var _s = n2((i) => {
  if (i.search) return i.search;
  const o2 = i.href.length - 1, a = i.hash || (i.href[o2] === "#" ? "#" : "");
  return i.href[o2 - a.length] === "?" ? "?" : "";
}, "getSearch");
function Fo(i, o2 = false) {
  return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o2 && (i.pathname = "", i.search = ""), i);
}
n2(Fo, "stripURLForUseAsAReferrer");
var zo = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]);
var Ss = "strict-origin-when-cross-origin";
function ws(i) {
  if (!zo.has(i)) throw new TypeError(`Invalid referrerPolicy: ${i}`);
  return i;
}
n2(ws, "validateReferrerPolicy");
function Rs(i) {
  if (/^(http|ws)s:$/.test(i.protocol)) return true;
  const o2 = i.host.replace(/(^\[)|(]$)/g, ""), a = _net.isIP.call(void 0, o2);
  return a === 4 && /^127\./.test(o2) || a === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o2) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
}
n2(Rs, "isOriginPotentiallyTrustworthy");
function Ke(i) {
  return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : Rs(i);
}
n2(Ke, "isUrlPotentiallyTrustworthy");
function Ts(i, { referrerURLCallback: o2, referrerOriginCallback: a } = {}) {
  if (i.referrer === "no-referrer" || i.referrerPolicy === "") return null;
  const l = i.referrerPolicy;
  if (i.referrer === "about:client") return "no-referrer";
  const u = i.referrer;
  let m = Fo(u), h = Fo(u, true);
  m.toString().length > 4096 && (m = h), o2 && (m = o2(m)), a && (h = a(h));
  const S = new URL(i.url);
  switch (l) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return h;
    case "unsafe-url":
      return m;
    case "strict-origin":
      return Ke(m) && !Ke(S) ? "no-referrer" : h.toString();
    case "strict-origin-when-cross-origin":
      return m.origin === S.origin ? m : Ke(m) && !Ke(S) ? "no-referrer" : h;
    case "same-origin":
      return m.origin === S.origin ? m : "no-referrer";
    case "origin-when-cross-origin":
      return m.origin === S.origin ? m : h;
    case "no-referrer-when-downgrade":
      return Ke(m) && !Ke(S) ? "no-referrer" : m;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${l}`);
  }
}
n2(Ts, "determineRequestsReferrer");
function Cs(i) {
  const o2 = (i.get("referrer-policy") || "").split(/[,\s]+/);
  let a = "";
  for (const l of o2) l && zo.has(l) && (a = l);
  return a;
}
n2(Cs, "parseReferrerPolicyFromHeader");
var j = Symbol("Request internals");
var mt = n2((i) => typeof i == "object" && typeof i[j] == "object", "isRequest");
var Ps = _util.deprecate.call(void 0, () => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
var _Xe = class _Xe extends ht {
  constructor(o2, a = {}) {
    let l;
    if (mt(o2) ? l = new URL(o2.url) : (l = new URL(o2), o2 = {}), l.username !== "" || l.password !== "") throw new TypeError(`${l} is an url with embedded credentials.`);
    let u = a.method || o2.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(u) && (u = u.toUpperCase()), !mt(a) && "data" in a && Ps(), (a.body != null || mt(o2) && o2.body !== null) && (u === "GET" || u === "HEAD")) throw new TypeError("Request with GET/HEAD method cannot have body");
    const m = a.body ? a.body : mt(o2) && o2.body !== null ? Kr(o2) : null;
    super(m, { size: a.size || o2.size || 0 });
    const h = new ae(a.headers || o2.headers || {});
    if (m !== null && !h.has("Content-Type")) {
      const w = Io(m, this);
      w && h.set("Content-Type", w);
    }
    let S = mt(o2) ? o2.signal : null;
    if ("signal" in a && (S = a.signal), S != null && !fs(S)) throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    let E = a.referrer == null ? o2.referrer : a.referrer;
    if (E === "") E = "no-referrer";
    else if (E) {
      const w = new URL(E);
      E = /^about:(\/\/)?client$/.test(w) ? "client" : w;
    } else E = void 0;
    this[j] = { method: u, redirect: a.redirect || o2.redirect || "follow", headers: h, parsedURL: l, signal: S, referrer: E }, this.follow = a.follow === void 0 ? o2.follow === void 0 ? 20 : o2.follow : a.follow, this.compress = a.compress === void 0 ? o2.compress === void 0 ? true : o2.compress : a.compress, this.counter = a.counter || o2.counter || 0, this.agent = a.agent || o2.agent, this.highWaterMark = a.highWaterMark || o2.highWaterMark || 16384, this.insecureHTTPParser = a.insecureHTTPParser || o2.insecureHTTPParser || false, this.referrerPolicy = a.referrerPolicy || o2.referrerPolicy || "";
  }
  get method() {
    return this[j].method;
  }
  get url() {
    return _url.format.call(void 0, this[j].parsedURL);
  }
  get headers() {
    return this[j].headers;
  }
  get redirect() {
    return this[j].redirect;
  }
  get signal() {
    return this[j].signal;
  }
  get referrer() {
    if (this[j].referrer === "no-referrer") return "";
    if (this[j].referrer === "client") return "about:client";
    if (this[j].referrer) return this[j].referrer.toString();
  }
  get referrerPolicy() {
    return this[j].referrerPolicy;
  }
  set referrerPolicy(o2) {
    this[j].referrerPolicy = ws(o2);
  }
  clone() {
    return new _Xe(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
n2(_Xe, "Request");
var Xe = _Xe;
Object.defineProperties(Xe.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
var Es = n2((i) => {
  const { parsedURL: o2 } = i[j], a = new ae(i[j].headers);
  a.has("Accept") || a.set("Accept", "*/*");
  let l = null;
  if (i.body === null && /^(post|put)$/i.test(i.method) && (l = "0"), i.body !== null) {
    const S = bs(i);
    typeof S == "number" && !Number.isNaN(S) && (l = String(S));
  }
  l && a.set("Content-Length", l), i.referrerPolicy === "" && (i.referrerPolicy = Ss), i.referrer && i.referrer !== "no-referrer" ? i[j].referrer = Ts(i) : i[j].referrer = "no-referrer", i[j].referrer instanceof URL && a.set("Referer", i.referrer), a.has("User-Agent") || a.set("User-Agent", "node-fetch"), i.compress && !a.has("Accept-Encoding") && a.set("Accept-Encoding", "gzip, deflate, br");
  let { agent: u } = i;
  typeof u == "function" && (u = u(o2));
  const m = _s(o2), h = { path: o2.pathname + m, method: i.method, headers: a[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: u };
  return { parsedURL: o2, options: h };
}, "getNodeRequestOptions");
var _jo = class _jo extends Kt {
  constructor(o2, a = "aborted") {
    super(o2, a);
  }
};
n2(_jo, "AbortError");
var jo = _jo;
var en;
var Lo;
function vs() {
  if (Lo) return en;
  if (Lo = 1, !globalThis.DOMException) try {
    const { MessageChannel: i } = _chunk42PBKAQTcjs.__require.call(void 0, "worker_threads"), o2 = new i().port1, a = new ArrayBuffer();
    o2.postMessage(a, [a, a]);
  } catch (i) {
    i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
  }
  return en = globalThis.DOMException, en;
}
n2(vs, "requireNodeDomexception");
var As = vs();
var Bs = f(As);
var { stat: tn } = _fs.promises;
var Ws = n2((i, o2) => Do(_fs.statSync.call(void 0, i), i, o2), "blobFromSync");
var ks = n2((i, o2) => tn(i).then((a) => Do(a, i, o2)), "blobFrom");
var qs = n2((i, o2) => tn(i).then((a) => $o(a, i, o2)), "fileFrom");
var Os = n2((i, o2) => $o(_fs.statSync.call(void 0, i), i, o2), "fileFromSync");
var Do = n2((i, o2, a = "") => new Ze([new ir({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a }), "fromBlob");
var $o = n2((i, o2, a = "") => new Yr([new ir({ path: o2, size: i.size, lastModified: i.mtimeMs, start: 0 })], _path.basename.call(void 0, o2), { type: a, lastModified: i.mtimeMs }), "fromFile");
var _e4, _t3;
var _ir = class _ir {
  constructor(o2) {
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _e4);
    _chunk42PBKAQTcjs.__privateAdd.call(void 0, this, _t3);
    _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _e4, o2.path), _chunk42PBKAQTcjs.__privateSet.call(void 0, this, _t3, o2.start), this.size = o2.size, this.lastModified = o2.lastModified;
  }
  slice(o2, a) {
    return new _ir({ path: _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e4), lastModified: this.lastModified, size: a - o2, start: _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _t3) + o2 });
  }
  async *stream() {
    const { mtimeMs: o2 } = await tn(_chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e4));
    if (o2 > this.lastModified) throw new Bs("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
    yield* _fs.createReadStream.call(void 0, _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _e4), { start: _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _t3), end: _chunk42PBKAQTcjs.__privateGet.call(void 0, this, _t3) + this.size - 1 });
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
};
_e4 = new WeakMap();
_t3 = new WeakMap();
n2(_ir, "BlobDataItem");
var ir = _ir;
var Is = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function Mo(i, o2) {
  return new Promise((a, l) => {
    const u = new Xe(i, o2), { parsedURL: m, options: h } = Es(u);
    if (!Is.has(m.protocol)) throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${m.protocol.replace(/:$/, "")}" is not supported.`);
    if (m.protocol === "data:") {
      const g = ts(u.url), V = new H(g, { headers: { "Content-Type": g.typeFull } });
      a(V);
      return;
    }
    const S = (m.protocol === "https:" ? _https2.default : _http2.default).request, { signal: E } = u;
    let w = null;
    const A = n2(() => {
      const g = new jo("The operation was aborted.");
      l(g), u.body && u.body instanceof _stream2.default.Readable && u.body.destroy(g), !(!w || !w.body) && w.body.emit("error", g);
    }, "abort");
    if (E && E.aborted) {
      A();
      return;
    }
    const T = n2(() => {
      A(), q();
    }, "abortAndFinalize"), b = S(m.toString(), h);
    E && E.addEventListener("abort", T);
    const q = n2(() => {
      b.abort(), E && E.removeEventListener("abort", T);
    }, "finalize");
    b.on("error", (g) => {
      l(new te(`request to ${u.url} failed, reason: ${g.message}`, "system", g)), q();
    }), Fs(b, (g) => {
      w && w.body && w.body.destroy(g);
    }), process.version < "v14" && b.on("socket", (g) => {
      let V;
      g.prependListener("end", () => {
        V = g._eventsCount;
      }), g.prependListener("close", (I) => {
        if (w && V < g._eventsCount && !I) {
          const F = new Error("Premature close");
          F.code = "ERR_STREAM_PREMATURE_CLOSE", w.body.emit("error", F);
        }
      });
    }), b.on("response", (g) => {
      b.setTimeout(0);
      const V = ys(g.rawHeaders);
      if (Xr(g.statusCode)) {
        const O = V.get("Location");
        let z = null;
        try {
          z = O === null ? null : new URL(O, u.url);
        } catch (e) {
          if (u.redirect !== "manual") {
            l(new te(`uri requested responds with an invalid redirect URL: ${O}`, "invalid-redirect")), q();
            return;
          }
        }
        switch (u.redirect) {
          case "error":
            l(new te(`uri requested responds with a redirect, redirect mode is set to error: ${u.url}`, "no-redirect")), q();
            return;
          case "manual":
            break;
          case "follow": {
            if (z === null) break;
            if (u.counter >= u.follow) {
              l(new te(`maximum redirect reached at: ${u.url}`, "max-redirect")), q();
              return;
            }
            const $ = { headers: new ae(u.headers), follow: u.follow, counter: u.counter + 1, agent: u.agent, compress: u.compress, method: u.method, body: Kr(u), signal: u.signal, size: u.size, referrer: u.referrer, referrerPolicy: u.referrerPolicy };
            if (!cs(u.url, z) || !ds(u.url, z)) for (const pt of ["authorization", "www-authenticate", "cookie", "cookie2"]) $.headers.delete(pt);
            if (g.statusCode !== 303 && u.body && o2.body instanceof _stream2.default.Readable) {
              l(new te("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
              return;
            }
            (g.statusCode === 303 || (g.statusCode === 301 || g.statusCode === 302) && u.method === "POST") && ($.method = "GET", $.body = void 0, $.headers.delete("content-length"));
            const M = Cs(V);
            M && ($.referrerPolicy = M), a(Mo(new Xe(z, $))), q();
            return;
          }
          default:
            return l(new TypeError(`Redirect option '${u.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      E && g.once("end", () => {
        E.removeEventListener("abort", T);
      });
      let I = _stream.pipeline.call(void 0, g, new (0, _stream.PassThrough)(), (O) => {
        O && l(O);
      });
      process.version < "v12.10" && g.on("aborted", T);
      const F = { url: u.url, status: g.statusCode, statusText: g.statusMessage, headers: V, size: u.size, counter: u.counter, highWaterMark: u.highWaterMark }, Q = V.get("Content-Encoding");
      if (!u.compress || u.method === "HEAD" || Q === null || g.statusCode === 204 || g.statusCode === 304) {
        w = new H(I, F), a(w);
        return;
      }
      const se = { flush: _zlib2.default.Z_SYNC_FLUSH, finishFlush: _zlib2.default.Z_SYNC_FLUSH };
      if (Q === "gzip" || Q === "x-gzip") {
        I = _stream.pipeline.call(void 0, I, _zlib2.default.createGunzip(se), (O) => {
          O && l(O);
        }), w = new H(I, F), a(w);
        return;
      }
      if (Q === "deflate" || Q === "x-deflate") {
        const O = _stream.pipeline.call(void 0, g, new (0, _stream.PassThrough)(), (z) => {
          z && l(z);
        });
        O.once("data", (z) => {
          (z[0] & 15) === 8 ? I = _stream.pipeline.call(void 0, I, _zlib2.default.createInflate(), ($) => {
            $ && l($);
          }) : I = _stream.pipeline.call(void 0, I, _zlib2.default.createInflateRaw(), ($) => {
            $ && l($);
          }), w = new H(I, F), a(w);
        }), O.once("end", () => {
          w || (w = new H(I, F), a(w));
        });
        return;
      }
      if (Q === "br") {
        I = _stream.pipeline.call(void 0, I, _zlib2.default.createBrotliDecompress(), (O) => {
          O && l(O);
        }), w = new H(I, F), a(w);
        return;
      }
      w = new H(I, F), a(w);
    }), ps(b, u).catch(l);
  });
}
n2(Mo, "fetch$1");
function Fs(i, o2) {
  const a = _buffer.Buffer.from(`0\r
\r
`);
  let l = false, u = false, m;
  i.on("response", (h) => {
    const { headers: S } = h;
    l = S["transfer-encoding"] === "chunked" && !S["content-length"];
  }), i.on("socket", (h) => {
    const S = n2(() => {
      if (l && !u) {
        const w = new Error("Premature close");
        w.code = "ERR_STREAM_PREMATURE_CLOSE", o2(w);
      }
    }, "onSocketClose"), E = n2((w) => {
      u = _buffer.Buffer.compare(w.slice(-5), a) === 0, !u && m && (u = _buffer.Buffer.compare(m.slice(-3), a.slice(0, 3)) === 0 && _buffer.Buffer.compare(w.slice(-2), a.slice(3)) === 0), m = w;
    }, "onData");
    h.prependListener("close", S), h.on("data", E), i.on("close", () => {
      h.removeListener("close", S), h.removeListener("data", E);
    });
  });
}
n2(Fs, "fixResponseChunkedTransferBadEnding");
var Uo = /* @__PURE__ */ new WeakMap();
var rn = /* @__PURE__ */ new WeakMap();
function k(i) {
  const o2 = Uo.get(i);
  return console.assert(o2 != null, "'this' is expected an Event object, but got", i), o2;
}
n2(k, "pd");
function xo(i) {
  if (i.passiveListener != null) {
    typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
    return;
  }
  i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
}
n2(xo, "setCancelFlag");
function Je(i, o2) {
  Uo.set(this, { eventTarget: i, event: o2, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o2.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const a = Object.keys(o2);
  for (let l = 0; l < a.length; ++l) {
    const u = a[l];
    u in this || Object.defineProperty(this, u, No(u));
  }
}
n2(Je, "Event"), Je.prototype = { get type() {
  return k(this).event.type;
}, get target() {
  return k(this).eventTarget;
}, get currentTarget() {
  return k(this).currentTarget;
}, composedPath() {
  const i = k(this).currentTarget;
  return i == null ? [] : [i];
}, get NONE() {
  return 0;
}, get CAPTURING_PHASE() {
  return 1;
}, get AT_TARGET() {
  return 2;
}, get BUBBLING_PHASE() {
  return 3;
}, get eventPhase() {
  return k(this).eventPhase;
}, stopPropagation() {
  const i = k(this);
  i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
}, stopImmediatePropagation() {
  const i = k(this);
  i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
}, get bubbles() {
  return !!k(this).event.bubbles;
}, get cancelable() {
  return !!k(this).event.cancelable;
}, preventDefault() {
  xo(k(this));
}, get defaultPrevented() {
  return k(this).canceled;
}, get composed() {
  return !!k(this).event.composed;
}, get timeStamp() {
  return k(this).timeStamp;
}, get srcElement() {
  return k(this).eventTarget;
}, get cancelBubble() {
  return k(this).stopped;
}, set cancelBubble(i) {
  if (!i) return;
  const o2 = k(this);
  o2.stopped = true, typeof o2.event.cancelBubble == "boolean" && (o2.event.cancelBubble = true);
}, get returnValue() {
  return !k(this).canceled;
}, set returnValue(i) {
  i || xo(k(this));
}, initEvent() {
} }, Object.defineProperty(Je.prototype, "constructor", { value: Je, configurable: true, writable: true }), typeof window < "u" && typeof window.Event < "u" && (Object.setPrototypeOf(Je.prototype, window.Event.prototype), rn.set(window.Event.prototype, Je));
function No(i) {
  return { get() {
    return k(this).event[i];
  }, set(o2) {
    k(this).event[i] = o2;
  }, configurable: true, enumerable: true };
}
n2(No, "defineRedirectDescriptor");
function zs(i) {
  return { value() {
    const o2 = k(this).event;
    return o2[i].apply(o2, arguments);
  }, configurable: true, enumerable: true };
}
n2(zs, "defineCallDescriptor");
function js(i, o2) {
  const a = Object.keys(o2);
  if (a.length === 0) return i;
  function l(u, m) {
    i.call(this, u, m);
  }
  n2(l, "CustomEvent"), l.prototype = Object.create(i.prototype, { constructor: { value: l, configurable: true, writable: true } });
  for (let u = 0; u < a.length; ++u) {
    const m = a[u];
    if (!(m in i.prototype)) {
      const S = typeof Object.getOwnPropertyDescriptor(o2, m).value == "function";
      Object.defineProperty(l.prototype, m, S ? zs(m) : No(m));
    }
  }
  return l;
}
n2(js, "defineWrapper");
function Ho(i) {
  if (i == null || i === Object.prototype) return Je;
  let o2 = rn.get(i);
  return o2 == null && (o2 = js(Ho(Object.getPrototypeOf(i)), i), rn.set(i, o2)), o2;
}
n2(Ho, "getWrapper");
function Ls(i, o2) {
  const a = Ho(Object.getPrototypeOf(o2));
  return new a(i, o2);
}
n2(Ls, "wrapEvent");
function Ds(i) {
  return k(i).immediateStopped;
}
n2(Ds, "isStopped");
function $s(i, o2) {
  k(i).eventPhase = o2;
}
n2($s, "setEventPhase");
function Ms(i, o2) {
  k(i).currentTarget = o2;
}
n2(Ms, "setCurrentTarget");
function Vo(i, o2) {
  k(i).passiveListener = o2;
}
n2(Vo, "setPassiveListener");
var Qo = /* @__PURE__ */ new WeakMap();
var Yo = 1;
var Go = 2;
var tr = 3;
function rr(i) {
  return i !== null && typeof i == "object";
}
n2(rr, "isObject");
function bt(i) {
  const o2 = Qo.get(i);
  if (o2 == null) throw new TypeError("'this' is expected an EventTarget object, but got another value.");
  return o2;
}
n2(bt, "getListeners");
function Us(i) {
  return { get() {
    let a = bt(this).get(i);
    for (; a != null; ) {
      if (a.listenerType === tr) return a.listener;
      a = a.next;
    }
    return null;
  }, set(o2) {
    typeof o2 != "function" && !rr(o2) && (o2 = null);
    const a = bt(this);
    let l = null, u = a.get(i);
    for (; u != null; ) u.listenerType === tr ? l !== null ? l.next = u.next : u.next !== null ? a.set(i, u.next) : a.delete(i) : l = u, u = u.next;
    if (o2 !== null) {
      const m = { listener: o2, listenerType: tr, passive: false, once: false, next: null };
      l === null ? a.set(i, m) : l.next = m;
    }
  }, configurable: true, enumerable: true };
}
n2(Us, "defineEventAttributeDescriptor");
function Zo(i, o2) {
  Object.defineProperty(i, `on${o2}`, Us(o2));
}
n2(Zo, "defineEventAttribute");
function Ko(i) {
  function o2() {
    pe.call(this);
  }
  n2(o2, "CustomEventTarget"), o2.prototype = Object.create(pe.prototype, { constructor: { value: o2, configurable: true, writable: true } });
  for (let a = 0; a < i.length; ++a) Zo(o2.prototype, i[a]);
  return o2;
}
n2(Ko, "defineCustomEventTarget");
function pe() {
  if (this instanceof pe) {
    Qo.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0])) return Ko(arguments[0]);
  if (arguments.length > 0) {
    const i = new Array(arguments.length);
    for (let o2 = 0; o2 < arguments.length; ++o2) i[o2] = arguments[o2];
    return Ko(i);
  }
  throw new TypeError("Cannot call a class as a function");
}
n2(pe, "EventTarget"), pe.prototype = { addEventListener(i, o2, a) {
  if (o2 == null) return;
  if (typeof o2 != "function" && !rr(o2)) throw new TypeError("'listener' should be a function or an object.");
  const l = bt(this), u = rr(a), h = (u ? !!a.capture : !!a) ? Yo : Go, S = { listener: o2, listenerType: h, passive: u && !!a.passive, once: u && !!a.once, next: null };
  let E = l.get(i);
  if (E === void 0) {
    l.set(i, S);
    return;
  }
  let w = null;
  for (; E != null; ) {
    if (E.listener === o2 && E.listenerType === h) return;
    w = E, E = E.next;
  }
  w.next = S;
}, removeEventListener(i, o2, a) {
  if (o2 == null) return;
  const l = bt(this), m = (rr(a) ? !!a.capture : !!a) ? Yo : Go;
  let h = null, S = l.get(i);
  for (; S != null; ) {
    if (S.listener === o2 && S.listenerType === m) {
      h !== null ? h.next = S.next : S.next !== null ? l.set(i, S.next) : l.delete(i);
      return;
    }
    h = S, S = S.next;
  }
}, dispatchEvent(i) {
  if (i == null || typeof i.type != "string") throw new TypeError('"event.type" should be a string.');
  const o2 = bt(this), a = i.type;
  let l = o2.get(a);
  if (l == null) return true;
  const u = Ls(this, i);
  let m = null;
  for (; l != null; ) {
    if (l.once ? m !== null ? m.next = l.next : l.next !== null ? o2.set(a, l.next) : o2.delete(a) : m = l, Vo(u, l.passive ? l.listener : null), typeof l.listener == "function") try {
      l.listener.call(this, u);
    } catch (h) {
      typeof console < "u" && typeof console.error == "function" && console.error(h);
    }
    else l.listenerType !== tr && typeof l.listener.handleEvent == "function" && l.listener.handleEvent(u);
    if (Ds(u)) break;
    l = l.next;
  }
  return Vo(u, null), $s(u, 0), Ms(u, null), !u.defaultPrevented;
} }, Object.defineProperty(pe.prototype, "constructor", { value: pe, configurable: true, writable: true }), typeof window < "u" && typeof window.EventTarget < "u" && Object.setPrototypeOf(pe.prototype, window.EventTarget.prototype);
var _nr = class _nr extends pe {
  constructor() {
    throw super(), new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const o2 = or.get(this);
    if (typeof o2 != "boolean") throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    return o2;
  }
};
n2(_nr, "AbortSignal");
var nr = _nr;
Zo(nr.prototype, "abort");
function xs() {
  const i = Object.create(nr.prototype);
  return pe.call(i), or.set(i, false), i;
}
n2(xs, "createAbortSignal");
function Ns(i) {
  or.get(i) === false && (or.set(i, true), i.dispatchEvent({ type: "abort" }));
}
n2(Ns, "abortSignal");
var or = /* @__PURE__ */ new WeakMap();
Object.defineProperties(nr.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(nr.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
var _a4;
var nn = (_a4 = class {
  constructor() {
    Jo.set(this, xs());
  }
  get signal() {
    return Xo(this);
  }
  abort() {
    Ns(Xo(this));
  }
}, n2(_a4, "AbortController"), _a4);
var Jo = /* @__PURE__ */ new WeakMap();
function Xo(i) {
  const o2 = Jo.get(i);
  if (o2 == null) throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
  return o2;
}
n2(Xo, "getSignal"), Object.defineProperties(nn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(nn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
var Hs = Object.defineProperty;
var Vs = n2((i, o2) => Hs(i, "name", { value: o2, configurable: true }), "e");
var ei = Mo;
ti();
function ti() {
  var _a5, _b, _c, _d;
  !((_b = (_a5 = globalThis.process) == null ? void 0 : _a5.versions) == null ? void 0 : _b.node) && !((_d = (_c = globalThis.process) == null ? void 0 : _c.env) == null ? void 0 : _d.DISABLE_NODE_FETCH_NATIVE_WARN) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
}
n2(ti, "s"), Vs(ti, "checkNodeEnvironment");










exports.Ze = Ze; exports.Yr = Yr; exports.Zt = Zt; exports.ae = ae; exports.H = H; exports.Xe = Xe; exports.nn = nn; exports.ei = ei;
/*! Bundled license information:

node-fetch-native/dist/node.mjs:
  (**
  * @license
  * web-streams-polyfill v3.3.3
  * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
  * This code is released under the MIT license.
  * SPDX-License-Identifier: MIT
  *)
  (*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
  (*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
  (*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
*/
