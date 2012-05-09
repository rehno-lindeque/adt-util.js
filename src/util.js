  // Compose two algebraic data types so that every evaluator/constructor takes
  // the result of the next one as its input.
  // E.g. Take (f . g) as the composition of two functions `f` and `g`.
  // Then: (f . g)(x) = f(g(x))
  adt.compose = function() {
    throw "adt.compose is not yet implemented"
    /* TODO: BUSY HERE
    if (arguments.length === 0)
      return adt();
    var
      a = arguments,
      composition = typeof a[0] === 'function'? a[0] : adt(a[0]);
    for (var i = 1; i < arguments.length; ++i) {
      if (typeof a[i] === 'function')
        composition = function(){ composition(a[i].apply(this, arguments)); };
    }
    composition.eval = adt
    return composition;*/
  };
