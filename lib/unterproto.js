(function () {
	var Unterproto = {
		_objectCreate: function (o) {
			var F = function () {};
			F.prototype = o;
			return new F();
		},

		_clone: function (to, from) {
			for (var p in from) {
				if (from.hasOwnProperty(p)) {
					to[p] = from[p];
				}
			}		
		},

		inherits: function (opt) {
			var that = this._objectCreate(this);
			this._clone(that, opt);
			return that;
		},

		init: function () {
			this.initialize.apply(this, arguments); 
			return this;		
		},

		initialize: function () {},

		instance: function () {
			var that = this.inherits();
			return that.init.apply(that, arguments);		
		}
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Unterproto;
	} else if (typeof require !== 'undefined') {
		define([], function () {
			return Unterproto;
		});
	} else {
		window.Unterproto = Unterproto;
	}
})();