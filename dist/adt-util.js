/*
 * adt-util.js - Algebraic Data Type utilities for JavaScript
 * adt-util.js is free, public domain software (http://creativecommons.org/publicdomain/zero/1.0/)
 * Originally created by Rehno Lindeque of http://www.mischievousmeerkat.com
 * Use it in combination with https://github.com/rehno-lindeque/adt.js
 */
var adt = adt || (typeof require === 'function'? require('adt.js') : {});
(function() {
"use strict";
  adt.partial = function(adtInterface) {
    var f, tags, key, i, concat;
    concat = Array.prototype.concat.call;
    f = function() { var a = arguments; return function() { adtInterface.apply(adtInterface, concat(a, arguments)); }; };
    // Get all the tags of all of the interface
    tags = [];
    for (key in adtInterface)
      if (key.length > 0 && key[0] !== '_')
        tags.push(key);
    // Add all evaluators to the interface
    f._eval = f;
    for (i = 0; i < tags.length; ++i)
      f[tags[i]] = (function(f, tag){
        return function(){ var a = arguments; return function() { adtInterface[tag].apply(adtInterface, concat(a, arguments)); }; };
      })(f, tags[i]);
    return f;
  };
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
