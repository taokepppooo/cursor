module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;

      return !!length &&
        (type == 'number' ||
          (type != 'symbol' && reIsUint.test(value))) &&
            (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
          ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
          : timeWaiting;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));


/***/ }),

/***/ "./node_modules/node-wav-player/lib/wav-player.js":
/*!********************************************************!*\
  !*** ./node_modules/node-wav-player/lib/wav-player.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* ------------------------------------------------------------------
* node-wav-player - wav-player.js
*
* Copyright (c) 2018 - 2020, Futomi Hatano, All rights reserved.
* Released under the MIT license
* Date: 2020-10-27
* ---------------------------------------------------------------- */


const mFs = __webpack_require__(/*! fs */ "fs");
const mSpawn = __webpack_require__(/*! child_process */ "child_process").spawn;

/* ------------------------------------------------------------------
* Constructor: WavPlayer()
* ---------------------------------------------------------------- */
const WavPlayer = function () {
	this._OS = process.platform;
	this._proc = null;
	this._called_stop = false;
};

/* ------------------------------------------------------------------
* Method: request(params)
* - params  | Object  | Required |
*   - path  | String  | Required | Path of a wav file
*   - sync  | Boolean | Optional | Default is `false`
*   - loop  | Boolean | Optional | Default is `false`
* ---------------------------------------------------------------- */
WavPlayer.prototype.play = function (params) {
	this._called_stop = false;
	let promise = new Promise((resolve, reject) => {
		if (!params || typeof (params) !== 'object') {
			reject(new Error('The `path` is required.'));
			return;
		}
		let path = '';
		if ('path' in params) {
			path = params['path'];
		} else {
			reject(new Error('The `path` is required.'));
			return;
		}
		if (typeof (path) !== 'string' || path === '') {
			reject(new Error('The `path` must be a non-empty string.'));
			return;
		}
		if (!mFs.existsSync(path)) {
			reject(new Error('The file of the `path` was not found.'));
			return;
		}

		let sync = false;
		if ('sync' in params) {
			sync = params['sync'];
		}
		if (typeof (sync) !== 'boolean') {
			reject(new Error('The `sync` must be a boolean.'));
			return;
		}

		let loop = false;
		if ('loop' in params) {
			loop = params['loop'];
		}
		if (typeof (loop) !== 'boolean') {
			reject(new Error('The `loop` must be a boolean.'));
			return;
		}
		if (loop) {
			sync = false;
		}

		this._play({
			path: path,
			sync: sync,
			loop: loop
		}).then(() => {
			resolve();
		}).catch((error) => {
			reject(error);
		});
	});
	return promise;
};

WavPlayer.prototype._play = function (params) {
	let promise = new Promise((resolve, reject) => {
		let path = params['path'];
		let loop = params['loop'];
		let sync = params['sync'];
		let os = this._OS;
		if (os === 'win32') {
			this._proc = mSpawn('powershell', [
				'-c',
				'(New-Object System.Media.SoundPlayer "' + path + '").PlaySync();'
			]);
			this._proc.stdin.end();
		} else if (os === 'darwin') {
			this._proc = mSpawn('afplay', [path]);
		} else if (os === 'linux') {
			this._proc = mSpawn('aplay', [path]);
		} else {
			reject(new Error('The wav file can not be played on this platform.'));
		}

		let timer = null;
		if (!sync) {
			timer = setTimeout(() => {
				if(!loop) {
					this._proc.removeAllListeners('close');
				}
				resolve();
			}, 500);
		}
		
		this._proc.on('error', function(err) {
			reject(new Error('Failed to play the wav file (' + err + ')'));
		});

		this._proc.on('close', (code) => {
			if (timer) {
				clearTimeout(timer);
			}
			if (this._called_stop === true) {
				resolve();
			} else {
				if (code === 0) {
					if (sync) {
						resolve();
					} else if (loop) {
						this._play(params);
					}
				} else {
					reject(new Error('Failed to play the wav file (' + code + ')'));
				}
			}
		});
	});
	return promise;
};

WavPlayer.prototype.stop = function () {
	this._called_stop = true;
	this._proc.removeAllListeners('close');
	if (this._proc) {
		this._proc.kill();
	}
};

module.exports = new WavPlayer();


/***/ }),

/***/ "./src/extension.ts":
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(__webpack_require__(/*! vscode */ "vscode"));
const CET4_T_json_1 = __importDefault(__webpack_require__(/*! ./assets/CET4_T.json */ "./src/assets/CET4_T.json"));
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
const sound_1 = __webpack_require__(/*! ./sound */ "./src/sound.ts");
const voice_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './voice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function activate(context) {
    const globalState = context.globalState;
    globalState.setKeysForSync(['chapter', 'order', 'dictKey']);
    let chapterLength = utils_1.getConfig('chapterLength');
    let readOnlyMode = globalState.get('readOnlyMode', false);
    let readOnlyInterval = utils_1.getConfig('readOnlyInterval');
    let readOnlyIntervalId = null;
    let placeholder = utils_1.getConfig('placeholder'); // 用于控制word不可见时，inputBar中是否出现占位符及样式
    let wordVisibility = globalState.get('wordVisibility', true);
    let prevOrder = globalState.get('order', 0);
    if (prevOrder > chapterLength) {
        prevOrder = 0;
    }
    let isStart = false, hasWrong = false, chapter = globalState.get('chapter', 0), order = prevOrder, dict = CET4_T_json_1.default, dictKey = 'cet4', voiceType = voice_1.getVoiceType(), voiceLock = false;
    let wordList = dict.slice(chapter * chapterLength, (chapter + 1) * chapterLength);
    let totalChapters = Math.ceil(dict.length / chapterLength);
    let inputBarIndex = 0; // 当前inputBar将要输入到的下标
    const wordBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -100);
    const inputBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -101);
    const transBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -102);
    changeDict(globalState.get('dictKey', 'cet4'));
    function setupWord() {
        if (order === wordList.length) {
            if (!utils_1.getConfig('reWrite')) {
                if (chapter === totalChapters - 1) {
                    chapter = 0;
                }
                else {
                    chapter += 1;
                }
            }
            order = 0;
            wordList = dict.slice(chapter * chapterLength, (chapter + 1) * chapterLength);
        }
        let phonetic = '';
        switch (utils_1.getConfig('phonetic')) {
            case 'us':
                phonetic = wordList[order].usphone || '';
                break;
            case 'uk':
                phonetic = wordList[order].ukphone || '';
                break;
            case 'close':
                phonetic = '';
                break;
        }
        // API 字典会出现括号，但部分 vscode 插件会拦截括号的输入
        wordList[order].name = wordList[order].name.replace('(', '').replace(')', '');
        wordBar.text = `${utils_1.dicts[dictKey].name} chp.${chapter + 1}  ${order + 1}/${wordList.length}  ${wordVisibility ? wordList[order].name : ''}`;
        if (wordVisibility || placeholder === '') {
            inputBar.text = '';
        }
        else {
            // 拼接占位符
            inputBar.text = placeholder.repeat(wordList[order].name.length);
        }
        inputBarIndex = 0;
        transBar.text = phonetic ? `/${phonetic}/  ` : '';
        transBar.text += wordList[order].trans.join('; ');
        if (voiceType && !voiceLock) {
            voiceLock = true;
            voice_1.voicePlayer(wordList[order].name, voiceType, () => {
                voiceLock = false;
            });
        }
        updateGlobalState();
    }
    function refreshWordList() {
        totalChapters = Math.ceil(dict.length / chapterLength);
        wordList = dict.slice(chapter * chapterLength, (chapter + 1) * chapterLength);
        setupWord();
    }
    function changeDict(key) {
        if (key === 'cet4') {
            dict = CET4_T_json_1.default;
        }
        else {
            dict = utils_1.getDictFile(utils_1.dicts[key].url);
        }
        dictKey = key;
        refreshWordList();
    }
    function updateGlobalState() {
        globalState.update('chapter', chapter);
        globalState.update('order', order);
        globalState.update('dictKey', dictKey);
    }
    vscode.workspace.onDidChangeConfiguration(function (event) {
        const configList = ['qwerty-learner.chapterLength'];
        const affected = configList.some((item) => event.affectsConfiguration(item));
        if (affected) {
            chapter = 0;
            order = 0;
            chapterLength = utils_1.getConfig('chapterLength');
            refreshWordList();
        }
        // 修改了placeholder只需要更新placeholder
        if (event.affectsConfiguration('qwerty-learner.placeholder')) {
            placeholder = utils_1.getConfig('placeholder');
            setupWord();
        }
    });
    vscode.workspace.onDidChangeTextDocument((e) => {
        if (isStart && !readOnlyMode) {
            const { uri } = e.document;
            // 避免破坏配置文件
            if (uri.scheme.indexOf('vscode') !== -1) {
                return;
            }
            const { range, text, rangeLength } = e.contentChanges[0];
            if (text !== '' && text.length === 1) {
                // 删除用户输入的字符
                const newRange = new vscode.Range(range.start.line, range.start.character, range.end.line, range.end.character + 1);
                const editAction = new vscode.WorkspaceEdit();
                editAction.delete(uri, newRange);
                vscode.workspace.applyEdit(editAction);
                if (!hasWrong) {
                    sound_1.soundPlayer('click');
                    let curInput = '';
                    if (wordVisibility || placeholder === '') {
                        // 没有使用placeholder，不需要特殊处理
                        inputBar.text += text;
                        curInput = inputBar.text;
                    }
                    else {
                        // 拼接占位符 && 获取当前已经键入的值进行比较
                        inputBar.text = inputBar.text.substring(0, inputBarIndex) + text + inputBar.text.substring(inputBarIndex + 1);
                        inputBarIndex += 1;
                        curInput = inputBar.text.substring(0, inputBarIndex);
                    }
                    const result = utils_1.compareWord(wordList[order].name, curInput);
                    if (result === -2) {
                        order++;
                        sound_1.soundPlayer('success');
                        // 可能单词太短，播放发音回调还没执行，就输完切下一个词了，这里在切换下一个词前解发音锁
                        voiceLock = false;
                        setupWord();
                    }
                    else if (result >= 0) {
                        hasWrong = true;
                        inputBar.color = utils_1.getConfig('highlightWrongColor');
                        sound_1.soundPlayer('wrong');
                        setTimeout(() => {
                            hasWrong = false;
                            inputBar.color = undefined;
                            setupWord();
                        }, utils_1.getConfig('highlightWrongDelay'));
                    }
                }
            }
        }
    });
    let startFunction = () => {
        // 在第一次启动时，设置 qwerty-learner.readOnlyMode 的正确值
        vscode.commands.executeCommand('setContext', 'qwerty-learner.readOnlyMode', readOnlyMode);
        vscode.commands.executeCommand('setContext', 'qwerty-learner.wordVisibility', wordVisibility);
        isStart = !isStart;
        if (isStart) {
            wordBar.show();
            inputBar.show();
            transBar.show();
            setupWord();
            if (readOnlyMode) {
                readOnlyIntervalId = setInterval(() => {
                    order++;
                    setupWord();
                }, readOnlyInterval);
            }
        }
        else {
            wordBar.hide();
            inputBar.hide();
            transBar.hide();
            if (readOnlyMode) {
                removeInterval();
            }
        }
    };
    function removeInterval() {
        if (readOnlyIntervalId !== null) {
            clearInterval(readOnlyIntervalId);
            readOnlyIntervalId = null;
        }
    }
    let startCom = vscode.commands.registerCommand('qwerty-learner.Start', startFunction);
    let changeChapterCom = vscode.commands.registerCommand('qwerty-learner.changeChapter', () => __awaiter(this, void 0, void 0, function* () {
        const inputChapter = yield vscode.window.showQuickPick(lodash_1.range(1, totalChapters + 1).map((i) => i.toString()), { placeHolder: `当前章节: ${chapter + 1}   共 ${totalChapters}章节` });
        if (inputChapter !== undefined) {
            chapter = parseInt(inputChapter) - 1;
            order = 0;
            refreshWordList();
        }
    }));
    let changeDictCom = vscode.commands.registerCommand('qwerty-learner.changeDict', () => __awaiter(this, void 0, void 0, function* () {
        const dictList = [];
        Object.keys(utils_1.dicts).forEach((key) => {
            dictList.push({ label: utils_1.dicts[key].name, path: utils_1.dicts[key].url, detail: utils_1.dicts[key].description, key: key });
        });
        const inputDict = yield vscode.window.showQuickPick(dictList, { placeHolder: `当前字典: ${utils_1.dicts[dictKey].name}` });
        if (inputDict !== undefined) {
            chapter = 0;
            order = 0;
            changeDict(inputDict.key);
        }
    }));
    let closeReadOnlyMode = vscode.commands.registerCommand('qwerty-learner.closeReadOnlyMode', () => {
        readOnlyMode = false;
        globalState.update('readOnlyMode', false);
        vscode.commands.executeCommand('setContext', 'qwerty-learner.readOnlyMode', false);
        removeInterval();
    });
    let openReadOnlyMode = vscode.commands.registerCommand('qwerty-learner.openReadOnlyMode', () => {
        readOnlyMode = true;
        globalState.update('readOnlyMode', true);
        vscode.commands.executeCommand('setContext', 'qwerty-learner.readOnlyMode', true);
        isStart = false;
        startFunction();
    });
    let toggleWordVisibility = vscode.commands.registerCommand('qwerty-learner.toggleWordVisibility', () => {
        wordVisibility = !wordVisibility;
        globalState.update('wordVisibility', wordVisibility);
        vscode.commands.executeCommand('setContext', 'qwerty-learner.toggleWordVisibility', wordVisibility);
        setupWord();
    });
    context.subscriptions.push(startCom);
    context.subscriptions.push(changeChapterCom);
    context.subscriptions.push(changeDictCom);
    context.subscriptions.push(closeReadOnlyMode);
    context.subscriptions.push(openReadOnlyMode);
    context.subscriptions.push(toggleWordVisibility);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    console.log('我裂开了');
}
exports.deactivate = deactivate;


/***/ }),

/***/ "./src/sound.ts":
/*!**********************!*\
  !*** ./src/sound.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.soundPlayer = void 0;
const wavPlayer = __webpack_require__(/*! node-wav-player */ "./node_modules/node-wav-player/lib/wav-player.js");
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
const soundPlayer = (type) => {
    if (utils_1.getConfig('keySound')) {
        let soundPath;
        switch (type) {
            case 'click':
                soundPath = path_1.default.join(__dirname, '..', 'assets/sounds', 'click.wav');
                break;
            case 'wrong':
                soundPath = path_1.default.join(__dirname, '..', 'assets/sounds', 'beep.wav');
                break;
            case 'success':
                soundPath = path_1.default.join(__dirname, '..', 'assets/sounds', 'hint.wav');
                break;
            default:
                break;
        }
        // wavPlayer.stop()
        wavPlayer.play({ path: soundPath });
    }
};
exports.soundPlayer = soundPlayer;


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDictFile = exports.getConfig = exports.compareWord = void 0;
const vscode = __importStar(__webpack_require__(/*! vscode */ "vscode"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
function compareWord(word, input) {
    // 错误返回错误索引，正确返回-2，未完成输入且无错误返回-1
    for (let i = 0; i < word.length; i++) {
        if (typeof input[i] !== 'undefined') {
            if (word[i] !== input[i]) {
                return i;
            }
        }
        else {
            return -1;
        }
    }
    return -2;
}
exports.compareWord = compareWord;
function getConfig(key) {
    return vscode.workspace.getConfiguration('qwerty-learner')[key];
}
exports.getConfig = getConfig;
function getDictFile(dictPath) {
    const filePath = path_1.default.join(__dirname, '..', 'assets/dicts', dictPath);
    return JSON.parse(fs_1.default.readFileSync(filePath, 'utf8'));
}
exports.getDictFile = getDictFile;


/***/ }),

/***/ "./src/assets/CET4_T.json":
/*!********************************!*\
  !*** ./src/assets/CET4_T.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("[{\"name\":\"cancel\",\"trans\":[\"取消， 撤销； 删去\"],\"usphone\":\"'kænsl\",\"ukphone\":\"'kænsl\"},{\"name\":\"explosive\",\"trans\":[\"爆炸的； 极易引起争论的\",\"炸药\"],\"usphone\":\"ɪk'splosɪv; ɪk'splozɪv\",\"ukphone\":\"ɪk'spləusɪv\"},{\"name\":\"numerous\",\"trans\":[\"众多的\"],\"usphone\":\"'numərəs\",\"ukphone\":\"'njuːmərəs\"},{\"name\":\"govern\",\"trans\":[\"居支配地位， 占优势\",\"统治，治理，支配\"],\"usphone\":\"'ɡʌvɚn\",\"ukphone\":\"'gʌvn\"},{\"name\":\"analyse\",\"trans\":[\"分析； 分解； 解析\"],\"usphone\":\"'æn(ə)laɪz\",\"ukphone\":\"'ænəlaɪz\"},{\"name\":\"discourage\",\"trans\":[\"使泄气， 使灰心； 阻止， 劝阻\"],\"usphone\":\"dɪs'kɝɪdʒ\",\"ukphone\":\"dɪs'kʌrɪdʒ\"},{\"name\":\"resemble\",\"trans\":[\"像， 类似于\"],\"usphone\":\"rɪ'zɛmbl\",\"ukphone\":\"rɪ'zembl\"},{\"name\":\"remote\",\"trans\":[\"遥远的； 偏僻的； 关系疏远的； 脱离的； 微乎其微的； 孤高的， 冷淡的； 遥控的\"],\"usphone\":\"rɪ'mot\",\"ukphone\":\"rɪ'məut\"},{\"name\":\"salary\",\"trans\":[\"薪金， 薪水\"],\"usphone\":\"'sæləri\",\"ukphone\":\"'sæləri\"},{\"name\":\"pollution\",\"trans\":[\"污染， 污染物\"],\"usphone\":\"pə'luʃən\",\"ukphone\":\"pə'luːʃn\"},{\"name\":\"pretend\",\"trans\":[\"装作， 假装\"],\"usphone\":\"prɪ'tɛnd\",\"ukphone\":\"prɪ'tend\"},{\"name\":\"kettle\",\"trans\":[\"水壶\"],\"usphone\":\"'kɛtl\",\"ukphone\":\"'ketl\"},{\"name\":\"wreck\",\"trans\":[\"失事；残骸；精神或身体已垮的人\",\"破坏\"],\"usphone\":\"rɛk\",\"ukphone\":\"rek\"},{\"name\":\"drunk\",\"trans\":[\"醉的； 陶醉的\"],\"usphone\":\"drʌŋk\",\"ukphone\":\"drʌŋk\"},{\"name\":\"calculate\",\"trans\":[\"计算； 估计； 计划\"],\"usphone\":\"'kælkjulet\",\"ukphone\":\"'kælkjuleɪt\"},{\"name\":\"persistent\",\"trans\":[\"坚持的， 不屈不挠的； 持续不断的； 反复出现的\"],\"usphone\":\"pə'zɪstənt\",\"ukphone\":\"pə'sɪstənt\"},{\"name\":\"sake\",\"trans\":[\"缘故， 理由\"],\"usphone\":\"sek\",\"ukphone\":\"seɪk\"},{\"name\":\"conceal\",\"trans\":[\"把…隐藏起来， 掩盖， 隐瞒\"],\"usphone\":\"kən'sil\",\"ukphone\":\"kən'siːl\"},{\"name\":\"audience\",\"trans\":[\"听众， 观众， 读者\"],\"usphone\":\"'ɔdɪəns\",\"ukphone\":\"'ɔːdiəns\"},{\"name\":\"meanwhile\",\"trans\":[\"与此同时\"],\"usphone\":\"'minwaɪl\",\"ukphone\":\"'miːnwaɪl\"},{\"name\":\"possess\",\"trans\":[\"占用， 拥有\"],\"usphone\":\"pə'zɛs\",\"ukphone\":\"pə'zes\"},{\"name\":\"competent\",\"trans\":[\"有能力的， 能胜任的\"],\"usphone\":\"'kɑmpɪtənt\",\"ukphone\":\"'kɒmpɪtənt\"},{\"name\":\"investment\",\"trans\":[\"投资， 投资额； 投入\"],\"usphone\":\"ɪn'vɛstmənt\",\"ukphone\":\"ɪn'vestmənt\"},{\"name\":\"neutral\",\"trans\":[\"中立的； 中性的\"],\"usphone\":\"'nʊtrəl\",\"ukphone\":\"'njuːtrəl\"},{\"name\":\"scratch\",\"trans\":[\"抓，搔，扒；刮，擦；刻出\",\"抓痕， 划痕； 抓， 搔， 刮\"],\"usphone\":\"skrætʃ\",\"ukphone\":\"skrætʃ\"},{\"name\":\"optional\",\"trans\":[\"可以任选的\"],\"usphone\":\"'ɑpʃənl\",\"ukphone\":\"'ɒpʃənl\"},{\"name\":\"require\",\"trans\":[\"需要； 要求； 命令\"],\"usphone\":\"rɪ'kwaɪr\",\"ukphone\":\"rɪ'kwaɪə\"},{\"name\":\"circular\",\"trans\":[\"圆的；循环的；兜圈子的\",\"通知， 通告\"],\"usphone\":\"'sɝkjəlɚ\",\"ukphone\":\"'sɜːkjələ\"},{\"name\":\"analysis\",\"trans\":[\"分析， 分析报告； 分解； 解析\"],\"usphone\":\"ə'næləsɪs\",\"ukphone\":\"ə'næləsɪs\"},{\"name\":\"click\",\"trans\":[\"发出咔嗒声；点击\",\"咔嗒声\"],\"usphone\":\"klɪk\",\"ukphone\":\"klɪk\"},{\"name\":\"fashionable\",\"trans\":[\"流行的， 时髦的\"],\"usphone\":\"'fæʃnəbl\",\"ukphone\":\"'fæʃnəbl\"},{\"name\":\"devise\",\"trans\":[\"设计， 发明\"],\"usphone\":\"dɪ'vaɪz\",\"ukphone\":\"dɪ'vaɪz\"},{\"name\":\"apparent\",\"trans\":[\"表面上的， 明显的\"],\"usphone\":\"ə'pærənt\",\"ukphone\":\"ə'pærənt\"},{\"name\":\"journalist\",\"trans\":[\"新闻工作者， 新闻记者\"],\"usphone\":\"ˈdʒɝ​nlɪst\",\"ukphone\":\"'dʒɜːnəlɪst\"},{\"name\":\"exposure\",\"trans\":[\"暴露， 揭露； 曝光\"],\"usphone\":\"ɪk'spoʒɚ\",\"ukphone\":\"ɪk'spəuʒə\"},{\"name\":\"temper\",\"trans\":[\"韧度；心情，情绪\",\"调和， 使缓和； 【冶】使回火\"],\"usphone\":\"'tɛmpɚ\",\"ukphone\":\"'tempə\"},{\"name\":\"protective\",\"trans\":[\"保护的， 防护的\"],\"usphone\":\"prə'tɛktɪv\",\"ukphone\":\"prə'tektɪv\"},{\"name\":\"sideways\",\"trans\":[\"从一边， 向一边； 在一边； 斜着， 侧身\"],\"usphone\":\"'saɪdwez\",\"ukphone\":\"'saɪdweɪz\"},{\"name\":\"multicultural\",\"trans\":[\"融合多种文化的\"],\"usphone\":\"'mʌltɪ'kʌltʃərəl\",\"ukphone\":\"ˌmʌlti'kʌltʃərəl\"},{\"name\":\"object\",\"trans\":[\"反对， 不赞成\",\"实物， 物体； 目的， 目标； 对象， 客体； 宾语\"],\"usphone\":\"'ɑbdʒɛkt\",\"ukphone\":\"'ɒbdʒɪkt; -dʒekt\"},{\"name\":\"humble\",\"trans\":[\"谦逊的； 地位低下的； 简陋的\"],\"usphone\":\"'hʌmbl\",\"ukphone\":\"'hʌmbl\"},{\"name\":\"chapter\",\"trans\":[\"章， 回， 篇\"],\"usphone\":\"'tʃæptɚ\",\"ukphone\":\"'tʃæptə\"},{\"name\":\"harbour\",\"trans\":[\"海港，港口\",\"庇护； 心怀\"],\"usphone\":\"hɑrbɚ\",\"ukphone\":\"'hɑːbə\"},{\"name\":\"independent\",\"trans\":[\"独立的， 自主的； 无偏见的； 不相关联的\"],\"usphone\":\"'ɪndɪ'pɛndənt\",\"ukphone\":\"ˌɪndɪ'pendənt\"},{\"name\":\"carriage\",\"trans\":[\"客车厢， 四轮马车\"],\"usphone\":\"'kærɪdʒ\",\"ukphone\":\"'kærɪdʒ\"},{\"name\":\"cliff\",\"trans\":[\"悬崖， 峭壁\"],\"usphone\":\"klɪf\",\"ukphone\":\"klɪf\"},{\"name\":\"infinite\",\"trans\":[\"无限的； 无穷的\"],\"usphone\":\"'ɪnfɪnət\",\"ukphone\":\"'ɪnfɪnət\"},{\"name\":\"concede\",\"trans\":[\"承认， 承认…为真； 承认失败； 允许， 让予； 让步， 认输\"],\"usphone\":\"kən'sid\",\"ukphone\":\"kən'siːd\"},{\"name\":\"elect\",\"trans\":[\"选举， 推选； 选择\"],\"usphone\":\"ɪ'lɛkt\",\"ukphone\":\"ɪ'lekt\"},{\"name\":\"weekly\",\"trans\":[\"每周\",\"每周的\"],\"usphone\":\"'wikli\",\"ukphone\":\"'wiːkli\"},{\"name\":\"result\",\"trans\":[\"发生； 结果\",\"结果；成果；比分\"],\"usphone\":\"rɪ'zʌlt\",\"ukphone\":\"rɪ'zʌlt\"},{\"name\":\"golf\",\"trans\":[\"高尔夫球运动\"],\"usphone\":\"gɔlf\",\"ukphone\":\"gɒlf\"},{\"name\":\"selfish\",\"trans\":[\"自私的， 利己的\"],\"usphone\":\"'sɛlfɪʃ\",\"ukphone\":\"'selfɪʃ\"},{\"name\":\"sexism\",\"trans\":[\"性别偏见， 性别歧视\"],\"usphone\":\"'sɛk'sɪzəm\",\"ukphone\":\"'seksɪzəm\"},{\"name\":\"commission\",\"trans\":[\"委任状；委员会；佣金，回扣；授权，委托\",\"委任， 委托\"],\"usphone\":\"kə'mɪʃən\",\"ukphone\":\"kə'mɪʃn\"},{\"name\":\"headline\",\"trans\":[\"大字标题； 新闻提要\"],\"usphone\":\"'hɛdlaɪn\",\"ukphone\":\"'hedlaɪn\"},{\"name\":\"connect\",\"trans\":[\"连接， 结合， 联系； 给…接通电话\"],\"usphone\":\"kə'nɛkt\",\"ukphone\":\"kə'nekt\"},{\"name\":\"rational\",\"trans\":[\"理性的， 理智的； 合理的\"],\"usphone\":\"'ræʃnəl\",\"ukphone\":\"'ræʃnəl\"},{\"name\":\"policy\",\"trans\":[\"政策， 方针； 保险单\"],\"usphone\":\"'pɑləsi\",\"ukphone\":\"'pɒləsi\"},{\"name\":\"editorial\",\"trans\":[\"编辑的，主笔的，编者的；社论的，社论式的\",\"社论， 重要评论\"],\"usphone\":\",ɛdɪ'tɔrɪəl\",\"ukphone\":\"ˌedɪ'tɔːriəl\"},{\"name\":\"resume\",\"trans\":[\"重新开始， 继续， 恢复\",\"摘要， 概要； 简历\"],\"usphone\":\"\",\"ukphone\":\"rɪˈzjuːm; ˈrɛzjʊmeɪ\"},{\"name\":\"rebuild\",\"trans\":[\"重建， 改造； 复原\"],\"usphone\":\",ri'bɪld\",\"ukphone\":\"ˌriː'bɪld\"},{\"name\":\"committee\",\"trans\":[\"委员会， 全体委员\"],\"usphone\":\"kə'mɪti\",\"ukphone\":\"kə'mɪti\"},{\"name\":\"namely\",\"trans\":[\"即， 也就是\"],\"usphone\":\"'nemli\",\"ukphone\":\"'neɪmli\"},{\"name\":\"artistic\",\"trans\":[\"艺术的， 艺术家的； 富有艺术性的， 精美的； 精彩的\"],\"usphone\":\"ɑr'tɪstɪk\",\"ukphone\":\"ɑː'tɪstɪk\"},{\"name\":\"union\",\"trans\":[\"工会， 联盟； 联合， 团结； 一致\"],\"usphone\":\"'junɪən\",\"ukphone\":\"'juːnɪən\"},{\"name\":\"plentiful\",\"trans\":[\"丰富的， 充足的； 大量的\"],\"usphone\":\"'plɛntɪfəl\",\"ukphone\":\"'plentɪfl\"},{\"name\":\"halt\",\"trans\":[\"停止，立定\",\"停住\"],\"usphone\":\"hɔlt\",\"ukphone\":\"hɔːlt\"},{\"name\":\"component\",\"trans\":[\"组成的， 构成的\",\"组成部分，部件，组件\"],\"usphone\":\"kəm'ponənt\",\"ukphone\":\"kəm'pəunənt\"},{\"name\":\"consultant\",\"trans\":[\"顾问； 会诊医师， 专科医生\"],\"usphone\":\"kən'sʌltənt\",\"ukphone\":\"kən'sʌltənt\"},{\"name\":\"sunset\",\"trans\":[\"日落； 晚霞\"],\"usphone\":\"'sʌnsɛt\",\"ukphone\":\"'sʌnset\"},{\"name\":\"obvious\",\"trans\":[\"明显的\"],\"usphone\":\"'ɑbvɪəs\",\"ukphone\":\"'ɒbviəs\"},{\"name\":\"illustration\",\"trans\":[\"说明， 图解， 例证\"],\"usphone\":\",ɪlə'streʃən\",\"ukphone\":\"ˌɪlə'streɪʃn\"},{\"name\":\"disguise\",\"trans\":[\"假扮，化装，伪装；掩盖，掩饰\",\"用来伪装的东西； 伪装， 掩饰\"],\"usphone\":\"dɪs'ɡaɪz\",\"ukphone\":\"dɪs'gaɪz\"},{\"name\":\"wrap\",\"trans\":[\"裹，包，捆\",\"披肩\"],\"usphone\":\"ræp\",\"ukphone\":\"ræp\"},{\"name\":\"surgery\",\"trans\":[\"外科， 外科手术； 手术室\"],\"usphone\":\"'sɝdʒəri\",\"ukphone\":\"'sɜːdʒəri\"},{\"name\":\"liberal\",\"trans\":[\"心胸宽大的， 慷慨的； 自由的， 自由主义的\"],\"usphone\":\"'lɪbərəl\",\"ukphone\":\"'lɪbərəl\"},{\"name\":\"violent\",\"trans\":[\"暴力引起的， 暴力的； 猛烈的， 剧烈的\"],\"usphone\":\"'vaɪələnt\",\"ukphone\":\"'vaɪələnt\"},{\"name\":\"harmony\",\"trans\":[\"调和， 协调， 和谐\"],\"usphone\":\"'hɑrməni\",\"ukphone\":\"'hɑːməni\"},{\"name\":\"resolve\",\"trans\":[\"解决， 解答； 决定， 决意\"],\"usphone\":\"rɪ'zɑlv\",\"ukphone\":\"rɪ'zɒlv\"},{\"name\":\"chill\",\"trans\":[\"变冷，感到冷\",\"寒冷， 寒气； 风寒， 寒战\"],\"usphone\":\"tʃɪl\",\"ukphone\":\"tʃɪl\"},{\"name\":\"confront\",\"trans\":[\"迎面遇到， 遭遇； 勇敢地面对， 正视； 使对质， 使当面对证\"],\"usphone\":\"kən'frʌnt\",\"ukphone\":\"kən'frʌnt\"},{\"name\":\"dominate\",\"trans\":[\"拥有优势\",\"在…中占首要地位；支配，统治，控制；耸立于，俯视\"],\"usphone\":\"'dɑmɪnet\",\"ukphone\":\"'dɒmɪneɪt\"},{\"name\":\"imitate\",\"trans\":[\"模仿， 仿效， 仿制\"],\"usphone\":\"'ɪmɪtet\",\"ukphone\":\"'ɪmɪteɪt\"},{\"name\":\"faithful\",\"trans\":[\"忠诚的； 如实的； 尽职的\"],\"usphone\":\"'feθfəl\",\"ukphone\":\"'feɪθfl\"},{\"name\":\"reproduce\",\"trans\":[\"复制， 再现； 繁殖， 生殖\"],\"usphone\":\",riprə'dus\",\"ukphone\":\"ˌriːprə'djuːs\"},{\"name\":\"institution\",\"trans\":[\"协会； 制度， 习俗\"],\"usphone\":\",ɪnstɪ'tuʃən\",\"ukphone\":\"ˌɪnstɪ'tjuːʃn\"},{\"name\":\"pad\",\"trans\":[\"垫，衬垫；便笺本；发射台，直升机起落场\",\"填塞\"],\"usphone\":\"pæd\",\"ukphone\":\"pæd\"},{\"name\":\"provocation\",\"trans\":[\"激怒， 刺激； 挑衅， 挑拨\"],\"usphone\":\",prɑvə'keʃən\",\"ukphone\":\"ˌprɒvə'keɪʃn\"},{\"name\":\"ambition\",\"trans\":[\"雄心， 抱负； 野心； 期望得到的东西\"],\"usphone\":\"æm'bɪʃən\",\"ukphone\":\"æm'bɪʃn\"},{\"name\":\"scholarship\",\"trans\":[\"奖学金； 学问， 学识\"],\"usphone\":\"'skɑlɚʃɪp\",\"ukphone\":\"'skɒləʃɪp\"},{\"name\":\"exceed\",\"trans\":[\"超过， 胜过， 超出\"],\"usphone\":\"ɪk'sid\",\"ukphone\":\"ɪk'siːd\"},{\"name\":\"besides\",\"trans\":[\"而且\",\"除…之外\"],\"usphone\":\"bɪ'saɪdz\",\"ukphone\":\"bɪ'saɪdz\"},{\"name\":\"preposition\",\"trans\":[\"介词\"],\"usphone\":\",prɛpə'zɪʃən\",\"ukphone\":\"ˌprepə'zɪʃn\"},{\"name\":\"enlarge\",\"trans\":[\"扩大， 扩展， 放大\"],\"usphone\":\"ɪn'lɑrdʒ\",\"ukphone\":\"ɪn'lɑːdʒ\"},{\"name\":\"implement\",\"trans\":[\"工具， 器具， 用具\",\"使生效， 履行， 实施\"],\"usphone\":\"'ɪmplɪmɛnt\",\"ukphone\":\"'ɪmplɪm(ə)nt\"},{\"name\":\"export\",\"trans\":[\"输出， 出口\",\"输出， 出口； 输出品， 出口额\"],\"usphone\":\"ˈekspɔːrt；ɪkˈ-\",\"ukphone\":\"ˈekspɔːt；ɪkˈ-\"},{\"name\":\"Christ\",\"trans\":[\"基督， 救世主\"],\"usphone\":\"\",\"ukphone\":\"kraɪst\"},{\"name\":\"murder\",\"trans\":[\"谋杀，凶杀；谋杀罪\",\"谋杀；杀害\"],\"usphone\":\"'mɝdɚ\",\"ukphone\":\"'mɜːdə\"},{\"name\":\"pat\",\"trans\":[\"非常恰当的， 适时的\",\"轻拍\"],\"usphone\":\"pæt\",\"ukphone\":\"pæt\"},{\"name\":\"fantasy\",\"trans\":[\"想象， 幻想； 想象的产物\"],\"usphone\":\"'fæntəsi\",\"ukphone\":\"'fæntəsi\"},{\"name\":\"horsepower\",\"trans\":[\"马力\"],\"usphone\":\"'hɔrs'paʊɚ\",\"ukphone\":\"'hɔːspauə\"},{\"name\":\"visibility\",\"trans\":[\"可见度， 能见度； 可见性， 明显性\"],\"usphone\":\"'vɪzə'bɪləti\",\"ukphone\":\"ˌvɪzə'bɪləti\"},{\"name\":\"invitation\",\"trans\":[\"邀请， 招待； 请柬； 吸引， 诱惑\"],\"usphone\":\"ˌɪnvɪˈteɪʃn\",\"ukphone\":\"ˌɪnvɪ'teɪʃn\"},{\"name\":\"paw\",\"trans\":[\"用爪子抓， 用蹄扒； 翻找\",\"爪子\"],\"usphone\":\"pɔ\",\"ukphone\":\"pɔː\"},{\"name\":\"enormous\",\"trans\":[\"巨大的， 庞大的\"],\"usphone\":\"ɪ'nɔrməs\",\"ukphone\":\"ɪ'nɔːməs\"},{\"name\":\"moisture\",\"trans\":[\"潮湿， 湿气\"],\"usphone\":\"'mɔɪstʃɚ\",\"ukphone\":\"'mɔɪstʃə\"},{\"name\":\"toast\",\"trans\":[\"烤面包；祝酒，祝酒词\",\"烘， 烤； 向…祝酒， 为…干杯\"],\"usphone\":\"tost\",\"ukphone\":\"təust\"},{\"name\":\"frustrate\",\"trans\":[\"使沮丧， 使灰心； 挫败， 使受挫折\"],\"usphone\":\"'frʌstret\",\"ukphone\":\"frʌ'streɪt\"},{\"name\":\"external\",\"trans\":[\"外部的， 外面的\"],\"usphone\":\"ɪk'stɝnl\",\"ukphone\":\"ɪk'stɜːnl\"},{\"name\":\"aside\",\"trans\":[\"在旁边， 到旁边\"],\"usphone\":\"ə'saɪd\",\"ukphone\":\"ə'saɪd\"},{\"name\":\"circumstance\",\"trans\":[\"情况， 条件； 境遇， 境况； 经济情况\"],\"usphone\":\"ˈsɝ​kəmˌstəns\",\"ukphone\":\"'sɜːkəmstəns\"},{\"name\":\"revise\",\"trans\":[\"修订， 修改； 复习\"],\"usphone\":\"rɪ'vaɪz\",\"ukphone\":\"rɪ'vaɪz\"},{\"name\":\"authority\",\"trans\":[\"官方； 权力； 当权者， 行政管理机构； 权威， 专家\"],\"usphone\":\"ə'θɔrəti\",\"ukphone\":\"ɔː'θɒrəti\"},{\"name\":\"creature\",\"trans\":[\"创造物， 产物； 生物， 动物， 家畜\"],\"usphone\":\"'kritʃɚ\",\"ukphone\":\"'kriːtʃə\"},{\"name\":\"harm\",\"trans\":[\"伤害， 损害\"],\"usphone\":\"hɑrm\",\"ukphone\":\"hɑːm\"},{\"name\":\"semiconductor\",\"trans\":[\"半导体\"],\"usphone\":\",sɛmɪkən'dʌktɚ\",\"ukphone\":\"ˌsemikən'dʌktə\"},{\"name\":\"rope\",\"trans\":[\"绳，索\",\"用绳捆\"],\"usphone\":\"rop\",\"ukphone\":\"rəup\"},{\"name\":\"provided\",\"trans\":[\"假如， 若是\"],\"usphone\":\"prə'vaɪdɪd\",\"ukphone\":\"prə'vaɪdɪd\"},{\"name\":\"instrument\",\"trans\":[\"仪器， 工具； 乐器\"],\"usphone\":\"'ɪnstrəmənt\",\"ukphone\":\"'ɪnstrəmənt\"},{\"name\":\"gasoline\",\"trans\":[\"汽油\"],\"usphone\":\"'gæsəlin\",\"ukphone\":\"'gæsəliːn\"},{\"name\":\"indispensable\",\"trans\":[\"必不可少的， 必需的\"],\"usphone\":\"'ɪndɪ'spɛnsəbl\",\"ukphone\":\"ˌɪndɪ'spensəbl\"},{\"name\":\"medium\",\"trans\":[\"中等的\",\"媒体；媒介物，传导体\"],\"usphone\":\"'midɪəm\",\"ukphone\":\"'miːdiəm\"},{\"name\":\"lens\",\"trans\":[\"透镜， 镜片， 镜头\"],\"usphone\":\"lɛnz\",\"ukphone\":\"lenz\"},{\"name\":\"wisdom\",\"trans\":[\"智慧， 才智； 名言\"],\"usphone\":\"'wɪzdəm\",\"ukphone\":\"'wɪzdəm\"},{\"name\":\"fatal\",\"trans\":[\"致命的， 命运的； 重大的， 决定性的\"],\"usphone\":\"'fetl\",\"ukphone\":\"'feɪtl\"},{\"name\":\"nowhere\",\"trans\":[\"任何地方都不\"],\"usphone\":\"'no'wɛr\",\"ukphone\":\"'nəuhweə\"},{\"name\":\"motive\",\"trans\":[\"动机， 目的\"],\"usphone\":\"'motɪv\",\"ukphone\":\"'məutɪv\"},{\"name\":\"romantic\",\"trans\":[\"浪漫的； 多情的； 有浪漫色彩的， 传奇性的； 不切实际的， 空想的\"],\"usphone\":\"ro'mæntɪk\",\"ukphone\":\"rəu'mæntɪk\"},{\"name\":\"motivate\",\"trans\":[\"作为…的动机； 激励， 激发\"],\"usphone\":\"'motə'vet\",\"ukphone\":\"'məutɪveɪt\"},{\"name\":\"spoil\",\"trans\":[\"损坏，糟蹋；宠坏，溺爱；变质\",\"战利品， 掠夺物\"],\"usphone\":\"spɔɪl\",\"ukphone\":\"spɔɪl\"},{\"name\":\"airline\",\"trans\":[\"航空公司； 航线\"],\"usphone\":\"'ɛrlaɪn\",\"ukphone\":\"'eəlaɪn\"},{\"name\":\"multiply\",\"trans\":[\"增加， 繁殖； 乘\"],\"usphone\":\"'mʌltɪplaɪ\",\"ukphone\":\"'mʌltɪplaɪ\"},{\"name\":\"ridge\",\"trans\":[\"脊， 山脊； 垄， 埂， 脊状突起\"],\"usphone\":\"rɪdʒ\",\"ukphone\":\"rɪdʒ\"},{\"name\":\"pilot\",\"trans\":[\"试验性的， 试点的\",\"引航员；飞行员\",\"驾驶；为引航；试验，试用\"],\"usphone\":\"'paɪlət\",\"ukphone\":\"'paɪlət\"},{\"name\":\"umbrella\",\"trans\":[\"伞， 雨伞\"],\"usphone\":\"ʌm'brɛlə\",\"ukphone\":\"ʌm'brelə\"},{\"name\":\"approval\",\"trans\":[\"赞成， 同意， 批准\"],\"usphone\":\"əˈpruvl\",\"ukphone\":\"ə'pruːvl\"},{\"name\":\"mobile\",\"trans\":[\"运动的； 流动的； 多变的\"],\"usphone\":\"ˈməʊbl;mobil\",\"ukphone\":\"'məubaɪl\"},{\"name\":\"perform\",\"trans\":[\"做， 履行， 完成； 表演， 演出； 工作情况， 表现\"],\"usphone\":\"pɚ'fɔrm\",\"ukphone\":\"pə'fɔːm\"},{\"name\":\"multiple\",\"trans\":[\"复合的，多重的，多样的\",\"倍数\"],\"usphone\":\"'mʌltəpl\",\"ukphone\":\"'mʌltɪpl\"},{\"name\":\"peak\",\"trans\":[\"达到高峰， 达到最大值\",\"最大值的，高峰的\",\"山顶，顶点\"],\"usphone\":\"pik\",\"ukphone\":\"piːk\"},{\"name\":\"evolution\",\"trans\":[\"进化， 演化， 发展\"],\"usphone\":\"ˌɛvəˈluʃən; (occas.) ˌ ivəˈluʃən\",\"ukphone\":\"ˌiːvə'luːʃn; ˌevə'luːʃn\"},{\"name\":\"portrait\",\"trans\":[\"肖像， 画像\"],\"usphone\":\"'pɔrtrɪt\",\"ukphone\":\"'pɔːtrət; 'pɔːtreɪt\"},{\"name\":\"halfway\",\"trans\":[\"半路地； 在中途， 在半途\",\"中途的；部分的；不彻底的\"],\"usphone\":\",hæf'we\",\"ukphone\":\"ˌhɑːf'weɪ\"},{\"name\":\"expose\",\"trans\":[\"使接触； 揭露\"],\"usphone\":\"ɪk'spoz；ek-\",\"ukphone\":\"ɪk'spəuz\"},{\"name\":\"concentrate\",\"trans\":[\"全神贯注，全力以赴；集中，聚集；浓缩\",\"浓缩物， 浓缩液\"],\"usphone\":\"'kɑnsn'tret\",\"ukphone\":\"'kɒnsntreɪt\"},{\"name\":\"magnet\",\"trans\":[\"磁铁， 磁体； 有吸引力的人或事物\"],\"usphone\":\"'mægnɪt\",\"ukphone\":\"'mægnət\"},{\"name\":\"explosion\",\"trans\":[\"爆炸， 爆发， 炸裂； 激增， 扩大\"],\"usphone\":\"ɪk'sploʒən\",\"ukphone\":\"ɪk'spləuʒn\"},{\"name\":\"weld\",\"trans\":[\"焊接， 熔接\"],\"usphone\":\"wɛld\",\"ukphone\":\"weld\"},{\"name\":\"up-to-date\",\"trans\":[\"直到最近的， 现代的； 跟上时代的\"],\"usphone\":\"'ʌptə 'det\",\"ukphone\":\"ˌʌptə'deɪt\"},{\"name\":\"complaint\",\"trans\":[\"抱怨， 怨言； 控告\"],\"usphone\":\"kəm'plent\",\"ukphone\":\"kəm'pleɪnt\"},{\"name\":\"translation\",\"trans\":[\"翻译； 译文， 译本\"],\"usphone\":\"træns'leʃən\",\"ukphone\":\"træns'leɪʃn; trænz'leɪʃn\"},{\"name\":\"cancer\",\"trans\":[\"癌， 癌症； 肿瘤\"],\"usphone\":\"'kænsɚ\",\"ukphone\":\"'kænsə\"},{\"name\":\"personnel\",\"trans\":[\"人员， 员工\"],\"usphone\":\",pɝsə'nɛl\",\"ukphone\":\"ˌpɜːsə'nel\"},{\"name\":\"hopeless\",\"trans\":[\"没有希望的， 绝望的\"],\"usphone\":\"ˈhoʊpləs\",\"ukphone\":\"'həupləs\"},{\"name\":\"outlook\",\"trans\":[\"观点， 看法； 展望， 前景\"],\"usphone\":\"'aʊtlʊk\",\"ukphone\":\"'autluk\"},{\"name\":\"fountain\",\"trans\":[\"泉水； 喷泉； 源泉\"],\"usphone\":\"'faʊntn\",\"ukphone\":\"'fauntən\"},{\"name\":\"offense\",\"trans\":[\"犯规， 违法行为； 冒犯， 得罪\"],\"usphone\":\"ə'fɛns\",\"ukphone\":\"ə'fens\"},{\"name\":\"breadth\",\"trans\":[\"宽度； 幅度， 幅面\"],\"usphone\":\"brɛdθ\",\"ukphone\":\"bredθ\"},{\"name\":\"catalog\",\"trans\":[\"目录，目录册；一系列\",\"将…编入目录， 将编目\"],\"usphone\":\"'kætəlɔg\",\"ukphone\":\"'kætəlɒg\"},{\"name\":\"channel\",\"trans\":[\"海峡， 水道， 航道； 渠道， 途径； 频道\"],\"usphone\":\"'tʃænl\",\"ukphone\":\"'tʃænl\"},{\"name\":\"focus\",\"trans\":[\"聚焦；集中\",\"焦点； 中心\"],\"usphone\":\"'fokəs\",\"ukphone\":\"'fəukəs\"},{\"name\":\"invisible\",\"trans\":[\"看不见的， 无形的\"],\"usphone\":\"ɪn'vɪzəbl\",\"ukphone\":\"ɪn'vɪzəbl\"},{\"name\":\"entire\",\"trans\":[\"全部的， 整个的\"],\"usphone\":\"ɪn'taɪɚ\",\"ukphone\":\"ɪn'taɪə\"},{\"name\":\"pea\",\"trans\":[\"豌豆\"],\"usphone\":\"pi\",\"ukphone\":\"piː\"},{\"name\":\"pill\",\"trans\":[\"药丸\"],\"usphone\":\"pɪl\",\"ukphone\":\"pɪl\"},{\"name\":\"wrist\",\"trans\":[\"腕， 腕关节\"],\"usphone\":\"rɪst\",\"ukphone\":\"rɪst\"},{\"name\":\"approach\",\"trans\":[\"向…靠近\",\"靠近\"],\"usphone\":\"ə'protʃ\",\"ukphone\":\"ə'prəutʃ\"},{\"name\":\"myth\",\"trans\":[\"杜撰出来的人； 神话\"],\"usphone\":\"mɪθ\",\"ukphone\":\"mɪθ\"},{\"name\":\"flour\",\"trans\":[\"面粉； 粉， 粉状物质\"],\"usphone\":\"'flaʊr\",\"ukphone\":\"'flauə\"},{\"name\":\"implication\",\"trans\":[\"含意， 暗示， 暗指； 卷入， 牵连\"],\"usphone\":\"'ɪmplɪ'keʃən\",\"ukphone\":\"ˌɪmplɪ'keɪʃn\"},{\"name\":\"camel\",\"trans\":[\"骆驼\"],\"usphone\":\"'kæml\",\"ukphone\":\"'kæml\"},{\"name\":\"fierce\",\"trans\":[\"凶猛的； 狂热的\"],\"usphone\":\"fɪrs\",\"ukphone\":\"fɪəs\"},{\"name\":\"bump\",\"trans\":[\"碰，撞；颠簸着前进\",\"碰撞， 猛撞； 肿块； 隆起物\"],\"usphone\":\"bʌmp\",\"ukphone\":\"bʌmp\"},{\"name\":\"reservation\",\"trans\":[\"预订； 保留； 犹豫； 保留地\"],\"usphone\":\",rɛzɚ'veʃən\",\"ukphone\":\"ˌrezə'veɪʃn\"},{\"name\":\"per\",\"trans\":[\"每， 每一\"],\"usphone\":\"pɚ\",\"ukphone\":\"pə\"},{\"name\":\"proceed\",\"trans\":[\"继续进行； 行进， 前进\"],\"usphone\":\"pro'sid\",\"ukphone\":\"prə'siːd\"},{\"name\":\"considering\",\"trans\":[\"鉴于， 考虑到， 顾及\"],\"usphone\":\"kən'sɪdərɪŋ\",\"ukphone\":\"kən'sɪdərɪŋ\"},{\"name\":\"corporation\",\"trans\":[\"公司， 企业， 社团\"],\"usphone\":\",kɔrpə'reʃən\",\"ukphone\":\"ˌkɔːpə'reɪʃn\"},{\"name\":\"loyalty\",\"trans\":[\"忠诚， 忠心\"],\"usphone\":\"'lɔɪəlti\",\"ukphone\":\"'lɔɪəlti\"},{\"name\":\"bulb\",\"trans\":[\"电灯泡， 球状物\"],\"usphone\":\"bʌlb\",\"ukphone\":\"bʌlb\"},{\"name\":\"dismiss\",\"trans\":[\"不再考虑； 解雇， 解散； 驳回\"],\"usphone\":\"dɪs'mɪs\",\"ukphone\":\"dɪs'mɪs\"},{\"name\":\"propose\",\"trans\":[\"提议， 建议， 提出； 提名， 推荐； 打算， 计划； 求婚\"],\"usphone\":\"prə'poz\",\"ukphone\":\"prə'pəuz\"},{\"name\":\"intelligence\",\"trans\":[\"智力； 理解力； 情报\"],\"usphone\":\"ɪn'tɛlɪdʒəns\",\"ukphone\":\"ɪn'telɪdʒəns\"},{\"name\":\"reform\",\"trans\":[\"改革， 改良， 改造； 改正， 改过自新\"],\"usphone\":\"rɪ'fɔrm\",\"ukphone\":\"rɪ'fɔːm\"},{\"name\":\"draught\",\"trans\":[\"穿堂风，冷风\",\"〔啤酒〕桶装的，散装的\"],\"usphone\":\"drɑft\",\"ukphone\":\"drɑːft\"},{\"name\":\"daylight\",\"trans\":[\"白昼， 日光， 黎明\"],\"usphone\":\"'delaɪt\",\"ukphone\":\"'deɪlaɪt\"},{\"name\":\"install\",\"trans\":[\"安装， 设置； 使就职， 任命\"],\"usphone\":\"ɪn'stɔl\",\"ukphone\":\"ɪn'stɔːl\"},{\"name\":\"integration\",\"trans\":[\"综合\"],\"usphone\":\"'ɪntə'greʃən\",\"ukphone\":\"ˌɪntɪ'greɪʃn\"},{\"name\":\"indication\",\"trans\":[\"指示， 表示， 表明； 象征， 迹象\"],\"usphone\":\",ɪndɪ'keʃən\",\"ukphone\":\"ˌɪndɪ'keɪʃn\"},{\"name\":\"bulk\",\"trans\":[\"变得越来越大； 使更大\",\"物体；体积；大批\"],\"usphone\":\"bʌlk\",\"ukphone\":\"bʌlk\"},{\"name\":\"coach\",\"trans\":[\"长途公共汽车；教练，指导；旅客车厢\",\"训练， 指导， 辅导\"],\"usphone\":\"kotʃ\",\"ukphone\":\"kəutʃ\"},{\"name\":\"despair\",\"trans\":[\"绝望\",\"绝望，感到无望\"],\"usphone\":\"dɪ'spɛr\",\"ukphone\":\"dɪ'speə\"},{\"name\":\"champion\",\"trans\":[\"冠军， 得胜者； 捍卫者， 拥护者\"],\"usphone\":\"'tʃæmpɪən\",\"ukphone\":\"'tʃæmpiən\"},{\"name\":\"gum\",\"trans\":[\"口香糖； 树胶\"],\"usphone\":\"ɡʌm\",\"ukphone\":\"gʌm\"},{\"name\":\"circuit\",\"trans\":[\"电路， 线路； 环行， 巡行\"],\"usphone\":\"'sɝkɪt\",\"ukphone\":\"'sɜːkɪt\"},{\"name\":\"pine\",\"trans\":[\"消瘦， 衰弱； 痛苦， 悲哀； 渴望\",\"松树，松木\"],\"usphone\":\"paɪn\",\"ukphone\":\"paɪn\"},{\"name\":\"magnificent\",\"trans\":[\"宏伟的， 壮丽的； 华丽的； 极好的\"],\"usphone\":\"mæg'nɪfəsnt\",\"ukphone\":\"mæg'nɪfɪsnt\"},{\"name\":\"guy\",\"trans\":[\"家伙， 伙计\"],\"usphone\":\"\",\"ukphone\":\"gaɪ\"},{\"name\":\"respectively\",\"trans\":[\"各自地， 各个地， 分别地\"],\"usphone\":\"rɪ'spɛktɪvli\",\"ukphone\":\"rɪ'spektɪvli\"},{\"name\":\"protection\",\"trans\":[\"保护， 防护\"],\"usphone\":\"prə'tɛkʃən\",\"ukphone\":\"prə'tekʃn\"},{\"name\":\"pint\",\"trans\":[\"品脱\"],\"usphone\":\"paɪnt\",\"ukphone\":\"paɪnt\"},{\"name\":\"restrict\",\"trans\":[\"限制， 约束， 限定\"],\"usphone\":\"rɪ'strɪkt\",\"ukphone\":\"rɪ'strɪkt\"},{\"name\":\"instant\",\"trans\":[\"立即的； 紧急的； 可以速食的\",\"瞬间\"],\"usphone\":\"'ɪnstənt\",\"ukphone\":\"'ɪnstənt\"},{\"name\":\"conjunction\",\"trans\":[\"接合， 连接， 联合； 连词\"],\"usphone\":\"kən'dʒʌŋkʃən\",\"ukphone\":\"kən'dʒʌŋkʃn\"},{\"name\":\"peer\",\"trans\":[\"仔细看， 费力地看\",\"同龄人，同等地位的人；贵族\"],\"usphone\":\"pɪr\",\"ukphone\":\"pɪə\"},{\"name\":\"orderly\",\"trans\":[\"整洁的； 有秩序的\"],\"usphone\":\"'ɔrdɚli\",\"ukphone\":\"'ɔːdəli\"},{\"name\":\"costly\",\"trans\":[\"昂贵的， 价值高的\"],\"usphone\":\"'kɔstli\",\"ukphone\":\"'kɒstli\"},{\"name\":\"roast\",\"trans\":[\"烤，炙，烘\",\"烤过的， 烘过的\",\"烤肉\"],\"usphone\":\"rost\",\"ukphone\":\"rəust\"},{\"name\":\"violence\",\"trans\":[\"猛烈， 激烈； 暴力\"],\"usphone\":\"'vaɪələns\",\"ukphone\":\"'vaɪələns\"},{\"name\":\"succession\",\"trans\":[\"连续； 一连串； 接替， 继任， 继承\"],\"usphone\":\"sək'sɛʃən\",\"ukphone\":\"sək'seʃn\"},{\"name\":\"accordingly\",\"trans\":[\"因此， 所以； 照着\"],\"usphone\":\"ə'kɔrdɪŋli\",\"ukphone\":\"ə'kɔːdɪŋli\"},{\"name\":\"consequence\",\"trans\":[\"结果， 后果； 重要， 重大\"],\"usphone\":\"'kɑnsəkwɛns\",\"ukphone\":\"'kɒnsɪkwəns\"},{\"name\":\"product\",\"trans\":[\"产品， 产物； 乘积\"],\"usphone\":\"'prɑdʌkt\",\"ukphone\":\"'prɔdʌkt; 'prɔdəkt\"},{\"name\":\"particularly\",\"trans\":[\"特别， 尤其\"],\"usphone\":\"pɚ'tɪkjəlɚlɪ\",\"ukphone\":\"pə'tɪkjələli\"},{\"name\":\"dominant\",\"trans\":[\"占优势的， 支配的， 统治的； 居高临下的， 高耸的\"],\"usphone\":\"'dɑmɪnənt\",\"ukphone\":\"'dɒmɪnənt\"},{\"name\":\"heading\",\"trans\":[\"标题， 题词， 题名； 新闻提要\"],\"usphone\":\"'hɛdɪŋ\",\"ukphone\":\"'hedɪŋ\"},{\"name\":\"lover\",\"trans\":[\"爱好者； 情人\"],\"usphone\":\"'lʌvɚ\",\"ukphone\":\"'lʌvə\"},{\"name\":\"vinegar\",\"trans\":[\"醋\"],\"usphone\":\"'vɪnɪɡɚ\",\"ukphone\":\"'vɪnɪgə\"},{\"name\":\"intellectual\",\"trans\":[\"智力的\",\"知识分子\"],\"usphone\":\",ɪntə'lɛktʃuəl\",\"ukphone\":\"ˌɪntə'lektʃuəl\"},{\"name\":\"cheat\",\"trans\":[\"欺骗；作弊；哄，行骗\",\"欺骗， 欺骗行为； 骗子\"],\"usphone\":\"tʃit\",\"ukphone\":\"tʃiːt\"},{\"name\":\"framework\",\"trans\":[\"框架， 结构； 准则； 体系\"],\"usphone\":\"'fremwɝk\",\"ukphone\":\"'freɪmwɜːk\"},{\"name\":\"undoubtedly\",\"trans\":[\"毋庸置疑地， 肯定地\"],\"usphone\":\"ʌn'daʊtɪdli\",\"ukphone\":\"ˌʌn'dautɪdli\"},{\"name\":\"infect\",\"trans\":[\"传染， 感染； 影响\"],\"usphone\":\"ɪn'fɛkt\",\"ukphone\":\"ɪn'fekt\"},{\"name\":\"tide\",\"trans\":[\"潮， 潮汐； 潮流， 趋势\"],\"usphone\":\"taɪd\",\"ukphone\":\"taɪd\"},{\"name\":\"prohibit\",\"trans\":[\"禁止， 不准\"],\"usphone\":\"prə'hɪbɪt\",\"ukphone\":\"prə'hɪbɪt\"},{\"name\":\"bacteria\",\"trans\":[\"细菌\"],\"usphone\":\"bæk'tɪrɪə\",\"ukphone\":\"bæk'tɪəriə\"},{\"name\":\"minor\",\"trans\":[\"辅修\",\"较小的，较少的；次要的\",\"未成年人；辅修科目\"],\"usphone\":\"'maɪnɚ\",\"ukphone\":\"'maɪnə\"},{\"name\":\"arrow\",\"trans\":[\"箭， 箭状物； 箭头符号\"],\"usphone\":\"'æro\",\"ukphone\":\"'ærəu\"},{\"name\":\"cop\",\"trans\":[\"警察\"],\"usphone\":\"kɑp\",\"ukphone\":\"kɒp\"},{\"name\":\"fuel\",\"trans\":[\"加燃料； 加油\",\"燃料，燃料剂\",\"给…加燃料；刺激\"],\"usphone\":\"'fjuəl\",\"ukphone\":\"'fjuːəl\"},{\"name\":\"hostile\",\"trans\":[\"敌方的； 不友善的\"],\"usphone\":\"ˈhɑstl\",\"ukphone\":\"'hɒstaɪl\"},{\"name\":\"aeroplane\",\"trans\":[\"飞机\"],\"usphone\":\"ˈɛrəˌplen\",\"ukphone\":\"'eərəpleɪn\"},{\"name\":\"manner\",\"trans\":[\"方式； 态度； 风度； 礼貌， 规矩\"],\"usphone\":\"'mænɚ\",\"ukphone\":\"'mænə\"},{\"name\":\"employee\",\"trans\":[\"受雇者， 雇员， 雇工\"],\"usphone\":\"ɪmˈplɔɪi;ɛmplɔɪˈi\",\"ukphone\":\"ɪm'plɔɪɪː\"},{\"name\":\"associate\",\"trans\":[\"结合； 交往\",\"副的\",\"把…联系在一起；使联合\",\"伙伴，同事\"],\"usphone\":\"ə'soʃɪet\",\"ukphone\":\"ə'səʊʃɪeɪt; -sɪeɪt\"},{\"name\":\"pray\",\"trans\":[\"祈祷， 祈求； 请求， 恳求\"],\"usphone\":\"pre\",\"ukphone\":\"preɪ\"},{\"name\":\"lad\",\"trans\":[\"男孩， 小伙子\"],\"usphone\":\"læd\",\"ukphone\":\"læd\"},{\"name\":\"crawl\",\"trans\":[\"爬， 爬行； 缓慢地行进\"],\"usphone\":\"krɔl\",\"ukphone\":\"krɔːl\"},{\"name\":\"identical\",\"trans\":[\"完全相同的， 同一的\"],\"usphone\":\"aɪ'dɛntɪkl\",\"ukphone\":\"aɪ'dentɪkl\"},{\"name\":\"lag\",\"trans\":[\"走得慢\",\"落后\"],\"usphone\":\"læɡ\",\"ukphone\":\"læg\"},{\"name\":\"towel\",\"trans\":[\"毛巾， 手巾\"],\"usphone\":\"'taʊəl\",\"ukphone\":\"'tauəl\"},{\"name\":\"charity\",\"trans\":[\"救济金， 施舍物； 慈善团体， 慈善事业； 宽大， 宽容\"],\"usphone\":\"'tʃærəti\",\"ukphone\":\"'tʃærəti\"},{\"name\":\"academic\",\"trans\":[\"学院的； 学术的； 纯理论的， 不切实际的\"],\"usphone\":\",ækə'dɛmɪk\",\"ukphone\":\"ˌækə'demɪk\"},{\"name\":\"function\",\"trans\":[\"运作， 运行\",\"功能；职务，职责\"],\"usphone\":\"'fʌŋkʃən\",\"ukphone\":\"'fʌŋkʃn\"},{\"name\":\"employer\",\"trans\":[\"雇佣者， 雇主\"],\"usphone\":\"ɪm'plɔɪɚ\",\"ukphone\":\"ɪm'plɔɪə\"},{\"name\":\"pit\",\"trans\":[\"地洞，坑；煤矿，矿井\",\"使有坑\"],\"usphone\":\"pɪt\",\"ukphone\":\"pɪt\"},{\"name\":\"lap\",\"trans\":[\"舔； 拍打\",\"膝部；一圈，一段\"],\"usphone\":\"læp\",\"ukphone\":\"læp\"},{\"name\":\"mineral\",\"trans\":[\"矿物， 矿石， 矿物质\"],\"usphone\":\"'mɪnərəl\",\"ukphone\":\"'mɪnərəl\"},{\"name\":\"stock\",\"trans\":[\"常用的， 常备的\",\"原料，库存品；股本，公债；世系，血统；汤汁；家畜，牲畜\",\"储备\"],\"usphone\":\"stɑk\",\"ukphone\":\"stɒk\"},{\"name\":\"representative\",\"trans\":[\"有代表性的， 典型的\",\"代表，代理人\"],\"usphone\":\"'rɛprɪ'zɛntətɪv\",\"ukphone\":\"ˌreprɪ'zentətɪv\"},{\"name\":\"suspend\",\"trans\":[\"暂停， 终止； 吊， 悬\"],\"usphone\":\"sə'spɛnd\",\"ukphone\":\"sə'spend\"},{\"name\":\"pigeon\",\"trans\":[\"鸽子\"],\"usphone\":\"'pɪdʒɪn\",\"ukphone\":\"'pɪdʒɪn\"},{\"name\":\"well-known\",\"trans\":[\"众所周知的， 著名的\"],\"usphone\":\",wɛl'non\",\"ukphone\":\"ˌwel'nəun\"},{\"name\":\"beneath\",\"trans\":[\"在下方， 在底下\",\"在…下方；低于，次于；在…掩盖下；连…也不值得，有失…的身份\"],\"usphone\":\"bɪˈniːθ\",\"ukphone\":\"bɪ'niːθ\"},{\"name\":\"terror\",\"trans\":[\"恐怖， 惊骇； 引起恐怖的人或事\"],\"usphone\":\"'tɛrɚ\",\"ukphone\":\"'terə\"},{\"name\":\"comparison\",\"trans\":[\"比较， 对照； 比拟， 比喻\"],\"usphone\":\"kəm'pærɪsn\",\"ukphone\":\"kəm'pærɪsn\"},{\"name\":\"surge\",\"trans\":[\"蜂拥而出；洋溢，奔放；汹涌，奔腾\",\"大浪， 波涛； 高涨； 汹涌\"],\"usphone\":\"sɝdʒ\",\"ukphone\":\"sɜːdʒ\"},{\"name\":\"lest\",\"trans\":[\"唯恐， 以免\"],\"usphone\":\"lɛst\",\"ukphone\":\"lest\"},{\"name\":\"heroic\",\"trans\":[\"英雄的； 英勇的\"],\"usphone\":\"hə'roɪk\",\"ukphone\":\"hə'rəuik\"},{\"name\":\"sway\",\"trans\":[\"摇，摇动；动摇\",\"摇摆， 摇动； 起支配作用的影响\"],\"usphone\":\"swe\",\"ukphone\":\"sweɪ\"},{\"name\":\"basis\",\"trans\":[\"基础， 根据； 原则\"],\"usphone\":\"'besɪs\",\"ukphone\":\"'beɪsɪs\"},{\"name\":\"tutor\",\"trans\":[\"当…导师， 当…家庭教师\",\"导师；家庭教师，私人教师\"],\"usphone\":\"'tʊtɚ\",\"ukphone\":\"'tjuːtə\"},{\"name\":\"senator\",\"trans\":[\"参议员\"],\"usphone\":\"'sɛnətɚ\",\"ukphone\":\"'senətə\"},{\"name\":\"adventure\",\"trans\":[\"奇遇； 冒险， 冒险活动\"],\"usphone\":\"əd'vɛntʃɚ\",\"ukphone\":\"əd'ventʃə\"},{\"name\":\"successive\",\"trans\":[\"连续的， 接连的\"],\"usphone\":\"sək'sɛsɪv\",\"ukphone\":\"sək'sesɪv\"},{\"name\":\"condition\",\"trans\":[\"状况， 状态； 环境\"],\"usphone\":\"kən'dɪʃən\",\"ukphone\":\"kən'dɪʃn\"},{\"name\":\"thirsty\",\"trans\":[\"渴的； 渴望的\"],\"usphone\":\"'θɝsti\",\"ukphone\":\"'θɜːsti\"},{\"name\":\"ceremony\",\"trans\":[\"典礼， 仪式， 礼节\"],\"usphone\":\"ˈsɛrəˌmoʊni\",\"ukphone\":\"'serəməni\"},{\"name\":\"obligation\",\"trans\":[\"义务， 责任\"],\"usphone\":\",ɑblɪ'ɡeʃən\",\"ukphone\":\"ˌɒblɪ'geɪʃn\"},{\"name\":\"improve\",\"trans\":[\"变得更好； 改善； 提高\"],\"usphone\":\"ɪm'pruv\",\"ukphone\":\"ɪm'pruːv\"},{\"name\":\"gym\",\"trans\":[\"体育馆； 健身房\"],\"usphone\":\"dʒɪm\",\"ukphone\":\"dʒɪm\"},{\"name\":\"rarely\",\"trans\":[\"很少， 难得\"],\"usphone\":\"'rɛrli\",\"ukphone\":\"'reəli\"},{\"name\":\"evil\",\"trans\":[\"坏的\",\"邪恶，祸害\"],\"usphone\":\"'ivl\",\"ukphone\":\"'iːvl\"},{\"name\":\"governor\",\"trans\":[\"州长； 主管人员； 理事， 董事\"],\"usphone\":\"'ɡʌvɚnɚ\",\"ukphone\":\"'gʌvənə\"},{\"name\":\"twist\",\"trans\":[\"缠绕，盘绕；转动，旋动；捻，搓；歪曲，曲解；扭歪，扭伤；曲折前进；转身\",\"扭弯； 转折， 转变； 弯曲， 曲折处\"],\"usphone\":\"twɪst\",\"ukphone\":\"twɪst\"},{\"name\":\"locate\",\"trans\":[\"探明， 找出； 把…设置在， 使…坐落于\"],\"usphone\":\"ˈloˌket; loˈket\",\"ukphone\":\"ləu'keɪt\"},{\"name\":\"unite\",\"trans\":[\"联合， 统一\"],\"usphone\":\"ju'naɪt\",\"ukphone\":\"ju'naɪt\"},{\"name\":\"lavatory\",\"trans\":[\"盥洗室， 厕所\"],\"usphone\":\"'lævətɔri\",\"ukphone\":\"'lævətri\"},{\"name\":\"exterior\",\"trans\":[\"外部的；对外的\",\"外部， 外表\"],\"usphone\":\"ɪk'stɪrɪɚ\",\"ukphone\":\"ɪk'stɪəriə\"},{\"name\":\"technique\",\"trans\":[\"技术， 技巧， 技能\"],\"usphone\":\"tɛk'nik\",\"ukphone\":\"tek'niːk\"},{\"name\":\"combat\",\"trans\":[\"战争，斗争，格斗\",\"与…斗争， 与…战斗\"],\"usphone\":\"'kɑmbæt\",\"ukphone\":\"'kɒmbæt\"},{\"name\":\"troop\",\"trans\":[\"成群结队而行\",\"军队，部队；一群，大量\"],\"usphone\":\"trʊp\",\"ukphone\":\"truːp\"},{\"name\":\"scenery\",\"trans\":[\"风景， 景色； 舞台布景\"],\"usphone\":\"'sinəri\",\"ukphone\":\"'siːnəri\"},{\"name\":\"unity\",\"trans\":[\"单一， 统一， 团结； 和睦， 协调\"],\"usphone\":\"'junəti\",\"ukphone\":\"'juːnəti\"},{\"name\":\"effective\",\"trans\":[\"有效的； 有影响的\"],\"usphone\":\"ɪ'fɛktɪv\",\"ukphone\":\"ɪ'fektɪv\"},{\"name\":\"pursue\",\"trans\":[\"继续； 从事； 追赶， 追踪； 追求\"],\"usphone\":\"pə'sʊ\",\"ukphone\":\"pə'sjuː\"},{\"name\":\"similarly\",\"trans\":[\"类似地， 相似地\"],\"usphone\":\"'sɪməlɚli\",\"ukphone\":\"'sɪmələli\"},{\"name\":\"convey\",\"trans\":[\"表达， 传递； 运送， 输送\"],\"usphone\":\"kən've\",\"ukphone\":\"kən'veɪ\"},{\"name\":\"muscle\",\"trans\":[\"肌肉， 体力； 力量， 实力\"],\"usphone\":\"'mʌsl\",\"ukphone\":\"'mʌsl\"},{\"name\":\"design\",\"trans\":[\"设计；预定，指定\",\"设计， 构想； 图样； 企图\"],\"usphone\":\"dɪ'zaɪn\",\"ukphone\":\"dɪ'zaɪn\"},{\"name\":\"extra\",\"trans\":[\"特别地\",\"额外的；特别的\",\"额外的事物， 额外费用\"],\"usphone\":\"'ɛkstrə\",\"ukphone\":\"'ekstrə\"},{\"name\":\"generous\",\"trans\":[\"慷慨的； 宽厚的； 大量的\"],\"usphone\":\"'dʒɛnərəs\",\"ukphone\":\"'dʒenərəs\"},{\"name\":\"victim\",\"trans\":[\"牺牲者， 受害者\"],\"usphone\":\"'vɪktɪm\",\"ukphone\":\"'vɪktɪm\"},{\"name\":\"possibility\",\"trans\":[\"可能； 可能的事\"],\"usphone\":\",pɑsə'bɪləti\",\"ukphone\":\"ˌpɒsə'bɪləti\"},{\"name\":\"lane\",\"trans\":[\"小路； 跑道； 航道， 航线\"],\"usphone\":\"len\",\"ukphone\":\"leɪn\"},{\"name\":\"garlic\",\"trans\":[\"大蒜\"],\"usphone\":\"'ɡɑrlɪk\",\"ukphone\":\"'gɑːlɪk\"},{\"name\":\"chief\",\"trans\":[\"主要的，为首的；总的\",\"首领， 长官； 酋长， 族长\"],\"usphone\":\"tʃif\",\"ukphone\":\"tʃiːf\"},{\"name\":\"accord\",\"trans\":[\"相符合； 相一致\",\"一致，符合；谅解，协议\",\"使符合；使一致；调节；授予，赠与，给予\"],\"usphone\":\"ə'kɔrd\",\"ukphone\":\"ə'kɔːd\"},{\"name\":\"aircraft\",\"trans\":[\"飞机， 飞行器\"],\"usphone\":\"'ɛr'kræft\",\"ukphone\":\"'eəkrɑːft\"},{\"name\":\"automatic\",\"trans\":[\"自动的，机械的；不假思索的，无意识的；必然的，自然的\",\"自动手枪； 有自动装置的汽车\"],\"usphone\":\"'ɔtə'mætɪk\",\"ukphone\":\"ˌɔːtə'mætɪk\"},{\"name\":\"doubtful\",\"trans\":[\"难以预测的； 怀疑的\"],\"usphone\":\"'daʊtfəl\",\"ukphone\":\"'dautfl\"},{\"name\":\"despite\",\"trans\":[\"不管， 不顾\"],\"usphone\":\"dɪ'spaɪt\",\"ukphone\":\"dɪ'spaɪt\"},{\"name\":\"opening\",\"trans\":[\"开首的，开始的\",\"口子， 洞， 孔； 开始； 空缺\"],\"usphone\":\"'opənɪŋ\",\"ukphone\":\"'əupnɪŋ\"},{\"name\":\"industrial\",\"trans\":[\"工业的， 产业的\"],\"usphone\":\"ɪn'dʌstrɪəl\",\"ukphone\":\"ɪn'dʌstriəl\"},{\"name\":\"obey\",\"trans\":[\"顺从， 服从\"],\"usphone\":\"ə'be\",\"ukphone\":\"ə'beɪ\"},{\"name\":\"conduct\",\"trans\":[\"举止， 行为； 指导； 管理； 实施\",\"进行； 管理， 指挥， 引导； 传输， 传导\"],\"usphone\":\"kən'dʌkt\",\"ukphone\":\"'kɒndʌkt\"},{\"name\":\"stable\",\"trans\":[\"稳定的，不变的；沉稳的，持重的\",\"厩， 马厩， 牛棚\"],\"usphone\":\"'stebl\",\"ukphone\":\"'steɪbl\"},{\"name\":\"lamb\",\"trans\":[\"羔羊， 小羊； 羔羊肉\"],\"usphone\":\"læm\",\"ukphone\":\"læm\"},{\"name\":\"pillow\",\"trans\":[\"枕头\"],\"usphone\":\"'pɪlo\",\"ukphone\":\"'pɪləu\"},{\"name\":\"harness\",\"trans\":[\"治理；给上挽具\",\"马具， 挽具\"],\"usphone\":\"'hɑrnɪs\",\"ukphone\":\"'hɑːnɪs\"},{\"name\":\"fantastic\",\"trans\":[\"极好的， 极出色的， 了不起的； 极大的； 难以相信的； 异想天开的， 不实际的； 奇异的， 古怪的\"],\"usphone\":\"fæn'tæstɪk\",\"ukphone\":\"fæn'tæstɪk\"},{\"name\":\"sketch\",\"trans\":[\"绘…的略图， 画…的素描； 概述\",\"略图；梗概；素描，速写\"],\"usphone\":\"skɛtʃ\",\"ukphone\":\"sketʃ\"},{\"name\":\"tidy\",\"trans\":[\"整洁的，整齐的\",\"整洁， 整齐\"],\"usphone\":\"'taɪdi\",\"ukphone\":\"'taɪdi\"},{\"name\":\"respond\",\"trans\":[\"回答， 答复； 作出反应， 响应\"],\"usphone\":\"rɪ'spɑnd\",\"ukphone\":\"rɪ'spɒnd\"},{\"name\":\"incident\",\"trans\":[\"发生的事， 事件\"],\"usphone\":\"'ɪnsɪdənt\",\"ukphone\":\"'ɪnsɪdənt\"},{\"name\":\"maintenance\",\"trans\":[\"维持； 保养； 抚养费\"],\"usphone\":\"'mentənəns\",\"ukphone\":\"'meɪntənəns\"},{\"name\":\"marry\",\"trans\":[\"娶， 嫁； 为…证婚； 结婚， 结合\"],\"usphone\":\"'mæri\",\"ukphone\":\"'mæri\"},{\"name\":\"decay\",\"trans\":[\"腐烂；衰败\",\"腐烂\"],\"usphone\":\"dɪ'ke\",\"ukphone\":\"dɪ'keɪ\"},{\"name\":\"absorb\",\"trans\":[\"吸收； 吸引…的注意， 使全神贯注； 把…并入， 同化\"],\"usphone\":\"æbˈsɔrb; æbˈzɔrb; əbˈsɔrb\",\"ukphone\":\"əb'sɔːb; əb'zɔːb\"},{\"name\":\"supply\",\"trans\":[\"供给， 供应\"],\"usphone\":\"sə'plaɪ\",\"ukphone\":\"sə'plaɪ\"},{\"name\":\"concern\",\"trans\":[\"关切的事，有关的事；关心，挂念；关系，关联；公司，企业\",\"涉及， 有关； 使关心， 使担心\"],\"usphone\":\"kən'sɝn\",\"ukphone\":\"kən'sɜːn\"},{\"name\":\"circulate\",\"trans\":[\"循环， 流通； 流传， 散布， 传播\"],\"usphone\":\"'sɝkjəlet\",\"ukphone\":\"'sɜːkjəleɪt\"},{\"name\":\"liberty\",\"trans\":[\"自由； 许可， 准许； 过于随便， 放肆\"],\"usphone\":\"'lɪbɚti\",\"ukphone\":\"'lɪbəti\"},{\"name\":\"liable\",\"trans\":[\"易于…的； 可能的\"],\"usphone\":\"'laɪəbl\",\"ukphone\":\"'laɪəbl\"},{\"name\":\"cargo\",\"trans\":[\"船货， 货物\"],\"usphone\":\"'kɑrɡo\",\"ukphone\":\"'kɑːgəu\"},{\"name\":\"confidential\",\"trans\":[\"秘密的， 机密的； 亲信的\"],\"usphone\":\",kɑnfɪ'dɛnʃl\",\"ukphone\":\"ˌkɒnfɪ'denʃl\"},{\"name\":\"drift\",\"trans\":[\"漂流，漂泊\",\"漂流； 大意， 主旨； 趋势\"],\"usphone\":\"drɪft\",\"ukphone\":\"drɪft\"},{\"name\":\"element\",\"trans\":[\"成分， 要素， 元素； 基础， 纲要； 自然力\"],\"usphone\":\"'ɛləmənt\",\"ukphone\":\"'elɪmənt\"},{\"name\":\"chaos\",\"trans\":[\"混乱， 紊乱\"],\"usphone\":\"'keɑs\",\"ukphone\":\"'keɪɒs\"},{\"name\":\"mankind\",\"trans\":[\"人类\"],\"usphone\":\"mæn'kaɪnd\",\"ukphone\":\"ˌmæn'kaɪnd\"},{\"name\":\"abundant\",\"trans\":[\"丰富的， 富裕的； 大量的， 充足的\"],\"usphone\":\"ə'bʌndənt\",\"ukphone\":\"ə'bʌndənt\"},{\"name\":\"pace\",\"trans\":[\"踱步\",\"步，步速；速度；节奏\"],\"usphone\":\"pes\",\"ukphone\":\"peɪs\"},{\"name\":\"exclaim\",\"trans\":[\"呼喊， 惊叫\"],\"usphone\":\"ɪk'sklem\",\"ukphone\":\"ɪk'skleɪm\"},{\"name\":\"probable\",\"trans\":[\"很可能的， 大概的\"],\"usphone\":\"'prɑbəbl\",\"ukphone\":\"'prɒbəbl\"},{\"name\":\"forecast\",\"trans\":[\"预测， 预报\",\"预测，预报\"],\"usphone\":\"'fɔrkæst\",\"ukphone\":\"'fɔːkɑːst\"},{\"name\":\"uncover\",\"trans\":[\"揭露， 暴露； 揭开…的盖子\"],\"usphone\":\"ʌn'kʌvɚ\",\"ukphone\":\"ʌn'kʌvə\"},{\"name\":\"recognize\",\"trans\":[\"认出， 识别； 承认； 赏识， 表彰， 报偿\"],\"usphone\":\"ˈrɛkəɡˌnaɪz\",\"ukphone\":\"'rekəgnaɪz\"},{\"name\":\"pack\",\"trans\":[\"捆扎，把…打包；使挤在一起，塞满\",\"包， 小盒\"],\"usphone\":\"pæk\",\"ukphone\":\"pæk\"},{\"name\":\"restraint\",\"trans\":[\"抑制， 限制， 克制； 约束措施， 约束条件\"],\"usphone\":\"rɪ'strent\",\"ukphone\":\"rɪ'streɪnt\"},{\"name\":\"input\",\"trans\":[\"输入；投入的资金；输入的数据\",\"把…输入计算机\"],\"usphone\":\"'ɪn'pʊt\",\"ukphone\":\"'ɪnput\"},{\"name\":\"cue\",\"trans\":[\"暗示，信号；提示\",\"提示； 暗示\"],\"usphone\":\"kju\",\"ukphone\":\"kjuː\"},{\"name\":\"volt\",\"trans\":[\"伏特， 伏\"],\"usphone\":\"volt\",\"ukphone\":\"vəult\"},{\"name\":\"reality\",\"trans\":[\"现实， 实际； 真实\"],\"usphone\":\"rɪ'æləti\",\"ukphone\":\"ri'æləti\"},{\"name\":\"stereotype\",\"trans\":[\"陈规，老套，固定的模式；铅版\",\"把…浇铸成铅版； 对…形成固定看法\"],\"usphone\":\"'stɛrɪətaɪp\",\"ukphone\":\"'steriətaɪp\"},{\"name\":\"enroll\",\"trans\":[\"入学，加入\",\"招收， 吸收\"],\"usphone\":\"ɪn'rol\",\"ukphone\":\"ɪn'rəul\"},{\"name\":\"offend\",\"trans\":[\"冒犯， 伤害…的感情； 使厌恶； 违反\"],\"usphone\":\"ə'fɛnd\",\"ukphone\":\"ə'fend\"},{\"name\":\"molecule\",\"trans\":[\"分子\"],\"usphone\":\"'mɑlɪkjul\",\"ukphone\":\"'mɒlɪkjuːl\"},{\"name\":\"resign\",\"trans\":[\"辞职\",\"辞去， 放弃； 使听从， 使顺从\"],\"usphone\":\"rɪ'zaɪn\",\"ukphone\":\"rɪ'zaɪn\"},{\"name\":\"bathe\",\"trans\":[\"洗澡； 游泳\"],\"usphone\":\"beð\",\"ukphone\":\"beɪð\"},{\"name\":\"workman\",\"trans\":[\"工人， 劳动者， 工匠\"],\"usphone\":\"'wɝkmən\",\"ukphone\":\"'wɜːkmən\"},{\"name\":\"sophisticated\",\"trans\":[\"老于世故的； 高级的； 精密的， 复杂的； 高雅的\"],\"usphone\":\"sə'fɪstɪketɪd\",\"ukphone\":\"sə'fɪstɪkeɪtɪd\"},{\"name\":\"sunrise\",\"trans\":[\"日出； 朝霞\"],\"usphone\":\"'sʌnraɪz\",\"ukphone\":\"'sʌnraɪz\"},{\"name\":\"entertainment\",\"trans\":[\"娱乐， 文娱节目， 表演会； 招待， 款待， 请客\"],\"usphone\":\"ˌɛntɚ'tenmənt\",\"ukphone\":\"ˌentə'teɪnmənt\"},{\"name\":\"document\",\"trans\":[\"公文，文件；证件\",\"用文件等证明\"],\"usphone\":\"dɑkjəmənt\",\"ukphone\":\"'dɒkjumənt\"},{\"name\":\"starve\",\"trans\":[\"挨饿， 饿死\"],\"usphone\":\"stɑrv\",\"ukphone\":\"stɑːv\"},{\"name\":\"battery\",\"trans\":[\"电池， 蓄电池； 排炮， 炮组； 一系列， 一套\"],\"usphone\":\"'bæt(ə)rɪ\",\"ukphone\":\"'bætri\"},{\"name\":\"chase\",\"trans\":[\"追逐， 追赶； 追求\"],\"usphone\":\"\",\"ukphone\":\"tʃeɪs\"},{\"name\":\"accident\",\"trans\":[\"意外， 事故\"],\"usphone\":\"'æksədənt\",\"ukphone\":\"'æksɪdənt\"},{\"name\":\"marine\",\"trans\":[\"海的， 海生的； 海事的， 海军的， 海运的\",\"海军陆战队士兵\"],\"usphone\":\"mə'rin\",\"ukphone\":\"mə'riːn\"},{\"name\":\"clay\",\"trans\":[\"黏土， 泥土； 肉体\"],\"usphone\":\"kle\",\"ukphone\":\"kleɪ\"},{\"name\":\"anyway\",\"trans\":[\"无论如何， 至少； 不论以何种方式， 无论从什么角度\"],\"usphone\":\"'ɛnɪ'we\",\"ukphone\":\"'eniweɪ\"},{\"name\":\"promote\",\"trans\":[\"促进， 增进， 发扬； 提升； 宣传， 推销\"],\"usphone\":\"prə'mot\",\"ukphone\":\"prə'məut\"},{\"name\":\"routine\",\"trans\":[\"例行的， 常规的\",\"例行公事，惯例，惯常的程序\"],\"usphone\":\"rʊ'tin\",\"ukphone\":\"ruː'tiːn\"},{\"name\":\"attack\",\"trans\":[\"攻击，打击；突然发作\",\"攻击， 进攻\"],\"usphone\":\"ə'tæk\",\"ukphone\":\"ə'tæk\"},{\"name\":\"humour\",\"trans\":[\"幽默， 诙谐， 幽默感\"],\"usphone\":\"'hju:mə\",\"ukphone\":\"'hjuːmə\"},{\"name\":\"divorce\",\"trans\":[\"离婚； 分离， 脱离\",\"离婚，离异\"],\"usphone\":\"dɪ'vɔrs\",\"ukphone\":\"dɪ'vɔːs\"},{\"name\":\"currency\",\"trans\":[\"通货， 货币； 通行， 流行\"],\"usphone\":\"ˈkɜrənsi\",\"ukphone\":\"'kʌrənsi\"},{\"name\":\"canal\",\"trans\":[\"运河， 沟渠； 管\"],\"usphone\":\"kə'næl\",\"ukphone\":\"kə'næl\"},{\"name\":\"attach\",\"trans\":[\"缚， 系， 贴； 附加； 使依恋， 使喜爱； 使附属； 认为有\"],\"usphone\":\"ə'tætʃ\",\"ukphone\":\"ə'tætʃ\"},{\"name\":\"distribute\",\"trans\":[\"分发， 分送； 分布\"],\"usphone\":\"dɪ'strɪbjut\",\"ukphone\":\"dɪ'strɪbjuːt; 'dɪstrɪbjuːt\"},{\"name\":\"ankle\",\"trans\":[\"踝， 踝关节\"],\"usphone\":\"'æŋkl\",\"ukphone\":\"'æŋkl\"},{\"name\":\"convict\",\"trans\":[\"证明…有罪， 宣判…有罪\",\"囚犯\"],\"usphone\":\"kən'vɪkt\",\"ukphone\":\"kən'vɪkt\"},{\"name\":\"legislation\",\"trans\":[\"法律， 法规； 立法， 法律的制定\"],\"usphone\":\",lɛdʒɪs'leʃən\",\"ukphone\":\"ˌledʒɪs'leɪʃn\"},{\"name\":\"clause\",\"trans\":[\"条款； 从句， 分句\"],\"usphone\":\"klɔz\",\"ukphone\":\"klɔːz\"},{\"name\":\"quiz\",\"trans\":[\"智力竞赛，问答比赛；小测验\",\"考查， 盘问\"],\"usphone\":\"kwɪz\",\"ukphone\":\"kwɪz\"},{\"name\":\"participate\",\"trans\":[\"参与， 参加； 分享\"],\"usphone\":\"pɑr'tɪsə'pet\",\"ukphone\":\"pɑː'tɪsɪpeɪt\"},{\"name\":\"ingredient\",\"trans\":[\"组成部分， 成分； 原料； 要素， 因素\"],\"usphone\":\"ɪn'ɡridɪənt\",\"ukphone\":\"ɪn'griːdiənt\"},{\"name\":\"surplus\",\"trans\":[\"过剩的， 多余的\",\"过剩，剩余，盈余\"],\"usphone\":\"'sɝpləs\",\"ukphone\":\"'sɜːpləs\"},{\"name\":\"correspondence\",\"trans\":[\"信件， 函件； 通信， 通信联系； 符合， 一致， 相似\"],\"usphone\":\",kɔrə'spɑndəns\",\"ukphone\":\"ˌkɒrə'spɒndəns\"},{\"name\":\"refresh\",\"trans\":[\"振作精神， 恢复活力\"],\"usphone\":\"ri'frɛʃ\",\"ukphone\":\"rɪ'freʃ\"},{\"name\":\"librarian\",\"trans\":[\"图书馆管理员\"],\"usphone\":\"laɪ'brɛrɪən\",\"ukphone\":\"laɪ'breəriən\"},{\"name\":\"intimate\",\"trans\":[\"亲密的；个人的\",\"至交， 密友\",\"暗示， 提示\"],\"usphone\":\"ˈɪntəmɪt\",\"ukphone\":\"'ɪntɪmət\"},{\"name\":\"reporter\",\"trans\":[\"记者\"],\"usphone\":\"rɪ'pɔrtɚ\",\"ukphone\":\"rɪ'pɔːtə\"},{\"name\":\"declaration\",\"trans\":[\"宣布， 宣告； 宣言， 声明； 申报\"],\"usphone\":\",dɛklə'reʃən\",\"ukphone\":\"ˌdeklə'reɪʃn\"},{\"name\":\"disclose\",\"trans\":[\"揭示； 透露\"],\"usphone\":\"dɪs'kloz\",\"ukphone\":\"dɪs'kləuz\"},{\"name\":\"religion\",\"trans\":[\"宗教， 宗教信仰\"],\"usphone\":\"rɪ'lɪdʒən\",\"ukphone\":\"rɪ'lɪdʒən\"},{\"name\":\"diagram\",\"trans\":[\"图解， 图表， 简图\"],\"usphone\":\"'daɪəɡræm\",\"ukphone\":\"'daɪəgræm\"},{\"name\":\"claw\",\"trans\":[\"抓， 撕\",\"爪，脚爪，螯\"],\"usphone\":\"klɔ\",\"ukphone\":\"klɔː\"},{\"name\":\"torture\",\"trans\":[\"拷问；折磨\",\"拷打\"],\"usphone\":\"'tɔrtʃɚ\",\"ukphone\":\"'tɔːtʃə\"},{\"name\":\"prayer\",\"trans\":[\"祷告， 祈祷； 祷文； 祈求， 祈望\"],\"usphone\":\"prɛr\",\"ukphone\":\"preə\"},{\"name\":\"tragedy\",\"trans\":[\"悲剧， 惨事， 惨案； 悲剧艺术\"],\"usphone\":\"'trædʒədi\",\"ukphone\":\"'trædʒədi\"},{\"name\":\"charm\",\"trans\":[\"迷人的特性，魅力；符咒，咒文\",\"吸引， 迷住\"],\"usphone\":\"tʃɑrm\",\"ukphone\":\"tʃɑːm\"},{\"name\":\"clap\",\"trans\":[\"拍手，轻拍\",\"拍手， 鼓掌\"],\"usphone\":\"klæp\",\"ukphone\":\"klæp\"},{\"name\":\"purple\",\"trans\":[\"紫的\",\"紫色\"],\"usphone\":\"'pɝpl\",\"ukphone\":\"'pɜːpl\"},{\"name\":\"quit\",\"trans\":[\"停止， 放弃； 离开， 辞\"],\"usphone\":\"kwɪt\",\"ukphone\":\"kwɪt\"},{\"name\":\"economical\",\"trans\":[\"节约的； 经济学的\"],\"usphone\":\",ɛkə'nɑmɪkl\",\"ukphone\":\"ˌiːkə'nɒmɪkl\"},{\"name\":\"prosperous\",\"trans\":[\"繁荣的， 兴旺的\"],\"usphone\":\"'prɑspərəs\",\"ukphone\":\"'prɒspərəs\"},{\"name\":\"polish\",\"trans\":[\"磨光；修改，润色，使优美\",\"擦光剂\"],\"usphone\":\"'pɑlɪʃ\",\"ukphone\":\"'pɒlɪʃ\"},{\"name\":\"cabinet\",\"trans\":[\"橱， 柜； 内阁\"],\"usphone\":\"'kæbɪnət\",\"ukphone\":\"'kæbɪnət\"},{\"name\":\"chart\",\"trans\":[\"图表；航海图\",\"用图表表示， 在图上表示\"],\"usphone\":\"tʃɑrt\",\"ukphone\":\"tʃɑːt\"},{\"name\":\"optical\",\"trans\":[\"眼的， 光学的， 视觉的\"],\"usphone\":\"'ɑptɪkl\",\"ukphone\":\"'ɒptɪkl\"},{\"name\":\"fashion\",\"trans\":[\"样子， 方式； 时尚； 流行款式\"],\"usphone\":\"'fæʃən\",\"ukphone\":\"'fæʃn\"},{\"name\":\"insurance\",\"trans\":[\"保险， 保险费\"],\"usphone\":\"ɪn'ʃʊrəns\",\"ukphone\":\"ɪn'ʃuərəns\"},{\"name\":\"preface\",\"trans\":[\"序言， 前言， 引言\"],\"usphone\":\"ˈpref.ɪs\",\"ukphone\":\"'prefəs\"},{\"name\":\"principle\",\"trans\":[\"原则， 原理， 道义； 基本信念， 信条\"],\"usphone\":\"'prɪnsəpl\",\"ukphone\":\"'prɪnsəpl\"},{\"name\":\"lid\",\"trans\":[\"盖子， 盖\"],\"usphone\":\"lɪd\",\"ukphone\":\"lɪd\"},{\"name\":\"tedious\",\"trans\":[\"冗长乏味的， 沉闷的\"],\"usphone\":\"'tidɪəs\",\"ukphone\":\"'tiːdiəs\"},{\"name\":\"source\",\"trans\":[\"河的源头， 根源； 来源， 出处\"],\"usphone\":\"sɔrs\",\"ukphone\":\"sɔːs\"},{\"name\":\"secure\",\"trans\":[\"安全的，可靠的；牢固的，稳固的；无忧虑的，安心的\",\"得到， 获得； 使安全， 保卫； 缚牢\"],\"usphone\":\"sə'kjʊr\",\"ukphone\":\"sɪ'kjuə\"},{\"name\":\"domestic\",\"trans\":[\"本国的； 家庭的； 驯养的\"],\"usphone\":\"də'mɛstɪk\",\"ukphone\":\"də'mestɪk\"},{\"name\":\"deception\",\"trans\":[\"欺骗； 诡计， 骗局\"],\"usphone\":\"dɪ'sɛpʃən\",\"ukphone\":\"dɪ'sepʃn\"},{\"name\":\"basically\",\"trans\":[\"基本上， 从根本上说\"],\"usphone\":\"'besɪkli\",\"ukphone\":\"'beɪsɪkli\"},{\"name\":\"donation\",\"trans\":[\"捐款， 捐赠物； 捐赠， 赠送\"],\"usphone\":\"do'neʃən\",\"ukphone\":\"dəu'neɪʃn\"},{\"name\":\"avenue\",\"trans\":[\"林荫道， 道路， 大街\"],\"usphone\":\"'ævənu\",\"ukphone\":\"'ævənjuː\"},{\"name\":\"immense\",\"trans\":[\"巨大的； 极好的\"],\"usphone\":\"ɪ'mɛns\",\"ukphone\":\"ɪ'mens\"},{\"name\":\"budget\",\"trans\":[\"规划，安排；编预算\",\"低廉的， 收费公道的\",\"预算，预算拨款\"],\"usphone\":\"'bʌdʒɪt\",\"ukphone\":\"'bʌdʒɪt\"},{\"name\":\"given\",\"trans\":[\"规定的，特定的；假设的；已知的；有癖好的，有倾向的\",\"考虑到\"],\"usphone\":\"'ɡɪvn\",\"ukphone\":\"'gɪvn\"},{\"name\":\"hay\",\"trans\":[\"干草\"],\"usphone\":\"\",\"ukphone\":\"heɪ\"},{\"name\":\"chest\",\"trans\":[\"胸腔， 胸膛； 箱子\"],\"usphone\":\"tʃɛst\",\"ukphone\":\"tʃest\"},{\"name\":\"tension\",\"trans\":[\"紧张， 不安； 拉紧； 张力， 拉力\"],\"usphone\":\"'tɛnʃən\",\"ukphone\":\"'tenʃn\"},{\"name\":\"definite\",\"trans\":[\"明确的， 肯定的\"],\"usphone\":\"'dɛfɪnət\",\"ukphone\":\"'defɪnət\"},{\"name\":\"reflection\",\"trans\":[\"映像， 倒影； 反射； 反映， 表达； 非议； 沉思， 反省\"],\"usphone\":\"rɪ'flɛkʃən\",\"ukphone\":\"rɪ'flekʃn\"},{\"name\":\"ultimate\",\"trans\":[\"最后的，最终的\",\"终极， 顶点\"],\"usphone\":\"ˈʌltəmɪt\",\"ukphone\":\"'ʌltɪmət\"},{\"name\":\"campus\",\"trans\":[\"校园， 学校场地\"],\"usphone\":\"'kæmpəs\",\"ukphone\":\"'kæmpəs\"},{\"name\":\"adapt\",\"trans\":[\"使适应； 改编\"],\"usphone\":\"ə'dæpt\",\"ukphone\":\"ə'dæpt\"},{\"name\":\"solicitor\",\"trans\":[\"律师， 法律顾问\"],\"usphone\":\"sə'lɪsɪtɚ\",\"ukphone\":\"sə'lɪsɪtə\"},{\"name\":\"cheerful\",\"trans\":[\"快乐的， 愉快的； 使人感到愉快的\"],\"usphone\":\"'tʃɪrfl\",\"ukphone\":\"'tʃɪəfl\"},{\"name\":\"merit\",\"trans\":[\"长处，优点，价值；功劳，成绩\",\"值得， 应受\"],\"usphone\":\"'mɛrɪt\",\"ukphone\":\"'merɪt\"},{\"name\":\"misunderstand\",\"trans\":[\"误解， 误会\"],\"usphone\":\",mɪsʌndɚ'stænd\",\"ukphone\":\"ˌmɪsʌndə'stænd\"},{\"name\":\"guilty\",\"trans\":[\"内疚的； 有罪的\"],\"usphone\":\"'ɡɪlti\",\"ukphone\":\"'gɪlti\"},{\"name\":\"measure\",\"trans\":[\"测量，度量；衡量\",\"分量； 尺寸； 量具； 计量单位； 量度， 测量； 措施， 办法\"],\"usphone\":\"'mɛʒɚ\",\"ukphone\":\"'meʒə\"},{\"name\":\"overall\",\"trans\":[\"全面的， 总体的， 全部的\"],\"usphone\":\",ovə'rɔl\",\"ukphone\":\"ˌəuvər'ɔːl\"},{\"name\":\"receipt\",\"trans\":[\"发票， 收据； 收入， 进款； 收到， 接到\"],\"usphone\":\"rɪ'sit\",\"ukphone\":\"rɪ'siːt\"},{\"name\":\"assume\",\"trans\":[\"假定， 假设， 臆断； 承担， 担任； 呈现\"],\"usphone\":\"ə'sum\",\"ukphone\":\"ə'sjuːm\"},{\"name\":\"pepper\",\"trans\":[\"胡椒，胡椒粉\",\"在…上撒； 使布满\"],\"usphone\":\"'pɛpɚ\",\"ukphone\":\"'pepə\"},{\"name\":\"plural\",\"trans\":[\"复数的\",\"复数\"],\"usphone\":\"'plʊrəl\",\"ukphone\":\"'pluərəl\"},{\"name\":\"doctoral\",\"trans\":[\"博士的\"],\"usphone\":\"'dɔktərəl\",\"ukphone\":\"'dɒktərəl\"},{\"name\":\"concept\",\"trans\":[\"概念， 观念， 设想\"],\"usphone\":\"'kɑnsɛpt\",\"ukphone\":\"'kɒnsept\"},{\"name\":\"resistant\",\"trans\":[\"抵抗的， 抗…的， 耐…的\"],\"usphone\":\"rɪ'zɪstənt\",\"ukphone\":\"rɪ'zɪstənt\"},{\"name\":\"effort\",\"trans\":[\"努力， 努力的成果\"],\"usphone\":\"'ɛfɚt\",\"ukphone\":\"'efət\"},{\"name\":\"video\",\"trans\":[\"录像的；电视的\",\"录像\"],\"usphone\":\"'vɪdɪo\",\"ukphone\":\"'vɪdiəu\"},{\"name\":\"disaster\",\"trans\":[\"灾难， 灾祸， 天灾； 彻底的失败\"],\"usphone\":\"dɪ'zæstɚ\",\"ukphone\":\"dɪ'zɑːstə\"},{\"name\":\"agriculture\",\"trans\":[\"农业， 农学\"],\"usphone\":\"'æɡrɪkʌltʃɚ\",\"ukphone\":\"'ægrɪkʌltʃə\"},{\"name\":\"weapon\",\"trans\":[\"武器， 兵器\"],\"usphone\":\"'wɛpən\",\"ukphone\":\"'wepən\"},{\"name\":\"grocer\",\"trans\":[\"食品商， 杂货商\"],\"usphone\":\"ɡrosɚ\",\"ukphone\":\"'grəusə\"},{\"name\":\"stare\",\"trans\":[\"盯， 凝视\"],\"usphone\":\"stɛr\",\"ukphone\":\"steə\"},{\"name\":\"painful\",\"trans\":[\"疼痛的， 引起疼痛的； 困难的； 令人不快的\"],\"usphone\":\"'penfl\",\"ukphone\":\"'peɪnfl\"},{\"name\":\"vote\",\"trans\":[\"投票； 表决\",\"票，选票；选举，投票，表决；表决结果，投票总数\"],\"usphone\":\"vot; voʊt\",\"ukphone\":\"vəut\"},{\"name\":\"steady\",\"trans\":[\"稳定\",\"稳的，平稳的；稳定的，持续的；稳固的\"],\"usphone\":\"'stɛdi\",\"ukphone\":\"'stedi\"},{\"name\":\"enhance\",\"trans\":[\"提高， 增加， 加强\"],\"usphone\":\"ɪn'hæns\",\"ukphone\":\"ɪn'hɑːns\"},{\"name\":\"enclose\",\"trans\":[\"围住， 圈起； 附上； 把…装入信封\"],\"usphone\":\"ɪn'kloz\",\"ukphone\":\"ɪn'kləuz\"},{\"name\":\"convention\",\"trans\":[\"习俗， 惯例； 公约； 会议\"],\"usphone\":\"kən'vɛnʃən\",\"ukphone\":\"kən'venʃn\"},{\"name\":\"disease\",\"trans\":[\"病， 疾病； 不健全； 弊端\"],\"usphone\":\"dɪ'ziz\",\"ukphone\":\"dɪ'ziːz\"},{\"name\":\"center\",\"trans\":[\"圆心， 正中； 中心\"],\"usphone\":\"'sɛntɚ\",\"ukphone\":\"'sentə\"},{\"name\":\"suspicion\",\"trans\":[\"怀疑， 疑心， 猜疑； 一点儿， 少量\"],\"usphone\":\"sə'spɪʃən\",\"ukphone\":\"sə'spɪʃn\"},{\"name\":\"purchase\",\"trans\":[\"买，购买\",\"购买； 购买的物品\"],\"usphone\":\"'pɝtʃəs\",\"ukphone\":\"'pɜːtʃəs\"},{\"name\":\"refusal\",\"trans\":[\"拒绝\"],\"usphone\":\"rɪ'fjuzl\",\"ukphone\":\"rɪ'fjuːzl\"},{\"name\":\"technician\",\"trans\":[\"技术员， 技师\"],\"usphone\":\"tɛk'nɪʃən\",\"ukphone\":\"tek'nɪʃn\"},{\"name\":\"generic\",\"trans\":[\"【生物】 属的， 类的； 一般的， 普通的\"],\"usphone\":\"dʒə'nɛrɪk\",\"ukphone\":\"dʒə'nerɪk\"},{\"name\":\"genius\",\"trans\":[\"天才， 天赋， 天资； 天才人物\"],\"usphone\":\"'dʒinjəs\",\"ukphone\":\"'dʒiːniəs\"},{\"name\":\"alike\",\"trans\":[\"一样地， 相似地； 同样程度地\",\"同样的，相同的\"],\"usphone\":\"ə'laɪk\",\"ukphone\":\"ə'laɪk\"},{\"name\":\"fund\",\"trans\":[\"资金，基金；存款\",\"为…提供资金\"],\"usphone\":\"fʌnd\",\"ukphone\":\"fʌnd\"},{\"name\":\"gravity\",\"trans\":[\"重力， 引力； 严重性； 严肃， 庄重\"],\"usphone\":\"ˈɡrævətɪ\",\"ukphone\":\"'grævəti\"},{\"name\":\"typical\",\"trans\":[\"典型的， 代表性的\"],\"usphone\":\"'tɪpɪkl\",\"ukphone\":\"'tɪpɪkl\"},{\"name\":\"quotation\",\"trans\":[\"引文， 引语， 语录； 报价， 牌价， 行情\"],\"usphone\":\"kwo'teʃən\",\"ukphone\":\"kwəu'teɪʃn\"},{\"name\":\"finance\",\"trans\":[\"筹措资金\",\"财政，金融；财源，财务情况\"],\"usphone\":\"'faɪnæns\",\"ukphone\":\"faɪ'næns; fə'næns\"},{\"name\":\"studio\",\"trans\":[\"画室， 摄影室； 播音室， 录音室， 摄影棚\"],\"usphone\":\"'studɪo\",\"ukphone\":\"'stjuːdiəu\"},{\"name\":\"tray\",\"trans\":[\"盘， 托盘， 碟\"],\"usphone\":\"tre\",\"ukphone\":\"treɪ\"},{\"name\":\"downward\",\"trans\":[\"向下地\",\"向下的\"],\"usphone\":\"'daʊnwɚd\",\"ukphone\":\"'daunwəd\"},{\"name\":\"cabbage\",\"trans\":[\"洋白菜， 卷心菜\"],\"usphone\":\"ˈkæbɪdʒ\",\"ukphone\":\"'kæbɪdʒ\"},{\"name\":\"regulate\",\"trans\":[\"管理， 控制； 调整， 调节\"],\"usphone\":\"'rɛɡjulet\",\"ukphone\":\"'regjuleɪt\"},{\"name\":\"palm\",\"trans\":[\"手掌， 掌状物； 棕榈树\"],\"usphone\":\"pɑm\",\"ukphone\":\"pɑːm\"},{\"name\":\"hydrogen\",\"trans\":[\"氢\"],\"usphone\":\"'haɪdrədʒən\",\"ukphone\":\"'haɪdrədʒən\"},{\"name\":\"infant\",\"trans\":[\"婴儿的； 幼稚的\",\"婴儿\"],\"usphone\":\"'ɪnfənt\",\"ukphone\":\"'ɪnfənt\"},{\"name\":\"hen\",\"trans\":[\"母鸡， 雌禽\"],\"usphone\":\"hɛn\",\"ukphone\":\"hen\"},{\"name\":\"whoever\",\"trans\":[\"谁； 无论谁； 究竟是谁\"],\"usphone\":\"hʊ'ɛvɚ\",\"ukphone\":\"huː'evə\"},{\"name\":\"carbon\",\"trans\":[\"碳\"],\"usphone\":\"'kɑrbən\",\"ukphone\":\"'kɑːbən\"},{\"name\":\"unload\",\"trans\":[\"卸， 卸货； 下客； 退出子弹； 卸下胶卷\"],\"usphone\":\"'ʌn'lod\",\"ukphone\":\"ˌʌn'ləud\"},{\"name\":\"payment\",\"trans\":[\"支付， 支付的款项\"],\"usphone\":\"'pemənt\",\"ukphone\":\"'peɪmənt\"},{\"name\":\"specifically\",\"trans\":[\"特别地， 特定地； 明确地， 具体地\"],\"usphone\":\"spə'sɪfɪkli\",\"ukphone\":\"spə'sɪfɪkli\"},{\"name\":\"controversial\",\"trans\":[\"引起争论的， 有争议的\"],\"usphone\":\",kɑntrə'vɝʃl\",\"ukphone\":\"ˌkɒntrə'vɜːʃl\"},{\"name\":\"attain\",\"trans\":[\"达到， 获得， 完成\"],\"usphone\":\"ə'ten\",\"ukphone\":\"ə'teɪn\"},{\"name\":\"trap\",\"trans\":[\"陷阱，捕捉器；圈套，诡计；困境\",\"设陷阱捕捉； 诱骗\"],\"usphone\":\"træp\",\"ukphone\":\"træp\"},{\"name\":\"gallery\",\"trans\":[\"画廊， 美术馆； 楼座； 旁听席； 回廊， 走廊\"],\"usphone\":\"'gæləri\",\"ukphone\":\"'gæləri\"},{\"name\":\"hardware\",\"trans\":[\"五金器具； 硬件\"],\"usphone\":\"'hɑrdwɛr\",\"ukphone\":\"'hɑːdweə\"},{\"name\":\"deputy\",\"trans\":[\"副职， 副手； 代表， 代理人\"],\"usphone\":\"'dɛpjuti\",\"ukphone\":\"'depjuti\"},{\"name\":\"warmth\",\"trans\":[\"暖和， 温暖； 热烈， 热情， 热心\"],\"usphone\":\"wɔrmθ\",\"ukphone\":\"wɔːmθ\"},{\"name\":\"supreme\",\"trans\":[\"最高的， 最大的； 极度的， 最重要的\"],\"usphone\":\"suˈprim\",\"ukphone\":\"suː'priːm\"},{\"name\":\"ambulance\",\"trans\":[\"救护车； 野战医院\"],\"usphone\":\"'æmbjələns\",\"ukphone\":\"'æmbjələns\"},{\"name\":\"priority\",\"trans\":[\"优先， 重点； 优先考虑的事\"],\"usphone\":\"praɪ'ɔrəti\",\"ukphone\":\"praɪ'ɒrəti\"},{\"name\":\"slope\",\"trans\":[\"倾斜\",\"倾斜；斜面\"],\"usphone\":\"slop\",\"ukphone\":\"sləup\"},{\"name\":\"philosophy\",\"trans\":[\"哲学， 哲理， 人生哲学\"],\"usphone\":\"fə'lɑsəfi\",\"ukphone\":\"fə'lɒsəfi\"},{\"name\":\"preventive\",\"trans\":[\"预防性的\"],\"usphone\":\"pri'vɛntɪv\",\"ukphone\":\"prɪ'ventɪv\"},{\"name\":\"creative\",\"trans\":[\"创造性的， 创作的\"],\"usphone\":\"krɪ'etɪv\",\"ukphone\":\"kri'eɪtɪv\"},{\"name\":\"junior\",\"trans\":[\"年少的；资历较浅的\",\"晚辈； 三年级学生\"],\"usphone\":\"'dʒunɪɚ\",\"ukphone\":\"'dʒuːniə\"},{\"name\":\"allocate\",\"trans\":[\"分配， 分派， 把…拨给\"],\"usphone\":\"'æləket\",\"ukphone\":\"'æləkeɪt\"},{\"name\":\"provide\",\"trans\":[\"提供， 供给\"],\"usphone\":\"prə'vaɪd\",\"ukphone\":\"prə'vaɪd\"},{\"name\":\"standpoint\",\"trans\":[\"立场， 观点\"],\"usphone\":\"'stændpɔɪnt\",\"ukphone\":\"'stændpɔɪnt\"},{\"name\":\"worship\",\"trans\":[\"礼拜；崇拜；信奉\",\"崇拜\"],\"usphone\":\"'wɝʃɪp\",\"ukphone\":\"'wɜːʃɪp\"},{\"name\":\"lawn\",\"trans\":[\"草地， 草坪， 草场\"],\"usphone\":\"lɔn\",\"ukphone\":\"lɔːn\"},{\"name\":\"primary\",\"trans\":[\"首要的， 主要的； 基本的； 最初的， 初级的\"],\"usphone\":\"'praɪmɛri\",\"ukphone\":\"'praɪməri\"},{\"name\":\"log\",\"trans\":[\"原木，木料；航海日志\",\"正式记录\"],\"usphone\":\"lɔɡ\",\"ukphone\":\"lɒg\"},{\"name\":\"solar\",\"trans\":[\"太阳的， 日光的； 太阳能的\"],\"usphone\":\"'solɚ\",\"ukphone\":\"'səulə\"},{\"name\":\"consume\",\"trans\":[\"消费， 吃完， 喝光； 毁灭； 使着迷， 充满\"],\"usphone\":\"kənˈsum\",\"ukphone\":\"kən'sjuːm\"},{\"name\":\"formation\",\"trans\":[\"形成， 构成， 形成物； 队形， 排列\"],\"usphone\":\"fɔr'meʃən\",\"ukphone\":\"fɔː'meɪʃn\"},{\"name\":\"layer\",\"trans\":[\"层， 层次\"],\"usphone\":\"'leɪr\",\"ukphone\":\"'leɪə\"},{\"name\":\"triangle\",\"trans\":[\"三角\"],\"usphone\":\"'traɪæŋɡl\",\"ukphone\":\"'traɪæŋgl\"},{\"name\":\"accidental\",\"trans\":[\"偶然的， 意外的\"],\"usphone\":\",æksɪ'dɛntl\",\"ukphone\":\"ˌæksɪ'dentl\"},{\"name\":\"assure\",\"trans\":[\"使确信； 确保， 向…保证\"],\"usphone\":\"ə'ʃʊr\",\"ukphone\":\"ə'ʃuə\"},{\"name\":\"consult\",\"trans\":[\"请教； 查阅； 商议\"],\"usphone\":\"kən'sʌlt\",\"ukphone\":\"kən'sʌlt\"},{\"name\":\"theme\",\"trans\":[\"主题， 题目\"],\"usphone\":\"θim\",\"ukphone\":\"θiːm\"},{\"name\":\"smash\",\"trans\":[\"粉碎，打烂；狠打，猛击；破灭，失败；猛撞，猛冲\",\"破碎 ； 猛击， 猛撞； 轰动的演出， 巨大的成功\"],\"usphone\":\"smæʃ\",\"ukphone\":\"smæʃ\"},{\"name\":\"merely\",\"trans\":[\"仅仅， 只不过\"],\"usphone\":\"'mɪrli\",\"ukphone\":\"'mɪəli\"},{\"name\":\"contradiction\",\"trans\":[\"矛盾， 不一致； 否认， 反驳\"],\"usphone\":\",kɑntrə'dɪkʃən\",\"ukphone\":\"ˌkɒntrə'dɪkʃn\"},{\"name\":\"fuss\",\"trans\":[\"忙乱； 大惊小怪， 小题大做； 烦恼， 过于忧虑\"],\"usphone\":\"fʌs\",\"ukphone\":\"fʌs\"},{\"name\":\"wealth\",\"trans\":[\"财富， 财产； 丰富\"],\"usphone\":\"wɛlθ\",\"ukphone\":\"welθ\"},{\"name\":\"editor\",\"trans\":[\"编辑， 编者， 校订者\"],\"usphone\":\"'ɛdɪtɚ\",\"ukphone\":\"'edɪtə\"},{\"name\":\"barrel\",\"trans\":[\"桶； 圆筒； 枪管\"],\"usphone\":\"'bærəl\",\"ukphone\":\"'bærəl\"},{\"name\":\"means\",\"trans\":[\"方法， 手段， 工具； 金钱， 财产\"],\"usphone\":\"minz\",\"ukphone\":\"miːnz\"},{\"name\":\"desire\",\"trans\":[\"渴望；要求\",\"愿望； 欲望\"],\"usphone\":\"dɪ'zaɪɚ\",\"ukphone\":\"dɪ'zaɪə\"},{\"name\":\"survive\",\"trans\":[\"活下来， 幸存\",\"从…逃出，幸免于；从中挺过来；比…活得长\"],\"usphone\":\"sɚ'vaɪv\",\"ukphone\":\"sə'vaɪv\"},{\"name\":\"efficient\",\"trans\":[\"效率高的； 有能力的\"],\"usphone\":\"ɪ'fɪʃnt\",\"ukphone\":\"ɪ'fɪʃnt\"},{\"name\":\"initial\",\"trans\":[\"最初的，开始的\",\"首字母\"],\"usphone\":\"ɪ'nɪʃəl\",\"ukphone\":\"ɪ'nɪʃl\"},{\"name\":\"unfortunately\",\"trans\":[\"不幸地\"],\"usphone\":\"ʌn'fɔrtʃənətli\",\"ukphone\":\"ʌn'fɔːtʃənətli\"},{\"name\":\"consistent\",\"trans\":[\"坚持的， 一贯的； 一致的， 符合的\"],\"usphone\":\"kən'sɪstənt\",\"ukphone\":\"kən'sɪstənt\"},{\"name\":\"reverse\",\"trans\":[\"撤销，推翻；反向，倒转；彻底改变\",\"反向的， 相反的， 倒转的\",\"相反，对立面；反面，背面，后面；挫折，逆境\"],\"usphone\":\"rɪ'vɝs\",\"ukphone\":\"rɪ'vɜːs\"},{\"name\":\"heterogeneity\",\"trans\":[\"异种， 异质， 不同成分\"],\"usphone\":\"\",\"ukphone\":\"ˌhetərədʒə'niːəti\"},{\"name\":\"sword\",\"trans\":[\"剑， 刀\"],\"usphone\":\"sɔːrd\",\"ukphone\":\"sɔːd\"},{\"name\":\"permanent\",\"trans\":[\"永久的， 固定的\"],\"usphone\":\"'pɝmənənt\",\"ukphone\":\"'pɜːmənənt\"},{\"name\":\"barely\",\"trans\":[\"仅仅， 只不过， 几乎不\"],\"usphone\":\"'bɛrli\",\"ukphone\":\"'beəli\"},{\"name\":\"summarize\",\"trans\":[\"概括， 概述， 总结\"],\"usphone\":\"'sʌməraɪz\",\"ukphone\":\"'sʌməraɪz\"},{\"name\":\"chap\",\"trans\":[\"小伙子， 男人， 家伙\"],\"usphone\":\"tʃæp\",\"ukphone\":\"tʃæp\"},{\"name\":\"facility\",\"trans\":[\"设备； 容易； 场所\"],\"usphone\":\"fə'sɪləti\",\"ukphone\":\"fə'sɪləti\"},{\"name\":\"beam\",\"trans\":[\"梁，横梁；束，柱；笑容，喜色\",\"面露喜色； 定向发出， 播送\"],\"usphone\":\"bim\",\"ukphone\":\"biːm\"},{\"name\":\"alliance\",\"trans\":[\"结盟， 联盟\"],\"usphone\":\"ə'laɪəns\",\"ukphone\":\"ə'laɪəns\"},{\"name\":\"civilization\",\"trans\":[\"文明， 文化； 开化\"],\"usphone\":\",sɪvələ'zeʃən\",\"ukphone\":\"ˌsɪvəlaɪ'zeɪʃn\"},{\"name\":\"fiction\",\"trans\":[\"小说； 虚构， 杜撰\"],\"usphone\":\"'fɪkʃən\",\"ukphone\":\"'fɪkʃn\"},{\"name\":\"possession\",\"trans\":[\"有， 所有； 所有物\"],\"usphone\":\"pə'zɛʃən\",\"ukphone\":\"pə'zeʃn\"},{\"name\":\"replace\",\"trans\":[\"代替， 取代； 更换， 调换； 把…放回原处\"],\"usphone\":\"rɪ'ples\",\"ukphone\":\"rɪ'pleɪs\"},{\"name\":\"appointment\",\"trans\":[\"任命； 约定； 约会； 委任的职位\"],\"usphone\":\"ə'pɔɪntmənt\",\"ukphone\":\"ə'pɔɪntmənt\"},{\"name\":\"hip\",\"trans\":[\"臀部， 髋部\"],\"usphone\":\"hɪp\",\"ukphone\":\"hɪp\"},{\"name\":\"merry\",\"trans\":[\"欢乐的， 愉快的\"],\"usphone\":\"'mɛri\",\"ukphone\":\"'meri\"},{\"name\":\"dam\",\"trans\":[\"水坝，水堤；障碍物\",\"筑堤挡住\"],\"usphone\":\"dæm\",\"ukphone\":\"dæm\"},{\"name\":\"pessimistic\",\"trans\":[\"悲观的\"],\"usphone\":\",pɛsɪ'mɪstɪk\",\"ukphone\":\"ˌpesɪ'mɪstɪk\"},{\"name\":\"commander\",\"trans\":[\"司令官， 指挥员\"],\"usphone\":\"kə'mændɚ\",\"ukphone\":\"kə'mɑːndə\"},{\"name\":\"bloom\",\"trans\":[\"开花\",\"花，开花，开花期；青春焕发\"],\"usphone\":\"blum\",\"ukphone\":\"bluːm\"},{\"name\":\"major\",\"trans\":[\"较大的；主要的；重大的\",\"少校； 专业\"],\"usphone\":\"'medʒɚ\",\"ukphone\":\"'meɪdʒə\"},{\"name\":\"zone\",\"trans\":[\"地区， 区域， 范围\"],\"usphone\":\"zon\",\"ukphone\":\"zəun\"},{\"name\":\"emphasis\",\"trans\":[\"强调； 重点， 重要性\"],\"usphone\":\"'ɛmfəsɪs\",\"ukphone\":\"'emfəsɪs\"},{\"name\":\"interrupt\",\"trans\":[\"打断， 打扰， 中断\"],\"usphone\":\"'ɪntə'rʌpt\",\"ukphone\":\"ˌɪntə'rʌpt\"},{\"name\":\"feasible\",\"trans\":[\"可行的， 可能的\"],\"usphone\":\"'fizəbl\",\"ukphone\":\"'fiːzəbl\"},{\"name\":\"prescribe\",\"trans\":[\"开； 吩咐采用； 规定， 指定\"],\"usphone\":\"prɪ'skraɪb\",\"ukphone\":\"prɪ'skraɪb\"},{\"name\":\"potential\",\"trans\":[\"潜在的，可能的\",\"潜力， 潜能\"],\"usphone\":\"pə'tɛnʃl\",\"ukphone\":\"pə'tenʃl\"},{\"name\":\"bean\",\"trans\":[\"豆， 蚕豆\"],\"usphone\":\"bin\",\"ukphone\":\"biːn\"},{\"name\":\"accustomed\",\"trans\":[\"惯常的， 习惯的\"],\"usphone\":\"ə'kʌstəmd\",\"ukphone\":\"ə'kʌstəmd\"},{\"name\":\"combination\",\"trans\":[\"结合， 联合； 化合\"],\"usphone\":\",kɑmbɪ'neʃən\",\"ukphone\":\"ˌkɒmbɪ'neɪʃn\"},{\"name\":\"obtain\",\"trans\":[\"获得； 通用， 流行； 存在\"],\"usphone\":\"əb'ten\",\"ukphone\":\"əb'teɪn\"},{\"name\":\"turbine\",\"trans\":[\"叶轮机， 汽轮机\"],\"usphone\":\"'tɝbaɪn\",\"ukphone\":\"'tɜːbaɪn\"},{\"name\":\"repeatedly\",\"trans\":[\"一再， 再三， 多次地\"],\"usphone\":\"rɪ'pitɪdli\",\"ukphone\":\"rɪ'piːtɪdli\"},{\"name\":\"curiosity\",\"trans\":[\"好奇， 好奇心； 奇物， 奇事， 珍品\"],\"usphone\":\",kjʊrɪ'ɑsəti\",\"ukphone\":\"ˌkjuəri'ɒsəti\"},{\"name\":\"gross\",\"trans\":[\"总的； 严重的； 粗俗的； 臃肿的\"],\"usphone\":\"ɡros\",\"ukphone\":\"grəus\"},{\"name\":\"workshop\",\"trans\":[\"车间， 作坊， 创作室； 研讨会， 讲习班\"],\"usphone\":\"'wɝkʃɑp\",\"ukphone\":\"'wɜːkʃɒp\"},{\"name\":\"resist\",\"trans\":[\"抵抗， 反抗， 抵制； 抗， 耐； 忍住， 拒受…的影响\"],\"usphone\":\"rɪ'zɪst\",\"ukphone\":\"rɪ'zɪst\"},{\"name\":\"liter\",\"trans\":[\"升\"],\"usphone\":\"litɚ\",\"ukphone\":\"'liːtə\"},{\"name\":\"format\",\"trans\":[\"设计，安排；格式，样式，版式\",\"使格式化\"],\"usphone\":\"'fɔrmæt\",\"ukphone\":\"'fɔːmæt\"},{\"name\":\"sacrifice\",\"trans\":[\"牺牲，舍身；献祭，供奉\",\"牺牲； 供奉； 祭品\"],\"usphone\":\"'sækrɪfaɪs\",\"ukphone\":\"'sækrɪfaɪs\"},{\"name\":\"illegal\",\"trans\":[\"不合法的， 非法的\"],\"usphone\":\"ɪ'ligl\",\"ukphone\":\"ɪ'liːgl\"},{\"name\":\"stimulate\",\"trans\":[\"刺激， 激励， 激发\"],\"usphone\":\"'stɪmjə'let\",\"ukphone\":\"'stɪmjuleɪt\"},{\"name\":\"formal\",\"trans\":[\"正式的， 礼仪上的\"],\"usphone\":\"'fɔrml\",\"ukphone\":\"'fɔːml\"},{\"name\":\"congratulate\",\"trans\":[\"祝贺， 向…道喜\"],\"usphone\":\"kən'ɡrætʃulet\",\"ukphone\":\"kən'grætʃuleɪt\"},{\"name\":\"rainbow\",\"trans\":[\"虹， 彩虹\"],\"usphone\":\"'renbo\",\"ukphone\":\"'reɪnbəu\"},{\"name\":\"soak\",\"trans\":[\"浸， 泡\"],\"usphone\":\"sok\",\"ukphone\":\"səuk\"},{\"name\":\"soar\",\"trans\":[\"猛增， 剧增； 高飞， 升腾； 高涨； 高耸， 屹立\"],\"usphone\":\"sɔr\",\"ukphone\":\"sɔː\"},{\"name\":\"salesman\",\"trans\":[\"售货员， 推销员\"],\"usphone\":\"'selzmən\",\"ukphone\":\"'seɪlzmən\"},{\"name\":\"interference\",\"trans\":[\"干涉， 干预， 阻碍\"],\"usphone\":\",ɪntɚ'fɪrəns\",\"ukphone\":\"ˌɪntə'fɪərəns\"},{\"name\":\"fibre\",\"trans\":[\"纤维， 纤维质\"],\"usphone\":\"'faibə\",\"ukphone\":\"'faɪbə\"},{\"name\":\"sustain\",\"trans\":[\"保持， 使持续下去； 供养， 维持； 支持， 支撑； 经受， 遭受\"],\"usphone\":\"sə'sten\",\"ukphone\":\"sə'steɪn\"},{\"name\":\"entertain\",\"trans\":[\"使欢乐； 招待， 请客\"],\"usphone\":\",ɛntɚ'ten\",\"ukphone\":\"ˌentə'teɪn\"},{\"name\":\"altitude\",\"trans\":[\"海拔， 高度； 高处\"],\"usphone\":\"'æltɪtud\",\"ukphone\":\"'æltɪtjuːd\"},{\"name\":\"classify\",\"trans\":[\"把…分类， 把…分级\"],\"usphone\":\"'klæsɪfaɪ\",\"ukphone\":\"'klæsɪfaɪ\"},{\"name\":\"ease\",\"trans\":[\"容易；舒适\",\"缓和\"],\"usphone\":\"iz\",\"ukphone\":\"iːz\"},{\"name\":\"critical\",\"trans\":[\"决定性的； 批评的\"],\"usphone\":\"'krɪtɪkl\",\"ukphone\":\"'krɪtɪkl\"},{\"name\":\"colony\",\"trans\":[\"殖民地； 侨居地， 聚居地； 群体， 集群\"],\"usphone\":\"'kɑləni\",\"ukphone\":\"'kɒləni\"},{\"name\":\"mathematics\",\"trans\":[\"数学\"],\"usphone\":\",mæθə'mætɪks\",\"ukphone\":\"ˌmæθə'mætɪks\"},{\"name\":\"wagon\",\"trans\":[\"四轮马车， 大篷车； 铁路货车， 客货两用车\"],\"usphone\":\"'wægən\",\"ukphone\":\"'wægən\"},{\"name\":\"elsewhere\",\"trans\":[\"在别处， 向别处\"],\"usphone\":\"\",\"ukphone\":\"ˌels'weə\"},{\"name\":\"penetrate\",\"trans\":[\"透入， 渗入， 进入； 刺穿； 洞察， 了解\"],\"usphone\":\"'pɛnətret\",\"ukphone\":\"'penɪtreɪt\"},{\"name\":\"principal\",\"trans\":[\"最重要的，主要的\",\"负责人， 校长； 资本， 本金； 主要演员， 主角\"],\"usphone\":\"'prɪnsəpl\",\"ukphone\":\"'prɪnsəpl\"},{\"name\":\"tend\",\"trans\":[\"照管， 照料， 护理\",\"易于，往往会；趋向，倾向\"],\"usphone\":\"tɛnd\",\"ukphone\":\"tend\"},{\"name\":\"exceedingly\",\"trans\":[\"极端地， 非常\"],\"usphone\":\"ɪk'sidɪŋli\",\"ukphone\":\"ɪk'siːdɪŋli\"},{\"name\":\"specimen\",\"trans\":[\"样本， 标本， 样品\"],\"usphone\":\"'spɛsəmən\",\"ukphone\":\"'spesɪmən\"},{\"name\":\"relief\",\"trans\":[\"轻松， 宽慰； 缓解； 调剂， 消遣； 接替\"],\"usphone\":\"rɪ'lif\",\"ukphone\":\"rɪ'liːf\"},{\"name\":\"dimension\",\"trans\":[\"尺寸， 尺度； 方面， 特点； 面积， 规模\"],\"usphone\":\"dəˈmɛnʃən, daɪ-\",\"ukphone\":\"dɪ'menʃn; daɪ'menʃn\"},{\"name\":\"introduction\",\"trans\":[\"介绍， 引进； 引言\"],\"usphone\":\",ɪntrə'dʌkʃən\",\"ukphone\":\"ˌɪntrə'dʌkʃn\"},{\"name\":\"deserve\",\"trans\":[\"应受， 值得\"],\"usphone\":\"dɪ'zɝv\",\"ukphone\":\"dɪ'zɜːv\"},{\"name\":\"process\",\"trans\":[\"过程；制作法；程序\",\"加工； 办理\"],\"usphone\":\"proˈsɛs;(for n.)prɑsɛs\",\"ukphone\":\"'prəuses\"},{\"name\":\"philosopher\",\"trans\":[\"哲学家， 哲人\"],\"usphone\":\"fə'lɑsəfɚ\",\"ukphone\":\"fə'lɒsəfə\"},{\"name\":\"restore\",\"trans\":[\"恢复， 使回复； 修复， 整修； 归还， 交还\"],\"usphone\":\"rɪ'stɔr\",\"ukphone\":\"rɪ'stɔː\"},{\"name\":\"therapy\",\"trans\":[\"治疗， 理疗\"],\"usphone\":\"'θɛrəpi\",\"ukphone\":\"'θerəpi\"},{\"name\":\"alternative\",\"trans\":[\"两者选一的， 供选择的； 另类的\",\"替换物，选择；选择的自由\"],\"usphone\":\"ɔl'tɝnətɪv\",\"ukphone\":\"ɔːl'tɜːnətɪv\"},{\"name\":\"banner\",\"trans\":[\"横幅； 旗， 旗帜\"],\"usphone\":\"'bænɚ\",\"ukphone\":\"'bænə\"},{\"name\":\"concentration\",\"trans\":[\"集中； 专注， 专心； 浓缩， 浓度\"],\"usphone\":\"'kɑnsn'treʃən\",\"ukphone\":\"ˌkɒnsn'treɪʃn\"},{\"name\":\"encounter\",\"trans\":[\"遭遇，遇到\",\"遭遇\"],\"usphone\":\"ɪn'kaʊntɚ\",\"ukphone\":\"ɪn'kauntə\"},{\"name\":\"soda\",\"trans\":[\"碳酸钠， 纯碱； 汽水， 苏打水\"],\"usphone\":\"'sodə\",\"ukphone\":\"'səudə\"},{\"name\":\"colleague\",\"trans\":[\"同事， 同僚\"],\"usphone\":\"'kɑliɡ\",\"ukphone\":\"'kɒliːg\"},{\"name\":\"gratitude\",\"trans\":[\"感激， 感谢， 感恩\"],\"usphone\":\"'ɡrætɪtud\",\"ukphone\":\"'grætɪtjuːd\"},{\"name\":\"approve\",\"trans\":[\"赞成， 称许； 批准\"],\"usphone\":\"ə'prʊv\",\"ukphone\":\"ə'pruːv\"},{\"name\":\"interaction\",\"trans\":[\"相互作用， 干扰\"],\"usphone\":\",ɪntə'rækʃən\",\"ukphone\":\"ˌɪntər'ækʃn\"},{\"name\":\"chew\",\"trans\":[\"咀嚼， 嚼碎\"],\"usphone\":\"tʃʊ\",\"ukphone\":\"tʃuː\"},{\"name\":\"interfere\",\"trans\":[\"干涉， 干预， 妨碍\"],\"usphone\":\",ɪntɚ'fɪr\",\"ukphone\":\"ˌɪntə'fɪə\"},{\"name\":\"apartment\",\"trans\":[\"一套公寓房间\"],\"usphone\":\"ə'pɑrtmənt\",\"ukphone\":\"ə'pɑːtmənt\"},{\"name\":\"account\",\"trans\":[\"说明原因； 占\",\"记述；解释；账目\"],\"usphone\":\"ə'kaʊnt\",\"ukphone\":\"ə'kaunt\"},{\"name\":\"uneasy\",\"trans\":[\"心神不安的， 忧虑的\"],\"usphone\":\"ʌn'izi\",\"ukphone\":\"ʌn'iːzi\"},{\"name\":\"tolerate\",\"trans\":[\"忍受， 容忍； 容许， 承认\"],\"usphone\":\"'tɑləret\",\"ukphone\":\"'tɒləreɪt\"},{\"name\":\"developmental\",\"trans\":[\"发展的\"],\"usphone\":\"dɪ,vɛləp'mɛntl\",\"ukphone\":\"dɪˌveləp'mentl\"},{\"name\":\"stack\",\"trans\":[\"堆，垛\",\"堆积， 堆放于\"],\"usphone\":\"stæk\",\"ukphone\":\"stæk\"},{\"name\":\"underline\",\"trans\":[\"在…下面画线； 强调， 使…突出\"],\"usphone\":\"'ʌndəlaɪn\",\"ukphone\":\"ˌʌndə'laɪn\"},{\"name\":\"innocent\",\"trans\":[\"清白的； 幼稚的； 没有恶意的\"],\"usphone\":\"'ɪnəsnt\",\"ukphone\":\"'ɪnəsnt\"},{\"name\":\"compassion\",\"trans\":[\"同情， 怜悯\"],\"usphone\":\"kəm'pæʃən\",\"ukphone\":\"kəm'pæʃn\"},{\"name\":\"alphabet\",\"trans\":[\"字母表， 字母系统\"],\"usphone\":\"'ælfə'bɛt\",\"ukphone\":\"'ælfəb3t\"},{\"name\":\"parliament\",\"trans\":[\"议会， 国会\"],\"usphone\":\"'pɑrləmənt\",\"ukphone\":\"'pɑːləmənt\"},{\"name\":\"evaluation\",\"trans\":[\"评价； 估计\"],\"usphone\":\"ɪ,væljʊ'eʃən\",\"ukphone\":\"ɪˌvælju'eɪʃn\"},{\"name\":\"crack\",\"trans\":[\"爆裂； 噼啪地响； 打， 击\",\"裂缝，裂纹；破裂声\"],\"usphone\":\"kræk\",\"ukphone\":\"kræk\"},{\"name\":\"bind\",\"trans\":[\"捆绑， 包扎； 装订； 约束； 使结合， 使黏合\"],\"usphone\":\"baɪnd\",\"ukphone\":\"baɪnd\"},{\"name\":\"trim\",\"trans\":[\"整齐的\",\"使整齐\"],\"usphone\":\"trɪm\",\"ukphone\":\"trɪm\"},{\"name\":\"appreciate\",\"trans\":[\"重视， 赏识； 领会， 体会； 感谢； 增值\"],\"usphone\":\"ə'priʃɪet\",\"ukphone\":\"ə'priːʃieɪt\"},{\"name\":\"dental\",\"trans\":[\"牙齿的， 牙科的\"],\"usphone\":\"'dɛntl\",\"ukphone\":\"'dentl\"},{\"name\":\"predictable\",\"trans\":[\"可预料的\"],\"usphone\":\"prɪ'dɪktəbl\",\"ukphone\":\"prɪ'dɪktəbl\"},{\"name\":\"diverse\",\"trans\":[\"不一样的， 相异的； 多种多样的\"],\"usphone\":\"daɪ'vɝs\",\"ukphone\":\"daɪ'vɜːs\"},{\"name\":\"railway\",\"trans\":[\"铁路\"],\"usphone\":\"'relwe\",\"ukphone\":\"'reɪlweɪ\"},{\"name\":\"cube\",\"trans\":[\"清澈透明的\",\"立方形，立方\"],\"usphone\":\"kjʊb\",\"ukphone\":\"kjuːb\"},{\"name\":\"rally\",\"trans\":[\"集合， 团结； 恢复， 重新振作\",\"集会；公路汽车赛\"],\"usphone\":\"'ræli\",\"ukphone\":\"'ræli\"},{\"name\":\"prime\",\"trans\":[\"首要的；最好的\",\"青春；全盛时期\",\"使准备好\"],\"usphone\":\"praɪm\",\"ukphone\":\"praɪm\"},{\"name\":\"happen\",\"trans\":[\"发生； 碰巧， 恰好\"],\"usphone\":\"'hæpən\",\"ukphone\":\"'hæpən\"},{\"name\":\"festival\",\"trans\":[\"节日； 音乐节\"],\"usphone\":\"ˈfɛstəvl\",\"ukphone\":\"'festɪvl\"},{\"name\":\"mild\",\"trans\":[\"温柔的； 温暖的； 轻微的\"],\"usphone\":\"maɪld\",\"ukphone\":\"maɪld\"},{\"name\":\"profile\",\"trans\":[\"侧面；人物简介；轮廓，形象；姿态，引人注目的状态\",\"为…描绘； 写…的传略\"],\"usphone\":\"'profaɪl\",\"ukphone\":\"'prəufaɪl\"},{\"name\":\"loyal\",\"trans\":[\"忠诚的， 忠心的\"],\"usphone\":\"'lɔɪəl\",\"ukphone\":\"'lɔɪəl\"},{\"name\":\"preference\",\"trans\":[\"喜爱， 偏爱； 偏爱的事物； 优先\"],\"usphone\":\"'prɛfrəns\",\"ukphone\":\"'prefrəns\"},{\"name\":\"impact\",\"trans\":[\"影响， 作用， 冲击\"],\"usphone\":\"ɪm'pækt\",\"ukphone\":\"'ɪmpækt\"},{\"name\":\"opportunity\",\"trans\":[\"机会， 良机\"],\"usphone\":\"ˌɑpɚˈtunətɪ\",\"ukphone\":\"ˌɒpə'tjuːnəti\"},{\"name\":\"active\",\"trans\":[\"活跃的， 积极的； 主动的； 起作用的\"],\"usphone\":\"'æktɪv\",\"ukphone\":\"'æktɪv\"},{\"name\":\"dorm\",\"trans\":[\"宿舍\"],\"usphone\":\"dɔrm\",\"ukphone\":\"dɔːm\"},{\"name\":\"whichever\",\"trans\":[\"无论哪个， 无论哪些\"],\"usphone\":\"wɪtʃ'ɛvɚ\",\"ukphone\":\"wɪtʃ'evə\"},{\"name\":\"court\",\"trans\":[\"法院， 法庭； 庭院； 宫廷； 球场\"],\"usphone\":\"kɔrt\",\"ukphone\":\"kɔːt\"},{\"name\":\"venture\",\"trans\":[\"冒险， 敢于\",\"风险投资，风险项目\"],\"usphone\":\"'vɛntʃɚ\",\"ukphone\":\"'ventʃə\"},{\"name\":\"mill\",\"trans\":[\"磨， 碾\",\"磨坊；碾磨机；制造厂，工厂\"],\"usphone\":\"\",\"ukphone\":\"mɪl\"},{\"name\":\"bucket\",\"trans\":[\"水桶， 吊桶； 铲斗\"],\"usphone\":\"'bʌkɪt\",\"ukphone\":\"'bʌkɪt\"},{\"name\":\"senior\",\"trans\":[\"资格较老的，地位较高的；年长的\",\"较年长者； 毕业班学生\"],\"usphone\":\"'sinɪɚ\",\"ukphone\":\"'siːniə\"},{\"name\":\"dose\",\"trans\":[\"剂量， 用量， 一剂\"],\"usphone\":\"dos\",\"ukphone\":\"dəus\"},{\"name\":\"route\",\"trans\":[\"路线， 路程\"],\"usphone\":\"raʊt\",\"ukphone\":\"ruːt\"},{\"name\":\"enthusiasm\",\"trans\":[\"热情， 热心， 热忱； 巨大兴趣\"],\"usphone\":\"ɪn'θuzɪæzəm\",\"ukphone\":\"ɪn'θjuːziæzəm\"},{\"name\":\"flexible\",\"trans\":[\"易弯曲的， 灵活的\"],\"usphone\":\"'flɛksəbl\",\"ukphone\":\"'fleksəbl\"},{\"name\":\"adult\",\"trans\":[\"成年的； 成年人的， 适宜于成年人的\",\"成年人\"],\"usphone\":\"'ædʌlt\",\"ukphone\":\"'ædʌlt; ə'dʌlt\"},{\"name\":\"attitude\",\"trans\":[\"态度， 看法； 姿势\"],\"usphone\":\"'ætɪtʊd\",\"ukphone\":\"'ætɪtjuːd\"},{\"name\":\"relative\",\"trans\":[\"有关系的，相对的\",\"亲属， 亲戚\"],\"usphone\":\"'rɛlətɪv\",\"ukphone\":\"'relətɪv\"},{\"name\":\"organ\",\"trans\":[\"器官； 机构； 管风琴； 新闻媒介\"],\"usphone\":\"'ɔrɡən\",\"ukphone\":\"'ɔːgən\"},{\"name\":\"average\",\"trans\":[\"平均的；平常的\",\"平均\",\"平均数，平均\"],\"usphone\":\"'ævərɪdʒ\",\"ukphone\":\"'ævərɪdʒ\"},{\"name\":\"treatment\",\"trans\":[\"待遇； 治疗， 疗法； 对待， 处理\"],\"usphone\":\"'tritmənt\",\"ukphone\":\"'triːtmənt\"},{\"name\":\"compare\",\"trans\":[\"比较， 对照； 把…比作\"],\"usphone\":\"kəm'pɛr\",\"ukphone\":\"kəm'peə\"},{\"name\":\"pluralism\",\"trans\":[\"多重性； 兼职， 兼任\"],\"usphone\":\"'plʊər(ə)lɪz(ə)m\",\"ukphone\":\"'pluərəlɪzəm\"},{\"name\":\"influential\",\"trans\":[\"有影响的； 有权势的\"],\"usphone\":\",ɪnflu'ɛnʃl\",\"ukphone\":\"ˌɪnflu'enʃl\"},{\"name\":\"shiver\",\"trans\":[\"战栗， 颤抖\"],\"usphone\":\"'ʃɪvɚ\",\"ukphone\":\"'ʃɪvə\"},{\"name\":\"Bible\",\"trans\":[\"圣经\"],\"usphone\":\"'baɪbl\",\"ukphone\":\"'baɪbl\"},{\"name\":\"liquor\",\"trans\":[\"酒， 烈性酒\"],\"usphone\":\"'lɪkɚ\",\"ukphone\":\"'lɪkə\"},{\"name\":\"honourable\",\"trans\":[\"光荣的； 可敬的； 正直的\"],\"usphone\":\"'ɔnərəbl\",\"ukphone\":\"'ɒnərəbl\"},{\"name\":\"characteristic\",\"trans\":[\"特有的，典型的\",\"特性\"],\"usphone\":\",kærəktə'rɪstɪk\",\"ukphone\":\"ˌkærəktə'rɪstɪk\"},{\"name\":\"transparent\",\"trans\":[\"透明的； 易识破的； 明显的， 清楚的\"],\"usphone\":\"træns'pærənt\",\"ukphone\":\"træns'pærənt\"},{\"name\":\"interior\",\"trans\":[\"内部的；内地的\",\"内部\"],\"usphone\":\"ɪn'tɪrɪɚ\",\"ukphone\":\"ɪn'tɪəriə\"},{\"name\":\"rouse\",\"trans\":[\"惊起； 唤起； 唤醒\"],\"usphone\":\"raʊz\",\"ukphone\":\"rauz\"},{\"name\":\"journal\",\"trans\":[\"日报， 杂志， 日志\"],\"usphone\":\"'dʒɝnl\",\"ukphone\":\"'dʒɜːnl\"},{\"name\":\"grasp\",\"trans\":[\"抓紧，握紧；理解\",\"抓； 理解\"],\"usphone\":\"ɡræsp\",\"ukphone\":\"grɑːsp\"},{\"name\":\"involvement\",\"trans\":[\"连累； 包含\"],\"usphone\":\"ɪn'vɔlvmənt\",\"ukphone\":\"ɪn'vɒlvmənt\"},{\"name\":\"spark\",\"trans\":[\"发出火花\",\"火花，火星\"],\"usphone\":\"spɑrk\",\"ukphone\":\"spɑːk\"},{\"name\":\"unlike\",\"trans\":[\"不同的\",\"不像…\"],\"usphone\":\"'ʌn'laɪk\",\"ukphone\":\"ˌʌn'laɪk\"},{\"name\":\"assembly\",\"trans\":[\"立法机构； 议会； 集合； 集会的人们； 装配， 组装\"],\"usphone\":\"ə'sɛmbli\",\"ukphone\":\"ə'sembli\"},{\"name\":\"hearing\",\"trans\":[\"听力， 听觉； 听力所及之距离； 意见听取会； 申辩的机会\"],\"usphone\":\"'hɪrɪŋ\",\"ukphone\":\"'hɪərɪŋ\"},{\"name\":\"acquisition\",\"trans\":[\"取得， 获得， 习得； 获得物， 增添的人\"],\"usphone\":\",ækwɪ'zɪʃən\",\"ukphone\":\"ˌækwɪ'zɪʃn\"},{\"name\":\"volcano\",\"trans\":[\"火山\"],\"usphone\":\"vɑl'keno\",\"ukphone\":\"vɒl'keɪnəu\"},{\"name\":\"rigid\",\"trans\":[\"严格的； 死板的； 刚硬的， 僵硬的\"],\"usphone\":\"'rɪdʒɪd\",\"ukphone\":\"'rɪdʒɪd\"},{\"name\":\"deadline\",\"trans\":[\"最后期限\"],\"usphone\":\"ˈdedlaɪn\",\"ukphone\":\"'dedlaɪn\"},{\"name\":\"so-called\",\"trans\":[\"所谓的， 号称的\"],\"usphone\":\",so'kɔld\",\"ukphone\":\"ˌsəu'kɔːld\"},{\"name\":\"grateful\",\"trans\":[\"感激的； 令人愉快的\"],\"usphone\":\"'ɡretfl\",\"ukphone\":\"'greɪtful\"},{\"name\":\"chip\",\"trans\":[\"屑片， 碎片； 炸土豆条； 集成电路片， 集成块； 缺口， 瑕疵\"],\"usphone\":\"tʃɪp\",\"ukphone\":\"tʃɪp\"},{\"name\":\"chin\",\"trans\":[\"颏， 下巴\"],\"usphone\":\"tʃɪn\",\"ukphone\":\"tʃɪn\"},{\"name\":\"emotional\",\"trans\":[\"感情的， 情绪的\"],\"usphone\":\"ɪ'moʃənl\",\"ukphone\":\"ɪ'məuʃənl\"},{\"name\":\"operational\",\"trans\":[\"运转的； 可使用的； 操作上的\"],\"usphone\":\"'ɑpə'reʃənl\",\"ukphone\":\"ˌɒpə'reɪʃənl\"},{\"name\":\"staff\",\"trans\":[\"工作人员；参谋\",\"为…配备人员\"],\"usphone\":\"stæf\",\"ukphone\":\"stɑːf\"},{\"name\":\"involve\",\"trans\":[\"使卷入， 牵涉； 包含， 含有\"],\"usphone\":\"ɪn'vɑlv\",\"ukphone\":\"ɪn'vɒlv\"},{\"name\":\"noticeable\",\"trans\":[\"显而易见的\"],\"usphone\":\"'notɪsəbl\",\"ukphone\":\"'nəutɪsəbl\"},{\"name\":\"assemble\",\"trans\":[\"集合， 召集； 装配\"],\"usphone\":\"ə'sɛmbl\",\"ukphone\":\"ə'sembl\"},{\"name\":\"blast\",\"trans\":[\"爆炸，冲击波；一阵\",\"炸\"],\"usphone\":\"blæst\",\"ukphone\":\"blɑːst\"},{\"name\":\"series\",\"trans\":[\"一系列， 连续； 丛书， 连续剧\"],\"usphone\":\"'sɪriz\",\"ukphone\":\"'sɪəriːz\"},{\"name\":\"complicated\",\"trans\":[\"复杂的， 难懂的\"],\"usphone\":\"'kɑmplɪketɪd\",\"ukphone\":\"'kɒmplɪkeɪtɪd\"},{\"name\":\"cultivate\",\"trans\":[\"耕作， 种植； 培养， 陶冶\"],\"usphone\":\"'kʌltɪvet\",\"ukphone\":\"'kʌltɪveɪt\"},{\"name\":\"maximum\",\"trans\":[\"最大的， 最高的， 顶点的\",\"最大量，顶点\"],\"usphone\":\"ˈmæksəməm\",\"ukphone\":\"'mæksɪməm\"},{\"name\":\"thrive\",\"trans\":[\"兴旺， 繁荣， 旺盛\"],\"usphone\":\"θraɪv\",\"ukphone\":\"θraɪv\"},{\"name\":\"purse\",\"trans\":[\"钱包， 女用小提包\"],\"usphone\":\"pɝs\",\"ukphone\":\"pɜːs\"},{\"name\":\"represent\",\"trans\":[\"作为…的代表； 表示， 象征； 描绘， 表现\"],\"usphone\":\",rɛprɪ'zɛnt\",\"ukphone\":\"ˌreprɪ'zent\"},{\"name\":\"compete\",\"trans\":[\"比赛， 竞争， 对抗\"],\"usphone\":\"kəm'pit\",\"ukphone\":\"kəm'piːt\"},{\"name\":\"dialect\",\"trans\":[\"方言， 土语， 地方话\"],\"usphone\":\"'daɪə'lɛkt\",\"ukphone\":\"'daɪəlekt\"},{\"name\":\"accountant\",\"trans\":[\"会计人员， 会计师\"],\"usphone\":\"ə'kaʊntənt\",\"ukphone\":\"ə'kauntənt\"},{\"name\":\"stocking\",\"trans\":[\"长袜\"],\"usphone\":\"'stɑkɪŋ\",\"ukphone\":\"'stɒkɪŋ\"},{\"name\":\"dim\",\"trans\":[\"昏暗的；朦胧的；模糊不清的\",\"变暗淡\"],\"usphone\":\"dɪm\",\"ukphone\":\"dɪm\"},{\"name\":\"emergency\",\"trans\":[\"紧急情况， 突然事件\"],\"usphone\":\"ɪ'mɝdʒənsi\",\"ukphone\":\"i'mɜːdʒənsi\"},{\"name\":\"dip\",\"trans\":[\"蘸，浸\",\"游一会儿泳\"],\"usphone\":\"dɪp\",\"ukphone\":\"dɪp\"},{\"name\":\"recreational\",\"trans\":[\"休养的； 娱乐的\"],\"usphone\":\",rɛkri'eʃənəl\",\"ukphone\":\"ˌrekri'eɪʃənl\"},{\"name\":\"faculty\",\"trans\":[\"才能， 能力； 系， 科； 全体教员\"],\"usphone\":\"'fæklti\",\"ukphone\":\"'fæklti\"},{\"name\":\"trail\",\"trans\":[\"痕迹，小径\",\"跟踪， 追踪\"],\"usphone\":\"trel\",\"ukphone\":\"treɪl\"},{\"name\":\"passport\",\"trans\":[\"护照\"],\"usphone\":\"'pæspɔrt\",\"ukphone\":\"'pɑːspɔːt\"},{\"name\":\"prior\",\"trans\":[\"在前的； 优先的\"],\"usphone\":\"'praɪɚ\",\"ukphone\":\"'praɪə\"},{\"name\":\"considerate\",\"trans\":[\"考虑周到的， 体贴的， 体谅的\"],\"usphone\":\"kənˈsɪdərɪt\",\"ukphone\":\"kən'sɪdərət\"},{\"name\":\"clue\",\"trans\":[\"线索， 暗示， 提示\"],\"usphone\":\"klʊ\",\"ukphone\":\"kluː\"},{\"name\":\"legal\",\"trans\":[\"法律的； 合法的\"],\"usphone\":\"'ligl\",\"ukphone\":\"'liːgl\"},{\"name\":\"bracket\",\"trans\":[\"括号\",\"把…归为同一类\"],\"usphone\":\"'brækɪt\",\"ukphone\":\"'brækɪt\"},{\"name\":\"highway\",\"trans\":[\"公路， 大路\"],\"usphone\":\"'haɪwe\",\"ukphone\":\"'haɪweɪ\"},{\"name\":\"vanish\",\"trans\":[\"突然不见， 消失； 不复存在， 绝迹\"],\"usphone\":\"'vænɪʃ\",\"ukphone\":\"'vænɪʃ\"},{\"name\":\"signal\",\"trans\":[\"显著的， 重大的\",\"信号，暗号；标志，表示\",\"发信号；标志着\"],\"usphone\":\"'sɪgnl\",\"ukphone\":\"'sɪgnəl\"},{\"name\":\"sightseeing\",\"trans\":[\"观光， 游览\"],\"usphone\":\"'saɪtsiɪŋ\",\"ukphone\":\"'saɪtsiːɪŋ\"},{\"name\":\"parcel\",\"trans\":[\"包裹，小包，邮包\",\"分， 分配； 把…包起来， 捆扎\"],\"usphone\":\"'pɑrsl\",\"ukphone\":\"'pɑːsl\"},{\"name\":\"static\",\"trans\":[\"静的，静态的；静止的，停滞的\",\"静电\"],\"usphone\":\"'stætɪk\",\"ukphone\":\"'stætɪk\"},{\"name\":\"journey\",\"trans\":[\"旅行\",\"旅行，旅程\"],\"usphone\":\"ˈdʒɝ​nɪ\",\"ukphone\":\"'dʒɜːni\"},{\"name\":\"planet\",\"trans\":[\"行星\"],\"usphone\":\"'plænɪt\",\"ukphone\":\"'plænɪt\"},{\"name\":\"finally\",\"trans\":[\"最后； 决定性地\"],\"usphone\":\"'faɪnlɪ\",\"ukphone\":\"'faɪnəli\"},{\"name\":\"exhaust\",\"trans\":[\"使筋疲力尽；用尽；详尽论述\",\"排气装置； 废气\"],\"usphone\":\"ɪɡ'zɔst\",\"ukphone\":\"ɪg'zɔːst\"},{\"name\":\"creep\",\"trans\":[\"爬行， 缓慢地行进\"],\"usphone\":\"krip\",\"ukphone\":\"kriːp\"},{\"name\":\"strap\",\"trans\":[\"带子\",\"捆扎； 用绷带包扎\"],\"usphone\":\"stræp\",\"ukphone\":\"stræp\"},{\"name\":\"grape\",\"trans\":[\"葡萄， 葡萄藤\"],\"usphone\":\"ɡrep\",\"ukphone\":\"greɪp\"},{\"name\":\"conviction\",\"trans\":[\"确信； 坚定的信仰； 说服， 信服； 定罪， 判罪\"],\"usphone\":\"kən'vɪkʃən\",\"ukphone\":\"kən'vɪkʃn\"},{\"name\":\"scholar\",\"trans\":[\"学者； 奖学金获得者\"],\"usphone\":\"'skɑlɚ\",\"ukphone\":\"'skɒlə\"},{\"name\":\"straw\",\"trans\":[\"稻草； 麦秆吸管， 吸管\"],\"usphone\":\"strɔ\",\"ukphone\":\"strɔː\"},{\"name\":\"regarding\",\"trans\":[\"关于\"],\"usphone\":\"rɪ'ɡɑrdɪŋ\",\"ukphone\":\"rɪ'gɑːdɪŋ\"},{\"name\":\"graph\",\"trans\":[\"图， 图表\"],\"usphone\":\"ɡræf\",\"ukphone\":\"græf\"},{\"name\":\"vision\",\"trans\":[\"想象力； 梦幻； 视力， 视觉\"],\"usphone\":\"'vɪʒən\",\"ukphone\":\"'vɪʒn\"},{\"name\":\"accompany\",\"trans\":[\"陪伴， 陪同， 伴随； 为…伴奏\"],\"usphone\":\"ə'kʌmpəni\",\"ukphone\":\"ə'kʌmpəni\"},{\"name\":\"petrol\",\"trans\":[\"汽油\"],\"usphone\":\"'pɛtrəl\",\"ukphone\":\"'petrəl\"},{\"name\":\"acceptance\",\"trans\":[\"接受； 承认； 容忍\"],\"usphone\":\"ək'sɛptəns\",\"ukphone\":\"ək'septəns\"},{\"name\":\"relativity\",\"trans\":[\"相对论； 相关性\"],\"usphone\":\",rɛlə'tɪvəti\",\"ukphone\":\"ˌrelə'tɪvəti\"},{\"name\":\"beneficial\",\"trans\":[\"有利的， 有益的\"],\"usphone\":\",bɛnɪ'fɪʃl\",\"ukphone\":\"ˌbenɪ'fɪʃl\"},{\"name\":\"tackle\",\"trans\":[\"对付，处理；与…交涉；阻截，擒抱\",\"阻截， 擒抱； 用具， 钓具； 辘轳， 滑车\"],\"usphone\":\"'tækl\",\"ukphone\":\"'tækl\"},{\"name\":\"reckon\",\"trans\":[\"认为， 估计； 指望， 盼望； 测算， 测量\"],\"usphone\":\"'rɛkən\",\"ukphone\":\"'rekən\"},{\"name\":\"confusion\",\"trans\":[\"困惑， 糊涂； 混淆； 骚乱\"],\"usphone\":\"kən'fjʊʒən\",\"ukphone\":\"kən'fjuːʒn\"},{\"name\":\"occasion\",\"trans\":[\"场合，时刻；重大活动；时机；起因\",\"引起\"],\"usphone\":\"ə'keʒn\",\"ukphone\":\"ə'keɪʒn\"},{\"name\":\"loan\",\"trans\":[\"贷款， 借\"],\"usphone\":\"lon\",\"ukphone\":\"ləun\"},{\"name\":\"virtual\",\"trans\":[\"实质上的， 事实上的， 实际上的\"],\"usphone\":\"ˈvɝ​tʃʊəl\",\"ukphone\":\"'vɜːtʃuəl\"},{\"name\":\"squeeze\",\"trans\":[\"挤；压榨，榨取；捏，握\",\"挤； 握手； 拮据， 紧缺\"],\"usphone\":\"skwiz\",\"ukphone\":\"skwiːz\"},{\"name\":\"blank\",\"trans\":[\"空白的；茫然的，无表情的\",\"空白； 空白表格\"],\"usphone\":\"blæŋk\",\"ukphone\":\"blæŋk\"},{\"name\":\"landlord\",\"trans\":[\"地主， 房东； 店主\"],\"usphone\":\"'lændlɔrd\",\"ukphone\":\"'lændlɔːd\"},{\"name\":\"session\",\"trans\":[\"会议， 一届会期； 集会\"],\"usphone\":\"'sɛʃən\",\"ukphone\":\"'seʃn\"},{\"name\":\"additional\",\"trans\":[\"附加的， 追加的\"],\"usphone\":\"ə'dɪʃənl\",\"ukphone\":\"ə'dɪʃənl\"},{\"name\":\"worthy\",\"trans\":[\"有价值的， 值得的\"],\"usphone\":\"wɜði\",\"ukphone\":\"'wɜːði\"},{\"name\":\"endless\",\"trans\":[\"无止境的\"],\"usphone\":\"ˈɛndlɪs\",\"ukphone\":\"'endləs\"},{\"name\":\"expectation\",\"trans\":[\"期待， 期望， 预期； 前程， 成功的前景\"],\"usphone\":\",ɛkspɛk'teʃən\",\"ukphone\":\"ˌekspek'teɪʃn\"},{\"name\":\"title\",\"trans\":[\"标题， 题目； 称号， 头衔； 权利， 权益\"],\"usphone\":\"'taɪtl\",\"ukphone\":\"'taɪtl\"},{\"name\":\"mist\",\"trans\":[\"蒙上薄雾； 模糊\",\"薄雾\"],\"usphone\":\"mɪst\",\"ukphone\":\"mɪst\"},{\"name\":\"primarily\",\"trans\":[\"首先； 主要地\"],\"usphone\":\"praɪ'mɛrəli\",\"ukphone\":\"'praɪmərəli; praɪ'merəli\"},{\"name\":\"duration\",\"trans\":[\"持续， 持久\"],\"usphone\":\"du'reʃən\",\"ukphone\":\"dju'reɪʃn\"},{\"name\":\"plantation\",\"trans\":[\"种植园， 人工林\"],\"usphone\":\"plæn'teʃən\",\"ukphone\":\"plɑːn'teɪʃn\"},{\"name\":\"ignore\",\"trans\":[\"不顾， 不理， 忽视\"],\"usphone\":\"ɪɡ'nɔr\",\"ukphone\":\"ɪg'nɔː\"},{\"name\":\"loaf\",\"trans\":[\"游荡， 闲逛\",\"面包\"],\"usphone\":\"lof\",\"ukphone\":\"ləuf\"},{\"name\":\"nuclear\",\"trans\":[\"核子的， 核能的， 核武器的； 核心的\"],\"usphone\":\"'nuklɪɚ\",\"ukphone\":\"'njuːkliə\"},{\"name\":\"reception\",\"trans\":[\"招待会， 欢迎会； 接受； 接待； 接收效果\"],\"usphone\":\"rɪ'sɛpʃən\",\"ukphone\":\"rɪ'sepʃn\"},{\"name\":\"outward\",\"trans\":[\"外面的； 外表的； 向外的\"],\"usphone\":\"'aʊtwɚd\",\"ukphone\":\"'autwəd\"},{\"name\":\"bloody\",\"trans\":[\"[用于加强语气]非常，很\",\"[用于加强语气]非常的；该死的；流血的；嗜杀的\",\"血染\"],\"usphone\":\"'blʌdi\",\"ukphone\":\"'blʌdi\"},{\"name\":\"poetry\",\"trans\":[\"诗， 诗歌， 诗集\"],\"usphone\":\"'poətri\",\"ukphone\":\"'pəuətri\"},{\"name\":\"owner\",\"trans\":[\"物主， 所有人\"],\"usphone\":\"'onɚ\",\"ukphone\":\"'əunə\"},{\"name\":\"vapour\",\"trans\":[\"蒸汽\"],\"usphone\":\"'vepɚ\",\"ukphone\":\"'veɪpə\"},{\"name\":\"sole\",\"trans\":[\"单独的， 唯一的\",\"脚底，鞋底，袜底\"],\"usphone\":\"sol\",\"ukphone\":\"səul\"},{\"name\":\"jury\",\"trans\":[\"陪审团； 评奖团\"],\"usphone\":\"'dʒʊri\",\"ukphone\":\"'dʒuəri\"},{\"name\":\"holy\",\"trans\":[\"神圣的， 圣洁的， 虔诚的\"],\"usphone\":\"'holi\",\"ukphone\":\"'həuli\"},{\"name\":\"spelling\",\"trans\":[\"拼字， 拼法， 拼写法\"],\"usphone\":\"'spɛlɪŋ\",\"ukphone\":\"'spelɪŋ\"},{\"name\":\"relax\",\"trans\":[\"放松， 松弛； 放宽， 缓和\"],\"usphone\":\"rɪ'læks\",\"ukphone\":\"rɪ'læks\"},{\"name\":\"priest\",\"trans\":[\"神父， 牧师\"],\"usphone\":\"prist\",\"ukphone\":\"priːst\"},{\"name\":\"monitor\",\"trans\":[\"班长；监视器，检测器；显示器\",\"监听； 检测\"],\"usphone\":\"'mɔnɪtɚ\",\"ukphone\":\"'mɒnɪtə\"},{\"name\":\"permission\",\"trans\":[\"允许， 许可， 准许\"],\"usphone\":\"pɚ'mɪʃən\",\"ukphone\":\"pə'mɪʃn\"},{\"name\":\"grand\",\"trans\":[\"宏伟的； 重大的； 傲慢的； 派头大的； 绝佳的； 全部的\"],\"usphone\":\"ɡrænd\",\"ukphone\":\"grænd\"},{\"name\":\"schedule\",\"trans\":[\"时刻表，日程安排表；清单，明细表\",\"安排， 排定\"],\"usphone\":\"ˈskedʒʊl; skɛdʒʊl\",\"ukphone\":\"'ʃedjuːl\"},{\"name\":\"postage\",\"trans\":[\"邮费， 邮资\"],\"usphone\":\"'postɪdʒ\",\"ukphone\":\"'pəustɪdʒ\"},{\"name\":\"tame\",\"trans\":[\"驯服的，顺从的；沉闷的，乏味的\",\"制服， 控制并利用； 驯化， 驯服\"],\"usphone\":\"teɪm\",\"ukphone\":\"teɪm\"},{\"name\":\"material\",\"trans\":[\"物质的， 实体的； 肉体的； 重要的， 实质性的\",\"材料，素材\"],\"usphone\":\"mə'tɪrɪəl\",\"ukphone\":\"mə'tɪəriəl\"},{\"name\":\"universe\",\"trans\":[\"宇宙， 世界； 领域， 范围\"],\"usphone\":\"'junɪvɝs\",\"ukphone\":\"'juːnɪvɜːs\"},{\"name\":\"interpret\",\"trans\":[\"解释， 说明； 口译\"],\"usphone\":\"ɪn'tɝprɪt\",\"ukphone\":\"ɪn'tɜːprɪt\"},{\"name\":\"spectacular\",\"trans\":[\"壮观的，引人注目的\",\"壮观的演出； 惊人之举\"],\"usphone\":\"spɛk'tækjəlɚ\",\"ukphone\":\"spek'tækjələ\"},{\"name\":\"inherit\",\"trans\":[\"成为继承人\",\"继承\"],\"usphone\":\"ɪn'hɛrɪt\",\"ukphone\":\"ɪn'herɪt\"},{\"name\":\"peculiar\",\"trans\":[\"奇怪的， 古怪的； 特有的\"],\"usphone\":\"pɪ'kjulɪɚ\",\"ukphone\":\"pɪ'kjuːliə\"},{\"name\":\"blanket\",\"trans\":[\"毛毯， 毯子， 羊毛毯\"],\"usphone\":\"'blæŋkɪt\",\"ukphone\":\"'blæŋkɪt\"},{\"name\":\"grant\",\"trans\":[\"授予物；补助金\",\"授予， 给予； 同意\"],\"usphone\":\"ɡrænt\",\"ukphone\":\"grɑːnt\"},{\"name\":\"injection\",\"trans\":[\"注射， 注入； 充满\"],\"usphone\":\"ɪn'dʒɛkʃən\",\"ukphone\":\"ɪn'dʒekʃn\"},{\"name\":\"envy\",\"trans\":[\"妒忌，羡慕；妒忌的对象\",\"妒忌， 羡慕\"],\"usphone\":\"'ɛnvi\",\"ukphone\":\"'envi\"},{\"name\":\"hut\",\"trans\":[\"小屋， 棚屋\"],\"usphone\":\"hʌt\",\"ukphone\":\"hʌt\"},{\"name\":\"invincible\",\"trans\":[\"不能征服的， 无敌的\"],\"usphone\":\"ɪn'vɪnsəbl\",\"ukphone\":\"ɪn'vɪnsəbl\"},{\"name\":\"discount\",\"trans\":[\"折扣\",\"将…打折扣； 不信； 漠视， 低估\"],\"usphone\":\"dɪs'kaʊnt\",\"ukphone\":\"'dɪskaʊnt\"},{\"name\":\"convert\",\"trans\":[\"转变， 转化； 改变\"],\"usphone\":\"kən'vɝt\",\"ukphone\":\"kən'vɜːt\"},{\"name\":\"construct\",\"trans\":[\"建造； 构思\",\"建筑物； 构想， 观念\"],\"usphone\":\"kən'strʌkt\",\"ukphone\":\"kən'strʌkt\"},{\"name\":\"attempt\",\"trans\":[\"尝试， 试图， 努力\"],\"usphone\":\"ə'tɛmpt\",\"ukphone\":\"ə'tempt\"},{\"name\":\"thick\",\"trans\":[\"厚厚地\",\"厚的，密的，浓的；不清楚的，口音重的\"],\"usphone\":\"θɪk\",\"ukphone\":\"θɪk\"},{\"name\":\"superficial\",\"trans\":[\"表面的， 肤浅的\"],\"usphone\":\",supɚ'fɪʃl\",\"ukphone\":\"ˌsjuːpə'fɪʃl\"},{\"name\":\"division\",\"trans\":[\"分， 分配； 除法； 分歧； 分裂\"],\"usphone\":\"də'vɪʒən\",\"ukphone\":\"dɪ'vɪʒn\"},{\"name\":\"executive\",\"trans\":[\"执行的\",\"执行者\"],\"usphone\":\"ɪɡ'zɛkjətɪv\",\"ukphone\":\"ɪg'zekjətɪv\"},{\"name\":\"navigation\",\"trans\":[\"航行， 航海， 航空； 导航， 领航\"],\"usphone\":\"'nævə'geʃən\",\"ukphone\":\"ˌnævɪ'geɪʃn\"},{\"name\":\"melt\",\"trans\":[\"融化； 熔化； 消散\"],\"usphone\":\"mɛlt\",\"ukphone\":\"melt\"},{\"name\":\"hook\",\"trans\":[\"钩住\",\"钩，挂钩\"],\"usphone\":\"hʊk\",\"ukphone\":\"huk\"},{\"name\":\"stale\",\"trans\":[\"不新鲜的； 陈腐的， 过时的\"],\"usphone\":\"stel\",\"ukphone\":\"steɪl\"},{\"name\":\"balance\",\"trans\":[\"使平衡；称；权衡，比较\",\"天平； 平衡； 结存， 结欠\"],\"usphone\":\"'bæləns\",\"ukphone\":\"'bæləns\"},{\"name\":\"cigar\",\"trans\":[\"雪茄烟\"],\"usphone\":\"sɪ'ɡɑr\",\"ukphone\":\"sɪ'gɑː\"},{\"name\":\"action\",\"trans\":[\"行动； 已做的事； 作用， 功能； 情节\"],\"usphone\":\"'ækʃən\",\"ukphone\":\"'ækʃn\"},{\"name\":\"stadium\",\"trans\":[\"运动场， 体育场\"],\"usphone\":\"'stedɪəm\",\"ukphone\":\"'steɪdiəm\"},{\"name\":\"whereas\",\"trans\":[\"然而， 但是， 尽管\"],\"usphone\":\"'wɛr'æz\",\"ukphone\":\"weər'æz\"},{\"name\":\"pitch\",\"trans\":[\"投， 掷； 架设， 搭， 营； 颠簸\",\"球场；程度，强度；高度；音高；沥青\",\"投掷；使猛然倒下；表达；把…定于特定程度；定调\"],\"usphone\":\"pɪtʃ\",\"ukphone\":\"pɪtʃ\"},{\"name\":\"kindness\",\"trans\":[\"仁慈， 好意\"],\"usphone\":\"'kaɪndnəs\",\"ukphone\":\"'kaɪndnəs\"},{\"name\":\"adoptive\",\"trans\":[\"收养关系的； 采用的\"],\"usphone\":\"ə'dɑptɪv\",\"ukphone\":\"ə'dɒptɪv\"},{\"name\":\"chop\",\"trans\":[\"砍，劈；切细\",\"排骨\"],\"usphone\":\"tʃɑp\",\"ukphone\":\"tʃɒp\"},{\"name\":\"electrical\",\"trans\":[\"电的， 电气科学的\"],\"usphone\":\"ɪ'lɛktrɪkl\",\"ukphone\":\"ɪ'lektrɪkl\"},{\"name\":\"statue\",\"trans\":[\"塑像， 雕像， 铸像\"],\"usphone\":\"'stætʃu\",\"ukphone\":\"'stætʃuː\"},{\"name\":\"being\",\"trans\":[\"存在； 生物， 生命\"],\"usphone\":\"'biɪŋ\",\"ukphone\":\"'biːɪŋ\"},{\"name\":\"sensitive\",\"trans\":[\"敏感的， 灵敏的， 神经过敏的； 容易生气的， 易受伤害的\"],\"usphone\":\"'sɛnsətɪv\",\"ukphone\":\"'sensətɪv\"},{\"name\":\"protest\",\"trans\":[\"抗议， 反对\",\"抗议， 反对\"],\"usphone\":\"prəˈtɛst;protɛst\",\"ukphone\":\"prəˈtest;ˈprəʊtest\"},{\"name\":\"classification\",\"trans\":[\"分类， 分级， 分类法； 类别， 级别\"],\"usphone\":\",klæsɪfɪ'keʃən\",\"ukphone\":\"ˌklæsɪfɪ'keɪʃn\"},{\"name\":\"vacant\",\"trans\":[\"空的， 未被占用的； 空缺的； 茫然的， 空虚的\"],\"usphone\":\"'vekənt\",\"ukphone\":\"'veɪkənt\"},{\"name\":\"physicist\",\"trans\":[\"物理学家\"],\"usphone\":\"'fɪzɪsɪst\",\"ukphone\":\"'fɪzɪsɪst\"},{\"name\":\"afford\",\"trans\":[\"担负得起； 提供\"],\"usphone\":\"ə'fɔrd\",\"ukphone\":\"ə'fɔːd\"},{\"name\":\"underground\",\"trans\":[\"在地下，往地下；秘密地，不公开地\",\"地下的；秘密的，不公开的\",\"地铁； 地下组织\"],\"usphone\":\"ʌndɚˈɡraʊnd\",\"ukphone\":\"'ʌndəgraund\"},{\"name\":\"curse\",\"trans\":[\"诅咒，咒骂\",\"天谴； 祸害， 祸根\"],\"usphone\":\"kɝs\",\"ukphone\":\"kɜːs\"},{\"name\":\"impression\",\"trans\":[\"印象； 印记\"],\"usphone\":\"ɪm'prɛʃən\",\"ukphone\":\"ɪm'preʃn\"},{\"name\":\"baseball\",\"trans\":[\"棒球\"],\"usphone\":\"'besbɔl\",\"ukphone\":\"'beɪsbɔːl\"},{\"name\":\"interval\",\"trans\":[\"间隔， 间距； 幕间休息\"],\"usphone\":\"'ɪntɚvl\",\"ukphone\":\"'ɪntəvl\"},{\"name\":\"evaluate\",\"trans\":[\"评价； 估…的价\"],\"usphone\":\"ɪ'væljʊ'et\",\"ukphone\":\"ɪ'væljueɪt\"},{\"name\":\"machinery\",\"trans\":[\"机器， 机械\"],\"usphone\":\"mə'ʃinəri\",\"ukphone\":\"mə'ʃiːnəri\"},{\"name\":\"status\",\"trans\":[\"地位， 身份； 情形， 状况\"],\"usphone\":\"ˈstetəs\",\"ukphone\":\"'steɪtəs\"},{\"name\":\"shield\",\"trans\":[\"防护物，护罩；盾\",\"保护， 防护\"],\"usphone\":\"ʃild\",\"ukphone\":\"ʃiːld\"},{\"name\":\"upset\",\"trans\":[\"心烦的， 苦恼的； 不适的\",\"使心烦意乱，使苦恼，使不适；搅乱；弄翻，倾覆\",\"翻倒；搅乱；不安；不适\"],\"usphone\":\"ʌp'sɛt\",\"ukphone\":\"ʌp'set\"},{\"name\":\"inference\",\"trans\":[\"推断结果， 结论； 推论， 推理， 推断\"],\"usphone\":\"'ɪnfərəns\",\"ukphone\":\"'ɪnfərəns\"},{\"name\":\"curve\",\"trans\":[\"弯曲\",\"曲线，弯，弯曲处\"],\"usphone\":\"kɝv\",\"ukphone\":\"kɜːv\"},{\"name\":\"dot\",\"trans\":[\"点，圆点\",\"打点于\"],\"usphone\":\"dɑt\",\"ukphone\":\"dɒt\"},{\"name\":\"skim\",\"trans\":[\"撇去， 掠过， 擦过； 浏览， 略读\"],\"usphone\":\"skɪm\",\"ukphone\":\"skɪm\"},{\"name\":\"phenomenon\",\"trans\":[\"现象\"],\"usphone\":\"fə'nɑmɪnən\",\"ukphone\":\"fə'nɒmɪnən\"},{\"name\":\"notify\",\"trans\":[\"通知， 告知， 报告\"],\"usphone\":\"'notə'fai\",\"ukphone\":\"'nəutɪfaɪ\"},{\"name\":\"mention\",\"trans\":[\"提及， 说起\"],\"usphone\":\"'mɛnʃən\",\"ukphone\":\"'menʃn\"},{\"name\":\"stream\",\"trans\":[\"流出， 涌出\",\"河，溪流；一股，一串\"],\"usphone\":\"strim\",\"ukphone\":\"striːm\"},{\"name\":\"laundry\",\"trans\":[\"洗衣房， 洗衣店； 待洗的衣服， 洗好的衣服\"],\"usphone\":\"'lɔndri\",\"ukphone\":\"'lɔːndri\"},{\"name\":\"accumulate\",\"trans\":[\"积累， 堆积\"],\"usphone\":\"ə'kjumjəlet\",\"ukphone\":\"ə'kjuːmjəleɪt\"},{\"name\":\"crime\",\"trans\":[\"罪， 罪行， 犯罪\"],\"usphone\":\"kraɪm\",\"ukphone\":\"kraɪm\"},{\"name\":\"heave\",\"trans\":[\"起伏，隆起；呕吐，恶心\",\"举起，提起，拉起，拖；扔；发出\",\"举起； 起伏， 升降\"],\"usphone\":\"hiv\",\"ukphone\":\"hiːv\"},{\"name\":\"leisure\",\"trans\":[\"空闲时间； 悠闲\"],\"usphone\":\"'liʒɚ\",\"ukphone\":\"'leʒə\"},{\"name\":\"nourish\",\"trans\":[\"提供养分， 养育\"],\"usphone\":\"'nɜrɪʃ\",\"ukphone\":\"'nʌrɪʃ\"},{\"name\":\"surround\",\"trans\":[\"围， 围绕； 圈住\"],\"usphone\":\"sə'raʊnd\",\"ukphone\":\"sə'raund\"},{\"name\":\"mat\",\"trans\":[\"席子， 垫子\"],\"usphone\":\"mæt\",\"ukphone\":\"mæt\"},{\"name\":\"cigarette\",\"trans\":[\"香烟， 纸烟， 卷烟\"],\"usphone\":\"ˌsɪɡəˈrɛt, ˈsɪɡəˌrɛt\",\"ukphone\":\"ˌsɪgə'ret\"},{\"name\":\"torch\",\"trans\":[\"火炬， 火把； 手电筒\"],\"usphone\":\"tɔrtʃ\",\"ukphone\":\"tɔːtʃ\"},{\"name\":\"positive\",\"trans\":[\"确实的， 明确的； 积极的， 肯定的\"],\"usphone\":\"'pɑzətɪv\",\"ukphone\":\"'pɔzətɪv\"},{\"name\":\"favourite\",\"trans\":[\"特别受喜爱的\",\"特别受喜爱的人\"],\"usphone\":\"'fevərɪt\",\"ukphone\":\"'feɪvərɪt\"},{\"name\":\"menu\",\"trans\":[\"菜单\"],\"usphone\":\"'mɛnju\",\"ukphone\":\"'menjuː\"},{\"name\":\"prospect\",\"trans\":[\"勘探， 勘察\",\"前景， 前途， 可能性； 景象， 景色； 可能成为主顾的人； 有希望的候选人\"],\"usphone\":\"'prɑspɛkt\",\"ukphone\":\"'prɒspekt\"},{\"name\":\"radar\",\"trans\":[\"雷达\"],\"usphone\":\"'redɑr\",\"ukphone\":\"'reɪdɑː\"},{\"name\":\"refugee\",\"trans\":[\"难民\"],\"usphone\":\"'rɛfjʊdʒi\",\"ukphone\":\"ˌrefju'dʒiː\"},{\"name\":\"aluminium\",\"trans\":[\"铝\"],\"usphone\":\",æljə'mɪnɪəm\",\"ukphone\":\"ˌæljə'mɪniəm\"},{\"name\":\"comparable\",\"trans\":[\"可比较的； 类似的； 比得上的\"],\"usphone\":\"'kɑmpərəbl\",\"ukphone\":\"'kɒmpərəbl\"},{\"name\":\"specialize\",\"trans\":[\"成为…专家； 专攻\"],\"usphone\":\"'spɛʃəlaɪz\",\"ukphone\":\"'speʃəlaɪz\"},{\"name\":\"rotate\",\"trans\":[\"旋转， 转动； 轮流\"],\"usphone\":\"'rotet\",\"ukphone\":\"rəu'teɪt\"},{\"name\":\"instance\",\"trans\":[\"例子， 实例， 事例\"],\"usphone\":\"'ɪnstəns\",\"ukphone\":\"'ɪnstəns\"},{\"name\":\"opera\",\"trans\":[\"歌剧\"],\"usphone\":\"'ɑprə\",\"ukphone\":\"'ɒprə\"},{\"name\":\"presumably\",\"trans\":[\"大概， 可能， 据推测\"],\"usphone\":\"prɪ'zuməbli\",\"ukphone\":\"prɪ'zjuːməbli\"},{\"name\":\"conscience\",\"trans\":[\"良心， 道德心\"],\"usphone\":\"ˈkɑːnʃəns\",\"ukphone\":\"'kɒnʃəns\"},{\"name\":\"subject\",\"trans\":[\"题目； 学科； 主语\",\"使隶属\"],\"usphone\":\"ˈsʌbdʒɪkt;(for adj.)ˈsʌbdʒɪkt;(for v.)səbˈdʒɛkt\",\"ukphone\":\"ˈsʌbdʒɪkt;(for adj.)ˈsʌbdʒɪkt;(for v.)səbˈdʒekt\"},{\"name\":\"practically\",\"trans\":[\"几乎， 简直； 实际上\"],\"usphone\":\"'præktɪkli\",\"ukphone\":\"'præktɪkli\"},{\"name\":\"recognition\",\"trans\":[\"认出， 识别； 承认； 赏识， 表彰， 报偿\"],\"usphone\":\",rɛkəɡ'nɪʃən\",\"ukphone\":\"ˌrekəg'nɪʃn\"},{\"name\":\"cassette\",\"trans\":[\"盒式录音带\"],\"usphone\":\"kə'sɛt\",\"ukphone\":\"kə'set\"},{\"name\":\"blade\",\"trans\":[\"刀刃， 刀片， 叶片\"],\"usphone\":\"bled\",\"ukphone\":\"bleɪd\"},{\"name\":\"arrangement\",\"trans\":[\"整理， 排列， 安排； 准备工作\"],\"usphone\":\"ə'rendʒmənt\",\"ukphone\":\"ə'reɪndʒmənt\"},{\"name\":\"revenue\",\"trans\":[\"收入， 收益； 税收， 岁入\"],\"usphone\":\"'rɛvənu\",\"ukphone\":\"'revənjuː\"},{\"name\":\"strip\",\"trans\":[\"脱光衣服；剥夺，夺去\",\"条带\"],\"usphone\":\"strɪp\",\"ukphone\":\"strɪp\"},{\"name\":\"solution\",\"trans\":[\"解决； 解决办法； 溶液\"],\"usphone\":\"sə'luʃən\",\"ukphone\":\"sə'ljuːʃn\"},{\"name\":\"continuous\",\"trans\":[\"连续不断的； 延伸的\"],\"usphone\":\"kən'tɪnjʊəs\",\"ukphone\":\"kən'tɪnjuəs\"},{\"name\":\"opponent\",\"trans\":[\"对手， 敌手， 对抗者\"],\"usphone\":\"ə'ponənt\",\"ukphone\":\"ə'pəunənt\"},{\"name\":\"accelerate\",\"trans\":[\"使加快， 使增速\"],\"usphone\":\"əkˈsɛləˌret\",\"ukphone\":\"ək'seləreɪt\"},{\"name\":\"backward\",\"trans\":[\"[-]倒； 向后， 往回\",\"向后的，倒的；落后的，进步慢的\"],\"usphone\":\"'bækwɚd\",\"ukphone\":\"'bækwəd\"},{\"name\":\"grain\",\"trans\":[\"谷物， 谷粒； 颗粒； 少量， 微量\"],\"usphone\":\"ɡren\",\"ukphone\":\"greɪn\"},{\"name\":\"maid\",\"trans\":[\"女仆， 侍女\"],\"usphone\":\"med\",\"ukphone\":\"meɪd\"},{\"name\":\"residence\",\"trans\":[\"住处， 住宅； 居住； 居住资格\"],\"usphone\":\"'rɛzɪdəns\",\"ukphone\":\"'rezɪdəns\"},{\"name\":\"credit\",\"trans\":[\"信贷，赊欠；赞扬，荣誉；学分；信任\",\"相信； 把…记入贷方； 把…归于\"],\"usphone\":\"'krɛdɪt\",\"ukphone\":\"'kredɪt\"},{\"name\":\"regardless\",\"trans\":[\"不顾后果地； 不管怎样， 无论如何\"],\"usphone\":\"rɪ'ɡɑrdləs\",\"ukphone\":\"rɪ'gɑːdləs\"},{\"name\":\"oxygen\",\"trans\":[\"氧， 氧气\"],\"usphone\":\"'ɑksɪdʒən\",\"ukphone\":\"'ɒksɪdʒən\"},{\"name\":\"intensive\",\"trans\":[\"加强的； 精深的， 透彻的； 精耕细作的\"],\"usphone\":\"ɪn'tɛnsɪv\",\"ukphone\":\"ɪn'tensɪv\"},{\"name\":\"alter\",\"trans\":[\"改变， 变更， 变动\"],\"usphone\":\"'ɔltɚ\",\"ukphone\":\"'ɔːltə\"},{\"name\":\"combine\",\"trans\":[\"结合， 联合； 化合\",\"联合企业； 联合收割机\"],\"usphone\":\"kəm'baɪn\",\"ukphone\":\"kəm'baɪn\"},{\"name\":\"ideal\",\"trans\":[\"理想的；观念的；空想的\",\"理想； 理想的东西\"],\"usphone\":\"aɪ'diəl\",\"ukphone\":\"aɪ'diːəl\"},{\"name\":\"bearing\",\"trans\":[\"举止， 风度； 方位， 方向感； 影响\"],\"usphone\":\"'bɛrɪŋ\",\"ukphone\":\"'beərɪŋ\"},{\"name\":\"illustrate\",\"trans\":[\"说明\"],\"usphone\":\"'ɪləstret\",\"ukphone\":\"'ɪləstreɪt\"},{\"name\":\"occur\",\"trans\":[\"发生， 出现， 存在； 被想起， 被想到\"],\"usphone\":\"ə'kɝ\",\"ukphone\":\"ə'kɜː\"},{\"name\":\"comedy\",\"trans\":[\"喜剧， 喜剧性\"],\"usphone\":\"'kɑmədi\",\"ukphone\":\"'kɒmədi\"},{\"name\":\"broom\",\"trans\":[\"扫帚\"],\"usphone\":\"brum\",\"ukphone\":\"bruːm\"},{\"name\":\"establishment\",\"trans\":[\"建立， 设立， 确立； 企业； 当权人物\"],\"usphone\":\"ɪ'stæblɪʃmənt\",\"ukphone\":\"ɪ'stæblɪʃmənt\"},{\"name\":\"pressure\",\"trans\":[\"压，压强；压迫\",\"对…施加压力， 迫使\"],\"usphone\":\"'prɛʃɚ\",\"ukphone\":\"'preʃə\"},{\"name\":\"breeze\",\"trans\":[\"飘然而行\",\"微风，和风\"],\"usphone\":\"briz\",\"ukphone\":\"briːz\"},{\"name\":\"trash\",\"trans\":[\"垃圾，废物；拙劣的文学作品；没用的人，社会渣滓，败类\",\"捣毁， 破坏\"],\"usphone\":\"træʃ\",\"ukphone\":\"træʃ\"},{\"name\":\"painter\",\"trans\":[\"漆工； 画家\"],\"usphone\":\"'pentɚ\",\"ukphone\":\"'peɪntə\"},{\"name\":\"millimetre\",\"trans\":[\"毫米\"],\"usphone\":\"'mili,mi:tə\",\"ukphone\":\"'mɪliˌmiːtə\"},{\"name\":\"horn\",\"trans\":[\"角； 号角； 警报器\"],\"usphone\":\"hɔrn\",\"ukphone\":\"hɒːn\"},{\"name\":\"specialist\",\"trans\":[\"专家\"],\"usphone\":\"'spɛʃəlɪst\",\"ukphone\":\"'speʃəlɪst\"},{\"name\":\"infer\",\"trans\":[\"推论， 推断； 猜想\"],\"usphone\":\"ɪn'fɝ\",\"ukphone\":\"ɪn'fɜː\"},{\"name\":\"compass\",\"trans\":[\"罗盘， 指南针； 圆规； 界限， 范围\"],\"usphone\":\"'kʌmpəs\",\"ukphone\":\"'kʌmpəs\"},{\"name\":\"background\",\"trans\":[\"出身背景， 经历； 背景资料； 背景， 底子\"],\"usphone\":\"'bækɡraʊnd\",\"ukphone\":\"'bækgraund\"},{\"name\":\"sore\",\"trans\":[\"痛的；恼火的；急剧的，剧烈的\",\"疮， 痛处\"],\"usphone\":\"sɔr\",\"ukphone\":\"sɔː\"},{\"name\":\"dispose\",\"trans\":[\"处理， 解决； 使倾向于\"],\"usphone\":\"dɪ'spoz\",\"ukphone\":\"dɪ'spəuz\"},{\"name\":\"glow\",\"trans\":[\"发白热光\",\"白热光；脸红；激情\"],\"usphone\":\"ɡlo\",\"ukphone\":\"gləu\"},{\"name\":\"curtain\",\"trans\":[\"门帘， 窗帘； 幕\"],\"usphone\":\"'kɝtn\",\"ukphone\":\"'kɜːtn\"},{\"name\":\"laughter\",\"trans\":[\"笑， 笑声\"],\"usphone\":\"'læftɚ\",\"ukphone\":\"'lɑːftə\"},{\"name\":\"constitution\",\"trans\":[\"宪法， 章程； 组成； 设立\"],\"usphone\":\"'kɑnstə'tʊʃən\",\"ukphone\":\"ˌkɒnstɪ'tjuːʃn\"},{\"name\":\"blend\",\"trans\":[\"混合\"],\"usphone\":\"blɛnd\",\"ukphone\":\"blend\"},{\"name\":\"certificate\",\"trans\":[\"证书， 证件， 执照\"],\"usphone\":\"sɚˈtɪfɪkɪt; (for v.,) sɚˈtɪfɪˌket\",\"ukphone\":\"sə'tɪfɪkət\"},{\"name\":\"mess\",\"trans\":[\"凌乱状态，混乱的局面；困境\",\"弄糟， 弄脏， 搞乱\"],\"usphone\":\"mɛs\",\"ukphone\":\"mes\"},{\"name\":\"sour\",\"trans\":[\"酸的；馊的，酸味的；脾气坏的\",\"变酸， 变馊； 变得乖戾\"],\"usphone\":\"'saʊɚ\",\"ukphone\":\"'sauə\"},{\"name\":\"delete\",\"trans\":[\"删除， 擦掉\"],\"usphone\":\"dɪ'lit\",\"ukphone\":\"dɪ'liːt\"},{\"name\":\"nonsense\",\"trans\":[\"胡说， 废话； 冒失的行动\"],\"usphone\":\"'nɑnsɛns\",\"ukphone\":\"'nɒnsns\"},{\"name\":\"stain\",\"trans\":[\"玷污；给…着色\",\"污点， 污迹\"],\"usphone\":\"sten\",\"ukphone\":\"steɪn\"},{\"name\":\"transform\",\"trans\":[\"使改观， 改革； 变换， 把…转换成\"],\"usphone\":\"træns'fɔrm\",\"ukphone\":\"træns'fɔːm\"},{\"name\":\"leadership\",\"trans\":[\"领导\"],\"usphone\":\"'lidɚʃɪp\",\"ukphone\":\"'liːdəʃɪp\"},{\"name\":\"genuine\",\"trans\":[\"真的， 真正的； 真诚的\"],\"usphone\":\"'dʒɛnjʊɪn\",\"ukphone\":\"'dʒenjuɪn\"},{\"name\":\"X-ray\",\"trans\":[\"X射线， X光\"],\"usphone\":\"'eksreɪ\",\"ukphone\":\"'eks'reɪ\"},{\"name\":\"physical\",\"trans\":[\"身体的； 物理的； 物质的， 有形的\"],\"usphone\":\"'fɪzɪkl\",\"ukphone\":\"'fɪzɪkl\"},{\"name\":\"fulfil\",\"trans\":[\"履行， 实现， 完成； 满足， 使满意\"],\"usphone\":\"ful'fil\",\"ukphone\":\"ful'fɪl\"},{\"name\":\"wicked\",\"trans\":[\"坏的， 令人厌恶的； 淘气的， 顽皮的\"],\"usphone\":\"'wɪkɪd\",\"ukphone\":\"'wɪkɪd\"},{\"name\":\"spokesman\",\"trans\":[\"发言人\"],\"usphone\":\"'spoksmən\",\"ukphone\":\"'spəuksmən\"},{\"name\":\"equation\",\"trans\":[\"方程， 等式\"],\"usphone\":\"ɪ'kweʒn\",\"ukphone\":\"ɪ'kweɪʒn\"},{\"name\":\"impressive\",\"trans\":[\"给人深刻印象的\"],\"usphone\":\"ɪm'prɛsɪv\",\"ukphone\":\"ɪm'presɪv\"},{\"name\":\"compound\",\"trans\":[\"复合的， 化合的\",\"化合物，复合物；复合词\",\"使恶化， 加重； 使化合， 使合成\"],\"usphone\":\"'kɑmpaʊnd\",\"ukphone\":\"'kɒmpaʊnd\"},{\"name\":\"structure\",\"trans\":[\"结构，构造\",\"建造\"],\"usphone\":\"'strʌktʃɚ\",\"ukphone\":\"'strʌktʃə\"},{\"name\":\"intensity\",\"trans\":[\"强烈， 剧烈； 强度\"],\"usphone\":\"ɪn'tɛnsəti\",\"ukphone\":\"ɪn'tensəti\"},{\"name\":\"waken\",\"trans\":[\"醒来， 弄醒\"],\"usphone\":\"'wekən\",\"ukphone\":\"'weɪkən\"},{\"name\":\"stake\",\"trans\":[\"桩；利害关系；股份；赌金，赌注\",\"以…打赌， 拿…冒险\"],\"usphone\":\"stek\",\"ukphone\":\"steɪk\"},{\"name\":\"extraordinary\",\"trans\":[\"非同寻常的， 特别的\"],\"usphone\":\"ɪkˈstrɔrdənerɪ; ɪkˈstrɔrdnˌɛrɪ\",\"ukphone\":\"ɪk'strɔːdnri\"},{\"name\":\"witness\",\"trans\":[\"证据；目击者，证人\",\"目击； 为…作证， 证明\"],\"usphone\":\"ˈwɪtnɪs\",\"ukphone\":\"'wɪtnəs\"},{\"name\":\"concerning\",\"trans\":[\"关于\"],\"usphone\":\"kən'sɝnɪŋ\",\"ukphone\":\"kən'sɜːnɪŋ\"},{\"name\":\"attraction\",\"trans\":[\"吸引， 吸引力； 引力； 具有吸引力的事物\"],\"usphone\":\"ə'trækʃən\",\"ukphone\":\"ə'trækʃn\"},{\"name\":\"conventional\",\"trans\":[\"普通的； 习惯的， 常规的； 因循守旧的\"],\"usphone\":\"kən'vɛnʃənl\",\"ukphone\":\"kən'venʃənl\"},{\"name\":\"regulation\",\"trans\":[\"规章， 规则； 管理， 控制； 调节\"],\"usphone\":\"ˌrɛɡjəˈleʃən\",\"ukphone\":\"ˌregju'leɪʃn\"},{\"name\":\"puzzle\",\"trans\":[\"迷惑，为难；苦思\",\"智力测验； 谜， 难题， 令人费解的事； 困惑， 迷惑\"],\"usphone\":\"'pʌzl\",\"ukphone\":\"'pʌzl\"},{\"name\":\"circulation\",\"trans\":[\"循环； 流传； 发行， 流通\"],\"usphone\":\",sɝkjə'leʃən\",\"ukphone\":\"ˌsɜːkjə'leɪʃn\"},{\"name\":\"bake\",\"trans\":[\"烤， 烘， 焙\"],\"usphone\":\"bek\",\"ukphone\":\"beɪk\"},{\"name\":\"mere\",\"trans\":[\"仅仅的； 纯粹的\"],\"usphone\":\"mɪr\",\"ukphone\":\"mɪə\"},{\"name\":\"accommodation\",\"trans\":[\"住处； 膳宿\"],\"usphone\":\"ə,kɑmə'deʃən\",\"ukphone\":\"əˌkɒmə'deɪʃn\"},{\"name\":\"evident\",\"trans\":[\"明显的， 明白的\"],\"usphone\":\"'ɛvɪdənt\",\"ukphone\":\"'evɪdənt\"},{\"name\":\"suburb\",\"trans\":[\"郊区， 郊外， 近郊\"],\"usphone\":\"'sʌbɝb\",\"ukphone\":\"'sʌbɜːb\"},{\"name\":\"lodge\",\"trans\":[\"暂住，借宿\",\"乡间小屋； 旅舍\"],\"usphone\":\"lɑdʒ\",\"ukphone\":\"lɒdʒ\"},{\"name\":\"threat\",\"trans\":[\"威胁， 恐吓； 凶兆， 征兆\"],\"usphone\":\"θrɛt\",\"ukphone\":\"θret\"},{\"name\":\"writer\",\"trans\":[\"作者， 作家\"],\"usphone\":\"'raɪtɚ\",\"ukphone\":\"'raɪtə\"},{\"name\":\"simplify\",\"trans\":[\"简化， 使简明\"],\"usphone\":\"'sɪmplɪfaɪ\",\"ukphone\":\"'sɪmplɪfaɪ\"},{\"name\":\"breast\",\"trans\":[\"乳房； 胸脯， 胸膛\"],\"usphone\":\"brɛst\",\"ukphone\":\"brest\"},{\"name\":\"invention\",\"trans\":[\"发明， 创造； 捏造\"],\"usphone\":\"ɪn'vɛnʃən\",\"ukphone\":\"ɪn'venʃn\"},{\"name\":\"mercy\",\"trans\":[\"仁慈， 宽容； 恩惠； 幸运\"],\"usphone\":\"'mɝsi\",\"ukphone\":\"'mɜːsi\"},{\"name\":\"annoy\",\"trans\":[\"使恼怒； 打搅\"],\"usphone\":\"ə'nɔɪ\",\"ukphone\":\"ə'nɔɪ\"},{\"name\":\"curl\",\"trans\":[\"鬈发； 卷曲， 卷曲物\"],\"usphone\":\"kɝl\",\"ukphone\":\"kɜːl\"},{\"name\":\"inform\",\"trans\":[\"告发， 告密\",\"通知；报告\"],\"usphone\":\"ɪn'fɔrm\",\"ukphone\":\"ɪn'fɔːm\"},{\"name\":\"psychological\",\"trans\":[\"心理的\"],\"usphone\":\",saɪkə'lɑdʒɪkl\",\"ukphone\":\"ˌsaɪkə'lɒdʒɪkl\"},{\"name\":\"glue\",\"trans\":[\"胶，胶水\",\"胶合\"],\"usphone\":\"ɡlu\",\"ukphone\":\"gluː\"},{\"name\":\"commit\",\"trans\":[\"犯， 干； 使承诺； 把…托付给； 调拨…供使用， 拨出\"],\"usphone\":\"kə'mɪt\",\"ukphone\":\"kə'mɪt\"},{\"name\":\"scream\",\"trans\":[\"尖叫，呼啸\",\"尖叫声\"],\"usphone\":\"skrim\",\"ukphone\":\"skriːm\"},{\"name\":\"sorrow\",\"trans\":[\"悲痛， 悲哀， 悲伤； 伤心事， 不幸的事\"],\"usphone\":\"sɑro\",\"ukphone\":\"'sɒrəu\"},{\"name\":\"crash\",\"trans\":[\"发出撞击声；垮台，破产；冲，闯\",\"碰撞；坠落\",\"碰撞； 破裂声\"],\"usphone\":\"kræʃ\",\"ukphone\":\"kræʃ\"},{\"name\":\"patch\",\"trans\":[\"补丁；斑，与周围不同的部分；一小块地\",\"补， 修补\"],\"usphone\":\"pætʃ\",\"ukphone\":\"pætʃ\"},{\"name\":\"observer\",\"trans\":[\"观察员， 观察者\"],\"usphone\":\"əb'zɝvɚ\",\"ukphone\":\"əb'zɜːvə\"},{\"name\":\"character\",\"trans\":[\"性格， 特性； 性质； 人物， 角色； 符号； 字\"],\"usphone\":\"'kærɪktɚ\",\"ukphone\":\"'kærəktə\"},{\"name\":\"reflect\",\"trans\":[\"反映， 显示； 反射， 映现； 深思， 考虑， 反省\"],\"usphone\":\"rɪ'flɛkt\",\"ukphone\":\"rɪ'flekt\"},{\"name\":\"procession\",\"trans\":[\"队伍， 行列\"],\"usphone\":\"prə'sɛʃən\",\"ukphone\":\"prə'seʃn\"},{\"name\":\"contribution\",\"trans\":[\"贡献， 促成作用； 捐款， 捐献物； 稿件\"],\"usphone\":\",kɑntrɪ'bjuʃən\",\"ukphone\":\"ˌkɒntrɪ'bjuːʃn\"},{\"name\":\"Marxist\",\"trans\":[\"马克思主义的\",\"马克思主义者\"],\"usphone\":\"'mɑrksɪst\",\"ukphone\":\"'mɑːksɪst\"},{\"name\":\"bang\",\"trans\":[\"猛击， 猛撞； 发出砰的一声， 砰砰地响\",\"巨响，枪声；猛击\",\"猛击，猛撞；砰地敲\"],\"usphone\":\"bæŋ\",\"ukphone\":\"bæŋ\"},{\"name\":\"brow\",\"trans\":[\"额， 眉， 眉毛\"],\"usphone\":\"braʊ\",\"ukphone\":\"brau\"},{\"name\":\"meaning\",\"trans\":[\"意义， 意思； 目的； 重要性\"],\"usphone\":\"'minɪŋ\",\"ukphone\":\"'miːnɪŋ\"},{\"name\":\"ignorant\",\"trans\":[\"不知道的， 无知的\"],\"usphone\":\"'ɪɡnərənt\",\"ukphone\":\"'ɪgnərənt\"},{\"name\":\"magnetic\",\"trans\":[\"磁的； 有吸引力的\"],\"usphone\":\"mæg'nɛtɪk\",\"ukphone\":\"mæg'netɪk\"},{\"name\":\"band\",\"trans\":[\"乐队；群，伙；带；条纹；波段\",\"用带绑扎\"],\"usphone\":\"bænd\",\"ukphone\":\"bænd\"},{\"name\":\"orbit\",\"trans\":[\"轨道\",\"做轨道运行\"],\"usphone\":\"'ɔrbɪt\",\"ukphone\":\"'ɔːbɪt\"},{\"name\":\"comprise\",\"trans\":[\"包含， 包括， 构成\"],\"usphone\":\"kəm'praɪz\",\"ukphone\":\"kəm'praɪz\"},{\"name\":\"moderate\",\"trans\":[\"中等的； 温和的， 稳健的； 有节制的\",\"和缓， 减轻； 节制\"],\"usphone\":\"ˈmɑdərɪt; (for v.,) ˈmɑdərˌeɪt\",\"ukphone\":\"'mɒd(ə)rət\"},{\"name\":\"resident\",\"trans\":[\"居住的， 定居的； 住校的， 住院的\",\"居民，定居者；住院医生\"],\"usphone\":\"'rɛzɪdənt\",\"ukphone\":\"'rezɪdənt\"},{\"name\":\"spray\",\"trans\":[\"喷， 溅散\",\"浪花，水花；喷雾\"],\"usphone\":\"spreɪ\",\"ukphone\":\"spreɪ\"},{\"name\":\"distinguish\",\"trans\":[\"区别， 辨别， 识别； 使显出特色， 使杰出\"],\"usphone\":\"dɪ'stɪŋɡwɪʃ\",\"ukphone\":\"dɪ'stɪŋgwɪʃ\"},{\"name\":\"receiver\",\"trans\":[\"听筒； 接收器\"],\"usphone\":\"rɪ'sivɚ\",\"ukphone\":\"rɪ'siːvə\"},{\"name\":\"outer\",\"trans\":[\"外面的， 外层的\"],\"usphone\":\"'aʊtɚ\",\"ukphone\":\"'autə\"},{\"name\":\"invent\",\"trans\":[\"发明， 创造； 捏造\"],\"usphone\":\"ɪn'vɛnt\",\"ukphone\":\"ɪn'vent\"},{\"name\":\"fluent\",\"trans\":[\"流利的， 流畅的\"],\"usphone\":\"'fluənt\",\"ukphone\":\"'fluːənt\"},{\"name\":\"shortcoming\",\"trans\":[\"短处， 缺点\"],\"usphone\":\"'ʃɔrtkʌmɪŋ\",\"ukphone\":\"'ʃɔːtkʌmɪŋ\"},{\"name\":\"substantial\",\"trans\":[\"可观的， 大量的； 结实的， 坚固的； 实质的， 真实的\"],\"usphone\":\"səbˈstænʃəl\",\"ukphone\":\"səb'stænʃl\"},{\"name\":\"execute\",\"trans\":[\"将…处死； 实施， 执行\"],\"usphone\":\"'ɛksɪkjut\",\"ukphone\":\"'eksɪkjuːt\"},{\"name\":\"benefit\",\"trans\":[\"有益于； 得益\",\"利益，恩惠；救济金，保险金，津贴\"],\"usphone\":\"'bɛnɪfɪt\",\"ukphone\":\"'benɪfɪt\"},{\"name\":\"flood\",\"trans\":[\"淹没； 涌入\",\"洪水；大量\"],\"usphone\":\"flʌd\",\"ukphone\":\"flʌd\"},{\"name\":\"vitamin\",\"trans\":[\"维生素\"],\"usphone\":\"'vaɪtəmɪn\",\"ukphone\":\"'vɪtəmɪn\"},{\"name\":\"intention\",\"trans\":[\"意图， 意向， 目的\"],\"usphone\":\"ɪn'tɛnʃən\",\"ukphone\":\"ɪn'tenʃn\"},{\"name\":\"rude\",\"trans\":[\"粗鲁的， 不礼貌的； 粗糙的， 粗陋的\"],\"usphone\":\"rud\",\"ukphone\":\"ruːd\"},{\"name\":\"symptom\",\"trans\":[\"症状； 征候， 征兆\"],\"usphone\":\"'sɪmptəm\",\"ukphone\":\"'sɪmptəm\"},{\"name\":\"pillar\",\"trans\":[\"柱， 柱子； 栋梁\"],\"usphone\":\"'pɪlɚ\",\"ukphone\":\"'pɪlə\"},{\"name\":\"thereby\",\"trans\":[\"因此， 从而， 由此\"],\"usphone\":\",ðɛr'baɪ\",\"ukphone\":\"ˌðeə'baɪ\"},{\"name\":\"unique\",\"trans\":[\"唯一的， 独一无二的； 极不寻常的， 极好的\"],\"usphone\":\"jʊ'nik\",\"ukphone\":\"ju'niːk\"},{\"name\":\"funeral\",\"trans\":[\"葬礼， 丧礼， 丧葬\"],\"usphone\":\"'fjunərəl\",\"ukphone\":\"'fjuːnərəl\"},{\"name\":\"boost\",\"trans\":[\"提高，使增长；推动，激励；替…做广告，宣扬\",\"提高， 增长； 推动， 激励\"],\"usphone\":\"bʊst\",\"ukphone\":\"buːst\"},{\"name\":\"fireman\",\"trans\":[\"消防队员； 司炉工\"],\"usphone\":\"'faɪrmən\",\"ukphone\":\"'faɪəmən\"},{\"name\":\"sincere\",\"trans\":[\"真诚的， 诚挚的\"],\"usphone\":\"sɪn'sɪr\",\"ukphone\":\"sɪn'sɪə\"},{\"name\":\"male\",\"trans\":[\"男的，雄的\",\"男子， 雄性动物\"],\"usphone\":\"mel\",\"ukphone\":\"meɪl\"},{\"name\":\"ministry\",\"trans\":[\"部\"],\"usphone\":\"'mɪnɪstri\",\"ukphone\":\"'mɪnɪstri\"},{\"name\":\"religious\",\"trans\":[\"宗教的； 笃信宗教的， 虔诚的\"],\"usphone\":\"rɪ'lɪdʒəs\",\"ukphone\":\"rɪ'lɪdʒəs\"},{\"name\":\"nevertheless\",\"trans\":[\"仍然， 然而\"],\"usphone\":\",nɛvɚðə'lɛs\",\"ukphone\":\"ˌnevəðə'les\"},{\"name\":\"prominent\",\"trans\":[\"突出的， 杰出的； 突起的， 凸出的\"],\"usphone\":\"'prɑmɪnənt\",\"ukphone\":\"'prɒmɪnənt\"},{\"name\":\"shelter\",\"trans\":[\"掩蔽处，躲避处；住所；掩蔽，保护\",\"掩蔽， 庇护； 躲避\"],\"usphone\":\"'ʃɛltɚ\",\"ukphone\":\"'ʃeltə\"},{\"name\":\"outset\",\"trans\":[\"开始， 开端\"],\"usphone\":\"'aʊtsɛt\",\"ukphone\":\"'autset\"},{\"name\":\"jewel\",\"trans\":[\"宝石； 宝石饰物\"],\"usphone\":\"'dʒuəl\",\"ukphone\":\"'dʒuːəl\"},{\"name\":\"scan\",\"trans\":[\"细看，审视；扫描，浏览\",\"扫描\"],\"usphone\":\"skæn\",\"ukphone\":\"skæn\"},{\"name\":\"association\",\"trans\":[\"协会， 团体； 联合， 交往\"],\"usphone\":\"ə,soʃɪ'eʃən\",\"ukphone\":\"əˌsəusi'eɪʃn\"},{\"name\":\"fundamental\",\"trans\":[\"基础的，基本的\",\"基本原则\"],\"usphone\":\",fʌndə'mɛntl\",\"ukphone\":\"ˌfʌndə'mentl\"},{\"name\":\"eliminate\",\"trans\":[\"消灭， 消除， 排除； 淘汰\"],\"usphone\":\"ɪ'lɪmɪnet\",\"ukphone\":\"ɪ'lɪmɪneɪt\"},{\"name\":\"global\",\"trans\":[\"全球的， 全世界的； 总的， 完整的\"],\"usphone\":\"'ɡlobl\",\"ukphone\":\"'gləubl\"},{\"name\":\"entitle\",\"trans\":[\"给…权利； 给题名\"],\"usphone\":\"ɪn'taɪtl\",\"ukphone\":\"ɪn'taɪtl\"},{\"name\":\"outline\",\"trans\":[\"提纲，要点；外形，略图\",\"概述； 描…外形\"],\"usphone\":\"'aʊtlaɪn\",\"ukphone\":\"'autlaɪn\"},{\"name\":\"fade\",\"trans\":[\"褪色；逐渐消失；凋谢\",\"使褪色\"],\"usphone\":\"fed\",\"ukphone\":\"feɪd\"},{\"name\":\"unless\",\"trans\":[\"除非， 如果不\"],\"usphone\":\"ən'lɛs\",\"ukphone\":\"ən'les\"},{\"name\":\"butterfly\",\"trans\":[\"蝴蝶\"],\"usphone\":\"'bʌtɚflaɪ\",\"ukphone\":\"'bʌtəflaɪ\"},{\"name\":\"excess\",\"trans\":[\"过量的， 额外的\",\"超越； 过量， 过度\"],\"usphone\":\"'ɛk'sɛs\",\"ukphone\":\"ɪk'ses; ek-; 'ekses\"},{\"name\":\"glance\",\"trans\":[\"看一下\",\"一瞥\",\"用扫视； 反射\"],\"usphone\":\"ɡlæns\",\"ukphone\":\"glɑːns\"},{\"name\":\"perspective\",\"trans\":[\"视角， 观点； 远景， 景观； 透视画法， 透视图\"],\"usphone\":\"pɚ'spɛktɪv\",\"ukphone\":\"pə'spektɪv\"},{\"name\":\"relationship\",\"trans\":[\"关系， 关联\"],\"usphone\":\"rɪ'leʃən'ʃɪp\",\"ukphone\":\"rɪ'leɪʃnʃɪp\"},{\"name\":\"equality\",\"trans\":[\"等同， 平等， 相等\"],\"usphone\":\"ɪ'kwɑləti\",\"ukphone\":\"iː'kwɒləti\"},{\"name\":\"destruction\",\"trans\":[\"破坏， 毁灭， 消灭\"],\"usphone\":\"dɪ'strʌkʃən\",\"ukphone\":\"dɪ'strʌkʃn\"},{\"name\":\"dictation\",\"trans\":[\"口授； 听写\"],\"usphone\":\"dɪk'teʃən\",\"ukphone\":\"dɪk'teɪʃn\"},{\"name\":\"stiff\",\"trans\":[\"极其， 非常； 僵硬地\",\"硬的，僵直的；不灵活的；拘谨的，生硬的；费劲的；强烈的\"],\"usphone\":\"stɪf\",\"ukphone\":\"stɪf\"},{\"name\":\"expression\",\"trans\":[\"词语； 表达； 表情\"],\"usphone\":\"ɪk'sprɛʃən\",\"ukphone\":\"ɪk'spreʃn\"},{\"name\":\"invade\",\"trans\":[\"入侵， 侵略， 侵袭\"],\"usphone\":\"ɪn'ved\",\"ukphone\":\"ɪn'veɪd\"},{\"name\":\"reaction\",\"trans\":[\"反应； 反作用\"],\"usphone\":\"rɪ'ækʃən\",\"ukphone\":\"ri'ækʃn\"},{\"name\":\"childhood\",\"trans\":[\"童年， 幼年， 早期\"],\"usphone\":\"'tʃaɪldhʊd\",\"ukphone\":\"'tʃaɪldhud\"},{\"name\":\"wolf\",\"trans\":[\"狼\"],\"usphone\":\"wʊlf\",\"ukphone\":\"wulf\"},{\"name\":\"accordance\",\"trans\":[\"一致； 和谐\"],\"usphone\":\"ə'kɔrdns\",\"ukphone\":\"ə'kɔːdns\"},{\"name\":\"thorough\",\"trans\":[\"彻底的， 详尽的\"],\"usphone\":\"ˈθʌrəʊ; θʌro\",\"ukphone\":\"'θʌrə\"},{\"name\":\"appeal\",\"trans\":[\"呼吁，恳求；申诉，上诉\",\"上诉\",\"感染力， 吸引力； 呼吁， 上诉\"],\"usphone\":\"ə'pil\",\"ukphone\":\"ə'piːl\"},{\"name\":\"democracy\",\"trans\":[\"民主， 民主制； 民主国家\"],\"usphone\":\"dɪˈmɑkrəsi\",\"ukphone\":\"dɪ'mɒkrəsi\"},{\"name\":\"transportation\",\"trans\":[\"运输， 运送， 客运\"],\"usphone\":\",trænspɔr'teʃən\",\"ukphone\":\"ˌtrænspɔː'teɪʃn\"},{\"name\":\"dye\",\"trans\":[\"染\",\"染料； 染色\"],\"usphone\":\"daɪ\",\"ukphone\":\"daɪ\"},{\"name\":\"evolve\",\"trans\":[\"使进化， 使发展\"],\"usphone\":\"ɪ'vɑlv\",\"ukphone\":\"i'vɒlv\"},{\"name\":\"extensive\",\"trans\":[\"广阔的， 广泛的\"],\"usphone\":\"ɪk'stɛnsɪv\",\"ukphone\":\"ɪk'stensɪv\"},{\"name\":\"congratulation\",\"trans\":[\"贺词； 祝贺， 恭喜\"],\"usphone\":\"kən,ɡrætʃu'leʃən\",\"ukphone\":\"kənˌgrætʃu'leɪʃn\"},{\"name\":\"abandon\",\"trans\":[\"离弃，丢弃；遗弃，抛弃；放弃\",\"放任； 纵情\"],\"usphone\":\"ə'bændən\",\"ukphone\":\"ə'bændən\"},{\"name\":\"definitely\",\"trans\":[\"一定地， 明确地\"],\"usphone\":\"'dɛfɪnətli\",\"ukphone\":\"'defɪnətli\"},{\"name\":\"inspire\",\"trans\":[\"吸气； 赋予灵感\",\"鼓舞，给…以灵感\"],\"usphone\":\"ɪn'spaɪɚ\",\"ukphone\":\"ɪn'spaɪə\"},{\"name\":\"marvelous\",\"trans\":[\"奇迹般的， 了不起的\"],\"usphone\":\"'mɑrvələs\",\"ukphone\":\"'mɑːvələs\"},{\"name\":\"household\",\"trans\":[\"家庭的； 家喻户晓的\",\"家庭，户；家务\"],\"usphone\":\"'haʊshold\",\"ukphone\":\"'haushəuld\"},{\"name\":\"geometry\",\"trans\":[\"几何， 几何学\"],\"usphone\":\"dʒɪ'ɑmətri\",\"ukphone\":\"dʒi'ɒmətri\"},{\"name\":\"ratio\",\"trans\":[\"比， 比率\"],\"usphone\":\"'reʃɪo\",\"ukphone\":\"'reɪʃiəu\"},{\"name\":\"devote\",\"trans\":[\"将…奉献给； 把…专用\"],\"usphone\":\"dɪ'vot\",\"ukphone\":\"dɪ'vəut\"},{\"name\":\"agent\",\"trans\":[\"代理人， 代理商； 政府代表； 动因， 原因； 剂\"],\"usphone\":\"'edʒənt\",\"ukphone\":\"'eɪdʒənt\"},{\"name\":\"wool\",\"trans\":[\"羊毛； 毛线， 绒线\"],\"usphone\":\"wʊl\",\"ukphone\":\"wul\"},{\"name\":\"wholly\",\"trans\":[\"完全地， 全部地\"],\"usphone\":\"'holli\",\"ukphone\":\"'həulli\"},{\"name\":\"instinct\",\"trans\":[\"本能， 天性； 直觉\"],\"usphone\":\"'ɪnstɪŋkt\",\"ukphone\":\"'ɪnstɪŋkt\"},{\"name\":\"approximate\",\"trans\":[\"近似的\",\"近似； 估计\"],\"usphone\":\"ə'prɑksɪmət\",\"ukphone\":\"ə'prɒksɪmət\"},{\"name\":\"invest\",\"trans\":[\"投资， 投入； 授予\"],\"usphone\":\"ɪn'vɛst\",\"ukphone\":\"ɪn'vest\"},{\"name\":\"afterward\",\"trans\":[\"后来， 以后\"],\"usphone\":\"ˈæftərwərd\",\"ukphone\":\"'ɑːftəwəd\"},{\"name\":\"reputation\",\"trans\":[\"名誉， 名气， 名声\"],\"usphone\":\",rɛpju'teʃən\",\"ukphone\":\"ˌrepju'teɪʃn\"},{\"name\":\"project\",\"trans\":[\"伸出； 投射； 预计\",\"方案， 计划； 课题， 项目； 工程\"],\"usphone\":\"prəˈdʒɛkt; prɑdʒɛkt\",\"ukphone\":\"prəˈdʒekt; ˈprɒdʒekt\"},{\"name\":\"shrug\",\"trans\":[\"耸肩\"],\"usphone\":\"ʃrʌɡ\",\"ukphone\":\"ʃrʌg\"},{\"name\":\"independence\",\"trans\":[\"独立， 自主， 自立\"],\"usphone\":\",ɪndɪ'pɛndəns\",\"ukphone\":\"ˌɪndɪ'pendəns\"},{\"name\":\"coordination\",\"trans\":[\"同等； 调和\"],\"usphone\":\"ko,ɔrdɪ'neʃən\",\"ukphone\":\"kəuˌɔːdɪ'neɪʃn\"},{\"name\":\"presentation\",\"trans\":[\"提供， 显示； 外观， 图像； 授予， 赠送； 报告， 介绍； 表演\"],\"usphone\":\",prizɛn'teʃən\",\"ukphone\":\"ˌprezn'teɪʃn\"},{\"name\":\"diameter\",\"trans\":[\"直径\"],\"usphone\":\"daɪ'æmɪtɚ\",\"ukphone\":\"daɪ'æmɪtə\"},{\"name\":\"barn\",\"trans\":[\"谷仓； 牲口棚\"],\"usphone\":\"bɑrn\",\"ukphone\":\"bɑːn\"},{\"name\":\"bark\",\"trans\":[\"吠，叫\",\"吠声， 叫声； 树皮\"],\"usphone\":\"bɑrk\",\"ukphone\":\"bɑːk\"},{\"name\":\"loop\",\"trans\":[\"成环， 成圈\",\"圈，环，回路；循环\"],\"usphone\":\"lup\",\"ukphone\":\"luːp\"},{\"name\":\"restrain\",\"trans\":[\"阻止， 控制； 抑制， 遏制\"],\"usphone\":\"rɪ'stren\",\"ukphone\":\"rɪ'streɪn\"},{\"name\":\"greedy\",\"trans\":[\"贪吃的； 贪婪的； 渴望的\"],\"usphone\":\"'gridi\",\"ukphone\":\"'griːdi\"},{\"name\":\"awkward\",\"trans\":[\"笨拙的， 尴尬的； 难操纵的， 使用不便的； 不灵巧的\"],\"usphone\":\"'ɔkwɚd\",\"ukphone\":\"'ɔːkwəd\"},{\"name\":\"bare\",\"trans\":[\"赤裸的；光秃的，无遮盖的；刚刚够的，勉强的\",\"露出， 显露\"],\"usphone\":\"bɛr\",\"ukphone\":\"beə\"},{\"name\":\"ruin\",\"trans\":[\"毁坏\",\"毁灭；废墟\"],\"usphone\":\"'ruɪn\",\"ukphone\":\"'ruːɪn\"},{\"name\":\"crane\",\"trans\":[\"起重机， 摄影升降机； 鹤\"],\"usphone\":\"kren\",\"ukphone\":\"kreɪn\"},{\"name\":\"beard\",\"trans\":[\"胡须， 络腮胡子\"],\"usphone\":\"bɪrd\",\"ukphone\":\"bɪəd\"},{\"name\":\"impatient\",\"trans\":[\"不耐烦的， 急躁的\"],\"usphone\":\"ɪm'peʃnt\",\"ukphone\":\"ɪm'peɪʃnt\"},{\"name\":\"spill\",\"trans\":[\"溢出，洒落\",\"溢出\"],\"usphone\":\"spɪl\",\"ukphone\":\"spɪl\"},{\"name\":\"owing\",\"trans\":[\"应付的， 未付的\"],\"usphone\":\"'oɪŋ\",\"ukphone\":\"'əuɪŋ\"},{\"name\":\"collection\",\"trans\":[\"搜集， 聚集， 积聚； 收集， 收取； 收藏品， 收集的东西\"],\"usphone\":\"kə'lɛkʃən\",\"ukphone\":\"kə'lekʃn\"},{\"name\":\"gardener\",\"trans\":[\"园丁， 花匠\"],\"usphone\":\"'gɑrdənɚ\",\"ukphone\":\"'gɑːdnə\"},{\"name\":\"conquest\",\"trans\":[\"攻取， 征服， 克服\"],\"usphone\":\"'kɑŋkwɛst\",\"ukphone\":\"'kɒŋkwest\"},{\"name\":\"finding\",\"trans\":[\"发现； 调查的结果； 裁决\"],\"usphone\":\"'faɪndɪŋ\",\"ukphone\":\"'faɪndɪŋ\"},{\"name\":\"dense\",\"trans\":[\"密集的， 浓厚的； 密度大的\"],\"usphone\":\"dɛns\",\"ukphone\":\"dens\"},{\"name\":\"fortnight\",\"trans\":[\"两星期， 十四天\"],\"usphone\":\"'fɔrtnaɪt\",\"ukphone\":\"'fɔːtnaɪt\"},{\"name\":\"laboratory\",\"trans\":[\"实验室， 研究室\"],\"usphone\":\"ˈlæbrəˌtɔrɪ\",\"ukphone\":\"lə'bɒrətri\"},{\"name\":\"inspect\",\"trans\":[\"进行检查； 进行视察\",\"检查，审查；检阅\"],\"usphone\":\"ɪn'spɛkt\",\"ukphone\":\"ɪn'spekt\"},{\"name\":\"campaign\",\"trans\":[\"参加运动； 参加竞选\",\"战役；运动\"],\"usphone\":\"kæm'pen\",\"ukphone\":\"kæm'peɪn\"},{\"name\":\"systematical\",\"trans\":[\"有系统的， 有计划的\"],\"usphone\":\"\",\"ukphone\":\"ˌsɪstə'mætɪk(l)\"},{\"name\":\"vital\",\"trans\":[\"致命的， 生死攸关的； 极其重要的； 生命的， 有生命力的\"],\"usphone\":\"'vaɪtl\",\"ukphone\":\"'vaɪtl\"},{\"name\":\"conflict\",\"trans\":[\"冲突， 抵触\",\"冲突， 抵触， 争论； 战斗， 战争\"],\"usphone\":\"'kɑnflɪkt\",\"ukphone\":\"'kɒnflɪkt\"},{\"name\":\"farewell\",\"trans\":[\"告别， 欢送会\"],\"usphone\":\",fɛr'wɛl\",\"ukphone\":\"ˌfeə'wel\"},{\"name\":\"allow\",\"trans\":[\"允许， 准许； 同意给； 承认； 允许…进入\"],\"usphone\":\"ə'laʊ\",\"ukphone\":\"ə'lau\"},{\"name\":\"appliance\",\"trans\":[\"用具， 器具， 器械； 家电\"],\"usphone\":\"ə'plaɪəns\",\"ukphone\":\"ə'plaɪəns\"},{\"name\":\"mass\",\"trans\":[\"大量的，大规模的\",\"聚集， 集中\",\"众多，大量；团，块，堆；群众；质量\"],\"usphone\":\"mæs\",\"ukphone\":\"mæs\"},{\"name\":\"lord\",\"trans\":[\"领主， 君主， 贵族\"],\"usphone\":\"lɔrd\",\"ukphone\":\"lɔːd\"},{\"name\":\"detect\",\"trans\":[\"察觉， 发觉； 侦查出\"],\"usphone\":\"dɪ'tɛkt\",\"ukphone\":\"dɪ'tekt\"},{\"name\":\"amateur\",\"trans\":[\"业余爱好的， 业余的； 外行的\",\"业余爱好者；外行\"],\"usphone\":\"ˈæmətər\",\"ukphone\":\"'æmətə\"},{\"name\":\"poisonous\",\"trans\":[\"有毒的； 恶毒的\"],\"usphone\":\"'pɔɪzənəs\",\"ukphone\":\"'pɔɪzənəs\"},{\"name\":\"condemn\",\"trans\":[\"谴责， 指责； 判…刑， 宣告…有罪\"],\"usphone\":\"kən'dɛm\",\"ukphone\":\"kən'dem\"},{\"name\":\"beast\",\"trans\":[\"兽， 野兽， 牲畜； 凶残的人， 令人厌憎的人\"],\"usphone\":\"bist\",\"ukphone\":\"biːst\"},{\"name\":\"assistance\",\"trans\":[\"协助， 援助\"],\"usphone\":\"ə'sɪstəns\",\"ukphone\":\"ə'sɪstəns\"},{\"name\":\"commerce\",\"trans\":[\"商业， 贸易； 社交\"],\"usphone\":\"'kɑmɝs\",\"ukphone\":\"'kɒmɜːs\"},{\"name\":\"gesture\",\"trans\":[\"做手势\",\"姿势，手势，姿态\"],\"usphone\":\"'dʒɛstʃɚ\",\"ukphone\":\"'dʒestʃə\"},{\"name\":\"admit\",\"trans\":[\"承认， 供认； 准许…进入\"],\"usphone\":\"əd'mɪt\",\"ukphone\":\"əd'mɪt\"},{\"name\":\"poem\",\"trans\":[\"诗\"],\"usphone\":\"'poəm\",\"ukphone\":\"'pəuɪm\"},{\"name\":\"interest\",\"trans\":[\"兴趣；利益，利害关系；利息\",\"使感兴趣\"],\"usphone\":\"'ɪntrəst\",\"ukphone\":\"'ɪntrəst;'ɪntrest\"},{\"name\":\"gulf\",\"trans\":[\"海湾； 巨大的分歧\"],\"usphone\":\"ɡʌlf\",\"ukphone\":\"gʌlf\"},{\"name\":\"poet\",\"trans\":[\"诗人\"],\"usphone\":\"'poət\",\"ukphone\":\"'pəuɪt\"},{\"name\":\"definition\",\"trans\":[\"定义， 释义， 定界； 清晰， 鲜明\"],\"usphone\":\",dɛfɪ'nɪʃən\",\"ukphone\":\"ˌdefɪ'nɪʃn\"},{\"name\":\"shave\",\"trans\":[\"剃，刮，刨，削；修面，刮脸\",\"修面， 刮脸\"],\"usphone\":\"ʃev\",\"ukphone\":\"ʃeɪv\"},{\"name\":\"organic\",\"trans\":[\"有机体的， 有机物的\"],\"usphone\":\"ɔr'gænɪk\",\"ukphone\":\"ɔː'gænɪk\"},{\"name\":\"mask\",\"trans\":[\"面具，面罩，口罩；伪装\",\"遮盖， 掩饰\"],\"usphone\":\"mæsk\",\"ukphone\":\"mɑːsk\"},{\"name\":\"summary\",\"trans\":[\"概括的， 概要的； 实时的， 即决的\",\"摘要，概要，一览\"],\"usphone\":\"'sʌməri\",\"ukphone\":\"'sʌməri\"},{\"name\":\"apply\",\"trans\":[\"适用； 申请， 请求； 涂， 敷， 施\",\"应用，实施；使用；涂敷；把…施于\"],\"usphone\":\"ə'plaɪ\",\"ukphone\":\"ə'plaɪ\"},{\"name\":\"inferior\",\"trans\":[\"下等的，劣等的；次于…的\",\"下级， 下属\"],\"usphone\":\"ɪn'fɪrɪɚ\",\"ukphone\":\"ɪn'fɪəriə\"},{\"name\":\"steamer\",\"trans\":[\"轮船， 汽船\"],\"usphone\":\"'stimɚ\",\"ukphone\":\"'stiːmə\"},{\"name\":\"recently\",\"trans\":[\"最近， 新近\"],\"usphone\":\"'risntli\",\"ukphone\":\"'riːsntli\"},{\"name\":\"overlook\",\"trans\":[\"忽视； 宽恕； 俯瞰\"],\"usphone\":\",ovɚ'lʊk\",\"ukphone\":\"ˌəuvə'luk\"},{\"name\":\"politician\",\"trans\":[\"政治家， 政客\"],\"usphone\":\",pɑlə'tɪʃən\",\"ukphone\":\"ˌpɒlə'tɪʃn\"},{\"name\":\"incredible\",\"trans\":[\"不能相信的， 不可信的； 难以置信的， 不可思议的； 惊人的\"],\"usphone\":\"ɪn'krɛdəbl\",\"ukphone\":\"ɪn'kredəbl\"},{\"name\":\"dramatic\",\"trans\":[\"引人注目的， 激动人心的； 突然的\"],\"usphone\":\"drə'mætɪk\",\"ukphone\":\"drə'mætɪk\"},{\"name\":\"mosquito\",\"trans\":[\"蚊子\"],\"usphone\":\"məˈskiːtoʊ\",\"ukphone\":\"mə'skiːtəu\"},{\"name\":\"guitar\",\"trans\":[\"吉他， 六弦琴\"],\"usphone\":\"ɡɪ'tɑr\",\"ukphone\":\"gɪ'tɑː\"},{\"name\":\"layout\",\"trans\":[\"布局， 安排， 设计\"],\"usphone\":\"'leaʊt\",\"ukphone\":\"'leɪaut\"},{\"name\":\"artificial\",\"trans\":[\"人工的， 人为的； 矫揉造作的； 模拟的\"],\"usphone\":\",ɑrtɪ'fɪʃl\",\"ukphone\":\"ˌɑːtɪ'fɪʃl\"},{\"name\":\"imaginary\",\"trans\":[\"想象中的， 假想的\"],\"usphone\":\"ɪ'mædʒɪnɛri\",\"ukphone\":\"ɪ'mædʒɪnəri\"},{\"name\":\"removal\",\"trans\":[\"除去， 消除； 移动， 搬迁\"],\"usphone\":\"rɪ'muvl\",\"ukphone\":\"rɪ'muːvl\"},{\"name\":\"formula\",\"trans\":[\"公式， 方程式； 原则， 方案； 配方\"],\"usphone\":\"'fɔrmjələ\",\"ukphone\":\"'fɔːmjələ\"},{\"name\":\"comment\",\"trans\":[\"评论\",\"评论，意见，注释；闲话，议论\"],\"usphone\":\"'kɑmɛnt\",\"ukphone\":\"'kɒment\"},{\"name\":\"revolt\",\"trans\":[\"反叛，起义；反抗，违抗；厌恶，生反感\",\"反叛， 起义\"],\"usphone\":\"rɪ'volt\",\"ukphone\":\"rɪ'vəult\"},{\"name\":\"disgust\",\"trans\":[\"厌恶， 憎恶\"],\"usphone\":\"dɪs'ɡʌst\",\"ukphone\":\"dɪs'gʌst\"},{\"name\":\"stem\",\"trans\":[\"起源\",\"茎，干；词干\",\"堵住， 止住， 停住\"],\"usphone\":\"stɛm\",\"ukphone\":\"stem\"},{\"name\":\"sunshine\",\"trans\":[\"日光， 阳光\"],\"usphone\":\"'sʌnʃaɪn\",\"ukphone\":\"'sʌnʃaɪn\"},{\"name\":\"trend\",\"trans\":[\"伸向；倾向\",\"倾向\"],\"usphone\":\"trɛnd\",\"ukphone\":\"trend\"},{\"name\":\"achievement\",\"trans\":[\"完成； 成就， 成绩\"],\"usphone\":\"ə'tʃivmənt\",\"ukphone\":\"ə'tʃiːvmənt\"},{\"name\":\"mechanic\",\"trans\":[\"技工， 机修工； 力学， 机械学； 过程， 方法， 技术性细节\"],\"usphone\":\"mə'kænɪk\",\"ukphone\":\"mə'kænɪk\"},{\"name\":\"desirable\",\"trans\":[\"值得向往的， 令人满意的\"],\"usphone\":\"dɪ'zaɪərəbl\",\"ukphone\":\"dɪ'zaɪərəbl\"},{\"name\":\"balcony\",\"trans\":[\"阳台； 楼厅， 楼座\"],\"usphone\":\"'bælkənɪ\",\"ukphone\":\"'bælkəni\"},{\"name\":\"consist\",\"trans\":[\"由…组成； 在于； 一致\"],\"usphone\":\"kən'sɪst\",\"ukphone\":\"kən'sɪst\"},{\"name\":\"preparation\",\"trans\":[\"准备， 预备； 制剂\"],\"usphone\":\",prɛpə'reʃən\",\"ukphone\":\"ˌprepə'reɪʃn\"},{\"name\":\"reliable\",\"trans\":[\"可靠的， 可信赖的\"],\"usphone\":\"rɪ'laɪəbl\",\"ukphone\":\"rɪ'laɪəbl\"},{\"name\":\"relate\",\"trans\":[\"有关， 涉及； 符合； 相处\",\"使有关联；讲述，叙述\"],\"usphone\":\"rɪ'let\",\"ukphone\":\"rɪ'leɪt\"},{\"name\":\"critic\",\"trans\":[\"批评家， 爱挑剔的人\"],\"usphone\":\"'krɪtɪk\",\"ukphone\":\"'krɪtɪk\"},{\"name\":\"elevator\",\"trans\":[\"电梯， 升降机\"],\"usphone\":\"'ɛlɪvetɚ\",\"ukphone\":\"'elɪveɪtə\"},{\"name\":\"grammar\",\"trans\":[\"语法； 语法书\"],\"usphone\":\"'græmɚ\",\"ukphone\":\"'græmə\"},{\"name\":\"enable\",\"trans\":[\"使能够， 使可能\"],\"usphone\":\"ɪ'nebl\",\"ukphone\":\"ɪ'neɪbl\"},{\"name\":\"preliminary\",\"trans\":[\"预备的，初步的\",\"初步做法， 起始行为\"],\"usphone\":\"prɪ'lɪmɪnɛri\",\"ukphone\":\"prɪ'lɪmɪnəri\"},{\"name\":\"dependent\",\"trans\":[\"依靠的， 依赖的； 取决于…的\"],\"usphone\":\"dɪ'pɛndənt\",\"ukphone\":\"dɪ'pendənt\"},{\"name\":\"obstacle\",\"trans\":[\"障碍， 障碍物， 妨碍\"],\"usphone\":\"'ɑbstəkl\",\"ukphone\":\"'ɒbstəkl\"},{\"name\":\"profession\",\"trans\":[\"职业； 声明， 表白\"],\"usphone\":\"prə'fɛʃən\",\"ukphone\":\"prə'feʃn\"},{\"name\":\"calculator\",\"trans\":[\"计算器， 计算者\"],\"usphone\":\"'kælkjuletɚ\",\"ukphone\":\"'kælkjuleɪtə\"},{\"name\":\"van\",\"trans\":[\"大篷车， 运货车\"],\"usphone\":\"væn\",\"ukphone\":\"væn\"},{\"name\":\"biology\",\"trans\":[\"生物学， 生态学\"],\"usphone\":\"baɪ'ɑlədʒi\",\"ukphone\":\"baɪ'ɒlədʒi\"},{\"name\":\"worm\",\"trans\":[\"虫， 蠕虫\"],\"usphone\":\"wɝm\",\"ukphone\":\"wɜːm\"},{\"name\":\"compress\",\"trans\":[\"压紧， 压缩\"],\"usphone\":\"kəm'prɛs\",\"ukphone\":\"kəm'pres\"},{\"name\":\"arise\",\"trans\":[\"出现； 由…引起； 起身， 起床\"],\"usphone\":\"ə'raɪz\",\"ukphone\":\"ə'raɪz\"},{\"name\":\"collaborative\",\"trans\":[\"合作的， 协作的， 协力完成的\"],\"usphone\":\"kə'læbəretɪv\",\"ukphone\":\"kə'læbərətɪv\"},{\"name\":\"cherish\",\"trans\":[\"珍爱； 怀有\"],\"usphone\":\"'tʃɛrɪʃ\",\"ukphone\":\"'tʃerɪʃ\"},{\"name\":\"constitute\",\"trans\":[\"组成， 形成； 设立； 任命\"],\"usphone\":\"'kɑnstətut\",\"ukphone\":\"'kɒnstɪtjuːt\"},{\"name\":\"cattle\",\"trans\":[\"牛； 牲口， 家畜\"],\"usphone\":\"'kætl\",\"ukphone\":\"'kætl\"},{\"name\":\"imagination\",\"trans\":[\"想象， 想象力， 空想； 想象出\"],\"usphone\":\"ɪ,mædʒɪ'neʃən\",\"ukphone\":\"ɪˌmædʒɪ'neɪʃn\"},{\"name\":\"resistance\",\"trans\":[\"反抗， 抵制； 抵抗力， 抵抗性； 阻力； 电阻\"],\"usphone\":\"rɪ'zɪstəns\",\"ukphone\":\"rɪ'zɪstəns\"},{\"name\":\"underneath\",\"trans\":[\"在下面，在底下\",\"在…下面，在…底下\",\"下部， 底部\"],\"usphone\":\",ʌndɚ'niθ\",\"ukphone\":\"ˌʌndə'niːθ\"},{\"name\":\"nursery\",\"trans\":[\"托儿所， 保育室； 苗圃\"],\"usphone\":\"'nɝsəri\",\"ukphone\":\"'nɜːsəri\"},{\"name\":\"mate\",\"trans\":[\"成为配偶， 交配\",\"伙伴，同事；配偶，配对物；大副\"],\"usphone\":\"met\",\"ukphone\":\"meɪt\"},{\"name\":\"convince\",\"trans\":[\"使确信， 使信服， 说服\"],\"usphone\":\"kən'vɪns\",\"ukphone\":\"kən'vɪns\"},{\"name\":\"emperor\",\"trans\":[\"皇帝\"],\"usphone\":\"'ɛmpərɚ\",\"ukphone\":\"'empərə\"},{\"name\":\"prolong\",\"trans\":[\"拉长， 延长\"],\"usphone\":\"prəˈlɑːŋ\",\"ukphone\":\"prə'lɒŋ\"},{\"name\":\"theory\",\"trans\":[\"理论， 原理； 学说； 意见， 看法\"],\"usphone\":\"'θiəri\",\"ukphone\":\"'θɪəri\"},{\"name\":\"distress\",\"trans\":[\"忧虑， 痛苦， 悲伤； 不幸\"],\"usphone\":\"dɪ'strɛs\",\"ukphone\":\"dɪ'stres\"},{\"name\":\"flock\",\"trans\":[\"羊群， 群； 大量\"],\"usphone\":\"flɑk\",\"ukphone\":\"flɒk\"},{\"name\":\"internal\",\"trans\":[\"内的； 国内的； 内心的\"],\"usphone\":\"ɪn'tɝnl\",\"ukphone\":\"ɪn'tɜːnl\"},{\"name\":\"extension\",\"trans\":[\"延长部分， 伸展； 电话分机， 分机号码\"],\"usphone\":\"ɪk'stɛnʃən\",\"ukphone\":\"ɪk'stenʃn\"},{\"name\":\"signature\",\"trans\":[\"署名， 签字， 签名\"],\"usphone\":\"'sɪgnətʃɚ\",\"ukphone\":\"'sɪgnətʃə\"},{\"name\":\"steep\",\"trans\":[\"险峻的， 陡峭的； 过高的； 急剧的\"],\"usphone\":\"stip\",\"ukphone\":\"stiːp\"},{\"name\":\"thumb\",\"trans\":[\"示意要求搭车\",\"拇指\"],\"usphone\":\"θʌm\",\"ukphone\":\"θʌm\"},{\"name\":\"republican\",\"trans\":[\"共和政体的；共和党的\",\"共和党人\"],\"usphone\":\"rɪ'pʌblɪkən\",\"ukphone\":\"rɪ'pʌblɪkən\"},{\"name\":\"literary\",\"trans\":[\"文学的； 文人的， 书卷气的\"],\"usphone\":\"lɪtərɛri\",\"ukphone\":\"'lɪtərəri\"},{\"name\":\"architect\",\"trans\":[\"建筑师， 设计师； 缔造者\"],\"usphone\":\"'ɑrkɪtɛkt\",\"ukphone\":\"'ɑːkɪtekt\"},{\"name\":\"forehead\",\"trans\":[\"额头； 前部\"],\"usphone\":\"'fɔr'hɛd\",\"ukphone\":\"'fɔːh3d; 'fɒrɪd\"},{\"name\":\"classical\",\"trans\":[\"古典的， 经典的\"],\"usphone\":\"'klæsɪkl\",\"ukphone\":\"'klæsɪkl\"},{\"name\":\"privilege\",\"trans\":[\"特权； 优惠\"],\"usphone\":\"ˈprɪvəlɪdʒ\",\"ukphone\":\"'prɪvəlɪdʒ\"},{\"name\":\"foundation\",\"trans\":[\"基础；\"],\"usphone\":\"faʊn'deʃən\",\"ukphone\":\"faun'deɪʃn\"},{\"name\":\"substitute\",\"trans\":[\"代替人；代用品\",\"用…代替\"],\"usphone\":\"'sʌbstɪtut\",\"ukphone\":\"'sʌbstɪtjuːt\"},{\"name\":\"punch\",\"trans\":[\"猛击；穿孔\",\"猛击； 冲床； 穿孔机； 力量， 效力\"],\"usphone\":\"\",\"ukphone\":\"pʌntʃ\"},{\"name\":\"naturally\",\"trans\":[\"当然； 天然地； 天生地\"],\"usphone\":\"'nætʃrəli\",\"ukphone\":\"'nætʃrəli\"},{\"name\":\"flexibility\",\"trans\":[\"灵活性， 机动性， 柔韧性\"],\"usphone\":\",flɛksə'bɪləti\",\"ukphone\":\"ˌfleksə'bɪləti\"},{\"name\":\"mysterious\",\"trans\":[\"神秘的， 诡秘的\"],\"usphone\":\"mɪ'stɪrɪəs\",\"ukphone\":\"mɪ'stɪəriəs\"},{\"name\":\"moreover\",\"trans\":[\"而且， 再者， 此外\"],\"usphone\":\"mɔr'ovɚ\",\"ukphone\":\"mɔːr'əuvə\"},{\"name\":\"identity\",\"trans\":[\"身份； 个性， 特性； 同一性， 一致性\"],\"usphone\":\"aɪ'dɛntəti\",\"ukphone\":\"aɪ'dentətɪ\"},{\"name\":\"scatter\",\"trans\":[\"撒， 散播； 散开， 驱散\"],\"usphone\":\"'skætɚ\",\"ukphone\":\"'skætə\"},{\"name\":\"installation\",\"trans\":[\"安装； 装置， 设施； 就任， 就职\"],\"usphone\":\"'ɪnstə'leʃən\",\"ukphone\":\"ˌɪnstə'leɪʃn\"},{\"name\":\"writing\",\"trans\":[\"书写， 写； 著作\"],\"usphone\":\"'raɪtɪŋ\",\"ukphone\":\"'raɪtɪŋ\"},{\"name\":\"federal\",\"trans\":[\"联邦的， 联盟的\"],\"usphone\":\"'fɛdərəl\",\"ukphone\":\"'fedərəl\"},{\"name\":\"violate\",\"trans\":[\"违反， 违背； 亵渎； 侵犯； 妨碍\"],\"usphone\":\"'vaɪəlet\",\"ukphone\":\"'vaɪəleɪt\"},{\"name\":\"verify\",\"trans\":[\"证实， 查证， 证明\"],\"usphone\":\"'vɛrɪfaɪ\",\"ukphone\":\"'verɪfaɪ\"},{\"name\":\"collective\",\"trans\":[\"集体的，集合性的\",\"团体， 集体\"],\"usphone\":\"kə'lɛktɪv\",\"ukphone\":\"kə'lektɪv\"},{\"name\":\"excursion\",\"trans\":[\"远足， 短途旅行\"],\"usphone\":\"ɪk'skɝʒn\",\"ukphone\":\"ɪk'skɜːʃn\"},{\"name\":\"steer\",\"trans\":[\"掌舵， 驾驶； 操纵\"],\"usphone\":\"stɪr\",\"ukphone\":\"stɪə\"},{\"name\":\"event\",\"trans\":[\"事件， 大事， 事变\"],\"usphone\":\"ɪ'vɛnt\",\"ukphone\":\"ɪ'vent\"},{\"name\":\"academy\",\"trans\":[\"研究会， 学会； 专门学校\"],\"usphone\":\"ə'kædəmi\",\"ukphone\":\"ə'kædəmi\"},{\"name\":\"undergo\",\"trans\":[\"经历， 经受， 忍受； 接受\"],\"usphone\":\",ʌndɚ'ɡo\",\"ukphone\":\"ˌʌndə'gəu\"},{\"name\":\"reward\",\"trans\":[\"报答，奖赏；报酬，酬金\",\"报答， 酬谢， 奖励\"],\"usphone\":\"rɪ'wɔrd\",\"ukphone\":\"rɪ'wɔːd\"},{\"name\":\"include\",\"trans\":[\"包括， 包含\"],\"usphone\":\"ɪn'klud\",\"ukphone\":\"ɪn'kluːd\"},{\"name\":\"sympathize\",\"trans\":[\"同情， 怜悯； 体谅； 赞同\"],\"usphone\":\"'sɪmpə'θaɪz\",\"ukphone\":\"'sɪmpəθaɪz\"},{\"name\":\"alongside\",\"trans\":[\"在旁边，沿着边，并排地\",\"在…旁边， 沿着…的边； 和…在一起\"],\"usphone\":\"ə'lɔŋ'saɪd\",\"ukphone\":\"əˌlɒŋ'saɪd\"},{\"name\":\"swallow\",\"trans\":[\"燕子；吞，咽\",\"吞， 咽； 轻信， 轻易接受； 承受， 使不流露； 咽下口水\"],\"usphone\":\"'swɑlo\",\"ukphone\":\"'swɒləu\"},{\"name\":\"agency\",\"trans\":[\"经办， 代理； 代理处； 专门行政部门\"],\"usphone\":\"'edʒənsi\",\"ukphone\":\"'eɪdʒənsi\"},{\"name\":\"coupon\",\"trans\":[\"礼券， 优惠券， 配给券； 联票； 票证\"],\"usphone\":\"'kupɑn\",\"ukphone\":\"'kuːpɒn\"},{\"name\":\"railroad\",\"trans\":[\"铁路\",\"由铁路运输\"],\"usphone\":\"'relrod\",\"ukphone\":\"'reɪlrəud\"},{\"name\":\"nucleus\",\"trans\":[\"核心； 核\"],\"usphone\":\"'nuklɪəs\",\"ukphone\":\"'njuːkliəs\"},{\"name\":\"fascinating\",\"trans\":[\"迷人的， 有极大吸引力的\"],\"usphone\":\"'fæsɪnetɪŋ\",\"ukphone\":\"'fæsɪneɪtɪŋ\"},{\"name\":\"abstract\",\"trans\":[\"抽象的，抽象派的\",\"摘要， 梗概； 抽象派艺术作品\",\"做…的摘要； 提取\"],\"usphone\":\"'æbstrækt\",\"ukphone\":\"'æbstrækt\"},{\"name\":\"sting\",\"trans\":[\"刺，蜇，叮\",\"刺伤处，蜇伤处\"],\"usphone\":\"stɪŋ\",\"ukphone\":\"stɪŋ\"},{\"name\":\"haste\",\"trans\":[\"急速， 急忙； 草率\"],\"usphone\":\"hest\",\"ukphone\":\"heɪst\"},{\"name\":\"agenda\",\"trans\":[\"议事日程\"],\"usphone\":\"ə'dʒɛndə\",\"ukphone\":\"ə'dʒendə\"},{\"name\":\"appearance\",\"trans\":[\"出现， 来到； 外观\"],\"usphone\":\"ə'pɪrəns\",\"ukphone\":\"ə'pɪərəns\"},{\"name\":\"liquid\",\"trans\":[\"液体的； 清澈的； 流畅的\",\"液体\"],\"usphone\":\"'lɪkwɪd\",\"ukphone\":\"'lɪkwɪd\"},{\"name\":\"culture\",\"trans\":[\"文化， 文明； 教养； 培养； 培养菌\"],\"usphone\":\"'kʌltʃɚ\",\"ukphone\":\"'kʌltʃə\"},{\"name\":\"sleeve\",\"trans\":[\"袖子， 袖套\"],\"usphone\":\"sliv\",\"ukphone\":\"sliːv\"},{\"name\":\"devotion\",\"trans\":[\"献身， 奉献； 忠实； 热爱； 虔诚\"],\"usphone\":\"dɪ'voʃən\",\"ukphone\":\"dɪ'vəuʃn\"},{\"name\":\"anonymous\",\"trans\":[\"匿名的； 无名的； 无特色的\"],\"usphone\":\"ə'nɑnəməs\",\"ukphone\":\"ə'nɒnɪməs\"},{\"name\":\"stir\",\"trans\":[\"搅动；拨动；激动；唤起\",\"搅拌， 搅动； 激动， 骚乱\"],\"usphone\":\"stɝ\",\"ukphone\":\"stɜː\"},{\"name\":\"fisherman\",\"trans\":[\"渔民， 渔夫\"],\"usphone\":\"'fɪʃɚmən\",\"ukphone\":\"'fɪʃəmən\"},{\"name\":\"span\",\"trans\":[\"跨距，一段时间\",\"持续， 贯穿； 包括； 横跨， 跨越\"],\"usphone\":\"spæn\",\"ukphone\":\"spæn\"},{\"name\":\"insult\",\"trans\":[\"侮辱， 凌辱\",\"侮辱， 凌辱\"],\"usphone\":\"ɪn'sʌlt\",\"ukphone\":\"ɪn'sʌlt\"},{\"name\":\"existence\",\"trans\":[\"存在， 实在， 生存\"],\"usphone\":\"ɪɡ'zɪstəns\",\"ukphone\":\"ɪg'zɪstəns\"},{\"name\":\"craft\",\"trans\":[\"工艺， 手艺； 船， 航空器\"],\"usphone\":\"kræft\",\"ukphone\":\"krɑːft\"},{\"name\":\"butcher\",\"trans\":[\"肉商，肉贩，屠夫\",\"屠宰， 残杀\"],\"usphone\":\"ˈbʊtʃər\",\"ukphone\":\"'butʃə\"},{\"name\":\"poll\",\"trans\":[\"民意测验；政治选举，大选\",\"对…进行民意测验； 获得\"],\"usphone\":\"pol\",\"ukphone\":\"pəul\"},{\"name\":\"minority\",\"trans\":[\"少数； 少数民族\"],\"usphone\":\"maɪ'nɔrəti\",\"ukphone\":\"maɪ'nɒrəti\"},{\"name\":\"pole\",\"trans\":[\"杆； 极， 磁极， 电极\"],\"usphone\":\"pol\",\"ukphone\":\"pəul\"},{\"name\":\"float\",\"trans\":[\"浮动， 漂浮； 飘动\"],\"usphone\":\"flot\",\"ukphone\":\"fləut\"},{\"name\":\"graceful\",\"trans\":[\"优美的， 优雅的； 得体的\"],\"usphone\":\"'ɡresfl\",\"ukphone\":\"'greɪsfl\"},{\"name\":\"fourfold\",\"trans\":[\"四倍， 四重\",\"四倍的，四重的\"],\"usphone\":\"'fɔrfold\",\"ukphone\":\"'fɔːfəuld\"},{\"name\":\"preferable\",\"trans\":[\"更可取的， 更好的， 更合意的\"],\"usphone\":\"'prɛfrəbl\",\"ukphone\":\"'prefrəbl\"},{\"name\":\"reference\",\"trans\":[\"提到， 论及； 参考； 引文； 参考书目； 证明书， 证明人\"],\"usphone\":\"'rɛfrəns\",\"ukphone\":\"'refrəns\"},{\"name\":\"frog\",\"trans\":[\"蛙\"],\"usphone\":\"frɔɡ\",\"ukphone\":\"frɒg\"},{\"name\":\"spite\",\"trans\":[\"恶意，怨恨\",\"刁难， 欺侮\"],\"usphone\":\"spaɪt\",\"ukphone\":\"spaɪt\"},{\"name\":\"chamber\",\"trans\":[\"会议室， 会所； 房间； 腔， 室\"],\"usphone\":\"ˈtʃeɪmbər\",\"ukphone\":\"'tʃeɪmbə\"},{\"name\":\"arrange\",\"trans\":[\"安排， 准备， 整理\"],\"usphone\":\"ə'rendʒ\",\"ukphone\":\"ə'reɪndʒ\"},{\"name\":\"coarse\",\"trans\":[\"粗的， 粗糙的； 粗劣的； 粗俗的\"],\"usphone\":\"kɔrs\",\"ukphone\":\"kɔːs\"},{\"name\":\"nephew\",\"trans\":[\"侄子， 外甥\"],\"usphone\":\"'nɛfju\",\"ukphone\":\"'nevjuː; 'nefjuː\"},{\"name\":\"publicity\",\"trans\":[\"公众的注意， 名声； 宣传， 宣扬\"],\"usphone\":\"pʌb'lɪsəti\",\"ukphone\":\"pʌb'lɪsəti\"},{\"name\":\"depart\",\"trans\":[\"离开， 起程， 出发\"],\"usphone\":\"dɪ'pɑrt\",\"ukphone\":\"dɪ'pɑːt\"},{\"name\":\"exaggerate\",\"trans\":[\"夸大， 夸张\"],\"usphone\":\"ɪɡ'zædʒəret\",\"ukphone\":\"ɪg'zædʒəreɪt\"},{\"name\":\"imply\",\"trans\":[\"暗示， 意指\"],\"usphone\":\"ɪm'plai\",\"ukphone\":\"ɪm'plaɪ\"},{\"name\":\"capture\",\"trans\":[\"捕获， 俘获； 夺得\"],\"usphone\":\"'kæptʃɚ\",\"ukphone\":\"'kæptʃə\"},{\"name\":\"commitment\",\"trans\":[\"承诺， 许诺， 保证； 信奉， 献身； 承担的义务\"],\"usphone\":\"kə'mɪtmənt\",\"ukphone\":\"kə'mɪtmənt\"},{\"name\":\"spade\",\"trans\":[\"铲， 铁锹\"],\"usphone\":\"sped\",\"ukphone\":\"speɪd\"},{\"name\":\"manufacture\",\"trans\":[\"制造，加工\",\"制造， 制造业\"],\"usphone\":\"'mænjə'fæktʃɚ\",\"ukphone\":\"ˌmænju'fæktʃə\"},{\"name\":\"sequence\",\"trans\":[\"连续， 接续， 一连串； 次序， 顺序\"],\"usphone\":\"'sikwəns\",\"ukphone\":\"'siːkwəns\"},{\"name\":\"collision\",\"trans\":[\"碰撞； 冲突， 抵触\"],\"usphone\":\"kə'lɪʒən\",\"ukphone\":\"kə'lɪʒn\"},{\"name\":\"qualification\",\"trans\":[\"资格， 资格证明， 合格证书； 限制， 限定\"],\"usphone\":\",kwɑlɪfɪ'keʃən\",\"ukphone\":\"ˌkwɒlɪfɪ'keɪʃn\"},{\"name\":\"provision\",\"trans\":[\"供应； 准备； 条款， 规定； 给养， 口粮\"],\"usphone\":\"prə'vɪʒn\",\"ukphone\":\"prə'vɪʒn\"},{\"name\":\"recruit\",\"trans\":[\"招募，吸收\",\"新兵； 新成员\"],\"usphone\":\"rɪ'krut\",\"ukphone\":\"rɪ'kruːt\"},{\"name\":\"thrust\",\"trans\":[\"插；戳，刺\",\"戳， 刺； 要点， 要旨； 推力\"],\"usphone\":\"θrʌst\",\"ukphone\":\"θrʌst\"},{\"name\":\"fame\",\"trans\":[\"名声， 名望\"],\"usphone\":\"fem\",\"ukphone\":\"feɪm\"},{\"name\":\"replacement\",\"trans\":[\"代替， 取代； 更换， 调换； 替代的人\"],\"usphone\":\"rɪ'plesmənt\",\"ukphone\":\"rɪ'pleɪsmənt\"},{\"name\":\"mud\",\"trans\":[\"泥， 泥浆\"],\"usphone\":\"mʌd\",\"ukphone\":\"mʌd\"},{\"name\":\"mug\",\"trans\":[\"大杯\",\"对…行凶抢劫\"],\"usphone\":\"mʌɡ\",\"ukphone\":\"mʌg\"},{\"name\":\"pond\",\"trans\":[\"池塘\"],\"usphone\":\"pɑnd\",\"ukphone\":\"pɒnd\"},{\"name\":\"arrival\",\"trans\":[\"到达， 到来； 到达者， 到达物\"],\"usphone\":\"ə'raɪvəl\",\"ukphone\":\"ə'raɪvl\"},{\"name\":\"scientific\",\"trans\":[\"科学的\"],\"usphone\":\",saɪən'tɪfɪk\",\"ukphone\":\"ˌsaɪən'tɪfɪk\"},{\"name\":\"frequent\",\"trans\":[\"时常发生的，常见的\",\"常到， 常去\"],\"usphone\":\"'frikwənt\",\"ukphone\":\"'friːkwənt\"},{\"name\":\"according\",\"trans\":[\"相等的， 一致的， 依…而定的\"],\"usphone\":\"ə'kɔrdɪŋ\",\"ukphone\":\"ə'kɔːdɪŋ\"},{\"name\":\"insure\",\"trans\":[\"为…投保； 确保\"],\"usphone\":\"ɪn'ʃʊr\",\"ukphone\":\"ɪn'ʃuə\"},{\"name\":\"powder\",\"trans\":[\"粉， 粉末\"],\"usphone\":\"'paʊdɚ\",\"ukphone\":\"'paudə\"},{\"name\":\"membership\",\"trans\":[\"会员身份， 会籍； 全体会员， 会员数\"],\"usphone\":\"'mɛmbɚʃɪp\",\"ukphone\":\"'membəʃɪp\"},{\"name\":\"error\",\"trans\":[\"错误， 谬误， 差错\"],\"usphone\":\"'ɛrɚ\",\"ukphone\":\"'erə\"},{\"name\":\"platform\",\"trans\":[\"平台， 站台， 讲台； 纲领， 宣言\"],\"usphone\":\"'plæt'fɔrm\",\"ukphone\":\"'plætfɔːm\"},{\"name\":\"network\",\"trans\":[\"网状物； 广播网， 电视网； 网络\"],\"usphone\":\"'nɛtwɝk\",\"ukphone\":\"'netwɜːk\"},{\"name\":\"jealous\",\"trans\":[\"妒忌的， 猜疑的； 精心守护的\"],\"usphone\":\"'dʒɛləs\",\"ukphone\":\"'dʒeləs\"},{\"name\":\"rust\",\"trans\":[\"生锈， 氧化\",\"铁锈\"],\"usphone\":\"rʌst\",\"ukphone\":\"rʌst\"},{\"name\":\"trace\",\"trans\":[\"痕迹；丝毫，少许\",\"跟踪； 追溯； 描摹\"],\"usphone\":\"tres\",\"ukphone\":\"treɪs\"},{\"name\":\"Negro\",\"trans\":[\"黑人\"],\"usphone\":\"'nigro\",\"ukphone\":\"'niːgrəu\"},{\"name\":\"modernization\",\"trans\":[\"现代化\"],\"usphone\":\",mɑdɚnə'zeʃən\",\"ukphone\":\"ˌmɒdənaɪ'zeɪʃn\"},{\"name\":\"grave\",\"trans\":[\"严重的； 严肃的\",\"坟墓\"],\"usphone\":\"ɡrev\",\"ukphone\":\"greɪv\"},{\"name\":\"criminology\",\"trans\":[\"犯罪学， 刑事学\"],\"usphone\":\",krɪmɪ'nɑlədʒi\",\"ukphone\":\"ˌkrɪmɪ'nɒlədʒi\"},{\"name\":\"advantage\",\"trans\":[\"优点， 优势， 好处\"],\"usphone\":\"əd'væntɪdʒ\",\"ukphone\":\"əd'vɑːntɪdʒ\"},{\"name\":\"assistant\",\"trans\":[\"助理的， 辅助的\",\"助手，助理，助教\"],\"usphone\":\"ə'sɪstənt\",\"ukphone\":\"ə'sɪstənt\"},{\"name\":\"inn\",\"trans\":[\"小旅店， 小酒店\"],\"usphone\":\"ɪn\",\"ukphone\":\"ɪn\"},{\"name\":\"instead\",\"trans\":[\"作为替代； 却， 反而\"],\"usphone\":\"ɪn'stɛd\",\"ukphone\":\"ɪn'sted\"},{\"name\":\"controversy\",\"trans\":[\"争论， 辩论\"],\"usphone\":\"ˈkɑntrəvɝ​sɪ\",\"ukphone\":\"'kɒntrəvɜːsi\"},{\"name\":\"command\",\"trans\":[\"命令， 指挥， 控制\"],\"usphone\":\"kə'mænd\",\"ukphone\":\"kə'mɑːnd\"},{\"name\":\"newsstand\",\"trans\":[\"报摊， 杂志摊\"],\"usphone\":\"'njʊz,stænd\",\"ukphone\":\"'njuːzstænd\"},{\"name\":\"worthless\",\"trans\":[\"无价值的， 无用的\"],\"usphone\":\"ˈwərthləs\",\"ukphone\":\"'wɜːθləs\"},{\"name\":\"performance\",\"trans\":[\"演出； 执行， 完成； 工作情况， 表现； 工作性能\"],\"usphone\":\"pɚ'fɔrməns\",\"ukphone\":\"pə'fɔːməns\"},{\"name\":\"dessert\",\"trans\":[\"甜食， 点心\"],\"usphone\":\"dɪ'zɝt\",\"ukphone\":\"dɪ'zɜːt\"},{\"name\":\"ambassador\",\"trans\":[\"大使， 使节， 派驻国际组织的代表\"],\"usphone\":\"æm'bæsədɚ\",\"ukphone\":\"æm'bæsədə\"},{\"name\":\"anticipate\",\"trans\":[\"预料， 预期， 期望； 先于…行动； 提前使用\"],\"usphone\":\"æn'tɪsə'pet\",\"ukphone\":\"æn'tɪsɪpeɪt\"},{\"name\":\"variable\",\"trans\":[\"易变的\",\"变量\"],\"usphone\":\"'vɛrɪəbl\",\"ukphone\":\"'veəriəbl\"},{\"name\":\"temple\",\"trans\":[\"圣堂， 神殿， 庙宇\"],\"usphone\":\"'tɛmpl\",\"ukphone\":\"'templ\"},{\"name\":\"growth\",\"trans\":[\"增长， 增长量； 生长， 生长物\"],\"usphone\":\"ɡroθ\",\"ukphone\":\"grəuθ\"},{\"name\":\"landscape\",\"trans\":[\"风景，景色；风景画；全景\",\"美化…的景观\"],\"usphone\":\"ˈlændskep\",\"ukphone\":\"'lændskeɪp\"},{\"name\":\"weave\",\"trans\":[\"织， 编\"],\"usphone\":\"wiv\",\"ukphone\":\"wiːv\"},{\"name\":\"carrot\",\"trans\":[\"胡萝卜\"],\"usphone\":\"'kærət\",\"ukphone\":\"'kærət\"},{\"name\":\"normally\",\"trans\":[\"通常； 正常地\"],\"usphone\":\"'nɔrmli\",\"ukphone\":\"'nɔːməli\"},{\"name\":\"exception\",\"trans\":[\"例外， 除外\"],\"usphone\":\"ɪk'sɛpʃən\",\"ukphone\":\"ɪk'sepʃn\"},{\"name\":\"vague\",\"trans\":[\"模糊的， 含糊的\"],\"usphone\":\"veɡ\",\"ukphone\":\"veɪg\"},{\"name\":\"temporary\",\"trans\":[\"暂时的， 临时的\"],\"usphone\":\"ˈtempəreri\",\"ukphone\":\"'temprəri\"},{\"name\":\"fare\",\"trans\":[\"进展\",\"车费，船费，票价\"],\"usphone\":\"fɛr\",\"ukphone\":\"feə\"},{\"name\":\"desperate\",\"trans\":[\"拼死的， 不顾一切的； 绝望的； 极需要的\"],\"usphone\":\"'dɛspərət\",\"ukphone\":\"'despərət\"},{\"name\":\"leading\",\"trans\":[\"指导的， 带头的； 最主要的； 饰演主角的\"],\"usphone\":\"'lidɪŋ\",\"ukphone\":\"'liːdɪŋ\"},{\"name\":\"awful\",\"trans\":[\"令人不愉快的， 难过的； 非常的， 极大的\"],\"usphone\":\"'ɔfl\",\"ukphone\":\"'ɔːfl\"},{\"name\":\"accuracy\",\"trans\":[\"准确， 精确\"],\"usphone\":\"'ækjərəsi\",\"ukphone\":\"'ækjərəsi\"},{\"name\":\"handy\",\"trans\":[\"手边的， 便于使用的\"],\"usphone\":\"'hændi\",\"ukphone\":\"'hændi\"},{\"name\":\"urge\",\"trans\":[\"鼓励；推进，催促；竭力主张，强烈要求\",\"冲动， 强烈的欲望\"],\"usphone\":\"ɝdʒ\",\"ukphone\":\"ɜːdʒ\"},{\"name\":\"resolution\",\"trans\":[\"正式决定， 决议； 决心， 决意； 解决， 解答； 分辨率， 清晰度\"],\"usphone\":\",rɛzə'luʃən\",\"ukphone\":\"ˌrezə'luːʃn\"},{\"name\":\"via\",\"trans\":[\"经过， 通过\"],\"usphone\":\"ˈvaɪə, ˈviə\",\"ukphone\":\"'vaɪə;'viːə\"},{\"name\":\"setting\",\"trans\":[\"环境， 背景， 布景； 调节， 设定的位置\"],\"usphone\":\"'sɛtɪŋ\",\"ukphone\":\"'setɪŋ\"},{\"name\":\"score\",\"trans\":[\"得， 给…打分； 画线于， 做记号于； 赢得\",\"得分，比数，成绩；二十\"],\"usphone\":\"skɔ\",\"ukphone\":\"skɔː\"},{\"name\":\"quote\",\"trans\":[\"引用，援引\",\"引文， 引语； 报价， 牌价； 引号\"],\"usphone\":\"kwot\",\"ukphone\":\"kwəut\"},{\"name\":\"graduate\",\"trans\":[\"研究生的\",\"毕业\",\"毕业生；研究生\"],\"usphone\":\"ˈɡrædʒuˌet\",\"ukphone\":\"ˈɡradʒʊeɪt\"},{\"name\":\"famine\",\"trans\":[\"饥荒； 严重的缺乏\"],\"usphone\":\"'fæmɪn\",\"ukphone\":\"'fæmɪn\"},{\"name\":\"gramme\",\"trans\":[\"gram的英式拼法\"],\"usphone\":\"ɡræm\",\"ukphone\":\"græm\"},{\"name\":\"absent\",\"trans\":[\"缺席的， 不在场的； 缺乏的， 不存在的； 心不在焉的\"],\"usphone\":\"ˈæbsnt;(for v.)əbˈsɛnt\",\"ukphone\":\"'æbsənt\"},{\"name\":\"rag\",\"trans\":[\"破布， 碎布； 破旧衣服\"],\"usphone\":\"ræɡ\",\"ukphone\":\"ræg\"},{\"name\":\"visual\",\"trans\":[\"看得见的\",\"视觉资料\"],\"usphone\":\"'vɪʒʊəl\",\"ukphone\":\"'vɪʒuəl\"},{\"name\":\"understanding\",\"trans\":[\"体谅的， 宽容的， 通情达理的\",\"理解，理解力；谅解；协议；相互理解，融洽\"],\"usphone\":\",ʌndɚ'stændɪŋ\",\"ukphone\":\"ˌʌndə'stændɪŋ\"},{\"name\":\"empire\",\"trans\":[\"帝国\"],\"usphone\":\"'ɛmpaɪr\",\"ukphone\":\"'empaɪə\"},{\"name\":\"educate\",\"trans\":[\"教育， 培养， 训练\"],\"usphone\":\"'ɛdʒuket\",\"ukphone\":\"'edʒʊkeɪt\"},{\"name\":\"fairy\",\"trans\":[\"小精灵， 小仙子\"],\"usphone\":\"'fɛri\",\"ukphone\":\"'feəri\"},{\"name\":\"ashamed\",\"trans\":[\"惭愧的， 羞耻的， 害臊的\"],\"usphone\":\"ə'ʃemd\",\"ukphone\":\"ə'ʃeɪmd\"},{\"name\":\"instruct\",\"trans\":[\"指示， 命令； 通知； 教授， 训练\"],\"usphone\":\"ɪn'strʌkt\",\"ukphone\":\"ɪn'strʌkt\"},{\"name\":\"rat\",\"trans\":[\"鼠\"],\"usphone\":\"ræt\",\"ukphone\":\"ræt\"},{\"name\":\"mayor\",\"trans\":[\"市长\"],\"usphone\":\"'meɚ\",\"ukphone\":\"meə\"},{\"name\":\"virtually\",\"trans\":[\"实际上， 事实上\"],\"usphone\":\"ˈvɜrtʃuəli\",\"ukphone\":\"'vɜːtʃuəli\"},{\"name\":\"fairly\",\"trans\":[\"相当， 尚可， 还； 公平地\"],\"usphone\":\"'fɛrli\",\"ukphone\":\"'feəli\"},{\"name\":\"handwriting\",\"trans\":[\"笔迹， 手迹； 书法\"],\"usphone\":\"'hænd'raɪtɪŋ\",\"ukphone\":\"'hændraɪtɪŋ\"},{\"name\":\"merchant\",\"trans\":[\"商人\"],\"usphone\":\"'mɝtʃənt\",\"ukphone\":\"'mɜːtʃənt\"},{\"name\":\"raw\",\"trans\":[\"自然状态的， 未加工过的； 生的； 未经分析的， 原始的； 生疏无知的， 未经训练的； 露肉而刺痛的\"],\"usphone\":\"rɔ\",\"ukphone\":\"rɔː\"},{\"name\":\"proportional\",\"trans\":[\"比例的， 成比例的\"],\"usphone\":\"prə'pɔrʃənl\",\"ukphone\":\"prə'pɔːʃənl\"},{\"name\":\"economy\",\"trans\":[\"经济； 节约， 节省\"],\"usphone\":\"ɪˈkɑnəmɪ\",\"ukphone\":\"ɪ'kɒnəmi\"},{\"name\":\"community\",\"trans\":[\"社区， 社会， 公社； 团体， 界； 群落\"],\"usphone\":\"kəˈmjunətɪ\",\"ukphone\":\"kə'mjuːnəti\"},{\"name\":\"packet\",\"trans\":[\"小包， 小盒\"],\"usphone\":\"'pækɪt\",\"ukphone\":\"'pækɪt\"},{\"name\":\"version\",\"trans\":[\"译本； 说法； 改写本\"],\"usphone\":\"'vɝʒn\",\"ukphone\":\"'vɜːʃn;'vɜːʒn\"},{\"name\":\"airport\",\"trans\":[\"机场， 航空港\"],\"usphone\":\"'ɛrpɔrt\",\"ukphone\":\"'eəpɔːt\"},{\"name\":\"courtyard\",\"trans\":[\"庭院， 院子\"],\"usphone\":\"'kɔrtjɑrd\",\"ukphone\":\"'kɔːtjɑːd\"},{\"name\":\"nationality\",\"trans\":[\"国籍； 民族\"],\"usphone\":\",næʃə'næləti\",\"ukphone\":\"ˌnæʃə'næləti\"},{\"name\":\"selection\",\"trans\":[\"选择， 挑选； 被挑选出来的人， 精选品； 可供选择的东西\"],\"usphone\":\"sɪ'lɛkʃən\",\"ukphone\":\"sɪ'lekʃn\"},{\"name\":\"institute\",\"trans\":[\"研究所，学院\",\"建立， 设立\"],\"usphone\":\"'ɪnstɪtut\",\"ukphone\":\"'ɪnstɪtjuːt\"},{\"name\":\"aboard\",\"trans\":[\"在船上， 上船\"],\"usphone\":\"ə'bɔrd\",\"ukphone\":\"ə'bɔːd\"},{\"name\":\"endure\",\"trans\":[\"忍受， 容忍； 持久， 持续\"],\"usphone\":\"ɪn'dʊr\",\"ukphone\":\"ɪn'djuə\"},{\"name\":\"detail\",\"trans\":[\"细节，枝节；零件\",\"详细说明\"],\"usphone\":\"dɪˈtel\",\"ukphone\":\"'diːteɪl\"},{\"name\":\"shortly\",\"trans\":[\"立刻， 不久； 不耐烦地； 简短地\"],\"usphone\":\"'ʃɔrtli\",\"ukphone\":\"'ʃɔːtli\"},{\"name\":\"hobby\",\"trans\":[\"业余爱好， 癖好\"],\"usphone\":\"'hɑbi\",\"ukphone\":\"'hɒbi\"},{\"name\":\"appropriate\",\"trans\":[\"适当的， 恰当的\"],\"usphone\":\"əˈproprɪət;(for v.) əˈproprɪet\",\"ukphone\":\"ə'prəupriət\"},{\"name\":\"providing\",\"trans\":[\"倘若\"],\"usphone\":\"prə'vaɪdɪŋ\",\"ukphone\":\"prə'vaɪdɪŋ\"},{\"name\":\"fate\",\"trans\":[\"命运， 天数\"],\"usphone\":\"fet\",\"ukphone\":\"feɪt\"},{\"name\":\"throat\",\"trans\":[\"咽喉， 喉咙； 嗓音\"],\"usphone\":\"θrot\",\"ukphone\":\"θrəut\"},{\"name\":\"utility\",\"trans\":[\"效用， 有用， 实用； 公用事业\"],\"usphone\":\"ju'tɪləti\",\"ukphone\":\"juː'tɪləti\"},{\"name\":\"immediately\",\"trans\":[\"立即， 马上； 直接地， 紧接地\"],\"usphone\":\"ɪ'midɪətli\",\"ukphone\":\"ɪ'miːdiətli\"},{\"name\":\"manual\",\"trans\":[\"用手的；手工做的\",\"手册， 指南\"],\"usphone\":\"'mænjuəl\",\"ukphone\":\"'mænjuəl\"},{\"name\":\"measurement\",\"trans\":[\"衡量， 测量； 尺寸， 大小\"],\"usphone\":\"'mɛʒɚmənt\",\"ukphone\":\"'meʒəmənt\"},{\"name\":\"optimistic\",\"trans\":[\"乐观的， 乐观主义的\"],\"usphone\":\",ɑptɪ'mɪstɪk\",\"ukphone\":\"ˌɒptɪ'mɪstɪk\"},{\"name\":\"vocabulary\",\"trans\":[\"词汇表， 词汇， 语汇\"],\"usphone\":\"və'kæbjəlɛri\",\"ukphone\":\"və'kæbjələri\"},{\"name\":\"retire\",\"trans\":[\"退休， 退役； 退下， 退出， 撤退； 就寝\"],\"usphone\":\"rɪ'taɪɚ\",\"ukphone\":\"rɪ'taɪə\"},{\"name\":\"aspect\",\"trans\":[\"方面； 朝向， 方向； 样子， 外表\"],\"usphone\":\"'æspɛkt\",\"ukphone\":\"'æspekt\"},{\"name\":\"particle\",\"trans\":[\"粒子， 微粒； 小品词， 语助词\"],\"usphone\":\"'pɑrtɪkl\",\"ukphone\":\"'pɑːtɪkl\"},{\"name\":\"aggressive\",\"trans\":[\"侵略的， 好斗的； 敢做敢为的； 有进取心的\"],\"usphone\":\"ə'ɡrɛsɪv\",\"ukphone\":\"ə'gresɪv\"},{\"name\":\"behavior\",\"trans\":[\"行为， 举止， 表现\"],\"usphone\":\"bɪ'hevjɚ\",\"ukphone\":\"bɪ'heɪvjə\"},{\"name\":\"musician\",\"trans\":[\"音乐家， 乐师\"],\"usphone\":\"mjʊ'zɪʃən\",\"ukphone\":\"mju'zɪʃn\"},{\"name\":\"minimize\",\"trans\":[\"将…减少； 最小化\"],\"usphone\":\"'mɪnɪmaɪz\",\"ukphone\":\"'mɪnɪmaɪz\"},{\"name\":\"descend\",\"trans\":[\"下来， 下降； 下倾\"],\"usphone\":\"dɪ'sɛnd\",\"ukphone\":\"dɪ'send\"},{\"name\":\"saint\",\"trans\":[\"圣徒； 圣人， 道德高尚的人； [用于人名或地名等前]圣\"],\"usphone\":\"sent\",\"ukphone\":\"seɪnt\"},{\"name\":\"density\",\"trans\":[\"密集， 稠密； 密度\"],\"usphone\":\"'dɛnsəti\",\"ukphone\":\"'densəti\"},{\"name\":\"logical\",\"trans\":[\"逻辑的， 合乎常理的\"],\"usphone\":\"'lɑdʒɪkl\",\"ukphone\":\"'lɒdʒɪkl\"},{\"name\":\"oblige\",\"trans\":[\"迫使； 施恩于， 帮…的忙； 使感激\"],\"usphone\":\"ə'blaɪdʒ\",\"ukphone\":\"ə'blaɪdʒ\"},{\"name\":\"slam\",\"trans\":[\"砰地关上；猛力拉，砰地放下；猛烈抨击\",\"砰的一声\"],\"usphone\":\"slæm\",\"ukphone\":\"slæm\"},{\"name\":\"characterize\",\"trans\":[\"成为…的特征， 以…为特征； 描绘的特性， 描述\"],\"usphone\":\"'kærəktə'raɪz\",\"ukphone\":\"'kærəktəraɪz\"},{\"name\":\"swing\",\"trans\":[\"摇摆，回转；突然转向\",\"摇摆； 秋千\"],\"usphone\":\"swɪŋ\",\"ukphone\":\"swɪŋ\"},{\"name\":\"ridiculous\",\"trans\":[\"荒谬的， 可笑的\"],\"usphone\":\"rɪ'dɪkjələs\",\"ukphone\":\"rɪ'dɪkjələs\"},{\"name\":\"handbag\",\"trans\":[\"手提包\"],\"usphone\":\"'hænd'bæg\",\"ukphone\":\"'hændbæg\"},{\"name\":\"invasion\",\"trans\":[\"入侵， 侵略， 侵犯\"],\"usphone\":\"ɪn'veʒn\",\"ukphone\":\"ɪn'veɪʒn\"},{\"name\":\"spin\",\"trans\":[\"旋转；晕眩；纺，织；绞干，甩干\",\"旋转， 自转\"],\"usphone\":\"spɪn\",\"ukphone\":\"spɪn\"},{\"name\":\"severe\",\"trans\":[\"严重的； 严厉的， 严格的； 严峻的， 艰难的； 朴素的， 不加装饰的\"],\"usphone\":\"səˈvɪr\",\"ukphone\":\"sɪ'vɪə\"},{\"name\":\"emerge\",\"trans\":[\"出现， 涌现， 冒出\"],\"usphone\":\"ɪ'mɝdʒ\",\"ukphone\":\"i'mɜːdʒ\"},{\"name\":\"shallow\",\"trans\":[\"浅的；浅薄的\",\"浅滩， 浅水处\"],\"usphone\":\"'ʃælo\",\"ukphone\":\"'ʃæləu\"},{\"name\":\"lease\",\"trans\":[\"租约，租契\",\"出租； 租得， 租有\"],\"usphone\":\"lis\",\"ukphone\":\"liːs\"},{\"name\":\"exploit\",\"trans\":[\"剥削； 利用； 开拓\",\"业绩， 功绩\"],\"usphone\":\"ɛksplɔɪt; ɪkˈsplɔɪt\",\"ukphone\":\"ˈeksplɔɪt;ɪkˈsplɔɪt\"},{\"name\":\"slap\",\"trans\":[\"掴，掌击，拍；啪的一声放\",\"掴， 掌击， 拍\"],\"usphone\":\"slæp\",\"ukphone\":\"slæp\"},{\"name\":\"spit\",\"trans\":[\"吐唾沫，吐出\",\"唾沫， 唾液\"],\"usphone\":\"spɪt\",\"ukphone\":\"spɪt\"},{\"name\":\"scout\",\"trans\":[\"侦察， 寻找\",\"侦察员，侦察机，侦察舰；童子军\"],\"usphone\":\"skaʊt\",\"ukphone\":\"skaut\"},{\"name\":\"anniversary\",\"trans\":[\"周年纪念日\"],\"usphone\":\",ænɪ'vɝsəri\",\"ukphone\":\"ˌænɪ'vɜːsəri\"},{\"name\":\"register\",\"trans\":[\"登记， 注册； 指示， 自动记下； 流露； 表示， 表达； 把挂号\",\"登记；登记表\"],\"usphone\":\"'rɛdʒɪstɚ\",\"ukphone\":\"'redʒɪstə\"},{\"name\":\"restless\",\"trans\":[\"焦躁不安的； 静不下来的， 运动不止的\"],\"usphone\":\"'rɛstləs\",\"ukphone\":\"'restləs\"},{\"name\":\"persuasive\",\"trans\":[\"劝诱的； 有说服力的\"],\"usphone\":\"pɚ'swesɪv\",\"ukphone\":\"pə'sweɪsɪv\"},{\"name\":\"fleet\",\"trans\":[\"舰队， 船队\"],\"usphone\":\"flit\",\"ukphone\":\"fliːt\"},{\"name\":\"communicate\",\"trans\":[\"通讯； 交际， 交流； 连接， 相通； 传达， 传播； 传染\"],\"usphone\":\"kə'mjunɪket\",\"ukphone\":\"kə'mjuːnɪkeɪt\"},{\"name\":\"evidence\",\"trans\":[\"根据， 证据； 证人\"],\"usphone\":\"'ɛvɪdəns\",\"ukphone\":\"'evɪdəns\"},{\"name\":\"saddle\",\"trans\":[\"鞍，鞍状物；车座\",\"给…装鞍； 使承担任务\"],\"usphone\":\"'sædl\",\"ukphone\":\"'sædl\"},{\"name\":\"rural\",\"trans\":[\"农村的， 乡村的\"],\"usphone\":\"'rʊrəl\",\"ukphone\":\"'ruərəl\"},{\"name\":\"official\",\"trans\":[\"官员的；官方的，正式的\",\"官员， 行政人员， 高级人员\"],\"usphone\":\"əˈfɪʃəl; oʊˈfɪʃəl\",\"ukphone\":\"ə'fɪʃl\"},{\"name\":\"historical\",\"trans\":[\"历史的， 有关历史的\"],\"usphone\":\"hɪ'stɔrɪkl\",\"ukphone\":\"hɪ'stɒrɪkl\"},{\"name\":\"repetition\",\"trans\":[\"重复， 反复\"],\"usphone\":\"'rɛpə'tɪʃən\",\"ukphone\":\"ˌrepə'tɪʃn\"},{\"name\":\"fortunately\",\"trans\":[\"幸运地； 幸亏\"],\"usphone\":\"'fɔrtʃənətli\",\"ukphone\":\"'fɔːtʃənətli\"},{\"name\":\"acid\",\"trans\":[\"酸的， 酸性的\",\"酸\"],\"usphone\":\"'æsɪd\",\"ukphone\":\"'æsɪd\"},{\"name\":\"transmission\",\"trans\":[\"传播， 发射； 传送， 传递； 传染\"],\"usphone\":\"træns'mɪʃən\",\"ukphone\":\"trænz'mɪʃn; træns'mɪʃn\"},{\"name\":\"shortage\",\"trans\":[\"不足， 缺少\"],\"usphone\":\"'ʃɔrtɪdʒ\",\"ukphone\":\"'ʃɔːtɪdʒ\"},{\"name\":\"discrimination\",\"trans\":[\"区别， 辨别； 识别力； 差别对待， 歧视\"],\"usphone\":\"dɪ,skrɪmɪ'neʃən\",\"ukphone\":\"dɪsˌkrɪmɪ'neɪʃn\"},{\"name\":\"female\",\"trans\":[\"雌的； 女的\",\"雌性动物；女子\"],\"usphone\":\"'fimel\",\"ukphone\":\"'fiːmeɪl\"},{\"name\":\"microphone\",\"trans\":[\"扩音器， 话筒， 麦克风\"],\"usphone\":\"'maɪkrə'fon\",\"ukphone\":\"'maɪkrəfəun\"},{\"name\":\"swift\",\"trans\":[\"快的； 反应快的； 敏捷的\"],\"usphone\":\"swɪft\",\"ukphone\":\"swɪft\"},{\"name\":\"surrender\",\"trans\":[\"交出， 放弃； 投降\"],\"usphone\":\"sə'rɛndɚ\",\"ukphone\":\"sə'rendə\"},{\"name\":\"faint\",\"trans\":[\"不清楚的，模糊的\",\"晕倒，昏厥\",\"昏厥\"],\"usphone\":\"fent\",\"ukphone\":\"feɪnt\"},{\"name\":\"world-wide\",\"trans\":[\"遍及全球的\"],\"usphone\":\"\",\"ukphone\":\"'wɜːldwaɪd\"},{\"name\":\"minister\",\"trans\":[\"部长， 大臣； 公使， 外交使节； 牧师\"],\"usphone\":\"'mɪnɪstɚ\",\"ukphone\":\"'mɪnɪstə\"},{\"name\":\"pose\",\"trans\":[\"摆姿势；假装，装腔作势\",\"使摆好姿势；造成，引起；提出，陈述\",\"样子， 姿势\"],\"usphone\":\"poz\",\"ukphone\":\"pəuz\"},{\"name\":\"remedy\",\"trans\":[\"补救办法，纠正办法；药品；治疗法\",\"补救， 纠正； 医治， 治疗\"],\"usphone\":\"'rɛmədi\",\"ukphone\":\"'remədi\"},{\"name\":\"jail\",\"trans\":[\"监狱，看守所\",\"监禁， 拘留； 塞满； 卡住； 干扰\"],\"usphone\":\"dʒel\",\"ukphone\":\"dʒeɪl\"},{\"name\":\"consent\",\"trans\":[\"同意\",\"同意，赞成\"],\"usphone\":\"kən'sɛnt\",\"ukphone\":\"kən'sent\"},{\"name\":\"insist\",\"trans\":[\"坚持， 坚决认为； 坚持要求\"],\"usphone\":\"ɪn'sɪst\",\"ukphone\":\"ɪn'sɪst\"},{\"name\":\"typewriter\",\"trans\":[\"打字机\"],\"usphone\":\"'taɪpraɪtɚ\",\"ukphone\":\"'taɪpraɪtə\"},{\"name\":\"helpless\",\"trans\":[\"无助的； 无能的； 无法抗拒的\"],\"usphone\":\"'hɛlpləs\",\"ukphone\":\"'helpləs\"},{\"name\":\"respect\",\"trans\":[\"尊敬；尊重；问候；方面\",\"尊敬； 尊重\"],\"usphone\":\"rɪ'spɛkt\",\"ukphone\":\"rɪ'spekt\"},{\"name\":\"volume\",\"trans\":[\"卷， 册， 书卷； 容积， 体积； 音量， 响度\"],\"usphone\":\"'vɑljum\",\"ukphone\":\"'vɒljuːm\"},{\"name\":\"retreat\",\"trans\":[\"退却， 撤退； 退避， 退缩\"],\"usphone\":\"rɪ'trit\",\"ukphone\":\"rɪ'triːt\"},{\"name\":\"ache\",\"trans\":[\"疼痛；渴望\",\"疼痛\"],\"usphone\":\"ek\",\"ukphone\":\"eɪk\"},{\"name\":\"mutual\",\"trans\":[\"相互的； 共同的\"],\"usphone\":\"'mjutʃuəl\",\"ukphone\":\"'mjuːtʃuəl\"},{\"name\":\"shell\",\"trans\":[\"壳，贝壳；外壳，框架；炮弹\",\"剥…的壳； 炮击\"],\"usphone\":\"ʃɛl\",\"ukphone\":\"ʃel\"},{\"name\":\"guideline\",\"trans\":[\"指导方针， 准则\"],\"usphone\":\"'ɡaɪdlaɪn\",\"ukphone\":\"'gaɪdlaɪn\"},{\"name\":\"loose\",\"trans\":[\"松的； 不精确的， 不严密的； 散漫的\"],\"usphone\":\"lus\",\"ukphone\":\"luːs\"},{\"name\":\"therefore\",\"trans\":[\"因此， 所以\"],\"usphone\":\"'ðɛrfɔr\",\"ukphone\":\"'ðeəfɔː\"},{\"name\":\"exchange\",\"trans\":[\"交换； 交流； 兑换\"],\"usphone\":\"ɪks'tʃendʒ\",\"ukphone\":\"ɪks'tʃeɪndʒ\"},{\"name\":\"hesitate\",\"trans\":[\"犹豫， 踌躇； 含糊； 不情愿\"],\"usphone\":\"ˈhɛzətet\",\"ukphone\":\"'hezɪteɪt\"},{\"name\":\"rifle\",\"trans\":[\"来复枪， 步枪\"],\"usphone\":\"'raɪfl\",\"ukphone\":\"'raɪfl\"},{\"name\":\"private\",\"trans\":[\"私人的；秘密的；私下的；私营的\",\"士兵， 列兵\"],\"usphone\":\"ˈpraɪvɪt\",\"ukphone\":\"'praɪvət\"},{\"name\":\"baggage\",\"trans\":[\"行李\"],\"usphone\":\"'bæɡɪdʒ\",\"ukphone\":\"'bægɪdʒ\"},{\"name\":\"companion\",\"trans\":[\"同伴， 共事者； 伴侣\"],\"usphone\":\"kəm'pænɪən\",\"ukphone\":\"kəm'pæniən\"},{\"name\":\"breakdown\",\"trans\":[\"垮， 衰竭； 损坏， 故障； 倒塌\"],\"usphone\":\"'brek'daʊn\",\"ukphone\":\"'breɪkdaun\"},{\"name\":\"paste\",\"trans\":[\"糊，糨糊\",\"粘， 贴\"],\"usphone\":\"pest\",\"ukphone\":\"peɪst\"},{\"name\":\"overtake\",\"trans\":[\"追上， 超过； 突然降临于， 意外地碰上\"],\"usphone\":\",ovɚ'tek\",\"ukphone\":\"ˌəuvə'teɪk\"},{\"name\":\"jeans\",\"trans\":[\"工装裤， 牛仔裤\"],\"usphone\":\"\",\"ukphone\":\"dʒiːnz\"},{\"name\":\"overnight\",\"trans\":[\"整夜， 通宵； 一夜间， 突然\",\"一整夜的； 一夜间的， 突然的\"],\"usphone\":\"'ovənaɪt\",\"ukphone\":\"əʊvə'naɪt\"},{\"name\":\"behave\",\"trans\":[\"表现， 举止； 运转， 作出反应\"],\"usphone\":\"bɪ'hev\",\"ukphone\":\"bɪ'heɪv\"},{\"name\":\"stretch\",\"trans\":[\"伸展，延续；伸长，拉长；倾注全力；紧张\",\"一段时间， 一段路程， 连绵的一片； 伸展， 延伸\"],\"usphone\":\"strɛtʃ\",\"ukphone\":\"stretʃ\"},{\"name\":\"undo\",\"trans\":[\"解开， 打开； 取消， 撤销\"],\"usphone\":\"ʌn'du\",\"ukphone\":\"ˌʌn'duː\"},{\"name\":\"accomplish\",\"trans\":[\"达到； 完成\"],\"usphone\":\"ə'kɑmplɪʃ\",\"ukphone\":\"ə'kʌmpliʃ\"},{\"name\":\"laser\",\"trans\":[\"激光\"],\"usphone\":\"'lezɚ\",\"ukphone\":\"'leɪzə\"},{\"name\":\"mixture\",\"trans\":[\"混合， 混合物\"],\"usphone\":\"'mɪkstʃɚ\",\"ukphone\":\"'mɪkstʃə\"},{\"name\":\"engine\",\"trans\":[\"引擎， 发动机； 机车\"],\"usphone\":\"'ɛndʒɪn\",\"ukphone\":\"'endʒɪn\"},{\"name\":\"responsible\",\"trans\":[\"需负责任的， 承担责任的； 有责任感的， 负责可靠的； 责任重大的， 重要的\"],\"usphone\":\"rɪ'spɑnsəbl\",\"ukphone\":\"rɪ'spɒnsəbl\"},{\"name\":\"scope\",\"trans\":[\"范围； 余地， 机会\"],\"usphone\":\"skop\",\"ukphone\":\"skəup\"},{\"name\":\"democratic\",\"trans\":[\"民主的， 民主政体的\"],\"usphone\":\"'dɛmə'krætɪk\",\"ukphone\":\"ˌdemə'krætɪk\"},{\"name\":\"medal\",\"trans\":[\"奖牌， 奖章， 勋章\"],\"usphone\":\"'mɛdl\",\"ukphone\":\"'medl\"},{\"name\":\"satellite\",\"trans\":[\"卫星， 人造卫星\"],\"usphone\":\"'sætəlaɪt\",\"ukphone\":\"'sætəlaɪt\"},{\"name\":\"bullet\",\"trans\":[\"枪弹， 子弹， 弹丸\"],\"usphone\":\"'bʊlɪt\",\"ukphone\":\"'bulɪt\"},{\"name\":\"recorder\",\"trans\":[\"录音机， 录像机； 记录装置， 记录仪\"],\"usphone\":\"rɪ'kɔrdɚ\",\"ukphone\":\"rɪ'kɔːdə\"},{\"name\":\"identify\",\"trans\":[\"一致\",\"认出，鉴定；把…等同于\"],\"usphone\":\"aɪ'dɛntɪfaɪ\",\"ukphone\":\"aɪ'dentɪfaɪ\"},{\"name\":\"embrace\",\"trans\":[\"拥抱，怀抱\",\"拥抱； 包括； 包围\"],\"usphone\":\"ɪm'bres\",\"ukphone\":\"ɪm'breɪs\"},{\"name\":\"nitrogen\",\"trans\":[\"氮\"],\"usphone\":\"'naɪtrədʒən\",\"ukphone\":\"'naɪtrədʒən\"},{\"name\":\"pour\",\"trans\":[\"灌， 倒； 倾泻\"],\"usphone\":\"pɔr\",\"ukphone\":\"pɔː\"},{\"name\":\"label\",\"trans\":[\"标签；标记，符号\",\"贴标签于； 把…称为\"],\"usphone\":\"ˈlebəl\",\"ukphone\":\"'leɪbl\"},{\"name\":\"improvement\",\"trans\":[\"改进， 改善； 改进处\"],\"usphone\":\"ɪm'prʊvmənt\",\"ukphone\":\"ɪm'pruːvmənt\"},{\"name\":\"slippery\",\"trans\":[\"滑的； 狡猾的\"],\"usphone\":\"'slɪpəri\",\"ukphone\":\"'slɪpəri\"},{\"name\":\"scissors\",\"trans\":[\"剪刀\"],\"usphone\":\"'sɪzɚz\",\"ukphone\":\"'sɪzəz\"},{\"name\":\"significance\",\"trans\":[\"意义， 含义； 重要性， 重大\"],\"usphone\":\"sɪɡ'nɪfɪkəns\",\"ukphone\":\"sɪg'nɪfɪkəns\"},{\"name\":\"modify\",\"trans\":[\"更改， 修改； 修饰\"],\"usphone\":\"'mɑdɪfaɪ\",\"ukphone\":\"'mɒdɪfaɪ\"},{\"name\":\"horizon\",\"trans\":[\"地平线； 眼界， 见识\"],\"usphone\":\"hə'raɪzn\",\"ukphone\":\"hə'raɪzn\"},{\"name\":\"environment\",\"trans\":[\"环境， 外界； 围绕\"],\"usphone\":\"ɪn'vaɪrənmənt\",\"ukphone\":\"ɪn'vaɪərənmənt\"},{\"name\":\"airplane\",\"trans\":[\"飞机\"],\"usphone\":\"ˈɛrplen\",\"ukphone\":\"'eəpleɪn\"},{\"name\":\"pledge\",\"trans\":[\"保证，誓言\",\"保证， 许诺\"],\"usphone\":\"plɛdʒ\",\"ukphone\":\"pledʒ\"},{\"name\":\"progressive\",\"trans\":[\"前进的； 渐进的； 进行式的\"],\"usphone\":\"prə'ɡrɛsɪv\",\"ukphone\":\"prə'gresɪv\"},{\"name\":\"reservoir\",\"trans\":[\"水库， 蓄水池； 储藏， 汇集\"],\"usphone\":\"'rɛzɚ,vɔr\",\"ukphone\":\"'rezəvwɑː\"},{\"name\":\"deliberate\",\"trans\":[\"故意的， 蓄意的； 慎重的， 深思熟虑的\",\"仔细考虑， 思考\"],\"usphone\":\"dɪ'lɪbərət\",\"ukphone\":\"dɪ'lɪb(ə)rət\"},{\"name\":\"swear\",\"trans\":[\"宣誓； 咒骂\"],\"usphone\":\"swɛr\",\"ukphone\":\"sweə\"},{\"name\":\"atmosphere\",\"trans\":[\"大气， 空气； 气氛， 环境\"],\"usphone\":\"'ætməsfɪr\",\"ukphone\":\"'ætməsfɪə\"},{\"name\":\"decorate\",\"trans\":[\"装饰， 装潢， 修饰\"],\"usphone\":\"'dɛkəret\",\"ukphone\":\"'dekəreɪt\"},{\"name\":\"copyright\",\"trans\":[\"版权\"],\"usphone\":\"'kɑpɪraɪt\",\"ukphone\":\"'kɒpiraɪt\"},{\"name\":\"biotechnology\",\"trans\":[\"生物工艺学\"],\"usphone\":\"'baɪotɛk'nɑlədʒi\",\"ukphone\":\"ˌbaɪəutek'nɒlədʒi\"},{\"name\":\"career\",\"trans\":[\"生涯， 职业， 经历\"],\"usphone\":\"kə'rɪr\",\"ukphone\":\"kə'rɪə\"},{\"name\":\"occupation\",\"trans\":[\"占领， 占据； 职业； 从事的活动， 消遣\"],\"usphone\":\",ɑkju'peʃən\",\"ukphone\":\"ˌɒkju'peɪʃn\"},{\"name\":\"tendency\",\"trans\":[\"趋向， 趋势， 倾向\"],\"usphone\":\"'tɛndənsi\",\"ukphone\":\"'tendənsi\"},{\"name\":\"release\",\"trans\":[\"释放， 排放； 解除， 解脱； 放开， 松开； 发布； 发行\"],\"usphone\":\"rɪ'lis\",\"ukphone\":\"rɪ'liːs\"},{\"name\":\"charter\",\"trans\":[\"包租的， 租用的\",\"宪章，共同纲领；特许状，许可证；包租\",\"包，租\"],\"usphone\":\"'tʃɑrtɚ\",\"ukphone\":\"'tʃɑːtə\"},{\"name\":\"slim\",\"trans\":[\"苗条的；薄的；少的\",\"减轻体重， 变苗条\"],\"usphone\":\"slɪm\",\"ukphone\":\"slɪm\"},{\"name\":\"arithmetic\",\"trans\":[\"算术， 四则运算\"],\"usphone\":\"ə'rɪθmətɪk\",\"ukphone\":\"ə'rɪθmətɪk\"},{\"name\":\"rib\",\"trans\":[\"肋骨\"],\"usphone\":\"rɪb\",\"ukphone\":\"rɪb\"},{\"name\":\"faulty\",\"trans\":[\"有错误的， 有缺点的\"],\"usphone\":\"'fɔlti\",\"ukphone\":\"'fɔːlti\"},{\"name\":\"liberate\",\"trans\":[\"解放， 释放\"],\"usphone\":\"'lɪbə'ret\",\"ukphone\":\"'lɪbəreɪt\"},{\"name\":\"rid\",\"trans\":[\"使摆脱， 解除…的负担， 从…中清除\"],\"usphone\":\"rɪd\",\"ukphone\":\"rɪd\"},{\"name\":\"variation\",\"trans\":[\"变化， 变动； 变异； 变奏\"],\"usphone\":\",vɛrɪ'eʃən\",\"ukphone\":\"ˌveəri'eɪʃn\"},{\"name\":\"moral\",\"trans\":[\"道德的，有道德的\",\"品行； 道德规范； 寓意\"],\"usphone\":\"'mɔrəl\",\"ukphone\":\"'mɒrəl\"},{\"name\":\"defect\",\"trans\":[\"变节， 叛变\",\"缺点， 缺陷， 欠缺\"],\"usphone\":\"‘dɪfɛkt\",\"ukphone\":\"'diːfekt; dɪ'fekt\"},{\"name\":\"reinforce\",\"trans\":[\"增强， 加强， 增援\"],\"usphone\":\",riɪn'fɔrs\",\"ukphone\":\"ˌriːɪn'fɔːs\"},{\"name\":\"explode\",\"trans\":[\"爆炸； 激增； 发怒\",\"使爆炸\"],\"usphone\":\"ɪk'splod\",\"ukphone\":\"ɪk'spləud\"},{\"name\":\"casual\",\"trans\":[\"偶然的； 非正式的； 临时的， 不定期的； 漠不关心的， 冷淡的\"],\"usphone\":\"'kæʒʊəl\",\"ukphone\":\"'kæʒuəl\"},{\"name\":\"decline\",\"trans\":[\"下降， 减少； 衰退， 衰落； 谢绝， 拒绝\",\"下降，减少；衰退\"],\"usphone\":\"dɪ'klaɪn\",\"ukphone\":\"dɪ'klaɪn\"},{\"name\":\"property\",\"trans\":[\"财产， 所有物； 房产； 物业； 性质， 性能\"],\"usphone\":\"'prɑpɚti\",\"ukphone\":\"'prɒpəti\"},{\"name\":\"succeeding\",\"trans\":[\"以后的， 随后的\"],\"usphone\":\"\",\"ukphone\":\"sək'siːdɪŋ\"},{\"name\":\"brave\",\"trans\":[\"勇敢的； 华丽的\"],\"usphone\":\"brev\",\"ukphone\":\"breɪv\"},{\"name\":\"similar\",\"trans\":[\"相似的， 类似的\"],\"usphone\":\"'sɪməlɚ\",\"ukphone\":\"'sɪmələ\"},{\"name\":\"viewpoint\",\"trans\":[\"观点， 看法， 见解\"],\"usphone\":\"'vjupɔɪnt\",\"ukphone\":\"'vjuːpɔɪnt\"},{\"name\":\"anyhow\",\"trans\":[\"无论如何， 不管怎么说； 随随便便地， 杂乱无章地\"],\"usphone\":\"'ɛnɪ'haʊ\",\"ukphone\":\"'enihau\"},{\"name\":\"specify\",\"trans\":[\"指定； 详细说明\"],\"usphone\":\"'spɛsɪfaɪ\",\"ukphone\":\"'spesɪfaɪ\"},{\"name\":\"whistle\",\"trans\":[\"吹口哨， 鸣笛声； 呼啸而过\",\"口哨；呼啸而过\"],\"usphone\":\"'wɪsl\",\"ukphone\":\"'wɪsl\"},{\"name\":\"handle\",\"trans\":[\"柄，把手\",\"拿， 触； 操作， 处理\"],\"usphone\":\"'hændl\",\"ukphone\":\"'hændl\"},{\"name\":\"forth\",\"trans\":[\"向前； 向外， 往外\"],\"usphone\":\"fɔrθ\",\"ukphone\":\"fɔːθ\"},{\"name\":\"tough\",\"trans\":[\"困难的， 难对付的； 坚强的， 能吃苦耐劳的； 健壮的； 坚硬的， 严格的； 老的， 硬的； 粗暴的， 充满暴力的\"],\"usphone\":\"tʌf\",\"ukphone\":\"tʌf\"},{\"name\":\"crossing\",\"trans\":[\"人行横道， 交叉口； 横渡\"],\"usphone\":\"'krɔsɪŋ\",\"ukphone\":\"'krɒsɪŋ\"},{\"name\":\"script\",\"trans\":[\"剧本， 广播稿； 书写用的字母； 笔迹， 手迹\"],\"usphone\":\"skrɪpt\",\"ukphone\":\"skrɪpt\"},{\"name\":\"submerge\",\"trans\":[\"淹没， 潜入水中\"],\"usphone\":\"səb'mɝdʒ\",\"ukphone\":\"səb'mɜːdʒ\"},{\"name\":\"system\",\"trans\":[\"系统； 制度， 体制； 方法， 做法； 身体\"],\"usphone\":\"'sɪstəm\",\"ukphone\":\"'sɪstəm\"},{\"name\":\"compose\",\"trans\":[\"组成， 构成； 创作， 为…谱曲； 使平静， 使镇静\"],\"usphone\":\"kəm'poz\",\"ukphone\":\"kəm'pəuz\"},{\"name\":\"spot\",\"trans\":[\"点，斑点；地点，处所；少量\",\"认出， 发现； 玷污\"],\"usphone\":\"spɑt\",\"ukphone\":\"spɒt\"},{\"name\":\"roller\",\"trans\":[\"滚筒， 滚轴\"],\"usphone\":\"'rolɚ\",\"ukphone\":\"'rəulə\"},{\"name\":\"partial\",\"trans\":[\"部分的； 不公平的； 偏爱的， 偏袒的\"],\"usphone\":\"'pɑrʃəl\",\"ukphone\":\"'pɑːʃl\"},{\"name\":\"aid\",\"trans\":[\"帮助； 救护； 助手； 辅助手段\"],\"usphone\":\"ed\",\"ukphone\":\"eɪd\"},{\"name\":\"tone\",\"trans\":[\"腔调， 语气； 音调； 风格， 气度； 色调， 明暗\"],\"usphone\":\"ton\",\"ukphone\":\"təun\"},{\"name\":\"confident\",\"trans\":[\"确信的， 肯定的； 自信的\"],\"usphone\":\"'kɑnfɪdənt\",\"ukphone\":\"'kɒnfɪdənt\"},{\"name\":\"retain\",\"trans\":[\"保留， 保持\"],\"usphone\":\"rɪ'ten\",\"ukphone\":\"rɪ'teɪn\"},{\"name\":\"swell\",\"trans\":[\"膨胀，隆起；增长，增强，增多，扩大\",\"波浪起伏； 鼓起， 隆起； 增强\"],\"usphone\":\"swɛl\",\"ukphone\":\"swel\"},{\"name\":\"skilled\",\"trans\":[\"有技能的； 熟练的； 需要技能的\"],\"usphone\":\"skɪld\",\"ukphone\":\"skɪld\"},{\"name\":\"local\",\"trans\":[\"地方性的； 本地的； 局部的； 狭隘的\"],\"usphone\":\"ˈloʊkl\",\"ukphone\":\"'ləukl\"},{\"name\":\"remind\",\"trans\":[\"提醒， 使想起\"],\"usphone\":\"rɪ'maɪnd\",\"ukphone\":\"rɪ'maɪnd\"},{\"name\":\"crude\",\"trans\":[\"简陋的， 天然的； 粗鲁的， 粗俗的\"],\"usphone\":\"krud\",\"ukphone\":\"kruːd\"},{\"name\":\"manufacturer\",\"trans\":[\"制造商； 制造厂\"],\"usphone\":\",mænju'fæktʃərɚ\",\"ukphone\":\"ˌmænju'fæktʃərə\"},{\"name\":\"crew\",\"trans\":[\"全体船员； 一队工作人员\"],\"usphone\":\"krʊ\",\"ukphone\":\"kruː\"},{\"name\":\"valid\",\"trans\":[\"有效的； 正当的； 有根据的， 有理的\"],\"usphone\":\"'vælɪd\",\"ukphone\":\"'vælɪd\"},{\"name\":\"withstand\",\"trans\":[\"抵挡， 反抗\"],\"usphone\":\"wɪð'stænd\",\"ukphone\":\"wɪð'stænd; wɪθ'stænd\"},{\"name\":\"defeat\",\"trans\":[\"战胜， 挫败\"],\"usphone\":\"dɪ'fit\",\"ukphone\":\"dɪ'fiːt\"},{\"name\":\"vacuum\",\"trans\":[\"用吸尘器清扫\",\"真空；真空吸尘器\"],\"usphone\":\"'vækjʊəm\",\"ukphone\":\"'vækjuəm\"},{\"name\":\"encourage\",\"trans\":[\"鼓励， 怂恿； 促进， 助长， 激发\"],\"usphone\":\"ɪn'kɝrɪdʒ\",\"ukphone\":\"ɪn'kʌrɪdʒ\"},{\"name\":\"bubble\",\"trans\":[\"冒泡； 沸腾\",\"泡\"],\"usphone\":\"'bʌbl\",\"ukphone\":\"'bʌbl\"},{\"name\":\"era\",\"trans\":[\"时代， 年代， 纪元\"],\"usphone\":\"'ɪrə\",\"ukphone\":\"'ɪərə\"},{\"name\":\"yield\",\"trans\":[\"出产；让出，放弃；屈服，顺从；倒塌，垮掉\",\"产量\"],\"usphone\":\"jild\",\"ukphone\":\"jiːld\"},{\"name\":\"electronic\",\"trans\":[\"电子的\",\"电子学； 电子设备\"],\"usphone\":\"ɪˌlɛkˈtrɑnɪk\",\"ukphone\":\"ɪˌlek'trɒnɪk\"},{\"name\":\"vacation\",\"trans\":[\"假期， 休假\"],\"usphone\":\"veˈkeʃən\",\"ukphone\":\"və'keɪʃn; veɪ'keɪʃn\"},{\"name\":\"outcome\",\"trans\":[\"结果\"],\"usphone\":\"'aʊt'kʌm\",\"ukphone\":\"'autkʌm\"},{\"name\":\"elegant\",\"trans\":[\"优美的， 文雅的， 讲究的； 简练的， 简洁的\"],\"usphone\":\"'ɛləgənt\",\"ukphone\":\"'elɪgənt\"},{\"name\":\"tender\",\"trans\":[\"嫩的；脆弱的；疼痛的，一触即痛的；温柔的\",\"提出\",\"投标\"],\"usphone\":\"'tɛndɚ\",\"ukphone\":\"'tendə\"},{\"name\":\"curriculum\",\"trans\":[\"课程， 全部课程\"],\"usphone\":\"kə'rɪkjələm\",\"ukphone\":\"kə'rɪkjələm\"},{\"name\":\"meantime\",\"trans\":[\"其间， 同时\"],\"usphone\":\"'min'taɪm\",\"ukphone\":\"'miːntaɪm\"},{\"name\":\"powerful\",\"trans\":[\"强大的， 有力的， 有权的； 强壮的， 强健的\"],\"usphone\":\"'paʊɚfl\",\"ukphone\":\"'pauəfl\"},{\"name\":\"slip\",\"trans\":[\"滑跤，滑落，溜；下降，跌落；悄悄放进\",\"疏漏， 差错\"],\"usphone\":\"slɪp\",\"ukphone\":\"slɪp\"},{\"name\":\"species\",\"trans\":[\"种， 类\"],\"usphone\":\"'spiʃiz\",\"ukphone\":\"'spiːʃiːz\"},{\"name\":\"anchor\",\"trans\":[\"抛锚， 停泊； 把…系住， 使固定； 担任主持人； 固定， 扎根\",\"锚；给人安全感的物\"],\"usphone\":\"'æŋkɚ\",\"ukphone\":\"'æŋkə\"},{\"name\":\"preceding\",\"trans\":[\"在前的， 在先的， 前面的\"],\"usphone\":\"'prisidɪŋ\",\"ukphone\":\"prɪ'siːdɪŋ\"},{\"name\":\"cite\",\"trans\":[\"引用， 引证； 传唤， 传讯； 表彰， 嘉奖\"],\"usphone\":\"saɪt\",\"ukphone\":\"saɪt\"},{\"name\":\"logic\",\"trans\":[\"逻辑， 推理， 逻辑学\"],\"usphone\":\"'lɑdʒɪk\",\"ukphone\":\"'lɒdʒɪk\"},{\"name\":\"acquaintance\",\"trans\":[\"认识， 了解； 熟人\"],\"usphone\":\"ə'kwentəns\",\"ukphone\":\"ə'kweɪntəns\"},{\"name\":\"royal\",\"trans\":[\"王室的， 皇家的\"],\"usphone\":\"'rɔɪəl\",\"ukphone\":\"'rɔɪəl\"},{\"name\":\"internship\",\"trans\":[\"实习生身份； 实习医师期\"],\"usphone\":\"'ɪntɝnʃɪp\",\"ukphone\":\"'ɪntɜːnʃɪp\"},{\"name\":\"shed\",\"trans\":[\"脱落，脱去；流出，流下；发出，散发\",\"棚， 小屋， 货棚\"],\"usphone\":\"ʃɛd\",\"ukphone\":\"ʃed\"},{\"name\":\"eyesight\",\"trans\":[\"视力， 目力\"],\"usphone\":\"'aɪsaɪt\",\"ukphone\":\"'aɪsaɪt\"},{\"name\":\"precision\",\"trans\":[\"精确， 精密\"],\"usphone\":\"prɪ'sɪʒn\",\"ukphone\":\"prɪ'sɪʒn\"},{\"name\":\"glove\",\"trans\":[\"手套\"],\"usphone\":\"ɡlʌv\",\"ukphone\":\"glʌv\"},{\"name\":\"screen\",\"trans\":[\"屏幕，银幕；屏风；帘，纱窗\",\"掩蔽， 遮蔽； 放映， 播放； 审查， 甄别\"],\"usphone\":\"skrin\",\"ukphone\":\"skriːn\"},{\"name\":\"naked\",\"trans\":[\"裸体的； 无遮蔽的\"],\"usphone\":\"'nekɪd\",\"ukphone\":\"'neɪkɪd\"},{\"name\":\"trial\",\"trans\":[\"试， 试验； 审判； 讨厌的人\"],\"usphone\":\"'traɪəl\",\"ukphone\":\"'traɪəl\"},{\"name\":\"correspond\",\"trans\":[\"相符合， 相当； 通信\"],\"usphone\":\",kɔrə'spɑnd\",\"ukphone\":\"ˌkɒrə'spɒnd\"},{\"name\":\"spur\",\"trans\":[\"刺激物\",\"刺激， 鞭策， 激励\"],\"usphone\":\"spɝ\",\"ukphone\":\"spɜː\"},{\"name\":\"perception\",\"trans\":[\"感知， 觉察； 认识， 观念， 看法\"],\"usphone\":\"pɚ'sɛpʃən\",\"ukphone\":\"pə'sepʃn\"},{\"name\":\"rear\",\"trans\":[\"后部的，背后的\",\"后部，背面；后方\",\"抚养， 饲养； 种植\"],\"usphone\":\"rɪr\",\"ukphone\":\"rɪə\"},{\"name\":\"amongst\",\"trans\":[\"在…之中\"],\"usphone\":\"ə'mʌŋst\",\"ukphone\":\"ə'mʌŋst\"},{\"name\":\"undertake\",\"trans\":[\"从事； 承担； 同意； 保证\"],\"usphone\":\",ʌndɚ'tek\",\"ukphone\":\"ˌʌndə'teɪk\"},{\"name\":\"insect\",\"trans\":[\"昆虫， 虫\"],\"usphone\":\"'ɪnsɛkt\",\"ukphone\":\"'ɪnsekt\"},{\"name\":\"bureau\",\"trans\":[\"局， 司， 处， 社， 所\"],\"usphone\":\"'bjʊro\",\"ukphone\":\"'bjuərəu\"},{\"name\":\"moist\",\"trans\":[\"湿润的， 潮湿的\"],\"usphone\":\"mɔɪst\",\"ukphone\":\"mɔɪst\"},{\"name\":\"cable\",\"trans\":[\"缆， 索， 电缆； 电报\"],\"usphone\":\"'kebl\",\"ukphone\":\"'keɪbl\"},{\"name\":\"qualify\",\"trans\":[\"胜任， 具有资格， 合格； 限定\"],\"usphone\":\"ˈkwɑləˌfaɪ\",\"ukphone\":\"'kwɒlɪfaɪ\"},{\"name\":\"intense\",\"trans\":[\"强烈的； 紧张的； 认真的； 热情的\"],\"usphone\":\"ɪn'tɛns\",\"ukphone\":\"ɪn'tens\"},{\"name\":\"pregnant\",\"trans\":[\"怀孕的， 妊娠的\"],\"usphone\":\"'prɛɡnənt\",\"ukphone\":\"'pregnənt\"},{\"name\":\"border\",\"trans\":[\"边，边缘，边界\",\"给…加上边， 围； 邻接； 与…接壤\"],\"usphone\":\"'bɔrdɚ\",\"ukphone\":\"'bɔːdə\"},{\"name\":\"estate\",\"trans\":[\"土地， 住宅区， 地产； 财产， 遗产； 庄园， 种植园\"],\"usphone\":\"ɪ'stet\",\"ukphone\":\"ɪ'steɪt\"},{\"name\":\"applicable\",\"trans\":[\"能应用的； 合适的， 适当的\"],\"usphone\":\"'æplɪkəbl\",\"ukphone\":\"'æplɪkəbl\"},{\"name\":\"admission\",\"trans\":[\"允许进入； 承认； 入场费， 入场券\"],\"usphone\":\"əd'mɪʃən\",\"ukphone\":\"əd'mɪʃn\"},{\"name\":\"brass\",\"trans\":[\"黄铜， 黄铜器， 铜管乐器\"],\"usphone\":\"bræs\",\"ukphone\":\"brɑːs\"},{\"name\":\"expense\",\"trans\":[\"花费， 消费； 费用， 开支； 业务费用\"],\"usphone\":\"ɪk'spɛns\",\"ukphone\":\"ɪk'spens\"},{\"name\":\"rumour\",\"trans\":[\"谣传， 谣言\"],\"usphone\":\"'ru:mə\",\"ukphone\":\"'ruːmə\"},{\"name\":\"contemporary\",\"trans\":[\"当代的；同时代的\",\"同代人， 当代人\"],\"usphone\":\"kən'tɛmpərɛri\",\"ukphone\":\"kən'temprəri\"},{\"name\":\"gear\",\"trans\":[\"齿轮，传动装置，排挡；用具，设备；衣服\",\"使适应， 使适合\"],\"usphone\":\"ɡɪr\",\"ukphone\":\"gɪə\"},{\"name\":\"boundary\",\"trans\":[\"分界线， 边界\"],\"usphone\":\"'baʊndri\",\"ukphone\":\"'baundri\"},{\"name\":\"rob\",\"trans\":[\"抢劫， 盗窃\"],\"usphone\":\"rɑb\",\"ukphone\":\"rɒb\"},{\"name\":\"elderly\",\"trans\":[\"较老的，年长的\",\"到了晚年的人， 老年人\"],\"usphone\":\"'ɛldɚli\",\"ukphone\":\"'eldəli\"},{\"name\":\"financial\",\"trans\":[\"财政的， 金融的\"],\"usphone\":\"faɪˈnænʃəl;fəˈnæ-\",\"ukphone\":\"faɪ'nænʃl; fə'nænʃl\"},{\"name\":\"rod\",\"trans\":[\"杆， 棒\"],\"usphone\":\"rɑd\",\"ukphone\":\"rɒd\"},{\"name\":\"dumb\",\"trans\":[\"哑的； 无言的； 说不出话的\"],\"usphone\":\"dʌm\",\"ukphone\":\"dʌm\"},{\"name\":\"respective\",\"trans\":[\"各自的， 各个的， 分别的\"],\"usphone\":\"rɪ'spɛktɪv\",\"ukphone\":\"rɪ'spektɪv\"},{\"name\":\"media\",\"trans\":[\"新闻媒介， 传播媒介\"],\"usphone\":\"\",\"ukphone\":\"'miːdiə\"},{\"name\":\"favour\",\"trans\":[\"好感；赞同；恩惠\",\"赞同； 喜爱， 偏爱； 有利于\"],\"usphone\":\"ˈfevɚ\",\"ukphone\":\"'feɪvə\"},{\"name\":\"pollute\",\"trans\":[\"弄脏， 污染； 腐蚀\"],\"usphone\":\"pə'lut\",\"ukphone\":\"pə'luːt\"},{\"name\":\"harden\",\"trans\":[\"变硬； 变得坚强\"],\"usphone\":\"'hɑrdn\",\"ukphone\":\"'hɑːdn\"},{\"name\":\"eve\",\"trans\":[\"前夜， 前夕， 前一刻\"],\"usphone\":\"\",\"ukphone\":\"iːv\"},{\"name\":\"pronoun\",\"trans\":[\"代词\"],\"usphone\":\"'pronaʊn\",\"ukphone\":\"'prəunaun\"},{\"name\":\"define\",\"trans\":[\"给…下定义， 限定\"],\"usphone\":\"dɪ'faɪn\",\"ukphone\":\"dɪ'faɪn\"},{\"name\":\"dictate\",\"trans\":[\"口授； 命令， 规定， 要求\",\"命令， 指挥\"],\"usphone\":\"'dɪktet\",\"ukphone\":\"dɪk'teɪt\"},{\"name\":\"construction\",\"trans\":[\"建造； 建筑物； 结构\"],\"usphone\":\"kən'strʌkʃən\",\"ukphone\":\"kən'strʌkʃn\"},{\"name\":\"predict\",\"trans\":[\"预言， 预告， 预测\"],\"usphone\":\"prɪ'dɪkt\",\"ukphone\":\"prɪ'dɪkt\"},{\"name\":\"dump\",\"trans\":[\"倾卸，倾倒；倾销\",\"垃圾场\"],\"usphone\":\"dʌmp\",\"ukphone\":\"dʌmp\"},{\"name\":\"render\",\"trans\":[\"使得， 致使； 给予， 提供； 翻译\"],\"usphone\":\"'rɛndɚ\",\"ukphone\":\"'rendə\"},{\"name\":\"universal\",\"trans\":[\"普遍的； 通用的； 全世界的\"],\"usphone\":\"'jʊnə'vɝsl\",\"ukphone\":\"ˌjuːnɪ'vɜːsl\"},{\"name\":\"chemist\",\"trans\":[\"化学家， 药剂师\"],\"usphone\":\"'kɛmɪst\",\"ukphone\":\"'kemɪst\"},{\"name\":\"frontier\",\"trans\":[\"边境， 边疆； 新领域\"],\"usphone\":\"frʌn'tɪr\",\"ukphone\":\"'frʌntɪə\"},{\"name\":\"abroad\",\"trans\":[\"到国外； 在传播， 在流传\"],\"usphone\":\"ə'brɔd\",\"ukphone\":\"ə'brɔːd\"},{\"name\":\"radical\",\"trans\":[\"根本的，基本的；激进的，激进派的\",\"激进分子\"],\"usphone\":\"'rædɪkl\",\"ukphone\":\"'rædɪkl\"},{\"name\":\"relieve\",\"trans\":[\"使轻松， 使宽慰， 缓解； 使得到调剂； 接替\"],\"usphone\":\"rɪ'liv\",\"ukphone\":\"rɪ'liːv\"},{\"name\":\"drawer\",\"trans\":[\"抽屉\"],\"usphone\":\"drɔr\",\"ukphone\":\"drɔː\"},{\"name\":\"requirement\",\"trans\":[\"要求； 必要条件； 需要， 需要的东西\"],\"usphone\":\"rɪ'kwaɪɚmənt\",\"ukphone\":\"rɪ'kwaɪəmənt\"},{\"name\":\"transport\",\"trans\":[\"运输\",\"运输， 运输工具\"],\"usphone\":\"'trænspɔrt\",\"ukphone\":\"træn'spɔːt; trɑːn-\"},{\"name\":\"employment\",\"trans\":[\"工作； 雇用； 使用\"],\"usphone\":\"ɪm'plɔɪmənt\",\"ukphone\":\"ɪm'plɔɪmənt\"},{\"name\":\"specific\",\"trans\":[\"特有的；具体的，明确的\",\"详情， 细节\"],\"usphone\":\"spɪ'sɪfɪk\",\"ukphone\":\"spə'sɪfɪk\"},{\"name\":\"application\",\"trans\":[\"申请， 申请书； 施用， 涂抹； 应用， 实施； 实用性\"],\"usphone\":\"ˌæpləˈkeʃən\",\"ukphone\":\"ˌæplɪ'keɪʃn\"},{\"name\":\"engage\",\"trans\":[\"使从事； 聘用； 吸引； 占用； 使订婚\"],\"usphone\":\"ɪn'ɡedʒ\",\"ukphone\":\"ɪn'geɪdʒ\"},{\"name\":\"acre\",\"trans\":[\"英亩\"],\"usphone\":\"'ekɚ\",\"ukphone\":\"'eɪkə\"},{\"name\":\"whisper\",\"trans\":[\"低声地讲\",\"低语， 耳语\"],\"usphone\":\"'wɪspɚ\",\"ukphone\":\"'wɪspə\"},{\"name\":\"appetite\",\"trans\":[\"食欲， 胃口； 欲望\"],\"usphone\":\"'æpəˌtaɪt\",\"ukphone\":\"'æpɪtaɪt\"},{\"name\":\"semester\",\"trans\":[\"学期\"],\"usphone\":\"səˈmɛstɚ\",\"ukphone\":\"sɪ'mestə\"},{\"name\":\"strategy\",\"trans\":[\"战略， 策略\"],\"usphone\":\"'strætədʒi\",\"ukphone\":\"'strætədʒi\"},{\"name\":\"dull\",\"trans\":[\"乏味的， 单调的； 晦暗的， 阴沉的； 低沉的； 笨的； 钝的\"],\"usphone\":\"dʌl\",\"ukphone\":\"dʌl\"},{\"name\":\"collapse\",\"trans\":[\"倒坍；塌下\",\"突然失败；突然瓦解\"],\"usphone\":\"kə'læps\",\"ukphone\":\"kə'læps\"},{\"name\":\"clumsy\",\"trans\":[\"笨拙的， 愚笨的； 粗陋的； 不得体的\"],\"usphone\":\"'klʌmzi\",\"ukphone\":\"'klʌmzi\"},{\"name\":\"territory\",\"trans\":[\"领土， 版图； 领域\"],\"usphone\":\"'tɛrətɔri\",\"ukphone\":\"'terətri\"},{\"name\":\"concession\",\"trans\":[\"让步， 妥协； 特许， 特许权； 承认， 认可\"],\"usphone\":\"kən'sɛʃən\",\"ukphone\":\"kən'seʃn\"},{\"name\":\"accurate\",\"trans\":[\"准确的， 正确无误的\"],\"usphone\":\"'ækjərət\",\"ukphone\":\"'ækjərət\"},{\"name\":\"maintain\",\"trans\":[\"维持； 维修， 保养； 主张； 赡养\"],\"usphone\":\"men'ten\",\"ukphone\":\"meɪn'teɪn\"},{\"name\":\"shift\",\"trans\":[\"移动，转移；改变，转变\",\"转换， 转变； 轮班\"],\"usphone\":\"ʃɪft\",\"ukphone\":\"ʃɪft\"},{\"name\":\"echo\",\"trans\":[\"重复， 模仿； 发出回声\",\"回声；反响，共鸣\"],\"usphone\":\"'ɛko\",\"ukphone\":\"'ekəu\"},{\"name\":\"erect\",\"trans\":[\"竖直的， 垂直的\",\"建造；使竖立\"],\"usphone\":\"ɪ'rɛkt\",\"ukphone\":\"ɪ'rekt\"},{\"name\":\"bargain\",\"trans\":[\"讨价还价\",\"特价商品；协议，交易\"],\"usphone\":\"ˈbɑrɡɪn\",\"ukphone\":\"'bɑːgən\"},{\"name\":\"professional\",\"trans\":[\"职业的，专业的，专门的\",\"自由职业者， 专业人员\"],\"usphone\":\"prə'fɛʃənl\",\"ukphone\":\"prə'feʃənl\"},{\"name\":\"elective\",\"trans\":[\"选举的，有选举权的；可任意选择的\",\"选修课程\"],\"usphone\":\"ɪ'lɛktɪv\",\"ukphone\":\"ɪ'lektɪv\"},{\"name\":\"accusation\",\"trans\":[\"谴责； 【律】 指控\"],\"usphone\":\",ækju'zeʃən\",\"ukphone\":\"ˌækju'zeɪʃn\"},{\"name\":\"protein\",\"trans\":[\"蛋白质\"],\"usphone\":\"'protin\",\"ukphone\":\"'prəutiːn\"},{\"name\":\"annual\",\"trans\":[\"每年的，一年一次的\",\"年报， 年鉴； 一年生的植物\"],\"usphone\":\"'ænjuəl\",\"ukphone\":\"'ænjuəl\"},{\"name\":\"exclusive\",\"trans\":[\"奢华的，高级的；独有的，独享的；排斥的，排他的；不包括…的，不把…计算在内的\",\"独家新闻\"],\"usphone\":\"ɪk'sklusɪv\",\"ukphone\":\"ɪk'skluːsɪv\"},{\"name\":\"jar\",\"trans\":[\"感到不快； 震动， 摇动\",\"罐子，坛子，广口瓶\"],\"usphone\":\"dʒɑr\",\"ukphone\":\"dʒɑː\"},{\"name\":\"poverty\",\"trans\":[\"贫穷， 贫困\"],\"usphone\":\"'pɑvɚti\",\"ukphone\":\"'pɒvəti\"},{\"name\":\"resort\",\"trans\":[\"求助，凭借，诉诸\",\"求助， 凭借， 诉诸； 求助的对象， 采用的手段； 常去之地， 胜地\"],\"usphone\":\"rɪ'zɔrt\",\"ukphone\":\"rɪ'zɔːt\"},{\"name\":\"goodness\",\"trans\":[\"天哪\",\"善良， 美德， 好意\"],\"usphone\":\"ˈgʊdnɪs\",\"ukphone\":\"'gudnəs\"},{\"name\":\"lightning\",\"trans\":[\"闪电， 电光\"],\"usphone\":\"'laɪtnɪŋ\",\"ukphone\":\"'laɪtnɪŋ\"},{\"name\":\"jaw\",\"trans\":[\"颌， 颚\"],\"usphone\":\"dʒɔ\",\"ukphone\":\"dʒɔː\"},{\"name\":\"margin\",\"trans\":[\"页边空白； 差数， 差额； 余地； 边缘\"],\"usphone\":\"'mɑrdʒən\",\"ukphone\":\"'mɑːdʒɪn\"},{\"name\":\"remain\",\"trans\":[\"剩下，余留；保持；仍然是\",\"残余； 残骸； 遗迹\"],\"usphone\":\"rɪ'men\",\"ukphone\":\"rɪ'meɪn\"},{\"name\":\"amaze\",\"trans\":[\"使惊奇， 使惊愕\"],\"usphone\":\"ə'mez\",\"ukphone\":\"ə'meɪz\"},{\"name\":\"refine\",\"trans\":[\"精炼， 精制， 提纯； 使优美， 使完善\"],\"usphone\":\"rɪ'faɪn\",\"ukphone\":\"rɪ'faɪn\"},{\"name\":\"mount\",\"trans\":[\"登上；发起；安放；增加，加剧\",\"山， 峰\"],\"usphone\":\"maʊnt\",\"ukphone\":\"maunt\"},{\"name\":\"demand\",\"trans\":[\"要求， 需要； 查问\"],\"usphone\":\"dɪ'mænd\",\"ukphone\":\"dɪ'mɑːnd\"},{\"name\":\"mystery\",\"trans\":[\"神秘； 神秘的人\"],\"usphone\":\"ˈmɪstri\",\"ukphone\":\"'mɪstri\"},{\"name\":\"atomic\",\"trans\":[\"原子的， 原子能的， 原子武器的\"],\"usphone\":\"ə'tɑmɪk\",\"ukphone\":\"ə'tɒmɪk\"},{\"name\":\"deposit\",\"trans\":[\"使沉淀；存放，储蓄\",\"定金， 押金； 存款； 矿藏\"],\"usphone\":\"dɪ'pɑzɪt\",\"ukphone\":\"dɪ'pɒzɪt\"},{\"name\":\"centimetre\",\"trans\":[\"公分， 厘米\"],\"usphone\":\"'sɛntɪmitɚ\",\"ukphone\":\"'sentɪmiːtə\"},{\"name\":\"telescope\",\"trans\":[\"望远镜\"],\"usphone\":\"'tɛləˌskop\",\"ukphone\":\"'telɪskəup\"},{\"name\":\"rotten\",\"trans\":[\"腐烂的； 令人不愉快的； 糟糕的\"],\"usphone\":\"'rɑtn\",\"ukphone\":\"'rɒtn\"},{\"name\":\"skillful\",\"trans\":[\"灵巧的， 娴熟的\"],\"usphone\":\"'skɪlfəl\",\"ukphone\":\"'skɪlfl\"},{\"name\":\"flash\",\"trans\":[\"闪， 闪烁； 飞驰\",\"闪光；闪光灯\"],\"usphone\":\"flæʃ\",\"ukphone\":\"flæʃ\"},{\"name\":\"accuse\",\"trans\":[\"指责， 归咎于\"],\"usphone\":\"ə'kjuz\",\"ukphone\":\"ə'kjuːz\"},{\"name\":\"housing\",\"trans\":[\"房屋， 住宅； 住房建筑， 住房供给； 外壳， 外罩\"],\"usphone\":\"'haʊzɪŋ\",\"ukphone\":\"'hauzɪŋ\"},{\"name\":\"devil\",\"trans\":[\"魔鬼， 恶魔； 家伙， 人\"],\"usphone\":\"'dɛvl\",\"ukphone\":\"'devl\"},{\"name\":\"guarantee\",\"trans\":[\"保证；保证书；担保物\",\"保证， 担保\"],\"usphone\":\",ɡærən'ti\",\"ukphone\":\"ˌgærən'tiː\"},{\"name\":\"recommend\",\"trans\":[\"推荐， 举荐； 劝告， 建议； 使成为可取； 使受欢迎\"],\"usphone\":\"'rɛkə'mɛnd\",\"ukphone\":\"ˌrekə'mend\"},{\"name\":\"acquire\",\"trans\":[\"取得， 获得， 学到\"],\"usphone\":\"ə'kwaɪr\",\"ukphone\":\"ə'kwaɪə\"},{\"name\":\"fertile\",\"trans\":[\"肥沃的； 多产的； 丰富的\"],\"usphone\":\"ˈfɝtəl; (canadian) ˈfɝˌtaɪl\",\"ukphone\":\"'fɜːtaɪl\"},{\"name\":\"automobile\",\"trans\":[\"汽车， 机动车\"],\"usphone\":\",ɔtəmə'bil\",\"ukphone\":\"'ɔːtəməbiːl\"},{\"name\":\"notion\",\"trans\":[\"概念， 观念； 意图， 想法， 念头\"],\"usphone\":\"'noʃən\",\"ukphone\":\"'nəuʃn\"},{\"name\":\"diversity\",\"trans\":[\"多样性； 差异； 不同点\"],\"usphone\":\"dɪˈvəsɪti\",\"ukphone\":\"daɪ'vɜːsəti\"},{\"name\":\"helicopter\",\"trans\":[\"直升机\"],\"usphone\":\"'hɛlɪkɑptɚ\",\"ukphone\":\"'helɪkɒptə\"},{\"name\":\"tractor\",\"trans\":[\"拖拉机， 牵引车\"],\"usphone\":\"'træktɚ\",\"ukphone\":\"'træktə\"},{\"name\":\"patience\",\"trans\":[\"忍耐， 耐心\"],\"usphone\":\"'peʃns\",\"ukphone\":\"'peɪʃns\"},{\"name\":\"grace\",\"trans\":[\"优美，优雅；风度，魅力；宽限，缓期\",\"使优美\"],\"usphone\":\"ɡres\",\"ukphone\":\"greɪs\"},{\"name\":\"advertisement\",\"trans\":[\"广告， 公告， 登广告； 广告活动， 宣传\"],\"usphone\":\",ædvɚ'taɪzmənt\",\"ukphone\":\"əd'vɜːtɪsmənt\"},{\"name\":\"ripe\",\"trans\":[\"熟的； 时机成熟的\"],\"usphone\":\"raɪp\",\"ukphone\":\"raɪp\"},{\"name\":\"attribute\",\"trans\":[\"把…归因于\",\"属性\"],\"usphone\":\"ə'trɪbjut\",\"ukphone\":\"ə'trɪbjuːt\"},{\"name\":\"mechanism\",\"trans\":[\"机械装置； 机制， 机理； 办法， 途径\"],\"usphone\":\"'mɛkənɪzəm\",\"ukphone\":\"'mekənɪzəm\"},{\"name\":\"detection\",\"trans\":[\"察觉， 发觉； 侦查， 探测\"],\"usphone\":\"dɪ'tɛkʃən\",\"ukphone\":\"dɪ'tekʃn\"},{\"name\":\"triumph\",\"trans\":[\"成功\",\"凯旋，胜利\"],\"usphone\":\"ˈtraɪəmf\",\"ukphone\":\"'traɪʌmf\"},{\"name\":\"vice\",\"trans\":[\"罪恶； 恶习， 缺点； 虎钳\"],\"usphone\":\"vaɪs\",\"ukphone\":\"vaɪs\"},{\"name\":\"horror\",\"trans\":[\"恐怖； 憎恶； 令人恐怖的事物\"],\"usphone\":\"'hɔrɚ\",\"ukphone\":\"'hɒrə\"},{\"name\":\"poison\",\"trans\":[\"毒，毒药\",\"毒害\"],\"usphone\":\"'pɔɪzn\",\"ukphone\":\"'pɔɪzn\"},{\"name\":\"thoughtful\",\"trans\":[\"沉思的； 体贴的\"],\"usphone\":\"'θɔtfl\",\"ukphone\":\"'θɔːtfl\"},{\"name\":\"gram\",\"trans\":[\"克\"],\"usphone\":\"ɡræm\",\"ukphone\":\"græm\"},{\"name\":\"empower\",\"trans\":[\"授权于； 使能够\"],\"usphone\":\"ɪm'paʊɚ\",\"ukphone\":\"ɪm'pauə\"},{\"name\":\"riot\",\"trans\":[\"聚众闹事\",\"暴乱，骚乱；极度丰富\",\"把浪费在放荡的生活上\"],\"usphone\":\"'raɪət\",\"ukphone\":\"'raɪət\"},{\"name\":\"arouse\",\"trans\":[\"引起； 唤起， 唤醒\"],\"usphone\":\"ə'raʊz\",\"ukphone\":\"ə'rauz\"},{\"name\":\"nest\",\"trans\":[\"筑巢\",\"巢，窝，穴\"],\"usphone\":\"nɛst\",\"ukphone\":\"nest\"},{\"name\":\"tour\",\"trans\":[\"旅行， 游历\"],\"usphone\":\"tʊr\",\"ukphone\":\"tuə\"},{\"name\":\"calm\",\"trans\":[\"静的，平静的\",\"平静， 镇静\"],\"usphone\":\"kɑm\",\"ukphone\":\"kɑːm\"},{\"name\":\"boring\",\"trans\":[\"令人厌烦的， 乏味的， 无聊的\"],\"usphone\":\"'bɔrɪŋ\",\"ukphone\":\"'bɔːrɪŋ\"},{\"name\":\"classic\",\"trans\":[\"最优秀的，典型的，标准的；传统式样的，典雅的\",\"文学名著， 经典作品， 杰作； 优秀的典范； 古典文学， 古典语文研究\"],\"usphone\":\"'klæsɪk\",\"ukphone\":\"'klæsɪk\"},{\"name\":\"ownership\",\"trans\":[\"所有， 所有制\"],\"usphone\":\"'onɚʃɪp\",\"ukphone\":\"'əunəʃɪp\"},{\"name\":\"metric\",\"trans\":[\"公制的， 米制的\"],\"usphone\":\"'mɛtrɪk\",\"ukphone\":\"'metrɪk\"},{\"name\":\"absolute\",\"trans\":[\"十足的， 地道的； 绝对的， 完全的； 不受任何限制的\"],\"usphone\":\"'æbsəlut\",\"ukphone\":\"'æbsəluːt\"},{\"name\":\"ash\",\"trans\":[\"灰， 灰末； 骨灰\"],\"usphone\":\"æʃ\",\"ukphone\":\"æʃ\"},{\"name\":\"describe\",\"trans\":[\"形容； 描写； 画出\"],\"usphone\":\"dɪ'skraɪb\",\"ukphone\":\"dɪ'skraɪb\"},{\"name\":\"suck\",\"trans\":[\"吸， 吮， 啜； 吸收\"],\"usphone\":\"sʌk\",\"ukphone\":\"sʌk\"},{\"name\":\"grab\",\"trans\":[\"抓取，攫取；赶紧做；抓住；抓，夺\",\"抓， 夺\"],\"usphone\":\"ɡræb\",\"ukphone\":\"græb\"},{\"name\":\"rub\",\"trans\":[\"擦， 摩擦\"],\"usphone\":\"rʌb\",\"ukphone\":\"rʌb\"},{\"name\":\"presently\",\"trans\":[\"不久， 一会儿； 现在， 目前\"],\"usphone\":\"'prɛzntli\",\"ukphone\":\"'prezntli\"},{\"name\":\"wealthy\",\"trans\":[\"富有的， 富裕的\"],\"usphone\":\"'wɛlθi\",\"ukphone\":\"'welθi\"},{\"name\":\"rug\",\"trans\":[\"地毯\"],\"usphone\":\"rʌɡ\",\"ukphone\":\"rʌg\"},{\"name\":\"jazz\",\"trans\":[\"爵士音乐， 爵士舞曲\"],\"usphone\":\"dʒæz\",\"ukphone\":\"dʒæz\"},{\"name\":\"dusk\",\"trans\":[\"薄暮， 黄昏； 幽暗\"],\"usphone\":\"dʌsk\",\"ukphone\":\"dʌsk\"},{\"name\":\"administration\",\"trans\":[\"管理； 管理部门， 行政机关； 实行， 执行\"],\"usphone\":\"əd,mɪnɪ'streʃən\",\"ukphone\":\"ədˌmɪnɪ'streɪʃn\"},{\"name\":\"occasional\",\"trans\":[\"偶尔的， 间或发生的\"],\"usphone\":\"ə'keʒənl\",\"ukphone\":\"ə'keɪʒənl\"},{\"name\":\"boast\",\"trans\":[\"自夸；自豪\",\"自夸，吹嘘；以拥有…而自豪\",\"自吹自擂， 自夸的话\"],\"usphone\":\"bost\",\"ukphone\":\"bəust\"},{\"name\":\"operator\",\"trans\":[\"操作人员； 话务员， 报务员\"],\"usphone\":\"'ɑpəretɚ\",\"ukphone\":\"'ɒpəreɪtə\"},{\"name\":\"debate\",\"trans\":[\"争论， 辩论\"],\"usphone\":\"dɪ'bet\",\"ukphone\":\"dɪ'beɪt\"},{\"name\":\"spacecraft\",\"trans\":[\"航天器， 宇宙飞船\"],\"usphone\":\"'speskræft\",\"ukphone\":\"'speɪskrɑːft\"},{\"name\":\"furniture\",\"trans\":[\"家具\"],\"usphone\":\"'fɝnɪtʃɚ\",\"ukphone\":\"'fɜːnɪtʃə\"},{\"name\":\"segment\",\"trans\":[\"部分， 片段； 瓣\"],\"usphone\":\"'sɛɡmənt\",\"ukphone\":\"'segmənt\"},{\"name\":\"stripe\",\"trans\":[\"条纹\"],\"usphone\":\"straɪp\",\"ukphone\":\"straɪp\"},{\"name\":\"jet\",\"trans\":[\"乘喷气式飞机\",\"喷气式飞机；喷嘴；喷射\"],\"usphone\":\"dʒɛt\",\"ukphone\":\"dʒet\"},{\"name\":\"helpful\",\"trans\":[\"给予帮助的； 有用的\"],\"usphone\":\"'hɛlpfl\",\"ukphone\":\"'helpful\"},{\"name\":\"statistic\",\"trans\":[\"统计数值， 统计资料； 统计学\"],\"usphone\":\"stə'tɪstɪk\",\"ukphone\":\"stə'tɪstɪk\"},{\"name\":\"attractive\",\"trans\":[\"有吸引力的， 引起注意的\"],\"usphone\":\"ə'træktɪv\",\"ukphone\":\"ə'træktɪv\"},{\"name\":\"superb\",\"trans\":[\"极好的； 高质量的\"],\"usphone\":\"/suːˈpɜːrb/\",\"ukphone\":\"sjʊː'pɜːb; sʊː'pɜːb\"},{\"name\":\"mold\",\"trans\":[\"霉，霉菌；模型，铸模；性格\",\"用模子制作， 塑造； 使形成， 影响…的形成\"],\"usphone\":\"mold\",\"ukphone\":\"məuld\"},{\"name\":\"engineering\",\"trans\":[\"工程， 工程学\"],\"usphone\":\"'ɛndʒə'nɪrɪŋ\",\"ukphone\":\"ˌendʒɪ'nɪərɪŋ\"},{\"name\":\"significant\",\"trans\":[\"相当数量的； 重要的， 意义重大的， 意味深长的\"],\"usphone\":\"sɪɡ'nɪfɪkənt\",\"ukphone\":\"sɪg'nɪfɪkənt\"},{\"name\":\"bold\",\"trans\":[\"勇敢的； 鲁莽的； 粗体的， 黑体的； 醒目的\"],\"usphone\":\"bold\",\"ukphone\":\"bəuld\"},{\"name\":\"bleed\",\"trans\":[\"出血， 流血； 泌脂\",\"勒索…的钱\"],\"usphone\":\"blid\",\"ukphone\":\"bliːd\"},{\"name\":\"delicious\",\"trans\":[\"美味的； 芬芳的， 怡人的； 有趣的\"],\"usphone\":\"dɪ'lɪʃəs\",\"ukphone\":\"dɪ'lɪʃəs\"},{\"name\":\"catalogue\",\"trans\":[\"目录\",\"为…编目录，把…列入目录中\"],\"usphone\":\"'kætəlɔɡ\",\"ukphone\":\"'kætəlɒg\"},{\"name\":\"whatever\",\"trans\":[\"[用于否定句中以加强语气]任何； 无论什么\"],\"usphone\":\"wət'ɛvɚ\",\"ukphone\":\" wɒt'evə\"},{\"name\":\"decrease\",\"trans\":[\"减少\",\"减少\"],\"usphone\":\"dɪ'kris\",\"ukphone\":\"dɪ'kriːs\"},{\"name\":\"volunteer\",\"trans\":[\"自愿提供； 自愿， 志愿\",\"志愿者；志愿兵\"],\"usphone\":\",vɑlən'tɪr\",\"ukphone\":\"ˌvɒlən'tɪə\"},{\"name\":\"museum\",\"trans\":[\"博物馆\"],\"usphone\":\"mjuˈzɪəm\",\"ukphone\":\"mju'ziːəm\"},{\"name\":\"ignorance\",\"trans\":[\"无知， 愚昧\"],\"usphone\":\"'ɪɡnərəns\",\"ukphone\":\"'ɪgnərəns\"},{\"name\":\"senate\",\"trans\":[\"参议院， 上院\"],\"usphone\":\"'sɛnət\",\"ukphone\":\"'senət\"},{\"name\":\"trumpet\",\"trans\":[\"喇叭，小号\",\"大声宣告， 鼓吹\"],\"usphone\":\"'trʌmpɪt\",\"ukphone\":\"'trʌmpɪt\"},{\"name\":\"bolt\",\"trans\":[\"螺栓，插销\",\"闩门\"],\"usphone\":\"bolt\",\"ukphone\":\"bəult\"},{\"name\":\"string\",\"trans\":[\"连成一串； 排成一行前进\",\"线，细绳；一串，一行\",\"缚，扎，挂；串起，穿；使排成一列；伸展，拉直\"],\"usphone\":\"strɪŋ\",\"ukphone\":\"strɪŋ\"},{\"name\":\"import\",\"trans\":[\"输入， 进口\",\"输入， 进口； 进口商品； 意义， 重要性\"],\"usphone\":\"'ɪmpɔt\",\"ukphone\":\"ɪm'pɔːt; 'ɪm-\"},{\"name\":\"occupy\",\"trans\":[\"占领， 占， 占有\"],\"usphone\":\"'ɑkjupaɪ\",\"ukphone\":\"'ɒkjupaɪ\"},{\"name\":\"submit\",\"trans\":[\"屈从， 听从， 服从\",\"呈送，提交；主张，建议；使服从，使降服\"],\"usphone\":\"səb'mɪt\",\"ukphone\":\"səb'mɪt\"},{\"name\":\"mood\",\"trans\":[\"心情， 情绪； 语气\"],\"usphone\":\"mud\",\"ukphone\":\"muːd\"},{\"name\":\"boom\",\"trans\":[\"激增， 繁荣， 迅速发展； 发出隆隆声\",\"激增，繁荣，迅速发展；隆隆声，嗡嗡声\"],\"usphone\":\"buːm\",\"ukphone\":\"buːm\"},{\"name\":\"absence\",\"trans\":[\"缺席， 不在； 缺席的时间， 外出期； 缺乏， 不存在\"],\"usphone\":\"'æbsns\",\"ukphone\":\"'æbsəns\"},{\"name\":\"attract\",\"trans\":[\"吸引， 引起…注意\"],\"usphone\":\"ə'trækt\",\"ukphone\":\"ə'trækt\"},{\"name\":\"edition\",\"trans\":[\"版， 版本， 版次\"],\"usphone\":\"ɪ'dɪʃən\",\"ukphone\":\"ɪ'dɪʃn\"},{\"name\":\"simplicity\",\"trans\":[\"简单， 简易； 朴素\"],\"usphone\":\"sɪm'plɪsəti\",\"ukphone\":\"sɪm'plɪsəti\"},{\"name\":\"cautious\",\"trans\":[\"十分小心的， 谨慎的\"],\"usphone\":\"'kɔʃəs\",\"ukphone\":\"'kɔːʃəs\"},{\"name\":\"disappear\",\"trans\":[\"不见， 失踪， 消失\"],\"usphone\":\"'dɪsə'pɪr\",\"ukphone\":\"ˌdɪsə'pɪə\"},{\"name\":\"summit\",\"trans\":[\"最高点， 峰顶； 最高级会议\"],\"usphone\":\"'sʌmɪt\",\"ukphone\":\"'sʌmɪt\"},{\"name\":\"recession\",\"trans\":[\"衰退， 衰退期\"],\"usphone\":\"rɪ'sɛʃən\",\"ukphone\":\"rɪ'seʃn\"},{\"name\":\"conclusion\",\"trans\":[\"结论， 推论； 结尾； 缔结， 议定\"],\"usphone\":\"kən'kluʒn\",\"ukphone\":\"kən'kluːʒn\"},{\"name\":\"typist\",\"trans\":[\"打字员\"],\"usphone\":\"'taɪpɪst\",\"ukphone\":\"'taɪpɪst\"},{\"name\":\"durable\",\"trans\":[\"耐久的， 耐用的\"],\"usphone\":\"'dʊrəbl\",\"ukphone\":\"'djuərəbl\"},{\"name\":\"negative\",\"trans\":[\"否定的，消极的；负的；阴性的\",\"负片， 底片； 负数\"],\"usphone\":\"'nɛɡətɪv\",\"ukphone\":\"'negətɪv\"},{\"name\":\"impose\",\"trans\":[\"利用， 占便宜； 欺骗\",\"把…强加于；征\"],\"usphone\":\"ɪm'poz\",\"ukphone\":\"ɪm'pəuz\"},{\"name\":\"ally\",\"trans\":[\"结盟， 联合\",\"同盟国， 同盟者； 支持者\"],\"usphone\":\"'ælaɪ\",\"ukphone\":\"'ælaɪ\"},{\"name\":\"statement\",\"trans\":[\"陈述， 声明； 结算单， 报表\"],\"usphone\":\"'stetmənt\",\"ukphone\":\"'steɪtmənt\"},{\"name\":\"hence\",\"trans\":[\"因此， 所以； 今后\"],\"usphone\":\"hɛns\",\"ukphone\":\"hens\"},{\"name\":\"memorial\",\"trans\":[\"纪念的，悼念的\",\"纪念碑， 纪念堂， 纪念仪式\"],\"usphone\":\"məˈmɔrɪəl\",\"ukphone\":\"mə'mɔːriəl\"},{\"name\":\"factor\",\"trans\":[\"因素； 因子； 系数\"],\"usphone\":\"'fæktɚ\",\"ukphone\":\"'fæktə\"},{\"name\":\"boot\",\"trans\":[\"靴子， 长筒靴； 行李箱； 解雇\"],\"usphone\":\"but\",\"ukphone\":\"buːt\"},{\"name\":\"pinch\",\"trans\":[\"捏，拧\",\"撮， 微量\"],\"usphone\":\"pɪntʃ\",\"ukphone\":\"pɪntʃ\"},{\"name\":\"delivery\",\"trans\":[\"投递， 交付； 分娩； 讲话方式； 投递的邮件\"],\"usphone\":\"dɪ'lɪvəri\",\"ukphone\":\"dɪ'lɪvəri\"},{\"name\":\"rack\",\"trans\":[\"挂架，搁架\",\"使痛苦， 折磨； 尽力使用\"],\"usphone\":\"ræk\",\"ukphone\":\"ræk\"},{\"name\":\"election\",\"trans\":[\"选举； 选择权； 当选\"],\"usphone\":\"ɪ'lɛkʃən\",\"ukphone\":\"ɪ'lekʃn\"},{\"name\":\"conquer\",\"trans\":[\"征服， 战胜； 破除， 克服\"],\"usphone\":\"'kɑŋkɚ\",\"ukphone\":\"'kɒŋkə\"},{\"name\":\"learned\",\"trans\":[\"有学问的； 学术上的\"],\"usphone\":\"'lɝnd; lɝ​nɪd\",\"ukphone\":\"'lɜːnɪd\"},{\"name\":\"substance\",\"trans\":[\"物质； 实质； 大意， 要旨； 根据， 理由\"],\"usphone\":\"'sʌbstəns\",\"ukphone\":\"'sʌbstəns\"},{\"name\":\"frown\",\"trans\":[\"皱眉， 蹙额\"],\"usphone\":\"fraʊn\",\"ukphone\":\"fraun\"},{\"name\":\"bond\",\"trans\":[\"黏合， 结合\",\"联结，联系；公债；契约，合同\"],\"usphone\":\"bɑnd\",\"ukphone\":\"bɒnd\"},{\"name\":\"target\",\"trans\":[\"目标\",\"把…作为目标； 瞄准\"],\"usphone\":\"'tɑrɡɪt\",\"ukphone\":\"'tɑːgɪt\"},{\"name\":\"wax\",\"trans\":[\"蜡，蜂蜡\",\"给…上蜡\"],\"usphone\":\"waks\",\"ukphone\":\"wæks\"},{\"name\":\"grind\",\"trans\":[\"磨， 磨快\"],\"usphone\":\"ɡraɪnd\",\"ukphone\":\"graɪnd\"},{\"name\":\"urban\",\"trans\":[\"城市的， 都市的； 住在都市的\"],\"usphone\":\"'ɝbən\",\"ukphone\":\"'ɜːbən\"},{\"name\":\"furthermore\",\"trans\":[\"而且， 此外\"],\"usphone\":\",fɝðɚ'mɔr\",\"ukphone\":\"ˌfɜːðə'mɔː\"},{\"name\":\"guidance\",\"trans\":[\"引导， 指导， 领导\"],\"usphone\":\"'gaɪdns\",\"ukphone\":\"'gaɪdns\"},{\"name\":\"risk\",\"trans\":[\"危险，风险；引起危险的事物\",\"冒…的危险， 使遭受危险\"],\"usphone\":\"rɪsk\",\"ukphone\":\"rɪsk\"},{\"name\":\"flame\",\"trans\":[\"火焰， 光辉； 热情\"],\"usphone\":\"flem\",\"ukphone\":\"fleɪm\"},{\"name\":\"container\",\"trans\":[\"容器； 集装箱\"],\"usphone\":\"kən'tenɚ\",\"ukphone\":\"kən'teɪnə\"},{\"name\":\"leader\",\"trans\":[\"领袖， 领导人， 首领\"],\"usphone\":\"'lidɚ\",\"ukphone\":\"'liːdə\"},{\"name\":\"delicate\",\"trans\":[\"纤细的， 易碎的； 微妙的； 精美的\"],\"usphone\":\"ˈdɛlɪkɪt\",\"ukphone\":\"'delɪkət\"},{\"name\":\"discard\",\"trans\":[\"丢弃， 抛弃， 遗弃\"],\"usphone\":\"dɪsˈkɑːrd\",\"ukphone\":\"dɪs'kɑːd\"},{\"name\":\"fancy\",\"trans\":[\"昂贵的； 别致的\",\"想象力，设想；爱好\",\"喜欢；想象，猜想\"],\"usphone\":\"'fænsi\",\"ukphone\":\"'fænsi\"},{\"name\":\"rebel\",\"trans\":[\"反叛， 造反； 反对， 不服从\",\"反叛分子， 反对者\"],\"usphone\":\"rɪ'bɛl\",\"ukphone\":\"'reb(ə)l\"},{\"name\":\"bounce\",\"trans\":[\"弹起，反弹；颠簸\",\"弹， 反弹\"],\"usphone\":\"baʊns\",\"ukphone\":\"bauns\"},{\"name\":\"usage\",\"trans\":[\"使用； 对待； 惯用法\"],\"usphone\":\"'jusɪdʒ\",\"ukphone\":\"'juːsɪdʒ; 'juːzɪdʒ\"},{\"name\":\"tissue\",\"trans\":[\"组织； 薄绢， 薄纸， 手巾纸\"],\"usphone\":\"'tɪʃu\",\"ukphone\":\"'tɪʃuː; 'tɪsjuː\"},{\"name\":\"experimental\",\"trans\":[\"实验的， 试验的\"],\"usphone\":\"ɛk'spɛrɪ'mɛntəl\",\"ukphone\":\"ɪkˌsperɪ'mentl\"},{\"name\":\"loosen\",\"trans\":[\"解开； 放松， 松弛\"],\"usphone\":\"'lusn\",\"ukphone\":\"'luːsn\"},{\"name\":\"rent\",\"trans\":[\"租借，租用；出租，出借\",\"租金； 出租\"],\"usphone\":\"rɛnt\",\"ukphone\":\"rent\"},{\"name\":\"nearby\",\"trans\":[\"在附近\",\"附近的\"],\"usphone\":\",nɪr'baɪ\",\"ukphone\":\"ˌnɪə'baɪ\"},{\"name\":\"carpenter\",\"trans\":[\"木工， 木匠\"],\"usphone\":\"ˈkɑːrpəntər\",\"ukphone\":\"'kɑːpəntə\"},{\"name\":\"cart\",\"trans\":[\"运货马车\"],\"usphone\":\"kɑrt\",\"ukphone\":\"kɑːt\"},{\"name\":\"modest\",\"trans\":[\"谦虚的； 适中的； 羞怯的\"],\"usphone\":\"'mɑdɪst\",\"ukphone\":\"'mɒdɪst\"},{\"name\":\"cast\",\"trans\":[\"投，扔，抛；浇铸\",\"演员表， 全体演员； 石膏绷带； 铸型， 铸件； 投， 抛\"],\"usphone\":\"kæst\",\"ukphone\":\"kɑːst\"},{\"name\":\"anxious\",\"trans\":[\"忧虑的， 令人焦急的； 渴望的\"],\"usphone\":\"'æŋkʃəs\",\"ukphone\":\"'æŋkʃəs\"},{\"name\":\"hatred\",\"trans\":[\"憎恶， 憎恨， 仇恨\"],\"usphone\":\"'hetrɪd\",\"ukphone\":\"'heɪtrɪd\"},{\"name\":\"crush\",\"trans\":[\"压碎， 碾碎； 摧毁， 压垮\"],\"usphone\":\"krʌʃ\",\"ukphone\":\"krʌʃ\"},{\"name\":\"largely\",\"trans\":[\"大部分， 大量地\"],\"usphone\":\"'lɑrdʒli\",\"ukphone\":\"'lɑːdʒli\"},{\"name\":\"slice\",\"trans\":[\"薄片，切片；部分\",\"切， 削\"],\"usphone\":\"slaɪs\",\"ukphone\":\"slaɪs\"},{\"name\":\"frost\",\"trans\":[\"结霜\",\"冰冻，严寒；霜\"],\"usphone\":\"frɔst\",\"ukphone\":\"frɒst\"},{\"name\":\"electron\",\"trans\":[\"电子\"],\"usphone\":\"ɪ'lɛktrɑn\",\"ukphone\":\"ɪ'lektrɒn\"},{\"name\":\"incline\",\"trans\":[\"倾斜； 弯； 倾向于\",\"斜坡\"],\"usphone\":\"ɪn'klaɪn\",\"ukphone\":\"ɪn'klaɪn\"},{\"name\":\"truly\",\"trans\":[\"真正地； 忠实地\"],\"usphone\":\"ˈtruːli\",\"ukphone\":\"'truːli\"},{\"name\":\"cash\",\"trans\":[\"现金，现款\",\"把…兑现\"],\"usphone\":\"kæʃ\",\"ukphone\":\"kæʃ\"},{\"name\":\"counsel\",\"trans\":[\"律师，法律顾问；忠告，劝告\",\"劝告， 提议\"],\"usphone\":\"'kaʊnsl\",\"ukphone\":\"'kaunsl\"},{\"name\":\"item\",\"trans\":[\"条， 条款， 一条\"],\"usphone\":\"'aɪtəm\",\"ukphone\":\"'aɪtəm\"},{\"name\":\"gene\",\"trans\":[\"基因\"],\"usphone\":\"dʒin\",\"ukphone\":\"dʒiːn\"},{\"name\":\"liver\",\"trans\":[\"肝\"],\"usphone\":\"'lɪvɚ\",\"ukphone\":\"'lɪvə\"},{\"name\":\"suicide\",\"trans\":[\"自杀\"],\"usphone\":\"'suɪsaɪd\",\"ukphone\":\"'suːɪsaɪd\"},{\"name\":\"violet\",\"trans\":[\"紫色的\",\"紫罗兰\"],\"usphone\":\"'vaɪələt\",\"ukphone\":\"'vaɪələt\"},{\"name\":\"hollow\",\"trans\":[\"空的， 空洞的； 沉闷的； 虚伪的\"],\"usphone\":\"'hɑlo\",\"ukphone\":\"'hɒləu\"},{\"name\":\"trunk\",\"trans\":[\"树干； 大衣箱， 皮箱； 汽车后备箱； 象鼻\"],\"usphone\":\"trʌŋk\",\"ukphone\":\"trʌŋk\"},{\"name\":\"saving\",\"trans\":[\"节省， 节约； 储蓄金， 存款\"],\"usphone\":\"'sevɪŋ\",\"ukphone\":\"'seɪvɪŋ\"},{\"name\":\"rely\",\"trans\":[\"依靠， 依赖； 信赖， 指望\"],\"usphone\":\"rɪ'laɪ\",\"ukphone\":\"rɪ'laɪ\"},{\"name\":\"hospitalize\",\"trans\":[\"就医\"],\"usphone\":\"'hɑspɪtə'laɪz\",\"ukphone\":\"'hɒspɪtəlaɪz\"},{\"name\":\"slide\",\"trans\":[\"滑；悄悄地移动\",\"滑动； 滑道， 滑面； 幻灯片\"],\"usphone\":\"slaɪd\",\"ukphone\":\"slaɪd\"},{\"name\":\"utilize\",\"trans\":[\"利用\"],\"usphone\":\"'juːtəlaɪz\",\"ukphone\":\"'juːtəlaɪz\"},{\"name\":\"sticky\",\"trans\":[\"黏性的， 胶黏的；  湿热的\"],\"usphone\":\"'stɪki\",\"ukphone\":\"'stɪki\"},{\"name\":\"prevail\",\"trans\":[\"流行， 盛行\"],\"usphone\":\"pri'vel\",\"ukphone\":\"prɪ'veɪl\"},{\"name\":\"waist\",\"trans\":[\"腰， 腰部\"],\"usphone\":\"west\",\"ukphone\":\"weɪst\"},{\"name\":\"excessive\",\"trans\":[\"过多的， 极度的\"],\"usphone\":\"ɪkˈsɛsɪv\",\"ukphone\":\"ɪk'sesɪv\"},{\"name\":\"flesh\",\"trans\":[\"肉， 肌肉， 肉体\"],\"usphone\":\"flɛʃ\",\"ukphone\":\"fleʃ\"},{\"name\":\"jungle\",\"trans\":[\"丛林， 密林， 莽丛； 乱七八糟的一堆\"],\"usphone\":\"'dʒʌŋɡl\",\"ukphone\":\"'dʒʌŋgl\"},{\"name\":\"portion\",\"trans\":[\"一部分，一份\",\"分配， 把…分给\"],\"usphone\":\"'pɔrʃən\",\"ukphone\":\"'pɔːʃn\"},{\"name\":\"settle\",\"trans\":[\"安排， 安放； 调停； 支付， 核算； 安家； 飞落， 停留； 安定\"],\"usphone\":\"'sɛtl\",\"ukphone\":\"'setl\"},{\"name\":\"pattern\",\"trans\":[\"型，式样，模型\",\"仿制， 使照…样子\"],\"usphone\":\"'pætɚn\",\"ukphone\":\"'pætn\"},{\"name\":\"harsh\",\"trans\":[\"严厉的； 粗糙的\"],\"usphone\":\"hɑrʃ\",\"ukphone\":\"hɑːʃ\"},{\"name\":\"connexion\",\"trans\":[\"connection的英式拼法\"],\"usphone\":\"kə'nekʃən\",\"ukphone\":\"kə'nekʃn\"},{\"name\":\"vehicle\",\"trans\":[\"车辆， 机动车； 传播媒介， 工具， 手段\"],\"usphone\":\"ˈviəkəl\",\"ukphone\":\"'viːəkl\"},{\"name\":\"scrape\",\"trans\":[\"刮，擦\",\"刮， 擦； 刮擦声\"],\"usphone\":\"skrep\",\"ukphone\":\"skreɪp\"},{\"name\":\"hardship\",\"trans\":[\"艰难， 困苦\"],\"usphone\":\"'hɑrdʃɪp\",\"ukphone\":\"'hɑːdʃɪp\"},{\"name\":\"confuse\",\"trans\":[\"使困惑， 把…弄糊涂； 混淆， 把…混同； 混乱， 搞乱\"],\"usphone\":\"kən'fjʊz\",\"ukphone\":\"kən'fjuːz\"},{\"name\":\"cushion\",\"trans\":[\"垫子， 坐垫， 靠垫\"],\"usphone\":\"'kʊʃən\",\"ukphone\":\"'kuʃn\"},{\"name\":\"scold\",\"trans\":[\"责骂， 训斥\"],\"usphone\":\"skold\",\"ukphone\":\"skəuld\"},{\"name\":\"glorious\",\"trans\":[\"光荣的； 壮丽的； 令人愉快的\"],\"usphone\":\"'ɡlɔriəs; 'ɡloriəs\",\"ukphone\":\"'glɔːriəs\"},{\"name\":\"civilize\",\"trans\":[\"使文明， 使开化， 教育\"],\"usphone\":\"'sɪvəlaɪz\",\"ukphone\":\"'sɪvəlaɪz\"},{\"name\":\"physician\",\"trans\":[\"内科医生\"],\"usphone\":\"fɪ'zɪʃən\",\"ukphone\":\"fɪ'zɪʃn\"},{\"name\":\"architecture\",\"trans\":[\"建筑学； 建筑式样， 建筑风格\"],\"usphone\":\"'ɑrkə'tɛktʃɚ\",\"ukphone\":\"'ɑːkɪtektʃə\"},{\"name\":\"stress\",\"trans\":[\"压力；强调；重要性；应力；重音\",\"强调， 着重； 重读\"],\"usphone\":\"strɛs\",\"ukphone\":\"stres\"},{\"name\":\"grip\",\"trans\":[\"握紧，抓牢；吸引住\",\"紧握\"],\"usphone\":\"ɡrɪp\",\"ukphone\":\"grɪp\"},{\"name\":\"explore\",\"trans\":[\"探险， 探索； 仔细查阅， 探究\"],\"usphone\":\"ɪk'splɔr\",\"ukphone\":\"ɪk'splɔː\"},{\"name\":\"display\",\"trans\":[\"陈列， 展览， 显示\"],\"usphone\":\"dɪ'sple\",\"ukphone\":\"dɪ'spleɪ\"},{\"name\":\"electricity\",\"trans\":[\"电\"],\"usphone\":\"ɪ'lɛk'trɪsəti\",\"ukphone\":\"ɪˌlek'trɪsəti\"},{\"name\":\"climate\",\"trans\":[\"气候； 风土， 地带； 风气， 气氛\"],\"usphone\":\"ˈklaɪmɪt\",\"ukphone\":\"'klaɪmət\"},{\"name\":\"conductor\",\"trans\":[\"售票员， 列车长； 指挥； 导体\"],\"usphone\":\"kən'dʌktɚ\",\"ukphone\":\"kən'dʌktə\"},{\"name\":\"bore\",\"trans\":[\"使厌烦；钻，挖\",\"令人讨厌的人\"],\"usphone\":\"bɔr\",\"ukphone\":\"bɔː\"},{\"name\":\"crust\",\"trans\":[\"面包皮， 硬外皮； 外壳， 地壳\"],\"usphone\":\"krʌst\",\"ukphone\":\"krʌst\"},{\"name\":\"disorder\",\"trans\":[\"混乱， 杂乱， 骚乱\"],\"usphone\":\"dɪs'ɔrdɚ\",\"ukphone\":\"dɪs'ɔːdə\"},{\"name\":\"criticize\",\"trans\":[\"批评； 评论； 非难\"],\"usphone\":\"'krɪtə'saɪz\",\"ukphone\":\"'krɪtɪsaɪz\"},{\"name\":\"organization\",\"trans\":[\"组织， 团体， 机构\"],\"usphone\":\",ɔrɡənə'zeʃən\",\"ukphone\":\"ˌɔːgənaɪ'zeɪʃn\"},{\"name\":\"rage\",\"trans\":[\"狂吹； 汹涌； 激烈进行； 发怒， 发火\",\"狂怒，盛怒；风靡一时的事物，时尚\"],\"usphone\":\"redʒ\",\"ukphone\":\"reɪdʒ\"},{\"name\":\"width\",\"trans\":[\"宽阔， 广阔； 宽度\"],\"usphone\":\"wɪdθ\",\"ukphone\":\"wɪdθ\"},{\"name\":\"dairy\",\"trans\":[\"乳制品的\",\"牛奶场；乳制品\"],\"usphone\":\"'dɛri\",\"ukphone\":\"'deəri\"},{\"name\":\"board\",\"trans\":[\"搭伙； 膳宿\",\"板，牌子；木板，纸板；委员会，董事会；伙食\",\"上\"],\"usphone\":\"bɔrd\",\"ukphone\":\"bɔːd\"},{\"name\":\"economic\",\"trans\":[\"经济的，经济学的\",\"经济学； 经济状况\"],\"usphone\":\"ˌikəˈnɑmɪk, ˌɛkəˈ-nɑmɪk\",\"ukphone\":\"ˌiːkə'nɒmɪk\"},{\"name\":\"stuff\",\"trans\":[\"材料，东西\",\"装， 填， 塞； 让…吃饱\"],\"usphone\":\"stʌf\",\"ukphone\":\"stʌf\"},{\"name\":\"arrest\",\"trans\":[\"逮捕，拘留；停止，阻止；吸引\",\"逮捕， 拘留， 扣留\"],\"usphone\":\"ə'rɛst\",\"ukphone\":\"ə'rest\"},{\"name\":\"widow\",\"trans\":[\"寡妇\"],\"usphone\":\"'wɪdo\",\"ukphone\":\"'wɪdəu\"},{\"name\":\"distinction\",\"trans\":[\"差别， 不同， 区分\"],\"usphone\":\"dɪ'stɪŋkʃən\",\"ukphone\":\"dɪ'stɪŋkʃn\"},{\"name\":\"mature\",\"trans\":[\"成熟的；成年人的；深思熟虑的；到期的，应支付的\",\"使成熟\"],\"usphone\":\"mə'tʃʊr\",\"ukphone\":\"mə'tju; mə'tʃuə\"},{\"name\":\"navy\",\"trans\":[\"海军\"],\"usphone\":\"'nevi\",\"ukphone\":\"'neɪvi\"},{\"name\":\"fee\",\"trans\":[\"费； 酬金， 赏金\"],\"usphone\":\"fi\",\"ukphone\":\"fiː\"},{\"name\":\"section\",\"trans\":[\"部分， 章节； 部门， 科； 截面， 剖面\"],\"usphone\":\"'sɛkʃən\",\"ukphone\":\"'sekʃn\"},{\"name\":\"influence\",\"trans\":[\"影响，作用；影响力，势力；产生影响力的人\",\"影响\"],\"usphone\":\"'ɪnfluəns\",\"ukphone\":\"'ɪnfluəns\"},{\"name\":\"whip\",\"trans\":[\"鞭笞；猛地移动；搅打成糊状\",\"鞭子\"],\"usphone\":\"wɪp\",\"ukphone\":\"wɪp\"},{\"name\":\"protocol\",\"trans\":[\"礼仪， 礼节； 草案， 议定书\"],\"usphone\":\"'protə'kɔl\",\"ukphone\":\"'prəutəkɒl\"},{\"name\":\"whale\",\"trans\":[\"鲸\"],\"usphone\":\"wel\",\"ukphone\":\"weɪl\"},{\"name\":\"provoke\",\"trans\":[\"对…挑衅， 激怒； 激起， 引起\"],\"usphone\":\"prə'vok\",\"ukphone\":\"prə'vəuk\"},{\"name\":\"threaten\",\"trans\":[\"威胁， 恐吓； 预示快要来临， 是…的征兆； 构成威胁； 可能发生\"],\"usphone\":\"'θrɛtn\",\"ukphone\":\"'θretn\"},{\"name\":\"talent\",\"trans\":[\"天才， 才能； 人才\"],\"usphone\":\"'tælənt\",\"ukphone\":\"'tælənt\"},{\"name\":\"percentage\",\"trans\":[\"百分比， 百分率\"],\"usphone\":\"pɚ'sɛntɪdʒ\",\"ukphone\":\"pə'sentɪdʒ\"},{\"name\":\"negotiate\",\"trans\":[\"洽谈， 协商； 顺利通过， 成功越过； 协商， 谈判\"],\"usphone\":\"nɪ'ɡoʃɪet\",\"ukphone\":\"nɪ'gəuʃieɪt\"},{\"name\":\"strain\",\"trans\":[\"扭伤， 拉伤； 尽力； 拉紧\",\"拉紧；过劳；极度紧张；张力；扭伤，拉伤；旋律；品种，家系；气质，个性特点\"],\"usphone\":\"stren\",\"ukphone\":\"streɪn\"},{\"name\":\"hunt\",\"trans\":[\"打猎； 搜寻； 驱逐\"],\"usphone\":\"hʌnt\",\"ukphone\":\"hʌnt\"},{\"name\":\"violin\",\"trans\":[\"小提琴\"],\"usphone\":\",vaɪə'lɪn\",\"ukphone\":\"ˌvaɪə'lɪn\"},{\"name\":\"remonstrate\",\"trans\":[\"抗议\"],\"usphone\":\"rɪ'mɑnstret\",\"ukphone\":\"'remənstreɪt\"},{\"name\":\"package\",\"trans\":[\"包裹，包装；一揽子交易\",\"把…打包； 包装\"],\"usphone\":\"'pækɪdʒ\",\"ukphone\":\"'pækɪdʒ\"},{\"name\":\"visible\",\"trans\":[\"可见的， 看得见的， 有形的\"],\"usphone\":\"'vɪzəbl\",\"ukphone\":\"'vɪzəbl\"},{\"name\":\"crisis\",\"trans\":[\"危机， 存亡之际； 关键阶段\"],\"usphone\":\"'kraɪsɪs\",\"ukphone\":\"'kraɪsɪs\"},{\"name\":\"rail\",\"trans\":[\"责骂， 抱怨\",\"栏杆，横杆；铁轨，轨道；铁路\"],\"usphone\":\"rel\",\"ukphone\":\"reɪl\"},{\"name\":\"survival\",\"trans\":[\"幸存； 幸存者， 残存物\"],\"usphone\":\"sɚ'vaɪvl\",\"ukphone\":\"sə'vaɪvl\"},{\"name\":\"germ\",\"trans\":[\"微生物， 细菌； 幼芽\"],\"usphone\":\"dʒɝm\",\"ukphone\":\"dʒɜːm\"},{\"name\":\"inner\",\"trans\":[\"内部的； 内心的\"],\"usphone\":\"'ɪnɚ\",\"ukphone\":\"'ɪnə\"},{\"name\":\"market\",\"trans\":[\"市场； 股市； 行情， 销路\"],\"usphone\":\"'mɑrkɪt\",\"ukphone\":\"'mɑːkɪt\"},{\"name\":\"keen\",\"trans\":[\"热心的； 激烈的； 敏锐的， 敏捷的\"],\"usphone\":\"kin\",\"ukphone\":\"kiːn\"},{\"name\":\"glimpse\",\"trans\":[\"看一眼，一瞥\",\"瞥见\",\"一瞥， 一看\"],\"usphone\":\"ɡlɪmps\",\"ukphone\":\"glɪmps\"},{\"name\":\"detective\",\"trans\":[\"侦探， 私人侦探\"],\"usphone\":\"dɪ'tɛktɪv\",\"ukphone\":\"dɪ'tektɪv\"},{\"name\":\"transfer\",\"trans\":[\"搬， 转移； 调动， 转学； 转让， 过户； 乘车， 转乘\"],\"usphone\":\"træns'fɝ\",\"ukphone\":\"træns'fɜː\"},{\"name\":\"footstep\",\"trans\":[\"脚步， 脚步声， 足迹\"],\"usphone\":\"'fʊtstɛp\",\"ukphone\":\"'futstep\"},{\"name\":\"veteran\",\"trans\":[\"老兵， 老手\"],\"usphone\":\"'vɛtərən\",\"ukphone\":\"'vetərən\"},{\"name\":\"indifferent\",\"trans\":[\"冷漠的， 不积极的； 一般的， 平平的\"],\"usphone\":\"ɪn'dɪfrənt\",\"ukphone\":\"ɪn'dɪfrənt\"},{\"name\":\"outside\",\"trans\":[\"外部的\",\"在…的外面； 向…的外面； 除…以外\",\"外部，外表\"],\"usphone\":\",aʊt'saɪd\",\"ukphone\":\"ˌaut'saɪd\"},{\"name\":\"nerve\",\"trans\":[\"神经； 勇敢， 胆量\"],\"usphone\":\"nɝv\",\"ukphone\":\"nɜːv\"},{\"name\":\"affection\",\"trans\":[\"感情； 爱， 爱慕\"],\"usphone\":\"ə'fɛkʃən\",\"ukphone\":\"ə'fekʃn\"},{\"name\":\"eagle\",\"trans\":[\"鹰\"],\"usphone\":\"'igl\",\"ukphone\":\"'iːgl\"},{\"name\":\"cruise\",\"trans\":[\"航游，巡航；缓慢巡行\",\"航游， 游弋\"],\"usphone\":\"krʊz\",\"ukphone\":\"kruːz\"},{\"name\":\"elementary\",\"trans\":[\"基本的， 初级的\"],\"usphone\":\",ɛlɪ'mɛntri\",\"ukphone\":\"ˌelɪ'mentri\"},{\"name\":\"topic\",\"trans\":[\"题目， 论题， 话题\"],\"usphone\":\"'tɑpɪk\",\"ukphone\":\"'tɒpɪk\"},{\"name\":\"solemn\",\"trans\":[\"庄严的， 隆重的； 严肃的\"],\"usphone\":\"'sɑləm\",\"ukphone\":\"'sɒləm\"},{\"name\":\"perceive\",\"trans\":[\"感知， 感觉， 察觉； 认识到， 意识到； 理解\"],\"usphone\":\"pɚ'siv\",\"ukphone\":\"pə'siːv\"},{\"name\":\"omit\",\"trans\":[\"省略； 遗漏\"],\"usphone\":\"ə'mɪt\",\"ukphone\":\"ə'mɪt\"},{\"name\":\"embarrass\",\"trans\":[\"使窘迫， 使为难\"],\"usphone\":\"ɪm'bærəs\",\"ukphone\":\"ɪm'bærəs\"},{\"name\":\"option\",\"trans\":[\"选择， 选择权， 选择自由； 选择的事物或人， 选课\"],\"usphone\":\"'ɑpʃən\",\"ukphone\":\"'ɒpʃn\"},{\"name\":\"erroneous\",\"trans\":[\"错误的， 不正确的\"],\"usphone\":\"ɪ'ronɪəs\",\"ukphone\":\"ɪ'rəuniəs\"},{\"name\":\"raid\",\"trans\":[\"袭击； 突入查抄， 突入搜捕； 劫掠\"],\"usphone\":\"red\",\"ukphone\":\"reɪd\"},{\"name\":\"politics\",\"trans\":[\"政治， 政治学； 政纲， 政见\"],\"usphone\":\"'pɑlətɪks\",\"ukphone\":\"'pɒlətɪks\"},{\"name\":\"acute\",\"trans\":[\"严重的； 急性的； 灵敏的， 敏锐的； 精明的\"],\"usphone\":\"ə'kjut\",\"ukphone\":\"ə'kjuːt\"},{\"name\":\"limitation\",\"trans\":[\"限制， 限度； 局限\"],\"usphone\":\",lɪmɪ'teʃən\",\"ukphone\":\"ˌlɪmɪ'teɪʃn\"},{\"name\":\"sponsor\",\"trans\":[\"发起者\",\"发起； 资助， 赞助； 支持\"],\"usphone\":\"'spɑnsɚ\",\"ukphone\":\"'spɒnsə\"},{\"name\":\"kindergarten\",\"trans\":[\"幼儿园\"],\"usphone\":\"'kɪndɚɡɑrtn\",\"ukphone\":\"'kɪndəgɑːtn\"},{\"name\":\"unexpected\",\"trans\":[\"想不到的， 意外的\"],\"usphone\":\"'ʌnɪk'spɛktɪd\",\"ukphone\":\"ˌʌnɪk'spektɪd\"},{\"name\":\"crucial\",\"trans\":[\"至关重要的， 决定性的\"],\"usphone\":\"'krʊʃəl\",\"ukphone\":\"'kruːʃl\"},{\"name\":\"contribute\",\"trans\":[\"捐献， 捐款； 投稿\"],\"usphone\":\"kən'trɪbjut\",\"ukphone\":\"kən'trɪbjuːt\"},{\"name\":\"faith\",\"trans\":[\"信任； 信心； 信仰， 信条； 忠诚\"],\"usphone\":\"feθ\",\"ukphone\":\"feɪθ\"},{\"name\":\"generator\",\"trans\":[\"发电机； 发生器\"],\"usphone\":\"'dʒɛnəretɚ\",\"ukphone\":\"'dʒenəreɪtə\"},{\"name\":\"insert\",\"trans\":[\"插入， 嵌入； 登载\"],\"usphone\":\"'ɪnsɝt\",\"ukphone\":\"ɪn'sɜːt\"},{\"name\":\"remark\",\"trans\":[\"说；评论说\",\"话语； 谈论， 评论\"],\"usphone\":\"rɪ'mɑrk\",\"ukphone\":\"rɪ'mɑːk\"},{\"name\":\"forbid\",\"trans\":[\"禁止， 不许， 阻止\"],\"usphone\":\"fɚ'bɪd\",\"ukphone\":\"fə'bɪd\"},{\"name\":\"microscope\",\"trans\":[\"显微镜\"],\"usphone\":\"'maɪkrəskop\",\"ukphone\":\"'maɪkrəskəup\"},{\"name\":\"necessarily\",\"trans\":[\"必要地； 必然\"],\"usphone\":\",nɛsə'sɛrəli\",\"ukphone\":\"'nesəsərəli; ˌnesə'serəli\"},{\"name\":\"highlight\",\"trans\":[\"强调，突出，使显著\",\"最精彩的部分； 最重要的事件\"],\"usphone\":\"'haɪlaɪt\",\"ukphone\":\"'haɪlaɪt\"},{\"name\":\"candidate\",\"trans\":[\"候选人； 投考者， 申请求职者\"],\"usphone\":\"ˈkændɪˌdet, -dɪt\",\"ukphone\":\"'kændɪdeɪt; 'kændɪdət\"},{\"name\":\"billion\",\"trans\":[\"十亿\"],\"usphone\":\"'bɪljən\",\"ukphone\":\"'bɪljən\"},{\"name\":\"parallel\",\"trans\":[\"平行的；类似的；并列的，并联的\",\"可相比拟的事物；相似处；平行线，平行面；纬线\",\"与…平行； 与…相似， 与…相当， 比得上\"],\"usphone\":\"'pærəlɛl\",\"ukphone\":\"'pærəlel\"},{\"name\":\"reject\",\"trans\":[\"拒绝； 拒纳， 退回\",\"次品\"],\"usphone\":\"rɪ'dʒɛkt\",\"ukphone\":\"rɪ'dʒekt\"},{\"name\":\"patient\",\"trans\":[\"忍耐的，有耐心的\",\"病人\"],\"usphone\":\"ˈpeʃənt\",\"ukphone\":\"'peɪʃnt\"},{\"name\":\"cashier\",\"trans\":[\"出纳\"],\"usphone\":\"kæ'ʃɪr\",\"ukphone\":\"kæ'ʃɪə\"},{\"name\":\"sheer\",\"trans\":[\"垂直地，陡峭地\",\"急转向， 偏离\",\"完全的，十足的；陡峭的，垂直的；极薄的，透明的\"],\"usphone\":\"ʃɪr\",\"ukphone\":\"ʃɪə\"},{\"name\":\"miracle\",\"trans\":[\"奇迹， 令人惊奇的人\"],\"usphone\":\"'mɪrəkl\",\"ukphone\":\"'mɪrəkl\"},{\"name\":\"profit\",\"trans\":[\"受益\",\"益处；利润，收益\",\"有益于，有利于\"],\"usphone\":\"'prɑfɪt\",\"ukphone\":\"'prɒfɪt\"},{\"name\":\"original\",\"trans\":[\"最初的；新颖的；原版的\",\"原件， 原作\"],\"usphone\":\"ə'rɪdʒənl\",\"ukphone\":\"ə'rɪdʒənl\"},{\"name\":\"wit\",\"trans\":[\"风趣； 妙语； 智力， 才智， 智能\"],\"usphone\":\"wɪt\",\"ukphone\":\"wɪt\"},{\"name\":\"handful\",\"trans\":[\"一把， 少数， 一小撮\"],\"usphone\":\"'hænd,fʊl\",\"ukphone\":\"'hændful\"},{\"name\":\"assignment\",\"trans\":[\"任务， 指定的作业； 分配， 指派\"],\"usphone\":\"ə'saɪnmənt\",\"ukphone\":\"ə'saɪnmənt\"},{\"name\":\"nylon\",\"trans\":[\"尼龙\"],\"usphone\":\"'naɪlɑn\",\"ukphone\":\"'naɪlɒn\"},{\"name\":\"yawn\",\"trans\":[\"打呵欠\",\"呵欠\"],\"usphone\":\"jɔn\",\"ukphone\":\"jɔːn\"},{\"name\":\"electric\",\"trans\":[\"电的， 电动的\"],\"usphone\":\"ɪ'lɛktrɪk\",\"ukphone\":\"ɪ'lektrɪk\"},{\"name\":\"terminal\",\"trans\":[\"晚期的，不治的；末端的，终点的，极限的\",\"终点； 终端； 接线端\"],\"usphone\":\"tɝ​mənl\",\"ukphone\":\"'tɜːmɪnl\"},{\"name\":\"kingdom\",\"trans\":[\"王国； 领域； 界\"],\"usphone\":\"'kɪŋdəm\",\"ukphone\":\"'kɪŋdəm\"},{\"name\":\"differ\",\"trans\":[\"不同， 相异； 发生分歧\"],\"usphone\":\"'dɪfɚ\",\"ukphone\":\"'dɪfə\"},{\"name\":\"various\",\"trans\":[\"各种各样的， 不同的\"],\"usphone\":\"'vɛrɪəs\",\"ukphone\":\"'veəriəs\"},{\"name\":\"latter\",\"trans\":[\"后者的； 后一半的\"],\"usphone\":\"'lætɚ\",\"ukphone\":\"'lætə\"},{\"name\":\"depression\",\"trans\":[\"抑郁， 沮丧； 不景气， 萧条； 洼地， 凹陷\"],\"usphone\":\"dɪ'prɛʃən\",\"ukphone\":\"dɪ'preʃn\"},{\"name\":\"reduction\",\"trans\":[\"减少， 缩小； 下降， 降低\"],\"usphone\":\"rɪ'dʌkʃən\",\"ukphone\":\"rɪ'dʌkʃn\"},{\"name\":\"extent\",\"trans\":[\"广度； 范围； 程度\"],\"usphone\":\"ɪk'stɛnt\",\"ukphone\":\"ɪk'stent\"},{\"name\":\"equivalent\",\"trans\":[\"相等的，等量的\",\"相等物， 等价物\"],\"usphone\":\"ɪ'kwɪvələnt\",\"ukphone\":\"ɪ'kwɪvələnt\"},{\"name\":\"gaol\",\"trans\":[\"监禁\",\"监狱\"],\"usphone\":\"dʒeɪl\",\"ukphone\":\"dʒeɪl\"},{\"name\":\"conversely\",\"trans\":[\"相反\"],\"usphone\":\"'kɑnvɝsli\",\"ukphone\":\"'kɒnvɜːsli\"},{\"name\":\"sauce\",\"trans\":[\"调味汁， 作料\"],\"usphone\":\"sɔs\",\"ukphone\":\"sɔːs\"},{\"name\":\"ban\",\"trans\":[\"取缔，查禁；禁止\",\"禁止， 禁令\"],\"usphone\":\"bæn\",\"ukphone\":\"bæn\"},{\"name\":\"fascinate\",\"trans\":[\"有吸引力， 迷人\",\"迷住，强烈吸引\"],\"usphone\":\"'fæsə'net\",\"ukphone\":\"'fæsɪneɪt\"},{\"name\":\"suffer\",\"trans\":[\"遭受， 忍受， 容许； 受痛苦， 受损\"],\"usphone\":\"'sʌfɚ\",\"ukphone\":\"'sʌfə\"},{\"name\":\"diplomatic\",\"trans\":[\"外交的， 从事外交的； 策略的， 有手腕的\"],\"usphone\":\",dɪplə'mætɪk\",\"ukphone\":\"ˌdɪplə'mætɪk\"},{\"name\":\"bat\",\"trans\":[\"蝙蝠； 球棒， 球拍\"],\"usphone\":\"bæt\",\"ukphone\":\"bæt\"},{\"name\":\"neighbourhood\",\"trans\":[\"四邻； 附近； 接近\"],\"usphone\":\"nebɚˌhʊd\",\"ukphone\":\"'neɪbəhud\"},{\"name\":\"draft\",\"trans\":[\"草稿；汇票；征兵；通风\",\"起草； 征募\"],\"usphone\":\"dræft\",\"ukphone\":\"drɑːft\"},{\"name\":\"complex\",\"trans\":[\"由许多部分组成的， 复合的； 复杂的， 难懂的\"],\"usphone\":\"ˈkɑmplɛks;kəmˈplɛks\",\"ukphone\":\"'kɒmpleks\"},{\"name\":\"rank\",\"trans\":[\"给…评定等级； 列入， 占特定等级\",\"军衔，职衔；地位，社会阶层；排，行列\"],\"usphone\":\"ræŋk\",\"ukphone\":\"ræŋk\"},{\"name\":\"assumption\",\"trans\":[\"假定， 臆断； 担任， 承担\"],\"usphone\":\"ə'sʌmpʃən\",\"ukphone\":\"ə'sʌmpʃn\"},{\"name\":\"pension\",\"trans\":[\"养老金，抚恤金\",\"发给…养老金\"],\"usphone\":\"'pɛnʃən\",\"ukphone\":\"'penʃn\"},{\"name\":\"giant\",\"trans\":[\"巨大的\",\"巨人，巨物；才智超群的人\"],\"usphone\":\"'dʒaɪənt\",\"ukphone\":\"'dʒaɪənt\"},{\"name\":\"fluid\",\"trans\":[\"流动的\",\"流体，液体\"],\"usphone\":\"'fluɪd\",\"ukphone\":\"'fluːɪd\"},{\"name\":\"bay\",\"trans\":[\"湾； 分隔间\"],\"usphone\":\"be\",\"ukphone\":\"beɪ\"},{\"name\":\"outlet\",\"trans\":[\"出口， 出路； 发泄途径\"],\"usphone\":\"'aʊtlɛt\",\"ukphone\":\"'autlet\"},{\"name\":\"neglect\",\"trans\":[\"疏于照料；疏忽\",\"疏忽\"],\"usphone\":\"nɪ'glɛkt\",\"ukphone\":\"nɪ'glekt\"},{\"name\":\"addition\",\"trans\":[\"加， 加法； 附加物\"],\"usphone\":\"ə'dɪʃən\",\"ukphone\":\"ə'dɪʃn\"},{\"name\":\"gang\",\"trans\":[\"聚集， 结成一伙\",\"一帮，一伙\"],\"usphone\":\"ɡæŋ\",\"ukphone\":\"gæŋ\"},{\"name\":\"shrink\",\"trans\":[\"起皱； 收缩； 退缩， 畏缩\"],\"usphone\":\"ʃrɪŋk\",\"ukphone\":\"ʃrɪŋk\"},{\"name\":\"ancestor\",\"trans\":[\"祖宗， 祖先； 原型； 先驱\"],\"usphone\":\"'ænsɛstɚ\",\"ukphone\":\"'ænsestə\"},{\"name\":\"textile\",\"trans\":[\"纺织的\",\"纺织品；纺织业\"],\"usphone\":\"'tɛkstaɪl\",\"ukphone\":\"'tekstaɪl\"},{\"name\":\"former\",\"trans\":[\"在前的\",\"前者\"],\"usphone\":\"'fɔrmɚ\",\"ukphone\":\"'fɔːmə\"},{\"name\":\"panic\",\"trans\":[\"恐慌， 惊慌失措\",\"恐慌，惊慌，慌乱\"],\"usphone\":\"'pænɪk\",\"ukphone\":\"'pænɪk\"},{\"name\":\"extend\",\"trans\":[\"延长， 扩大； 提供， 给予； 伸展， 达到\"],\"usphone\":\"ɪk'stɛnd\",\"ukphone\":\"ɪk'stend\"},{\"name\":\"fold\",\"trans\":[\"折叠，合拢\",\"褶， 折叠的部分\"],\"usphone\":\"fold\",\"ukphone\":\"fəuld\"},{\"name\":\"plastic\",\"trans\":[\"塑料的；可塑的\",\"塑料， 塑料制品； 信用卡\"],\"usphone\":\"'plæstɪk\",\"ukphone\":\"'plæstik\"},{\"name\":\"globe\",\"trans\":[\"地球， 世界； 地球仪； 球体\"],\"usphone\":\"ɡlob\",\"ukphone\":\"gləub\"},{\"name\":\"chemical\",\"trans\":[\"化学的\",\"化学制品\"],\"usphone\":\"'kɛmɪkl\",\"ukphone\":\"'kemɪkl\"},{\"name\":\"interpretation\",\"trans\":[\"解释； 口译； 艺术处理\"],\"usphone\":\"ɪn'tɝprɪ'teʃən\",\"ukphone\":\"ɪnˌtɜːprɪ'teɪʃn\"},{\"name\":\"ax\",\"trans\":[\"斧子\"],\"usphone\":\"æks\",\"ukphone\":\"æks\"},{\"name\":\"intermediate\",\"trans\":[\"中间的； 中级的\"],\"usphone\":\",ɪntɚ'midɪət\",\"ukphone\":\"ˌɪntə'miːdiət\"},{\"name\":\"folk\",\"trans\":[\"人们； 家属， 亲属； 大伙儿， 各位\"],\"usphone\":\"fok\",\"ukphone\":\"fəuk\"},{\"name\":\"consideration\",\"trans\":[\"考虑， 思考， 要考虑的事； 体贴， 关心\"],\"usphone\":\"kən,sɪdə'reʃən\",\"ukphone\":\"kənˌsɪdə'reɪʃn\"},{\"name\":\"competitive\",\"trans\":[\"竞争的， 比赛的； 好竞争的， 求胜心切的； 有竞争力的\"],\"usphone\":\"kəm'pɛtətɪv\",\"ukphone\":\"kəm'petətɪv\"},{\"name\":\"enquiry\",\"trans\":[\"询问\"],\"usphone\":\"ɛnˈkwaɪri, ˈɛnkwəri\",\"ukphone\":\"ɪn'kwaɪəri\"},{\"name\":\"applause\",\"trans\":[\"鼓掌， 掌声\"],\"usphone\":\"ə'plɔz\",\"ukphone\":\"ə'plɔːz\"},{\"name\":\"frank\",\"trans\":[\"坦白的， 直率的\"],\"usphone\":\"fræŋk\",\"ukphone\":\"fræŋk\"},{\"name\":\"abuse\",\"trans\":[\"滥用； 虐待， 伤害； 辱骂， 毁谤\",\"滥用； 虐待， 伤害； 辱骂， 毁谤\"],\"usphone\":\"ə'bjus\",\"ukphone\":\"ə'bjuːz\"},{\"name\":\"prove\",\"trans\":[\"证实， 证明； 结果是\"],\"usphone\":\"pruv\",\"ukphone\":\"pruːv\"},{\"name\":\"scheme\",\"trans\":[\"密谋， 策划\",\"计划，方案；阴谋\"],\"usphone\":\"skim\",\"ukphone\":\"skiːm\"},{\"name\":\"affect\",\"trans\":[\"影响； 感动\"],\"usphone\":\"ə'fɛkt\",\"ukphone\":\"ə'fekt\"},{\"name\":\"deaf\",\"trans\":[\"聋的； 不愿听的\"],\"usphone\":\"dɛf\",\"ukphone\":\"def\"},{\"name\":\"admire\",\"trans\":[\"钦佩， 羡慕； 赞赏， 称赞， 夸奖\"],\"usphone\":\"ədˈmaɪr\",\"ukphone\":\"əd'maɪə\"},{\"name\":\"consequently\",\"trans\":[\"因此， 因而， 所以\"],\"usphone\":\"'kɑnsəkwɛntli\",\"ukphone\":\"'kɒnsɪkwəntli\"},{\"name\":\"virus\",\"trans\":[\"病毒； 病毒性疾病， 病毒病\"],\"usphone\":\"'vaɪrəs\",\"ukphone\":\"'vaɪərəs\"},{\"name\":\"drain\",\"trans\":[\"排去，放水\",\"耗竭； 排水沟， 排水管\"],\"usphone\":\"dren\",\"ukphone\":\"dreɪn\"},{\"name\":\"isolate\",\"trans\":[\"使隔离， 使孤立\"],\"usphone\":\"aɪslˌet\",\"ukphone\":\"'aɪsəleɪt\"},{\"name\":\"sailor\",\"trans\":[\"水手， 海员\"],\"usphone\":\"'selɚ\",\"ukphone\":\"'seɪlə\"},{\"name\":\"amuse\",\"trans\":[\"逗…乐， 给…娱乐\"],\"usphone\":\"ə'mjuz\",\"ukphone\":\"ə'mjuːz\"},{\"name\":\"inward\",\"trans\":[\"向内\",\"里面的；内心的\"],\"usphone\":\"'ɪnwɚd\",\"ukphone\":\"'ɪnwəd\"},{\"name\":\"responsibility\",\"trans\":[\"责任， 责任心； 职责， 义务\"],\"usphone\":\"rɪˌspɑːnsəˈbɪləti\",\"ukphone\":\"rɪˌspɒnsə'bɪləti\"},{\"name\":\"enquire\",\"trans\":[\"询问\"],\"usphone\":\"ɪn'kwaɪr\",\"ukphone\":\"ɪn'kwaɪə\"},{\"name\":\"civil\",\"trans\":[\"公民的； 文职的； 民用的； 民事的， 民法的； 文明的\"],\"usphone\":\"'sɪvl\",\"ukphone\":\"'sɪvl\"},{\"name\":\"popularity\",\"trans\":[\"普及， 流行； 声望\"],\"usphone\":\",pɑpju'lærəti\",\"ukphone\":\"ˌpɒpju'lærəti\"},{\"name\":\"subsequent\",\"trans\":[\"随后的， 后来的\"],\"usphone\":\"'sʌbsɪkwənt\",\"ukphone\":\"'sʌbsɪkwənt\"},{\"name\":\"indicate\",\"trans\":[\"标示， 表示， 表明\"],\"usphone\":\"'ɪndɪket\",\"ukphone\":\"'ɪndɪkeɪt\"},{\"name\":\"scarcely\",\"trans\":[\"几乎不， 简直不； 决不； 刚刚， 才\"],\"usphone\":\"'skɛrsli\",\"ukphone\":\"'skeəsli\"},{\"name\":\"panel\",\"trans\":[\"专门小组； 面， 板； 控制板， 仪表盘\"],\"usphone\":\"'pænl\",\"ukphone\":\"'pænl\"},{\"name\":\"outstanding\",\"trans\":[\"突出的， 杰出的； 未解决的； 未偿付的\"],\"usphone\":\"'aʊt'stændɪŋ\",\"ukphone\":\"ˌaut'stændɪŋ\"},{\"name\":\"charge\",\"trans\":[\"索价；控告；充电，充满；向前冲\",\"费用； 管理； 控告， 指责； 电荷， 充电\"],\"usphone\":\"tʃɑrdʒ\",\"ukphone\":\"tʃɑːdʒ\"},{\"name\":\"sew\",\"trans\":[\"缝制， 缝纫\"],\"usphone\":\"so\",\"ukphone\":\"səu\"},{\"name\":\"oval\",\"trans\":[\"椭圆形的\",\"椭圆形\"],\"usphone\":\"'ovl\",\"ukphone\":\"'əuvl\"},{\"name\":\"column\",\"trans\":[\"柱， 支柱， 圆柱； 纵队； 栏， 专栏\"],\"usphone\":\"'kɑləm\",\"ukphone\":\"'kɒləm\"},{\"name\":\"procedure\",\"trans\":[\"程序， 手续， 步骤\"],\"usphone\":\"prə'sidʒɚ\",\"ukphone\":\"prə'siːdʒə\"},{\"name\":\"sample\",\"trans\":[\"样品，试样，样本\",\"从…抽样； 品尝， 体验\"],\"usphone\":\"'sæmpl\",\"ukphone\":\"'sɑːmpl\"},{\"name\":\"integrate\",\"trans\":[\"成为一体， 合并\"],\"usphone\":\"'ɪntɪɡret\",\"ukphone\":\"'ɪntɪgreɪt\"},{\"name\":\"survivor\",\"trans\":[\"生还者； 残存物\"],\"usphone\":\"sɚ'vaɪvɚ\",\"ukphone\":\"sə'vaɪvə\"},{\"name\":\"applicant\",\"trans\":[\"申请人\"],\"usphone\":\"'æplɪkənt\",\"ukphone\":\"'æplɪkənt\"},{\"name\":\"tropical\",\"trans\":[\"热带的； 炎热的\"],\"usphone\":\"'trɑpɪkl\",\"ukphone\":\"'trɒpɪkl\"},{\"name\":\"partner\",\"trans\":[\"做…的搭档\",\"伙伴，合伙人，搭档，配偶\"],\"usphone\":\"'pɑrtnɚ\",\"ukphone\":\"'pɑːtnə\"},{\"name\":\"plunge\",\"trans\":[\"纵身投入， 猛冲； 猛跌\"],\"usphone\":\"plʌndʒ\",\"ukphone\":\"plʌndʒ\"},{\"name\":\"diagnose\",\"trans\":[\"诊断\"],\"usphone\":\",daɪəɡ'nos\",\"ukphone\":\"'daɪəgnəuz\"},{\"name\":\"somewhat\",\"trans\":[\"有点儿\",\"一点儿\"],\"usphone\":\"'sʌmwʌt\",\"ukphone\":\"'sʌmhwɒt\"},{\"name\":\"earnest\",\"trans\":[\"认真的， 诚恳的\"],\"usphone\":\"\",\"ukphone\":\"'ɜːnɪst\"},{\"name\":\"spider\",\"trans\":[\"蜘蛛\"],\"usphone\":\"'spaɪdɚ\",\"ukphone\":\"'spaɪdə\"},{\"name\":\"interview\",\"trans\":[\"接见， 会见； 面谈， 面试； 采访\"],\"usphone\":\"'ɪntɚvju\",\"ukphone\":\"'ɪntəvjuː\"},{\"name\":\"essential\",\"trans\":[\"必要的；本质的\",\"要素； 必需品\"],\"usphone\":\"ɪ'sɛnʃl\",\"ukphone\":\"ɪ'senʃl\"},{\"name\":\"clarify\",\"trans\":[\"澄清， 阐明\"],\"usphone\":\"'klærəfaɪ\",\"ukphone\":\"'klærəfaɪ\"},{\"name\":\"furnace\",\"trans\":[\"炉子， 熔炉， 鼓风炉\"],\"usphone\":\"'fɝnɪs\",\"ukphone\":\"'fɜːnɪs\"},{\"name\":\"ditch\",\"trans\":[\"沟， 沟渠， 渠道\"],\"usphone\":\"dɪtʃ\",\"ukphone\":\"dɪtʃ\"},{\"name\":\"deck\",\"trans\":[\"甲板， 舱面； 层面\"],\"usphone\":\"dɛk\",\"ukphone\":\"dek\"},{\"name\":\"scare\",\"trans\":[\"吓， 使害怕； 受惊吓， 感到害怕\",\"惊恐，恐慌\"],\"usphone\":\"skɛr\",\"ukphone\":\"skeə\"},{\"name\":\"thunder\",\"trans\":[\"打雷， 轰隆响； 大声喊， 吼\",\"雷，雷声；擂鼓般的响声，轰隆声\"],\"usphone\":\"'θʌndɚ\",\"ukphone\":\"'θʌndə\"},{\"name\":\"observe\",\"trans\":[\"注意到， 观察； 评说； 遵守\"],\"usphone\":\"əb'zɝv\",\"ukphone\":\"əb'zɜːv\"},{\"name\":\"humorous\",\"trans\":[\"幽默的， 诙谐的\"],\"usphone\":\"'hjumərəs\",\"ukphone\":\"'hjuːmərəs\"},{\"name\":\"furnish\",\"trans\":[\"供应， 提供； 装备\"],\"usphone\":\"'fɝnɪʃ\",\"ukphone\":\"'fɜːnɪʃ\"},{\"name\":\"bet\",\"trans\":[\"打赌；敢说，确信\",\"打赌； 赌金， 赌注\"],\"usphone\":\"bɛt\",\"ukphone\":\"bet\"},{\"name\":\"contact\",\"trans\":[\"接触；联系，交往\",\"与…接触， 与…取得联系\"],\"usphone\":\"'kɑntækt\",\"ukphone\":\"'kɒntækt\"},{\"name\":\"rare\",\"trans\":[\"稀有的， 冷僻的； 珍奇的； 出类拔萃的； 稀薄的； 煎得嫩的\"],\"usphone\":\"rɛr\",\"ukphone\":\"reə\"},{\"name\":\"discharge\",\"trans\":[\"释放， 排出； 卸货\",\"释放， 放电\"],\"usphone\":\"dɪs'tʃɑrdʒ\",\"ukphone\":\"dɪs'tʃɑːdʒ\"},{\"name\":\"exclude\",\"trans\":[\"把…排除在外\"],\"usphone\":\"ɪk'sklʊd\",\"ukphone\":\"ɪk'skluːd\"},{\"name\":\"scary\",\"trans\":[\"引起惊慌的\"],\"usphone\":\"'skɛri\",\"ukphone\":\"'skeəri\"},{\"name\":\"criticism\",\"trans\":[\"批评， 批判； 评论， 评论文章\"],\"usphone\":\"'krɪtə'sɪzəm\",\"ukphone\":\"'krɪtɪsɪzəm\"},{\"name\":\"utmost\",\"trans\":[\"最远的\",\"极限\"],\"usphone\":\"'ʌt'most\",\"ukphone\":\"'ʌtməust\"},{\"name\":\"image\",\"trans\":[\"像； 形象； 映像； 形象的描述\"],\"usphone\":\"'ɪmɪdʒ\",\"ukphone\":\"'ɪmɪdʒ\"},{\"name\":\"consultancy\",\"trans\":[\"咨询公司\"],\"usphone\":\"kən'sʌltənsi\",\"ukphone\":\"kən'sʌltənsi\"},{\"name\":\"ribbon\",\"trans\":[\"缎带， 丝带； 色带\"],\"usphone\":\"'rɪbən\",\"ukphone\":\"'rɪbən\"},{\"name\":\"garbage\",\"trans\":[\"垃圾， 废物； 废话； 无用的资料\"],\"usphone\":\"'ɡɑrbɪdʒ\",\"ukphone\":\"'gɑːbɪdʒ\"},{\"name\":\"complain\",\"trans\":[\"抱怨， 诉苦； 控告， 投诉\"],\"usphone\":\"kəm'plen\",\"ukphone\":\"kəm'pleɪn\"},{\"name\":\"mainland\",\"trans\":[\"大陆\"],\"usphone\":\"'menlænd\",\"ukphone\":\"'meɪnlænd\"},{\"name\":\"homogeneous\",\"trans\":[\"同种类的， 同性质的， 有相同特征的\"],\"usphone\":\",homə'dʒinɪəs\",\"ukphone\":\"ˌhɒmə'dʒiːniəs\"},{\"name\":\"anxiety\",\"trans\":[\"焦虑， 忧虑； 渴望， 热望\"],\"usphone\":\"æŋ'zaɪəti\",\"ukphone\":\"æŋ'zaɪəti\"},{\"name\":\"temptation\",\"trans\":[\"诱惑， 引诱\"],\"usphone\":\"tɛmp'teʃən\",\"ukphone\":\"temp'teɪʃn\"},{\"name\":\"adjust\",\"trans\":[\"调整， 调节， 校正\"],\"usphone\":\"ə'dʒʌst\",\"ukphone\":\"ə'dʒʌst\"},{\"name\":\"popularize\",\"trans\":[\"普及\"],\"usphone\":\"'pɑpjələraɪz\",\"ukphone\":\"'pɒpjələraɪz\"},{\"name\":\"burst\",\"trans\":[\"爆裂，爆炸；挤满；突然打开；突然发作\",\"使爆炸；突然打开\",\"爆炸\"],\"usphone\":\"bɝst\",\"ukphone\":\"bɜːst\"},{\"name\":\"vigorous\",\"trans\":[\"朝气蓬勃的； 有力的， 用力的\"],\"usphone\":\"'vɪɡərəs\",\"ukphone\":\"'vɪgərəs\"},{\"name\":\"debt\",\"trans\":[\"债， 债务， 欠债\"],\"usphone\":\"dɛt\",\"ukphone\":\"det\"},{\"name\":\"refrigerator\",\"trans\":[\"冰箱， 冷藏库\"],\"usphone\":\"rɪ'frɪdʒəretɚ\",\"ukphone\":\"rɪ'frɪdʒəreɪtə\"},{\"name\":\"necessity\",\"trans\":[\"必需品； 必要性， 需要\"],\"usphone\":\"nə'sɛsəti\",\"ukphone\":\"nə'sesəti\"},{\"name\":\"fog\",\"trans\":[\"雾， 烟雾， 尘雾\"],\"usphone\":\"fɔɡ\",\"ukphone\":\"fɒg\"},{\"name\":\"frame\",\"trans\":[\"框架，框子，构架\",\"给…镶框； 陷害， 诬告； 制定； 表达\"],\"usphone\":\"frem\",\"ukphone\":\"freɪm\"},{\"name\":\"lucky\",\"trans\":[\"幸运的， 侥幸的； 吉利的\"],\"usphone\":\"'lʌki\",\"ukphone\":\"'lʌki\"},{\"name\":\"origin\",\"trans\":[\"起源， 起因； 出身， 血统\"],\"usphone\":\"'ɔrɪdʒɪn\",\"ukphone\":\"'ɒrɪdʒɪn\"},{\"name\":\"industrialize\",\"trans\":[\"工业化\"],\"usphone\":\"ɪn'dʌstrɪəlaɪz\",\"ukphone\":\"ɪn'dʌstriəlaɪz\"},{\"name\":\"clash\",\"trans\":[\"发生冲突；不协调；砰地相撞，发出刺耳的撞击声\",\"冲突； 不协调； 刺耳的撞击声\"],\"usphone\":\"klæʃ\",\"ukphone\":\"klæʃ\"},{\"name\":\"compel\",\"trans\":[\"强迫， 迫使屈服\"],\"usphone\":\"kəm'pɛl\",\"ukphone\":\"kəm'pel\"},{\"name\":\"capable\",\"trans\":[\"有能力的， 有才能的\"],\"usphone\":\"'kepəbl\",\"ukphone\":\"'keɪpəbl\"},{\"name\":\"depress\",\"trans\":[\"使沮丧； 使不景气； 削弱， 抑制\"],\"usphone\":\"dɪ'prɛs\",\"ukphone\":\"dɪ'pres\"},{\"name\":\"parade\",\"trans\":[\"游行， 列队前进； 招摇而行\",\"游行；检阅\"],\"usphone\":\"pə'red\",\"ukphone\":\"pə'reɪd\"},{\"name\":\"burden\",\"trans\":[\"重担，精神负担\",\"加重压于， 烦扰； 负担， 装载\"],\"usphone\":\"'bɝdn\",\"ukphone\":\"'bɜːdn\"},{\"name\":\"precaution\",\"trans\":[\"预防； 防备， 警惕\"],\"usphone\":\"prɪ'kɔʃən\",\"ukphone\":\"prɪ'kɔːʃn\"},{\"name\":\"lemon\",\"trans\":[\"柠檬； 柠檬树； 柠檬黄， 淡黄色\"],\"usphone\":\"'lɛmən\",\"ukphone\":\"'lemən\"},{\"name\":\"personality\",\"trans\":[\"人格， 个性； 人物， 名人\"],\"usphone\":\",pɝsə'næləti\",\"ukphone\":\"ˌpɜːsə'næləti\"},{\"name\":\"plot\",\"trans\":[\"密谋， 计划； 绘制…的平面图， 在图上标绘…的位置\",\"故事情节；计划，密谋；小块土地\"],\"usphone\":\"plɑt\",\"ukphone\":\"plɒt\"},{\"name\":\"sanction\",\"trans\":[\"批准，认可\",\"批准， 认可； 约束因素， 约束力；  国际制裁\"],\"usphone\":\"'sæŋkʃən\",\"ukphone\":\"'sæŋkʃn\"},{\"name\":\"rate\",\"trans\":[\"被评价； 被列入特定级别\",\"速度，速率；比率；价格，费用；等级\",\"评估；给…定级，把…列为；值得，应得\"],\"usphone\":\"ret\",\"ukphone\":\"reɪt\"},{\"name\":\"alert\",\"trans\":[\"警觉的，留神的，注意的\",\"使认识到，使意识到\",\"警戒， 戒备； 警报\"],\"usphone\":\"ə'lɝt\",\"ukphone\":\"ə'lɜːt\"},{\"name\":\"await\",\"trans\":[\"等候； 期待； 将降临到…身上\"],\"usphone\":\"ə'wet\",\"ukphone\":\"ə'weɪt\"},{\"name\":\"sin\",\"trans\":[\"犯戒律， 犯过失\",\"罪，罪孽\"],\"usphone\":\"sɪn\",\"ukphone\":\"sɪn\"},{\"name\":\"client\",\"trans\":[\"委托人， 当事人， 顾客\"],\"usphone\":\"'klaɪənt\",\"ukphone\":\"'klaɪənt\"},{\"name\":\"prosperity\",\"trans\":[\"繁荣， 兴旺\"],\"usphone\":\"prɑ'spɛrəti\",\"ukphone\":\"prɒ'sperəti\"},{\"name\":\"divide\",\"trans\":[\"分，分开；分配，分享；除；产生分歧\",\"分歧； 分界线， 分水岭\"],\"usphone\":\"dɪ'vaɪd\",\"ukphone\":\"dɪ'vaɪd\"},{\"name\":\"contrary\",\"trans\":[\"相反的\",\"相反\"],\"usphone\":\"'kɑntrɛri\",\"ukphone\":\"'kɒntrəri\"},{\"name\":\"lump\",\"trans\":[\"结块； 将…归并在一起\",\"块，肿块\"],\"usphone\":\"lʌmp\",\"ukphone\":\"lʌmp\"},{\"name\":\"digital\",\"trans\":[\"数字的， 数位的\"],\"usphone\":\"'dɪdʒɪtl\",\"ukphone\":\"'dɪdʒɪtl\"},{\"name\":\"brilliant\",\"trans\":[\"光辉的； 卓越的\"],\"usphone\":\"'brɪljənt\",\"ukphone\":\"'brɪliənt\"},{\"name\":\"historic\",\"trans\":[\"历史上著名的， 具有重大历史意义的\"],\"usphone\":\"hɪ'stɔrɪk\",\"ukphone\":\"hɪ'stɒrɪk\"},{\"name\":\"oven\",\"trans\":[\"炉， 烤箱\"],\"usphone\":\"ˈʌvən\",\"ukphone\":\"'ʌvn\"},{\"name\":\"bound\",\"trans\":[\"跳跃；弹回，反跃\",\"一定的；有义务的\",\"跳跃；弹回，反跃；成为…的界限，给…划界\",\"跳跃； 界限， 限制\"],\"usphone\":\"baʊnd\",\"ukphone\":\"baund\"},{\"name\":\"counter\",\"trans\":[\"柜台； 计数器； 筹码\"],\"usphone\":\"'kaʊntɚ\",\"ukphone\":\"'kauntə\"},{\"name\":\"rhythm\",\"trans\":[\"韵律， 节奏\"],\"usphone\":\"'rɪðəm\",\"ukphone\":\"'rɪðəm\"},{\"name\":\"stroke\",\"trans\":[\"中风；一举，一次努力；划桨，划水；击，敲；报时的钟声；笔画，一笔；抚摸\",\"抚摸\"],\"usphone\":\"strok\",\"ukphone\":\"strəuk\"},{\"name\":\"breed\",\"trans\":[\"繁殖； 养育， 培育； 酿成， 产生\",\"品种\"],\"usphone\":\"brid\",\"ukphone\":\"briːd\"},{\"name\":\"management\",\"trans\":[\"管理； 处理； 管理部门； 管理人员\"],\"usphone\":\"'mænɪdʒmənt\",\"ukphone\":\"'mænɪdʒmənt\"},{\"name\":\"publish\",\"trans\":[\"公布， 发表； 出版， 刊印\"],\"usphone\":\"'pʌblɪʃ\",\"ukphone\":\"'pʌblɪʃ\"},{\"name\":\"realm\",\"trans\":[\"界， 领域， 范围； 王国， 国度\"],\"usphone\":\"rɛlm\",\"ukphone\":\"relm\"},{\"name\":\"correspondent\",\"trans\":[\"通讯员， 记者\"],\"usphone\":\",kɔrə'spɑndənt\",\"ukphone\":\"ˌkɒrə'spɒndənt\"},{\"name\":\"avoid\",\"trans\":[\"避免， 躲开； 撤销\"],\"usphone\":\"ə'vɔɪd\",\"ukphone\":\"ə'vɔɪd\"},{\"name\":\"renew\",\"trans\":[\"重新开始， 继续； 更新； 恢复； 延长有效期\"],\"usphone\":\"rɪ'nʊ\",\"ukphone\":\"rɪ'njuː\"},{\"name\":\"bid\",\"trans\":[\"企图，努力；喊价，出价，投标\",\"喊价， 投标， 出； 祝， 表示； 命令\"],\"usphone\":\"bɪd\",\"ukphone\":\"bɪd\"},{\"name\":\"prompt\",\"trans\":[\"敏捷的，及时的\",\"促使，推动；提示\",\"提示台词， 提示\"],\"usphone\":\"prɑmpt\",\"ukphone\":\"prɒmpt\"},{\"name\":\"astonish\",\"trans\":[\"使惊讶， 使吃惊\"],\"usphone\":\"ə'stɑnɪʃ\",\"ukphone\":\"ə'stɒnɪʃ\"},{\"name\":\"comprehensive\",\"trans\":[\"广泛的， 综合的； 理解的\"],\"usphone\":\"ˌkɑːmprɪˈhensɪv\",\"ukphone\":\"ˌkɒmprɪ'hensɪv\"},{\"name\":\"tunnel\",\"trans\":[\"挖， 开\",\"隧道，坑道，地道\"],\"usphone\":\"'tʌnl\",\"ukphone\":\"'tʌnl\"},{\"name\":\"withdraw\",\"trans\":[\"收回， 撤回； 撤退\"],\"usphone\":\"wɪð'drɔ\",\"ukphone\":\"wɪð'drɔː; wɪθ'drɔː\"},{\"name\":\"assign\",\"trans\":[\"指派， 分配， 布置； 指定\"],\"usphone\":\"ə'saɪn\",\"ukphone\":\"ə'saɪn\"},{\"name\":\"elaborate\",\"trans\":[\"复杂的； 精心制作的\",\"详述， 详细制订\"],\"usphone\":\"ɪ'læbəret\",\"ukphone\":\"ɪ'læb(ə)rət\"},{\"name\":\"feather\",\"trans\":[\"羽毛， 翎毛\"],\"usphone\":\"'fɛðɚ\",\"ukphone\":\"'feðə\"},{\"name\":\"corridor\",\"trans\":[\"走廊， 回廊， 通路\"],\"usphone\":\"'kɔrɪdɔr\",\"ukphone\":\"'kɒrɪdɔː\"},{\"name\":\"decade\",\"trans\":[\"十年， 十年期\"],\"usphone\":\"'dɛked\",\"ukphone\":\"'dekeɪd\"},{\"name\":\"expert\",\"trans\":[\"熟练的\",\"专家\"],\"usphone\":\"'ɛkspɝt; (for adj., also) ɛksˈpɝt ; ɪkˈspɝt\",\"ukphone\":\"'ekspɜːt\"},{\"name\":\"select\",\"trans\":[\"精选的， 挑选出来的； 优等的， 第一流的\",\"选择，挑选\"],\"usphone\":\"sə'lɛkt\",\"ukphone\":\"sɪ'lekt\"},{\"name\":\"fulfill\",\"trans\":[\"履行， 实现， 完成； 满足， 使满意\"],\"usphone\":\"\",\"ukphone\":\"ful'fɪl\"},{\"name\":\"crowd\",\"trans\":[\"聚集； 挤满； 挤； 推\",\"群，一批\"],\"usphone\":\"kraʊd\",\"ukphone\":\"kraud\"},{\"name\":\"congress\",\"trans\":[\"代表大会； [C-]国会， 议会\"],\"usphone\":\"'kɑŋɡrəs\",\"ukphone\":\"'kɒŋgres\"},{\"name\":\"advanced\",\"trans\":[\"先进的； 高级的； 年迈的； 后阶段的\"],\"usphone\":\"əd'vænst\",\"ukphone\":\"əd'vɑːnst\"},{\"name\":\"mechanical\",\"trans\":[\"机械的， 机械制造的； 机械学的， 力学的； 呆板的\"],\"usphone\":\"mɪ'kænɪkəl\",\"ukphone\":\"mə'kænɪkl\"},{\"name\":\"recommendation\",\"trans\":[\"推荐， 推荐信； 建议； 优点， 可取之处\"],\"usphone\":\",rɛkəmɛn'deʃən\",\"ukphone\":\"ˌrekəmen'deɪʃn\"},{\"name\":\"welfare\",\"trans\":[\"幸福； 福利， 福利救济\"],\"usphone\":\"'wɛl'fɛr\",\"ukphone\":\"'welfeə\"},{\"name\":\"flourish\",\"trans\":[\"繁荣，茂盛，兴旺\",\"挥动\"],\"usphone\":\"ˈflɜːrɪʃ\",\"ukphone\":\"'flʌrɪʃ\"},{\"name\":\"output\",\"trans\":[\"产量；输出；输出功率\",\"输出\"],\"usphone\":\"'aʊtpʊt\",\"ukphone\":\"'autput\"},{\"name\":\"fatigue\",\"trans\":[\"疲劳\",\"疲劳，劳累\"],\"usphone\":\"fə'tig\",\"ukphone\":\"fə'tiːg\"},{\"name\":\"striking\",\"trans\":[\"显著的， 突出的； 惹人注目的， 容貌出众的\"],\"usphone\":\"'straɪkɪŋ\",\"ukphone\":\"'straɪkɪŋ\"},{\"name\":\"vessel\",\"trans\":[\"容器； 船； 飞船； 管\"],\"usphone\":\"'vɛsl\",\"ukphone\":\"'vesl\"},{\"name\":\"majority\",\"trans\":[\"多数， 大多数\"],\"usphone\":\"mə'dʒɔrəti\",\"ukphone\":\"mə'dʒɒrəti\"},{\"name\":\"drag\",\"trans\":[\"拖，拉；迫使，硬拉；拖着脚步走\",\"累赘； 一吸， 一抽\"],\"usphone\":\"dræg\",\"ukphone\":\"dræg\"},{\"name\":\"crown\",\"trans\":[\"王冠， 冕\"],\"usphone\":\"kraʊn\",\"ukphone\":\"kraun\"},{\"name\":\"likely\",\"trans\":[\"可能\",\"可能的；适合的\"],\"usphone\":\"'laɪkli\",\"ukphone\":\"'laɪkli\"},{\"name\":\"inquire\",\"trans\":[\"打听， 询问； 调查\"],\"usphone\":\"ɪn'kwaɪr\",\"ukphone\":\"ɪn'kwaɪə\"},{\"name\":\"gymnasium\",\"trans\":[\"体育馆， 健身房\"],\"usphone\":\"dʒɪm'nezɪəm\",\"ukphone\":\"dʒɪm'neɪziəm\"},{\"name\":\"issue\",\"trans\":[\"发行， 分发， 发出\",\"问题；发行，分发\"],\"usphone\":\"'ɪʃu\",\"ukphone\":\"'ɪʃu:\"},{\"name\":\"vain\",\"trans\":[\"徒劳的； 自负的\"],\"usphone\":\"ven\",\"ukphone\":\"veɪn\"},{\"name\":\"lower\",\"trans\":[\"较低的；下面的\",\"放下， 降低\"],\"usphone\":\"'loɚ\",\"ukphone\":\"'ləuə\"},{\"name\":\"index\",\"trans\":[\"索引； 指数， 指标\"],\"usphone\":\"'ɪndɛks\",\"ukphone\":\"'ɪndeks\"},{\"name\":\"fry\",\"trans\":[\"油煎， 油炸， 油炒\"],\"usphone\":\"fraɪ\",\"ukphone\":\"fraɪ\"},{\"name\":\"youngster\",\"trans\":[\"青年， 年轻人， 孩子\"],\"usphone\":\"'jʌŋstɚ\",\"ukphone\":\"'jʌŋstə\"},{\"name\":\"odd\",\"trans\":[\"奇特的； 临时的； 奇数的； 单只的； 剩余的， 挂零的\"],\"usphone\":\"ɑd\",\"ukphone\":\"ɒd\"},{\"name\":\"lung\",\"trans\":[\"肺\"],\"usphone\":\"lʌŋ\",\"ukphone\":\"lʌŋ\"},{\"name\":\"conservation\",\"trans\":[\"保存； 保护； 守恒\"],\"usphone\":\",kɑnsɚ'veʃən\",\"ukphone\":\"ˌkɒnsə'veɪʃn\"},{\"name\":\"distraction\",\"trans\":[\"分心的事； 心烦意乱； 精神错乱； 娱乐， 消遣\"],\"usphone\":\"dɪ'strækʃən\",\"ukphone\":\"dɪ'strækʃn\"},{\"name\":\"supplement\",\"trans\":[\"增补， 补充； 增刊， 副刊\",\"增补， 补充\"],\"usphone\":\"'sʌplɪmənt\",\"ukphone\":\"'sʌplɪm(ə)nt\"},{\"name\":\"contrast\",\"trans\":[\"形成对比， 对比之下显出区别\",\"对比， 对照； 反差\",\"对比，对照\"],\"usphone\":\"'kɑntræst\",\"ukphone\":\"'kɒntrɑːst\"},{\"name\":\"paragraph\",\"trans\":[\"段， 节\"],\"usphone\":\"'pærəɡræf\",\"ukphone\":\"'pærəgrɑːf\"},{\"name\":\"judgement\",\"trans\":[\"意见； 审判； 判断\"],\"usphone\":\"'dʒʌdʒmənt\",\"ukphone\":\"'dʒʌdʒmənt\"},{\"name\":\"proportion\",\"trans\":[\"比例； 部分， 份儿； 均衡， 相称\"],\"usphone\":\"prə'pɔrʃən\",\"ukphone\":\"prə'pɔːʃn\"},{\"name\":\"widen\",\"trans\":[\"加宽， 变宽\"],\"usphone\":\"'waɪdn\",\"ukphone\":\"'waɪdn\"},{\"name\":\"crystal\",\"trans\":[\"水晶， 结晶体， 晶粒\"],\"usphone\":\"'krɪstl\",\"ukphone\":\"'krɪstl\"},{\"name\":\"occurrence\",\"trans\":[\"发生， 出现； 发生的事件\"],\"usphone\":\"ə'kʌrəns\",\"ukphone\":\"ə'kʌrəns\"},{\"name\":\"inflation\",\"trans\":[\"通货膨胀； 膨胀\"],\"usphone\":\"ɪn'fleʃən\",\"ukphone\":\"ɪn'fleɪʃn\"},{\"name\":\"thinking\",\"trans\":[\"深思的， 有理性的\",\"想法，意见，见解\"],\"usphone\":\"'θɪŋkɪŋ\",\"ukphone\":\"'θɪŋkɪŋ\"},{\"name\":\"cycle\",\"trans\":[\"循环（周期）\",\"骑自行车\"],\"usphone\":\"'saɪkl\",\"ukphone\":\"'saɪkl\"},{\"name\":\"disposal\",\"trans\":[\"丢掉， 销毁； 处理； 排列， 布置\"],\"usphone\":\"dɪ'spozl\",\"ukphone\":\"dɪ'spəuzl\"},{\"name\":\"settlement\",\"trans\":[\"解决； 协议； 居留地\"],\"usphone\":\"'sɛtlmənt\",\"ukphone\":\"'setlmənt\"},{\"name\":\"delegate\",\"trans\":[\"代表， 代表团成员\",\"委派…为代表； 授 ， 把…委托给\"],\"usphone\":\"ˈdɛləgɪt; (for v.,) ˈdɛləˌgeɪt\",\"ukphone\":\"ˈdɛlɪˌɡeɪt; -ɡɪt; (for v.,) ˈdɛlɪˌɡeɪt\"},{\"name\":\"literature\",\"trans\":[\"文学， 文学作品； 文献， 图书资料\"],\"usphone\":\"lɪtərəˌtʃʊr\",\"ukphone\":\"'lɪtrətʃə\"},{\"name\":\"sphere\",\"trans\":[\"球， 球体； 范围\"],\"usphone\":\"sfɪr\",\"ukphone\":\"sfɪə\"},{\"name\":\"inquiry\",\"trans\":[\"询问， 打听； 调查\"],\"usphone\":\"ɪn'kwaɪri; 'ɪn,kwaɪri; 'ɪnkwəri; 'ɪŋkwaɪri\",\"ukphone\":\"ɪn'kwaɪəri\"},{\"name\":\"prejudice\",\"trans\":[\"偏见，成见\",\"使有偏见； 对…不利， 损害\"],\"usphone\":\"'prɛdʒədɪs\",\"ukphone\":\"'predʒudɪs\"},{\"name\":\"dissolve\",\"trans\":[\"溶解； 解散； 消失， 减弱； 结束\"],\"usphone\":\"dɪ'zɑlv\",\"ukphone\":\"dɪ'zɒlv\"},{\"name\":\"digest\",\"trans\":[\"消化； 领会\",\"文摘； 摘要\"],\"usphone\":\"daɪ'dʒɛst\",\"ukphone\":\"daɪ'dʒest; dɪ-\"},{\"name\":\"angle\",\"trans\":[\"角， 角度； 观点， 立场\"],\"usphone\":\"'æŋɡl\",\"ukphone\":\"'æŋgl\"},{\"name\":\"immigrant\",\"trans\":[\"移民， 侨民\"],\"usphone\":\"'ɪmɪɡrənt\",\"ukphone\":\"'ɪmɪgrənt\"},{\"name\":\"tradition\",\"trans\":[\"传统， 惯例\"],\"usphone\":\"trə'dɪʃən\",\"ukphone\":\"trə'dɪʃn\"},{\"name\":\"ability\",\"trans\":[\"能力， 本领； 才能， 才智\"],\"usphone\":\"əˈbɪlətɪ\",\"ukphone\":\"ə'bɪləti\"},{\"name\":\"urgent\",\"trans\":[\"紧急的， 急迫的\"],\"usphone\":\"'ɝdʒənt\",\"ukphone\":\"'ɜːdʒənt\"},{\"name\":\"belief\",\"trans\":[\"信任， 相信； 信念\"],\"usphone\":\"bɪ'lif\",\"ukphone\":\"bɪ'liːf\"},{\"name\":\"bundle\",\"trans\":[\"捆，包，束；包袱\",\"收集， 归拢； 把…塞入\"],\"usphone\":\"'bʌndl\",\"ukphone\":\"'bʌndl\"},{\"name\":\"suggestion\",\"trans\":[\"建议， 意见； 细微的迹象； 暗示\"],\"usphone\":\"sə'dʒɛstʃən\",\"ukphone\":\"sə'dʒestʃən\"},{\"name\":\"systematic\",\"trans\":[\"有系统的， 有计划的\"],\"usphone\":\"'sɪstə'mætɪk\",\"ukphone\":\"ˌsɪstə'mætɪk(l)\"},{\"name\":\"cupboard\",\"trans\":[\"柜橱；  碗碟橱， 食橱\"],\"usphone\":\"'kʌbɚd\",\"ukphone\":\"'kʌbəd\"},{\"name\":\"generally\",\"trans\":[\"一般地， 通常地； 普遍地\"],\"usphone\":\"'dʒɛnrəli\",\"ukphone\":\"'dʒenərəli\"},{\"name\":\"bacon\",\"trans\":[\"咸肉\"],\"usphone\":\"'bekən\",\"ukphone\":\"'beɪkən\"},{\"name\":\"likewise\",\"trans\":[\"同样地； 也， 又\"],\"usphone\":\"'laɪkwaɪz\",\"ukphone\":\"'laɪkwaɪz\"},{\"name\":\"slender\",\"trans\":[\"细长的， 苗条的； 微薄的， 不足的\"],\"usphone\":\"'slɛndɚ\",\"ukphone\":\"'slendə(r)\"},{\"name\":\"troublesome\",\"trans\":[\"令人烦恼的， 麻烦的\"],\"usphone\":\"'trʌblsəm\",\"ukphone\":\"'trʌblsəm\"},{\"name\":\"instruction\",\"trans\":[\"命令， 指示； 用法说明； 教学， 教导\"],\"usphone\":\"ɪn'strʌkʃən\",\"ukphone\":\"ɪn'strʌkʃn\"},{\"name\":\"oral\",\"trans\":[\"口头的； 口的\"],\"usphone\":\"'ɔrəl\",\"ukphone\":\"'ɔːrəl\"},{\"name\":\"married\",\"trans\":[\"已婚的； 婚姻的\"],\"usphone\":\"'mærɪd\",\"ukphone\":\"'mærid\"},{\"name\":\"transaction\",\"trans\":[\"办理， 处理； 交易， 业务； 会报， 学报\"],\"usphone\":\"træn'zækʃən\",\"ukphone\":\"træn'zækʃn\"},{\"name\":\"conscious\",\"trans\":[\"意识到的， 自觉的； 神志清醒的； 有意的， 存心的\"],\"usphone\":\"'kɑnʃəs\",\"ukphone\":\"'kɒnʃəs\"},{\"name\":\"fur\",\"trans\":[\"软毛， 毛皮， 裘皮； 毛皮衣服\"],\"usphone\":\"fɝ\",\"ukphone\":\"fɜː\"},{\"name\":\"auto\",\"trans\":[\"汽车\"],\"usphone\":\"'ɔto\",\"ukphone\":\"'ɔːtəu\"},{\"name\":\"sigh\",\"trans\":[\"叹气， 叹息\",\"叹息\"],\"usphone\":\"saɪ\",\"ukphone\":\"saɪ\"},{\"name\":\"constant\",\"trans\":[\"经常的，不断的，连续发生的；永恒的；忠实的，忠诚的\",\"常数， 恒量\"],\"usphone\":\"'kɑnstənt\",\"ukphone\":\"'kɒnstənt\"},{\"name\":\"pants\",\"trans\":[\"长裤， 便裤； 内裤\"],\"usphone\":\"pænts\",\"ukphone\":\"pænts\"},{\"name\":\"mislead\",\"trans\":[\"给…错误印象， 使误解； 把…带错路； 使误入歧途\"],\"usphone\":\"'mɪs'lid\",\"ukphone\":\"ˌmɪs'liːd\"},{\"name\":\"split\",\"trans\":[\"分裂，分离；被撕裂，裂开；分担，分享\",\"裂口\"],\"usphone\":\"splɪt\",\"ukphone\":\"splɪt\"},{\"name\":\"orchestra\",\"trans\":[\"管弦乐队\"],\"usphone\":\"'ɔrkɪstrə\",\"ukphone\":\"'ɔːkɪstrə\"},{\"name\":\"publication\",\"trans\":[\"出版， 发行； 公布， 发表\"],\"usphone\":\",pʌblɪ'keʃən\",\"ukphone\":\"ˌpʌblɪ'keɪʃn\"},{\"name\":\"sufficient\",\"trans\":[\"足够的， 充分的\"],\"usphone\":\"səˈfɪʃənt\",\"ukphone\":\"sə'fɪʃnt\"},{\"name\":\"claim\",\"trans\":[\"声称，主张；对…提出要求，索取；以…为其成果；需要，值得\",\"要求， 认领， 索赔； 声称； 断言\"],\"usphone\":\"klem\",\"ukphone\":\"kleɪm\"},{\"name\":\"antique\",\"trans\":[\"古时的， 过时的\",\"古物，古董\"],\"usphone\":\"æn'tik\",\"ukphone\":\"æn'tiːk\"},{\"name\":\"sow\",\"trans\":[\"播， 播种\"],\"usphone\":\"so\",\"ukphone\":\"səu\"},{\"name\":\"widespread\",\"trans\":[\"分布广的， 普遍的\"],\"usphone\":\"ˈwʌɪdsprɛd\",\"ukphone\":\"'waɪdspred\"},{\"name\":\"petroleum\",\"trans\":[\"石油\"],\"usphone\":\"pə'trolɪəm\",\"ukphone\":\"pə'trəuliəm\"},{\"name\":\"communication\",\"trans\":[\"通讯， 交流， 交际； 通信工具， 交通联系\"],\"usphone\":\"kə,mjunɪ'keʃən\",\"ukphone\":\"kəˌmjuːnɪ'keɪʃn\"},{\"name\":\"directly\",\"trans\":[\"直接地； 正好地， 截然； 立即\"],\"usphone\":\"dəˈrektli\",\"ukphone\":\"dɪ'rektli; daɪ'rektli\"},{\"name\":\"tolerance\",\"trans\":[\"忍受， 容忍， 忍耐力； 公差\"],\"usphone\":\"'tɑlərəns\",\"ukphone\":\"'tɒlərəns\"},{\"name\":\"kneel\",\"trans\":[\"跪， 跪下， 跪着\"],\"usphone\":\"nil\",\"ukphone\":\"niːl\"},{\"name\":\"porter\",\"trans\":[\"搬运工人； 看门人， 大楼管理员\"],\"usphone\":\"'pɔrtɚ\",\"ukphone\":\"'pɔːtə\"},{\"name\":\"fasten\",\"trans\":[\"扎牢， 扣住\"],\"usphone\":\"'fæsən\",\"ukphone\":\"'fɑːsn\"},{\"name\":\"contest\",\"trans\":[\"竞赛， 争夺\",\"争夺， 与…竞争； 对…提出质疑， 辩驳\"],\"usphone\":\"kən'tɛst\",\"ukphone\":\"'kɒntest\"},{\"name\":\"author\",\"trans\":[\"著作家， 作者\"],\"usphone\":\"'ɔθɚ\",\"ukphone\":\"'ɔːθə\"},{\"name\":\"dirt\",\"trans\":[\"灰尘， 土； 污物， 污垢\"],\"usphone\":\"dɝt\",\"ukphone\":\"dɜːt\"},{\"name\":\"astrophysics\",\"trans\":[\"天体物理学\"],\"usphone\":\",æstro'fɪzɪks\",\"ukphone\":\"ˌæstrəu'fɪzɪks\"},{\"name\":\"greenhouse\",\"trans\":[\"温室， 暖房\"],\"usphone\":\"'ɡrinhaʊs\",\"ukphone\":\"'griːnhaus\"},{\"name\":\"preserve\",\"trans\":[\"保护， 维持； 保存； 腌制\"],\"usphone\":\"prɪ'zɝv\",\"ukphone\":\"prɪ'zɜːv\"},{\"name\":\"plus\",\"trans\":[\"表示加的；正的\",\"加，加上\",\"加号， 正号\"],\"usphone\":\"plʌs\",\"ukphone\":\"plʌs\"},{\"name\":\"establish\",\"trans\":[\"建立， 设立； 确立； 证实\"],\"usphone\":\"ɪˈstæblɪʃ\",\"ukphone\":\"ɪ'stæblɪʃ\"},{\"name\":\"expansion\",\"trans\":[\"扩大， 扩充， 扩张， 膨胀\"],\"usphone\":\"ɪk'spænʃən\",\"ukphone\":\"ɪk'spænʃn\"},{\"name\":\"relevant\",\"trans\":[\"有关的， 切题的\"],\"usphone\":\"'rɛləvənt\",\"ukphone\":\"'reləvənt\"},{\"name\":\"entry\",\"trans\":[\"入口处； 登记； 进入； 参赛者名单； 条目\"],\"usphone\":\"'ɛntri\",\"ukphone\":\"'entri\"},{\"name\":\"license\",\"trans\":[\"许可，执照\",\"准许\"],\"usphone\":\"'laɪsns\",\"ukphone\":\"'laɪsns\"},{\"name\":\"synthetic\",\"trans\":[\"综合的， 合成的； 虚假的\"],\"usphone\":\"sɪn'θɛtɪk\",\"ukphone\":\"sɪn'θetɪk\"},{\"name\":\"headquarters\",\"trans\":[\"司令部， 总部\"],\"usphone\":\"'hɛdkwɔrtɚz\",\"ukphone\":\"ˌhed'kwɔːtəz\"},{\"name\":\"expand\",\"trans\":[\"扩大， 使膨胀\"],\"usphone\":\"ɪk'spænd\",\"ukphone\":\"ɪk'spænd\"},{\"name\":\"gaze\",\"trans\":[\"凝视， 盯， 注视\"],\"usphone\":\"ɡeɪz\",\"ukphone\":\"geɪz\"},{\"name\":\"essay\",\"trans\":[\"短文， 散文， 小品文\"],\"usphone\":\"'ɛse\",\"ukphone\":\"'eseɪ\"},{\"name\":\"survey\",\"trans\":[\"俯瞰； 检查； 测量\",\"调查， 勘察； 测量， 勘测； 全面审视， 概括论述\"],\"usphone\":\"ˈsɝˌve; (for v.) sɝˈve\",\"ukphone\":\"ˈsəːveɪ; (for v.) səˈveɪ\"},{\"name\":\"plug\",\"trans\":[\"插头，插座；塞子，栓\",\"把…塞住， 用…塞住\"],\"usphone\":\"plʌɡ\",\"ukphone\":\"plʌg\"},{\"name\":\"bunch\",\"trans\":[\"集中， 挤在一起； 形成一束\",\"群，伙；束，串，捆\",\"使成一束\"],\"usphone\":\"bʌntʃ\",\"ukphone\":\"bʌntʃ\"},{\"name\":\"thermometer\",\"trans\":[\"温度计， 寒暑表\"],\"usphone\":\"θɚ'mɑmɪtɚ\",\"ukphone\":\"θə'mɒmɪtə\"},{\"name\":\"tense\",\"trans\":[\"拉紧的；紧张的\",\"拉紧， 绷紧\",\"时态\"],\"usphone\":\"tɛns\",\"ukphone\":\"tens\"},{\"name\":\"postpone\",\"trans\":[\"延迟， 延期\"],\"usphone\":\"po'spon\",\"ukphone\":\"pə'spəun\"},{\"name\":\"bride\",\"trans\":[\"新娘\"],\"usphone\":\"braɪd\",\"ukphone\":\"braɪd\"},{\"name\":\"favourable\",\"trans\":[\"有利的， 赞成的； 顺利的\"],\"usphone\":\"'feivərəbl\",\"ukphone\":\"'feɪvərəbl\"},{\"name\":\"hammer\",\"trans\":[\"锤击\",\"锤，榔头\"],\"usphone\":\"'hæmɚ\",\"ukphone\":\"'hæmə\"},{\"name\":\"candy\",\"trans\":[\"糖果\"],\"usphone\":\"ˈkændɪ\",\"ukphone\":\"'kændi\"},{\"name\":\"seal\",\"trans\":[\"封铅，封条；印，图章；海豹\",\"封\"],\"usphone\":\"sil\",\"ukphone\":\"siːl\"},{\"name\":\"mental\",\"trans\":[\"心理的， 精神的， 思想上的； 精神病的； 智力的\"],\"usphone\":\"'mɛntl\",\"ukphone\":\"'mentl\"},{\"name\":\"decent\",\"trans\":[\"像样的， 过得去的， 体面的； 宽厚的， 大方的； 正派的； 合乎礼仪的， 得体的\"],\"usphone\":\"'disnt\",\"ukphone\":\"'diːsnt\"},{\"name\":\"storage\",\"trans\":[\"贮藏； 贮藏量\"],\"usphone\":\"'stɔrɪdʒ\",\"ukphone\":\"'stɔːrɪdʒ\"},{\"name\":\"investigate\",\"trans\":[\"调查， 研究\"],\"usphone\":\"ɪn'vɛstɪɡet\",\"ukphone\":\"ɪn'vestɪgeɪt\"},{\"name\":\"racial\",\"trans\":[\"种族的， 人种的\"],\"usphone\":\"'reʃl\",\"ukphone\":\"'reɪʃl\"},{\"name\":\"switch\",\"trans\":[\"转换， 改变\",\"开关，电闸；转换，改变\"],\"usphone\":\"swɪtʃ\",\"ukphone\":\"swɪtʃ\"},{\"name\":\"niece\",\"trans\":[\"侄女， 外甥女\"],\"usphone\":\"nis\",\"ukphone\":\"niːs\"},{\"name\":\"considerable\",\"trans\":[\"相当大的； 重要的\"],\"usphone\":\"kən'sɪdərəbl\",\"ukphone\":\"kən'sɪdərəbl\"},{\"name\":\"auxiliary\",\"trans\":[\"辅助的， 附属的； 后备的\"],\"usphone\":\"ɔːɡ'zɪlɪəri\",\"ukphone\":\"ɔːg'zɪliəri\"},{\"name\":\"heal\",\"trans\":[\"愈合， 痊愈， 恢复健康\",\"使愈合，治愈，使康复；调停，消除\"],\"usphone\":\"hil\",\"ukphone\":\"hiːl\"},{\"name\":\"reserve\",\"trans\":[\"保留，留存；预订\",\"储备； 保留； 拘谨， 矜持； 替补队员， 后备部队； 自然保护区\"],\"usphone\":\"rɪ'zɝv\",\"ukphone\":\"rɪ'zɜːv\"},{\"name\":\"somehow\",\"trans\":[\"由于某种原因， 不知怎么的； 以某种方式\"],\"usphone\":\"'sʌmhaʊ\",\"ukphone\":\"'sʌmhau\"},{\"name\":\"dive\",\"trans\":[\"跳水； 潜水；  俯冲\"],\"usphone\":\"daɪv\",\"ukphone\":\"daɪv\"},{\"name\":\"brick\",\"trans\":[\"砖， 砖块， 砖状物\"],\"usphone\":\"brɪk\",\"ukphone\":\"brɪk\"},{\"name\":\"sympathy\",\"trans\":[\"同情； 一致， 支持， 赞同\"],\"usphone\":\"'sɪmpəθi\",\"ukphone\":\"'sɪmpəθi\"},{\"name\":\"heap\",\"trans\":[\"堆， 大量\"],\"usphone\":\"hip\",\"ukphone\":\"hiːp\"},{\"name\":\"consumer\",\"trans\":[\"消费者， 用户， 消耗者\"],\"usphone\":\"kən'sumɚ\",\"ukphone\":\"kən'sjuːmə\"},{\"name\":\"rescue\",\"trans\":[\"营救， 救援\"],\"usphone\":\"'rɛskju\",\"ukphone\":\"'reskjuː\"},{\"name\":\"cripple\",\"trans\":[\"跛子；残疾人\",\"使跛； 使残疾\"],\"usphone\":\"'krɪpl\",\"ukphone\":\"'krɪpl\"},{\"name\":\"highly\",\"trans\":[\"高度地， 极， 非常赞许地\"],\"usphone\":\"'haɪli\",\"ukphone\":\"'haɪli\"},{\"name\":\"brief\",\"trans\":[\"简短的，短暂的\",\"向…介绍基本情况，做…的提要\",\"概要， 摘要\"],\"usphone\":\"brif\",\"ukphone\":\"briːf\"},{\"name\":\"keyboard\",\"trans\":[\"键盘\"],\"usphone\":\"'ki'bɔrd\",\"ukphone\":\"'kiːbɔːd\"},{\"name\":\"initiative\",\"trans\":[\"主动性； 首创精神； 主动的行动， 倡议； 主动权\"],\"usphone\":\"ɪ'nɪʃətɪv\",\"ukphone\":\"ɪ'nɪʃətɪv\"},{\"name\":\"recover\",\"trans\":[\"重新获得， 挽回； 恢复\"],\"usphone\":\"rɪ'kʌvɚ\",\"ukphone\":\"rɪ'kʌvə\"},{\"name\":\"determine\",\"trans\":[\"决意\",\"决定；查明；使下决心\"],\"usphone\":\"dɪ'tɝmɪn\",\"ukphone\":\"dɪ'tɜːmɪn\"},{\"name\":\"nature\",\"trans\":[\"大自然； 本性； 性质\"],\"usphone\":\"'netʃɚ\",\"ukphone\":\"'neɪtʃə\"},{\"name\":\"social\",\"trans\":[\"社会的； 交际的， 社交的\"],\"usphone\":\"'soʃl\",\"ukphone\":\"'səuʃl\"},{\"name\":\"medication\",\"trans\":[\"药物治疗； 药物\"],\"usphone\":\"'mɛdɪ'keʃən\",\"ukphone\":\"ˌmedi'keɪʃn\"},{\"name\":\"drill\",\"trans\":[\"钻， 打； 训练\",\"钻头；操练，训练\"],\"usphone\":\"drɪl\",\"ukphone\":\"drɪl\"},{\"name\":\"intelligent\",\"trans\":[\"聪明的， 理智的\"],\"usphone\":\"ɪn'tɛlɪdʒənt\",\"ukphone\":\"ɪn'telɪdʒənt\"},{\"name\":\"whilst\",\"trans\":[\"当…的时候\"],\"usphone\":\"hwailst\",\"ukphone\":\"waɪlst\"},{\"name\":\"clerk\",\"trans\":[\"店员， 办事员， 职员\"],\"usphone\":\"klɝk\",\"ukphone\":\"klɑːk\"},{\"name\":\"lobby\",\"trans\":[\"向进行游说\",\"大厅；休息室；院外活动集团\"],\"usphone\":\"'lɑbi\",\"ukphone\":\"'lɒbi\"},{\"name\":\"acknowledge\",\"trans\":[\"承认， 承认…的权威； 告知收到， 确认； 对…表示感谢， 报偿\"],\"usphone\":\"ək'nɑlɪdʒ\",\"ukphone\":\"ək'nɒlɪdʒ\"},{\"name\":\"equip\",\"trans\":[\"装备， 配备； 使有准备\"],\"usphone\":\"ɪ'kwɪp\",\"ukphone\":\"ɪ'kwɪp\"},{\"name\":\"radiation\",\"trans\":[\"放射物， 辐射能； 辐射\"],\"usphone\":\",redɪ'eʃən\",\"ukphone\":\"ˌreɪdi'eɪʃn\"},{\"name\":\"Christian\",\"trans\":[\"基督教的\",\"基督教徒，信徒\"],\"usphone\":\"'krɪstʃən\",\"ukphone\":\"'krɪstʃən\"},{\"name\":\"pulse\",\"trans\":[\"搏动， 跳动\",\"脉搏；脉冲\"],\"usphone\":\"pʌls\",\"ukphone\":\"pʌls\"},{\"name\":\"luxury\",\"trans\":[\"奢侈； 奢侈品\"],\"usphone\":\"'lʌɡʒəri\",\"ukphone\":\"'lʌkʃəri\"},{\"name\":\"spiritual\",\"trans\":[\"精神的， 心灵的； 宗教的\"],\"usphone\":\"'spɪrɪtʃʊəl\",\"ukphone\":\"'spɪrɪtʃuəl\"},{\"name\":\"worthwhile\",\"trans\":[\"值得花时间的， 值得做的\"],\"usphone\":\"'wɝθ'waɪl\",\"ukphone\":\"'wɜːθ'waɪl\"},{\"name\":\"mould\",\"trans\":[\"霉，霉菌；模型，铸模；性格，气质\",\"用模子做， 浇铸； 使形成， 把…铸造成\"],\"usphone\":\"məuld\",\"ukphone\":\"məuld\"},{\"name\":\"increasingly\",\"trans\":[\"日益， 越来越多地\"],\"usphone\":\"ɪn'krisɪŋli\",\"ukphone\":\"ɪn'krɪːsɪŋli\"},{\"name\":\"elbow\",\"trans\":[\"肘，肘部\",\"用肘部， 用肘挤\"],\"usphone\":\"'ɛlbo\",\"ukphone\":\"'elbəu\"},{\"name\":\"salad\",\"trans\":[\"色拉， 凉拌菜\"],\"usphone\":\"'sæləd\",\"ukphone\":\"'sæləd\"},{\"name\":\"strategic\",\"trans\":[\"对全局有重要意义的， 关键的； 战略的\"],\"usphone\":\"strə'tidʒɪk\",\"ukphone\":\"strə'tiːdʒɪk\"},{\"name\":\"vary\",\"trans\":[\"改变； 多样化\"],\"usphone\":\"ˈveri\",\"ukphone\":\"'veəri\"},{\"name\":\"readily\",\"trans\":[\"乐意地， 欣然地； 容易地； 很快地， 立即\"],\"usphone\":\"'rɛdɪli\",\"ukphone\":\"'redɪli\"},{\"name\":\"stoop\",\"trans\":[\"俯身，弯腰；堕落，自贬\",\"弯腰， 曲背\"],\"usphone\":\"stʊp\",\"ukphone\":\"stuːp\"},{\"name\":\"upper\",\"trans\":[\"上面的， 地位较高的\"],\"usphone\":\"'ʌpɚ\",\"ukphone\":\"'ʌpə\"},{\"name\":\"rocket\",\"trans\":[\"迅速上升， 猛涨\",\"火箭\"],\"usphone\":\"'rɑkɪt\",\"ukphone\":\"'rɒkɪt\"},{\"name\":\"splendid\",\"trans\":[\"壮丽的； 极好的\"],\"usphone\":\"'splɛndɪd\",\"ukphone\":\"'splendɪd\"},{\"name\":\"county\",\"trans\":[\"郡， 县\"],\"usphone\":\"'kaʊnti\",\"ukphone\":\"'kaunti\"},{\"name\":\"respondent\",\"trans\":[\"回答者； 响应者； 被告\"],\"usphone\":\"rɪ'spɑndənt\",\"ukphone\":\"rɪ'spɒndənt\"},{\"name\":\"episode\",\"trans\":[\"一个事件； 插曲， 片段； 连续剧的一集\"],\"usphone\":\"'ɛpɪsod\",\"ukphone\":\"'epɪsəud\"},{\"name\":\"convenience\",\"trans\":[\"方便； 便利设施\"],\"usphone\":\"kən'vinɪəns\",\"ukphone\":\"kən'viːniəns\"},{\"name\":\"determination\",\"trans\":[\"决心， 决定； 确定\"],\"usphone\":\"dɪˌtɜːrmɪˈneɪʃn\",\"ukphone\":\"dɪˌtɜːmɪ'neɪʃn\"},{\"name\":\"discipline\",\"trans\":[\"纪律；训练；惩罚；学科\",\"训练； 惩罚， 处罚\"],\"usphone\":\"'dɪsəplɪn\",\"ukphone\":\"'dɪsəplɪn\"},{\"name\":\"behalf\",\"trans\":[\"利益\"],\"usphone\":\"bɪ'hæf\",\"ukphone\":\"bɪ'hɑːf\"},{\"name\":\"evidently\",\"trans\":[\"明显地， 显然\"],\"usphone\":\"'ɛvɪdəntli\",\"ukphone\":\"'evɪdəntli\"},{\"name\":\"objective\",\"trans\":[\"客观的， 无偏见的\",\"目标，目的\"],\"usphone\":\"əb'dʒɛktɪv\",\"ukphone\":\"əb'dʒektɪv\"},{\"name\":\"injure\",\"trans\":[\"伤害， 损害， 使遭受损伤\"],\"usphone\":\"'ɪndʒɚ\",\"ukphone\":\"'ɪndʒə\"},{\"name\":\"victimize\",\"trans\":[\"使受害， 使牺牲\"],\"usphone\":\"'vɪktɪmaɪz\",\"ukphone\":\"'vɪktɪmaɪz\"},{\"name\":\"exert\",\"trans\":[\"尽； 运用\"],\"usphone\":\"ɪɡ'zɝt\",\"ukphone\":\"ɪg'zɜːt\"},{\"name\":\"province\",\"trans\":[\"省； 领域， 范围\"],\"usphone\":\"'prɑvɪns\",\"ukphone\":\"'prɒvɪns\"},{\"name\":\"scandal\",\"trans\":[\"丑事， 丑闻； 流言蜚语； 反感， 愤慨\"],\"usphone\":\"'skændl\",\"ukphone\":\"'skændl\"},{\"name\":\"horrible\",\"trans\":[\"令人恐惧的， 可怕的； 骇人听闻的； 极讨厌的， 使人不愉快的； 糟透的\"],\"usphone\":\"ˈhɑːrəbl\",\"ukphone\":\"'hɒrəbl\"},{\"name\":\"estimate\",\"trans\":[\"估计； 评价\",\"估计； 评价， 看法\"],\"usphone\":\"'ɛstə,met\",\"ukphone\":\"'estɪmeɪt\"},{\"name\":\"strengthen\",\"trans\":[\"加强， 巩固\"],\"usphone\":\"'strɛŋθn\",\"ukphone\":\"'streŋθn\"},{\"name\":\"drip\",\"trans\":[\"滴下，漏水\",\"水滴； 滴水声\"],\"usphone\":\"drɪp\",\"ukphone\":\"drɪp\"},{\"name\":\"injury\",\"trans\":[\"损害， 伤害； 受伤处\"],\"usphone\":\"'ɪndʒəri\",\"ukphone\":\"'ɪndʒəri\"},{\"name\":\"exhibit\",\"trans\":[\"显示；陈列，展览\",\"展览品\"],\"usphone\":\"ɪɡ'zɪbɪt\",\"ukphone\":\"ɪg'zɪbɪt\"},{\"name\":\"brand\",\"trans\":[\"品牌；烙印\",\"铭刻， 打烙印于； 加污名于， 谴责\"],\"usphone\":\"brænd\",\"ukphone\":\"brænd\"},{\"name\":\"mushroom\",\"trans\":[\"迅速成长\",\"蘑菇\"],\"usphone\":\"'mʌʃrʊm\",\"ukphone\":\"'mʌʃruːm; 'mʌʃrum\"},{\"name\":\"alcohol\",\"trans\":[\"酒精， 乙醇\"],\"usphone\":\"'ælkəhɔl\",\"ukphone\":\"'ælkəhɒl\"},{\"name\":\"choke\",\"trans\":[\"使窒息； 塞满， 塞住\"],\"usphone\":\"tʃok\",\"ukphone\":\"tʃəuk\"},{\"name\":\"proposal\",\"trans\":[\"提议， 建议； 求婚\"],\"usphone\":\"prə'pozl\",\"ukphone\":\"prə'pəuzl\"},{\"name\":\"inevitable\",\"trans\":[\"不可避免的， 必然的\"],\"usphone\":\"ɪn'ɛvɪtəbl\",\"ukphone\":\"ɪn'evɪtəbl\"},{\"name\":\"deny\",\"trans\":[\"否定， 否认； 拒绝…的要求\"],\"usphone\":\"dɪ'nai\",\"ukphone\":\"dɪ'naɪ\"},{\"name\":\"miserable\",\"trans\":[\"痛苦的； 悲惨的； 令人难受的\"],\"usphone\":\"'mɪzrəbl\",\"ukphone\":\"'mɪzrəbl\"},{\"name\":\"recreation\",\"trans\":[\"娱乐活动， 消遣\"],\"usphone\":\",rɛkrɪ'eʃən\",\"ukphone\":\"ˌrekri'eɪʃn\"},{\"name\":\"subtract\",\"trans\":[\"减， 减去， 去掉\"],\"usphone\":\"səb'trækt\",\"ukphone\":\"səb'trækt\"},{\"name\":\"allowance\",\"trans\":[\"津贴， 补贴； 零用钱\"],\"usphone\":\"ə'laʊəns\",\"ukphone\":\"ə'lauəns\"},{\"name\":\"portable\",\"trans\":[\"便于携带的， 手提式的\"],\"usphone\":\"'pɔrtəbl\",\"ukphone\":\"'pɔːtəbl\"},{\"name\":\"ancient\",\"trans\":[\"古代的， 古老的； 年老的， 看上去很老的\"],\"usphone\":\"ˈenʃənt\",\"ukphone\":\"'eɪnʃənt\"},{\"name\":\"glory\",\"trans\":[\"光荣， 荣誉的事； 美丽\"],\"usphone\":\"'ɡlɔri\",\"ukphone\":\"'glɔːri\"},{\"name\":\"secondary\",\"trans\":[\"次要的， 第二的； 中等的； 辅助的， 从属的\"],\"usphone\":\"'sɛkəndɛri\",\"ukphone\":\"'sekəndri\"},{\"name\":\"mission\",\"trans\":[\"使命， 任务； 使团\"],\"usphone\":\"'mɪʃən\",\"ukphone\":\"'mɪʃn\"},{\"name\":\"attorney\",\"trans\":[\"律师， 代理人\"],\"usphone\":\"ə'tɝni\",\"ukphone\":\"ə'tɜːni\"},{\"name\":\"wander\",\"trans\":[\"漫游， 闲逛， 漫步； 偏离正道； 走神， 恍惚\"],\"usphone\":\"'wɑndɚ\",\"ukphone\":\"'wɒndə\"},{\"name\":\"adopt\",\"trans\":[\"收养； 采用， 采取； 正式通过， 批准\"],\"usphone\":\"ə'dɑpt\",\"ukphone\":\"ə'dɒpt\"},{\"name\":\"oppose\",\"trans\":[\"反对； 反抗\"],\"usphone\":\"ə'poz\",\"ukphone\":\"ə'pəuz\"},{\"name\":\"singular\",\"trans\":[\"单数的； 非凡的， 奇特的； 独一无二的\"],\"usphone\":\"'sɪŋɡjəlɚ\",\"ukphone\":\"'sɪŋgjələ\"},{\"name\":\"device\",\"trans\":[\"器械， 装置， 设备； 手段， 策略\"],\"usphone\":\"dɪ'vaɪs\",\"ukphone\":\"dɪ'vaɪs\"},{\"name\":\"mainframe\",\"trans\":[\"主机， 大型机\"],\"usphone\":\"'menfrem\",\"ukphone\":\"'meɪnfreɪm\"},{\"name\":\"motor\",\"trans\":[\"发动机， 电动车\"],\"usphone\":\"'motɚ\",\"ukphone\":\"'məutə\"},{\"name\":\"minus\",\"trans\":[\"负的\",\"减\",\"负数；减号\"],\"usphone\":\"'maɪnəs\",\"ukphone\":\"'maɪnəs\"},{\"name\":\"conservative\",\"trans\":[\"保守的，守旧的；不时兴的，传统的\",\"保守的人\"],\"usphone\":\"kən'sɝvətɪv\",\"ukphone\":\"kən'sɜːvətɪv\"},{\"name\":\"access\",\"trans\":[\"接近；通道，入口；接近的机会\",\"存取\"],\"usphone\":\"'æksɛs\",\"ukphone\":\"'ækses\"},{\"name\":\"conference\",\"trans\":[\"会议， 讨论会； 讨论， 商谈\"],\"usphone\":\"'kɑnfərəns\",\"ukphone\":\"'kɒnfərəns\"},{\"name\":\"activity\",\"trans\":[\"活动； 活力； 行动\"],\"usphone\":\"ækˈtɪvətɪ\",\"ukphone\":\"æk'tɪvəti\"},{\"name\":\"primitive\",\"trans\":[\"原始的，早期的；简单的；粗糙的\",\"原人； 原始事物\"],\"usphone\":\"'prɪmətɪv\",\"ukphone\":\"'prɪmətɪv\"},{\"name\":\"advisable\",\"trans\":[\"明智的， 可取的\"],\"usphone\":\"əd'vaɪzəbl\",\"ukphone\":\"əd'vaɪzəbl\"},{\"name\":\"dormitory\",\"trans\":[\"集体寝室， 宿舍\"],\"usphone\":\"'dɔrmətɔri\",\"ukphone\":\"'dɔːmətri\"},{\"name\":\"overcome\",\"trans\":[\"战胜， 克服； 压倒， 使受不了\"],\"usphone\":\",ovɚ'kʌm\",\"ukphone\":\"ˌəuvə'kʌm\"},{\"name\":\"cooperate\",\"trans\":[\"合作， 协作； 配合\"],\"usphone\":\"koʊˈɑːpəreɪt\",\"ukphone\":\"kəu'ɒpəreɪt\"},{\"name\":\"cabin\",\"trans\":[\"小屋； 船舱， 机舱\"],\"usphone\":\"'kæbɪn\",\"ukphone\":\"'kæbɪn\"},{\"name\":\"sum\",\"trans\":[\"共计\",\"总数；金额；算术\"],\"usphone\":\"sʌm\",\"ukphone\":\"sʌm\"},{\"name\":\"current\",\"trans\":[\"当前的， 通用的； 流行的， 流传的\"],\"usphone\":\"kɝ​ənt\",\"ukphone\":\"'kʌrənt\"},{\"name\":\"heel\",\"trans\":[\"脚后跟， 踵； 后跟\"],\"usphone\":\"hil\",\"ukphone\":\"hiːl\"},{\"name\":\"variety\",\"trans\":[\"多样化； 种类； 变种\"],\"usphone\":\"və'raɪəti\",\"ukphone\":\"və'raɪəti\"},{\"name\":\"disturb\",\"trans\":[\"打扰， 扰乱； 弄乱； 使不安\"],\"usphone\":\"dɪ'stɝb\",\"ukphone\":\"dɪ'stɜːb\"},{\"name\":\"copper\",\"trans\":[\"铜； 铜币， 铜制器\"],\"usphone\":\"'kɑpɚ\",\"ukphone\":\"'kɒpə\"},{\"name\":\"persist\",\"trans\":[\"坚持， 持续\"],\"usphone\":\"pɚ'sɪst\",\"ukphone\":\"pə'sɪst\"},{\"name\":\"audio\",\"trans\":[\"听觉的， 声音的\"],\"usphone\":\"'ɔdɪo\",\"ukphone\":\"'ɔːdiəu\"},{\"name\":\"civilian\",\"trans\":[\"平民， 百姓\"],\"usphone\":\"sə'vɪlɪən\",\"ukphone\":\"sə'vɪlɪən\"},{\"name\":\"pump\",\"trans\":[\"泵\",\"抽， 泵送， 打气\"],\"usphone\":\"pʌmp\",\"ukphone\":\"pʌmp\"},{\"name\":\"pierce\",\"trans\":[\"刺穿， 穿孔于\"],\"usphone\":\"pɪrs\",\"ukphone\":\"pɪəs\"},{\"name\":\"teenager\",\"trans\":[\"青少年\"],\"usphone\":\"'tinedʒɚ\",\"ukphone\":\"'tiːneɪdʒə\"},{\"name\":\"apart\",\"trans\":[\"成距离，相间隔；分开，除去\",\"分离的， 分隔的\"],\"usphone\":\"ə'pɑrt\",\"ukphone\":\"ə'pɑːt\"},{\"name\":\"calendar\",\"trans\":[\"日历， 历书， 历法\"],\"usphone\":\"'kæləndɚ\",\"ukphone\":\"'kælɪndə\"},{\"name\":\"offensive\",\"trans\":[\"冒犯的，无礼的；进攻的，攻击性的\",\"进攻， 攻势\"],\"usphone\":\"ə'fɛnsɪv\",\"ukphone\":\"ə'fensɪv\"},{\"name\":\"cartoon\",\"trans\":[\"卡通画， 幽默画； 动画片， 卡通片\"],\"usphone\":\"kɑr'tun\",\"ukphone\":\"kɑː'tuːn\"},{\"name\":\"speculate\",\"trans\":[\"推测， 推断； 投机， 做投机买卖\"],\"usphone\":\"'spɛkjə'let\",\"ukphone\":\"'spekjuleɪt\"},{\"name\":\"launch\",\"trans\":[\"发射，投射，发动；使下水\",\"发射； 下水\"],\"usphone\":\"lɔntʃ\",\"ukphone\":\"lɔːntʃ\"},{\"name\":\"amid\",\"trans\":[\"在…中间， 在…之中， 被…围绕\"],\"usphone\":\"ə'mɪd\",\"ukphone\":\"ə'mɪd\"},{\"name\":\"beloved\",\"trans\":[\"所钟爱的， 所爱戴的\"],\"usphone\":\"bɪ'lʌvd\",\"ukphone\":\"bɪ'lʌvd\"},{\"name\":\"single\",\"trans\":[\"单一的；独身的；单程的\",\"单程票；\"],\"usphone\":\"'sɪŋɡl\",\"ukphone\":\"'sɪŋgl\"},{\"name\":\"confirm\",\"trans\":[\"证实， 肯定； 确认； 批准\"],\"usphone\":\"kən'fɝm\",\"ukphone\":\"kən'fɜːm\"},{\"name\":\"cement\",\"trans\":[\"水泥，胶泥\",\"黏结； 巩固， 使团结\"],\"usphone\":\"sə'mɛnt\",\"ukphone\":\"sɪ'ment\"},{\"name\":\"subway\",\"trans\":[\"地道； 地铁\"],\"usphone\":\"'sʌbwe\",\"ukphone\":\"'sʌbweɪ\"},{\"name\":\"gallon\",\"trans\":[\"加仑\"],\"usphone\":\"'ɡælən\",\"ukphone\":\"'gælən\"},{\"name\":\"acquaint\",\"trans\":[\"使认识， 使了解\"],\"usphone\":\"ə'kwent\",\"ukphone\":\"ə'kweɪnt\"},{\"name\":\"appoint\",\"trans\":[\"任命， 委任； 约定， 指定\"],\"usphone\":\"ə'pɔɪnt\",\"ukphone\":\"ə'pɔɪnt\"},{\"name\":\"elastic\",\"trans\":[\"有弹性的， 灵活的\",\"松紧带\"],\"usphone\":\"ɪ'læstɪk\",\"ukphone\":\"ɪ'læstɪk\"},{\"name\":\"assist\",\"trans\":[\"援助， 帮助， 协助\"],\"usphone\":\"ə'sɪst\",\"ukphone\":\"ə'sɪst\"},{\"name\":\"vast\",\"trans\":[\"巨大的， 大量的； 浩瀚的\"],\"usphone\":\"væst\",\"ukphone\":\"vɑːst\"},{\"name\":\"intervene\",\"trans\":[\"干涉， 调停， 干预； 插入， 介入； 干扰， 打扰\"],\"usphone\":\",ɪntɚ'vin\",\"ukphone\":\"ˌɪntə'viːn\"},{\"name\":\"undergraduate\",\"trans\":[\"大学本科生\"],\"usphone\":\",ʌndɚ'ɡrædʒuət\",\"ukphone\":\"ˌʌndə'grædʒuət\"},{\"name\":\"symbol\",\"trans\":[\"象征； 符号， 标志\"],\"usphone\":\"'sɪmbl\",\"ukphone\":\"'sɪmbl\"},{\"name\":\"commercial\",\"trans\":[\"商业的， 商务的； 商品化的， 商业性的\"],\"usphone\":\"kə'mɝʃəl\",\"ukphone\":\"kə'mɜːʃl\"},{\"name\":\"joint\",\"trans\":[\"连接的； 共同的\",\"接头，接缝；关节\"],\"usphone\":\"dʒɔɪnt\",\"ukphone\":\"dʒɔɪnt\"},{\"name\":\"reasonable\",\"trans\":[\"通情达理的， 讲道理的； 合理的； 公道的； 尚好的， 过得去的\"],\"usphone\":\"'riznəbl\",\"ukphone\":\"'riːznəbl\"},{\"name\":\"available\",\"trans\":[\"现成可使用的， 通用的； 可取的； 联系的； 可得到的\"],\"usphone\":\"ə'veləbl\",\"ukphone\":\"ə'veɪləbl\"},{\"name\":\"confine\",\"trans\":[\"限制， 使局限； 使不外出， 禁闭\"],\"usphone\":\"kən'faɪn\",\"ukphone\":\"kən'faɪn\"},{\"name\":\"advocate\",\"trans\":[\"拥护， 提倡， 主张\",\"拥护者， 提倡者； 辩护者， 律师\"],\"usphone\":\"ˈædvəkeɪt；-et\",\"ukphone\":\"'ædvəkeɪt；-ət\"},{\"name\":\"frequency\",\"trans\":[\"屡次； 次数， 频率\"],\"usphone\":\"'frikwənsi\",\"ukphone\":\"'friːkwənsi\"},{\"name\":\"horizontal\",\"trans\":[\"地平的， 水平的\"],\"usphone\":\"'hɔrə'zɑntl\",\"ukphone\":\"ˌhɒrɪ'zɒntl\"},{\"name\":\"luggage\",\"trans\":[\"行李\"],\"usphone\":\"'lʌɡɪdʒ\",\"ukphone\":\"'lʌgɪdʒ\"},{\"name\":\"lick\",\"trans\":[\"舔，舔吃；打败，克服；轻拍，吞卷\",\"舔； 少量， 少许\"],\"usphone\":\"lɪk\",\"ukphone\":\"lɪk\"},{\"name\":\"missile\",\"trans\":[\"导弹， 飞弹， 投射物\"],\"usphone\":\"'mɪsl\",\"ukphone\":\"'mɪsaɪl\"},{\"name\":\"dynamic\",\"trans\":[\"有活力的；动力的；不断变化的\",\"动力； 动力学\"],\"usphone\":\"daɪ'næmɪk\",\"ukphone\":\"daɪ'næmɪk\"},{\"name\":\"satisfactory\",\"trans\":[\"令人满意的\"],\"usphone\":\",sætɪs'fæktəri\",\"ukphone\":\"ˌsætɪs'fæktəri\"},{\"name\":\"military\",\"trans\":[\"军事的，军用的\",\"军队， 武装力量\"],\"usphone\":\"'mɪlətɛri\",\"ukphone\":\"'mɪlətri\"},{\"name\":\"reluctant\",\"trans\":[\"不情愿的， 勉强的\"],\"usphone\":\"rɪ'lʌktənt\",\"ukphone\":\"rɪ'lʌktənt\"},{\"name\":\"generate\",\"trans\":[\"发生， 引起； 生殖\"],\"usphone\":\"'dʒɛnəret\",\"ukphone\":\"'dʒenəreɪt\"},{\"name\":\"unusual\",\"trans\":[\"不平常的， 少有的； 独特的， 与众不同的\"],\"usphone\":\"ʌnˈjuʒəl\",\"ukphone\":\"ˌʌn'juːʒuəl\"},{\"name\":\"sector\",\"trans\":[\"部门， 部分； 防御地段， 防区； 扇形\"],\"usphone\":\"'sɛktɚ\",\"ukphone\":\"'sektə\"},{\"name\":\"passion\",\"trans\":[\"激情， 热情； 酷爱\"],\"usphone\":\"'pæʃən\",\"ukphone\":\"'pæʃn\"},{\"name\":\"extreme\",\"trans\":[\"极度的；末端的\",\"极端， 过分\"],\"usphone\":\"ɪk'strim\",\"ukphone\":\"ɪk'striːm\"},{\"name\":\"coil\",\"trans\":[\"卷，圈；线圈\",\"卷\"],\"usphone\":\"kɔɪl\",\"ukphone\":\"kɔɪl\"},{\"name\":\"ensure\",\"trans\":[\"保证； 保护\"],\"usphone\":\"ɪn'ʃʊr\",\"ukphone\":\"ɪn'ʃuə\"},{\"name\":\"coordinate\",\"trans\":[\"同等的， 并列的\",\"协调， 调节\",\"坐标\"],\"usphone\":\"ko'ɔrdɪnet\",\"ukphone\":\"kəʊ'ɔ:dɪneɪt\"},{\"name\":\"organism\",\"trans\":[\"生物， 有机体； 机体， 有机组织\"],\"usphone\":\"'ɔrɡənɪzəm\",\"ukphone\":\"'ɔːgənɪzəm\"},{\"name\":\"athlete\",\"trans\":[\"运动员， 体育家\"],\"usphone\":\"'æθlit\",\"ukphone\":\"'æθliːt\"},{\"name\":\"epidemic\",\"trans\":[\"流行性的；传染的\",\"流行病； 传播\"],\"usphone\":\",ɛpɪ'dɛmɪk\",\"ukphone\":\"ˌepɪ'demɪk\"},{\"name\":\"suppose\",\"trans\":[\"猜想， 假定， 让； [常用于被动语态]期望， 认为应该\"],\"usphone\":\"sə'poz\",\"ukphone\":\"sə'pəuz\"},{\"name\":\"upright\",\"trans\":[\"挺直着， 竖立着\",\"垂直的；正直的，诚实的\"],\"usphone\":\"'ʌpraɪt\",\"ukphone\":\"'ʌpraɪt\"},{\"name\":\"remarkable\",\"trans\":[\"值得注意的， 引人注目的； 异常的， 非凡的\"],\"usphone\":\"rɪ'mɑrkəbl\",\"ukphone\":\"rɪ'mɑːkəbl\"},{\"name\":\"brake\",\"trans\":[\"制动； 刹住， 用闸使放慢速度\",\"闸，刹车\"],\"usphone\":\"brek\",\"ukphone\":\"breɪk\"},{\"name\":\"tube\",\"trans\":[\"管， 电子管， 显像管\"],\"usphone\":\"tub\",\"ukphone\":\"tjuːb\"},{\"name\":\"naval\",\"trans\":[\"海军的\"],\"usphone\":\"'nevl\",\"ukphone\":\"'neɪvl\"},{\"name\":\"failure\",\"trans\":[\"失败， 失败的人； 失灵， 故障； 不履行\"],\"usphone\":\"'feljɚ\",\"ukphone\":\"'feɪljə\"},{\"name\":\"accountancy\",\"trans\":[\"会计工作； 会计学\"],\"usphone\":\"ə'kaʊntənsi\",\"ukphone\":\"ə'kauntənsi\"},{\"name\":\"forge\",\"trans\":[\"打制， 锻造； 伪造\"],\"usphone\":\"fɔrdʒ\",\"ukphone\":\"fɔːdʒ\"},{\"name\":\"carpet\",\"trans\":[\"地毯\"],\"usphone\":\"'kɑrpɪt\",\"ukphone\":\"'kɑːpɪt\"},{\"name\":\"solve\",\"trans\":[\"解答； 解释； 解决\"],\"usphone\":\"sɑlv\",\"ukphone\":\"sɒlv\"},{\"name\":\"hint\",\"trans\":[\"暗示， 示意\",\"暗示，示意；细微的迹象；建议\"],\"usphone\":\"hɪnt\",\"ukphone\":\"hɪnt\"},{\"name\":\"knot\",\"trans\":[\"打结\",\"结；节疤；节\",\"把…打成结\"],\"usphone\":\"nɑt\",\"ukphone\":\"nɒt\"},{\"name\":\"demonstrate\",\"trans\":[\"说明； 论证； 表露\"],\"usphone\":\"'dɛmən'stret\",\"ukphone\":\"'demənstreɪt\"},{\"name\":\"region\",\"trans\":[\"地区， 地带， 区域； 范围， 幅度\"],\"usphone\":\"'ridʒən\",\"ukphone\":\"'riːdʒən\"},{\"name\":\"support\",\"trans\":[\"支撑；支持；供养；证实\",\"支持， 支撑物， 支持者\"],\"usphone\":\"sə'pɔrt\",\"ukphone\":\"sə'pɔːt\"},{\"name\":\"yearly\",\"trans\":[\"一年一度地\",\"每年的\"],\"usphone\":\"'jɪrli\",\"ukphone\":\"'jɜːli;'jɪəli\"},{\"name\":\"deceive\",\"trans\":[\"欺骗， 蒙蔽， 行骗\"],\"usphone\":\"dɪ'siv\",\"ukphone\":\"dɪ'siːv\"},{\"name\":\"saucer\",\"trans\":[\"茶托， 碟子\"],\"usphone\":\"'sɔsɚ\",\"ukphone\":\"'sɔːsə\"},{\"name\":\"hire\",\"trans\":[\"租用； 雇用\"],\"usphone\":\"'haɪɚ\",\"ukphone\":\"'haɪə\"},{\"name\":\"kid\",\"trans\":[\"戏弄， 开玩笑\",\"小孩；年轻人\"],\"usphone\":\"kɪd\",\"ukphone\":\"kɪd\"},{\"name\":\"donkey\",\"trans\":[\"驴； 笨蛋\"],\"usphone\":\"ˈdɑŋkɪ\",\"ukphone\":\"'dɔŋki\"},{\"name\":\"destination\",\"trans\":[\"目的地， 终点， 目标\"],\"usphone\":\",dɛstɪ'neʃən\",\"ukphone\":\"ˌdestɪ'neɪʃn\"},{\"name\":\"vertical\",\"trans\":[\"垂直的， 竖式的\"],\"usphone\":\"'vɝtɪkl\",\"ukphone\":\"'vɜːtɪkl\"},{\"name\":\"learning\",\"trans\":[\"学习； 学问， 知识\"],\"usphone\":\"'lɝnɪŋ\",\"ukphone\":\"'lɜːnɪŋ\"},{\"name\":\"monument\",\"trans\":[\"纪念碑， 纪念馆； 历史遗迹\"],\"usphone\":\"'mɑnjumənt\",\"ukphone\":\"'mɒnjumənt\"},{\"name\":\"misconception\",\"trans\":[\"误解\"],\"usphone\":\"'mɪskən'sɛpʃən\",\"ukphone\":\"ˌmɪskən'sepʃn\"},{\"name\":\"damp\",\"trans\":[\"潮湿的，微湿的\",\"潮湿，湿气\",\"使潮湿； 使沮丧； 抑制\"],\"usphone\":\"dæmp\",\"ukphone\":\"dæmp\"},{\"name\":\"vivid\",\"trans\":[\"鲜艳的； 生动的， 栩栩如生的\"],\"usphone\":\"'vɪvɪd\",\"ukphone\":\"'vɪvɪd\"},{\"name\":\"honey\",\"trans\":[\"蜜， 蜂蜜； 甜， 甜蜜； [常用于称呼] 宝贝儿\"],\"usphone\":\"'hʌni\",\"ukphone\":\"'hʌni\"},{\"name\":\"screw\",\"trans\":[\"螺丝\",\"固定， 拧紧\"],\"usphone\":\"skru\",\"ukphone\":\"skruː\"},{\"name\":\"gap\",\"trans\":[\"缺口； 间隔； 差距； 缺陷\"],\"usphone\":\"ɡæp\",\"ukphone\":\"gæp\"},{\"name\":\"missing\",\"trans\":[\"缺掉的， 失踪的\"],\"usphone\":\"'mɪsɪŋ\",\"ukphone\":\"'mɪsɪŋ\"},{\"name\":\"emphasize\",\"trans\":[\"强调， 着重\"],\"usphone\":\"'ɛmfəsaɪz\",\"ukphone\":\"'emfəsaɪz\"},{\"name\":\"virtue\",\"trans\":[\"善， 美德； 优点， 长处\"],\"usphone\":\"'vɝtʃʊ\",\"ukphone\":\"'vɜːtʃuː\"},{\"name\":\"normal\",\"trans\":[\"正常的， 平常的； 正规的， 规范的\"],\"usphone\":\"'nɔrml\",\"ukphone\":\"'nɔːml\"},{\"name\":\"socialist\",\"trans\":[\"社会主义者\"],\"usphone\":\"'soʃəlɪst\",\"ukphone\":\"'səuʃəlɪst\"},{\"name\":\"gradual\",\"trans\":[\"逐渐的， 渐进的； 坡度平缓的\"],\"usphone\":\"'ɡrædʒuəl\",\"ukphone\":\"'grædʒuəl\"},{\"name\":\"figure\",\"trans\":[\"出现； 合乎情理； 计算； 认为， 猜想\",\"数字；人物；算术；体形，体态；轮廓；画像，塑像；图，图形\"],\"usphone\":\"'fɪɡjɚ\",\"ukphone\":\"'fɪgə\"},{\"name\":\"ore\",\"trans\":[\"矿， 矿石\"],\"usphone\":\"ɔr\",\"ukphone\":\"ɔː\"},{\"name\":\"slight\",\"trans\":[\"轻微的，微小的\",\"侮慢；轻视，冷落\"],\"usphone\":\"slaɪt\",\"ukphone\":\"slaɪt\"},{\"name\":\"previous\",\"trans\":[\"先的， 前的； 以前的\"],\"usphone\":\"'privɪəs\",\"ukphone\":\"'priːviəs\"},{\"name\":\"transmit\",\"trans\":[\"传送， 传递； 传染； 播送， 发射\"],\"usphone\":\"trænzˈmɪt\",\"ukphone\":\"trænz'mɪt; træns'mɪt\"},{\"name\":\"socialism\",\"trans\":[\"社会主义\"],\"usphone\":\"'soʃəlɪzəm\",\"ukphone\":\"'səuʃəlɪzəm\"},{\"name\":\"consumption\",\"trans\":[\"消耗， 消费\"],\"usphone\":\"kən'sʌmpʃən\",\"ukphone\":\"kən'sʌmpʃn\"},{\"name\":\"argue\",\"trans\":[\"争辩， 争论\",\"争论，争辩，辩论；主张；说服\"],\"usphone\":\"'ɑrgjʊ\",\"ukphone\":\"'ɑːgjuː\"},{\"name\":\"technology\",\"trans\":[\"工艺学； 工艺， 技术\"],\"usphone\":\"tɛkˈnɑlədʒɪ\",\"ukphone\":\"tek'nɒlədʒi\"},{\"name\":\"weaken\",\"trans\":[\"削弱， 变弱\"],\"usphone\":\"'wikən\",\"ukphone\":\"'wiːkən\"},{\"name\":\"voltage\",\"trans\":[\"电压\"],\"usphone\":\"'voltɪdʒ\",\"ukphone\":\"'vəultɪdʒ\"},{\"name\":\"damn\",\"trans\":[\"该死，见鬼〔表示很生气或失望〕\",\"非常，很\",\"该死的〔表示对某人或某事物生气〕\"],\"usphone\":\"dæm\",\"ukphone\":\"dæm\"},{\"name\":\"superior\",\"trans\":[\"上级的，较高的；优越的；有优越感的，高傲的\",\"上级， 长官\"],\"usphone\":\"sʊˈpɪrɪɚ\",\"ukphone\":\"sjuː'pɪəriə\"},{\"name\":\"location\",\"trans\":[\"位置， 场所； 外景拍摄地\"],\"usphone\":\"lo'keʃən\",\"ukphone\":\"ləu'keɪʃn\"},{\"name\":\"compensation\",\"trans\":[\"补偿， 赔偿\"],\"usphone\":\",kɑmpɛn'seʃən\",\"ukphone\":\"ˌkɒmpen'seɪʃn\"},{\"name\":\"bankrupt\",\"trans\":[\"破产的\"],\"usphone\":\"'bæŋkrʌpt\",\"ukphone\":\"'bæŋkrʌpt\"},{\"name\":\"punctual\",\"trans\":[\"严守时刻的， 准时的\"],\"usphone\":\"'pʌŋtʃʊəl\",\"ukphone\":\"'pʌŋktʃuəl\"},{\"name\":\"advertise\",\"trans\":[\"为…做广告， 宣传； 公告； 登广告\"],\"usphone\":\"'ædvɚtaɪz\",\"ukphone\":\"'ædvətaɪz\"},{\"name\":\"compromise\",\"trans\":[\"妥协； 危及； 放弃\",\"妥协，和解，折中办法\"],\"usphone\":\"'kɑmprəmaɪz\",\"ukphone\":\"'kɒmprəmaɪz\"},{\"name\":\"sack\",\"trans\":[\"麻袋，包；解雇；洗劫，劫掠\",\"解雇； 洗劫， 劫掠\"],\"usphone\":\"sæk\",\"ukphone\":\"sæk\"},{\"name\":\"software\",\"trans\":[\"软件\"],\"usphone\":\"'sɔftwɛr\",\"ukphone\":\"'sɒftweə\"},{\"name\":\"seminar\",\"trans\":[\"研究班， 研讨会\"],\"usphone\":\"'sɛmɪnɑr\",\"ukphone\":\"'semɪnɑː\"},{\"name\":\"comparative\",\"trans\":[\"比较的， 相对的\"],\"usphone\":\"kəm'pærətɪv\",\"ukphone\":\"kəm'pærətɪv\"},{\"name\":\"competition\",\"trans\":[\"竞争， 比赛\"],\"usphone\":\",kɑmpə'tɪʃən\",\"ukphone\":\"ˌkɒmpə'tɪʃn\"},{\"name\":\"fruitful\",\"trans\":[\"多产的， 肥沃的\"],\"usphone\":\"'frutfl\",\"ukphone\":\"'fruːtful\"},{\"name\":\"react\",\"trans\":[\"反应， 作出反应\"],\"usphone\":\"ri'ækt\",\"ukphone\":\"ri'ækt\"},{\"name\":\"dragon\",\"trans\":[\"龙\"],\"usphone\":\"'dræɡən\",\"ukphone\":\"'drægən\"},{\"name\":\"hesitant\",\"trans\":[\"犹豫的； 吞吞吐吐的\"],\"usphone\":\"'hɛzɪtənt\",\"ukphone\":\"'hezɪtənt\"},{\"name\":\"beyond\",\"trans\":[\"在更远处， 再往后\",\"在…的那边，远于；迟于；越出\"],\"usphone\":\"bɪ'jɑnd\",\"ukphone\":\"bɪ'jɒnd\"},{\"name\":\"hell\",\"trans\":[\"地狱； 极大的痛苦\"],\"usphone\":\"hɛl\",\"ukphone\":\"hel\"},{\"name\":\"feedback\",\"trans\":[\"回授， 反馈， 反应\"],\"usphone\":\"'fidbæk\",\"ukphone\":\"'fiːdbæk\"},{\"name\":\"hazard\",\"trans\":[\"危险；公害\",\"尝试着做； 冒…风险\"],\"usphone\":\"'hæzɚd\",\"ukphone\":\"'hæzəd\"},{\"name\":\"justify\",\"trans\":[\"证明…是正当的\"],\"usphone\":\"'dʒʌstə'fai\",\"ukphone\":\"'dʒʌstɪfaɪ\"},{\"name\":\"voluntary\",\"trans\":[\"自愿的， 志愿的\"],\"usphone\":\"'vɑləntɛri\",\"ukphone\":\"'vɒləntri\"},{\"name\":\"connection\",\"trans\":[\"联系， 关系； 连接， 衔接； 连贯性； 熟人， 关系\"],\"usphone\":\"kə'nɛkʃən\",\"ukphone\":\"kə'nekʃn\"},{\"name\":\"proof\",\"trans\":[\"耐…的， 能防…的\",\"证据，证明；校样，样张\"],\"usphone\":\"pruf\",\"ukphone\":\"pruːf\"},{\"name\":\"timber\",\"trans\":[\"木材， 原木； 大木料， 栋木\"],\"usphone\":\"'tɪmbɚ\",\"ukphone\":\"'tɪmbə\"},{\"name\":\"roar\",\"trans\":[\"吼叫，怒号，咆哮；轰鸣；大声喊出，大声表示\",\"呐喊声， 咆哮声， 吼叫声； 轰鸣\"],\"usphone\":\"rɔr\",\"ukphone\":\"rɔː\"},{\"name\":\"presence\",\"trans\":[\"出席， 到场； 存在； 仪表， 仪态\"],\"usphone\":\"'prɛzns\",\"ukphone\":\"'prezns\"},{\"name\":\"phase\",\"trans\":[\"阶段； 方面； 相， 相位\"],\"usphone\":\"fez\",\"ukphone\":\"feɪz\"},{\"name\":\"surrounding\",\"trans\":[\"附近的；四周的\"],\"usphone\":\"sə'raʊndɪŋ\",\"ukphone\":\"sə'raundɪŋ\"},{\"name\":\"efficiency\",\"trans\":[\"效率； 功效， 效能\"],\"usphone\":\"ɪˈfɪʃənsɪ\",\"ukphone\":\"ɪ'fɪʃnsi\"},{\"name\":\"overhead\",\"trans\":[\"在头顶上\",\"在头顶上的，架空的\",\"经常费用， 管理费用\"],\"usphone\":\",ovɚ'hɛd\",\"ukphone\":\"əʊvə'hed\"},{\"name\":\"contract\",\"trans\":[\"缩小； 订合同； 感染， 染上\",\"契约， 合同\"],\"usphone\":\"'kɑntrækt\",\"ukphone\":\"'kɒntrækt\"},{\"name\":\"conclude\",\"trans\":[\"推断出， 推论出； 结束， 终了； 缔结， 议定\"],\"usphone\":\"kən'klud\",\"ukphone\":\"kən'kluːd\"},{\"name\":\"comprehension\",\"trans\":[\"理解， 理解力， 领悟； 理解力测验\"],\"usphone\":\",kɑmprɪ'hɛnʃən\",\"ukphone\":\"ˌkɒmprɪ'henʃn\"},{\"name\":\"beggar\",\"trans\":[\"乞丐\",\"使贫穷\"],\"usphone\":\"'bɛɡɚ\",\"ukphone\":\"'begə\"},{\"name\":\"leather\",\"trans\":[\"皮革， 皮革制品\"],\"usphone\":\"'lɛðɚ\",\"ukphone\":\"'leðə\"},{\"name\":\"comb\",\"trans\":[\"梳子；鸡冠，冠状物\",\"梳理； 在…搜寻； 彻底搜查\"],\"usphone\":\"kom\",\"ukphone\":\"kəum\"},{\"name\":\"innovative\",\"trans\":[\"创新的， 革新的\"],\"usphone\":\"'ɪnəvetɪv\",\"ukphone\":\"'ɪnəveɪtɪv\"},{\"name\":\"insight\",\"trans\":[\"洞察力； 洞悉； 深刻见解\"],\"usphone\":\"'ɪn'saɪt\",\"ukphone\":\"'ɪnsaɪt\"},{\"name\":\"fabric\",\"trans\":[\"织物， 纺织品； 结构\"],\"usphone\":\"'fæbrɪk\",\"ukphone\":\"'fæbrɪk\"},{\"name\":\"revolutionary\",\"trans\":[\"革命的，革新的\",\"革命者\"],\"usphone\":\"'rɛvə'lʊʃə'nɛri\",\"ukphone\":\"ˌrevə'luːʃənəri\"},{\"name\":\"following\",\"trans\":[\"接着的，下列的\",\"一批追随者\"],\"usphone\":\"'fɑloɪŋ\",\"ukphone\":\"'fɒləuɪŋ\"},{\"name\":\"exact\",\"trans\":[\"确切的，精确的\",\"强求， 索取\"],\"usphone\":\"ɪɡ'zækt\",\"ukphone\":\"ɪg'zækt\"},{\"name\":\"indoor\",\"trans\":[\"在室内， 在户内\",\"室内的\"],\"usphone\":\"'ɪndɔr\",\"ukphone\":\"'ɪndɔː\"},{\"name\":\"force\",\"trans\":[\"强迫；用力推动，用力打开\",\"军队， 兵力； 暴力， 武力； 力， 力气； 影响力， 效力\"],\"usphone\":\"fɔrs\",\"ukphone\":\"fɔːs\"},{\"name\":\"centigrade\",\"trans\":[\"百分度的； 摄氏的\"],\"usphone\":\"'sɛntɪɡred\",\"ukphone\":\"'sentɪgreɪd\"},{\"name\":\"sexual\",\"trans\":[\"性的， 两性的； 性别的\"],\"usphone\":\"sɛkʃʊəl\",\"ukphone\":\"'sekʃuəl\"},{\"name\":\"sympathetic\",\"trans\":[\"同情的； 和谐的； 赞同的， 支持的； 合意的\"],\"usphone\":\",sɪmpə'θɛtɪk\",\"ukphone\":\"ˌsɪmpə'θetɪk\"},{\"name\":\"freight\",\"trans\":[\"货运；货物；运费\",\"运送\"],\"usphone\":\"fret\",\"ukphone\":\"freɪt\"},{\"name\":\"range\",\"trans\":[\"变动； 漫游， 四处搜索； 使排列成行\",\"一系列；范围；射程，距离；脉；射击场\"],\"usphone\":\"rendʒ\",\"ukphone\":\"reɪndʒ\"},{\"name\":\"distribution\",\"trans\":[\"分发， 分配； 分布\"],\"usphone\":\"'dɪstrə'bjʊʃən\",\"ukphone\":\"ˌdɪstrɪ'bjuːʃn\"},{\"name\":\"tyre\",\"trans\":[\"轮胎， 车胎\"],\"usphone\":\"'taɪɚ\",\"ukphone\":\"'taɪə\"},{\"name\":\"derive\",\"trans\":[\"取得； 起源\"],\"usphone\":\"dɪ'raɪv\",\"ukphone\":\"dɪ'raɪv\"},{\"name\":\"capacity\",\"trans\":[\"容量； 能力， 才能； 能量； 身份， 地位\"],\"usphone\":\"kə'pæsəti\",\"ukphone\":\"kə'pæsəti\"},{\"name\":\"cope\",\"trans\":[\"应付， 处理\"],\"usphone\":\"kop\",\"ukphone\":\"kəup\"},{\"name\":\"overseas\",\"trans\":[\"在海外\",\"在海外的\"],\"usphone\":\",ovɚ'siz\",\"ukphone\":\"ˌəuvə'siːz\"},{\"name\":\"impress\",\"trans\":[\"给人印象，引人注目\",\"给…深刻印象；印，压印\",\"印记； 特征\"],\"usphone\":\"ɪm'prɛs\",\"ukphone\":\"ɪm'pres\"},{\"name\":\"confess\",\"trans\":[\"供认， 坦白； 承认\"],\"usphone\":\"kən'fɛs\",\"ukphone\":\"kən'fes\"},{\"name\":\"leak\",\"trans\":[\"漏；泄露\",\"漏洞\"],\"usphone\":\"lik\",\"ukphone\":\"liːk\"},{\"name\":\"ghost\",\"trans\":[\"鬼， 灵魂， 鬼魂\"],\"usphone\":\"ɡost\",\"ukphone\":\"gəust\"},{\"name\":\"feature\",\"trans\":[\"起重要作用\",\"特征，特色；面貌；特写，专题节目；故事片\",\"突出；由…主演\"],\"usphone\":\"'fitʃɚ\",\"ukphone\":\"'fiːtʃə\"},{\"name\":\"lean\",\"trans\":[\"倾斜；屈身；靠\",\"瘦的； 贫瘠的\"],\"usphone\":\"lin\",\"ukphone\":\"liːn\"},{\"name\":\"flat\",\"trans\":[\"平直地； 直截了当地\",\"平的；固定的；漏气的；平淡的；沉闷的；浅的\",\"一套房间，单元住宅\"],\"usphone\":\"flæt\",\"ukphone\":\"flæt\"},{\"name\":\"recall\",\"trans\":[\"回忆； 召回， 叫回； 收回， 撤销\"],\"usphone\":\"'rikɔl\",\"ukphone\":\"rɪ'kɔːl\"},{\"name\":\"leap\",\"trans\":[\"跳，跃\",\"跳跃； 骤变\"],\"usphone\":\"lip\",\"ukphone\":\"liːp\"},{\"name\":\"waterproof\",\"trans\":[\"不透水的， 防水的\"],\"usphone\":\"'wɔtɚpruf\",\"ukphone\":\"'wɔːtəpruːf\"},{\"name\":\"barber\",\"trans\":[\"理发师\"],\"usphone\":\"'bɑrbɚ\",\"ukphone\":\"'bɑːbə\"},{\"name\":\"precise\",\"trans\":[\"精确的， 准确的； 严谨的\"],\"usphone\":\"prɪ'saɪs\",\"ukphone\":\"prɪ'saɪs\"},{\"name\":\"sensible\",\"trans\":[\"明智的； 合情理的； 有知觉的\"],\"usphone\":\"'sɛnsəbl\",\"ukphone\":\"'sensəbl\"},{\"name\":\"objection\",\"trans\":[\"反对， 异议； 反对的理由\"],\"usphone\":\"əb'dʒɛkʃən\",\"ukphone\":\"əb'dʒekʃn\"},{\"name\":\"dispute\",\"trans\":[\"争论， 争执； 对…表示异议\",\"争论\"],\"usphone\":\"'dɪs'pjʊt\",\"ukphone\":\"dɪ'spjuːt; 'dɪspjuːt\"},{\"name\":\"precious\",\"trans\":[\"珍贵的， 宝贵的\"],\"usphone\":\"'prɛʃəs\",\"ukphone\":\"'preʃəs\"},{\"name\":\"observation\",\"trans\":[\"注意， 观察； 言论， 评论； 观察资料\"],\"usphone\":\",ɑbzɚ'veʃən\",\"ukphone\":\"ˌɒbzə'veɪʃn\"},{\"name\":\"tremble\",\"trans\":[\"发抖，哆嗦；摇动\",\"颤抖； 摇晃， 摇动\"],\"usphone\":\"'trɛmbl\",\"ukphone\":\"'trembl\"},{\"name\":\"suspect\",\"trans\":[\"可疑的， 不信任的\",\"疑有；推测；对…表示怀疑\",\"嫌疑犯，可疑分子\"],\"usphone\":\"sʌspɛkt; (for v.) səˈspɛkt\",\"ukphone\":\"sə'spekt\"},{\"name\":\"apologize\",\"trans\":[\"道歉， 谢罪， 认错\"],\"usphone\":\"ə'pɑlədʒaɪz\",\"ukphone\":\"ə'pɒlədʒaɪz\"},{\"name\":\"inhabitant\",\"trans\":[\"居民， 住户\"],\"usphone\":\"ɪn'hæbɪtənt\",\"ukphone\":\"ɪn'hæbɪtənt\"},{\"name\":\"fraction\",\"trans\":[\"小部分； 片断； 分数\"],\"usphone\":\"'frækʃən\",\"ukphone\":\"'frækʃn\"},{\"name\":\"filter\",\"trans\":[\"过滤，透；走漏\",\"滤纸， 过滤嘴\"],\"usphone\":\"'fɪltɚ\",\"ukphone\":\"'fɪltə\"},{\"name\":\"sunlight\",\"trans\":[\"日光， 阳光\"],\"usphone\":\"'sʌnlaɪt\",\"ukphone\":\"'sʌnlaɪt\"},{\"name\":\"site\",\"trans\":[\"地点，场所\",\"使坐落在； 设置\"],\"usphone\":\"saɪt\",\"ukphone\":\"saɪt\"},{\"name\":\"emotion\",\"trans\":[\"情感， 感情； 激动\"],\"usphone\":\"ɪ'moʃən\",\"ukphone\":\"ɪ'məuʃn\"},{\"name\":\"massive\",\"trans\":[\"大的， 大而重的； 大块的； 大量的， 大规模的\"],\"usphone\":\"'mæsɪv\",\"ukphone\":\"'mæsɪv\"},{\"name\":\"cease\",\"trans\":[\"停止， 终止\"],\"usphone\":\"sis\",\"ukphone\":\"siːs\"},{\"name\":\"assess\",\"trans\":[\"对估价； 评价， 评论\"],\"usphone\":\"ə'sɛs\",\"ukphone\":\"ə'ses\"},{\"name\":\"asset\",\"trans\":[\"资产， 财产； 有价值的特性或技能， 优点\"],\"usphone\":\"'æsɛt\",\"ukphone\":\"'æset\"},{\"name\":\"owe\",\"trans\":[\"欠； 应把…归功于； 感激， 感恩\"],\"usphone\":\"o\",\"ukphone\":\"əu\"},{\"name\":\"scarce\",\"trans\":[\"缺乏的， 不足的； 稀少的， 罕见的\"],\"usphone\":\"skɛrs\",\"ukphone\":\"skeəs\"},{\"name\":\"minimum\",\"trans\":[\"最低的， 最小的\",\"最低限度；最小量\"],\"usphone\":\"'mɪnɪməm\",\"ukphone\":\"'mɪnɪməm\"},{\"name\":\"queue\",\"trans\":[\"排队等候\",\"长队，行列\"],\"usphone\":\"kju\",\"ukphone\":\"kjuː\"},{\"name\":\"mathematical\",\"trans\":[\"数学的\"],\"usphone\":\",mæθə'mætɪkl\",\"ukphone\":\"ˌmæθə'mætɪkl\"},{\"name\":\"apology\",\"trans\":[\"道歉， 认错， 谢罪\"],\"usphone\":\"ə'pɑlədʒi\",\"ukphone\":\"ə'pɒlədʒi\"},{\"name\":\"magic\",\"trans\":[\"有魔力的； 魔术的\",\"魔法，魅力\"],\"usphone\":\"'mædʒɪk\",\"ukphone\":\"'mædʒɪk\"},{\"name\":\"argument\",\"trans\":[\"争论， 辩论； 理由； 说理， 论证\"],\"usphone\":\"'ɑrɡjumənt\",\"ukphone\":\"'ɑːgjumənt\"},{\"name\":\"reveal\",\"trans\":[\"揭露， 泄露； 展现， 显示\"],\"usphone\":\"rɪ'vil\",\"ukphone\":\"rɪ'viːl\"},{\"name\":\"data\",\"trans\":[\"资料，数据\"],\"usphone\":\"'detə\",\"ukphone\":\"'deɪtə\"},{\"name\":\"theoretical\",\"trans\":[\"理论的\"],\"usphone\":\",θiə'rɛtɪkəl\",\"ukphone\":\"ˌθɪə'retɪkl\"},{\"name\":\"adequate\",\"trans\":[\"足够的； 可以胜任的\"],\"usphone\":\"ˈædɪkwət\",\"ukphone\":\"'ædɪkwət\"},{\"name\":\"utter\",\"trans\":[\"完全的，彻底的\",\"发出， 说， 讲\"],\"usphone\":\"'ʌtɚ\",\"ukphone\":\"'ʌtə\"},{\"name\":\"onion\",\"trans\":[\"洋葱； 洋葱类植物\"],\"usphone\":\"'ʌnjən\",\"ukphone\":\"'ʌnjən\"},{\"name\":\"vibrate\",\"trans\":[\"颤动\"],\"usphone\":\"vaɪ'breɪt\",\"ukphone\":\"vaɪ'breɪt\"},{\"name\":\"drum\",\"trans\":[\"有节奏地敲击\",\"鼓，鼓状物；圆桶\"],\"usphone\":\"drʌm\",\"ukphone\":\"drʌm\"},{\"name\":\"sausage\",\"trans\":[\"香肠， 腊肠\"],\"usphone\":\"'sɔsɪdʒ\",\"ukphone\":\"'sɒsɪdʒ\"},{\"name\":\"hopeful\",\"trans\":[\"有希望的\"],\"usphone\":\"'hopfl\",\"ukphone\":\"'həupfl\"},{\"name\":\"tremendous\",\"trans\":[\"极大的， 非常的； 精彩的， 了不起的\"],\"usphone\":\"trə'mɛndəs\",\"ukphone\":\"trə'mendəs\"},{\"name\":\"condense\",\"trans\":[\"冷凝， 凝结； 浓缩， 压缩， 简缩\"],\"usphone\":\"kən'dɛns\",\"ukphone\":\"kən'dens\"},{\"name\":\"barrier\",\"trans\":[\"栅栏； 检票口； 屏障； 障碍， 隔阂\"],\"usphone\":\"'bærɪɚ\",\"ukphone\":\"'bæriə\"},{\"name\":\"realistic\",\"trans\":[\"现实的； 实际可行的； 现实主义的； 逼真的\"],\"usphone\":\",riə'lɪstɪk\",\"ukphone\":\"ˌriːə'lɪstɪk\"},{\"name\":\"justice\",\"trans\":[\"正义， 公正； 司法\"],\"usphone\":\"'dʒʌstɪs\",\"ukphone\":\"'dʒʌstɪs\"},{\"name\":\"create\",\"trans\":[\"创造； 引起， 产生\"],\"usphone\":\"krɪ'et\",\"ukphone\":\"kri'eɪt\"},{\"name\":\"criminal\",\"trans\":[\"犯罪的， 刑事的\",\"犯人，罪犯，刑事犯\"],\"usphone\":\"'krɪmɪnl\",\"ukphone\":\"'krɪmɪnl\"},{\"name\":\"tag\",\"trans\":[\"尾随\",\"附加语；标签\",\"给…加上标签\"],\"usphone\":\"tæɡ\",\"ukphone\":\"tæg\"},{\"name\":\"notebook\",\"trans\":[\"笔记本\"],\"usphone\":\"'notbʊk\",\"ukphone\":\"'nəutbuk\"},{\"name\":\"curious\",\"trans\":[\"好奇的； 奇怪的\"],\"usphone\":\"'kjʊrɪəs\",\"ukphone\":\"'kjuəriəs\"},{\"name\":\"indirect\",\"trans\":[\"间接的， 婉转的\"],\"usphone\":\",ɪndə'rɛkt\",\"ukphone\":\"ˌɪndə'rekt; ˌɪndaɪ'rekt\"},{\"name\":\"individual\",\"trans\":[\"个别的；独特的\",\"个人， 个体\"],\"usphone\":\"ˌɪndəˈvɪdʒʊəl\",\"ukphone\":\"ˌɪndɪ'vɪdʒuəl\"},{\"name\":\"resource\",\"trans\":[\"资源； 财力； 应付办法， 谋略\"],\"usphone\":\"'risɔrs\",\"ukphone\":\"rɪ'sɔːs; rɪ'zɔːs\"},{\"name\":\"ugly\",\"trans\":[\"丑陋的； 可怕的\"],\"usphone\":\"'ʌɡli\",\"ukphone\":\"'ʌgli\"},{\"name\":\"nuisance\",\"trans\":[\"讨厌的东西\"],\"usphone\":\"'nusns\",\"ukphone\":\"'njuːsns\"},{\"name\":\"tax\",\"trans\":[\"税，税款；负担\",\"对…征税； 使负担重， 使费尽力气\"],\"usphone\":\"tæks\",\"ukphone\":\"tæks\"},{\"name\":\"earthquake\",\"trans\":[\"地震， 大震荡\"],\"usphone\":\"'ɝθ'kwek\",\"ukphone\":\"'ɜːθkweɪk\"},{\"name\":\"excitement\",\"trans\":[\"刺激， 激动， 兴奋； 令人兴奋的事， 刺激的因素\"],\"usphone\":\"ɪk'saɪtmənt\",\"ukphone\":\"ɪk'saɪtmənt\"},{\"name\":\"nightmare\",\"trans\":[\"噩梦； 可怕的事物， 无法摆脱的恐惧\"],\"usphone\":\"'naɪt'mɛr\",\"ukphone\":\"'naɪtmeə\"},{\"name\":\"cord\",\"trans\":[\"细绳， 粗线， 索； 灯芯绒裤\"],\"usphone\":\"kɔrd\",\"ukphone\":\"kɔːd\"},{\"name\":\"ending\",\"trans\":[\"结尾， 结局； 死亡\"],\"usphone\":\"'ɛndɪŋ\",\"ukphone\":\"'endɪŋ\"},{\"name\":\"core\",\"trans\":[\"果实的心； 核心， 要点\"],\"usphone\":\"kɔr\",\"ukphone\":\"kɔː\"},{\"name\":\"council\",\"trans\":[\"理事会， 委员会\"],\"usphone\":\"'kaʊnsl\",\"ukphone\":\"'kaunsl\"},{\"name\":\"enforce\",\"trans\":[\"实施， 执行； 强制， 强迫， 迫使\"],\"usphone\":\"ɪn'fɔrs\",\"ukphone\":\"ɪn'fɔːs\"},{\"name\":\"embassy\",\"trans\":[\"大使馆； 大使馆全体成员\"],\"usphone\":\"'ɛmbəsi\",\"ukphone\":\"'embəsi\"},{\"name\":\"departure\",\"trans\":[\"离开， 起程， 出发； 背离， 违背\"],\"usphone\":\"dɪ'pɑrtʃɚ\",\"ukphone\":\"dɪ'pɑːtʃə\"},{\"name\":\"dash\",\"trans\":[\"猛冲，击碎\",\"使猛撞，飞奔；溅\",\"猛冲； 破折号\"],\"usphone\":\"dæʃ\",\"ukphone\":\"dæʃ\"},{\"name\":\"concrete\",\"trans\":[\"实在的， 具体的\",\"混凝土；具体物\"],\"usphone\":\"'kɑŋkrit\",\"ukphone\":\"'kɒŋkriːt\"},{\"name\":\"penalty\",\"trans\":[\"处罚， 惩罚； 罚金\"],\"usphone\":\"'pɛnəlti\",\"ukphone\":\"'penəlti\"},{\"name\":\"sociology\",\"trans\":[\"社会学\"],\"usphone\":\",sosɪ'ɑlədʒi\",\"ukphone\":\"ˌsəusi'ɒlədʒi\"},{\"name\":\"link\",\"trans\":[\"连接，联系\",\"环节， 联系， 纽带\"],\"usphone\":\"lɪŋk\",\"ukphone\":\"lɪŋk\"},{\"name\":\"flee\",\"trans\":[\"逃走， 逃掉， 逃离； 避开， 逃避\"],\"usphone\":\"fli\",\"ukphone\":\"fliː\"},{\"name\":\"distinct\",\"trans\":[\"与其他不同的； 清楚的， 明显的\"],\"usphone\":\"dɪ'stɪŋkt\",\"ukphone\":\"dɪ'stɪŋkt\"},{\"name\":\"scale\",\"trans\":[\"大小，规模；等级，级别；天平，磅秤；比例；刻度，标度；鳞\",\"攀登， 爬越\"],\"usphone\":\"skel\",\"ukphone\":\"skeɪl\"},{\"name\":\"recovery\",\"trans\":[\"恢复， 痊愈； 追回， 寻回， 收复\"],\"usphone\":\"rɪ'kʌvəri\",\"ukphone\":\"rɪ'kʌvəri\"},{\"name\":\"hedge\",\"trans\":[\"用篱笆围； 避免直接回答\",\"篱笆，树篱；障碍物\"],\"usphone\":\"hɛdʒ\",\"ukphone\":\"hedʒ\"},{\"name\":\"tune\",\"trans\":[\"调子；和谐\",\"调整， 调节； 为调音\"],\"usphone\":\"tun\",\"ukphone\":\"tjuːn\"},{\"name\":\"weep\",\"trans\":[\"哭泣， 流泪； 渗出\"],\"usphone\":\"wip\",\"ukphone\":\"wiːp\"},{\"name\":\"aware\",\"trans\":[\"知道的， 意识到的\"],\"usphone\":\"ə'wɛr\",\"ukphone\":\"ə'weə\"},{\"name\":\"drama\",\"trans\":[\"戏剧， 剧本； 戏剧性事件\"],\"usphone\":\"'drɑmə\",\"ukphone\":\"'drɑːmə\"},{\"name\":\"security\",\"trans\":[\"安全， 保障； 抵押品； 证券\"],\"usphone\":\"sə'kjʊrəti\",\"ukphone\":\"sɪ'kjuərəti\"},{\"name\":\"limp\",\"trans\":[\"软的；不强壮的\",\"〔因一腿受伤而〕跛行，一瘸一拐地走\",\"跛行\"],\"usphone\":\"lɪmp\",\"ukphone\":\"lɪmp\"},{\"name\":\"award\",\"trans\":[\"奖，奖品；判定\",\"授予， 给予； 判给， 裁定\"],\"usphone\":\"ə'wɔrd\",\"ukphone\":\"ə'wɔːd\"},{\"name\":\"organize\",\"trans\":[\"组织， 把…编组； 使有条理\"],\"usphone\":\"ɔrɡənˌaɪz\",\"ukphone\":\"'ɔːgənaɪz\"},{\"name\":\"marriage\",\"trans\":[\"结婚， 婚姻； 婚礼\"],\"usphone\":\"'mærɪdʒ\",\"ukphone\":\"'mærɪdʒ\"},{\"name\":\"stove\",\"trans\":[\"炉， 火炉， 电炉\"],\"usphone\":\"stov\",\"ukphone\":\"stəuv\"},{\"name\":\"alarm\",\"trans\":[\"惊恐；忧虑；警报\",\"使惊恐； 使担心\"],\"usphone\":\"ə'lɑrm\",\"ukphone\":\"ə'lɑːm\"},{\"name\":\"weed\",\"trans\":[\"除草\",\"杂草，野草\"],\"usphone\":\"wid\",\"ukphone\":\"wiːd\"},{\"name\":\"continual\",\"trans\":[\"连续的； 频频的\"],\"usphone\":\"kən'tɪnjuəl\",\"ukphone\":\"kən'tɪnjuəl\"},{\"name\":\"herd\",\"trans\":[\"兽群，牧群\",\"放牧\"],\"usphone\":\"hɝd\",\"ukphone\":\"hɜːd\"},{\"name\":\"limb\",\"trans\":[\"肢， 臂， 腿； 树枝\"],\"usphone\":\"lɪm\",\"ukphone\":\"lɪm\"},{\"name\":\"balloon\",\"trans\":[\"气球， 玩具气球\"],\"usphone\":\"bə'lun\",\"ukphone\":\"bə'luːn\"},{\"name\":\"motion\",\"trans\":[\"打手势， 示意\",\"运动；手势，眼色，动作；提议\"],\"usphone\":\"'moʃən\",\"ukphone\":\"'məuʃn\"},{\"name\":\"limited\",\"trans\":[\"有限的\"],\"usphone\":\"'lɪmɪtɪd\",\"ukphone\":\"'lɪmɪtɪd\"},{\"name\":\"idle\",\"trans\":[\"空闲的，懒散的；无用的\",\"虚度， 无所事事\"],\"usphone\":\"'aɪdl\",\"ukphone\":\"'aɪdl\"},{\"name\":\"confidence\",\"trans\":[\"信任， 信赖； 信心， 自信\"],\"usphone\":\"'kɑnfɪdəns\",\"ukphone\":\"'kɒnfɪdəns\"},{\"name\":\"arbitrary\",\"trans\":[\"随心所欲的， 专断的\"],\"usphone\":\"ˈɑːrbətreri\",\"ukphone\":\"'ɑːbɪtrəri\"},{\"name\":\"fearful\",\"trans\":[\"害怕的， 可怕的； 不安的， 忧虑的\"],\"usphone\":\"'fɪrfəl\",\"ukphone\":\"'fɪəfl\"},{\"name\":\"accent\",\"trans\":[\"口音， 腔调； 重音\"],\"usphone\":\"'æksɛnt\",\"ukphone\":\"'æksənt\"},{\"name\":\"passive\",\"trans\":[\"被动的， 消极的\"],\"usphone\":\"'pæsɪv\",\"ukphone\":\"'pæsɪv\"},{\"name\":\"fertilizer\",\"trans\":[\"肥料\"],\"usphone\":\"'fɝtəlaɪzɚ\",\"ukphone\":\"'fɜːtəlaɪzə\"},{\"name\":\"lorry\",\"trans\":[\"运货汽车， 卡车\"],\"usphone\":\"'lɔri\",\"ukphone\":\"'lɒri\"},{\"name\":\"carrier\",\"trans\":[\"运输工具， 运载工具； 带菌者； 载重架， 置物架\"],\"usphone\":\"'kærɪɚ\",\"ukphone\":\"'kæriə\"},{\"name\":\"fragment\",\"trans\":[\"成碎片\",\"碎片，破片，碎块\"],\"usphone\":\"'fræɡmənt\",\"ukphone\":\"'frægmənt\"},{\"name\":\"corresponding\",\"trans\":[\"相应的， 符合的\"],\"usphone\":\",kɔrə'spɑndɪŋ\",\"ukphone\":\"ˌkɒrə'spɒndɪŋ\"},{\"name\":\"response\",\"trans\":[\"回答， 答复； 反应， 响应\"],\"usphone\":\"rɪ'spɑns\",\"ukphone\":\"rɪ'spɒns\"},{\"name\":\"treaty\",\"trans\":[\"条约， 协议， 协定\"],\"usphone\":\"'triti\",\"ukphone\":\"'triːti\"},{\"name\":\"responsive\",\"trans\":[\"响应的； 敏感的， 易受影响的\"],\"usphone\":\"rɪ'spɑnsɪv\",\"ukphone\":\"rɪ'spɒnsɪv\"},{\"name\":\"ounce\",\"trans\":[\"盎司\"],\"usphone\":\"aʊns\",\"ukphone\":\"auns\"},{\"name\":\"challenge\",\"trans\":[\"挑战；邀请比赛；艰巨的任务；怀疑，质问\",\"反对， 公然反抗； 向…挑战； 对…质疑\"],\"usphone\":\"'tʃælɪndʒ\",\"ukphone\":\"'tʃælɪndʒ\"},{\"name\":\"emit\",\"trans\":[\"散发； 发射； 发表\"],\"usphone\":\"ɪ'mɪt\",\"ukphone\":\"i'mɪt\"},{\"name\":\"category\",\"trans\":[\"种类， 类， 类别\"],\"usphone\":\"'kætəɡɔri\",\"ukphone\":\"'kætəgəri\"},{\"name\":\"rival\",\"trans\":[\"竞争的，对抗的\",\"竞争对手，敌手；可与匹敌的人\",\"与 …竞争； 与…匹敌， 比得上\"],\"usphone\":\"'raɪvl\",\"ukphone\":\"'raɪvl\"},{\"name\":\"intend\",\"trans\":[\"想要， 打算； 意思是； 打算使\"],\"usphone\":\"ɪn'tɛnd\",\"ukphone\":\"ɪn'tend\"},{\"name\":\"snap\",\"trans\":[\"咔嚓折断，啪地绷断；吧嗒一声；猛咬；厉声说话，怒声责骂\",\"仓促的， 突然的\",\"吧嗒声；快照\"],\"usphone\":\"snæp\",\"ukphone\":\"snæp\"}]");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("vscode");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/extension.ts");
/******/ })()
;
//# sourceMappingURL=extension.js.map