var Unterproto = module.exports;

// Inherits from `this`.
// Creates new object and rewrites `opt` into it.
// It sets `this` as a Unterprototype of newly created object.
Unterproto.inherits = function (opt) {
	var F = function () {};
	F.prototype = this;
	var that = new F();

	// Copy all options
	for (var p in opt) {
		if (opt.hasOwnProperty(p)) {
			that[p] = opt[p];
		}
	}
	
	return that;
};

// Initialize `this`. It runs `this.initialize`
// and returns `this`.
Unterproto.init = function () {
	var res = this.initialize.apply(this, arguments); 
	return res === undefined ? this : res;
};
Unterproto.initialize = function () {};

// Shorthand for `Unterproto.inherits().init({ ... })`
Unterproto.instance = function () {
	var that = this.inherits();
	return that.init.apply(that, arguments);
};