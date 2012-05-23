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
