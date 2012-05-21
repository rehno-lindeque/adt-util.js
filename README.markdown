# adt-util.js

Practical, generic utilities for working with [adt.js](https://github.com/rehno-lindeque/adt.js).

## Usage

### Construct and adt from an object

```javascript
TODO... adt.fromObject(...)
```

### Create partial evaluators

```javascript
var
  comparison = adt({
    eq: function(a,b) { return a === b; },
    lt: function(a,b) { return a < b; },
    gt: function(a,b) { return a <= b; },
    lte: function(a,b) { return a > b; },
    gte: function(a,b) { return a >= b; }
  }),
  comparisonPartial = adt.partial(comparison),
  atLeast5 = comparisonPartial.lte(5);

console.log("Is 4 at least as big as 5? " + (atLeast5(4)? "yes" : "no"));
console.log("Is 5 at least as big as 5? " + (atLeast5(5)? "yes" : "no"));
```
