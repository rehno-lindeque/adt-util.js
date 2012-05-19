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
