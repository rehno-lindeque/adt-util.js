/*
 * adt-util.js - Algebraic Data Type utilities for JavaScript
 * adt-util.js is free, public domain software (http://creativecommons.org/publicdomain/zero/1.0/)
 * Originally created by Rehno Lindeque of http://www.mischievousmeerkat.com
 * Use it in combination with https://github.com/rehno-lindeque/adt.js
 */
var adt = adt || {};
(function() {
"use strict";
  adt.fromObject = function(obj){

    throw "adt.fromObject is not yet implemented";

    var 
      key, 
      result = [],
      cons = adt({ Object: function(a) { adt.fromObject(a); } });
    for (var key in obj)
      adt.construct(key, cons(obj));
  };

  adt.fromObjectDeep = function(obj){

    throw "adt.fromObjectDeep is not yet implemented";

    for (var key in obj) {
      //TODO: ... create adt from object (and also traverse into arrays)
    }
  };
  // Export util to a CommonJS module if exports is available
  if (typeof module !== "undefined" && module !== null)
    module.exports = util;
})();
