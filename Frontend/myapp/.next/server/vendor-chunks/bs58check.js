"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bs58check";
exports.ids = ["vendor-chunks/bs58check"];
exports.modules = {

/***/ "(ssr)/./node_modules/bs58check/base.js":
/*!****************************************!*\
  !*** ./node_modules/bs58check/base.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar base58 = __webpack_require__(/*! bs58 */ \"(ssr)/./node_modules/bs58/index.js\")\n\nmodule.exports = function (checksumFn) {\n  // Encode a buffer as a base58-check encoded string\n  function encode (payload) {\n    var payloadU8 = Uint8Array.from(payload)\n    var checksum = checksumFn(payloadU8)\n    var length = payloadU8.length + 4\n    var both = new Uint8Array(length)\n    both.set(payloadU8, 0)\n    both.set(checksum.subarray(0, 4), payloadU8.length)\n    return base58.encode(both, length)\n  }\n\n  function decodeRaw (buffer) {\n    var payload = buffer.slice(0, -4)\n    var checksum = buffer.slice(-4)\n    var newChecksum = checksumFn(payload)\n\n    if (checksum[0] ^ newChecksum[0] |\n        checksum[1] ^ newChecksum[1] |\n        checksum[2] ^ newChecksum[2] |\n        checksum[3] ^ newChecksum[3]) return\n\n    return payload\n  }\n\n  // Decode a base58-check encoded string to a buffer, no result if checksum is wrong\n  function decodeUnsafe (string) {\n    var buffer = base58.decodeUnsafe(string)\n    if (!buffer) return\n\n    return decodeRaw(buffer)\n  }\n\n  function decode (string) {\n    var buffer = base58.decode(string)\n    var payload = decodeRaw(buffer, checksumFn)\n    if (!payload) throw new Error('Invalid checksum')\n    return payload\n  }\n\n  return {\n    encode: encode,\n    decode: decode,\n    decodeUnsafe: decodeUnsafe\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnM1OGNoZWNrL2Jhc2UuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGdEQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvYnM1OGNoZWNrL2Jhc2UuanM/YmE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIGJhc2U1OCA9IHJlcXVpcmUoJ2JzNTgnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjaGVja3N1bUZuKSB7XG4gIC8vIEVuY29kZSBhIGJ1ZmZlciBhcyBhIGJhc2U1OC1jaGVjayBlbmNvZGVkIHN0cmluZ1xuICBmdW5jdGlvbiBlbmNvZGUgKHBheWxvYWQpIHtcbiAgICB2YXIgcGF5bG9hZFU4ID0gVWludDhBcnJheS5mcm9tKHBheWxvYWQpXG4gICAgdmFyIGNoZWNrc3VtID0gY2hlY2tzdW1GbihwYXlsb2FkVTgpXG4gICAgdmFyIGxlbmd0aCA9IHBheWxvYWRVOC5sZW5ndGggKyA0XG4gICAgdmFyIGJvdGggPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgYm90aC5zZXQocGF5bG9hZFU4LCAwKVxuICAgIGJvdGguc2V0KGNoZWNrc3VtLnN1YmFycmF5KDAsIDQpLCBwYXlsb2FkVTgubGVuZ3RoKVxuICAgIHJldHVybiBiYXNlNTguZW5jb2RlKGJvdGgsIGxlbmd0aClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZVJhdyAoYnVmZmVyKSB7XG4gICAgdmFyIHBheWxvYWQgPSBidWZmZXIuc2xpY2UoMCwgLTQpXG4gICAgdmFyIGNoZWNrc3VtID0gYnVmZmVyLnNsaWNlKC00KVxuICAgIHZhciBuZXdDaGVja3N1bSA9IGNoZWNrc3VtRm4ocGF5bG9hZClcblxuICAgIGlmIChjaGVja3N1bVswXSBeIG5ld0NoZWNrc3VtWzBdIHxcbiAgICAgICAgY2hlY2tzdW1bMV0gXiBuZXdDaGVja3N1bVsxXSB8XG4gICAgICAgIGNoZWNrc3VtWzJdIF4gbmV3Q2hlY2tzdW1bMl0gfFxuICAgICAgICBjaGVja3N1bVszXSBeIG5ld0NoZWNrc3VtWzNdKSByZXR1cm5cblxuICAgIHJldHVybiBwYXlsb2FkXG4gIH1cblxuICAvLyBEZWNvZGUgYSBiYXNlNTgtY2hlY2sgZW5jb2RlZCBzdHJpbmcgdG8gYSBidWZmZXIsIG5vIHJlc3VsdCBpZiBjaGVja3N1bSBpcyB3cm9uZ1xuICBmdW5jdGlvbiBkZWNvZGVVbnNhZmUgKHN0cmluZykge1xuICAgIHZhciBidWZmZXIgPSBiYXNlNTguZGVjb2RlVW5zYWZlKHN0cmluZylcbiAgICBpZiAoIWJ1ZmZlcikgcmV0dXJuXG5cbiAgICByZXR1cm4gZGVjb2RlUmF3KGJ1ZmZlcilcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgdmFyIGJ1ZmZlciA9IGJhc2U1OC5kZWNvZGUoc3RyaW5nKVxuICAgIHZhciBwYXlsb2FkID0gZGVjb2RlUmF3KGJ1ZmZlciwgY2hlY2tzdW1GbilcbiAgICBpZiAoIXBheWxvYWQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjaGVja3N1bScpXG4gICAgcmV0dXJuIHBheWxvYWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZGVjb2RlVW5zYWZlOiBkZWNvZGVVbnNhZmVcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bs58check/base.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/bs58check/index.js":
/*!*****************************************!*\
  !*** ./node_modules/bs58check/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar { sha256 } = __webpack_require__(/*! @noble/hashes/sha256 */ \"(ssr)/./node_modules/@noble/hashes/sha256.js\")\nvar bs58checkBase = __webpack_require__(/*! ./base */ \"(ssr)/./node_modules/bs58check/base.js\")\n\n// SHA256(SHA256(buffer))\nfunction sha256x2 (buffer) {\n  return sha256(sha256(buffer))\n}\n\nmodule.exports = bs58checkBase(sha256x2)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnM1OGNoZWNrL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLE1BQU0sU0FBUyxFQUFFLG1CQUFPLENBQUMsMEVBQXNCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFROztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL2JzNThjaGVjay9pbmRleC5qcz83OGZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgeyBzaGEyNTYgfSA9IHJlcXVpcmUoJ0Bub2JsZS9oYXNoZXMvc2hhMjU2JylcbnZhciBiczU4Y2hlY2tCYXNlID0gcmVxdWlyZSgnLi9iYXNlJylcblxuLy8gU0hBMjU2KFNIQTI1NihidWZmZXIpKVxuZnVuY3Rpb24gc2hhMjU2eDIgKGJ1ZmZlcikge1xuICByZXR1cm4gc2hhMjU2KHNoYTI1NihidWZmZXIpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJzNThjaGVja0Jhc2Uoc2hhMjU2eDIpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bs58check/index.js\n");

/***/ })

};
;