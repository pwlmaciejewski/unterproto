(function () {
  var buster, Proto;

  if (typeof module !== 'undefined' && module.exports) {
    buster = require('buster');
    Proto = require('../lib/unterproto');
  } else if (typeof require !== 'undefined') {
    buster = window.buster;
    require(['lib/unterproto'], function (Unterproto) {
      Proto = Unterproto;
      buster.run();
    });
  } else {
    buster = window.buster;
    Proto = window.Unterproto;
  }

  buster.testCase('Inherits', {
    'no arguments': {
      setUp: function () {
        this.Foo = Proto.inherits();      
      },

      'test prototype': function () {
        assert.same(Object.getPrototypeOf(this.Foo), Proto);      
      },

      'test if product is an empty object': function () {
        assert.equals(this.Foo, {});      
      }
    },

    'with arguments': function () {
      var opt = { foo: 'bar' };
      var Foo = Proto.inherits(opt);
      assert.equals(Foo, opt);
    },

    'clone arguments': function () {
      var opt = { foo: 'bar' };
      var Foo = Proto.inherits(opt);
      opt.foo = 'baz';
      refute.same(Foo.foo, 'baz');
    }
  });

  buster.testCase('Init', {
     'no arguments': {
        setUp: function () {
         this.Foo = Proto.inherits();
         this.foo = this.Foo.instance();
          
        },

        'test prototype': function () {
          assert.same(Object.getPrototypeOf(this.foo), this.Foo);        
        },

        'test if it can be called without arguments': function () {
          assert.equals(this.foo, {});
        }
     },

     'with arguments': function () {
       var Foo = Proto.inherits({
         initialize: function (str) {
           this.bar = str;
         }
       });
       var foo = Foo.instance('baz');
       assert.same(foo.bar, 'baz');    
     },

     'test if initialize returns something it should be ignored': function () {
       var o = { foo: 'bar' };
       var Foo = Proto.inherits({
         initialize: function () {
           return o;
         }
       });
       var foo = Foo.instance();
       refute.same(foo, o);
     }
  });
})();
