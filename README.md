unterproto [![Build Status](https://secure.travis-ci.org/fragphace/unterproto.png)](http://travis-ci.org/fragphace/unterproto)
==========

Simplest possible prototypal inheritance sugar. For node.js and browser.

## Installation

For node.js:

```
npm install unterproto
```

For browser you must include `lib/unterproto.js` into your page.
`Unterproto` is AMD-aware so if you are using require.js you don't
need to add an extra shim for it.

## Usage

See live example: [http://jsfiddle.net/fragphace/UCEqd/](http://jsfiddle.net/fragphace/UCEqd/).

```javascript
(function () {
  var A = Unterproto.inherits({
    initialize: function (foo) {
        this.foo = foo;
    }
  });
  
  var B = A.inherits({
    getFoo: function () {
        return this.foo;
    }
  });
  
  var b = B.instance('bar');
  alert(b.getFoo()); // 'bar'
})();
```

## Tests

For node.js tests run:

```
npm test
```

For browser test run buster manually or try:

```
grunt buster
```

Tested under Firefox 16, Chrome 22 and IE 9.