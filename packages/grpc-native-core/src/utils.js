
/**
 * 
 * ILLEGAL KEYS 
 */
var ILLEGAL_KEYS = ['__proto__', 'prototype', 'constructor'];

/**
 * Returns true, if given key is included in the blacklisted
 * keys.
 * @param key key for check, string.
 */
exports.isIllegalKey = function (key) {
  return ILLEGAL_KEYS.indexOf(key) !== -1;
}

/**
 * Returns true if path is/has unsafe keys.
 * @param path 
 */
exports.isProtoPath = function (path) {
  return Array.isArray(path)
    ? path.some(module.exports.isIllegalKey)
    : typeof path === "string"
      ? module.exports.isIllegalKey(path)
      : false;
}