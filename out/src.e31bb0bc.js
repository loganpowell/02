// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@thi.ng/api/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogLevel = exports.SIZEOF = exports.Type = exports.NO_OP = exports.SEMAPHORE = exports.EVENT_DISABLE = exports.EVENT_ENABLE = exports.EVENT_ALL = exports.DEFAULT_EPS = void 0;

var _SIZEOF;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_EPS = 1e-6;
exports.DEFAULT_EPS = DEFAULT_EPS;
var EVENT_ALL = "*";
exports.EVENT_ALL = EVENT_ALL;
var EVENT_ENABLE = "enable";
exports.EVENT_ENABLE = EVENT_ENABLE;
var EVENT_DISABLE = "disable";
/**
 * Internal use only. **Do NOT use in user land code!**
 */

exports.EVENT_DISABLE = EVENT_DISABLE;
var SEMAPHORE = Symbol();
/**
 * No-effect placeholder function.
 */

exports.SEMAPHORE = SEMAPHORE;

var NO_OP = function () {};

exports.NO_OP = NO_OP;
var Type;
exports.Type = Type;

(function (Type) {
  Type[Type["U8"] = 0] = "U8";
  Type[Type["U8C"] = 1] = "U8C";
  Type[Type["I8"] = 2] = "I8";
  Type[Type["U16"] = 3] = "U16";
  Type[Type["I16"] = 4] = "I16";
  Type[Type["U32"] = 5] = "U32";
  Type[Type["I32"] = 6] = "I32";
  Type[Type["F32"] = 7] = "F32";
  Type[Type["F64"] = 8] = "F64";
})(Type || (exports.Type = Type = {}));

var SIZEOF = (_SIZEOF = {}, _defineProperty(_SIZEOF, 0
/* U8 */
, 1), _defineProperty(_SIZEOF, 1
/* U8C */
, 1), _defineProperty(_SIZEOF, 2
/* I8 */
, 1), _defineProperty(_SIZEOF, 3
/* U16 */
, 2), _defineProperty(_SIZEOF, 4
/* I16 */
, 2), _defineProperty(_SIZEOF, 5
/* U32 */
, 4), _defineProperty(_SIZEOF, 6
/* I32 */
, 4), _defineProperty(_SIZEOF, 7
/* F32 */
, 4), _defineProperty(_SIZEOF, 8
/* F64 */
, 8), _SIZEOF);
exports.SIZEOF = SIZEOF;
var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["FINE"] = 0] = "FINE";
  LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["SEVERE"] = 4] = "SEVERE";
  LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
},{}],"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/@thi.ng/api/assert.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = void 0;

var _api = require("./api");

/**
 * Takes a `test` result or predicate function without args and throws
 * error with given `msg` if test failed (i.e. is falsy). The function
 * is only enabled if `NODE_ENV != "production"` or if
 * `UMBRELLA_ASSERTS = 1`.
 */
var assert = typeof process === "undefined" || "development" !== "production" || undefined === "1" ? function (test) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "assertion failed";

  if (typeof test === "function" && !test() || !test) {
    throw new Error(typeof msg === "function" ? msg() : msg);
  }
} : _api.NO_OP;
exports.assert = assert;
},{"./api":"../node_modules/@thi.ng/api/api.js","process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/src/builtins/_empty.js"}],"../node_modules/@thi.ng/api/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLogger = exports.NULL_LOGGER = void 0;

var _api = require("./api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NULL_LOGGER = Object.freeze({
  level: _api.LogLevel.NONE,
  fine: function () {},
  debug: function () {},
  info: function () {},
  warn: function () {},
  severe: function () {}
});
exports.NULL_LOGGER = NULL_LOGGER;

var ConsoleLogger =
/*#__PURE__*/
function () {
  function ConsoleLogger(id) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _api.LogLevel.FINE;

    _classCallCheck(this, ConsoleLogger);

    this.id = id;
    this.level = level;
  }

  _createClass(ConsoleLogger, [{
    key: "fine",
    value: function fine() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.level <= _api.LogLevel.FINE && this.log("FINE", args);
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.level <= _api.LogLevel.DEBUG && this.log("DEBUG", args);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.level <= _api.LogLevel.INFO && this.log("INFO", args);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.level <= _api.LogLevel.WARN && this.log("WARN", args);
    }
  }, {
    key: "severe",
    value: function severe() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.level <= _api.LogLevel.SEVERE && this.log("SEVERE", args);
    }
  }, {
    key: "log",
    value: function log(level, args) {
      var _console;

      (_console = console).log.apply(_console, ["[".concat(level, "] ").concat(this.id, ":")].concat(_toConsumableArray(args)));
    }
  }]);

  return ConsoleLogger;
}();

exports.ConsoleLogger = ConsoleLogger;
},{"./api":"../node_modules/@thi.ng/api/api.js"}],"../node_modules/@thi.ng/api/mixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = void 0;

/**
 * Class behavior mixin based on:
 * http://raganwald.com/2015/06/26/decorators-in-es7.html
 *
 * Additionally only injects/overwrites properties in target, which are
 * NOT marked with `@nomixin` (i.e. haven't set their `configurable`
 * property descriptor flag to `false`)
 *
 * @param behaviour to mixin
 * @param sharedBehaviour
 * @returns decorator function
 */
var mixin = function (behaviour) {
  var sharedBehaviour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instanceKeys = Reflect.ownKeys(behaviour);
  var sharedKeys = Reflect.ownKeys(sharedBehaviour);
  var typeTag = Symbol("isa");

  function _mixin(clazz) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = instanceKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;
        var existing = Object.getOwnPropertyDescriptor(clazz.prototype, key);

        if (!existing || existing.configurable) {
          Object.defineProperty(clazz.prototype, key, {
            value: behaviour[key],
            writable: true
          });
        } else {
          console.log("not patching: ".concat(clazz.name, ".").concat(key.toString()));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    Object.defineProperty(clazz.prototype, typeTag, {
      value: true
    });
    return clazz;
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = sharedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;
      Object.defineProperty(_mixin, key, {
        value: sharedBehaviour[key],
        enumerable: sharedBehaviour.propertyIsEnumerable(key)
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  Object.defineProperty(_mixin, Symbol.hasInstance, {
    value: function (x) {
      return !!x[typeTag];
    }
  });
  return _mixin;
};

exports.mixin = mixin;
},{}],"../node_modules/@thi.ng/api/decorators/configurable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configurable = void 0;

/**
 * Property decorator factory. Sets `configurable` flag of PropertyDescriptor
 * to given state.
 *
 * @param state
 */
var configurable = function (state) {
  return function (_, __, descriptor) {
    descriptor.configurable = state;
  };
};

exports.configurable = configurable;
},{}],"../node_modules/@thi.ng/errors/deferror.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defError = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var defError = function (prefix) {
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (msg) {
    return msg !== undefined ? ": " + msg : "";
  };
  return (
    /*#__PURE__*/
    function (_Error) {
      _inherits(_class, _Error);

      function _class(msg) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, prefix(msg) + suffix(msg)));
      }

      return _class;
    }(_wrapNativeSuper(Error))
  );
};

exports.defError = defError;
},{}],"../node_modules/@thi.ng/errors/illegal-arguments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArgs = exports.IllegalArgumentError = void 0;

var _deferror = require("./deferror");

var IllegalArgumentError = (0, _deferror.defError)(function () {
  return "illegal argument(s)";
});
exports.IllegalArgumentError = IllegalArgumentError;

var illegalArgs = function (msg) {
  throw new IllegalArgumentError(msg);
};

exports.illegalArgs = illegalArgs;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/illegal-arity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalArity = exports.IllegalArityError = void 0;

var _deferror = require("./deferror");

var IllegalArityError = (0, _deferror.defError)(function () {
  return "illegal arity";
});
exports.IllegalArityError = IllegalArityError;

var illegalArity = function (n) {
  throw new IllegalArityError(n);
};

exports.illegalArity = illegalArity;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/illegal-state.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.illegalState = exports.IllegalStateError = void 0;

var _deferror = require("./deferror");

var IllegalStateError = (0, _deferror.defError)(function () {
  return "illegal state";
});
exports.IllegalStateError = IllegalStateError;

var illegalState = function (msg) {
  throw new IllegalStateError(msg);
};

exports.illegalState = illegalState;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/unsupported.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsupported = exports.UnsupportedOperationError = void 0;

var _deferror = require("./deferror");

var UnsupportedOperationError = (0, _deferror.defError)(function () {
  return "unsupported operation";
});
exports.UnsupportedOperationError = UnsupportedOperationError;

var unsupported = function (msg) {
  throw new UnsupportedOperationError(msg);
};

exports.unsupported = unsupported;
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js"}],"../node_modules/@thi.ng/errors/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deferror = require("./deferror");

Object.keys(_deferror).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deferror[key];
    }
  });
});

var _illegalArguments = require("./illegal-arguments");

Object.keys(_illegalArguments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArguments[key];
    }
  });
});

var _illegalArity = require("./illegal-arity");

Object.keys(_illegalArity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalArity[key];
    }
  });
});

var _illegalState = require("./illegal-state");

Object.keys(_illegalState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _illegalState[key];
    }
  });
});

var _unsupported = require("./unsupported");

Object.keys(_unsupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _unsupported[key];
    }
  });
});
},{"./deferror":"../node_modules/@thi.ng/errors/deferror.js","./illegal-arguments":"../node_modules/@thi.ng/errors/illegal-arguments.js","./illegal-arity":"../node_modules/@thi.ng/errors/illegal-arity.js","./illegal-state":"../node_modules/@thi.ng/errors/illegal-state.js","./unsupported":"../node_modules/@thi.ng/errors/unsupported.js"}],"../node_modules/@thi.ng/api/decorators/deprecated.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecated = void 0;

var _errors = require("@thi.ng/errors");

/**
 * Method property decorator factory. Augments original method with
 * deprecation message (via console), shown when method is invoked.
 * Accepts optional message arg. Throws error if assigned property
 * is not a function.
 *
 * @param msg deprecation message
 */
var deprecated = function (msg) {
  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.log;
  return function (target, prop, descriptor) {
    var signature = "".concat(target.constructor.name, "#").concat(prop.toString());
    var fn = descriptor.value;

    if (typeof fn !== "function") {
      (0, _errors.illegalArgs)("".concat(signature, " is not a function"));
    }

    descriptor.value = function () {
      log("DEPRECATED ".concat(signature, ": ").concat(msg || "will be removed soon"));
      return fn.apply(this, arguments);
    };

    return descriptor;
  };
};

exports.deprecated = deprecated;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/api/decorators/nomixin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nomixin = void 0;

/**
 * Method property decorator. Sets `configurable` flag of
 * PropertyDescriptor to `false` (same as `@configurable(false)`).
 * Intended to be used in combination with mixin decorators to enable
 * partial implementations of mixed-in behaviors in target class and
 * avoid them being overidden by mixed-in behaviour.
 */
var nomixin = function (_, __, descriptor) {
  descriptor.configurable = false;
};

exports.nomixin = nomixin;
},{}],"../node_modules/@thi.ng/api/decorators/sealed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sealed = void 0;

/**
 * Class decorator. Seals both constructor and prototype.
 *
 * @param constructor
 */
var sealed = function (constructor) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

exports.sealed = sealed;
},{}],"../node_modules/@thi.ng/api/mixins/ienable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEnableMixin = void 0;

var _api = require("../api");

var _mixin = require("../mixin");

/**
 * Mixin class decorator, injects IEnable default implementation, incl.
 * a `_enabled` property. If the target also implements the `INotify`
 * interface, `enable()` and `disable()` will automatically emit the
 * respective events.
 */
var IEnableMixin = (0, _mixin.mixin)({
  _enabled: true,
  isEnabled: function () {
    return this._enabled;
  },
  enable: function () {
    this._enabled = true;

    if (this.notify) {
      this.notify({
        id: _api.EVENT_ENABLE,
        target: this
      });
    }
  },
  disable: function () {
    this._enabled = false;

    if (this.notify) {
      this.notify({
        id: _api.EVENT_DISABLE,
        target: this
      });
    }
  },
  toggle: function () {
    this._enabled ? this.disable() : this.enable();
    return this._enabled;
  }
});
exports.IEnableMixin = IEnableMixin;
},{"../api":"../node_modules/@thi.ng/api/api.js","../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/mixins/inotify.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INotifyMixin = exports.inotify_dispatch = void 0;

var _api = require("../api");

var _mixin = require("../mixin");

var inotify_dispatch = function (listeners, e) {
  if (!listeners) return;

  for (var i = 0, n = listeners.length, l; i < n; i++) {
    l = listeners[i];
    l[0].call(l[1], e);

    if (e.canceled) {
      return;
    }
  }
};
/**
 * Mixin class decorator, injects INotify default implementation, incl.
 * a lazily instantiated `_listeners` property object, storing
 * registered listeners.
 */


exports.inotify_dispatch = inotify_dispatch;
var INotifyMixin = (0, _mixin.mixin)({
  addListener: function (id, fn, scope) {
    var l = (this._listeners = this._listeners || {})[id];

    if (!l) {
      l = this._listeners[id] = [];
    }

    if (this.__listener(l, fn, scope) === -1) {
      l.push([fn, scope]);
      return true;
    }

    return false;
  },
  removeListener: function (id, fn, scope) {
    if (!this._listeners) return false;
    var l = this._listeners[id];

    if (l) {
      var idx = this.__listener(l, fn, scope);

      if (idx !== -1) {
        l.splice(idx, 1);
        return true;
      }
    }

    return false;
  },
  notify: function (e) {
    if (!this._listeners) return;
    e.target === undefined && (e.target = this);
    inotify_dispatch(this._listeners[e.id], e);
    inotify_dispatch(this._listeners[_api.EVENT_ALL], e);
  },
  __listener: function (listeners, f, scope) {
    var i = listeners.length;

    while (--i >= 0) {
      var l = listeners[i];

      if (l[0] === f && l[1] === scope) {
        break;
      }
    }

    return i;
  }
});
exports.INotifyMixin = INotifyMixin;
},{"../api":"../node_modules/@thi.ng/api/api.js","../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/mixins/iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterable = void 0;

var _mixin = require("../mixin");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iterable = function (prop) {
  return (0, _mixin.mixin)(_defineProperty({}, Symbol.iterator,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.delegateYield(this[prop], "t0", 1);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
};

exports.iterable = iterable;
},{"../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/mixins/iwatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IWatchMixin = void 0;

var _mixin = require("../mixin");

var IWatchMixin = (0, _mixin.mixin)({
  addWatch: function (id, fn) {
    this._watches = this._watches || {};

    if (this._watches[id]) {
      return false;
    }

    this._watches[id] = fn;
    return true;
  },
  removeWatch: function (id) {
    if (!this._watches) return;

    if (this._watches[id]) {
      delete this._watches[id];
      return true;
    }

    return false;
  },
  notifyWatches: function (oldState, newState) {
    if (!this._watches) return;
    var w = this._watches;

    for (var id in w) {
      w[id](id, oldState, newState);
    }
  }
});
exports.IWatchMixin = IWatchMixin;
},{"../mixin":"../node_modules/@thi.ng/api/mixin.js"}],"../node_modules/@thi.ng/api/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _assert = require("./assert");

Object.keys(_assert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assert[key];
    }
  });
});

var _logger = require("./logger");

Object.keys(_logger).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logger[key];
    }
  });
});

var _mixin = require("./mixin");

Object.keys(_mixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mixin[key];
    }
  });
});

var _configurable = require("./decorators/configurable");

Object.keys(_configurable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _configurable[key];
    }
  });
});

var _deprecated = require("./decorators/deprecated");

Object.keys(_deprecated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deprecated[key];
    }
  });
});

var _nomixin = require("./decorators/nomixin");

Object.keys(_nomixin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nomixin[key];
    }
  });
});

var _sealed = require("./decorators/sealed");

Object.keys(_sealed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sealed[key];
    }
  });
});

var _ienable = require("./mixins/ienable");

Object.keys(_ienable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ienable[key];
    }
  });
});

var _inotify = require("./mixins/inotify");

Object.keys(_inotify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inotify[key];
    }
  });
});

var _iterable = require("./mixins/iterable");

Object.keys(_iterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterable[key];
    }
  });
});

var _iwatch = require("./mixins/iwatch");

Object.keys(_iwatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iwatch[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/api/api.js","./assert":"../node_modules/@thi.ng/api/assert.js","./logger":"../node_modules/@thi.ng/api/logger.js","./mixin":"../node_modules/@thi.ng/api/mixin.js","./decorators/configurable":"../node_modules/@thi.ng/api/decorators/configurable.js","./decorators/deprecated":"../node_modules/@thi.ng/api/decorators/deprecated.js","./decorators/nomixin":"../node_modules/@thi.ng/api/decorators/nomixin.js","./decorators/sealed":"../node_modules/@thi.ng/api/decorators/sealed.js","./mixins/ienable":"../node_modules/@thi.ng/api/mixins/ienable.js","./mixins/inotify":"../node_modules/@thi.ng/api/mixins/inotify.js","./mixins/iterable":"../node_modules/@thi.ng/api/mixins/iterable.js","./mixins/iwatch":"../node_modules/@thi.ng/api/mixins/iwatch.js"}],"../node_modules/@thi.ng/hdom/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogger = exports.LOGGER = void 0;

var _api = require("@thi.ng/api");

let LOGGER = _api.NULL_LOGGER;
exports.LOGGER = LOGGER;

const setLogger = logger => exports.LOGGER = LOGGER = logger;

exports.setLogger = setLogger;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js"}],"../node_modules/@thi.ng/diff/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiffMode = void 0;
var DiffMode;
exports.DiffMode = DiffMode;

(function (DiffMode) {
  DiffMode[DiffMode["ONLY_DISTANCE"] = 0] = "ONLY_DISTANCE";
  DiffMode[DiffMode["ONLY_DISTANCE_LINEAR"] = 1] = "ONLY_DISTANCE_LINEAR";
  DiffMode[DiffMode["ONLY_DISTANCE_LINEAR_ONLY_CHANGES"] = 2] = "ONLY_DISTANCE_LINEAR_ONLY_CHANGES";
  DiffMode[DiffMode["FULL"] = 3] = "FULL";
})(DiffMode || (exports.DiffMode = DiffMode = {}));
},{}],"../node_modules/@thi.ng/equiv/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equivObject = exports.equivMap = exports.equivSet = exports.equivArrayLike = exports.equiv = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var OBJP = Object.getPrototypeOf({});
var FN = "function";
var STR = "string";

var equiv = function (a, b) {
  var proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (_typeof(a.equiv) === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (_typeof(b.equiv) === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (_typeof(a) === STR || _typeof(b) === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return equivObject(a, b);
  }

  if (_typeof(a) !== FN && a.length !== undefined && _typeof(b) !== FN && b.length !== undefined) {
    return equivArrayLike(a, b);
  }

  if (a instanceof Set && b instanceof Set) {
    return equivSet(a, b);
  }

  if (a instanceof Map && b instanceof Map) {
    return equivMap(a, b);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;

var equivArrayLike = function (a, b) {
  var _equiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equiv;

  var l = a.length;

  if (l === b.length) {
    while (--l >= 0 && _equiv(a[l], b[l])) {
      ;
    }
  }

  return l < 0;
};

exports.equivArrayLike = equivArrayLike;

var equivSet = function (a, b) {
  var _equiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equiv;

  return a.size === b.size && _equiv(_toConsumableArray(a.keys()).sort(), _toConsumableArray(b.keys()).sort());
};

exports.equivSet = equivSet;

var equivMap = function (a, b) {
  var _equiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equiv;

  return a.size === b.size && _equiv(_toConsumableArray(a).sort(), _toConsumableArray(b).sort());
};

exports.equivMap = equivMap;

var equivObject = function (a, b) {
  var _equiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : equiv;

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (var k in a) {
    if (!b.hasOwnProperty(k) || !_equiv(a[k], b[k])) {
      return false;
    }
  }

  return true;
};

exports.equivObject = equivObject;
},{}],"../node_modules/@thi.ng/diff/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffArray = void 0;

var _equiv2 = require("@thi.ng/equiv");

let _cachedFP;

let _cachedPath;

let _cachedEPC = [];
let _cachedPathPos = [];

const cachedFP = size => _cachedFP && _cachedFP.length >= size ? _cachedFP : _cachedFP = new Int32Array(size);

const cachedPath = size => _cachedPath && _cachedPath.length >= size ? _cachedPath : _cachedPath = new Int32Array(size);

const simpleDiff = (state, src, key, logDir, mode) => {
  const n = src.length;
  const linear = state.linear;
  state.distance = n;

  if (mode !== 0
  /* ONLY_DISTANCE */
  ) {
      for (let i = 0, j = 0; i < n; i++, j += 3) {
        linear[j] = logDir;
        linear[j + 1] = i;
        linear[j + 2] = src[i];
      }

      if (mode === 3
      /* FULL */
      ) {
          const _state = state[key];

          for (let i = 0; i < n; i++) {
            _state[i] = src[i];
          }
        }
    }

  return state;
};
/**
 * Based on "An O(NP) Sequence Comparison Algorithm""
 * by Wu, Manber, Myers and Miller
 *
 * - http://www.itu.dk/stud/speciale/bepjea/xwebtex/litt/an-onp-sequence-comparison-algorithm.pdf
 * - https://github.com/cubicdaiya/onp
 *
 * Various optimizations, fixes & refactorings.
 * By default uses `@thi.ng/equiv` for equality checks.
 *
 * @param a "old" array
 * @param b "new" array
 * @param mode result mode
 * @param equiv equality predicate function
 */


const diffArray = (a, b, mode = 3
/* FULL */
, equiv = _equiv2.equiv) => {
  const state = {
    distance: 0,
    adds: {},
    dels: {},
    const: {},
    linear: []
  };

  if (a === b || a == null && b == null) {
    return state;
  } else if (a == null || a.length === 0) {
    return simpleDiff(state, b, "adds", 1, mode);
  } else if (b == null || b.length === 0) {
    return simpleDiff(state, a, "dels", -1, mode);
  }

  const reverse = a.length >= b.length;

  let _a, _b, na, nb;

  if (reverse) {
    _a = b;
    _b = a;
  } else {
    _a = a;
    _b = b;
  }

  na = _a.length;
  nb = _b.length;
  const offset = na + 1;
  const delta = nb - na;
  const doff = delta + offset;
  const size = na + nb + 3;
  const path = cachedPath(size).fill(-1, 0, size);
  const fp = cachedFP(size).fill(-1, 0, size);
  const epc = _cachedEPC;
  const pathPos = _cachedPathPos;
  epc.length = 0;
  pathPos.length = 0;

  const snake = (k, p, pp) => {
    const koff = k + offset;
    let r, y;

    if (p > pp) {
      r = path[koff - 1];
      y = p;
    } else {
      r = path[koff + 1];
      y = pp;
    }

    let x = y - k;

    while (x < na && y < nb && equiv(_a[x], _b[y])) {
      x++;
      y++;
    }

    path[koff] = pathPos.length / 3;
    pathPos.push(x, y, r);
    return y;
  };

  let p = -1,
      k,
      ko;

  do {
    p++;

    for (k = -p, ko = k + offset; k < delta; k++, ko++) {
      fp[ko] = snake(k, fp[ko - 1] + 1, fp[ko + 1]);
    }

    for (k = delta + p, ko = k + offset; k > delta; k--, ko--) {
      fp[ko] = snake(k, fp[ko - 1] + 1, fp[ko + 1]);
    }

    fp[doff] = snake(delta, fp[doff - 1] + 1, fp[doff + 1]);
  } while (fp[doff] !== nb);

  state.distance = delta + 2 * p;

  if (mode !== 0
  /* ONLY_DISTANCE */
  ) {
      p = path[doff] * 3;

      while (p >= 0) {
        epc.push(p);
        p = pathPos[p + 2] * 3;
      }

      if (mode === 3
      /* FULL */
      ) {
          buildFullLog(epc, pathPos, state, _a, _b, reverse);
        } else {
        buildLinearLog(epc, pathPos, state, _a, _b, reverse, mode === 1
        /* ONLY_DISTANCE_LINEAR */
        );
      }
    }

  return state;
};

exports.diffArray = diffArray;

const buildFullLog = (epc, pathPos, state, a, b, reverse) => {
  const linear = state.linear;
  const _const = state.const;
  let i = epc.length;
  let px = 0;
  let py = 0;
  let adds;
  let dels;
  let aID;
  let dID;

  if (reverse) {
    adds = state.dels;
    dels = state.adds;
    aID = -1;
    dID = 1;
  } else {
    adds = state.adds;
    dels = state.dels;
    aID = 1;
    dID = -1;
  }

  for (; --i >= 0;) {
    const e = epc[i];
    const ppx = pathPos[e];
    const ppy = pathPos[e + 1];
    const d = ppy - ppx;

    while (px < ppx || py < ppy) {
      const dp = py - px;

      if (d > dp) {
        linear.push(aID, py, adds[py] = b[py]);
        py++;
      } else if (d < dp) {
        linear.push(dID, px, dels[px] = a[px]);
        px++;
      } else {
        linear.push(0, px, _const[px] = a[px]);
        px++;
        py++;
      }
    }
  }
};

const buildLinearLog = (epc, pathPos, state, a, b, reverse, inclConst) => {
  const linear = state.linear;
  const aID = reverse ? -1 : 1;
  const dID = reverse ? 1 : -1;
  let i = epc.length,
      px = 0,
      py = 0;

  for (; --i >= 0;) {
    const e = epc[i];
    const ppx = pathPos[e];
    const ppy = pathPos[e + 1];
    const d = ppy - ppx;

    while (px < ppx || py < ppy) {
      const dp = py - px;

      if (d > dp) {
        linear.push(aID, py, b[py]);
        py++;
      } else if (d < dp) {
        linear.push(dID, px, a[px]);
        px++;
      } else {
        inclConst && linear.push(0, px, a[px]);
        px++;
        py++;
      }
    }
  }
};
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/diff/object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffObject = void 0;

var _equiv2 = require("@thi.ng/equiv");

const diffObject = (a, b, mode = 3
/* FULL */
, _equiv = _equiv2.equiv) => a === b ? {
  distance: 0
} : mode === 0
/* ONLY_DISTANCE */
? diffObjectDist(a, b, _equiv) : diffObjectFull(a, b, _equiv);

exports.diffObject = diffObject;

const diffObjectDist = (a, b, _equiv) => {
  if (!a) a = {};
  if (!b) b = {};
  let d = 0;

  for (let k in a) {
    const vb = b[k];
    (vb === undefined || !_equiv(a[k], vb)) && d++;
  }

  for (let k in b) {
    !(k in a) && d++;
  }

  return {
    distance: d
  };
};

const diffObjectFull = (a, b, _equiv) => {
  if (!a) a = {};
  if (!b) b = {};
  let d = 0;
  const adds = [];
  const dels = [];
  const edits = [];

  for (let k in a) {
    const vb = b[k];

    if (vb === undefined) {
      dels.push(k);
      d++;
    } else if (!_equiv(a[k], vb)) {
      edits.push(k, vb);
      d++;
    }
  }

  for (let k in b) {
    if (!(k in a)) {
      adds.push(k);
      d++;
    }
  }

  return {
    distance: d,
    adds,
    dels,
    edits
  };
};
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/diff/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _array = require("./array");

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _array[key];
    }
  });
});

var _object = require("./object");

Object.keys(_object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _object[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/diff/api.js","./array":"../node_modules/@thi.ng/diff/array.js","./object":"../node_modules/@thi.ng/diff/object.js"}],"../node_modules/@thi.ng/hdom/diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equiv = exports.releaseTree = exports.diffAttributes = exports.diffTree = void 0;

var _api = require("@thi.ng/api");

var _diff = require("@thi.ng/diff");

var _equiv2 = require("@thi.ng/equiv");

const isArray = Array.isArray;
const max = Math.max;
const OBJP = Object.getPrototypeOf({});
const FN = "function";
const STR = "string"; // child index tracking template buffer

const INDEX = (() => {
  const res = new Array(2048);

  for (let i = 2, n = res.length; i < n; i++) {
    res[i] = i - 2;
  }

  return res;
})();

const buildIndex = n => {
  if (n <= INDEX.length) {
    return INDEX.slice(0, n);
  }

  const res = new Array(n);

  while (--n >= 2) {
    res[n] = n - 2;
  }

  return res;
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param impl hdom implementation
 * @param parent
 * @param prev previous tree
 * @param curr current tree
 * @param child child index
 */


const diffTree = (opts, impl, parent, prev, curr, child = 0) => {
  const attribs = curr[1];

  if (attribs.__skip) {
    return;
  } // always replace element if __diff = false


  if (attribs.__diff === false) {
    releaseTree(prev);
    impl.replaceChild(opts, parent, child, curr);
    return;
  }

  const pattribs = prev[1];

  if (pattribs && pattribs.__skip) {
    impl.replaceChild(opts, parent, child, curr, false);
    return;
  } // delegate to branch-local implementation


  let _impl = attribs.__impl;

  if (_impl && _impl !== impl) {
    return _impl.diffTree(opts, _impl, parent, prev, curr, child);
  }

  const delta = (0, _diff.diffArray)(prev, curr, 1
  /* ONLY_DISTANCE_LINEAR */
  , equiv);

  if (delta.distance === 0) {
    return;
  }

  const edits = delta.linear;
  const el = impl.getChild(parent, child);
  let i;
  let ii;
  let status;
  let val;

  if (edits[0] !== 0 || prev[1].key !== attribs.key) {
    // LOGGER.fine("replace:", prev, curr);
    releaseTree(prev);
    impl.replaceChild(opts, parent, child, curr);
    return;
  }

  if ((val = prev.__release) && val !== curr.__release) {
    releaseTree(prev);
  }

  if (edits[3] !== 0) {
    diffAttributes(impl, el, prev[1], curr[1]); // if attribs changed & distance == 2 then we're done here...

    if (delta.distance === 2) {
      return;
    }
  }

  const numEdits = edits.length;
  const prevLength = prev.length - 1;
  const equivKeys = extractEquivElements(edits);
  const offsets = buildIndex(prevLength + 1);

  for (i = 2, ii = 6; ii < numEdits; i++, ii += 3) {
    status = edits[ii];
    if (!status) continue;

    if (status === -1) {
      diffDeleted(opts, impl, el, prev, curr, edits, ii, equivKeys, offsets, prevLength);
    } else {
      diffAdded(opts, impl, el, edits, ii, equivKeys, offsets, prevLength);
    }
  } // call __init after all children have been added/updated


  if ((val = curr.__init) && val != prev.__init) {
    val.apply(curr, [el, ...curr.__args]);
  }
};

exports.diffTree = diffTree;

const diffDeleted = (opts, impl, el, prev, curr, edits, ii, equivKeys, offsets, prevLength) => {
  const val = edits[ii + 2];

  if (isArray(val)) {
    let k = val[1].key;

    if (k !== undefined && equivKeys[k][2] !== undefined) {
      const eq = equivKeys[k];
      k = eq[0]; // LOGGER.fine(`diff equiv key @ ${k}:`, prev[k], curr[eq[2]]);

      diffTree(opts, impl, el, prev[k], curr[eq[2]], offsets[k]);
    } else {
      const idx = edits[ii + 1]; // LOGGER.fine("remove @", offsets[idx], val);

      releaseTree(val);
      impl.removeChild(el, offsets[idx]);
      incOffsets(offsets, prevLength, idx);
    }
  } else if (typeof val === STR) {
    impl.setContent(el, "");
  }
};

const diffAdded = (opts, impl, el, edits, ii, equivKeys, offsets, prevLength) => {
  const val = edits[ii + 2];

  if (typeof val === STR) {
    impl.setContent(el, val);
  } else if (isArray(val)) {
    const k = val[1].key;

    if (k === undefined || equivKeys[k][0] === undefined) {
      const idx = edits[ii + 1]; // LOGGER.fine("insert @", offsets[idx], val);

      impl.createTree(opts, el, val, offsets[idx]);
      decOffsets(offsets, prevLength, idx);
    }
  }
};

const incOffsets = (offsets, j, idx) => {
  for (; j > idx; j--) {
    offsets[j] = max(offsets[j] - 1, 0);
  }
};

const decOffsets = (offsets, j, idx) => {
  for (; j >= idx; j--) {
    offsets[j]++;
  }
};
/**
 * Helper function for `diffTree()` to compute & apply the difference
 * between a node's `prev` and `curr` attributes.
 *
 * @param impl
 * @param el
 * @param prev
 * @param curr
 */


const diffAttributes = (impl, el, prev, curr) => {
  const delta = (0, _diff.diffObject)(prev, curr, 3
  /* FULL */
  , _equiv2.equiv);
  impl.removeAttribs(el, delta.dels, prev);
  let val = _api.SEMAPHORE;
  let i, e, edits;

  for (edits = delta.edits, i = edits.length; (i -= 2) >= 0;) {
    e = edits[i];
    e.indexOf("on") === 0 && impl.removeAttribs(el, [e], prev);
    e !== "value" ? impl.setAttrib(el, e, edits[i + 1], curr) : val = edits[i + 1];
  }

  for (edits = delta.adds, i = edits.length; --i >= 0;) {
    e = edits[i];
    e !== "value" ? impl.setAttrib(el, e, curr[e], curr) : val = curr[e];
  }

  val !== _api.SEMAPHORE && impl.setAttrib(el, "value", val, curr);
};
/**
 * Recursively attempts to call the `release` lifecycle method on every
 * element in given tree (branch), using depth-first descent. Each
 * element is checked for the presence of the `__release` control
 * attribute. If (and only if) it is set to `false`, further descent
 * into that element's branch is skipped.
 *
 * @param tag
 */


exports.diffAttributes = diffAttributes;

const releaseTree = tag => {
  if (isArray(tag)) {
    let x;

    if ((x = tag[1]) && x.__release === false) {
      return;
    }

    if (tag.__release) {
      // LOGGER.fine("call __release", tag);
      tag.__release.apply(tag.__this, tag.__args);

      delete tag.__release;
    }

    for (x = tag.length; --x >= 2;) {
      releaseTree(tag[x]);
    }
  }
};

exports.releaseTree = releaseTree;

const extractEquivElements = edits => {
  let k;
  let val;
  let ek;
  const equiv = {};

  for (let i = edits.length; (i -= 3) >= 0;) {
    val = edits[i + 2];

    if (isArray(val) && (k = val[1].key) !== undefined) {
      ek = equiv[k];
      !ek && (equiv[k] = ek = [,,]);
      ek[edits[i] + 1] = edits[i + 1];
    }
  }

  return equiv;
};
/**
 * Customized version @thi.ng/equiv which takes `__diff` attributes into
 * account (at any nesting level). If an hdom element's attribute object
 * contains `__diff: false`, the object will ALWAYS be considered
 * unequal, even if all other attributes in the object are equivalent.
 *
 * @param a
 * @param b
 */


const equiv = (a, b) => {
  let proto;

  if (a === b) {
    return true;
  }

  if (a != null) {
    if (typeof a.equiv === FN) {
      return a.equiv(b);
    }
  } else {
    return a == b;
  }

  if (b != null) {
    if (typeof b.equiv === FN) {
      return b.equiv(a);
    }
  } else {
    return a == b;
  }

  if (typeof a === STR || typeof b === STR) {
    return false;
  }

  if ((proto = Object.getPrototypeOf(a), proto == null || proto === OBJP) && (proto = Object.getPrototypeOf(b), proto == null || proto === OBJP)) {
    return !(a.__diff === false || b.__diff === false) && (0, _equiv2.equivObject)(a, b, equiv);
  }

  if (typeof a !== FN && a.length !== undefined && typeof b !== FN && b.length !== undefined) {
    return (0, _equiv2.equivArrayLike)(a, b, equiv);
  }

  if (a instanceof Set && b instanceof Set) {
    return (0, _equiv2.equivSet)(a, b, equiv);
  }

  if (a instanceof Map && b instanceof Map) {
    return (0, _equiv2.equivMap)(a, b, equiv);
  }

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  } // NaN


  return a !== a && b !== b;
};

exports.equiv = equiv;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/diff":"../node_modules/@thi.ng/diff/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/checks/exists-not-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existsAndNotNull = void 0;

var existsAndNotNull = function (x) {
  return x != null;
};

exports.existsAndNotNull = existsAndNotNull;
},{}],"../node_modules/@thi.ng/checks/exists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = void 0;

var exists = function (t) {
  return t !== undefined;
};

exports.exists = exists;
},{}],"../node_modules/@thi.ng/checks/has-crypto.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasCrypto = void 0;

var hasCrypto = function () {
  return typeof window !== "undefined" && window["crypto"] !== undefined;
};

exports.hasCrypto = hasCrypto;
},{}],"../node_modules/@thi.ng/checks/has-max-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMaxLength = void 0;

var hasMaxLength = function (len, x) {
  return x != null && x.length <= len;
};

exports.hasMaxLength = hasMaxLength;
},{}],"../node_modules/@thi.ng/checks/has-min-length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasMinLength = void 0;

var hasMinLength = function (len, x) {
  return x != null && x.length >= len;
};

exports.hasMinLength = hasMinLength;
},{}],"../node_modules/@thi.ng/checks/is-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

var isFunction = function (x) {
  return typeof x === "function";
};

exports.isFunction = isFunction;
},{}],"../node_modules/@thi.ng/checks/has-performance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPerformance = void 0;

var _isFunction = require("./is-function");

var hasPerformance = function () {
  return typeof performance !== "undefined" && (0, _isFunction.isFunction)(performance.now);
};

exports.hasPerformance = hasPerformance;
},{"./is-function":"../node_modules/@thi.ng/checks/is-function.js"}],"../node_modules/@thi.ng/checks/has-wasm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWASM = void 0;

var hasWASM = function () {
  return typeof window !== "undefined" && typeof window["WebAssembly"] !== "undefined" || typeof global !== "undefined" && typeof global["WebAssembly"] !== "undefined";
};

exports.hasWASM = hasWASM;
},{}],"../node_modules/@thi.ng/checks/has-webgl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebGL = void 0;

var hasWebGL = function () {
  try {
    document.createElement("canvas").getContext("webgl");
    return true;
  } catch (e) {
    return false;
  }
};

exports.hasWebGL = hasWebGL;
},{}],"../node_modules/@thi.ng/checks/has-websocket.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasWebSocket = void 0;

var hasWebSocket = function () {
  return typeof WebSocket !== "undefined";
};

exports.hasWebSocket = hasWebSocket;
},{}],"../node_modules/@thi.ng/checks/implements-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementsFunction = void 0;

var implementsFunction = function (x, fn) {
  return x != null && typeof x[fn] === "function";
};

exports.implementsFunction = implementsFunction;
},{}],"../node_modules/@thi.ng/checks/is-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;
var isArray = Array.isArray;
exports.isArray = isArray;
},{}],"../node_modules/@thi.ng/checks/is-arraylike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

var isArrayLike = function (x) {
  return x != null && typeof x !== "function" && x.length !== undefined;
};

exports.isArrayLike = isArrayLike;
},{}],"../node_modules/@thi.ng/checks/is-blob.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBlob = void 0;

var isBlob = function (x) {
  return x instanceof Blob;
};

exports.isBlob = isBlob;
},{}],"../node_modules/@thi.ng/checks/is-boolean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBoolean = void 0;

var isBoolean = function (x) {
  return typeof x === "boolean";
};

exports.isBoolean = isBoolean;
},{}],"../node_modules/@thi.ng/checks/is-chrome.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChrome = void 0;

var isChrome = function () {
  return typeof window !== "undefined" && !!window["chrome"];
};

exports.isChrome = isChrome;
},{}],"../node_modules/@thi.ng/checks/is-date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = void 0;

var isDate = function (x) {
  return x instanceof Date;
};

exports.isDate = isDate;
},{}],"../node_modules/@thi.ng/checks/is-even.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEven = void 0;

var isEven = function (x) {
  return x % 2 === 0;
};

exports.isEven = isEven;
},{}],"../node_modules/@thi.ng/checks/is-false.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = void 0;

var isFalse = function (x) {
  return x === false;
};

exports.isFalse = isFalse;
},{}],"../node_modules/@thi.ng/checks/is-file.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFile = void 0;

var isFile = function (x) {
  return x instanceof File;
};

exports.isFile = isFile;
},{}],"../node_modules/@thi.ng/checks/is-firefox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFirefox = void 0;

var isFirefox = function () {
  return typeof window !== "undefined" && !!window["InstallTrigger"];
};

exports.isFirefox = isFirefox;
},{}],"../node_modules/@thi.ng/checks/is-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = void 0;

var isString = function (x) {
  return typeof x === "string";
};

exports.isString = isString;
},{}],"../node_modules/@thi.ng/checks/is-hex-color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHexColor = void 0;

var _isString = require("./is-string");

var RE = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i;

var isHexColor = function (x) {
  return (0, _isString.isString)(x) && RE.test(x);
};

exports.isHexColor = isHexColor;
},{"./is-string":"../node_modules/@thi.ng/checks/is-string.js"}],"../node_modules/@thi.ng/checks/is-ie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIE = void 0;

var isIE = function () {
  return typeof document !== "undefined" && (typeof document["documentMode"] !== "undefined" || navigator.userAgent.indexOf("MSIE") > 0);
};

exports.isIE = isIE;
},{}],"../node_modules/@thi.ng/checks/is-in-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInRange = void 0;

var isInRange = function (min, max, x) {
  return x >= min && x <= max;
};

exports.isInRange = isInRange;
},{}],"../node_modules/@thi.ng/checks/is-int32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInt32 = void 0;

var isInt32 = function (x) {
  return typeof x === "number" && (x | 0) === x;
};

exports.isInt32 = isInt32;
},{}],"../node_modules/@thi.ng/checks/is-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = void 0;

var isIterable = function (x) {
  return x != null && typeof x[Symbol.iterator] === "function";
};

exports.isIterable = isIterable;
},{}],"../node_modules/@thi.ng/checks/is-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMap = void 0;

var isMap = function (x) {
  return x instanceof Map;
};

exports.isMap = isMap;
},{}],"../node_modules/@thi.ng/checks/is-mobile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = void 0;

var isMobile = function () {
  return typeof navigator !== "undefined" && /mobile|tablet|ip(ad|hone|od)|android|silk|crios/i.test(navigator.userAgent);
};

exports.isMobile = isMobile;
},{}],"../node_modules/@thi.ng/checks/is-nan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNaN = void 0;

var isNaN = function (x) {
  return x !== x;
};

exports.isNaN = isNaN;
},{}],"../node_modules/@thi.ng/checks/is-negative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNegative = void 0;

var isNegative = function (x) {
  return typeof x === "number" && x < 0;
};

exports.isNegative = isNegative;
},{}],"../node_modules/@thi.ng/checks/is-nil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNil = void 0;

/**
 * Checks if x is null or undefined.
 *
 */
var isNil = function (x) {
  return x == null;
};

exports.isNil = isNil;
},{}],"../node_modules/@thi.ng/checks/is-node.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNode = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isNode = function () {
  if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object") {
    if (_typeof(process.versions) === "object") {
      if (typeof process.versions.node !== "undefined") {
        return true;
      }
    }
  }

  return false;
};

exports.isNode = isNode;
},{"process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/src/builtins/_empty.js"}],"../node_modules/@thi.ng/checks/is-not-string-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotStringAndIterable = void 0;

var isNotStringAndIterable = function (x) {
  return x != null && typeof x !== "string" && typeof x[Symbol.iterator] === "function";
};

exports.isNotStringAndIterable = isNotStringAndIterable;
},{}],"../node_modules/@thi.ng/checks/is-null.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNull = void 0;

var isNull = function (x) {
  return x === null;
};

exports.isNull = isNull;
},{}],"../node_modules/@thi.ng/checks/is-number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = void 0;

var isNumber = function (x) {
  return typeof x === "number";
};

exports.isNumber = isNumber;
},{}],"../node_modules/@thi.ng/checks/is-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = function (x) {
  return x !== null && _typeof(x) === "object";
};

exports.isObject = isObject;
},{}],"../node_modules/@thi.ng/checks/is-odd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = void 0;

var isOdd = function (x) {
  return x % 2 !== 0;
};

exports.isOdd = isOdd;
},{}],"../node_modules/@thi.ng/checks/is-plain-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var OBJP = Object.getPrototypeOf;
/**
 * Similar to `isObject()`, but also checks if prototype is that of
 * `Object` (or `null`).
 *
 * @param x
 */

var isPlainObject = function (x) {
  var p;
  return x != null && _typeof(x) === "object" && ((p = OBJP(x)) === null || OBJP(p) === null);
};

exports.isPlainObject = isPlainObject;
},{}],"../node_modules/@thi.ng/checks/is-positive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPosititve = void 0;

var isPosititve = function (x) {
  return typeof x === "number" && x > 0;
};

exports.isPosititve = isPosititve;
},{}],"../node_modules/@thi.ng/checks/is-primitive.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrimitive = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isPrimitive = function (x) {
  var t = _typeof(x);

  return t === "string" || t === "number";
};

exports.isPrimitive = isPrimitive;
},{}],"../node_modules/@thi.ng/checks/is-promise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = void 0;

var isPromise = function (x) {
  return x instanceof Promise;
};

exports.isPromise = isPromise;
},{}],"../node_modules/@thi.ng/checks/is-promiselike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromiseLike = void 0;

var _implementsFunction = require("./implements-function");

var isPromiseLike = function (x) {
  return x instanceof Promise || (0, _implementsFunction.implementsFunction)(x, "then") && (0, _implementsFunction.implementsFunction)(x, "catch");
};

exports.isPromiseLike = isPromiseLike;
},{"./implements-function":"../node_modules/@thi.ng/checks/implements-function.js"}],"../node_modules/@thi.ng/checks/is-regexp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRegExp = void 0;

var isRegExp = function (x) {
  return x instanceof RegExp;
};

exports.isRegExp = isRegExp;
},{}],"../node_modules/@thi.ng/checks/is-safari.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = void 0;

var _isChrome = require("./is-chrome");

var isSafari = function () {
  return typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !(0, _isChrome.isChrome)();
};

exports.isSafari = isSafari;
},{"./is-chrome":"../node_modules/@thi.ng/checks/is-chrome.js"}],"../node_modules/@thi.ng/checks/is-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSet = void 0;

var isSet = function (x) {
  return x instanceof Set;
};

exports.isSet = isSet;
},{}],"../node_modules/@thi.ng/checks/is-symbol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSymbol = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isSymbol = function (x) {
  return _typeof(x) === "symbol";
};

exports.isSymbol = isSymbol;
},{}],"../node_modules/@thi.ng/checks/is-transferable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTransferable = void 0;

var isTransferable = function (x) {
  return x instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && x instanceof SharedArrayBuffer || typeof MessagePort !== "undefined" && x instanceof MessagePort;
};

exports.isTransferable = isTransferable;
},{}],"../node_modules/@thi.ng/checks/is-true.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTrue = void 0;

var isTrue = function (x) {
  return x === true;
};

exports.isTrue = isTrue;
},{}],"../node_modules/@thi.ng/checks/is-typedarray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTypedArray = void 0;

var isTypedArray = function (x) {
  return x && (x.constructor === Float32Array || x.constructor === Uint32Array || x.constructor === Uint8Array || x.constructor === Uint8ClampedArray || x.constructor === Int8Array || x.constructor === Uint16Array || x.constructor === Int16Array || x.constructor === Int32Array || x.constructor === Float64Array);
};

exports.isTypedArray = isTypedArray;
},{}],"../node_modules/@thi.ng/checks/is-uint32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUint32 = void 0;

var isUint32 = function (x) {
  return typeof x === "number" && x >>> 0 === x;
};

exports.isUint32 = isUint32;
},{}],"../node_modules/@thi.ng/checks/is-undefined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndefined = void 0;

var isUndefined = function (x) {
  return x === undefined;
};

exports.isUndefined = isUndefined;
},{}],"../node_modules/@thi.ng/checks/is-uuid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUID = void 0;
var RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

var isUUID = function (x) {
  return RE.test(x);
};

exports.isUUID = isUUID;
},{}],"../node_modules/@thi.ng/checks/is-uuid4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUUIDv4 = void 0;
var RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

var isUUIDv4 = function (x) {
  return RE.test(x);
};

exports.isUUIDv4 = isUUIDv4;
},{}],"../node_modules/@thi.ng/checks/is-zero.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isZero = void 0;

var isZero = function (x) {
  return x === 0;
};

exports.isZero = isZero;
},{}],"../node_modules/@thi.ng/checks/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _existsNotNull = require("./exists-not-null");

Object.keys(_existsNotNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _existsNotNull[key];
    }
  });
});

var _exists = require("./exists");

Object.keys(_exists).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exists[key];
    }
  });
});

var _hasCrypto = require("./has-crypto");

Object.keys(_hasCrypto).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasCrypto[key];
    }
  });
});

var _hasMaxLength = require("./has-max-length");

Object.keys(_hasMaxLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMaxLength[key];
    }
  });
});

var _hasMinLength = require("./has-min-length");

Object.keys(_hasMinLength).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasMinLength[key];
    }
  });
});

var _hasPerformance = require("./has-performance");

Object.keys(_hasPerformance).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasPerformance[key];
    }
  });
});

var _hasWasm = require("./has-wasm");

Object.keys(_hasWasm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWasm[key];
    }
  });
});

var _hasWebgl = require("./has-webgl");

Object.keys(_hasWebgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebgl[key];
    }
  });
});

var _hasWebsocket = require("./has-websocket");

Object.keys(_hasWebsocket).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hasWebsocket[key];
    }
  });
});

var _implementsFunction = require("./implements-function");

Object.keys(_implementsFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _implementsFunction[key];
    }
  });
});

var _isArray = require("./is-array");

Object.keys(_isArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArray[key];
    }
  });
});

var _isArraylike = require("./is-arraylike");

Object.keys(_isArraylike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isArraylike[key];
    }
  });
});

var _isBlob = require("./is-blob");

Object.keys(_isBlob).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBlob[key];
    }
  });
});

var _isBoolean = require("./is-boolean");

Object.keys(_isBoolean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isBoolean[key];
    }
  });
});

var _isChrome = require("./is-chrome");

Object.keys(_isChrome).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isChrome[key];
    }
  });
});

var _isDate = require("./is-date");

Object.keys(_isDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isDate[key];
    }
  });
});

var _isEven = require("./is-even");

Object.keys(_isEven).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isEven[key];
    }
  });
});

var _isFalse = require("./is-false");

Object.keys(_isFalse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFalse[key];
    }
  });
});

var _isFile = require("./is-file");

Object.keys(_isFile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFile[key];
    }
  });
});

var _isFirefox = require("./is-firefox");

Object.keys(_isFirefox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFirefox[key];
    }
  });
});

var _isFunction = require("./is-function");

Object.keys(_isFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isFunction[key];
    }
  });
});

var _isHexColor = require("./is-hex-color");

Object.keys(_isHexColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isHexColor[key];
    }
  });
});

var _isIe = require("./is-ie");

Object.keys(_isIe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIe[key];
    }
  });
});

var _isInRange = require("./is-in-range");

Object.keys(_isInRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInRange[key];
    }
  });
});

var _isInt = require("./is-int32");

Object.keys(_isInt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isInt[key];
    }
  });
});

var _isIterable = require("./is-iterable");

Object.keys(_isIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isIterable[key];
    }
  });
});

var _isMap = require("./is-map");

Object.keys(_isMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMap[key];
    }
  });
});

var _isMobile = require("./is-mobile");

Object.keys(_isMobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isMobile[key];
    }
  });
});

var _isNan = require("./is-nan");

Object.keys(_isNan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNan[key];
    }
  });
});

var _isNegative = require("./is-negative");

Object.keys(_isNegative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNegative[key];
    }
  });
});

var _isNil = require("./is-nil");

Object.keys(_isNil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNil[key];
    }
  });
});

var _isNode = require("./is-node");

Object.keys(_isNode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNode[key];
    }
  });
});

var _isNotStringIterable = require("./is-not-string-iterable");

Object.keys(_isNotStringIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNotStringIterable[key];
    }
  });
});

var _isNull = require("./is-null");

Object.keys(_isNull).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNull[key];
    }
  });
});

var _isNumber = require("./is-number");

Object.keys(_isNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isNumber[key];
    }
  });
});

var _isObject = require("./is-object");

Object.keys(_isObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isObject[key];
    }
  });
});

var _isOdd = require("./is-odd");

Object.keys(_isOdd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isOdd[key];
    }
  });
});

var _isPlainObject = require("./is-plain-object");

Object.keys(_isPlainObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPlainObject[key];
    }
  });
});

var _isPositive = require("./is-positive");

Object.keys(_isPositive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPositive[key];
    }
  });
});

var _isPrimitive = require("./is-primitive");

Object.keys(_isPrimitive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPrimitive[key];
    }
  });
});

var _isPromise = require("./is-promise");

Object.keys(_isPromise).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromise[key];
    }
  });
});

var _isPromiselike = require("./is-promiselike");

Object.keys(_isPromiselike).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isPromiselike[key];
    }
  });
});

var _isRegexp = require("./is-regexp");

Object.keys(_isRegexp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isRegexp[key];
    }
  });
});

var _isSafari = require("./is-safari");

Object.keys(_isSafari).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSafari[key];
    }
  });
});

var _isSet = require("./is-set");

Object.keys(_isSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSet[key];
    }
  });
});

var _isString = require("./is-string");

Object.keys(_isString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isString[key];
    }
  });
});

var _isSymbol = require("./is-symbol");

Object.keys(_isSymbol).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isSymbol[key];
    }
  });
});

var _isTransferable = require("./is-transferable");

Object.keys(_isTransferable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTransferable[key];
    }
  });
});

var _isTrue = require("./is-true");

Object.keys(_isTrue).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTrue[key];
    }
  });
});

var _isTypedarray = require("./is-typedarray");

Object.keys(_isTypedarray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isTypedarray[key];
    }
  });
});

var _isUint = require("./is-uint32");

Object.keys(_isUint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUint[key];
    }
  });
});

var _isUndefined = require("./is-undefined");

Object.keys(_isUndefined).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUndefined[key];
    }
  });
});

var _isUuid = require("./is-uuid");

Object.keys(_isUuid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid[key];
    }
  });
});

var _isUuid2 = require("./is-uuid4");

Object.keys(_isUuid2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isUuid2[key];
    }
  });
});

var _isZero = require("./is-zero");

Object.keys(_isZero).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _isZero[key];
    }
  });
});
},{"./exists-not-null":"../node_modules/@thi.ng/checks/exists-not-null.js","./exists":"../node_modules/@thi.ng/checks/exists.js","./has-crypto":"../node_modules/@thi.ng/checks/has-crypto.js","./has-max-length":"../node_modules/@thi.ng/checks/has-max-length.js","./has-min-length":"../node_modules/@thi.ng/checks/has-min-length.js","./has-performance":"../node_modules/@thi.ng/checks/has-performance.js","./has-wasm":"../node_modules/@thi.ng/checks/has-wasm.js","./has-webgl":"../node_modules/@thi.ng/checks/has-webgl.js","./has-websocket":"../node_modules/@thi.ng/checks/has-websocket.js","./implements-function":"../node_modules/@thi.ng/checks/implements-function.js","./is-array":"../node_modules/@thi.ng/checks/is-array.js","./is-arraylike":"../node_modules/@thi.ng/checks/is-arraylike.js","./is-blob":"../node_modules/@thi.ng/checks/is-blob.js","./is-boolean":"../node_modules/@thi.ng/checks/is-boolean.js","./is-chrome":"../node_modules/@thi.ng/checks/is-chrome.js","./is-date":"../node_modules/@thi.ng/checks/is-date.js","./is-even":"../node_modules/@thi.ng/checks/is-even.js","./is-false":"../node_modules/@thi.ng/checks/is-false.js","./is-file":"../node_modules/@thi.ng/checks/is-file.js","./is-firefox":"../node_modules/@thi.ng/checks/is-firefox.js","./is-function":"../node_modules/@thi.ng/checks/is-function.js","./is-hex-color":"../node_modules/@thi.ng/checks/is-hex-color.js","./is-ie":"../node_modules/@thi.ng/checks/is-ie.js","./is-in-range":"../node_modules/@thi.ng/checks/is-in-range.js","./is-int32":"../node_modules/@thi.ng/checks/is-int32.js","./is-iterable":"../node_modules/@thi.ng/checks/is-iterable.js","./is-map":"../node_modules/@thi.ng/checks/is-map.js","./is-mobile":"../node_modules/@thi.ng/checks/is-mobile.js","./is-nan":"../node_modules/@thi.ng/checks/is-nan.js","./is-negative":"../node_modules/@thi.ng/checks/is-negative.js","./is-nil":"../node_modules/@thi.ng/checks/is-nil.js","./is-node":"../node_modules/@thi.ng/checks/is-node.js","./is-not-string-iterable":"../node_modules/@thi.ng/checks/is-not-string-iterable.js","./is-null":"../node_modules/@thi.ng/checks/is-null.js","./is-number":"../node_modules/@thi.ng/checks/is-number.js","./is-object":"../node_modules/@thi.ng/checks/is-object.js","./is-odd":"../node_modules/@thi.ng/checks/is-odd.js","./is-plain-object":"../node_modules/@thi.ng/checks/is-plain-object.js","./is-positive":"../node_modules/@thi.ng/checks/is-positive.js","./is-primitive":"../node_modules/@thi.ng/checks/is-primitive.js","./is-promise":"../node_modules/@thi.ng/checks/is-promise.js","./is-promiselike":"../node_modules/@thi.ng/checks/is-promiselike.js","./is-regexp":"../node_modules/@thi.ng/checks/is-regexp.js","./is-safari":"../node_modules/@thi.ng/checks/is-safari.js","./is-set":"../node_modules/@thi.ng/checks/is-set.js","./is-string":"../node_modules/@thi.ng/checks/is-string.js","./is-symbol":"../node_modules/@thi.ng/checks/is-symbol.js","./is-transferable":"../node_modules/@thi.ng/checks/is-transferable.js","./is-true":"../node_modules/@thi.ng/checks/is-true.js","./is-typedarray":"../node_modules/@thi.ng/checks/is-typedarray.js","./is-uint32":"../node_modules/@thi.ng/checks/is-uint32.js","./is-undefined":"../node_modules/@thi.ng/checks/is-undefined.js","./is-uuid":"../node_modules/@thi.ng/checks/is-uuid.js","./is-uuid4":"../node_modules/@thi.ng/checks/is-uuid4.js","./is-zero":"../node_modules/@thi.ng/checks/is-zero.js"}],"../node_modules/@thi.ng/hiccup/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VOID_TAGS = exports.SVG_TAGS = exports.NO_SPANS = exports.COMMENT = exports.RE_ENTITY = exports.RE_TAG = exports.ENTITIES = exports.PROC_TAGS = exports.XHTML_NS = exports.XLINK_NS = exports.SVG_NS = void 0;
const SVG_NS = "http://www.w3.org/2000/svg";
exports.SVG_NS = SVG_NS;
const XLINK_NS = "http://www.w3.org/1999/xlink";
exports.XLINK_NS = XLINK_NS;
const XHTML_NS = "http://www.w3.org/1999/xhtml";
exports.XHTML_NS = XHTML_NS;
const PROC_TAGS = {
  "?xml": "?>\n",
  "!DOCTYPE": ">\n",
  "!ENTITY": ">\n",
  "!ELEMENT": ">\n",
  "!ATTLIST": ">\n"
};
exports.PROC_TAGS = PROC_TAGS;
const ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};
exports.ENTITIES = ENTITIES;
const RE_TAG = /^([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?$/;
exports.RE_TAG = RE_TAG;
const RE_ENTITY = new RegExp(`[${Object.keys(ENTITIES).join("")}]`, "g");
exports.RE_ENTITY = RE_ENTITY;
const COMMENT = "__COMMENT__";
exports.COMMENT = COMMENT;
const NO_SPANS = {
  button: 1,
  option: 1,
  text: 1,
  textarea: 1
};
exports.NO_SPANS = NO_SPANS;

const tagMap = tags => tags.split(" ").reduce((acc, x) => (acc[x] = true, acc), {}); // tslint:disable-next-line


const SVG_TAGS = tagMap("animate animateColor animateMotion animateTransform circle clipPath color-profile defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font foreignObject g image line linearGradient marker mask metadata mpath path pattern polygon polyline radialGradient rect set stop style svg switch symbol text textPath title tref tspan use view"); // tslint:disable-next-line

exports.SVG_TAGS = SVG_TAGS;
const VOID_TAGS = tagMap("area base br circle col command ellipse embed hr img input keygen line link meta param path polygon polyline rect source stop track use wbr ?xml");
exports.VOID_TAGS = VOID_TAGS;
},{}],"../node_modules/@thi.ng/hiccup/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var _checks = require("@thi.ng/checks");

const css = rules => {
  let css = "",
      v;

  for (let r in rules) {
    v = rules[r];

    if ((0, _checks.isFunction)(v)) {
      v = v(rules);
    }

    v != null && (css += `${r}:${v};`);
  }

  return css;
};

exports.css = css;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/hiccup/deref.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derefContext = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Takes an arbitrary `ctx` object and array of `keys`. Attempts to call
 * `.deref()` on all given keys' values and stores result values instead
 * of original. Returns updated copy of `ctx` or original if `ctx` is
 * `null` or no keys were given.
 *
 * @param ctx
 * @param keys
 */
const derefContext = (ctx, keys) => {
  if (ctx == null || !keys || !keys.length) return ctx;
  const res = Object.assign({}, ctx);

  for (let k of keys) {
    const v = res[k];
    (0, _checks.implementsFunction)(v, "deref") && (res[k] = v.deref());
  }

  return res;
};

exports.derefContext = derefContext;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/hiccup/escape.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escape = void 0;

var _api = require("./api");

const escape = x => x.replace(_api.RE_ENTITY, y => _api.ENTITIES[y]);

exports.escape = escape;
},{"./api":"../node_modules/@thi.ng/hiccup/api.js"}],"../node_modules/@thi.ng/hiccup/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _css = require("./css");

const normalize = tag => {
  let el = tag[0];
  let match;
  let id;
  let clazz;
  const hasAttribs = (0, _checks.isPlainObject)(tag[1]);
  const attribs = hasAttribs ? Object.assign({}, tag[1]) : {};

  if (!(0, _checks.isString)(el) || !(match = _api.RE_TAG.exec(el))) {
    (0, _errors.illegalArgs)(`"${el}" is not a valid tag name`);
  }

  el = match[1];
  id = match[2];
  clazz = match[3];

  if (id) {
    attribs.id = id;
  }

  if (clazz) {
    clazz = clazz.replace(/\./g, " ");

    if (attribs.class) {
      attribs.class += " " + clazz;
    } else {
      attribs.class = clazz;
    }
  }

  if (tag.length > 1) {
    if ((0, _checks.isPlainObject)(attribs.style)) {
      attribs.style = (0, _css.css)(attribs.style);
    }

    tag = tag.slice(hasAttribs ? 2 : 1).filter(x => x != null);

    if (tag.length > 0) {
      return [el, attribs, tag];
    }
  }

  return [el, attribs];
};

exports.normalize = normalize;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./api":"../node_modules/@thi.ng/hiccup/api.js","./css":"../node_modules/@thi.ng/hiccup/css.js"}],"../node_modules/@thi.ng/hiccup/serialize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serialize = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _api = require("./api");

var _escape = require("./escape");

var _normalize = require("./normalize");

/**
 * Recursively normalizes and serializes given tree as HTML/SVG/XML
 * string. Expands any embedded component functions with their results.
 * Each node of the input tree can have one of the following input
 * forms:
 *
 * ```js
 * ["tag", ...]
 * ["tag#id.class1.class2", ...]
 * ["tag", {other: "attrib"}, ...]
 * ["tag", {...}, "body", function, ...]
 * [function, arg1, arg2, ...]
 * [{render: (ctx,...) => [...]}, args...]
 * iterable
 * ```
 *
 * Tags can be defined in "Zencoding" convention, e.g.
 *
 * ```js
 * ["div#foo.bar.baz", "hi"] // <div id="foo" class="bar baz">hi</div>
 * ```
 *
 * The presence of the attributes object (2nd array index) is optional.
 * Any attribute values, incl. functions are allowed. If the latter, the
 * function is called with the full attribs object as argument and the
 * return value is used for the attribute. This allows for the dynamic
 * creation of attrib values based on other attribs. The only exception
 * to this are event attributes, i.e. attribute names starting with
 * "on". Function values assigned to event attributes will be omitted
 * from the output.
 *
 * ```js
 * ["div#foo", { bar: (attribs) => attribs.id + "-bar" }]
 * // <div id="foo" bar="foo-bar"></div>
 * ```
 *
 * The `style` attribute can ONLY be defined as string or object.
 *
 * ```js
 * ["div", {style: {color: "red", background: "#000"}}]
 * // <div style="color:red;background:#000;"></div>
 * ```
 *
 * Boolean attribs are serialized in HTML5 syntax (present or not).
 * `null`, `undefined` or empty string attrib values are ignored.
 *
 * Any `null` or `undefined` array values (other than in head position)
 * will also be removed, unless a function is in head position.
 *
 * A function in head position of a node acts as a mechanism for
 * component composition & delayed execution. The function will only be
 * executed at serialization time. In this case the optional global
 * context object and all other elements of that node / array are passed
 * as arguments when that function is called. The return value the
 * function MUST be a valid new tree (or `undefined`).
 *
 * If the `ctx` object it'll be passed to each embedded component fns.
 * Optionally call `derefContext()` prior to `serialize()` to auto-deref
 * context keys with values implementing the thi.ng/api `IDeref`
 * interface.
 *
 * ```js
 * const foo = (ctx, a, b) => ["div#" + a, ctx.foo, b];
 *
 * serialize([foo, "id", "body"], { foo: { class: "black" } })
 * // <div id="id" class="black">body</div>
 * ```
 *
 * Functions located in other positions are called ONLY with the global
 * context arg and can return any (serializable) value (i.e. new trees,
 * strings, numbers, iterables or any type with a suitable
 * `.toString()`, `.toHiccup()` or `.deref()` implementation).
 *
 * If the optional `span` flag is true (default: false), all text
 * content will be wrapped in <span> elements (this is to ensure DOM
 * compatibility with hdom). The only elements for spans are never
 * created are listed in `NO_SPANS` in `api.ts`.
 *
 * If the optional `keys` flag is true (default: false), all elements
 * will have an autogenerated `key` attribute injected. If `span` is
 * enabled, `keys` will be enabled by default too (since in this case we
 * assume the output is meant to be compatible with @thi.ng/hdom).
 *
 * hiccup & hdom control attributes (i.e. attrib names prefixed with
 * `__`) will be omitted from the output. The only control attrib
 * supported by this package is `__serialize`. If set to `false`, the
 * entire tree branch will be excluded from the output.
 *
 * Single or multiline comments can be included using the special
 * `COMMENT` tag (`__COMMENT__`) (always WITHOUT attributes!).
 *
 * ```
 * [COMMENT, "Hello world"]
 * // <!-- Hello world -->
 *
 * [COMMENT, "Hello", "world"]
 * <!--
 *     Hello
 *     world
 * -->
 * ```
 *
 * Currently, the only processing / DTD instructions supported are:
 *
 * - `?xml`
 * - `!DOCTYTPE`
 * - `!ELEMENT`
 * - `!ENTITY`
 * - `!ATTLIST`
 *
 * These are used as follows (attribs are only allowed for `?xml`, all
 * others only accept a body string which is taken as is):
 *
 * ```
 * ["?xml", { version: "1.0", standalone: "yes" }]
 * // <?xml version="1.0" standalone="yes"?>
 *
 * ["!DOCTYPE", "html"]
 * // <!DOCTYPE html>
 * ```
 *
 * @param tree hiccup elements / component tree
 * @param ctx arbitrary user context object
 * @param escape auto-escape entities
 * @param span use spans for text content
 * @param keys attach key attribs
 */
const serialize = (tree, ctx, escape = false, span = false, keys = span, path = [0]) => _serialize(tree, ctx, escape, span, keys, path);

exports.serialize = serialize;

const _serialize = (tree, ctx, esc, span, keys, path) => {
  if (tree == null) {
    return "";
  }

  if (Array.isArray(tree)) {
    return serializeElement(tree, ctx, esc, span, keys, path);
  }

  if ((0, _checks.isFunction)(tree)) {
    return _serialize(tree(ctx), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tree, "toHiccup")) {
    return _serialize(tree.toHiccup(ctx), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tree, "deref")) {
    return _serialize(tree.deref(), ctx, esc, span, keys, path);
  }

  if ((0, _checks.isNotStringAndIterable)(tree)) {
    return serializeIter(tree, ctx, esc, span, keys, path);
  }

  tree = esc ? (0, _escape.escape)(tree.toString()) : tree;
  return span ? `<span${keys ? ` key="${path.join("-")}"` : ""}>${tree}</span>` : tree;
};

const serializeElement = (tree, ctx, esc, span, keys, path) => {
  if (!tree.length) {
    return "";
  }

  let tag = tree[0];

  if ((0, _checks.isFunction)(tag)) {
    return _serialize(tag.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path);
  }

  if ((0, _checks.implementsFunction)(tag, "render")) {
    return _serialize(tag.render.apply(null, [ctx, ...tree.slice(1)]), ctx, esc, span, keys, path);
  }

  if (tag === _api.COMMENT) {
    return serializeComment(tree);
  }

  if ((0, _checks.isString)(tag)) {
    tree = (0, _normalize.normalize)(tree);
    tag = tree[0];
    const attribs = tree[1];

    if (attribs.__skip || attribs.__serialize === false) {
      return "";
    }

    let body = tree[2];
    let res = `<${tag}`;
    keys && attribs.key === undefined && (attribs.key = path.join("-"));
    res += serializeAttribs(attribs, esc);
    res += body ? serializeBody(tag, body, ctx, esc, span, keys, path) : !_api.VOID_TAGS[tag] ? `></${tag}>` : _api.PROC_TAGS[tag] || "/>";
    return res;
  }

  if ((0, _checks.isNotStringAndIterable)(tree)) {
    return serializeIter(tree, ctx, esc, span, keys, path);
  }

  return (0, _errors.illegalArgs)(`invalid tree node: ${tree}`);
};

const serializeAttribs = (attribs, esc) => {
  let res = "";

  for (let a in attribs) {
    if (a.startsWith("__")) continue;
    let v = attribs[a];
    if (v == null) continue;
    if ((0, _checks.isFunction)(v) && (/^on\w+/.test(a) || (v = v(attribs)) == null)) continue;

    if (v === true) {
      res += " " + a;
    } else if (v !== false) {
      v = v.toString();
      v.length && (res += ` ${a}="${esc ? (0, _escape.escape)(v) : v}"`);
    }
  }

  return res;
};

const serializeBody = (tag, body, ctx, esc, span, keys, path) => {
  if (_api.VOID_TAGS[tag]) {
    (0, _errors.illegalArgs)(`No body allowed in tag: ${tag}`);
  }

  const proc = _api.PROC_TAGS[tag];
  let res = proc ? " " : ">";
  span = span && !proc && !_api.NO_SPANS[tag];

  for (let i = 0, n = body.length; i < n; i++) {
    res += _serialize(body[i], ctx, esc, span, keys, [...path, i]);
  }

  return res + (proc || `</${tag}>`);
};

const serializeComment = tree => tree.length > 2 ? `\n<!--\n${tree.slice(1).map(x => "    " + x).join("\n")}\n-->\n` : `\n<!-- ${tree[1]} -->\n`;

const serializeIter = (iter, ctx, esc, span, keys, path) => {
  const res = [];
  const p = path.slice(0, path.length - 1);
  let k = 0;

  for (let i of iter) {
    res.push(_serialize(i, ctx, esc, span, keys, [...p, k++]));
  }

  return res.join("");
};
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./api":"../node_modules/@thi.ng/hiccup/api.js","./escape":"../node_modules/@thi.ng/hiccup/escape.js","./normalize":"../node_modules/@thi.ng/hiccup/normalize.js"}],"../node_modules/@thi.ng/hiccup/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _css[key];
    }
  });
});

var _deref = require("./deref");

Object.keys(_deref).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deref[key];
    }
  });
});

var _escape = require("./escape");

Object.keys(_escape).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _escape[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _serialize = require("./serialize");

Object.keys(_serialize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _serialize[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/hiccup/api.js","./css":"../node_modules/@thi.ng/hiccup/css.js","./deref":"../node_modules/@thi.ng/hiccup/deref.js","./escape":"../node_modules/@thi.ng/hiccup/escape.js","./normalize":"../node_modules/@thi.ng/hiccup/normalize.js","./serialize":"../node_modules/@thi.ng/hiccup/serialize.js"}],"../node_modules/@thi.ng/hdom/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeChild = exports.clearDOM = exports.removeListener = exports.setListener = exports.setStyle = exports.removeAttribs = exports.updateValueAttrib = exports.setAttrib = exports.setAttribs = exports.setContent = exports.cloneWithNewAttribs = exports.replaceChild = exports.getChild = exports.addChild = exports.createTextElement = exports.createElement = exports.hydrateTree = exports.createTree = void 0;

var _checks = require("@thi.ng/checks");

var _hiccup = require("@thi.ng/hiccup");

const isArray = _checks.isArray;
const isNotStringAndIterable = _checks.isNotStringAndIterable;

const maybeInitElement = (el, tree) => tree.__init && tree.__init.apply(tree.__this, [el, ...tree.__args]);
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param parent
 * @param tree
 * @param insert
 */


const createTree = (opts, impl, parent, tree, insert, init = true) => {
  if (isArray(tree)) {
    const tag = tree[0];

    if (typeof tag === "function") {
      return createTree(opts, impl, parent, tag.apply(null, [opts.ctx, ...tree.slice(1)]), insert);
    }

    const attribs = tree[1];

    if (attribs.__impl) {
      return attribs.__impl.createTree(opts, parent, tree, insert, init);
    }

    const el = impl.createElement(parent, tag, attribs, insert);

    if (tree.length > 2) {
      const n = tree.length;

      for (let i = 2; i < n; i++) {
        createTree(opts, impl, el, tree[i], undefined, init);
      }
    }

    init && maybeInitElement(el, tree);
    return el;
  }

  if (isNotStringAndIterable(tree)) {
    const res = [];

    for (let t of tree) {
      res.push(createTree(opts, impl, parent, t, insert, init));
    }

    return res;
  }

  if (tree == null) {
    return parent;
  }

  return impl.createTextElement(parent, tree);
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param parent
 * @param tree
 * @param index
 */


exports.createTree = createTree;

const hydrateTree = (opts, impl, parent, tree, index = 0) => {
  if (isArray(tree)) {
    const el = impl.getChild(parent, index);

    if (typeof tree[0] === "function") {
      hydrateTree(opts, impl, parent, tree[0].apply(null, [opts.ctx, ...tree.slice(1)]), index);
    }

    const attribs = tree[1];

    if (attribs.__impl) {
      return attribs.__impl.hydrateTree(opts, parent, tree, index);
    }

    maybeInitElement(el, tree);

    for (let a in attribs) {
      a.indexOf("on") === 0 && impl.setAttrib(el, a, attribs[a]);
    }

    for (let n = tree.length, i = 2; i < n; i++) {
      hydrateTree(opts, impl, el, tree[i], i - 2);
    }
  } else if (isNotStringAndIterable(tree)) {
    for (let t of tree) {
      hydrateTree(opts, impl, parent, t, index);
      index++;
    }
  }
};
/**
 * Creates a new DOM element of type `tag` with optional `attribs`. If
 * `parent` is not `null`, the new element will be inserted as child at
 * given `insert` index. If `insert` is missing, the element will be
 * appended to the `parent`'s list of children. Returns new DOM node.
 *
 * If `tag` is a known SVG element name, the new element will be created
 * with the proper SVG XML namespace.
 *
 * @param parent
 * @param tag
 * @param attribs
 * @param insert
 */


exports.hydrateTree = hydrateTree;

const createElement = (parent, tag, attribs, insert) => {
  const el = _hiccup.SVG_TAGS[tag] ? document.createElementNS(_hiccup.SVG_NS, tag) : document.createElement(tag);
  attribs && setAttribs(el, attribs);
  return addChild(parent, el, insert);
};

exports.createElement = createElement;

const createTextElement = (parent, content, insert) => addChild(parent, document.createTextNode(content), insert);

exports.createTextElement = createTextElement;

const addChild = (parent, child, insert) => parent ? insert === undefined ? parent.appendChild(child) : parent.insertBefore(child, parent.children[insert]) : child;

exports.addChild = addChild;

const getChild = (parent, child) => parent.children[child];

exports.getChild = getChild;

const replaceChild = (opts, impl, parent, child, tree, init = true) => (impl.removeChild(parent, child), impl.createTree(opts, parent, tree, child, init));

exports.replaceChild = replaceChild;

const cloneWithNewAttribs = (el, attribs) => {
  const res = el.cloneNode(true);
  setAttribs(res, attribs);
  el.parentNode.replaceChild(res, el);
  return res;
};

exports.cloneWithNewAttribs = cloneWithNewAttribs;

const setContent = (el, body) => el.textContent = body;

exports.setContent = setContent;

const setAttribs = (el, attribs) => {
  for (let k in attribs) {
    setAttrib(el, k, attribs[k], attribs);
  }

  return el;
};
/**
 * Sets a single attribute on given element. If attrib name is NOT an
 * event name (prefix: "on") and its value is a function, it is called
 * with given `attribs` object (usually the full attrib object passed to
 * `setAttribs`) and the function's return value is used as the actual
 * attrib value.
 *
 * Special rules apply for certain attributes:
 *
 * - "style": delegated to `setStyle()`
 * - "value": delegated to `updateValueAttrib()`
 * - attrib IDs starting with "on" are treated as event listeners
 *
 * If the given (or computed) attrib value is `false` or `undefined` the
 * attrib is removed from the element.
 *
 * @param el
 * @param id
 * @param val
 * @param attribs
 */


exports.setAttribs = setAttribs;

const setAttrib = (el, id, val, attribs) => {
  if (id.startsWith("__")) return;
  const isListener = id.indexOf("on") === 0;

  if (!isListener && typeof val === "function") {
    val = val(attribs);
  }

  if (val !== undefined && val !== false) {
    switch (id) {
      case "style":
        setStyle(el, val);
        break;

      case "value":
        updateValueAttrib(el, val);
        break;

      case "accesskey":
        el.accessKey = val;
        break;

      case "contenteditable":
        el.contentEditable = val;
        break;

      case "tabindex":
        el.tabIndex = val;
        break;

      case "align":
      case "autocapitalize":
      case "checked":
      case "dir":
      case "draggable":
      case "hidden":
      case "id":
      case "lang":
      case "namespaceURI":
      case "scrollTop":
      case "scrollLeft":
      case "title":
        // TODO add more properties / enumerated attribs?
        el[id] = val;
        break;

      default:
        isListener ? setListener(el, id.substr(2), val) : el.setAttribute(id, val === true ? "" : val);
    }
  } else {
    el[id] != null ? el[id] = null : el.removeAttribute(id);
  }

  return el;
};
/**
 * Updates an element's `value` property. For form elements it too
 * ensures the edit cursor retains its position.
 *
 * @param el
 * @param v
 */


exports.setAttrib = setAttrib;

const updateValueAttrib = (el, v) => {
  let ev;

  switch (el.type) {
    case "text":
    case "textarea":
    case "password":
    case "search":
    case "number":
    case "email":
    case "url":
    case "tel":
    case "date":
    case "datetime-local":
    case "time":
    case "week":
    case "month":
      if ((ev = el.value) !== undefined && typeof v === "string") {
        const off = v.length - (ev.length - (el.selectionStart || 0));
        el.value = v;
        el.selectionStart = el.selectionEnd = off;
        break;
      }

    default:
      el.value = v;
  }
};

exports.updateValueAttrib = updateValueAttrib;

const removeAttribs = (el, attribs, prev) => {
  for (let i = attribs.length; --i >= 0;) {
    const a = attribs[i];

    if (a.indexOf("on") === 0) {
      removeListener(el, a.substr(2), prev[a]);
    } else {
      el.hasAttribute(a) ? el.removeAttribute(a) : el[a] = null;
    }
  }
};

exports.removeAttribs = removeAttribs;

const setStyle = (el, styles) => (el.setAttribute("style", (0, _hiccup.css)(styles)), el);
/**
 * Adds event listener (possibly with options).
 *
 * @param el
 * @param id event name (w/o `on` prefix)
 * @param listener
 */


exports.setStyle = setStyle;

const setListener = (el, id, listener) => isArray(listener) ? el.addEventListener(id, ...listener) : el.addEventListener(id, listener);
/**
 * Removes event listener (possibly with options).
 *
 * @param el
 * @param id event name (w/o `on` prefix)
 * @param listener
 */


exports.setListener = setListener;

const removeListener = (el, id, listener) => isArray(listener) ? el.removeEventListener(id, ...listener) : el.removeEventListener(id, listener);

exports.removeListener = removeListener;

const clearDOM = el => el.innerHTML = "";

exports.clearDOM = clearDOM;

const removeChild = (parent, childIdx) => {
  const n = parent.children[childIdx];
  n !== undefined && parent.removeChild(n);
};

exports.removeChild = removeChild;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/hiccup":"../node_modules/@thi.ng/hiccup/index.js"}],"../node_modules/@thi.ng/hdom/normalize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeTree = exports.normalizeElement = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _hiccup = require("@thi.ng/hiccup");

const isArray = _checks.isArray;
const isNotStringAndIterable = _checks.isNotStringAndIterable;
const isPlainObject = _checks.isPlainObject;
/**
 * Expands single hiccup element/component into its canonical form:
 *
 * ```
 * [tagname, {attribs}, ...children]
 * ```
 *
 * Emmet-style ID and class names in the original tagname are moved into
 * the attribs object, e.g.:
 *
 * ```
 * ["div#foo.bar.baz"] => ["div", {id: "foo", class: "bar baz"}]
 * ```
 *
 * If both Emmet-style classes AND a `class` attrib exists, the former
 * are appended to the latter:
 *
 * ```
 * ["div.bar.baz", {class: "foo"}] => ["div", {class: "foo bar baz"}]
 * ```
 *
 * Elements with `__skip` attrib enabled and no children, will have an
 * empty text child element injected.
 *
 * @param spec
 * @param keys
 */

const normalizeElement = (spec, keys) => {
  let tag = spec[0];
  let hasAttribs = isPlainObject(spec[1]);
  let match;
  let mtag;
  let id;
  let clazz;
  let attribs;

  if (typeof tag !== "string" || !(match = _hiccup.RE_TAG.exec(tag))) {
    (0, _errors.illegalArgs)(`${tag} is not a valid tag name`);
  }

  mtag = match[1]; // return orig if already normalized and satisfies key requirement

  if (tag === mtag && hasAttribs && (!keys || spec[1].key)) {
    return spec;
  }

  attribs = hasAttribs ? Object.assign({}, spec[1]) : {};
  id = match[2];
  clazz = match[3];

  if (id) {
    attribs.id = id;
  }

  if (clazz) {
    clazz = clazz.replace(/\./g, " ");

    if (attribs.class) {
      attribs.class += " " + clazz;
    } else {
      attribs.class = clazz;
    }
  }

  return attribs.__skip && spec.length < 3 ? [mtag, attribs] : [mtag, attribs, ...spec.slice(hasAttribs ? 2 : 1)];
};
/**
 * See `HDOMImplementation` interface for further details.
 *
 * @param opts
 * @param tree
 */


exports.normalizeElement = normalizeElement;

const normalizeTree = (opts, tree) => _normalizeTree(tree, opts, opts.ctx, [0], opts.keys !== false, opts.span !== false);

exports.normalizeTree = normalizeTree;

const _normalizeTree = (tree, opts, ctx, path, keys, span) => {
  if (tree == null) {
    return;
  }

  if (isArray(tree)) {
    if (tree.length === 0) {
      return;
    }

    let norm,
        nattribs = tree[1],
        impl; // if available, use branch-local normalize implementation

    if (nattribs && (impl = nattribs.__impl) && (impl = impl.normalizeTree)) {
      return impl(opts, tree);
    }

    const tag = tree[0]; // use result of function call
    // pass ctx as first arg and remaining array elements as rest args

    if (typeof tag === "function") {
      return _normalizeTree(tag.apply(null, [ctx, ...tree.slice(1)]), opts, ctx, path, keys, span);
    } // component object w/ life cycle methods
    // (render() is the only required hook)


    if (typeof tag.render === "function") {
      const args = [ctx, ...tree.slice(1)];
      norm = _normalizeTree(tag.render.apply(tag, args), opts, ctx, path, keys, span);

      if (isArray(norm)) {
        norm.__this = tag;
        norm.__init = tag.init;
        norm.__release = tag.release;
        norm.__args = args;
      }

      return norm;
    }

    norm = normalizeElement(tree, keys);
    nattribs = norm[1];

    if (nattribs.__normalize === false) {
      return norm;
    }

    if (keys && nattribs.key === undefined) {
      nattribs.key = path.join("-");
    }

    if (norm.length > 2) {
      const tag = norm[0];
      const res = [tag, nattribs];
      span = span && !_hiccup.NO_SPANS[tag];

      for (let i = 2, j = 2, k = 0, n = norm.length; i < n; i++) {
        let el = norm[i];

        if (el != null) {
          const isarray = isArray(el);

          if (isarray && isArray(el[0]) || !isarray && isNotStringAndIterable(el)) {
            for (let c of el) {
              c = _normalizeTree(c, opts, ctx, path.concat(k), keys, span);

              if (c !== undefined) {
                res[j++] = c;
              }

              k++;
            }
          } else {
            el = _normalizeTree(el, opts, ctx, path.concat(k), keys, span);

            if (el !== undefined) {
              res[j++] = el;
            }

            k++;
          }
        }
      }

      return res;
    }

    return norm;
  }

  if (typeof tree === "function") {
    return _normalizeTree(tree(ctx), opts, ctx, path, keys, span);
  }

  if (typeof tree.toHiccup === "function") {
    return _normalizeTree(tree.toHiccup(opts.ctx), opts, ctx, path, keys, span);
  }

  if (typeof tree.deref === "function") {
    return _normalizeTree(tree.deref(), opts, ctx, path, keys, span);
  }

  return span ? ["span", keys ? {
    key: path.join("-")
  } : {}, tree.toString()] : tree.toString();
};
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/hiccup":"../node_modules/@thi.ng/hiccup/index.js"}],"../node_modules/@thi.ng/hdom/default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_IMPL = void 0;

var _diff = require("./diff");

var _dom = require("./dom");

var _normalize = require("./normalize");

/**
 * Default target implementation to manipulate browser DOM.
 */
const DEFAULT_IMPL = {
  createTree(opts, parent, tree, child, init) {
    return (0, _dom.createTree)(opts, this, parent, tree, child, init);
  },

  hydrateTree(opts, parent, tree, child) {
    return (0, _dom.hydrateTree)(opts, this, parent, tree, child);
  },

  diffTree(opts, parent, prev, curr, child) {
    (0, _diff.diffTree)(opts, this, parent, prev, curr, child);
  },

  normalizeTree: _normalize.normalizeTree,

  getElementById(id) {
    return document.getElementById(id);
  },

  getChild: _dom.getChild,
  createElement: _dom.createElement,
  createTextElement: _dom.createTextElement,

  replaceChild(opts, parent, child, tree, init) {
    (0, _dom.replaceChild)(opts, this, parent, child, tree, init);
  },

  removeChild: _dom.removeChild,
  setContent: _dom.setContent,
  removeAttribs: _dom.removeAttribs,
  setAttrib: _dom.setAttrib
};
exports.DEFAULT_IMPL = DEFAULT_IMPL;
},{"./diff":"../node_modules/@thi.ng/hdom/diff.js","./dom":"../node_modules/@thi.ng/hdom/dom.js","./normalize":"../node_modules/@thi.ng/hdom/normalize.js"}],"../node_modules/@thi.ng/hdom/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveRoot = void 0;

var _checks = require("@thi.ng/checks");

const resolveRoot = (root, impl) => (0, _checks.isString)(root) ? impl.getElementById(root) : root;

exports.resolveRoot = resolveRoot;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/hdom/render-once.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOnce = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _default = require("./default");

var _utils = require("./utils");

/**
 * One-off hdom tree conversion & target DOM application. Takes same
 * options as `start()`, but performs no diffing and only creates or
 * hydrates target once. The given tree is first normalized and if
 * result is `null` or `undefined` no further action will be taken.
 *
 * @param tree
 * @param opts
 * @param impl
 */
const renderOnce = (tree, opts = {}, impl = _default.DEFAULT_IMPL) => {
  opts = Object.assign({
    root: "app"
  }, opts);
  opts.ctx = (0, _hiccup.derefContext)(opts.ctx, opts.autoDerefKeys);
  const root = (0, _utils.resolveRoot)(opts.root, impl);
  tree = impl.normalizeTree(opts, tree);
  if (!tree) return;
  opts.hydrate ? impl.hydrateTree(opts, root, tree) : impl.createTree(opts, root, tree);
};

exports.renderOnce = renderOnce;
},{"@thi.ng/hiccup":"../node_modules/@thi.ng/hiccup/index.js","./default":"../node_modules/@thi.ng/hdom/default.js","./utils":"../node_modules/@thi.ng/hdom/utils.js"}],"../node_modules/@thi.ng/hdom/start.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _hiccup = require("@thi.ng/hiccup");

var _default = require("./default");

var _utils = require("./utils");

/**
 * Takes an hiccup tree (array, function or component object w/ life
 * cycle methods) and an optional object of DOM update options. Starts
 * RAF update loop, in each iteration first normalizing given tree, then
 * computing diff to previous frame's tree and applying any changes to
 * the real DOM. The `ctx` option can be used for passing arbitrary
 * config data or state down into the hiccup component tree. Any
 * embedded component function in the tree will receive this context
 * object (shallow copy) as first argument, as will life cycle methods
 * in component objects. If the `autoDerefKeys` option is given, attempts
 * to auto-expand/deref the given keys in the user supplied context
 * object (`ctx` option) prior to *each* tree normalization. All of
 * these values should implement the thi.ng/api `IDeref` interface (e.g.
 * atoms, cursors, views, rstreams etc.). This feature can be used to
 * define dynamic contexts linked to the main app state, e.g. using
 * derived views provided by thi.ng/atom.
 *
 * **Selective updates**: No updates will be applied if the given hiccup
 * tree is `undefined` or `null` or a root component function returns no
 * value. This way a given root function can do some state handling of
 * its own and implement fail-fast checks to determine no DOM updates
 * are necessary, save effort re-creating a new hiccup tree and request
 * skipping DOM updates via this function. In this case, the previous
 * DOM tree is kept around until the root function returns a tree again,
 * which then is diffed and applied against the previous tree kept as
 * usual. Any number of frames may be skipped this way.
 *
 * **Important:** Unless the `hydrate` option is enabled, the parent
 * element given is assumed to have NO children at the time when
 * `start()` is called. Since hdom does NOT track the real DOM, the
 * resulting changes will result in potentially undefined behavior if
 * the parent element wasn't empty. Likewise, if `hydrate` is enabled,
 * it is assumed that an equivalent DOM (minus listeners) already exists
 * (i.e. generated via SSR) when `start()` is called. Any other
 * discrepancies between the pre-existing DOM and the hdom trees will
 * cause undefined behavior.
 *
 * Returns a function, which when called, immediately cancels the update
 * loop.
 *
 * @param tree hiccup DOM tree
 * @param opts options
 * @param impl hdom target implementation
 */
const start = (tree, opts = {}, impl = _default.DEFAULT_IMPL) => {
  const _opts = Object.assign({
    root: "app"
  }, opts);

  let prev = [];
  let isActive = true;
  const root = (0, _utils.resolveRoot)(_opts.root, impl);

  const update = () => {
    if (isActive) {
      _opts.ctx = (0, _hiccup.derefContext)(opts.ctx, _opts.autoDerefKeys);
      const curr = impl.normalizeTree(_opts, tree);

      if (curr != null) {
        if (_opts.hydrate) {
          impl.hydrateTree(_opts, root, curr);
          _opts.hydrate = false;
        } else {
          impl.diffTree(_opts, root, prev, curr);
        }

        prev = curr;
      } // check again in case one of the components called cancel


      isActive && requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
  return () => isActive = false;
};

exports.start = start;
},{"@thi.ng/hiccup":"../node_modules/@thi.ng/hiccup/index.js","./default":"../node_modules/@thi.ng/hdom/default.js","./utils":"../node_modules/@thi.ng/hdom/utils.js"}],"../node_modules/@thi.ng/hdom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _default = require("./default");

Object.keys(_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _default[key];
    }
  });
});

var _diff = require("./diff");

Object.keys(_diff).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _diff[key];
    }
  });
});

var _dom = require("./dom");

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dom[key];
    }
  });
});

var _normalize = require("./normalize");

Object.keys(_normalize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalize[key];
    }
  });
});

var _renderOnce = require("./render-once");

Object.keys(_renderOnce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderOnce[key];
    }
  });
});

var _start = require("./start");

Object.keys(_start).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _start[key];
    }
  });
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _utils[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/hdom/api.js","./default":"../node_modules/@thi.ng/hdom/default.js","./diff":"../node_modules/@thi.ng/hdom/diff.js","./dom":"../node_modules/@thi.ng/hdom/dom.js","./normalize":"../node_modules/@thi.ng/hdom/normalize.js","./render-once":"../node_modules/@thi.ng/hdom/render-once.js","./start":"../node_modules/@thi.ng/hdom/start.js","./utils":"../node_modules/@thi.ng/hdom/utils.js"}],"../node_modules/@thi.ng/interceptors/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogger = exports.LOGGER = exports.EV_UNDO = exports.EV_REDO = exports.FX_STATE = exports.FX_FETCH = exports.FX_DELAY = exports.FX_DISPATCH_NOW = exports.FX_DISPATCH_ASYNC = exports.FX_DISPATCH = exports.FX_CANCEL = exports.EV_TOGGLE_VALUE = exports.EV_UPDATE_VALUE = exports.EV_SET_VALUE = void 0;

var _api = require("@thi.ng/api");

// Built-in event ID constants
const EV_SET_VALUE = "--set-value";
exports.EV_SET_VALUE = EV_SET_VALUE;
const EV_UPDATE_VALUE = "--update-value";
exports.EV_UPDATE_VALUE = EV_UPDATE_VALUE;
const EV_TOGGLE_VALUE = "--toggle-value"; // Built-in side effect ID constants

exports.EV_TOGGLE_VALUE = EV_TOGGLE_VALUE;
const FX_CANCEL = "--cancel";
exports.FX_CANCEL = FX_CANCEL;
const FX_DISPATCH = "--dispatch";
exports.FX_DISPATCH = FX_DISPATCH;
const FX_DISPATCH_ASYNC = "--dispatch-async";
exports.FX_DISPATCH_ASYNC = FX_DISPATCH_ASYNC;
const FX_DISPATCH_NOW = "--dispatch-now";
exports.FX_DISPATCH_NOW = FX_DISPATCH_NOW;
const FX_DELAY = "--delay";
exports.FX_DELAY = FX_DELAY;
const FX_FETCH = "--fetch";
exports.FX_FETCH = FX_FETCH;
const FX_STATE = "--state";
/**
 * Event ID to trigger redo action.
 * See `EventBus.addBuiltIns()` for further details.
 * Also see `snapshot()` interceptor docs.
 */

exports.FX_STATE = FX_STATE;
const EV_REDO = "--redo";
/**
 * Event ID to trigger undo action.
 * See `EventBus.addBuiltIns()` for further details.
 * Also see `snapshot()` interceptor docs.
 */

exports.EV_REDO = EV_REDO;
const EV_UNDO = "--undo";
exports.EV_UNDO = EV_UNDO;
let LOGGER = _api.NULL_LOGGER;
exports.LOGGER = LOGGER;

const setLogger = logger => exports.LOGGER = LOGGER = logger;

exports.setLogger = setLogger;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js"}],"../node_modules/@thi.ng/paths/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutInMany = exports.mutIn = exports.mutator = exports.deleteIn = exports.updateIn = exports.updater = exports.setInMany = exports.setIn = exports.getIn = exports.setter = exports.getter = exports.exists = exports.toPath = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isa = Array.isArray;
var iss = _checks.isString;

var _copy = function (s) {
  return isa(s) ? s.slice() : Object.assign({}, s);
};

var compS = function (k, f) {
  return function (s, v) {
    return s = _copy(s), s[k] = f ? f(s[k], v) : v, s;
  };
};
/**
 * Converts the given key path to canonical form (array).
 *
 * ```
 * toPath("a.b.c");
 * // ["a", "b", "c"]
 *
 * toPath(0)
 * // [0]
 *
 * toPath(["a", "b", "c"])
 * // ["a", "b", "c"]
 * ```
 *
 * @param path
 */


var toPath = function (path) {
  return isa(path) ? path : iss(path) ? path.length > 0 ? path.split(".") : [] : path != null ? [path] : [];
};
/**
 * Takes an arbitrary object and lookup path. Descends into object along
 * path and returns true if the full path exists (even if final leaf
 * value is `null` or `undefined`). Checks are performed using
 * `hasOwnProperty()`.
 *
 * @param obj
 * @param path
 */


exports.toPath = toPath;

var exists = function (obj, path) {
  if (obj == null) {
    return false;
  }

  path = toPath(path);

  for (var n = path.length - 1, i = 0; i <= n; i++) {
    var k = path[i];

    if (!obj.hasOwnProperty(k)) {
      return false;
    }

    obj = obj[k];

    if (obj == null && i < n) {
      return false;
    }
  }

  return true;
};
/**
 * Composes a getter function for given nested lookup path. Optimized
 * fast execution paths are provided for path lengths less than 5.
 * Supports any `[]`-indexable data structure (arrays, objects,
 * strings).
 *
 * If `path` is given as string, it will be split using `.`. Returns
 * function which accepts single object and when called, returns value
 * at given path.
 *
 * If any intermediate key is not present in the given obj, descent
 * stops and the function returns `undefined`.
 *
 * If `path` is an empty string or array, the returned getter will
 * simply return the given state arg (identity function).
 *
 * Also see: `getIn()`
 *
 * ```
 * g = getter("a.b.c");
 * // or
 * g = getter(["a","b","c"]);
 *
 * g({a: {b: {c: 23}}}) // 23
 * g({x: 23}) // undefined
 * g() // undefined
 * ```
 *
 * @param path
 */


exports.exists = exists;

var getter = function (path) {
  var ks = toPath(path);

  var _ks = _slicedToArray(ks, 4),
      a = _ks[0],
      b = _ks[1],
      c = _ks[2],
      d = _ks[3];

  switch (ks.length) {
    case 0:
      return function (s) {
        return s;
      };

    case 1:
      return function (s) {
        return s != null ? s[a] : undefined;
      };

    case 2:
      return function (s) {
        return s != null ? (s = s[a]) != null ? s[b] : undefined : undefined;
      };

    case 3:
      return function (s) {
        return s != null ? (s = s[a]) != null ? (s = s[b]) != null ? s[c] : undefined : undefined : undefined;
      };

    case 4:
      return function (s) {
        return s != null ? (s = s[a]) != null ? (s = s[b]) != null ? (s = s[c]) != null ? s[d] : undefined : undefined : undefined : undefined;
      };

    default:
      return function (s) {
        var n = ks.length - 1;
        var res = s;

        for (var i = 0; res != null && i <= n; i++) {
          res = res[ks[i]];
        }

        return res;
      };
  }
};
/**
 * Composes a setter function for given nested update path. Optimized
 * fast execution paths are provided for path lengths less up to 4.
 * Supports both arrays and objects and creates intermediate shallow
 * copies at each level of the path. Thus provides structural sharing
 * with the original data for any branches not being updated by the
 * setter.
 *
 * If `path` is given as string, it will be split using `.`. Returns
 * function which accepts single object and when called, **immutably**
 * updates value at given path, i.e. produces a partial deep copy of obj
 * up until given path.
 *
 * If any intermediate key is not present in the given obj, creates a
 * plain empty object for that key and descends further.
 *
 * If `path` is an empty string or array, the returned setter will
 * simply return the new value.
 *
 * Also see: `setIn()`, `updateIn()`, `deleteIn()`
 *
 * ```
 * s = setter("a.b.c");
 * // or
 * s = setter(["a","b","c"]);
 *
 * s({a: {b: {c: 23}}}, 24)
 * // {a: {b: {c: 24}}}
 *
 * s({x: 23}, 24)
 * // { x: 23, a: { b: { c: 24 } } }
 *
 * s(null, 24)
 * // { a: { b: { c: 24 } } }
 * ```
 *
 * Only keys in the path will be modified, all other keys present in the
 * given object retain their original values to provide efficient
 * structural sharing / re-use.
 *
 * ```
 * s = setter("a.b.c");
 *
 * a = {x: {y: {z: 1}}};
 * b = s(a, 2);
 * // { x: { y: { z: 1 } }, a: { b: { c: 2 } } }
 *
 * a.x === b.x // true
 * a.x.y === b.x.y // true
 * ```
 *
 * @param path
 */


exports.getter = getter;

var setter = function (path) {
  var ks = toPath(path);

  var _ks2 = _slicedToArray(ks, 4),
      a = _ks2[0],
      b = _ks2[1],
      c = _ks2[2],
      d = _ks2[3];

  switch (ks.length) {
    case 0:
      return function (_, v) {
        return v;
      };

    case 1:
      return function (s, v) {
        return s = _copy(s), s[a] = v, s;
      };

    case 2:
      return function (s, v) {
        var x;
        s = _copy(s);
        s[a] = x = _copy(s[a]);
        x[b] = v;
        return s;
      };

    case 3:
      return function (s, v) {
        var x, y;
        s = _copy(s);
        s[a] = x = _copy(s[a]);
        x[b] = y = _copy(x[b]);
        y[c] = v;
        return s;
      };

    case 4:
      return function (s, v) {
        var x, y, z;
        s = _copy(s);
        s[a] = x = _copy(s[a]);
        x[b] = y = _copy(x[b]);
        y[c] = z = _copy(y[c]);
        z[d] = v;
        return s;
      };

    default:
      var f;

      for (var i = ks.length; --i >= 0;) {
        f = compS(ks[i], f);
      }

      return f;
  }
};
/**
 * Immediate use getter, i.e. same as: `getter(path)(state)`.
 *
 * ```
 * getIn({a: {b: {c: 23}}}, "a.b.c");
 * // 23
 * ```
 *
 * @param state
 * @param path
 */


exports.setter = setter;

var getIn = function (state, path) {
  return getter(path)(state);
};
/**
 * Immediate use setter, i.e. same as: `setter(path)(state, val)`.
 *
 * ```
 * setIn({}, "a.b.c", 23);
 * // {a: {b: {c: 23}}}
 * ```
 *
 * @param state
 * @param path
 */


exports.getIn = getIn;

var setIn = function (state, path, val) {
  return setter(path)(state, val);
};
/**
 * Like `setIn()`, but takes any number of path-value pairs and applies
 * them in sequence by calling `setIn()` for each. Any key paths missing
 * in the data structure will be created. Does *not* mutate original
 * (instead use `mutInMany()` for this purpose).
 *
 * ```
 * setInMany({}, "a.b", 10, "x.y.z", 20)
 * // { a: { b: 10 }, x: { y: { z: 20 } } }
 * ```
 *
 * @param state
 * @param pairs
 */


exports.setIn = setIn;

var setInMany = function (state) {
  var n = arguments.length <= 1 ? 0 : arguments.length - 1;
  n & 1 && (0, _errors.illegalArgs)("require even number of args (got ".concat(arguments.length <= 1 ? 0 : arguments.length - 1, ")"));

  for (var i = 0; i < n; i += 2) {
    state = setIn(state, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1], i + 1 + 1 < 1 || arguments.length <= i + 1 + 1 ? undefined : arguments[i + 1 + 1]);
  }

  return state;
};
/**
 * Similar to `setter()`, returns a function to update values at given
 * `path` using provided update `fn`. The returned function accepts a
 * single object / array and applies `fn` to current path value (incl.
 * any additional/optional arguments passed) and uses result as new
 * value. Does not modify original state (unless given function does so
 * itself).
 *
 * ```
 * add = updater("a.b", (x, n) => x + n);
 *
 * add({a: {b: 10}}, 13);
 * // { a: { b: 23 } }
 * ```
 *
 * @param path
 * @param fn
 */


exports.setInMany = setInMany;

var updater = function (path, fn) {
  var g = getter(path);
  var s = setter(path);
  return function (state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return s(state, fn.apply(null, (args.unshift(g(state)), args)));
  };
};
/**
 * Similar to `setIn()`, but applies given function to current path
 * value (incl. any additional/optional arguments passed to `updateIn`)
 * and uses result as new value. Does not modify original state (unless
 * given function does so itself).
 *
 * ```
 * add = (x, y) => x + y;
 * updateIn({a: {b: {c: 23}}}, "a.b.c", add, 10);
 * // {a: {b: {c: 33}}}
 * ```
 *
 * @param state
 * @param path
 */


exports.updater = updater;

var updateIn = function (state, path, fn) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  return setter(path)(state, fn.apply(null, (args.unshift(getter(path)(state)), args)));
};
/**
 * Uses `updateIn()` and returns updated state with key for given path
 * removed. Does not modify original state.
 *
 * Returns `undefined` if `path` is an empty string or array.
 *
 * ```
 * deleteIn({a:{b:{c: 23}}}, "a.b.c");
 * // {a: {b: {}}}
 * ```
 *
 * @param state
 * @param path
 */


exports.updateIn = updateIn;

var deleteIn = function (state, path) {
  var ks = _toConsumableArray(toPath(path));

  if (ks.length > 0) {
    var k = ks.pop();
    return updateIn(state, ks, function (x) {
      return x = Object.assign({}, x), delete x[k], x;
    });
  }
};
/**
 * Higher-order function, similar to `setter()`. Returns function which
 * when called mutates given object/array at given path location and
 * bails if any intermediate path values are non-indexable (only the
 * very last path element can be missing in the actual object
 * structure). If successful, returns original (mutated) object, else
 * `undefined`. This function provides optimized versions for path
 * lengths <= 4.
 *
 * @param path
 */


exports.deleteIn = deleteIn;

var mutator = function (path) {
  var ks = toPath(path);

  var _ks3 = _slicedToArray(ks, 4),
      a = _ks3[0],
      b = _ks3[1],
      c = _ks3[2],
      d = _ks3[3];

  switch (ks.length) {
    case 0:
      return function (_, x) {
        return x;
      };

    case 1:
      return function (s, x) {
        return s ? (s[a] = x, s) : undefined;
      };

    case 2:
      return function (s, x) {
        var t;
        return s ? (t = s[a]) ? (t[b] = x, s) : undefined : undefined;
      };

    case 3:
      return function (s, x) {
        var t;
        return s ? (t = s[a]) ? (t = t[b]) ? (t[c] = x, s) : undefined : undefined : undefined;
      };

    case 4:
      return function (s, x) {
        var t;
        return s ? (t = s[a]) ? (t = t[b]) ? (t = t[c]) ? (t[d] = x, s) : undefined : undefined : undefined : undefined;
      };

    default:
      return function (s, x) {
        var t = s;
        var n = ks.length - 1;

        for (var k = 0; k < n; k++) {
          if (!(t = t[ks[k]])) return;
        }

        t[ks[n]] = x;
        return s;
      };
  }
};
/**
 * Immediate use mutator, i.e. same as: `mutator(path)(state, val)`.
 *
 * ```
 * mutIn({ a: { b: [10, 20] } }, "a.b.1", 23);
 * // { a: { b: [ 10, 23 ] } }
 *
 * // fails (see `mutator` docs)
 * mutIn({}, "a.b.c", 23);
 * // undefined
 * ```
 *
 * @param state
 * @param path
 * @param val
 */


exports.mutator = mutator;

var mutIn = function (state, path, val) {
  return mutator(path)(state, val);
};
/**
 * Like `mutIn()`, but takes any number of path-value pairs and applies
 * them in sequence. All key paths must already be present in the given
 * data structure until their penultimate key.
 *
 * ```
 * mutInMany({a: {b: 1}, x: {y: {z: 2}}}, "a.b", 10, "x.y.z", 20)
 * // { a: { b: 10 }, x: { y: { z: 20 } } }
 * ```
 *
 * @param state
 * @param pairs
 */


exports.mutIn = mutIn;

var mutInMany = function (state) {
  var n = arguments.length <= 1 ? 0 : arguments.length - 1;
  n & 1 && (0, _errors.illegalArgs)("require even number of args (got ".concat(arguments.length <= 1 ? 0 : arguments.length - 1, ")"));

  for (var i = 0; i < n && state; i += 2) {
    state = mutIn(state, i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1], i + 1 + 1 < 1 || arguments.length <= i + 1 + 1 ? undefined : arguments[i + 1 + 1]);
  }

  return state;
};

exports.mutInMany = mutInMany;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/atom/idgen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextID = void 0;
var NEXT_ID = 0;

var nextID = function () {
  return NEXT_ID++;
};

exports.nextID = nextID;
},{}],"../node_modules/@thi.ng/atom/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

var _equiv2 = require("@thi.ng/equiv");

var _paths = require("@thi.ng/paths");

var _idgen = require("./idgen");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This class implements readonly access to a deeply nested value with
 * in an Atom/Cursor. An optional transformer function can be supplied
 * at creation time to produce a derived/materialized view of the actual
 * value held in the atom. Views can be created directly or via the
 * `.addView()` method of the parent state. Views can be `deref()`'d
 * like atoms and polled for value changes using `changed()`. The
 * transformer is only applied once per value change and its result
 * cached until the next change.
 *
 * If the optional `lazy` is true (default), the transformer will only
 * be executed with the first `deref()` after each value change. If
 * `lazy` is false, the transformer function will be executed
 * immediately after a value change occurred and so can be used like a
 * watch which only triggers if there was an actual value change (in
 * contrast to normal watches, which execute with each update,
 * regardless of value change).
 *
 * Related, the actual value change predicate can be customized. If not
 * given, the default `@thi.ng/equiv` will be used.
 *
 * ```
 * a = new Atom({a: {b: 1}});
 * v = a.addView("a.b", (x) => x * 10);
 *
 * v.deref()
 * // 10
 *
 * // update atom state
 * a.swap((state) => setIn(state, "a.b", 2));
 * // {a: {b: 2}}
 *
 * v.changed()
 * // true
 * v.deref()
 * // 20
 *
 * v.release()
 * // remove view from parent state
 * ```
 */
var View =
/*#__PURE__*/
function () {
  function View(parent, path, tx) {
    var _this = this;

    var lazy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var equiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _equiv2.equiv;

    _classCallCheck(this, View);

    this.parent = parent;
    this.id = "view-".concat((0, _idgen.nextID)());

    this.tx = tx || function (x) {
      return x;
    };

    this.path = (0, _paths.toPath)(path);
    this.isDirty = true;
    this.isLazy = lazy;
    var lookup = (0, _paths.getter)(this.path);
    var state = this.parent.deref();
    this.unprocessed = state ? lookup(state) : undefined;

    if (!lazy) {
      this.state = this.tx(this.unprocessed);
      this.unprocessed = undefined;
    }

    parent.addWatch(this.id, function (_, prev, curr) {
      var pval = prev ? lookup(prev) : prev;
      var val = curr ? lookup(curr) : curr;

      if (!equiv(val, pval)) {
        if (lazy) {
          _this.unprocessed = val;
        } else {
          _this.state = _this.tx(val);
        }

        _this.isDirty = true;
      }
    });
  }

  _createClass(View, [{
    key: "deref",

    /**
     * Returns view's value. If the view has a transformer, the
     * transformed value is returned. The transformer is only run once
     * per value change. See class comments about difference between
     * lazy/eager behaviors.
     */
    value: function deref() {
      if (this.isDirty) {
        if (this.isLazy) {
          this.state = this.tx(this.unprocessed);
          this.unprocessed = undefined;
        }

        this.isDirty = false;
      }

      return this.state;
    }
    /**
     * Returns true, if the view's value has changed since last
     * `deref()`.
     */

  }, {
    key: "changed",
    value: function changed() {
      return this.isDirty;
    }
    /**
     * Like `deref()`, but doesn't update view's cached state and dirty
     * flag if value has changed. If there's an unprocessed value
     * change, returns result of this sub's transformer or else the
     * cached value.
     *
     * **Important:** Use this function only if the view has none or or
     * a stateless transformer. Else might cause undefined/inconsistent
     * behavior when calling `view()` or `deref()` subsequently.
     */

  }, {
    key: "view",
    value: function view() {
      return this.isDirty && this.isLazy ? this.tx(this.unprocessed) : this.state;
    }
    /**
     * Disconnects this view from parent state, marks itself
     * dirty/changed and sets its unprocessed raw value to `undefined`.
     */

  }, {
    key: "release",
    value: function release() {
      this.unprocessed = undefined;

      if (!this.isLazy) {
        this.state = this.tx(undefined);
      }

      this.isDirty = true;
      return this.parent.removeWatch(this.id);
    }
  }, {
    key: "value",
    get: function () {
      return this.deref();
    }
  }]);

  return View;
}();

exports.View = View;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./idgen":"../node_modules/@thi.ng/atom/idgen.js"}],"../node_modules/@thi.ng/atom/atom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Atom = void 0;

var _api = require("@thi.ng/api");

var _errors = require("@thi.ng/errors");

var _paths = require("@thi.ng/paths");

var _view = require("./view");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Mutable wrapper for an (usually) immutable value. Support for
 * watches.
 */
var Atom =
/*#__PURE__*/
function () {
  function Atom(val, valid) {
    _classCallCheck(this, Atom);

    if (valid && !valid(val)) {
      (0, _errors.illegalState)("initial state value did not validate");
    }

    this._value = val;
    this.valid = valid;
  }

  _createClass(Atom, [{
    key: "deref",
    value: function deref() {
      return this._value;
    }
  }, {
    key: "equiv",
    value: function equiv(o) {
      return this === o;
    }
  }, {
    key: "reset",
    value: function reset(val) {
      var old = this._value;

      if (this.valid && !this.valid(val)) {
        return old;
      }

      this._value = val;
      this.notifyWatches(old, val);
      return val;
    }
  }, {
    key: "resetIn",
    value: function resetIn(path, val) {
      return this.reset((0, _paths.setIn)(this._value, path, val));
    }
  }, {
    key: "swap",
    value: function swap(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.reset(fn.apply(null, [this._value].concat(args)));
    }
  }, {
    key: "swapIn",
    value: function swapIn(path, fn) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      return this.reset(_paths.updateIn.apply(void 0, [this._value, path, fn].concat(args)));
    } // mixin stub

    /* istanbul ignore next */

  }, {
    key: "addWatch",
    value: function addWatch(_, __) {
      return false;
    } // mixin stub

    /* istanbul ignore next */

  }, {
    key: "removeWatch",
    value: function removeWatch(_) {
      return false;
    } // mixin stub

    /* istanbul ignore next */

  }, {
    key: "notifyWatches",
    value: function notifyWatches(_, __) {}
  }, {
    key: "addView",
    value: function addView(path, tx) {
      var lazy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new _view.View(this, path, tx, lazy);
    }
  }, {
    key: "release",
    value: function release() {
      delete this._watches;
      delete this._value;
      return true;
    }
  }, {
    key: "value",
    get: function () {
      return this._value;
    },
    set: function (val) {
      this.reset(val);
    }
  }]);

  return Atom;
}();

exports.Atom = Atom;
exports.Atom = Atom = __decorate([_api.IWatchMixin], Atom);
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/cursor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cursor = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _paths = require("@thi.ng/paths");

var _atom = require("./atom");

var _idgen = require("./idgen");

var _view = require("./view");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A cursor provides read/write access to a path location within a
 * nested parent state (Atom or another Cursor). Cursors behave like
 * Atoms for all practical purposes, i.e. support `deref()`, `reset()`,
 * `swap()`, `addWatch()` etc. However, when updating a cursor's value,
 * the parent state will be updated at the cursor's path as well (incl.
 * triggering any watches and/or validators) attached to the parent.
 * Likewise, when the parent state is modified externally, the cursor's
 * value will automatically update as well. The update order of cursor's
 * sharing a common parent is undefined, but can be overridden by
 * extending this class with a custom `notifyWatches()` implementation.
 *
 * If creating multiple cursors w/ a shared parent and each cursor
 * configured with a custom ID (provided via config object to ctor),
 * it's the user's responsibility to ensure the given IDs are unique.
 * Cursors are implemented by attaching a watch to the parent and the ID
 * is used to identify each watch.
 *
 * When using the optional validator predicate (also specified via
 * config object to ctor), the cursor's validator MUST NOT conflict with
 * the one assigned to the parent or else both will go out-of-sync.
 * Therefore, when requiring validation and updating values via cursors
 * it's recommended to only specify validators for leaf-level cursors in
 * the hierarchy.
 */
var Cursor =
/*#__PURE__*/
function () {
  function Cursor() {
    var _this = this;

    _classCallCheck(this, Cursor);

    var parent;
    var lookup;
    var update;
    var validate;
    var opts;
    var id;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    switch (args.length) {
      case 1:
        opts = args[0];
        id = opts.id;
        parent = opts.parent;
        validate = opts.validate;

        if (opts.path) {
          if ((0, _checks.isArray)(opts.path) && (0, _checks.isFunction)(opts.path[0])) {
            var _opts$path = _slicedToArray(opts.path, 2);

            lookup = _opts$path[0];
            update = _opts$path[1];
          } else {
            lookup = (0, _paths.getter)(opts.path);
            update = (0, _paths.setter)(opts.path);
          }
        } else {
          (0, _errors.illegalArgs)("missing path config");
        }

        break;

      case 2:
        parent = args[0];
        lookup = (0, _paths.getter)(args[1]);
        update = (0, _paths.setter)(args[1]);
        break;

      case 3:
        parent = args[0];
        lookup = args[1];
        update = args[2];
        break;

      default:
        (0, _errors.illegalArity)(args.length);
    }

    this.parent = parent;
    this.id = id || "cursor-".concat((0, _idgen.nextID)());
    this.selfUpdate = false;

    if (!lookup || !update) {
      (0, _errors.illegalArgs)();
    }

    this.local = new _atom.Atom(lookup(parent.deref()), validate);
    this.local.addWatch(this.id, function (_, prev, curr) {
      if (prev !== curr) {
        _this.selfUpdate = true;
        parent.swap(function (state) {
          return update(state, curr);
        });
        _this.selfUpdate = false;
      }
    });
    parent.addWatch(this.id, function (_, prev, curr) {
      if (!_this.selfUpdate) {
        var cval = lookup(curr);

        if (cval !== lookup(prev)) {
          _this.local.reset(cval);
        }
      }
    });
  }

  _createClass(Cursor, [{
    key: "deref",
    value: function deref() {
      return this.local.deref();
    }
  }, {
    key: "release",
    value: function release() {
      this.local.release();
      this.parent.removeWatch(this.id);
      delete this.local;
      delete this.parent;
      return true;
    }
  }, {
    key: "reset",
    value: function reset(val) {
      return this.local.reset(val);
    }
  }, {
    key: "resetIn",
    value: function resetIn(path, val) {
      return this.local.resetIn(path, val);
    }
  }, {
    key: "swap",
    value: function swap(fn) {
      var _this$local;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_this$local = this.local).swap.apply(_this$local, [fn].concat(args));
    }
  }, {
    key: "swapIn",
    value: function swapIn(path, fn) {
      var _this$local2;

      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      return (_this$local2 = this.local).swapIn.apply(_this$local2, [path, fn].concat(args));
    }
  }, {
    key: "addWatch",
    value: function addWatch(id, fn) {
      return this.local.addWatch(id, fn);
    }
  }, {
    key: "removeWatch",
    value: function removeWatch(id) {
      return this.local.removeWatch(id);
    }
    /* istanbul ignore next */

  }, {
    key: "notifyWatches",
    value: function notifyWatches(oldState, newState) {
      return this.local.notifyWatches(oldState, newState);
    }
  }, {
    key: "addView",
    value: function addView(path, tx) {
      var lazy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new _view.View(this, path, tx, lazy);
    }
  }, {
    key: "value",
    get: function () {
      return this.deref();
    },
    set: function (val) {
      this.reset(val);
    }
  }]);

  return Cursor;
}();

exports.Cursor = Cursor;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./atom":"../node_modules/@thi.ng/atom/atom.js","./idgen":"../node_modules/@thi.ng/atom/idgen.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/history.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.History = void 0;

var _api = require("@thi.ng/api");

var _equiv = require("@thi.ng/equiv");

var _paths = require("@thi.ng/paths");

var _view = require("./view");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var History_1;

/**
 * Undo/redo history stack wrapper for atoms and cursors. Implements
 * `IAtom` interface and so can be used directly in place and delegates
 * to wrapped atom/cursor. Value changes are only recorded in history if
 * `changed` predicate returns truthy value, or else by calling
 * `record()` directly. This class too implements the @thi.ng/api
 * `INotify` interface to support event listeners for `undo()`, `redo()`
 * and `record()`.
 */
var History = History_1 =
/*#__PURE__*/
function () {
  /**
   * @param state parent state
   * @param maxLen max size of undo stack
   * @param changed predicate to determine changed values (default `!equiv(a,b)`)
   */
  function History(state) {
    var maxLen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var changed = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, History);

    this.state = state;
    this.maxLen = maxLen;

    this.changed = changed || function (a, b) {
      return !(0, _equiv.equiv)(a, b);
    };

    this.clear();
  }

  _createClass(History, [{
    key: "canUndo",
    value: function canUndo() {
      return this.history.length > 0;
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.future.length > 0;
    }
    /**
     * Clears history & future stacks
     */

  }, {
    key: "clear",
    value: function clear() {
      this.history = [];
      this.future = [];
    }
    /**
     * Attempts to re-apply most recent historical value to atom and
     * returns it if successful (i.e. there's a history). Before the
     * switch, first records the atom's current value into the future
     * stack (to enable `redo()` feature). Returns `undefined` if
     * there's no history.
     *
     * If undo was possible, the `History.EVENT_UNDO` event is emitted
     * after the restoration with both the `prev` and `curr` (restored)
     * states provided as event value (and object with these two keys).
     * This allows for additional state handling to be executed, e.g.
     * application of the "Command pattern". See `addListener()` for
     * registering event listeners.
     */

  }, {
    key: "undo",
    value: function undo() {
      if (this.history.length) {
        var prev = this.state.deref();
        this.future.push(prev);
        var curr = this.state.reset(this.history.pop());
        this.notify({
          id: History_1.EVENT_UNDO,
          value: {
            prev: prev,
            curr: curr
          }
        });
        return curr;
      }
    }
    /**
     * Attempts to re-apply most recent value from future stack to atom
     * and returns it if successful (i.e. there's a future). Before the
     * switch, first records the atom's current value into the history
     * stack (to enable `undo()` feature). Returns `undefined` if
     * there's no future (so sad!).
     *
     * If redo was possible, the `History.EVENT_REDO` event is emitted
     * after the restoration with both the `prev` and `curr` (restored)
     * states provided as event value (and object with these two keys).
     * This allows for additional state handling to be executed, e.g.
     * application of the "Command pattern". See `addListener()` for
     * registering event listeners.
     */

  }, {
    key: "redo",
    value: function redo() {
      if (this.future.length) {
        var prev = this.state.deref();
        this.history.push(prev);
        var curr = this.state.reset(this.future.pop());
        this.notify({
          id: History_1.EVENT_REDO,
          value: {
            prev: prev,
            curr: curr
          }
        });
        return curr;
      }
    }
    /**
     * `IAtom.reset()` implementation. Delegates to wrapped atom/cursor,
     * but too applies `changed` predicate to determine if there was a
     * change and if the previous value should be recorded.
     *
     * @param val
     */

  }, {
    key: "reset",
    value: function reset(val) {
      var prev = this.state.deref();
      this.state.reset(val);
      var changed = this.changed(prev, this.state.deref());

      if (changed) {
        this.record(prev);
      }

      return val;
    }
  }, {
    key: "resetIn",
    value: function resetIn(path, val) {
      var prev = this.state.deref();
      var prevV = (0, _paths.getIn)(prev, path);
      var curr = (0, _paths.setIn)(prev, path, val);
      this.state.reset(curr);
      this.changed(prevV, (0, _paths.getIn)(curr, path)) && this.record(prev);
      return curr;
    }
    /**
     * `IAtom.swap()` implementation. Delegates to wrapped atom/cursor,
     * but too applies `changed` predicate to determine if there was a
     * change and if the previous value should be recorded.
     *
     * @param val
     */

  }, {
    key: "swap",
    value: function swap(fn) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.reset(fn.apply(void 0, [this.state.deref()].concat(args)));
    }
  }, {
    key: "swapIn",
    value: function swapIn(path, fn) {
      var prev = this.state.deref();
      var prevV = (0, _paths.getIn)(prev, path);

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      var curr = _paths.updateIn.apply(void 0, [this.state.deref(), path, fn].concat(args));

      this.state.reset(curr);
      this.changed(prevV, (0, _paths.getIn)(curr, path)) && this.record(prev);
      return curr;
    }
    /**
     * Records given state in history. This method is only needed when
     * manually managing snapshots, i.e. when applying multiple swaps on
     * the wrapped atom directly, but not wanting to create an history
     * entry for each change. **DO NOT call this explicitly if using
     * `History.reset()` / `History.swap()` etc.**
     *
     * If no `state` is given, uses the wrapped atom's current state
     * value (user code SHOULD always call without arg).
     *
     * If recording succeeded, the `History.EVENT_RECORD` event is
     * emitted with the recorded state provided as event value.
     *
     * @param state
     */

  }, {
    key: "record",
    value: function record(state) {
      var history = this.history;
      var n = history.length;
      var ok = true; // check for arg given and not if `state == null` we want to
      // allow null/undefined as possible values

      if (!arguments.length) {
        state = this.state.deref();
        ok = !n || this.changed(history[n - 1], state);
      }

      if (ok) {
        if (n >= this.maxLen) {
          history.shift();
        }

        history.push(state);
        this.notify({
          id: History_1.EVENT_RECORD,
          value: state
        });
        this.future.length = 0;
      }
    }
    /**
     * Returns wrapped atom's **current** value.
     */

  }, {
    key: "deref",
    value: function deref() {
      return this.state.deref();
    }
    /**
     * `IWatch.addWatch()` implementation. Delegates to wrapped
     * atom/cursor.
     *
     * @param id
     * @param fn
     */

  }, {
    key: "addWatch",
    value: function addWatch(id, fn) {
      return this.state.addWatch(id, fn);
    }
    /**
     * `IWatch.removeWatch()` implementation. Delegates to wrapped
     * atom/cursor.
     *
     * @param id
     */

  }, {
    key: "removeWatch",
    value: function removeWatch(id) {
      return this.state.removeWatch(id);
    }
    /**
     * `IWatch.notifyWatches()` implementation. Delegates to wrapped
     * atom/cursor.
     *
     * @param oldState
     * @param newState
     */

  }, {
    key: "notifyWatches",
    value: function notifyWatches(oldState, newState) {
      return this.state.notifyWatches(oldState, newState);
    }
  }, {
    key: "addView",
    value: function addView(path, tx) {
      var lazy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new _view.View(this, path, tx, lazy);
    }
  }, {
    key: "release",
    value: function release() {
      this.state.release();
      delete this.state;
      return true;
    }
  }, {
    key: "addListener",
    value: function addListener(_, __, ___) {
      return false;
    }
  }, {
    key: "removeListener",
    value: function removeListener(_, __, ___) {
      return false;
    }
  }, {
    key: "notify",
    value: function notify(_) {}
  }, {
    key: "value",
    get: function () {
      return this.deref();
    },
    set: function (val) {
      this.reset(val);
    }
  }]);

  return History;
}();

exports.History = History;
History.EVENT_UNDO = "undo";
History.EVENT_REDO = "redo";
History.EVENT_RECORD = "record";
exports.History = History = History_1 = __decorate([_api.INotifyMixin], History);
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/transacted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transacted = void 0;

var _api = require("@thi.ng/api");

var _paths = require("@thi.ng/paths");

var _idgen = require("./idgen");

var _view = require("./view");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Transacted =
/*#__PURE__*/
function () {
  function Transacted(parent) {
    _classCallCheck(this, Transacted);

    this.parent = parent;
    this.current = undefined;
    this.isActive = false;
    this.id = "tx".concat((0, _idgen.nextID)(), "-");
  }

  _createClass(Transacted, [{
    key: "deref",
    value: function deref() {
      return this.isActive ? this.current : this.parent.deref();
    }
  }, {
    key: "equiv",
    value: function equiv(o) {
      return this === o;
    }
  }, {
    key: "reset",
    value: function reset(val) {
      this.ensureTx();
      this.current = val;
      return val;
    }
  }, {
    key: "resetIn",
    value: function resetIn(path, val) {
      this.ensureTx();
      return this.reset((0, _paths.setIn)(this.current, path, val));
    }
  }, {
    key: "swap",
    value: function swap(fn) {
      this.ensureTx();

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return this.reset(fn.apply(null, [this.current].concat(args)));
    }
  }, {
    key: "swapIn",
    value: function swapIn(path, fn) {
      this.ensureTx();

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      return this.reset(_paths.updateIn.apply(void 0, [this.current, path, fn].concat(args)));
    }
  }, {
    key: "begin",
    value: function begin() {
      (0, _api.assert)(!this.isActive, "transaction already started");
      this.current = this.parent.deref();
      this.isActive = true;
    }
  }, {
    key: "commit",
    value: function commit() {
      this.ensureTx();
      var val = this.current;
      this.parent.reset(this.current);
      this.isActive = false;
      this.current = undefined;
      return val;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.ensureTx();
      this.isActive = false;
      this.current = undefined;
    }
  }, {
    key: "addWatch",
    value: function addWatch(id, watch) {
      return this.parent.addWatch(this.id + id, function (_, prev, curr) {
        return watch(id, prev, curr);
      });
    }
  }, {
    key: "removeWatch",
    value: function removeWatch(id) {
      return this.parent.removeWatch(this.id + id);
    }
  }, {
    key: "notifyWatches",
    value: function notifyWatches(old, curr) {
      this.parent.notifyWatches(old, curr);
    }
  }, {
    key: "addView",
    value: function addView(path, tx) {
      var lazy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return new _view.View(this, path, tx, lazy);
    }
  }, {
    key: "release",
    value: function release() {
      delete this.parent;
      delete this.current;
      delete this.isActive;
      delete this._watches;
      return true;
    }
  }, {
    key: "ensureTx",
    value: function ensureTx() {
      (0, _api.assert)(this.isActive, "no active transaction");
    }
  }, {
    key: "value",
    get: function () {
      return this.deref();
    },
    set: function (val) {
      this.reset(val);
    }
  }, {
    key: "isTransaction",
    get: function () {
      return this.isActive;
    }
  }]);

  return Transacted;
}();

exports.Transacted = Transacted;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./idgen":"../node_modules/@thi.ng/atom/idgen.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/atom/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atom = require("./atom");

Object.keys(_atom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _atom[key];
    }
  });
});

var _cursor = require("./cursor");

Object.keys(_cursor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cursor[key];
    }
  });
});

var _history = require("./history");

Object.keys(_history).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _history[key];
    }
  });
});

var _transacted = require("./transacted");

Object.keys(_transacted).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transacted[key];
    }
  });
});

var _view = require("./view");

Object.keys(_view).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _view[key];
    }
  });
});
},{"./atom":"../node_modules/@thi.ng/atom/atom.js","./cursor":"../node_modules/@thi.ng/atom/cursor.js","./history":"../node_modules/@thi.ng/atom/history.js","./transacted":"../node_modules/@thi.ng/atom/transacted.js","./view":"../node_modules/@thi.ng/atom/view.js"}],"../node_modules/@thi.ng/interceptors/event-bus.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBus = exports.StatelessEventBus = void 0;

var _atom = require("@thi.ng/atom");

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _paths = require("@thi.ng/paths");

var _api = require("./api");

/**
 * Batched event processor for using composable interceptors for event
 * handling and side effects to execute the result of handled events.
 *
 * Events processed by this class are simple 2-element tuples/arrays of
 * this form: `["event-id", payload?]`, where the `payload` is optional
 * and can be of any type.
 *
 * Events are processed by registered handlers which transform each
 * event into a number of side effect descriptions to be executed later.
 * This separation ensures event handlers themselves are pure functions
 * and leads to more efficient reuse of side effecting operations. The
 * pure data nature until the last stage of processing (the application
 * side effects) too means that event flow can be much easier inspected
 * and debugged.
 *
 * In this model a single event handler itself is an array of objects
 * with `pre` and/or `post` keys and functions attached to each key.
 * These functions are called interceptors, since each intercepts the
 * processing of an event and can contribute their own side effects.
 * Each event's interceptor chain is processed bi-directionally (`pre`
 * in forward, `post` in reverse order) and the effects returned from
 * each interceptor are merged/collected. The outcome of this setup is a
 * more aspect-oriented, composable approach to event handling and
 * allows to inject common, re-usable behaviors for multiple event types
 * (logging, validation, undo/redo triggers etc.).
 *
 * Side effects are only processed after all event handlers have run.
 * Furthermore, their order of execution can be configured with optional
 * priorities.
 *
 * See for further details:
 *
 * - `processQueue()`
 * - `processEvent()`
 * - `processEffects()`
 * - `mergeEffects()`
 *
 * The overall approach of this type of event processing is heavily
 * based on the pattern initially pioneered by @Day8/re-frame, with the
 * following differences:
 *
 * - stateless (see `EventBus` for the more common stateful alternative)
 * - standalone implementation (no assumptions about surrounding
 *   context/framework)
 * - manual control over event queue processing
 * - supports event cancellation (via FX_CANCEL side effect)
 * - side effect collection (multiple side effects for same effect type
 *   per frame)
 * - side effect priorities (to control execution order)
 * - dynamic addition/removal of handlers & effects
 */
class StatelessEventBus {
  /**
   * Creates a new event bus instance with given handler and effect
   * definitions (all optional).
   *
   * In addition to the user provided handlers & effects, a number of
   * built-ins are added automatically. See `addBuiltIns()`. User
   * handlers can override built-ins.
   *
   * @param handlers
   * @param effects
   */
  constructor(handlers, effects) {
    this.handlers = {};
    this.effects = {};
    this.eventQueue = [];
    this.priorities = [];
    this.addBuiltIns();

    if (handlers) {
      this.addHandlers(handlers);
    }

    if (effects) {
      this.addEffects(effects);
    }
  }
  /**
   * Adds built-in event & side effect handlers. Also see additional
   * built-ins defined by the stateful `EventBus` extension of this
   * class, as well as comments for these class methods:
   *
   * - `mergeEffects()`
   * - `processEvent()`
   *
   * ### Handlers
   *
   * currently none...
   *
   * ### Side effects
   *
   * #### `FX_CANCEL`
   *
   * If assigned `true`, cancels processing of current event, though
   * still applies any side effects already accumulated.
   *
   * #### `FX_DISPATCH`
   *
   * Dispatches assigned events to be processed in next frame.
   *
   * #### `FX_DISPATCH_ASYNC`
   *
   * Async wrapper for promise based side effects.
   *
   * #### `FX_DISPATCH_NOW`
   *
   * Dispatches assigned events as part of currently processed event
   * queue (no delay).
   *
   * #### `FX_DELAY`
   *
   * Async side effect. Only to be used in conjunction with
   * `FX_DISPATCH_ASYNC`. Triggers given event after `x` milliseconds.
   *
   * ```
   * // this triggers `[EV_SUCCESS, "ok"]` event after 1000 ms
   * { [FX_DISPATCH_ASYNC]: [FX_DELAY, [1000, "ok"], EV_SUCCESS, EV_ERROR] }
   * ```
   *
   * #### `FX_FETCH`
   *
   * Async side effect. Only to be used in conjunction with
   * `FX_DISPATCH_ASYNC`. Performs `fetch()` HTTP request and triggers
   * success with received response, or if there was an error with
   * response's `statusText`. The error event is only triggered if the
   * fetched response's `ok` field is non-truthy.
   *
   * - https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
   * - https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText
   *
   * ```
   * // fetches "foo.json" and then dispatches EV_SUCCESS or EV_ERROR event
   * { [FX_DISPATCH_ASYNC]: [FX_FETCH, "foo.json", EV_SUCCESS, EV_ERROR] }
   * ```
   */


  addBuiltIns() {
    this.addEffects({
      [_api.FX_DISPATCH]: [e => this.dispatch(e), -999],
      [_api.FX_DISPATCH_ASYNC]: [([id, arg, success, err], bus, ctx) => {
        const fx = this.effects[id];

        if (fx) {
          const p = fx(arg, bus, ctx);

          if ((0, _checks.isPromise)(p)) {
            p.then(res => this.dispatch([success, res])).catch(e => this.dispatch([err, e]));
          } else {
            _api.LOGGER.warn("async effect did not return Promise");
          }
        } else {
          _api.LOGGER.warn(`skipping invalid async effect: ${id}`);
        }
      }, -999],
      [_api.FX_DELAY]: [([x, body]) => new Promise(res => setTimeout(() => res(body), x)), 1000],
      [_api.FX_FETCH]: [req => fetch(req).then(resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }

        return resp;
      }), 1000]
    });
  }

  addHandler(id, spec) {
    const iceps = this.interceptorsFromSpec(spec);

    if (iceps.length > 0) {
      if (this.handlers[id]) {
        this.removeHandler(id);

        _api.LOGGER.warn(`overriding handler for ID: ${id}`);
      }

      this.handlers[id] = iceps;
    } else {
      (0, _errors.illegalArgs)(`no handlers in spec for ID: ${id}`);
    }
  }

  addHandlers(specs) {
    for (let id in specs) {
      this.addHandler(id, specs[id]);
    }
  }

  addEffect(id, fx, priority = 1) {
    if (this.effects[id]) {
      this.removeEffect(id);

      _api.LOGGER.warn(`overriding effect for ID: ${id}`);
    }

    this.effects[id] = fx;
    const p = [id, priority];
    const priors = this.priorities;

    for (let i = 0; i < priors.length; i++) {
      if (p[1] < priors[i][1]) {
        priors.splice(i, 0, p);
        return;
      }
    }

    priors.push(p);
  }

  addEffects(specs) {
    for (let id in specs) {
      const fx = specs[id];

      if ((0, _checks.isArray)(fx)) {
        this.addEffect(id, fx[0], fx[1]);
      } else {
        this.addEffect(id, fx);
      }
    }
  }
  /**
   * Prepends given interceptors (or interceptor functions) to
   * selected handlers. If no handler IDs are given, applies
   * instrumentation to all currently registered handlers.
   *
   * @param inject
   * @param ids
   */


  instrumentWith(inject, ids) {
    const iceps = inject.map(asInterceptor);
    const handlers = this.handlers;

    for (let id of ids || Object.keys(handlers)) {
      const h = handlers[id];

      if (h) {
        handlers[id] = iceps.concat(h);
      }
    }
  }

  removeHandler(id) {
    delete this.handlers[id];
  }

  removeHandlers(ids) {
    for (let id of ids) {
      this.removeHandler(id);
    }
  }

  removeEffect(id) {
    delete this.effects[id];
    const p = this.priorities;

    for (let i = p.length - 1; i >= 0; i--) {
      if (id === p[i][0]) {
        p.splice(i, 1);
        return;
      }
    }
  }

  removeEffects(ids) {
    for (let id of ids) {
      this.removeEffect(id);
    }
  }
  /**
   * If called during event processing, returns current side effect
   * accumulator / interceptor context. Otherwise returns nothing.
   */


  context() {
    return this.currCtx;
  }
  /**
   * Adds given events to event queue to be processed by
   * `processQueue()` later on. It's the user's responsibility to call
   * that latter function repeatedly in a timely manner, preferably
   * via `requestAnimationFrame()` or similar.
   *
   * @param e
   */


  dispatch(...e) {
    this.eventQueue.push(...e);
  }
  /**
   * Adds given events to whatever is the current event queue. If
   * triggered via the `FX_DISPATCH_NOW` side effect from an event
   * handler / interceptor, the event will still be executed in the
   * currently active batch / frame. If called from elsewhere, the
   * result is the same as calling `dispatch()`.
   *
   * @param e
   */


  dispatchNow(...e) {
    (this.currQueue || this.eventQueue).push(...e);
  }
  /**
   * Dispatches given event after `delay` milliseconds (by default
   * 17). Note: Since events are only processed by calling
   * `processQueue()`, it's the user's responsibility to call that
   * latter function repeatedly in a timely manner, preferably via
   * `requestAnimationFrame()` or similar.
   *
   * @param e
   * @param delay
   */


  dispatchLater(e, delay = 17) {
    setTimeout(() => this.dispatch(e), delay);
  }
  /**
   * Triggers processing of current event queue and returns `true` if
   * any events have been processed.
   *
   * If an event handler triggers the `FX_DISPATCH_NOW` side effect,
   * the new event will be added to the currently processed batch and
   * therefore executed in the same frame. Also see `dispatchNow()`.
   *
   * An optional `ctx` (context) object can be provided, which is used
   * to collect any side effect definitions during processing. This
   * can be useful for debugging, inspection or post-processing
   * purposes.
   *
   * @param ctx
   */


  processQueue(ctx) {
    if (this.eventQueue.length > 0) {
      this.currQueue = [...this.eventQueue];
      this.eventQueue.length = 0;
      ctx = this.currCtx = ctx || {};

      for (let e of this.currQueue) {
        this.processEvent(ctx, e);
      }

      this.currQueue = this.currCtx = undefined;
      this.processEffects(ctx);
      return true;
    }

    return false;
  }
  /**
   * Processes a single event using its configured handler/interceptor
   * chain. Logs warning message and skips processing if no handler is
   * available for the event type.
   *
   * The array of interceptors is processed in bi-directional order.
   * First any `pre` interceptors are processed in forward order. Then
   * `post` interceptors are processed in reverse.
   *
   * Each interceptor can return a result object of side effects,
   * which are being merged and collected for `processEffects()`.
   *
   * Any interceptor can trigger zero or more known side effects, each
   * (side effect) will be collected in an array to support multiple
   * invocations of the same effect type per frame. If no side effects
   * are requested, an interceptor can return `undefined`.
   *
   * Processing of the current event stops immediately, if an
   * interceptor sets the `FX_CANCEL` side effect key to `true`.
   * However, the results of any previous interceptors (incl. the one
   * which cancelled) are kept and processed further as usual.
   *
   * @param ctx
   * @param e
   */


  processEvent(ctx, e) {
    const iceps = this.handlers[e[0]];

    if (!iceps) {
      _api.LOGGER.warn(`missing handler for event type: ${e[0].toString()}`);

      return;
    }

    if (!this.processForward(ctx, iceps, e)) {
      return;
    }

    this.processReverse(ctx, iceps, e);
  }

  processForward(ctx, iceps, e) {
    let hasPost = false;

    for (let i = 0, n = iceps.length; i < n && !ctx[_api.FX_CANCEL]; i++) {
      const icep = iceps[i];

      if (icep.pre) {
        this.mergeEffects(ctx, icep.pre(ctx[_api.FX_STATE], e, this, ctx));
      }

      hasPost = hasPost || !!icep.post;
    }

    return hasPost;
  }

  processReverse(ctx, iceps, e) {
    for (let i = iceps.length; --i >= 0 && !ctx[_api.FX_CANCEL];) {
      const icep = iceps[i];

      if (icep.post) {
        this.mergeEffects(ctx, icep.post(ctx[_api.FX_STATE], e, this, ctx));
      }
    }
  }
  /**
   * Takes a collection of side effects generated during event
   * processing and applies them in order of configured priorities.
   *
   * @param ctx
   */


  processEffects(ctx) {
    const effects = this.effects;

    for (let p of this.priorities) {
      const id = p[0];
      const val = ctx[id];
      val !== undefined && this.processEffect(ctx, effects, id, val);
    }
  }

  processEffect(ctx, effects, id, val) {
    const fn = effects[id];

    if (id !== _api.FX_STATE) {
      for (let v of val) {
        fn(v, this, ctx);
      }
    } else {
      fn(val, this, ctx);
    }
  }
  /**
   * Merges the new side effects returned from an interceptor into the
   * internal effect accumulator.
   *
   * Any events assigned to the `FX_DISPATCH_NOW` effect key are
   * immediately added to the currently active event batch.
   *
   * If an interceptor wishes to cause multiple invocations of a
   * single side effect type (e.g. dispatch multiple other events), it
   * MUST return an array of these values. The only exceptions to this
   * are the following effects, which for obvious reasons can only
   * accept a single value.
   *
   * **Note:** the `FX_STATE` effect is not actually defined by this
   * class here, but is supported to avoid code duplication in
   * `StatefulEventBus`.
   *
   * - `FX_CANCEL`
   * - `FX_STATE`
   *
   * Because of this support (multiple values), the value of a single
   * side effect MUST NOT be a nested array itself, or rather its
   * first item can't be an array.
   *
   * For example:
   *
   * ```
   * // interceptor result map to dispatch a single event
   * { [FX_DISPATCH]: ["foo", "bar"]}
   *
   * // result map format to dispatch multiple events
   * { [FX_DISPATCH]: [ ["foo", "bar"], ["baz", "beep"] ]}
   * ```
   *
   * Any `null` / `undefined` values directly assigned to a side
   * effect are ignored and will not trigger the effect.
   *
   * @param fx
   * @param ret
   */


  mergeEffects(ctx, ret) {
    if (!ret) {
      return;
    }

    for (let k in ret) {
      const v = ret[k];

      if (v == null) {
        continue;
      }

      if (k === _api.FX_STATE || k === _api.FX_CANCEL) {
        ctx[k] = v;
      } else if (k === _api.FX_DISPATCH_NOW) {
        if ((0, _checks.isArray)(v[0])) {
          for (let e of v) {
            e && this.dispatchNow(e);
          }
        } else {
          this.dispatchNow(v);
        }
      } else {
        ctx[k] || (ctx[k] = []);

        if ((0, _checks.isArray)(v[0])) {
          for (let e of v) {
            e !== undefined && ctx[k].push(e);
          }
        } else {
          ctx[k].push(v);
        }
      }
    }
  }

  interceptorsFromSpec(spec) {
    return (0, _checks.isArray)(spec) ? spec.map(asInterceptor) : (0, _checks.isFunction)(spec) ? [{
      pre: spec
    }] : [spec];
  }

}
/**
 * Stateful version of `StatelessEventBus`. Wraps an `IAtom` state
 * container (Atom/Cursor) and provides additional pre-defined event
 * handlers and side effects to manipulate wrapped state. Prefer this
 * as the default implementation for most use cases.
 */


exports.StatelessEventBus = StatelessEventBus;

class EventBus extends StatelessEventBus {
  /**
   * Creates a new event bus instance with given parent state, handler
   * and effect definitions (all optional). If no state is given,
   * automatically creates an `Atom` with empty state object.
   *
   * In addition to the user provided handlers & effects, a number of
   * built-ins are added automatically. See `addBuiltIns()`. User
   * handlers can override built-ins.
   *
   * @param state
   * @param handlers
   * @param effects
   */
  constructor(state, handlers, effects) {
    super(handlers, effects);
    this.state = state || new _atom.Atom({});
  }
  /**
   * Returns value of internal state. Shorthand for:
   * `bus.state.deref()`
   */


  deref() {
    return this.state.deref();
  }
  /**
   * Adds same built-in event & side effect handlers as in
   * `StatelessEventBus.addBuiltIns()` and the following additions:
   *
   * ### Handlers
   *
   * #### `EV_SET_VALUE`
   *
   * Resets state path to provided value. See `setIn()`.
   *
   * Example event definition:
   * ```
   * [EV_SET_VALUE, ["path.to.value", val]]
   * ```
   *
   * #### `EV_UPDATE_VALUE`
   *
   * Updates a state path's value with provided function and optional
   * extra arguments. See `updateIn()`.
   *
   * Example event definition:
   * ```
   * [EV_UPDATE_VALUE, ["path.to.value", (x, y) => x + y, 1]]
   * ```
   *
   * #### `EV_TOGGLE_VALUE`
   *
   * Negates a boolean state value at given path.
   *
   * Example event definition:
   * ```
   * [EV_TOGGLE_VALUE, "path.to.value"]
   * ```
   *
   * #### `EV_UNDO`
   *
   * Calls `ctx[id].undo()` and uses return value as new state.
   * Assumes `ctx[id]` is a @thi.ng/atom `History` instance, provided
   * via e.g. `processQueue({ history })`. The event can be triggered
   * with or without ID. By default `"history"` is used as default key
   * to lookup the `History` instance. Furthermore, an additional
   * event can be triggered based on if a previous state has been
   * restored or not (basically, if the undo was successful). This is
   * useful for resetting/re-initializing stateful resources after a
   * successful undo action or to notify the user that no more undo's
   * are possible. The new event will be processed in the same frame
   * and has access to the (possibly) restored state. The event
   * structure for these options is shown below:
   *
   * ```
   * // using default ID
   * bus.dispatch([EV_UNDO]);
   *
   * // using custom history ID
   * bus.dispatch([EV_UNDO, ["custom"]]);
   *
   * // using custom ID and dispatch another event after undo
   * bus.dispatch([EV_UNDO, ["custom", ["ev-undo-success"], ["ev-undo-fail"]]]);
   * ```
   *
   * #### `EV_REDO`
   *
   * Similar to `EV_UNDO`, but for redo actions.
   *
   * ### Side effects
   *
   * #### `FX_STATE`
   *
   * Resets state atom to provided value (only a single update per
   * processing frame).
   */


  addBuiltIns() {
    super.addBuiltIns(); // handlers

    this.addHandlers({
      [_api.EV_SET_VALUE]: (state, [_, [path, val]]) => ({
        [_api.FX_STATE]: (0, _paths.setIn)(state, path, val)
      }),
      [_api.EV_UPDATE_VALUE]: (state, [_, [path, fn, ...args]]) => ({
        [_api.FX_STATE]: (0, _paths.updateIn)(state, path, fn, ...args)
      }),
      [_api.EV_TOGGLE_VALUE]: (state, [_, path]) => ({
        [_api.FX_STATE]: (0, _paths.updateIn)(state, path, x => !x)
      }),
      [_api.EV_UNDO]: undoHandler("undo"),
      [_api.EV_REDO]: undoHandler("redo")
    }); // effects

    this.addEffects({
      [_api.FX_STATE]: [state => this.state.reset(state), -1000]
    });
  }
  /**
   * Triggers processing of current event queue and returns `true` if
   * the any of the processed events caused a state change.
   *
   * If an event handler triggers the `FX_DISPATCH_NOW` side effect,
   * the new event will be added to the currently processed batch and
   * therefore executed in the same frame. Also see `dispatchNow()`.
   *
   * If the optional `ctx` arg is provided it will be merged into the
   * `InterceptorContext` object passed to each interceptor. Since the
   * merged object is also used to collect triggered side effects,
   * care must be taken that there're no key name clashes.
   *
   * In order to use the built-in `EV_UNDO`, `EV_REDO` events, users
   * MUST provide a @thi.ng/atom History (or compatible undo history
   * instance) via the `ctx` arg, e.g.
   *
   * ```
   * bus.processQueue({ history });
   * ```
   */


  processQueue(ctx) {
    if (this.eventQueue.length > 0) {
      const prev = this.state.deref();
      this.currQueue = [...this.eventQueue];
      this.eventQueue.length = 0;
      ctx = this.currCtx = Object.assign({}, ctx, {
        [_api.FX_STATE]: prev
      });

      for (let e of this.currQueue) {
        this.processEvent(ctx, e);
      }

      this.currQueue = this.currCtx = undefined;
      this.processEffects(ctx);
      return this.state.deref() !== prev;
    }

    return false;
  }

}

exports.EventBus = EventBus;

const asInterceptor = i => (0, _checks.isFunction)(i) ? {
  pre: i
} : i;

const undoHandler = action => (_, [__, ev], bus, ctx) => {
  const id = ev ? ev[0] : "history";

  if ((0, _checks.implementsFunction)(ctx[id], action)) {
    const ok = ctx[id][action]();
    return {
      [_api.FX_STATE]: bus.state.deref(),
      [_api.FX_DISPATCH_NOW]: ev ? ok !== undefined ? ev[1] : ev[2] : undefined
    };
  } else {
    _api.LOGGER.warn("no history in context");
  }
};
},{"@thi.ng/atom":"../node_modules/@thi.ng/atom/index.js","@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./api":"../node_modules/@thi.ng/interceptors/api.js"}],"../node_modules/@thi.ng/interceptors/interceptors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueUpdater = exports.valueSetter = exports.ensureParamRange = exports.ensureStateRange = exports.ensureStateGreaterThan = exports.ensureStateLessThan = exports.ensurePred = exports.snapshot = exports.dispatchNow = exports.dispatch = exports.forwardSideFx = exports.trace = void 0;

var _paths = require("@thi.ng/paths");

var _api = require("./api");

/**
 * Debug interceptor to log the current event to the console.
 */
const trace = (_, e) => console.log("event:", e);
/**
 * Higher-order interceptor. Returns interceptor which unpacks payload
 * from event and assigns it as is to given side effect ID. Assigns
 * `true` to side effect if event has no payload.
 *
 * @param fxID side effect ID
 */


exports.trace = trace;

const forwardSideFx = fxID => (_, [__, body]) => ({
  [fxID]: body !== undefined ? body : true
});
/**
 * Higher-order interceptor. Returns interceptor which assigns given
 * event to `FX_DISPATCH` side effect.
 *
 * @param event
 */


exports.forwardSideFx = forwardSideFx;

const dispatch = event => () => ({
  [_api.FX_DISPATCH]: event
});
/**
 * Higher-order interceptor. Returns interceptor which assigns given
 * event to `FX_DISPATCH_NOW` side effect.
 *
 * @param event
 */


exports.dispatch = dispatch;

const dispatchNow = event => () => ({
  [_api.FX_DISPATCH_NOW]: event
});
/**
 * Higher-order interceptor. Returns interceptor which calls
 * `ctx[id].record()`, where `ctx` is the currently active
 * `InterceptorContext` passed to all event handlers and `ctx[id]` is
 * assumed to be a @thi.ng/atom `History` instance, passed to
 * `processQueue()`. The default ID for the history instance is
 * `"history"`.
 *
 * Example usage:
 *
 * ```
 * state = new Atom({});
 * history = new History(state);
 * bus = new EventBus(state);
 * // register event handler
 * // each time the `foo` event is triggered, a snapshot of
 * // current app state is recorded first
 * bus.addHandlers({
 *  foo: [snapshot(), valueSetter("foo")]
 * });
 * ...
 * // trigger event
 * bus.dispatch(["foo", 23]);
 *
 * // pass history instance via interceptor context to handlers
 * bus.processQueue({ history });
 * ```
 *
 * @param id
 */


exports.dispatchNow = dispatchNow;

const snapshot = (id = "history") => (_, __, ___, ctx) => ctx[id].record();
/**
 * Higher-order interceptor for validation purposes. Takes a predicate
 * function and an optional interceptor function, which will only be
 * called if the predicate fails for a given event. By default the
 * `FX_CANCEL` side effect is triggered if the predicate failed, thus
 * ensuring the actual event handler for the failed event will not be
 * executed anymore. However, this can be overridden using the error
 * interceptor's result, which is merged into the result of this
 * interceptor.
 *
 * The error interceptor can return any number of other side effects and
 * so be used to dispatch alternative events instead, for example:
 *
 * ```
 * // this interceptor will cause cancellation of current event
 * // and trigger an "error" event instead
 * ensurePred(
 *   // a dummy predicate which always fails
 *   () => false
 *   // error interceptor fn
 *   () => ({[FX_DISPATCH_NOW]: ["error", "reason"]})
 * )
 * ```
 *
 * Note: For this interceptor to work as expected, it needs to be
 * provided BEFORE the main handler in the interceptor list for a given
 * event, i.e.
 *
 * ```
 * [
 *    ensurePred((state, e) => false),
 *    // actual event handler
 *    (state, e) => console.log("no one never calls me")
 * ]
 * ```
 *
 * @param pred predicate applied to given state & event
 * @param err interceptor triggered on predicate failure
 */


exports.snapshot = snapshot;

const ensurePred = (pred, err) => (state, e, bus, ctx) => !pred(state, e, bus, ctx) ? Object.assign({
  [_api.FX_CANCEL]: true
}, err ? err(state, e, bus, ctx) : null) : undefined;

exports.ensurePred = ensurePred;

const eventPathState = (state, path, e) => (0, _paths.getIn)(state, path ? path(e) : e[1]);
/**
 * Specialization of `ensurePred()` to ensure a state value is less than
 * given max at the time when the event is being processed. The optional
 * `path` fn is used to extract or produce the path for the state value
 * to be validated. If omitted, the event's payload item is interpreted
 * as the value path.
 *
 * For example, without a provided `path` function and for an event of
 * this form: `["event-id", "foo.bar"]`, the term `"foo.bar"` would be
 * interpreted as path.
 *
 * If the event has this shape: `["event-id", ["foo.bar", 23]]`, we must
 * provide `(e) => e[1][0]` as path function to extract `"foo.bar"` from
 * the event.
 *
 * @param max
 * @param path path extractor
 * @param err error interceptor
 */


const ensureStateLessThan = (max, path, err) => ensurePred((state, e) => eventPathState(state, path, e) < max, err);
/**
 * Specialization of `ensurePred()` to ensure a state value is greater
 * than given min. See `ensureStateLessThan()` for further details.
 *
 * @param min
 * @param path path extractor
 * @param err error interceptor
 */


exports.ensureStateLessThan = ensureStateLessThan;

const ensureStateGreaterThan = (min, path, err) => ensurePred((state, e) => eventPathState(state, path, e) > min, err);
/**
 * Specialization of `ensurePred()` to ensure a state value is within
 * given `min` / `max` closed interval. See `ensureStateLessThan()` for
 * further details.
 *
 * @param min
 * @param max
 * @param path path extractor
 * @param err error interceptor
 */


exports.ensureStateGreaterThan = ensureStateGreaterThan;

const ensureStateRange = (min, max, path, err) => ensurePred((state, e) => {
  const x = eventPathState(state, path, e);
  return x >= min && x <= max;
}, err);
/**
 * Specialization of `ensurePred()` to ensure an event's payload value
 * is within given `min` / `max` closed interval. By default, assumes
 * event format like: `[event-id, value]`. However if `value` is given,
 * the provided function can be used to extract the value to be
 * validated from any event. If the value is outside the given interval,
 * triggers `FX_CANCEL` side effect and if `err` is given, the error
 * interceptor can return any number of other side effects and so be
 * used to dispatch alternative events instead.
 *
 * @param min
 * @param max
 * @param value event value extractor
 * @param err error interceptor
 */


exports.ensureStateRange = ensureStateRange;

const ensureParamRange = (min, max, value, err) => ensurePred((_, e) => {
  const x = value ? value(e) : e[1];
  return x >= min && x <= max;
}, err);
/**
 * Higher-order interceptor. Returns new interceptor to set state value
 * at provided path. This allows for dedicated events to set state
 * values more concisely, e.g. given this event definition:
 *
 * ```
 * setFoo: valueSetter("foo.bar")
 * ```
 *
 * ...the `setFoo` event then can be triggered like so to update the
 * state value at `foo.bar`:
 *
 * ```
 * bus.dispatch(["setFoo", 23])
 * ```
 *
 * @param path
 * @param tx
 */


exports.ensureParamRange = ensureParamRange;

const valueSetter = (path, tx) => {
  const $ = (0, _paths.setter)(path);
  return (state, [_, val]) => ({
    [_api.FX_STATE]: $(state, tx ? tx(val) : val)
  });
};
/**
 * Higher-order interceptor. Returns new interceptor to update state
 * value at provided path with given function. This allows for dedicated
 * events to update state values more concisely, e.g. given this event
 * definition:
 *
 * ```
 * incFoo: valueUpdater("foo.bar", (x, y) => x + y)
 * ```
 *
 * ...the `incFoo` event then can be triggered like so to update the
 * state value at `foo.bar` (where `1` is the extra arg provided to the
 * update fn:
 *
 * ```
 * bus.dispatch(["incFoo", 1]) // results in value = value + 1
 * ```
 *
 * @param path
 * @param fn
 */


exports.valueSetter = valueSetter;

const valueUpdater = (path, fn) => {
  const $ = (0, _paths.updater)(path, fn);
  return (state, [_, ...args]) => ({
    [_api.FX_STATE]: $(state, ...args)
  });
};

exports.valueUpdater = valueUpdater;
},{"@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","./api":"../node_modules/@thi.ng/interceptors/api.js"}],"../node_modules/@thi.ng/interceptors/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _eventBus = require("./event-bus");

Object.keys(_eventBus).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _eventBus[key];
    }
  });
});

var _interceptors = require("./interceptors");

Object.keys(_interceptors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interceptors[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/interceptors/api.js","./event-bus":"../node_modules/@thi.ng/interceptors/event-bus.js","./interceptors":"../node_modules/@thi.ng/interceptors/interceptors.js"}],"bus/context.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bus = exports.state = void 0;

var I = _interopRequireWildcard(require("@thi.ng/interceptors"));

var _atom = require("@thi.ng/atom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = new _atom.Atom({});
exports.state = state;
var bus = new I.EventBus(state, {
  init: function init() {
    return _defineProperty({}, I.FX_STATE, {
      count: 0
    });
  },
  'inc-count': [I.valueUpdater('count', function (x) {
    return x + 1;
  })]
});
exports.bus = bus;
},{"@thi.ng/interceptors":"../node_modules/@thi.ng/interceptors/index.js","@thi.ng/atom":"../node_modules/@thi.ng/atom/index.js"}],"bus/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _context = require("./context");

Object.keys(_context).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _context[key];
    }
  });
});
},{"./context":"bus/context.js"}],"../node_modules/@thi.ng/hiccup-css/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRETTY = exports.COMPACT = exports.DEFAULT_VENDORS = void 0;
const DEFAULT_VENDORS = ["-moz-", "-ms-", "-o-", "-webkit-"];
/**
 * Default format config used by `css()` function.
 * Forms "minimized" CSS without obsolete white space
 * and omits comments unless they were forced.
 */

exports.DEFAULT_VENDORS = DEFAULT_VENDORS;
const COMPACT = {
  rules: "",
  ruleSep: ",",
  valSep: "",
  decls: "",
  declStart: "{",
  declEnd: "}",
  indent: "",
  comments: false
};
/**
 * Pretty printing format config with line breaks
 * and indentation.
 */

exports.COMPACT = COMPACT;
const PRETTY = {
  rules: "\n",
  ruleSep: ", ",
  valSep: " ",
  decls: "\n",
  declStart: " {\n",
  declEnd: "}\n",
  indent: "    ",
  comments: true
};
exports.PRETTY = PRETTY;
},{}],"../node_modules/@thi.ng/transducers/reduced.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreduced = exports.ensureReduced = exports.isReduced = exports.reduced = exports.Reduced = void 0;

class Reduced {
  constructor(val) {
    this.value = val;
  }

  deref() {
    return this.value;
  }

}

exports.Reduced = Reduced;

const reduced = x => new Reduced(x);

exports.reduced = reduced;

const isReduced = x => x instanceof Reduced;

exports.isReduced = isReduced;

const ensureReduced = x => x instanceof Reduced ? x : new Reduced(x);

exports.ensureReduced = ensureReduced;

const unreduced = x => x instanceof Reduced ? x.deref() : x;

exports.unreduced = unreduced;
},{}],"../node_modules/@thi.ng/transducers/reduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;
exports.$$reduce = exports.reducer = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _reduced = require("./reduced");

const parseArgs = args => args.length === 2 ? [undefined, args[1]] : args.length === 3 ? [args[1], args[2]] : (0, _errors.illegalArity)(args.length);

function reduce(...args) {
  const rfn = args[0];
  const init = rfn[0];
  const complete = rfn[1];
  const reduce = rfn[2];
  args = parseArgs(args);
  const acc = args[0] == null ? init() : args[0];
  const xs = args[1];
  return (0, _reduced.unreduced)(complete((0, _checks.implementsFunction)(xs, "$reduce") ? xs.$reduce(reduce, acc) : (0, _checks.isArrayLike)(xs) ? reduceArray(reduce, acc, xs) : reduceIterable(reduce, acc, xs)));
}

const reduceArray = (rfn, acc, xs) => {
  for (let i = 0, n = xs.length; i < n; i++) {
    acc = rfn(acc, xs[i]);

    if ((0, _reduced.isReduced)(acc)) {
      acc = acc.deref();
      break;
    }
  }

  return acc;
};

const reduceIterable = (rfn, acc, xs) => {
  for (let x of xs) {
    acc = rfn(acc, x);

    if ((0, _reduced.isReduced)(acc)) {
      acc = acc.deref();
      break;
    }
  }

  return acc;
};
/**
 * Convenience helper for building a full `Reducer` using the identity
 * function (i.e. `(x) => x`) as completion step (true for 90% of all
 * bundled transducers).
 *
 * @param init init step of reducer
 * @param rfn reduction step of reducer
 */


const reducer = (init, rfn) => [init, acc => acc, rfn];

exports.reducer = reducer;

const $$reduce = (rfn, args) => {
  const n = args.length - 1;
  return (0, _checks.isIterable)(args[n]) ? args.length > 1 ? reduce(rfn.apply(null, args.slice(0, n)), args[n]) : reduce(rfn(), args[0]) : undefined;
};

exports.$$reduce = $$reduce;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/push.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;

var _reduce = require("../reduce");

function push(xs) {
  return xs ? [...xs] : (0, _reduce.reducer)(() => [], (acc, x) => (acc.push(x), acc));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterator = iterator;
exports.iterator1 = iterator1;
exports.$iter = void 0;

var _api = require("@thi.ng/api");

var _checks = require("@thi.ng/checks");

var _reduced = require("./reduced");

var _push = require("./rfn/push");

/**
 * Takes a transducer and input iterable. Returns iterator of
 * transformed results.
 *
 * @param xform
 * @param xs
 */
function* iterator(xform, xs) {
  const rfn = xform((0, _push.push)());
  const complete = rfn[1];
  const reduce = rfn[2];

  for (let x of xs) {
    const y = reduce([], x);

    if ((0, _reduced.isReduced)(y)) {
      yield* (0, _reduced.unreduced)(complete(y.deref()));
      return;
    }

    if (y.length) {
      yield* y;
    }
  }

  yield* (0, _reduced.unreduced)(complete([]));
}
/**
 * Optimized version of `iterator()` for transducers which are
 * guaranteed to:
 *
 * 1) Only produce none or a single result per input
 * 2) Do not require a `completion` reduction step
 *
 * @param xform
 * @param xs
 */


function* iterator1(xform, xs) {
  const reduce = xform([_api.NO_OP, _api.NO_OP, (_, x) => x])[2];

  for (let x of xs) {
    let y = reduce(_api.SEMAPHORE, x);

    if ((0, _reduced.isReduced)(y)) {
      y = (0, _reduced.unreduced)(y.deref());

      if (y !== _api.SEMAPHORE) {
        yield y;
      }

      return;
    }

    if (y !== _api.SEMAPHORE) {
      yield y;
    }
  }
}
/**
 * Helper function used by various transducers to wrap themselves as
 * transforming iterators. Delegates to `iterator1()` by default.
 *
 * @param xform
 * @param args
 * @param impl
 */


const $iter = (xform, args, impl = iterator1) => {
  const n = args.length - 1;
  return (0, _checks.isIterable)(args[n]) ? args.length > 1 ? impl(xform.apply(null, args.slice(0, n)), args[n]) : impl(xform(), args[0]) : undefined;
};

exports.$iter = $iter;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./reduced":"../node_modules/@thi.ng/transducers/reduced.js","./rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/func/compr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compR = void 0;

/**
 * Reducer composition helper. Takes existing reducer `rfn` (a 3-tuple)
 * and a reducing function `fn`. Returns a new reducer tuple of this
 * form:
 *
 * ```
 * [rfn[0], rfn[1], fn]
 * ```
 *
 * `rfn[2]` reduces values of type `B` into an accumulator of type `A`.
 * `fn` accepts values of type `C` and produces interim results of type
 * `B`, which are then (possibly) passed to the "inner" `rfn[2]`
 * function. Therefore the resulting reducer takes inputs of `C` and an
 * accumulator of type `A`.
 *
 * It is assumed that `fn` internally calls `rfn[2]` to pass its own
 * results for further processing by the nested reducer `rfn`.
 *
 * @param rfn
 * @param fn
 */
const compR = (rfn, fn) => [rfn[0], rfn[1], fn];

exports.compR = compR;
},{}],"../node_modules/@thi.ng/transducers/xform/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function map(fn, src) {
  return src ? (0, _iterator.iterator1)(map(fn), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => r(acc, fn(x)));
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/transduce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transduce = transduce;

var _errors = require("@thi.ng/errors");

var _reduce = require("./reduce");

var _map = require("./xform/map");

function transduce(...args) {
  let acc, xs;

  switch (args.length) {
    case 4:
      xs = args[3];
      acc = args[2];
      break;

    case 3:
      xs = args[2];
      break;

    case 2:
      return (0, _map.map)(x => transduce(args[0], args[1], x));

    default:
      (0, _errors.illegalArity)(args.length);
  }

  return (0, _reduce.reduce)(args[0](args[1]), acc, xs);
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./reduce":"../node_modules/@thi.ng/transducers/reduce.js","./xform/map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/run.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = run;

var _api = require("@thi.ng/api");

var _transduce = require("./transduce");

const NO_OP_REDUCER = [_api.NO_OP, _api.NO_OP, _api.NO_OP];

function run(tx, ...args) {
  if (args.length === 1) {
    (0, _transduce.transduce)(tx, NO_OP_REDUCER, args[0]);
  } else {
    const fx = args[0];
    (0, _transduce.transduce)(tx, [_api.NO_OP, _api.NO_OP, (_, x) => fx(x)], args[1]);
  }
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","./transduce":"../node_modules/@thi.ng/transducers/transduce.js"}],"../node_modules/@thi.ng/transducers/step.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.step = void 0;

var _reduced = require("./reduced");

var _push = require("./rfn/push");

/**
 * Single-step transducer execution wrapper.
 * Returns array if transducer produces multiple results
 * and undefined if there was no output. Else returns single
 * result value.
 *
 * Likewise, once a transducer has produced a final / reduced
 * value, all further invocations of the stepper function will
 * return undefined.
 *
 * ```
 * // single result
 * step(map(x => x * 10))(1);
 * // 10
 *
 * // multiple results
 * step(mapcat(x => [x, x + 1, x + 2]))(1)
 * // [ 1, 2, 3 ]
 *
 * // no result
 * f = step(filter((x) => !(x & 1)))
 * f(1); // undefined
 * f(2); // 2
 *
 * // reduced value termination
 * f = step(take(2));
 * f(1); // 1
 * f(1); // 1
 * f(1); // undefined
 * f(1); // undefined
 * ```
 *
 * @param tx
 */
const step = tx => {
  const [_, complete, reduce] = tx((0, _push.push)());
  _;
  let done = false;
  return x => {
    if (!done) {
      let acc = reduce([], x);
      done = (0, _reduced.isReduced)(acc);

      if (done) {
        acc = complete(acc.deref());
      }

      return acc.length === 1 ? acc[0] : acc.length > 0 ? acc : undefined;
    }
  };
};

exports.step = step;
},{"./reduced":"../node_modules/@thi.ng/transducers/reduced.js","./rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/internal/mathop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__mathop = void 0;

var _reduce = require("../reduce");

const __mathop = (rfn, fn, initDefault, args) => {
  const res = (0, _reduce.$$reduce)(rfn, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0] || initDefault;
  return (0, _reduce.reducer)(() => init, fn);
};

exports.__mathop = __mathop;
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

var _mathop = require("../internal/mathop");

function add(...args) {
  return (0, _mathop.__mathop)(add, (acc, x) => acc + x, 0, args);
}
},{"../internal/mathop":"../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../node_modules/@thi.ng/transducers/rfn/assoc-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assocMap = assocMap;

var _reduce = require("../reduce");

function assocMap(xs) {
  return xs ? (0, _reduce.reduce)(assocMap(), xs) : (0, _reduce.reducer)(() => new Map(), (acc, [k, v]) => acc.set(k, v));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/assoc-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assocObj = assocObj;

var _reduce = require("../reduce");

function assocObj(xs) {
  return xs ? (0, _reduce.reduce)(assocObj(), xs) : (0, _reduce.reducer)(() => ({}), (acc, [k, v]) => (acc[k] = v, acc));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/conj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conj = conj;

var _reduce = require("../reduce");

function conj(xs) {
  return xs ? (0, _reduce.reduce)(conj(), xs) : (0, _reduce.reducer)(() => new Set(), (acc, x) => acc.add(x));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = count;

var _reduce = require("../reduce");

function count(...args) {
  const res = (0, _reduce.$$reduce)(count, args);

  if (res !== undefined) {
    return res;
  }

  let offset = args[0] || 0;
  let step = args[1] || 1;
  return (0, _reduce.reducer)(() => offset, (acc, _) => acc + step);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/div.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.div = div;

var _reduce = require("../reduce");

function div(init, xs) {
  return xs ? (0, _reduce.reduce)(div(init), xs) : (0, _reduce.reducer)(() => init, (acc, x) => acc / x);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/every.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = every;

var _reduce = require("../reduce");

var _reduced = require("../reduced");

function every(...args) {
  const res = (0, _reduce.$$reduce)(every, args);

  if (res !== undefined) {
    return res;
  }

  const pred = args[0];
  return (0, _reduce.reducer)(() => true, pred ? (acc, x) => pred(x) ? acc : (0, _reduced.reduced)(false) : (acc, x) => x ? acc : (0, _reduced.reduced)(false));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = fill;
exports.fillN = fillN;

var _reduce = require("../reduce");

function fill(...args) {
  const res = (0, _reduce.$$reduce)(fill, args);

  if (res !== undefined) {
    return res;
  }

  let start = args[0] || 0;
  return (0, _reduce.reducer)(() => [], (acc, x) => (acc[start++] = x, acc));
}

function fillN(...args) {
  return fill(...args);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/compose/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comp = comp;
exports.compL = compL;
exports.compI = void 0;

var _errors = require("@thi.ng/errors");

function comp(...fns) {
  let [a, b, c, d, e, f, g, h, i, j] = fns;

  switch (fns.length) {
    case 0:
      (0, _errors.illegalArity)(0);

    case 1:
      return a;

    case 2:
      return (...xs) => a(b(...xs));

    case 3:
      return (...xs) => a(b(c(...xs)));

    case 4:
      return (...xs) => a(b(c(d(...xs))));

    case 5:
      return (...xs) => a(b(c(d(e(...xs)))));

    case 6:
      return (...xs) => a(b(c(d(e(f(...xs))))));

    case 7:
      return (...xs) => a(b(c(d(e(f(g(...xs)))))));

    case 8:
      return (...xs) => a(b(c(d(e(f(g(h(...xs))))))));

    case 9:
      return (...xs) => a(b(c(d(e(f(g(h(i(...xs)))))))));

    case 10:
    default:
      const fn = (...xs) => a(b(c(d(e(f(g(h(i(j(...xs))))))))));

      return fns.length === 10 ? fn : comp(fn, ...fns.slice(10));
  }
}

function compL(...fns) {
  return comp.apply(null, fns.reverse());
}
/**
 * @deprecated renamed to `compL`
 */


const compI = compL;
exports.compI = compI;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/compose/complement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complement = complement;

function complement(f) {
  return (...xs) => !f(...xs);
}
},{}],"../node_modules/@thi.ng/compose/constantly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constantly = void 0;

const constantly = x => () => x;

exports.constantly = constantly;
},{}],"../node_modules/@thi.ng/compose/delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delay = exports.delay = void 0;

const delay = body => new Delay(body);

exports.delay = delay;

class Delay {
  constructor(body) {
    this.body = body;
    this.realized = false;
  }

  deref() {
    if (!this.realized) {
      this.value = this.body();
      this.realized = true;
    }

    return this.value;
  }

  isRealized() {
    return this.realized;
  }

}

exports.Delay = Delay;
},{}],"../node_modules/@thi.ng/compose/delayed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = void 0;

const delayed = (x, t) => new Promise(resolve => setTimeout(() => resolve(x), t));

exports.delayed = delayed;
},{}],"../node_modules/@thi.ng/compose/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = void 0;

const identity = x => x;

exports.identity = identity;
},{}],"../node_modules/@thi.ng/compose/ifdef.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifDef = void 0;

/**
 * Returns f(x) iff `x` is not null or undefined.
 *
 * @param f
 * @param x
 */
const ifDef = (f, x) => x != null ? f(x) : undefined;

exports.ifDef = ifDef;
},{}],"../node_modules/@thi.ng/compose/juxt.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.juxt = juxt;

function juxt(...fns) {
  const [a, b, c, d, e, f, g, h] = fns;

  switch (fns.length) {
    case 1:
      return x => [a(x)];

    case 2:
      return x => [a(x), b(x)];

    case 3:
      return x => [a(x), b(x), c(x)];

    case 4:
      return x => [a(x), b(x), c(x), d(x)];

    case 5:
      return x => [a(x), b(x), c(x), d(x), e(x)];

    case 6:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x)];

    case 7:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x), g(x)];

    case 8:
      return x => [a(x), b(x), c(x), d(x), e(x), f(x), g(x), h(x)];

    default:
      return x => {
        let res = new Array(fns.length);

        for (let i = fns.length; --i >= 0;) {
          res[i] = fns[i](x);
        }

        return res;
      };
  }
}
},{}],"../node_modules/@thi.ng/compose/partial.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partial = partial;
exports.foo = void 0;

var _errors = require("@thi.ng/errors");

function partial(fn, ...args) {
  let [a, b, c, d, e, f, g, h] = args;

  switch (args.length) {
    case 1:
      return (...xs) => fn(a, ...xs);

    case 2:
      return (...xs) => fn(a, b, ...xs);

    case 3:
      return (...xs) => fn(a, b, c, ...xs);

    case 4:
      return (...xs) => fn(a, b, c, d, ...xs);

    case 5:
      return (...xs) => fn(a, b, c, d, e, ...xs);

    case 6:
      return (...xs) => fn(a, b, c, d, e, f, ...xs);

    case 7:
      return (...xs) => fn(a, b, c, d, e, f, g, ...xs);

    case 8:
      return (...xs) => fn(a, b, c, d, e, f, g, h, ...xs);

    default:
      (0, _errors.illegalArgs)();
  }
}

const foo = partial((a, b) => a + b, "a");
exports.foo = foo;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/compose/thread-first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadFirst = void 0;

/**
 * Takes an `init` value and a number of functions and/or function
 * tuples, consisting of: `[fn, ...args]`. Executes each function
 * (or tuple) with the return value of the previous expression inserted
 * as first argument, using `init` for the first expression.
 *
 * ```
 * const neg = (x) => -x;
 * const sub = (a, b) => a - b;
 * const div = (a, b) => a / b;
 *
 * threadFirst(
 *   5,
 *   neg,       // -5
 *   [sub, 20], // -5 - 20 = -25
 *   [div, 10]  // -25 / 10 = -2.5
 * );
 *
 * // -2.5
 * ```
 *
 * @see threadLast
 *
 * @param init
 * @param fns
 */
const threadFirst = (init, ...fns) => fns.reduce((acc, expr) => typeof expr === "function" ? expr(acc) : expr[0](acc, ...expr.slice(1)), init);

exports.threadFirst = threadFirst;
},{}],"../node_modules/@thi.ng/compose/thread-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.threadLast = void 0;

/**
 * Takes an `init` value and a number of functions and/or function
 * tuples, consisting of: `[fn, ...args]`. Executes each function
 * (or tuple) with the return value of the previous expression inserted
 * as last argument, using `init` for the first expression.
 *
 * ```
 * const neg = (x) => -x;
 * const sub = (a, b) => a - b;
 * const div = (a, b) => a / b;
 *
 * threadLast(
 *   5,
 *   neg,       // -5
 *   [sub, 10], // 20 - (-5) = 25
 *   [div, 10]  // 10 / 25 = 0.4
 * );
 *
 * // 0.4
 * ```
 *
 * @see threadFirst
 *
 * @param init
 * @param fns
 */
const threadLast = (init, ...fns) => fns.reduce((acc, expr) => typeof expr === "function" ? expr(acc) : expr[0](...expr.slice(1), acc), init);

exports.threadLast = threadLast;
},{}],"../node_modules/@thi.ng/compose/trampoline.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trampoline = void 0;

/**
 * Takes a function returning either a no-arg function (thunk) or its
 * already realized (non-function) result. Re-executes thunk for as long
 * as it returns another function/thunk. Once a non-function result has
 * been produced, `trampoline` returns that value itself. If the final
 * result should be function, it needs to wrapped (e.g. as a 1-elem
 * array).
 *
 * This function should be used for non-stack consuming recursion. I.e.
 * a trampoline is a form of continuation passing style and only ever
 * consumes max. 2 extra stack frames, independent from recursion depth.
 *
 * ```
 * const countdown = (acc, x) =>
 *   x >= 0 ?
 *     () => (acc.push(x), countdown(acc, x-1)) :
 *     acc;
 *
 * trampoline(countdown([], 4))
 * // [ 4, 3, 2, 1, 0 ]
 *
 * trampoline(countdown([], -1))
 * // []
 * ```
 *
 * @param f
 */
const trampoline = f => {
  while (typeof f === "function") {
    f = f();
  }

  return f;
};

exports.trampoline = trampoline;
},{}],"../node_modules/@thi.ng/compose/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comp = require("./comp");

Object.keys(_comp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comp[key];
    }
  });
});

var _complement = require("./complement");

Object.keys(_complement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _complement[key];
    }
  });
});

var _constantly = require("./constantly");

Object.keys(_constantly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constantly[key];
    }
  });
});

var _delay = require("./delay");

Object.keys(_delay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delay[key];
    }
  });
});

var _delayed = require("./delayed");

Object.keys(_delayed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delayed[key];
    }
  });
});

var _identity = require("./identity");

Object.keys(_identity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _identity[key];
    }
  });
});

var _ifdef = require("./ifdef");

Object.keys(_ifdef).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ifdef[key];
    }
  });
});

var _juxt = require("./juxt");

Object.keys(_juxt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _juxt[key];
    }
  });
});

var _partial = require("./partial");

Object.keys(_partial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partial[key];
    }
  });
});

var _threadFirst = require("./thread-first");

Object.keys(_threadFirst).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _threadFirst[key];
    }
  });
});

var _threadLast = require("./thread-last");

Object.keys(_threadLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _threadLast[key];
    }
  });
});

var _trampoline = require("./trampoline");

Object.keys(_trampoline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trampoline[key];
    }
  });
});
},{"./comp":"../node_modules/@thi.ng/compose/comp.js","./complement":"../node_modules/@thi.ng/compose/complement.js","./constantly":"../node_modules/@thi.ng/compose/constantly.js","./delay":"../node_modules/@thi.ng/compose/delay.js","./delayed":"../node_modules/@thi.ng/compose/delayed.js","./identity":"../node_modules/@thi.ng/compose/identity.js","./ifdef":"../node_modules/@thi.ng/compose/ifdef.js","./juxt":"../node_modules/@thi.ng/compose/juxt.js","./partial":"../node_modules/@thi.ng/compose/partial.js","./thread-first":"../node_modules/@thi.ng/compose/thread-first.js","./thread-last":"../node_modules/@thi.ng/compose/thread-last.js","./trampoline":"../node_modules/@thi.ng/compose/trampoline.js"}],"../node_modules/@thi.ng/transducers/internal/group-opts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__groupByOpts = void 0;

var _compose = require("@thi.ng/compose");

var _push = require("../rfn/push");

/**
 * Shared helper function for groupBy* reducers
 *
 * @param opts
 */
const __groupByOpts = opts => Object.assign({
  key: _compose.identity,
  group: (0, _push.push)()
}, opts);

exports.__groupByOpts = __groupByOpts;
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/rfn/group-by-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByMap = groupByMap;

var _groupOpts = require("../internal/group-opts");

var _reduce = require("../reduce");

function groupByMap(...args) {
  const res = (0, _reduce.$$reduce)(groupByMap, args);

  if (res !== undefined) {
    return res;
  }

  const opts = (0, _groupOpts.__groupByOpts)(args[0]);
  const [init, _, reduce] = opts.group;
  _; // ignore

  return (0, _reduce.reducer)(() => new Map(), (acc, x) => {
    const k = opts.key(x);
    return acc.set(k, acc.has(k) ? reduce(acc.get(k), x) : reduce(init(), x));
  });
}
},{"../internal/group-opts":"../node_modules/@thi.ng/transducers/internal/group-opts.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/frequencies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frequencies = frequencies;

var _compose = require("@thi.ng/compose");

var _reduce = require("../reduce");

var _count = require("./count");

var _groupByMap = require("./group-by-map");

function frequencies(...args) {
  return (0, _reduce.$$reduce)(frequencies, args) || (0, _groupByMap.groupByMap)({
    key: args[0] || _compose.identity,
    group: (0, _count.count)()
  });
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js","./count":"../node_modules/@thi.ng/transducers/rfn/count.js","./group-by-map":"../node_modules/@thi.ng/transducers/rfn/group-by-map.js"}],"../node_modules/@thi.ng/transducers/rfn/group-by-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupByObj = groupByObj;

var _groupOpts = require("../internal/group-opts");

var _reduce2 = require("../reduce");

function groupByObj(...args) {
  const res = (0, _reduce2.$$reduce)(groupByObj, args);

  if (res) {
    return res;
  }

  const opts = (0, _groupOpts.__groupByOpts)(args[0]);
  const [_init, _, _reduce] = opts.group;
  _; // ignore

  return (0, _reduce2.reducer)(() => ({}), (acc, x) => {
    const k = opts.key(x);
    acc[k] = acc[k] ? _reduce(acc[k], x) : _reduce(_init(), x);
    return acc;
  });
}
},{"../internal/group-opts":"../node_modules/@thi.ng/transducers/internal/group-opts.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/group-binary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBinary = void 0;

var _groupByObj = require("./group-by-obj");

var _push = require("./push");

const branchPred = (key, b, l, r) => x => key(x) & b ? r : l;
/**
 * Creates a bottom-up, unbalanced binary tree of desired depth and
 * choice of data structures. Any value can be indexed, as long as a
 * numeric representation (key) can be obtained. This numeric key is
 * produced by the supplied `key` function. IMPORTANT: the returned
 * values MUST be unsigned and less than the provided bit length (i.e.
 * `0 .. (2^bits) - 1` range).
 *
 * By default the tree is constructed using plain objects for branches,
 * with left branches stored as "l" and right ones as "r". The original
 * values are stored at the lowest tree level using a customizable
 * nested reducer. By default leaves are collected in arrays (using the
 * `push()` reducer), but any suitable reducer can be used (e.g.
 * `conj()` to collect values into sets).
 *
 * Index by lowest 4-bits of ID value:
 *
 * ```
 * tree = reduce(
 *   groupBinary(4, x => x.id & 0xf),
 *   [{id: 3}, {id: 8}, {id: 15}, {id: 0}]
 * )
 *
 * tree.l.l.l.l
 * // [ { id: 0 } ]
 * tree.r.r.r.r
 * // [ { id: 15 } ]
 * tree.l.l.r.r
 * // [ { id: 3 } ]
 * ```
 *
 * Collecting as array:
 *
 * ```
 * tree = reduce(
 *   groupBinary(4, identity, ()=>[], push(), 0, 1),
 *   [1,2,3,4,5,6,7]
 * )
 *
 * tree[0][1][0][1] // 0101 == 5 in binary
 * // [ 5 ]
 *
 * tree[0][1][1]    // 011* == branch
 * // [ [ 6 ], [ 7 ] ]
 * ```
 *
 * Using `frequencies` as leaf reducer:
 *
 * ```
 * tree = reduce(
 *   groupBinary(3, (x: string) => x.length, null, frequencies()),
 *   "aa bbb dddd ccccc bbb eeee fff".split(" ")
 * )
 * // [ [ undefined,
 * //     [ Map { 'aa' => 1 },
 * //       Map { 'bbb' => 2, 'fff' => 1 } ] ],
 * //   [ [ Map { 'dddd' => 1, 'eeee' => 1 },
 * //       Map { 'ccccc' => 1 } ] ] ]
 *
 * tree[0][1][1]
 * // Map { 'bbb' => 2, 'fff' => 1 }
 * ```
 *
 * @param bits index range (always from 0)
 * @param key key function
 * @param branch function to create a new branch container (object or
 * array)
 * @param leaf reducer for leaf collection
 * @param left key for storing left branches (e.g. `0` for arrays)
 * @param right key for storing right branches (e.g. `1` for arrays)
 */


const groupBinary = (bits, key, branch, leaf, left = "l", right = "r") => {
  const init = branch || (() => ({}));

  let rfn = (0, _groupByObj.groupByObj)({
    key: branchPred(key, 1, left, right),
    group: leaf || (0, _push.push)()
  });

  for (let i = 2, maxIndex = 1 << bits; i < maxIndex; i <<= 1) {
    rfn = (0, _groupByObj.groupByObj)({
      key: branchPred(key, i, left, right),
      group: [init, rfn[1], rfn[2]]
    });
  }

  return [init, rfn[1], rfn[2]];
};

exports.groupBinary = groupBinary;
},{"./group-by-obj":"../node_modules/@thi.ng/transducers/rfn/group-by-obj.js","./push":"../node_modules/@thi.ng/transducers/rfn/push.js"}],"../node_modules/@thi.ng/transducers/rfn/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = last;

var _api = require("@thi.ng/api");

var _reduce = require("../reduce");

function last(xs) {
  return xs ? (0, _reduce.reduce)(last(), xs) : (0, _reduce.reducer)(_api.NO_OP, (_, x) => x);
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/compare/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compare = void 0;

const compare = (a, b) => {
  if (a === b) {
    return 0;
  }

  if (a == null) {
    return b == null ? 0 : -1;
  }

  if (b == null) {
    return a == null ? 0 : 1;
  }

  if (typeof a.compare === "function") {
    return a.compare(b);
  }

  if (typeof b.compare === "function") {
    return -b.compare(a);
  }

  return a < b ? -1 : a > b ? 1 : 0;
};

exports.compare = compare;
},{}],"../node_modules/@thi.ng/transducers/rfn/max-compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxCompare = maxCompare;

var _compare = require("@thi.ng/compare");

var _reduce = require("../reduce");

function maxCompare(...args) {
  const res = (0, _reduce.$$reduce)(maxCompare, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0];
  const cmp = args[1] || _compare.compare;
  return (0, _reduce.reducer)(init, (acc, x) => cmp(acc, x) >= 0 ? acc : x);
}
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = max;

var _reduce = require("../reduce");

function max(xs) {
  return xs ? (0, _reduce.reduce)(max(), xs) : (0, _reduce.reducer)(() => -Infinity, (acc, x) => Math.max(acc, x));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/mean.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mean = mean;

var _reduce = require("../reduce");

function mean(xs) {
  let n = 1;
  return xs ? (0, _reduce.reduce)(mean(), xs) : [() => n = 0, acc => n > 1 ? acc / n : acc, (acc, x) => (n++, acc + x)];
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/min-compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minCompare = minCompare;

var _compare = require("@thi.ng/compare");

var _reduce = require("../reduce");

function minCompare(...args) {
  const res = (0, _reduce.$$reduce)(minCompare, args);

  if (res !== undefined) {
    return res;
  }

  const init = args[0];
  const cmp = args[1] || _compare.compare;
  return (0, _reduce.reducer)(init, (acc, x) => cmp(acc, x) <= 0 ? acc : x);
}
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;

var _reduce = require("../reduce");

function min(xs) {
  return xs ? (0, _reduce.reduce)(min(), xs) : (0, _reduce.reducer)(() => Infinity, (acc, x) => Math.min(acc, x));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/mul.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = mul;

var _mathop = require("../internal/mathop");

function mul(...args) {
  return (0, _mathop.__mathop)(mul, (acc, x) => acc * x, 1, args);
}
},{"../internal/mathop":"../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../node_modules/@thi.ng/transducers/rfn/push-copy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushCopy = void 0;

var _reduce = require("../reduce");

const pushCopy = () => (0, _reduce.reducer)(() => [], (acc, x) => ((acc = acc.slice()).push(x), acc));

exports.pushCopy = pushCopy;
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/reductions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reductions = reductions;

var _reduce2 = require("../reduce");

var _reduced = require("../reduced");

function reductions(rfn, xs) {
  const [init, complete, _reduce] = rfn;
  return xs ? (0, _reduce2.reduce)(reductions(rfn), xs) : [() => [init()], acc => (acc[acc.length - 1] = complete(acc[acc.length - 1]), acc), (acc, x) => {
    const res = _reduce(acc[acc.length - 1], x);

    if ((0, _reduced.isReduced)(res)) {
      acc.push(res.deref());
      return (0, _reduced.reduced)(acc);
    }

    acc.push(res);
    return acc;
  }];
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/some.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.some = some;

var _reduce = require("../reduce");

var _reduced = require("../reduced");

function some(...args) {
  const res = (0, _reduce.$$reduce)(some, args);

  if (res !== undefined) {
    return res;
  }

  const pred = args[0];
  return (0, _reduce.reducer)(() => false, pred ? (acc, x) => pred(x) ? (0, _reduced.reduced)(true) : acc : (acc, x) => x ? (0, _reduced.reduced)(true) : acc);
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/rfn/str.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.str = str;

var _reduce = require("../reduce");

function str(sep, xs) {
  sep = sep || "";
  let first = true;
  return xs ? [...xs].join(sep) : (0, _reduce.reducer)(() => "", (acc, x) => (acc = first ? acc + x : acc + sep + x, first = false, acc));
}
},{"../reduce":"../node_modules/@thi.ng/transducers/reduce.js"}],"../node_modules/@thi.ng/transducers/rfn/sub.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = sub;

var _mathop = require("../internal/mathop");

function sub(...args) {
  return (0, _mathop.__mathop)(sub, (acc, x) => acc - x, 0, args);
}
},{"../internal/mathop":"../node_modules/@thi.ng/transducers/internal/mathop.js"}],"../node_modules/@thi.ng/transducers/xform/benchmark.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.benchmark = benchmark;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function benchmark(src) {
  return src ? (0, _iterator.iterator1)(benchmark(), src) : rfn => {
    const r = rfn[2];
    let prev = Date.now();
    return (0, _compr.compR)(rfn, (acc, _) => {
      const t = Date.now();
      const x = t - prev;
      prev = t;
      return r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/cat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cat = void 0;

var _compr = require("../func/compr");

var _reduced = require("../reduced");

/**
 * Transducer to concatenate iterable values. Iterates over each input
 * and emits individual values down stream, therefore removing one level
 * of nesting from the input. If, during processing, the transducer is
 * given a wrapped `reduced()` input iterable, it will still be
 * processed as normal, but then immediately triggers early termination
 * by wrapping its own result in `reduced()`. E.g. this behavior allows
 * a `mapcat()` user functions to benefit from `reduced` results.
 *
 * ```
 * [...iterator(comp(map((x) => [x, x]), cat()), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2, 3, 3, 4, 4 ]
 *
 * [...iterator(
 *   comp(
 *     mapIndexed((i, x) => [[i], [x, x]]),
 *     cat(),
 *     cat()
 *   ),
 *   "abc"
 * )]
 * // [ 0, 'a', 'a', 1, 'b', 'b', 2, 'c', 'c' ]
 *
 * [...mapcat((x)=>(x > 1 ? reduced([x, x]) : [x, x]), [1, 2, 3, 4])]
 * // [ 1, 1, 2, 2 ]
 * ```
 *
 * @see thi.ng/transducers/iter/concat
 * @see thi.ng/transducers/xform/mapcat
 */
const cat = () => rfn => {
  const r = rfn[2];
  return (0, _compr.compR)(rfn, (acc, x) => {
    if (x) {
      for (let y of (0, _reduced.unreduced)(x)) {
        acc = r(acc, y);

        if ((0, _reduced.isReduced)(acc)) {
          break;
        }
      }
    }

    return (0, _reduced.isReduced)(x) ? (0, _reduced.ensureReduced)(acc) : acc;
  });
};

exports.cat = cat;
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/converge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.converge = converge;

var _api = require("@thi.ng/api");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function converge(...args) {
  return (0, _iterator.$iter)(converge, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let prev = _api.SEMAPHORE;
    let done = false;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (done || prev !== _api.SEMAPHORE && pred(prev, x)) {
        done = true;
        return (0, _reduced.ensureReduced)(r(acc, x));
      }

      prev = x;
      return r(acc, x);
    });
  });
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/iter/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.Range = void 0;

var _reduced = require("../reduced");

function range(from, to, step) {
  return new Range(from, to, step);
}
/**
 * Simple class wrapper around given range interval and implementing
 * `Iterable` and `IReducible` interfaces, the latter is used to
 * accelerate use with `reduce`.
 */


class Range {
  constructor(from, to, step) {
    if (from === undefined) {
      from = 0;
      to = Infinity;
    } else if (to === undefined) {
      to = from;
      from = 0;
    }

    step = step === undefined ? from < to ? 1 : -1 : step;
    this.from = from;
    this.to = to;
    this.step = step;
  }

  *[Symbol.iterator]() {
    const step = this.step;
    const to = this.to;
    let from = this.from;

    if (step > 0) {
      while (from < to) {
        yield from;
        from += step;
      }
    } else if (step < 0) {
      while (from > to) {
        yield from;
        from += step;
      }
    }
  }

  $reduce(rfn, acc) {
    const step = this.step;

    if (step > 0) {
      for (let i = this.from, n = this.to; i < n && !(0, _reduced.isReduced)(acc); i += step) {
        acc = rfn(acc, i);
      }
    } else {
      for (let i = this.from, n = this.to; i > n && !(0, _reduced.isReduced)(acc); i += step) {
        acc = rfn(acc, i);
      }
    }

    return acc;
  }

}

exports.Range = Range;
},{"../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/iter/range2d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range2d = range2d;

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* range2d(...args) {
  let fromX, toX, stepX;
  let fromY, toY, stepY;

  switch (args.length) {
    case 6:
      stepX = args[4];
      stepY = args[5];

    case 4:
      [fromX, toX, fromY, toY] = args;
      break;

    case 2:
      [toX, toY] = args;
      fromX = fromY = 0;
      break;

    default:
      (0, _errors.illegalArity)(args.length);
  }

  const rx = (0, _range.range)(fromX, toX, stepX);

  for (let y of (0, _range.range)(fromY, toY, stepY)) {
    for (let x of rx) {
      yield [x, y];
    }
  }
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./range":"../node_modules/@thi.ng/transducers/iter/range.js"}],"../node_modules/@thi.ng/transducers/iter/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;
exports.tuples = void 0;

function* zip(...src) {
  const iters = src.map(s => s[Symbol.iterator]());

  while (true) {
    const tuple = [];

    for (let i of iters) {
      let v = i.next();

      if (v.done) {
        return;
      }

      tuple.push(v.value);
    }

    yield tuple;
  }
}
/**
 * @deprecated renamed to `zip`
 */


const tuples = zip;
exports.tuples = tuples;
},{}],"../node_modules/@thi.ng/transducers/xform/convolve.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convolve1d = convolve1d;
exports.convolve2d = convolve2d;
exports.buildKernel2d = exports.buildKernel1d = void 0;

var _errors = require("@thi.ng/errors");

var _range = require("../iter/range");

var _range2d = require("../iter/range2d");

var _zip = require("../iter/zip");

var _iterator = require("../iterator");

var _add = require("../rfn/add");

var _transduce = require("../transduce");

var _map = require("./map");

const buildKernel1d = (weights, w) => {
  const w2 = w >> 1;
  return [...(0, _zip.zip)(weights, (0, _range.range)(-w2, w2 + 1))];
};

exports.buildKernel1d = buildKernel1d;

const buildKernel2d = (weights, w, h) => {
  const w2 = w >> 1;
  const h2 = h >> 1;
  return [...(0, _zip.zip)(weights, (0, _range2d.range2d)(-w2, w2 + 1, -h2, h2 + 1))];
};

exports.buildKernel2d = buildKernel2d;

const kernelLookup1d = (src, x, width, wrap, border) => wrap ? ({
  0: w,
  1: ox
}) => {
  const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
  return w * src[xx];
} : ({
  0: w,
  1: ox
}) => {
  return x < -ox || x >= width - ox ? border : w * src[x + ox];
};

const kernelLookup2d = (src, x, y, width, height, wrap, border) => wrap ? ({
  0: w,
  1: {
    0: ox,
    1: oy
  }
}) => {
  const xx = x < -ox ? width + ox : x >= width - ox ? ox - 1 : x + ox;
  const yy = y < -oy ? height + oy : y >= height - oy ? oy - 1 : y + oy;
  return w * src[yy * width + xx];
} : ({
  0: w,
  1: {
    0: ox,
    1: oy
  }
}) => {
  return x < -ox || y < -oy || x >= width - ox || y >= height - oy ? border : w * src[(y + oy) * width + x + ox];
};

const kernelError = () => (0, _errors.illegalArgs)(`no kernel or kernel config`);

function convolve1d(opts, indices) {
  if (indices) {
    return (0, _iterator.iterator1)(convolve1d(opts), indices);
  }

  const {
    src,
    width
  } = opts;
  const wrap = opts.wrap !== false;
  const border = opts.border || 0;
  const rfn = opts.reduce || _add.add;
  let kernel = opts.kernel;

  if (!kernel) {
    !(opts.weights && opts.kwidth) && kernelError();
    kernel = buildKernel1d(opts.weights, opts.kwidth);
  }

  return (0, _map.map)(p => (0, _transduce.transduce)((0, _map.map)(kernelLookup1d(src, p, width, wrap, border)), rfn(), kernel));
}

function convolve2d(opts, indices) {
  if (indices) {
    return (0, _iterator.iterator1)(convolve2d(opts), indices);
  }

  const {
    src,
    width,
    height
  } = opts;
  const wrap = opts.wrap !== false;
  const border = opts.border || 0;
  const rfn = opts.reduce || _add.add;
  let kernel = opts.kernel;

  if (!kernel) {
    !(opts.weights && opts.kwidth && opts.kheight) && kernelError();
    kernel = buildKernel2d(opts.weights, opts.kwidth, opts.kheight);
  }

  return (0, _map.map)(p => (0, _transduce.transduce)((0, _map.map)(kernelLookup2d(src, p[0], p[1], width, height, wrap, border)), rfn(), kernel));
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","../iter/range":"../node_modules/@thi.ng/transducers/iter/range.js","../iter/range2d":"../node_modules/@thi.ng/transducers/iter/range2d.js","../iter/zip":"../node_modules/@thi.ng/transducers/iter/zip.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../rfn/add":"../node_modules/@thi.ng/transducers/rfn/add.js","../transduce":"../node_modules/@thi.ng/transducers/transduce.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/dedupe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedupe = dedupe;

var _api = require("@thi.ng/api");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function dedupe(...args) {
  return (0, _iterator.$iter)(dedupe, args) || (rfn => {
    const r = rfn[2];
    const equiv = args[0];
    let prev = _api.SEMAPHORE;
    return (0, _compr.compR)(rfn, equiv ? (acc, x) => {
      acc = prev !== _api.SEMAPHORE && equiv(prev, x) ? acc : r(acc, x);
      prev = x;
      return acc;
    } : (acc, x) => {
      acc = prev === x ? acc : r(acc, x);
      prev = x;
      return acc;
    });
  });
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/delayed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayed = void 0;

var _compose = require("@thi.ng/compose");

var _map = require("./map");

/**
 * Yields transducer which wraps incoming values in promises, which each
 * resolve after specified delay time (in ms).
 *
 * **Only to be used in async contexts and NOT with `transduce`
 * directly.**
 *
 * @param t
 */
const delayed = t => (0, _map.map)(x => (0, _compose.delayed)(x, t));

exports.delayed = delayed;
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/distinct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = distinct;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function distinct(...args) {
  return (0, _iterator.$iter)(distinct, args) || (rfn => {
    const r = rfn[2];
    const opts = args[0] || {};
    const key = opts.key;

    const seen = (opts.cache || (() => new Set()))();

    return (0, _compr.compR)(rfn, key ? (acc, x) => {
      const k = key(x);
      return !seen.has(k) ? (seen.add(k), r(acc, x)) : acc;
    } : (acc, x) => !seen.has(x) ? (seen.add(x), r(acc, x)) : acc);
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function throttle(pred, src) {
  return src ? (0, _iterator.iterator1)(throttle(pred), src) : rfn => {
    const r = rfn[2];

    const _pred = pred();

    return (0, _compr.compR)(rfn, (acc, x) => _pred(x) ? r(acc, x) : acc);
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/drop-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropNth = dropNth;

var _throttle = require("./throttle");

var _iterator = require("../iterator");

function dropNth(n, src) {
  if (src) {
    return (0, _iterator.iterator1)(dropNth(n), src);
  }

  n = Math.max(0, n - 1);
  return (0, _throttle.throttle)(() => {
    let skip = n;
    return () => skip-- > 0 ? true : (skip = n, false);
  });
}
},{"./throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/drop-while.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropWhile = dropWhile;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function dropWhile(...args) {
  return (0, _iterator.$iter)(dropWhile, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let ok = true;
    return (0, _compr.compR)(rfn, (acc, x) => (ok = ok && pred(x)) ? acc : r(acc, x));
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/drop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drop = drop;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function drop(n, src) {
  return src ? (0, _iterator.iterator1)(drop(n), src) : rfn => {
    const r = rfn[2];
    let m = n;
    return (0, _compr.compR)(rfn, (acc, x) => m > 0 ? (m--, acc) : r(acc, x));
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/duplicate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.duplicate = duplicate;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function duplicate(n = 1, src) {
  return src ? (0, _iterator.iterator)(duplicate(n), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => {
      for (let i = n; i >= 0 && !(0, _reduced.isReduced)(acc); i--) {
        acc = r(acc, x);
      }

      return acc;
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/filter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = filter;

var _iterator = require("../iterator");

var _compr = require("../func/compr");

function filter(pred, src) {
  return src ? (0, _iterator.iterator1)(filter(pred), src) : rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => pred(x) ? r(acc, x) : acc);
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js"}],"../node_modules/@thi.ng/arrays/binary-search.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.binarySearch = void 0;

var _compare = require("@thi.ng/compare");

/**
 * Returns the supposed index of `x` in pre-sorted array-like collection
 * `buf`. If `x` can't be found, returns `-index-1`.
 *
 * The optional `key` function is used to obtain the actual sort value
 * of `x` and each array item (default: identity).
 *
 * The optional `cmp` comparator (default: thi.ng/compare) is then used
 * to identify the index of `x`. The sort order of `buf` MUST be
 * compatible with that of `cmp`.
 *
 * @param buf
 * @param x
 * @param key
 * @param cmp
 */
const binarySearch = (buf, x, key = x => x, cmp = _compare.compare) => {
  const kx = key(x);
  let low = 0;
  let high = buf.length - 1;

  while (low <= high) {
    const mid = low + high >>> 1;
    const c = cmp(key(buf[mid]), kx);

    if (c < 0) {
      low = mid + 1;
    } else if (c > 0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -low - 1;
};

exports.binarySearch = binarySearch;
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js"}],"../node_modules/@thi.ng/arrays/ends-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endsWith = void 0;

var _equiv = require("@thi.ng/equiv");

const endsWith = (buf, needle, equiv = _equiv.equiv) => {
  let i = buf.length;
  let j = needle.length;
  if (i < j) return false;

  while (--i, --j >= 0 && equiv(buf[i], needle[j])) {}

  return j < 0;
};

exports.endsWith = endsWith;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/ensure-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureIterable = void 0;

var _errors = require("@thi.ng/errors");

const ensureIterable = x => {
  if (!(x != null && x[Symbol.iterator])) {
    (0, _errors.illegalArgs)(`value is not iterable: ${x}`);
  }

  return x;
};

exports.ensureIterable = ensureIterable;
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/arrays/ensure-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureArrayLike = exports.ensureArray = void 0;

var _checks = require("@thi.ng/checks");

var _ensureIterable = require("./ensure-iterable");

/**
 * Helper function to avoid unnecessary copying if `x` is already an
 * array. First checks if `x` is an array and if so returns it. Else
 * attempts to obtain an iterator from `x` and if successful collects it
 * as array and returns it. Throws error if `x` isn't iterable.
 *
 * @param x
 */
const ensureArray = x => (0, _checks.isArray)(x) ? x : [...(0, _ensureIterable.ensureIterable)(x)];

exports.ensureArray = ensureArray;

const ensureArrayLike = x => (0, _checks.isArrayLike)(x) ? x : [...(0, _ensureIterable.ensureIterable)(x)];

exports.ensureArrayLike = ensureArrayLike;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./ensure-iterable":"../node_modules/@thi.ng/arrays/ensure-iterable.js"}],"../node_modules/@thi.ng/arrays/find.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = exports.find = void 0;

var _equiv2 = require("@thi.ng/equiv");

/**
 * Similar to `Array.find()`, but uses thi.ng/equiv as default
 * predicate.
 *
 * @param src
 * @param x
 * @param equiv
 */
const find = (src, x, equiv = _equiv2.equiv) => {
  const i = findIndex(src, x, equiv);
  return i !== -1 ? src[i] : undefined;
};
/**
 * Similar to `Array.findIndex()`, but uses thi.ng/equiv as default
 * predicate.
 *
 * @param src
 * @param x
 * @param equiv
 */


exports.find = find;

const findIndex = (src, x, equiv = _equiv2.equiv) => {
  for (let i = src.length; --i >= 0;) {
    if (equiv(x, src[i])) return i;
  }

  return -1;
};

exports.findIndex = findIndex;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/fuzzy-match.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fuzzyMatch = void 0;

var _equiv = require("@thi.ng/equiv");

/**
 * Performs a fuzzy search of `query` in `domain` and returns `true` if
 * successful.
 *
 * The optional `equiv` predicate can be used to customize
 * item equality checking. Uses @thi.ng/equiv by default.
 *
 * Adapted and generalized from:
 * https://github.com/bevacqua/fufuzzyzzysearch (MIT)
 *
 * @see thi.ng/transducers/xform/filterFuzzy
 *
 * @param domain
 * @param query
 * @param equiv
 */
const fuzzyMatch = (domain, query, equiv = _equiv.equiv) => {
  const nd = domain.length;
  const nq = query.length;

  if (nq > nd) {
    return false;
  }

  if (nq === nd) {
    return equiv(query, domain);
  }

  next: for (let i = 0, j = 0; i < nq; i++) {
    const q = query[i];

    while (j < nd) {
      if (equiv(domain[j++], q)) {
        continue next;
      }
    }

    return false;
  }

  return true;
};

exports.fuzzyMatch = fuzzyMatch;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/peek.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peek = void 0;

/**
 * Returns last element of given array or `undefined` if array is empty.
 *
 * @param x
 */
const peek = x => x[x.length - 1];

exports.peek = peek;
},{}],"../node_modules/@thi.ng/random/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ARandom = void 0;
const INV_MAX = 1 / 0xffffffff;

class ARandom {
  float(norm = 1) {
    return this.int() * INV_MAX * norm;
  }

  norm(norm = 1) {
    return this.int() * INV_MAX * norm * 2 - norm;
  }

  minmax(min, max) {
    return this.float() * (max - min) + min;
  }
  /**
   * Returns approx. normal distribution using CLT.
   *
   * https://en.wikipedia.org/wiki/Central_limit_theorem
   *
   * @param n
   * @param offset
   * @param scale
   */


  gaussian(n = 10, offset = -0.5, scale = 1) {
    let sum = 0;
    let m = n;

    while (m-- > 0) sum += this.float(scale);

    return sum / n + offset;
  }

}

exports.ARandom = ARandom;
},{}],"../node_modules/@thi.ng/random/smush32.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Smush32 = void 0;

var _api = require("./api");

// https://github.com/thi-ng/ct-head/blob/master/random.h
// https://gist.github.com/voidqk/d112165a26b45244a65298933c0349a4
const DEFAULT_SEED = 0xdecafbad;

class Smush32 extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array([seed, 0]);
  }

  copy() {
    const gen = new Smush32();
    gen.buffer.set(this.buffer);
    return gen;
  }

  seed(s) {
    this.buffer.set([s, 0]);
    return this;
  }

  int() {
    const b = this.buffer;
    const m = 0x5bd1e995;
    const k = b[1]++ * m >>> 0;
    const s = b[0] = (k ^ k >> 24 ^ b[0] * m >>> 0) * m >>> 0;
    return (s ^ s >>> 13) >>> 0;
  }

}

exports.Smush32 = Smush32;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/system.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SYSTEM = exports.SystemRandom = void 0;

var _api = require("./api");

const random = Math.random;

class SystemRandom extends _api.ARandom {
  int() {
    return random() * 0xffffffff >>> 0;
  }

  float(norm = 1) {
    return random() * norm;
  }

}

exports.SystemRandom = SystemRandom;
const SYSTEM = new SystemRandom();
exports.SYSTEM = SYSTEM;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/xorshift128.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XorShift128 = void 0;

var _api = require("./api");

// https://en.wikipedia.org/wiki/Xorshift
const DEFAULT_SEED = [0xdecafbad, 0x2fa9d75b, 0xe41f67e3, 0x5c83ec1a];

class XorShift128 extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(4);
    this.seed(seed);
  }

  copy() {
    return new XorShift128(this.buffer);
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  seed(seed) {
    this.buffer.set(seed);
    return this;
  }

  int() {
    const s = this.buffer;
    let t = s[3];
    let w;
    t ^= t << 11;
    t ^= t >>> 8;
    s[3] = s[2];
    s[2] = s[1];
    w = s[1] = s[0];
    return s[0] = (t ^ w ^ w >>> 19) >>> 0;
  }

}

exports.XorShift128 = XorShift128;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/xorwow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XorWow = void 0;

var _api = require("./api");

// https://en.wikipedia.org/wiki/Xorshift#xorwow
const DEFAULT_SEED = [0xdecafbad, 0x2fa9d75b, 0xe41f67e3, 0x5c83ec1a, 0xf69a5c71];

class XorWow extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(5);
    this.seed(seed);
  }

  copy() {
    return new XorWow(this.buffer);
  }

  seed(seed) {
    this.buffer.set(seed);
    return this;
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  int() {
    const s = this.buffer;
    let t = s[3];
    let w;
    t ^= t >>> 2;
    t ^= t << 1;
    s[3] = s[2];
    s[2] = s[1];
    w = s[1] = s[0];
    t ^= w;
    t ^= w << 4;
    s[0] = t;
    return t + (s[4] += 0x587c5) >>> 0;
  }

}

exports.XorWow = XorWow;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/xsadd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XsAdd = void 0;

var _api = require("./api");

// https://github.com/MersenneTwister-Lab/XSadd/blob/master/xsadd.h
const DEFAULT_SEED = 0xdecafbad;

class XsAdd extends _api.ARandom {
  constructor(seed = DEFAULT_SEED) {
    super();
    this.buffer = new Uint32Array(4);
    this.seed(seed);
  }

  bytes() {
    return new Uint8Array(this.buffer.buffer);
  }

  copy() {
    const gen = new XsAdd();
    gen.buffer.set(this.buffer);
    return gen;
  }

  seed(seed) {
    const s = this.buffer;
    s.set([seed, 0, 0, 0]);

    for (let j = 0, i = 1; i < 8; j = i++) {
      let x = (s[j & 3] ^ s[j & 3] >>> 30) >>> 0;
      x = 0x8965 * x + ((0x6c07 * x & 0xffff) << 16) >>> 0;
      s[i & 3] ^= i + x >>> 0;
    }

    return this;
  }

  int() {
    const s = this.buffer;
    let t = s[0];
    t ^= t << 15;
    t ^= t >>> 18;
    t ^= s[3] << 11;
    s[0] = s[1];
    s[1] = s[2];
    s[2] = s[3];
    s[3] = t;
    return t + s[2] >>> 0;
  }

}

exports.XsAdd = XsAdd;
},{"./api":"../node_modules/@thi.ng/random/api.js"}],"../node_modules/@thi.ng/random/random-id.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomID = void 0;

var _system = require("./system");

/**
 * Generates and returns a random string of `len` characters (default
 * 4), plus optional given `prefix` and using only provided `syms`
 * characters (default lowercase a-z).
 *
 * ```
 * randomID()
 * "qgdt"
 *
 * randomID(8, "id-", "0123456789ABCDEF")
 * "id-94EF6E1A"
 * ```
 *
 * @param len
 * @param prefix
 * @param syms
 * @param rnd
 */
const randomID = (len = 4, prefix = "", syms = "abcdefghijklmnopqrstuvwxyz", rnd = _system.SYSTEM) => {
  for (const n = syms.length; --len >= 0;) {
    prefix += syms[rnd.float(n) | 0];
  }

  return prefix;
};

exports.randomID = randomID;
},{"./system":"../node_modules/@thi.ng/random/system.js"}],"../node_modules/@thi.ng/random/weighted-random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.weightedRandom = void 0;

var _system = require("./system");

/**
 * Returns a no-arg function which produces a random choice of given
 * weighted `choices` and using given `IRandom` instance (default:
 * `SYSTEM`). If `weights` are given, it must be the same size as
 * `choices`. If omitted, each choice will have same probability.
 *
 * https://www.electricmonk.nl/log/2009/12/23/weighted-random-distribution/
 *
 * @param choices
 * @param weights
 */
const weightedRandom = (choices, weights, rnd = _system.SYSTEM) => {
  const opts = choices.map(weights ? (x, i) => [x, weights[i]] : x => [x, 1]).sort((a, b) => b[1] - a[1]);
  const n = choices.length;
  let total = 0,
      i,
      r,
      sum;

  for (i = 0; i < n; i++) {
    total += opts[i][1];
  }

  return () => {
    r = rnd.float(total);
    sum = total;

    for (i = 0; i < n; i++) {
      sum -= opts[i][1];

      if (sum <= r) {
        return opts[i][0];
      }
    }
  };
};

exports.weightedRandom = weightedRandom;
},{"./system":"../node_modules/@thi.ng/random/system.js"}],"../node_modules/@thi.ng/random/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _smush = require("./smush32");

Object.keys(_smush).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _smush[key];
    }
  });
});

var _system = require("./system");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _system[key];
    }
  });
});

var _xorshift = require("./xorshift128");

Object.keys(_xorshift).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xorshift[key];
    }
  });
});

var _xorwow = require("./xorwow");

Object.keys(_xorwow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xorwow[key];
    }
  });
});

var _xsadd = require("./xsadd");

Object.keys(_xsadd).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _xsadd[key];
    }
  });
});

var _randomId = require("./random-id");

Object.keys(_randomId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _randomId[key];
    }
  });
});

var _weightedRandom = require("./weighted-random");

Object.keys(_weightedRandom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _weightedRandom[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/random/api.js","./smush32":"../node_modules/@thi.ng/random/smush32.js","./system":"../node_modules/@thi.ng/random/system.js","./xorshift128":"../node_modules/@thi.ng/random/xorshift128.js","./xorwow":"../node_modules/@thi.ng/random/xorwow.js","./xsadd":"../node_modules/@thi.ng/random/xsadd.js","./random-id":"../node_modules/@thi.ng/random/random-id.js","./weighted-random":"../node_modules/@thi.ng/random/weighted-random.js"}],"../node_modules/@thi.ng/arrays/shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = void 0;

var _random = require("@thi.ng/random");

/**
 * Shuffles the first `n` items of given array, using Fisher-yates and
 * optional `rnd` PRNG. If `n` is `undefined`, the entire array will be
 * shuffled.
 *
 *
 * @param buf
 * @param n
 * @param rnd
 */
const shuffle = (buf, n = buf.length, rnd = _random.SYSTEM) => {
  n = Math.min(n, buf.length);
  const l = n;

  if (l > 1) {
    n = Math.min(n, l);

    while (--n >= 0) {
      const a = rnd.float(l) | 0;
      const b = rnd.float(l) | 0;
      const t = buf[a];
      buf[a] = buf[b];
      buf[b] = t;
    }
  }

  return buf;
};

exports.shuffle = shuffle;
},{"@thi.ng/random":"../node_modules/@thi.ng/random/index.js"}],"../node_modules/@thi.ng/arrays/starts-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startsWith = void 0;

var _equiv = require("@thi.ng/equiv");

const startsWith = (buf, needle, equiv = _equiv.equiv) => {
  let i = buf.length;
  let j = needle.length;
  if (i < j) return false;

  while (-j >= 0 && equiv(buf[j], needle[j])) {}

  return j < 0;
};

exports.startsWith = startsWith;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/arrays/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swizzle = void 0;

/**
 * Returns optimized function to immutably select, repeat, reshape and /
 * or reorder array / object values in the specified index order. Fast
 * paths for up to 8 indices are provided, before a loop based approach
 * is used.
 *
 * ```
 * swizzle([0, 0, 0])([1, 2, 3, 4])    // [ 1, 1, 1 ]
 * swizzle([1, 1, 3, 3])([1, 2, 3, 4]) // [ 2, 2, 4, 4 ]
 * swizzle([2, 0])([1, 2, 3])          // [ 3, 1 ]
 * ```
 *
 * Objects can be used as input to the generated function, but the
 * result will always be in array form.
 *
 * ```
 * swizzle(["a", "c", "b"])({a: 1, b: 2, c: 3}) // [ 1, 3, 2 ]
 * ```
 *
 * @param order indices
 */
const swizzle = order => {
  const [a, b, c, d, e, f, g, h] = order;

  switch (order.length) {
    case 0:
      return () => [];

    case 1:
      return x => [x[a]];

    case 2:
      return x => [x[a], x[b]];

    case 3:
      return x => [x[a], x[b], x[c]];

    case 4:
      return x => [x[a], x[b], x[c], x[d]];

    case 5:
      return x => [x[a], x[b], x[c], x[d], x[e]];

    case 6:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f]];

    case 7:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f], x[g]];

    case 8:
      return x => [x[a], x[b], x[c], x[d], x[e], x[f], x[g], x[h]];

    default:
      return x => {
        const res = [];

        for (let i = order.length; --i >= 0;) {
          res[i] = x[order[i]];
        }

        return res;
      };
  }
};

exports.swizzle = swizzle;
},{}],"../node_modules/@thi.ng/arrays/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _binarySearch = require("./binary-search");

Object.keys(_binarySearch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _binarySearch[key];
    }
  });
});

var _endsWith = require("./ends-with");

Object.keys(_endsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _endsWith[key];
    }
  });
});

var _ensureArray = require("./ensure-array");

Object.keys(_ensureArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureArray[key];
    }
  });
});

var _ensureIterable = require("./ensure-iterable");

Object.keys(_ensureIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ensureIterable[key];
    }
  });
});

var _find = require("./find");

Object.keys(_find).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _find[key];
    }
  });
});

var _fuzzyMatch = require("./fuzzy-match");

Object.keys(_fuzzyMatch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fuzzyMatch[key];
    }
  });
});

var _peek = require("./peek");

Object.keys(_peek).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _peek[key];
    }
  });
});

var _shuffle = require("./shuffle");

Object.keys(_shuffle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _shuffle[key];
    }
  });
});

var _startsWith = require("./starts-with");

Object.keys(_startsWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _startsWith[key];
    }
  });
});

var _swizzle = require("./swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});
},{"./binary-search":"../node_modules/@thi.ng/arrays/binary-search.js","./ends-with":"../node_modules/@thi.ng/arrays/ends-with.js","./ensure-array":"../node_modules/@thi.ng/arrays/ensure-array.js","./ensure-iterable":"../node_modules/@thi.ng/arrays/ensure-iterable.js","./find":"../node_modules/@thi.ng/arrays/find.js","./fuzzy-match":"../node_modules/@thi.ng/arrays/fuzzy-match.js","./peek":"../node_modules/@thi.ng/arrays/peek.js","./shuffle":"../node_modules/@thi.ng/arrays/shuffle.js","./starts-with":"../node_modules/@thi.ng/arrays/starts-with.js","./swizzle":"../node_modules/@thi.ng/arrays/swizzle.js"}],"../node_modules/@thi.ng/transducers/xform/filter-fuzzy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterFuzzy = filterFuzzy;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _filter = require("./filter");

function filterFuzzy(...args) {
  const iter = args.length > 1 && (0, _iterator.$iter)(filterFuzzy, args);

  if (iter) {
    return iter;
  }

  const query = args[0];
  const {
    key,
    equiv
  } = args[1] || {};
  return (0, _filter.filter)(x => (0, _arrays.fuzzyMatch)(key != null ? key(x) : x, query, equiv));
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js"}],"../node_modules/@thi.ng/transducers/xform/flatten-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenWith = flattenWith;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function flattenWith(fn, src) {
  return src ? (0, _iterator.iterator)(flattenWith(fn), src) : rfn => {
    const reduce = rfn[2];

    const flatten = (acc, x) => {
      const xx = fn(x);

      if (xx) {
        for (let y of xx) {
          acc = flatten(acc, y);

          if ((0, _reduced.isReduced)(acc)) {
            break;
          }
        }

        return acc;
      }

      return reduce(acc, x);
    };

    return (0, _compr.compR)(rfn, flatten);
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/flatten.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = flatten;

var _flattenWith = require("./flatten-with");

function flatten(src) {
  return (0, _flattenWith.flattenWith)(x => x != null && x[Symbol.iterator] && typeof x !== "string" ? x : undefined, src);
}
},{"./flatten-with":"../node_modules/@thi.ng/transducers/xform/flatten-with.js"}],"../node_modules/@thi.ng/transducers/xform/map-indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapIndexed = mapIndexed;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function mapIndexed(...args) {
  return (0, _iterator.$iter)(mapIndexed, args) || (rfn => {
    const r = rfn[2];
    const fn = args[0];
    let i = args[1] || 0;
    return (0, _compr.compR)(rfn, (acc, x) => r(acc, fn(i++, x)));
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexed = indexed;

var _iterator = require("../iterator");

var _mapIndexed = require("./map-indexed");

function indexed(...args) {
  const iter = (0, _iterator.$iter)(indexed, args);

  if (iter) {
    return iter;
  }

  const from = args[0] || 0;
  return (0, _mapIndexed.mapIndexed)((i, x) => [from + i, x]);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map-indexed":"../node_modules/@thi.ng/transducers/xform/map-indexed.js"}],"../node_modules/@thi.ng/transducers/xform/interleave.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interleave = interleave;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function interleave(sep, src) {
  return src ? (0, _iterator.iterator)(interleave(sep), src) : rfn => {
    const r = rfn[2];

    const _sep = typeof sep === "function" ? sep : () => sep;

    return (0, _compr.compR)(rfn, (acc, x) => {
      acc = r(acc, _sep());
      return (0, _reduced.isReduced)(acc) ? acc : r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/interpose.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpose = interpose;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function interpose(sep, src) {
  return src ? (0, _iterator.iterator)(interpose(sep), src) : rfn => {
    const r = rfn[2];

    const _sep = typeof sep === "function" ? sep : () => sep;

    let first = true;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (first) {
        first = false;
        return r(acc, x);
      }

      acc = r(acc, _sep());
      return (0, _reduced.isReduced)(acc) ? acc : r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/keep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keep = keep;

var _compose = require("@thi.ng/compose");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function keep(...args) {
  return (0, _iterator.$iter)(keep, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0] || _compose.identity;
    return (0, _compr.compR)(rfn, (acc, x) => pred(x) != null ? r(acc, x) : acc);
  });
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/labeled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labeled = labeled;

var _checks = require("@thi.ng/checks");

var _iterator = require("../iterator");

var _map = require("./map");

function labeled(id, src) {
  return src ? (0, _iterator.iterator1)(labeled(id), src) : (0, _map.map)((0, _checks.isFunction)(id) ? x => [id(x), x] : x => [id, x]);
}
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/func/deep-transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepTransform = void 0;

var _checks = require("@thi.ng/checks");

/**
 * Higher-order deep object transformer. Accepts a nested `spec`
 * array reflecting same key structure as the object to be mapped,
 * but with functions or sub-specs as their values.
 * Returns a new function, which when called, recursively applies
 * nested transformers in post-order traversal (child transformers
 * are run first) and returns the result of the root transformer.
 *
 * The transform specs are given as arrays in this format:
 *
 * ```
 * [tx-function, {key1: [tx-function, {...}], key2: tx-fn}]
 * ```
 *
 * If a key in the spec has no further sub maps, its transform
 * function can be given directly without having to wrap it into
 * the usual array structure.
 *
 * ```
 * // source object to be transformed
 * src = {
 *    meta: {
 *      author: { name: "Alice", email: "a@b.com" },
 *      date: 1041510896000
 *    },
 *    type: "post",
 *    title: "Hello world",
 *    body: "Ratione necessitatibus doloremque itaque."
 * };
 *
 * // deep transformation spec
 * spec = [
 *    // root transform (called last)
 *    ({type, meta, title, body}) => ["div", {class: type}, title, meta, body],
 *    // object of transform sub-specs
 *    {
 *      meta: [
 *        ({author, date}) => ["div.meta", author, `(${date})`],
 *        {
 *          author: ({email, name}) => ["a", {href: `mailto:${email}`}, name],
 *          date: (d) => new Date(d).toLocaleString()
 *        }
 *      ],
 *      title: (title) => ["h1", title]
 *    }
 * ];
 *
 * // build transformer & apply to src
 * deepTransform(spec)(src);
 *
 * // [ "div",
 * //   { class: "article" },
 * //   [ "h1", "Hello world" ],
 * //   [ "div.meta",
 * //     [ "a", { href: "mailto:a@.b.com" }, "Alice" ],
 * //     "(1/2/2003, 12:34:56 PM)" ],
 * //   "Ratione necessitatibus doloremque itaque." ]
 * ```
 *
 * @param spec transformation spec
 */
const deepTransform = spec => {
  if ((0, _checks.isFunction)(spec)) {
    return spec;
  }

  const mapfns = Object.keys(spec[1] || {}).reduce((acc, k) => (acc[k] = deepTransform(spec[1][k]), acc), {});
  return x => {
    const res = Object.assign({}, x);

    for (let k in mapfns) {
      res[k] = mapfns[k](res[k]);
    }

    return spec[0](res);
  };
};

exports.deepTransform = deepTransform;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/transducers/xform/map-deep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDeep = mapDeep;

var _deepTransform = require("../func/deep-transform");

var _iterator = require("../iterator");

var _map = require("./map");

function mapDeep(spec, src) {
  return src ? (0, _iterator.iterator1)(mapDeep(spec), src) : (0, _map.map)((0, _deepTransform.deepTransform)(spec));
}
},{"../func/deep-transform":"../node_modules/@thi.ng/transducers/func/deep-transform.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/map-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapKeys = mapKeys;

var _iterator = require("../iterator");

var _map = require("./map");

function mapKeys(...args) {
  const iter = (0, _iterator.$iter)(mapKeys, args);

  if (iter) {
    return iter;
  }

  const keys = args[0];
  const copy = args[1] !== false;
  return (0, _map.map)(x => {
    const res = copy ? Object.assign({}, x) : x;

    for (let k in keys) {
      res[k] = keys[k](x[k]);
    }

    return res;
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/map-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapNth = mapNth;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function mapNth(...args) {
  const iter = (0, _iterator.$iter)(mapNth, args);

  if (iter) {
    return iter;
  }

  let n = args[0] - 1;
  let offset;
  let fn;

  if (typeof args[1] === "number") {
    offset = args[1];
    fn = args[2];
  } else {
    fn = args[1];
    offset = 0;
  }

  return rfn => {
    const r = rfn[2];
    let skip = 0,
        off = offset;
    return (0, _compr.compR)(rfn, (acc, x) => {
      if (off === 0) {
        if (skip === 0) {
          skip = n;
          return r(acc, fn(x));
        }

        skip--;
      } else {
        off--;
      }

      return r(acc, x);
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/map-vals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapVals = mapVals;

var _iterator = require("../iterator");

var _map = require("./map");

function mapVals(...args) {
  const iter = (0, _iterator.$iter)(mapVals, args);

  if (iter) {
    return iter;
  }

  const fn = args[0];
  const copy = args[1] !== false;
  return (0, _map.map)(x => {
    const res = copy ? {} : x;

    for (let k in x) {
      res[k] = fn(x[k]);
    }

    return res;
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/func/comp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comp = comp;

var _compose = require("@thi.ng/compose");

function comp(...fns) {
  return _compose.comp.apply(null, fns);
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js"}],"../node_modules/@thi.ng/transducers/xform/mapcat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapcat = mapcat;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _cat = require("./cat");

var _map = require("./map");

function mapcat(fn, src) {
  return src ? (0, _iterator.iterator)(mapcat(fn), src) : (0, _comp.comp)((0, _map.map)(fn), (0, _cat.cat)());
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./cat":"../node_modules/@thi.ng/transducers/xform/cat.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/take.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = take;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function take(n, src) {
  return src ? (0, _iterator.iterator)(take(n), src) : rfn => {
    const r = rfn[2];
    let m = n;
    return (0, _compr.compR)(rfn, (acc, x) => --m > 0 ? r(acc, x) : m === 0 ? (0, _reduced.ensureReduced)(r(acc, x)) : (0, _reduced.reduced)(acc));
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/match-first.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchFirst = matchFirst;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _filter = require("./filter");

var _take = require("./take");

function matchFirst(pred, src) {
  return src ? [...(0, _iterator.iterator1)(matchFirst(pred), src)][0] : (0, _comp.comp)((0, _filter.filter)(pred), (0, _take.take)(1));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./take":"../node_modules/@thi.ng/transducers/xform/take.js"}],"../node_modules/@thi.ng/transducers/internal/drain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__drain = void 0;

var _reduced = require("../reduced");

/**
 * Helper HOF yielding a buffer drain completion function for some
 * transducers.
 *
 * @param buf
 * @param complete
 * @param reduce
 */
const __drain = (buf, complete, reduce) => acc => {
  while (buf.length && !(0, _reduced.isReduced)(acc)) {
    acc = reduce(acc, buf.shift());
  }

  return complete(acc);
};

exports.__drain = __drain;
},{"../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/take-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = takeLast;

var _drain = require("../internal/drain");

var _iterator = require("../iterator");

function takeLast(n, src) {
  return src ? (0, _iterator.iterator)(takeLast(n), src) : ([init, complete, reduce]) => {
    const buf = [];
    return [init, (0, _drain.__drain)(buf, complete, reduce), (acc, x) => {
      if (buf.length === n) {
        buf.shift();
      }

      buf.push(x);
      return acc;
    }];
  };
}
},{"../internal/drain":"../node_modules/@thi.ng/transducers/internal/drain.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/match-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchLast = matchLast;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _filter = require("./filter");

var _takeLast = require("./take-last");

function matchLast(pred, src) {
  return src ? [...(0, _iterator.iterator)(matchLast(pred), src)][0] : (0, _comp.comp)((0, _filter.filter)(pred), (0, _takeLast.takeLast)(1));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./take-last":"../node_modules/@thi.ng/transducers/xform/take-last.js"}],"../node_modules/@thi.ng/transducers/xform/moving-average.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movingAverage = movingAverage;

var _errors = require("@thi.ng/errors");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function movingAverage(period, src) {
  return src ? (0, _iterator.iterator1)(movingAverage(period), src) : rfn => {
    period |= 0;
    period < 2 && (0, _errors.illegalArgs)("period must be >= 2");
    const reduce = rfn[2];
    const window = [];
    let sum = 0;
    return (0, _compr.compR)(rfn, (acc, x) => {
      const n = window.push(x);
      sum += x;
      n > period && (sum -= window.shift());
      return n >= period ? reduce(acc, sum / period) : acc;
    });
  };
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/internal/sort-opts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__sortOpts = void 0;

var _compare = require("@thi.ng/compare");

var _compose = require("@thi.ng/compose");

const __sortOpts = opts => Object.assign({
  key: _compose.identity,
  compare: _compare.compare
}, opts);

exports.__sortOpts = __sortOpts;
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js"}],"../node_modules/@thi.ng/transducers/xform/partition.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = partition;

var _iterator = require("../iterator");

function partition(...args) {
  const iter = (0, _iterator.$iter)(partition, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  let size = args[0],
      all,
      step;

  if (typeof args[1] == "number") {
    step = args[1];
    all = args[2];
  } else {
    step = size;
    all = args[1];
  }

  return ([init, complete, reduce]) => {
    let buf = [];
    let skip = 0;
    return [init, acc => {
      if (all && buf.length > 0) {
        acc = reduce(acc, buf);
        buf = [];
      }

      return complete(acc);
    }, (acc, x) => {
      if (skip <= 0) {
        if (buf.length < size) {
          buf.push(x);
        }

        if (buf.length === size) {
          acc = reduce(acc, buf);
          buf = step < size ? buf.slice(step) : [];
          skip = step - size;
        }
      } else {
        skip--;
      }

      return acc;
    }];
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/moving-median.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movingMedian = movingMedian;

var _comp = require("../func/comp");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

var _map = require("./map");

var _partition = require("./partition");

function movingMedian(...args) {
  const iter = (0, _iterator.$iter)(movingMedian, args);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  const n = args[0];
  const m = n >> 1;
  return (0, _comp.comp)((0, _partition.partition)(n, 1, true), (0, _map.map)(window => window.slice().sort((a, b) => compare(key(a), key(b)))[m]));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../internal/sort-opts":"../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js"}],"../node_modules/@thi.ng/transducers/xform/multiplex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplex = multiplex;

var _compose = require("@thi.ng/compose");

var _step = require("../step");

var _map = require("./map");

function multiplex(...args) {
  return (0, _map.map)(_compose.juxt.apply(null, args.map(_step.step)));
}
},{"@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../step":"../node_modules/@thi.ng/transducers/step.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/func/renamer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renamer = void 0;

const renamer = kmap => {
  const ks = Object.keys(kmap);
  const [a2, b2, c2] = ks;
  const [a1, b1, c1] = ks.map(k => kmap[k]);

  switch (ks.length) {
    case 3:
      return x => {
        const res = {};
        let v;
        v = x[c1], v !== undefined && (res[c2] = v);
        v = x[b1], v !== undefined && (res[b2] = v);
        v = x[a1], v !== undefined && (res[a2] = v);
        return res;
      };

    case 2:
      return x => {
        const res = {};
        let v;
        v = x[b1], v !== undefined && (res[b2] = v);
        v = x[a1], v !== undefined && (res[a2] = v);
        return res;
      };

    case 1:
      return x => {
        const res = {};
        let v = x[a1];
        v !== undefined && (res[a2] = v);
        return res;
      };

    default:
      return x => {
        let k, v;
        const res = {};

        for (let i = ks.length - 1; i >= 0; i--) {
          k = ks[i], v = x[kmap[k]], v !== undefined && (res[k] = v);
        }

        return res;
      };
  }
};

exports.renamer = renamer;
},{}],"../node_modules/@thi.ng/transducers/xform/rename.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rename = rename;

var _checks = require("@thi.ng/checks");

var _comp = require("../func/comp");

var _renamer = require("../func/renamer");

var _iterator = require("../iterator");

var _transduce = require("../transduce");

var _filter = require("./filter");

var _map = require("./map");

function rename(...args) {
  const iter = args.length > 2 && (0, _iterator.$iter)(rename, args);

  if (iter) {
    return iter;
  }

  let kmap = args[0];

  if ((0, _checks.isArray)(kmap)) {
    kmap = kmap.reduce((acc, k, i) => (acc[k] = i, acc), {});
  }

  if (args[1]) {
    const ks = Object.keys(kmap);
    return (0, _map.map)(y => (0, _transduce.transduce)((0, _comp.comp)((0, _map.map)(k => [k, y[kmap[k]]]), (0, _filter.filter)(x => x[1] !== undefined)), args[1], ks));
  } else {
    return (0, _map.map)((0, _renamer.renamer)(kmap));
  }
}
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../func/renamer":"../node_modules/@thi.ng/transducers/func/renamer.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../transduce":"../node_modules/@thi.ng/transducers/transduce.js","./filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/multiplex-obj.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplexObj = multiplexObj;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _multiplex = require("./multiplex");

var _rename = require("./rename");

function multiplexObj(...args) {
  const iter = (0, _iterator.$iter)(multiplexObj, args);

  if (iter) {
    return iter;
  }

  const [xforms, rfn] = args;
  const ks = Object.keys(xforms);
  return (0, _comp.comp)(_multiplex.multiplex.apply(null, ks.map(k => xforms[k])), (0, _rename.rename)(ks, rfn));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./multiplex":"../node_modules/@thi.ng/transducers/xform/multiplex.js","./rename":"../node_modules/@thi.ng/transducers/xform/rename.js"}],"../node_modules/@thi.ng/transducers/xform/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = void 0;

/**
 * No-op / pass-through transducer, essentially the same as:
 * `map(identity)`, but faster. Useful for testing and / or to keep
 * existing values in a `multiplex()` tuple lane.
 */
const noop = () => rfn => rfn;

exports.noop = noop;
},{}],"../node_modules/@thi.ng/transducers/xform/pad-last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padLast = padLast;

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function padLast(n, fill, src) {
  return src ? (0, _iterator.iterator)(padLast(n, fill), src) : ([init, complete, reduce]) => {
    let m = 0;
    return [init, acc => {
      let rem = m % n;

      if (rem > 0) {
        while (++rem <= n && !(0, _reduced.isReduced)(acc)) {
          acc = reduce(acc, fill);
        }
      }

      return complete(acc);
    }, (acc, x) => (m++, reduce(acc, x))];
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/page.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.page = page;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _drop = require("./drop");

var _take = require("./take");

function page(...args) {
  return (0, _iterator.$iter)(page, args) || (0, _comp.comp)((0, _drop.drop)(args[0] * (args[1] || 10)), (0, _take.take)(args[1] || 10));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./drop":"../node_modules/@thi.ng/transducers/xform/drop.js","./take":"../node_modules/@thi.ng/transducers/xform/take.js"}],"../node_modules/@thi.ng/transducers/xform/partition-by.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionBy = partitionBy;

var _api = require("@thi.ng/api");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function partitionBy(...args) {
  return (0, _iterator.$iter)(partitionBy, args, _iterator.iterator) || (([init, complete, reduce]) => {
    const fn = args[0];
    const f = args[1] === true ? fn() : fn;
    let prev = _api.SEMAPHORE;
    let chunk;
    return [init, acc => {
      if (chunk && chunk.length) {
        acc = reduce(acc, chunk);
        chunk = null;
      }

      return complete(acc);
    }, (acc, x) => {
      const curr = f(x);

      if (prev === _api.SEMAPHORE) {
        prev = curr;
        chunk = [x];
      } else if (curr === prev) {
        chunk.push(x);
      } else {
        chunk && (acc = reduce(acc, chunk));
        chunk = (0, _reduced.isReduced)(acc) ? null : [x];
        prev = curr;
      }

      return acc;
    }];
  });
}
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/partition-of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionOf = partitionOf;

var _iterator = require("../iterator");

var _partitionBy = require("./partition-by");

function partitionOf(sizes, src) {
  return src ? (0, _iterator.iterator)(partitionOf(sizes), src) : (0, _partitionBy.partitionBy)(() => {
    let i = 0,
        j = 0;
    return () => {
      if (i++ === sizes[j]) {
        i = 1;
        j = (j + 1) % sizes.length;
      }

      return j;
    };
  }, true);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./partition-by":"../node_modules/@thi.ng/transducers/xform/partition-by.js"}],"../node_modules/@thi.ng/transducers/xform/partition-sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionSort = partitionSort;

var _comp = require("../func/comp");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

var _mapcat = require("./mapcat");

var _partition = require("./partition");

function partitionSort(...args) {
  const iter = (0, _iterator.$iter)(partitionSort, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  return (0, _comp.comp)((0, _partition.partition)(args[0], true), (0, _mapcat.mapcat)(window => window.slice().sort((a, b) => compare(key(a), key(b)))));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../internal/sort-opts":"../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./mapcat":"../node_modules/@thi.ng/transducers/xform/mapcat.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js"}],"../node_modules/@thi.ng/transducers/xform/partition-sync.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionSync = partitionSync;

var _checks = require("@thi.ng/checks");

var _compose = require("@thi.ng/compose");

var _iterator = require("../iterator");

function partitionSync(...args) {
  return (0, _iterator.$iter)(partitionSync, args, _iterator.iterator) || (([init, complete, reduce]) => {
    let curr = {};
    let first = true;
    const currKeys = new Set();
    const {
      key,
      mergeOnly,
      reset,
      all
    } = Object.assign({
      key: _compose.identity,
      mergeOnly: false,
      reset: true,
      all: true
    }, args[1]);
    const ks = (0, _checks.isArray)(args[0]) ? new Set(args[0]) : args[0];
    return [init, acc => {
      if (reset && all && currKeys.size > 0 || !reset && first) {
        acc = reduce(acc, curr);
        curr = undefined;
        currKeys.clear();
        first = false;
      }

      return complete(acc);
    }, (acc, x) => {
      const k = key(x);

      if (ks.has(k)) {
        curr[k] = x;
        currKeys.add(k);

        if (mergeOnly || requiredInputs(ks, currKeys)) {
          acc = reduce(acc, curr);
          first = false;

          if (reset) {
            curr = {};
            currKeys.clear();
          } else {
            curr = Object.assign({}, curr);
          }
        }
      }

      return acc;
    }];
  });
}

const requiredInputs = (required, curr) => {
  if (curr.size < required.size) return false;

  for (let id of required) {
    if (!curr.has(id)) return false;
  }

  return true;
};
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/compose":"../node_modules/@thi.ng/compose/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/pluck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = pluck;

var _iterator = require("../iterator");

var _map = require("./map");

function pluck(key, src) {
  return src ? (0, _iterator.iterator1)(pluck(key), src) : (0, _map.map)(x => x[key]);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/sample.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = sample;

var _random = require("@thi.ng/random");

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function sample(...args) {
  const iter = (0, _iterator.$iter)(sample, args);

  if (iter) {
    return iter;
  }

  const prob = args[0];
  const rnd = args[1] || _random.SYSTEM;
  return rfn => {
    const r = rfn[2];
    return (0, _compr.compR)(rfn, (acc, x) => rnd.float() < prob ? r(acc, x) : acc);
  };
}
},{"@thi.ng/random":"../node_modules/@thi.ng/random/index.js","../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/scan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = scan;

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function scan(...args) {
  return args.length > 2 && (0, _iterator.$iter)(scan, args, _iterator.iterator) || (([inito, completeo, reduceo]) => {
    const [initi, completei, reducei] = args[0];
    let acc = args.length > 1 && args[1] != null ? args[1] : initi();
    return [inito, _acc => {
      let a = completei(acc);

      if (a !== acc) {
        _acc = (0, _reduced.unreduced)(reduceo(_acc, a));
      }

      acc = a;
      return completeo(_acc);
    }, (_acc, x) => {
      acc = reducei(acc, x);

      if ((0, _reduced.isReduced)(acc)) {
        return (0, _reduced.ensureReduced)(reduceo(_acc, acc.deref()));
      }

      return reduceo(_acc, acc);
    }];
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/func/key-selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keySelector = void 0;

var _renamer = require("./renamer");

const keySelector = keys => (0, _renamer.renamer)(keys.reduce((acc, x) => (acc[x] = x, acc), {}));

exports.keySelector = keySelector;
},{"./renamer":"../node_modules/@thi.ng/transducers/func/renamer.js"}],"../node_modules/@thi.ng/transducers/xform/select-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectKeys = selectKeys;

var _keySelector = require("../func/key-selector");

var _iterator = require("../iterator");

var _map = require("./map");

function selectKeys(keys, src) {
  return src ? (0, _iterator.iterator1)(selectKeys(keys), src) : (0, _map.map)((0, _keySelector.keySelector)(keys));
}
},{"../func/key-selector":"../node_modules/@thi.ng/transducers/func/key-selector.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/side-effect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sideEffect = void 0;

var _map = require("./map");

/**
 * Helper transducer. Applies given `fn` to each input value, presumably
 * for side effects. Discards function's result and yields original
 * inputs.
 *
 * @param fn side effect
 */
const sideEffect = fn => (0, _map.map)(x => (fn(x), x));

exports.sideEffect = sideEffect;
},{"./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/sliding-window.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slidingWindow = slidingWindow;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

function slidingWindow(...args) {
  const iter = (0, _iterator.$iter)(slidingWindow, args);

  if (iter) {
    return iter;
  }

  const size = args[0];
  const partial = args[1] !== false;
  return rfn => {
    const reduce = rfn[2];
    let buf = [];
    return (0, _compr.compR)(rfn, (acc, x) => {
      buf.push(x);

      if (partial || buf.length === size) {
        acc = reduce(acc, buf);
        buf = buf.slice(buf.length === size ? 1 : 0);
      }

      return acc;
    });
  };
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/stream-shuffle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamShuffle = streamShuffle;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function streamShuffle(...args) {
  return (0, _iterator.$iter)(streamShuffle, args, _iterator.iterator) || (([init, complete, reduce]) => {
    const n = args[0];
    const maxSwaps = args[1] || n;
    const buf = [];
    return [init, acc => {
      while (buf.length && !(0, _reduced.isReduced)(acc)) {
        (0, _arrays.shuffle)(buf, maxSwaps);
        acc = reduce(acc, buf.shift());
      }

      acc = complete(acc);
      return acc;
    }, (acc, x) => {
      buf.push(x);
      (0, _arrays.shuffle)(buf, maxSwaps);

      if (buf.length === n) {
        acc = reduce(acc, buf.shift());
      }

      return acc;
    }];
  });
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/stream-sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.streamSort = streamSort;

var _arrays = require("@thi.ng/arrays");

var _drain = require("../internal/drain");

var _sortOpts = require("../internal/sort-opts");

var _iterator = require("../iterator");

function streamSort(...args) {
  const iter = (0, _iterator.$iter)(streamSort, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const {
    key,
    compare
  } = (0, _sortOpts.__sortOpts)(args[1]);
  const n = args[0];
  return ([init, complete, reduce]) => {
    const buf = [];
    return [init, (0, _drain.__drain)(buf, complete, reduce), (acc, x) => {
      const idx = (0, _arrays.binarySearch)(buf, x, key, compare);
      buf.splice(idx < 0 ? -(idx + 1) : idx, 0, x);

      if (buf.length === n) {
        acc = reduce(acc, buf.shift());
      }

      return acc;
    }];
  };
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../internal/drain":"../node_modules/@thi.ng/transducers/internal/drain.js","../internal/sort-opts":"../node_modules/@thi.ng/transducers/internal/sort-opts.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/struct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.struct = struct;

var _comp = require("../func/comp");

var _iterator = require("../iterator");

var _mapKeys = require("./map-keys");

var _partition = require("./partition");

var _partitionOf = require("./partition-of");

var _rename = require("./rename");

function struct(fields, src) {
  return src ? (0, _iterator.iterator)(struct(fields), src) : (0, _comp.comp)((0, _partitionOf.partitionOf)(fields.map(f => f[1])), (0, _partition.partition)(fields.length), (0, _rename.rename)(fields.map(f => f[0])), (0, _mapKeys.mapKeys)(fields.reduce((acc, f) => f[2] ? (acc[f[0]] = f[2], acc) : acc, {}), false));
}
},{"../func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map-keys":"../node_modules/@thi.ng/transducers/xform/map-keys.js","./partition":"../node_modules/@thi.ng/transducers/xform/partition.js","./partition-of":"../node_modules/@thi.ng/transducers/xform/partition-of.js","./rename":"../node_modules/@thi.ng/transducers/xform/rename.js"}],"../node_modules/@thi.ng/transducers/xform/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swizzle = swizzle;

var _arrays = require("@thi.ng/arrays");

var _iterator = require("../iterator");

var _map = require("./map");

function swizzle(order, src) {
  return src ? (0, _iterator.iterator1)(swizzle(order), src) : (0, _map.map)((0, _arrays.swizzle)(order));
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./map":"../node_modules/@thi.ng/transducers/xform/map.js"}],"../node_modules/@thi.ng/transducers/xform/take-nth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeNth = takeNth;

var _iterator = require("../iterator");

var _throttle = require("./throttle");

function takeNth(n, src) {
  if (src) {
    return (0, _iterator.iterator1)(takeNth(n), src);
  }

  n = Math.max(0, n - 1);
  return (0, _throttle.throttle)(() => {
    let skip = 0;
    return () => skip === 0 ? (skip = n, true) : (skip--, false);
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js"}],"../node_modules/@thi.ng/transducers/xform/take-while.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = takeWhile;

var _compr = require("../func/compr");

var _iterator = require("../iterator");

var _reduced = require("../reduced");

function takeWhile(...args) {
  return (0, _iterator.$iter)(takeWhile, args) || (rfn => {
    const r = rfn[2];
    const pred = args[0];
    let ok = true;
    return (0, _compr.compR)(rfn, (acc, x) => (ok = ok && pred(x)) ? r(acc, x) : (0, _reduced.reduced)(acc));
  });
}
},{"../func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","../iterator":"../node_modules/@thi.ng/transducers/iterator.js","../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/xform/throttle-time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = throttleTime;

var _iterator = require("../iterator");

var _throttle = require("./throttle");

function throttleTime(delay, src) {
  return src ? (0, _iterator.iterator1)(throttleTime(delay), src) : (0, _throttle.throttle)(() => {
    let last = 0;
    return () => {
      const t = Date.now();
      return t - last >= delay ? (last = t, true) : false;
    };
  });
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js"}],"../node_modules/@thi.ng/transducers/xform/toggle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggle = toggle;

var _iterator = require("../iterator");

function toggle(on, off, initial = false, src) {
  return src ? (0, _iterator.iterator1)(toggle(on, off, initial), src) : ([init, complete, reduce]) => {
    let state = initial;
    return [init, complete, acc => reduce(acc, (state = !state) ? on : off)];
  };
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js"}],"../node_modules/@thi.ng/transducers/xform/trace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trace = void 0;

var _sideEffect = require("./side-effect");

const trace = (prefix = "") => (0, _sideEffect.sideEffect)(x => console.log(prefix, x));

exports.trace = trace;
},{"./side-effect":"../node_modules/@thi.ng/transducers/xform/side-effect.js"}],"../node_modules/@thi.ng/transducers/xform/word-wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wordWrap = wordWrap;

var _iterator = require("../iterator");

var _partitionBy = require("./partition-by");

function wordWrap(...args) {
  const iter = (0, _iterator.$iter)(wordWrap, args, _iterator.iterator);

  if (iter) {
    return iter;
  }

  const lineLength = args[0];
  const {
    delim,
    always
  } = Object.assign({
    delim: 1,
    always: true
  }, args[1]);
  return (0, _partitionBy.partitionBy)(() => {
    let n = 0;
    let flag = false;
    return w => {
      n += w.length + delim;

      if (n > lineLength + (always ? 0 : delim)) {
        flag = !flag;
        n = w.length + delim;
      }

      return flag;
    };
  }, true);
}
},{"../iterator":"../node_modules/@thi.ng/transducers/iterator.js","./partition-by":"../node_modules/@thi.ng/transducers/xform/partition-by.js"}],"../node_modules/@thi.ng/transducers/func/juxtr.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.juxtR = juxtR;

var _reduced = require("../reduced");

function juxtR(...rs) {
  let [a, b, c] = rs;
  const n = rs.length;

  switch (n) {
    case 1:
      {
        const r = a[2];
        return [() => [a[0]()], acc => [a[1](acc[0])], (acc, x) => {
          const aa1 = r(acc[0], x);

          if ((0, _reduced.isReduced)(aa1)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1)]);
          }

          return [aa1];
        }];
      }

    case 2:
      {
        const ra = a[2];
        const rb = b[2];
        return [() => [a[0](), b[0]()], acc => [a[1](acc[0]), b[1](acc[1])], (acc, x) => {
          const aa1 = ra(acc[0], x);
          const aa2 = rb(acc[1], x);

          if ((0, _reduced.isReduced)(aa1) || (0, _reduced.isReduced)(aa2)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1), (0, _reduced.unreduced)(aa2)]);
          }

          return [aa1, aa2];
        }];
      }

    case 3:
      {
        const ra = a[2];
        const rb = b[2];
        const rc = c[2];
        return [() => [a[0](), b[0](), c[0]()], acc => [a[1](acc[0]), b[1](acc[1]), c[1](acc[2])], (acc, x) => {
          const aa1 = ra(acc[0], x);
          const aa2 = rb(acc[1], x);
          const aa3 = rc(acc[2], x);

          if ((0, _reduced.isReduced)(aa1) || (0, _reduced.isReduced)(aa2) || (0, _reduced.isReduced)(aa3)) {
            return (0, _reduced.reduced)([(0, _reduced.unreduced)(aa1), (0, _reduced.unreduced)(aa2), (0, _reduced.unreduced)(aa3)]);
          }

          return [aa1, aa2, aa3];
        }];
      }

    default:
      return [() => rs.map(r => r[0]()), acc => rs.map((r, i) => r[1](acc[i])), (acc, x) => {
        let done = false;
        const res = [];

        for (let i = 0; i < n; i++) {
          let a = rs[i][2](acc[i], x);

          if ((0, _reduced.isReduced)(a)) {
            done = true;
            a = (0, _reduced.unreduced)(a);
          }

          res[i] = a;
        }

        return done ? (0, _reduced.reduced)(res) : res;
      }];
  }
}
},{"../reduced":"../node_modules/@thi.ng/transducers/reduced.js"}],"../node_modules/@thi.ng/transducers/func/lookup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookup3d = exports.lookup2d = exports.lookup1d = void 0;

/**
 * Returns function accepting a single index arg used to
 * lookup value in given array. No bounds checks are done.
 *
 * ```
 * [...map(lookup1d([10, 20, 30]), [2,0,1])]
 * // [ 30, 10, 20 ]
 * ```
 *
 * @param src source data
 */
const lookup1d = src => i => src[i];
/**
 * Returns function accepting a single `[x, y]` index tuple,
 * used to lookup value in given array. Useful for transducers
 * processing 2D data. **Note**: The source data MUST be in
 * row major linearized format, i.e. 1D representation of 2D data
 * (pixel buffer). No bounds checks are done.
 *
 * ```
 * [...map(lookup2d([...range(9)], 3), range2d(2, -1, 0, 3))]
 * // [ 2, 1, 0, 5, 4, 3, 8, 7, 6 ]
 * ```
 *
 * @param src source data
 * @param width number of items along X (columns)
 */


exports.lookup1d = lookup1d;

const lookup2d = (src, width) => i => src[i[0] + i[1] * width];
/**
 * Same as `lookup2d()`, but for 3D data. The index ordering of the
 * source data MUST be in Z, Y, X order (i.e. a stack of row major 2D slices).
 * No bounds checks are done.
 *
 * @param src source data
 * @param width number of items along X (columns)
 * @param height number of items along Y (rows)
 */


exports.lookup2d = lookup2d;

const lookup3d = (src, width, height) => {
  const stridez = width * height;
  return i => src[i[0] + i[1] * width + i[2] * stridez];
};

exports.lookup3d = lookup3d;
},{}],"../node_modules/@thi.ng/transducers/iter/as-iterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asIterable = asIterable;

/**
 * Helper function to (re)provide given iterable in iterator form.
 *
 * @param src
 */
function* asIterable(src) {
  yield* src;
}
},{}],"../node_modules/@thi.ng/transducers/iter/repeatedly.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatedly = repeatedly;

function* repeatedly(fn, n = Infinity) {
  while (n-- > 0) {
    yield fn();
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/choices.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.choices = void 0;

var _arrays = require("@thi.ng/arrays");

var _random = require("@thi.ng/random");

var _repeatedly = require("./repeatedly");

/**
 * Returns an infinite iterator of random choices and their (optional)
 * weights. If `weights` is given, it must have at least the same size
 * as `choices`. If omitted, each choice will have same probability.
 *
 * ```
 * transduce(take(1000), frequencies(), choices("abcd", [1, 0.5, 0.25, 0.125]))
 * // Map { 'c' => 132, 'a' => 545, 'b' => 251, 'd' => 72 }
 * ```
 *
 * @see weightedRandom
 *
 * @param choices
 * @param weights
 */
const choices = (choices, weights, rnd = _random.SYSTEM) => (0, _repeatedly.repeatedly)(weights ? (0, _random.weightedRandom)((0, _arrays.ensureArray)(choices), weights, rnd) : () => choices[rnd.float(choices.length) | 0]);

exports.choices = choices;
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","@thi.ng/random":"../node_modules/@thi.ng/random/index.js","./repeatedly":"../node_modules/@thi.ng/transducers/iter/repeatedly.js"}],"../node_modules/@thi.ng/transducers/iter/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _arrays = require("@thi.ng/arrays");

/**
 * Yields iterator producing concatenation of given iterables.
 * Undefined & null inputs are silently ignored, however any
 * such values produced or contained in an input will remain.
 *
 * ```
 * [...concat([1, 2, 3], null, [4, 5])]
 * // [ 1, 2, 3, 4, 5 ]
 *
 * [...concat([1, 2, 3, undefined], null, [4, 5])]
 * // [ 1, 2, 3, undefined, 4, 5 ]
 * ```
 *
 * @param xs
 */
function* concat(...xs) {
  for (let x of xs) {
    x != null && (yield* (0, _arrays.ensureIterable)(x));
  }
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js"}],"../node_modules/@thi.ng/transducers/iter/cycle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycle = cycle;

function* cycle(input) {
  let cache = [];

  for (let i of input) {
    cache.push(i);
    yield i;
  }

  if (cache.length > 0) {
    while (true) {
      yield* cache;
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/norm-range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normRange = normRange;

/**
 * Yields sequence of `n+1` monotonically increasing numbers in the
 * closed interval (0.0 .. 1.0). If `n <= 0`, yields nothing.
 *
 * ```
 * [...normRange(4)]
 * // [0, 0.25, 0.5, 0.75, 1.0]
 * ```
 *
 * @param n number of steps
 * @param inclLast include last value (i.e. `1.0`)
 */
function* normRange(n, inclLast = true) {
  if (n > 0) {
    for (let i = 0, m = inclLast ? n + 1 : n; i < m; i++) {
      yield i / n;
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/repeat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = repeat;

function* repeat(x, n = Infinity) {
  while (n-- > 0) {
    yield x;
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/interpolate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolate = interpolate;

var _normRange = require("./norm-range");

var _repeat = require("./repeat");

/**
 * Takes a number of keyframe tuples (`stops`) and yields a sequence of
 * `n+1` equally spaced, interpolated values. Keyframes are defined as
 * `[pos, value]`. Only values in the closed `minPos` .. `maxPos`
 * interval will be computed.
 *
 * Interpolation happens in two stages: First the given `init` function
 * is called to transform/prepare pairs of consecutive keyframes into a
 * single interval (user defined). Then to produce each interpolated
 * value calls `mix` with the currently active interval and
 * interpolation time value `t` (re-normalized and relative to current
 * interval). The iterator yields results of these `mix()` function
 * calls.
 *
 * Depending on the overall number of samples requested and the distance
 * between keyframes, some keyframes MIGHT be skipped. E.g. if
 * requesting 10 samples within [0,1], the interval between two
 * successive keyframes at 0.12 and 0.19 would be skipped entirely,
 * since samples will only be taken at multiples of `1/n` (0.0, 0.1,
 * 0.2... in this example).
 *
 * The given keyframe positions can lie outside the `minPos`/`maxPos`
 * range and also don't need to cover the range fully. In the latter
 * case, interpolated values before the first or after the last keyframe
 * will yield the value of the 1st/last keyframe. If only a single
 * keyframe is given in total, all `n` yielded samples will be that
 * keyframe's transformed value.
 *
 * ```
 * [...interpolate(
 *   10,
 *   0,
 *   100,
 *   (a, b) => [a, b],
 *   ([a, b], t) => Math.floor(a + (b - a) * t),
 *   [20, 100],
 *   [50, 200],
 *   [80, 0]
 * )]
 * // [ 100, 100, 100, 133, 166, 200, 133, 66, 0, 0, 0 ]
 * ```
 *
 * Using easing functions (e.g. from thi.ng/math), non-linear
 * interpolation within each keyframe interval can be achieved:
 *
 * ```
 * import { mix, smoothStep } from "@thi.ng/math"
 *
 * [...interpolate(
 *   10,
 *   0,
 *   100,
 *   (a, b) => [a, b],
 *   ([a, b], t) => Math.floor(mix(a, b, smoothStep(0.1, 0.9, t))),
 *   [20, 100],
 *   [50, 200],
 *   [80, 0]
 * )]
 * // [ 100, 100, 100, 120, 179, 200, 158, 41, 0, 0, 0 ]
 * ```
 *
 * @param n
 * @param minPos
 * @param maxPos
 * @param init interval producer (from 2 keyframe values)
 * @param mix interval interpolator
 * @param stops keyframe / stops
 */
function* interpolate(n, minPos, maxPos, init, mix, ...stops) {
  let l = stops.length;
  if (l < 1) return;

  if (l === 1) {
    yield* (0, _repeat.repeat)(mix(init(stops[0][1], stops[0][1]), 0), n);
  }

  stops.sort((a, b) => a[0] - b[0]);

  if (stops[l - 1][0] < maxPos) {
    stops.push([maxPos, stops[l - 1][1]]);
  }

  if (stops[0][0] > minPos) {
    stops.unshift([minPos, stops[0][1]]);
  }

  const range = maxPos - minPos;
  let start = stops[0][0];
  let end = stops[1][0];
  let delta = end - start;
  let interval = init(stops[0][1], stops[1][1]);
  let i = 1;
  l = stops.length;

  for (let t of (0, _normRange.normRange)(n)) {
    t = minPos + range * t;

    if (t > end) {
      while (i < l && t > stops[i][0]) i++;

      start = stops[i - 1][0];
      end = stops[i][0];
      delta = end - start;
      interval = init(stops[i - 1][1], stops[i][1]);
    }

    yield mix(interval, delta !== 0 ? (t - start) / delta : 0);
  }
}
},{"./norm-range":"../node_modules/@thi.ng/transducers/iter/norm-range.js","./repeat":"../node_modules/@thi.ng/transducers/iter/repeat.js"}],"../node_modules/@thi.ng/transducers/iter/iterate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterate = iterate;

/**
 * Yields an infinite iterator of the inductive sequence:
 *
 * f(x+1) = f(f(x))
 *
 * The first value emitted always is `seed` itself, then f(seed),
 * f(f(seed)) etc. The given function is called with the current
 * iteration counter as 2nd arg.
 *
 * ```
 * [...take(5, iterate((x) => x * 2, 1))]
 * // [ 1, 2, 4, 8, 16 ]
 *
 * [...take(8, iterate((x, i) => x * 10 + i, 0))]
 * // [ 0, 1, 12, 123, 1234, 12345, 123456, 1234567 ]
 * ```
 *
 * @param fn
 * @param seed
 */
function* iterate(fn, seed) {
  let i = 0;

  while (true) {
    yield seed;
    seed = fn(seed, ++i);
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = keys;

function* keys(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield k;
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;

function* pairs(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield [k, x[k]];
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/permutations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permutations = permutations;
exports.permutationsN = void 0;

var _arrays = require("@thi.ng/arrays");

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* permutations(...src) {
  const n = src.length - 1;

  if (n < 0) {
    return;
  }

  const step = new Array(n + 1).fill(0);
  const realized = src.map(_arrays.ensureArrayLike);
  const total = realized.reduce((acc, x) => acc * x.length, 1);

  for (let i = 0; i < total; i++) {
    const tuple = [];

    for (let j = n; j >= 0; j--) {
      const r = realized[j];
      let s = step[j];

      if (s === r.length) {
        step[j] = s = 0;
        j > 0 && step[j - 1]++;
      }

      tuple[j] = r[s];
    }

    step[n]++;
    yield tuple;
  }
}
/**
 * Iterator yielding the Cartesian Product for `n` items of `m` values
 * each. If `m` is not given, defaults to value of `n`. The range of `m`
 * is `0..m-1`. The optional `offsets` array can be used to define start
 * values for each dimension.
 *
 * ```
 * [...permutationsN(2)]
 * // [ [0, 0], [0, 1], [1, 0], [1, 1] ]
 *
 * [...permutationsN(2, 3)]
 * // [ [0, 0], [0, 1], [0, 2],
 * //   [1, 0], [1, 1], [1, 2],
 * //   [2, 0], [2, 1], [2, 2] ]
 *
 * [...permutationsN(2, 3, [10, 20])]
 * // [ [ 10, 20 ], [ 10, 21 ], [ 11, 20 ], [ 11, 21 ] ]
 * ```
 *
 * @param n
 * @param m
 * @param offsets
 */


const permutationsN = (n, m = n, offsets) => {
  if (offsets && offsets.length < n) {
    (0, _errors.illegalArgs)(`insufficient offsets, got ${offsets.length}, needed ${n}`);
  }

  const seqs = [];

  while (--n >= 0) {
    const o = offsets ? offsets[n] : 0;
    seqs[n] = (0, _range.range)(o, o + m);
  }

  return permutations.apply(null, seqs);
};

exports.permutationsN = permutationsN;
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./range":"../node_modules/@thi.ng/transducers/iter/range.js"}],"../node_modules/@thi.ng/transducers/iter/range3d.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range3d = range3d;

var _errors = require("@thi.ng/errors");

var _range = require("./range");

function* range3d(...args) {
  let fromX, toX, stepX;
  let fromY, toY, stepY;
  let fromZ, toZ, stepZ;

  switch (args.length) {
    case 9:
      stepX = args[6];
      stepY = args[7];
      stepZ = args[8];

    case 6:
      [fromX, toX, fromY, toY, fromZ, toZ] = args;
      break;

    case 3:
      [toX, toY, toZ] = args;
      fromX = fromY = fromZ = 0;
      break;

    default:
      (0, _errors.illegalArity)(args.length);
  }

  const rx = (0, _range.range)(fromX, toX, stepX);
  const ry = (0, _range.range)(fromY, toY, stepY);

  for (let z of (0, _range.range)(fromZ, toZ, stepZ)) {
    for (let y of ry) {
      for (let x of rx) {
        yield [x, y, z];
      }
    }
  }
}
},{"@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./range":"../node_modules/@thi.ng/transducers/iter/range.js"}],"../node_modules/@thi.ng/transducers/iter/reverse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = reverse;

var _arrays = require("@thi.ng/arrays");

/**
 * Yields iterator which consumes input and yield its values in reverse
 * order. Important: Input MUST be finite.
 *
 * ```
 * [...tx.reverse("hello world")]
 * // [ "d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h" ]
 * ```
 *
 * @param input
 */
function* reverse(input) {
  const _input = (0, _arrays.ensureArray)(input);

  let n = _input.length;

  while (--n >= 0) {
    yield _input[n];
  }
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js"}],"../node_modules/@thi.ng/transducers/iter/vals.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vals = vals;

function* vals(x) {
  for (let k in x) {
    if (x.hasOwnProperty(k)) {
      yield x[k];
    }
  }
}
},{}],"../node_modules/@thi.ng/transducers/iter/wrap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrap = wrap;

var _arrays = require("@thi.ng/arrays");

var _errors = require("@thi.ng/errors");

/**
 * Yields iterator of `src` with the last `n` values of `src` prepended
 * at the beginning (if `left` is truthy) and/or the first `n` values
 * appended at the end (if `right` is truthy). Wraps both sides by
 * default and throws error if `n` < 0 or larger than `src.length`.
 *
 * @param src
 * @param n
 * @param left
 * @param right
 */
function* wrap(src, n = 1, left = true, right = true) {
  const _src = (0, _arrays.ensureArray)(src);

  (n < 0 || n > _src.length) && (0, _errors.illegalArgs)(`wrong number of wrap items: got ${n}, but max: ${_src.length}`);

  if (left) {
    for (let m = _src.length, i = m - n; i < m; i++) {
      yield _src[i];
    }
  }

  yield* _src;

  if (right) {
    for (let i = 0; i < n; i++) {
      yield _src[i];
    }
  }
}
},{"@thi.ng/arrays":"../node_modules/@thi.ng/arrays/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js"}],"../node_modules/@thi.ng/transducers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iterator = require("./iterator");

Object.keys(_iterator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterator[key];
    }
  });
});

var _reduce = require("./reduce");

Object.keys(_reduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reduce[key];
    }
  });
});

var _reduced = require("./reduced");

Object.keys(_reduced).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reduced[key];
    }
  });
});

var _run = require("./run");

Object.keys(_run).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _run[key];
    }
  });
});

var _step = require("./step");

Object.keys(_step).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _step[key];
    }
  });
});

var _transduce = require("./transduce");

Object.keys(_transduce).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transduce[key];
    }
  });
});

var _add = require("./rfn/add");

Object.keys(_add).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _add[key];
    }
  });
});

var _assocMap = require("./rfn/assoc-map");

Object.keys(_assocMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assocMap[key];
    }
  });
});

var _assocObj = require("./rfn/assoc-obj");

Object.keys(_assocObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _assocObj[key];
    }
  });
});

var _conj = require("./rfn/conj");

Object.keys(_conj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _conj[key];
    }
  });
});

var _count = require("./rfn/count");

Object.keys(_count).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _count[key];
    }
  });
});

var _div = require("./rfn/div");

Object.keys(_div).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _div[key];
    }
  });
});

var _every = require("./rfn/every");

Object.keys(_every).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _every[key];
    }
  });
});

var _fill = require("./rfn/fill");

Object.keys(_fill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fill[key];
    }
  });
});

var _frequencies = require("./rfn/frequencies");

Object.keys(_frequencies).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _frequencies[key];
    }
  });
});

var _groupBinary = require("./rfn/group-binary");

Object.keys(_groupBinary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupBinary[key];
    }
  });
});

var _groupByMap = require("./rfn/group-by-map");

Object.keys(_groupByMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupByMap[key];
    }
  });
});

var _groupByObj = require("./rfn/group-by-obj");

Object.keys(_groupByObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _groupByObj[key];
    }
  });
});

var _last = require("./rfn/last");

Object.keys(_last).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _last[key];
    }
  });
});

var _maxCompare = require("./rfn/max-compare");

Object.keys(_maxCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _maxCompare[key];
    }
  });
});

var _max = require("./rfn/max");

Object.keys(_max).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _max[key];
    }
  });
});

var _mean = require("./rfn/mean");

Object.keys(_mean).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mean[key];
    }
  });
});

var _minCompare = require("./rfn/min-compare");

Object.keys(_minCompare).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _minCompare[key];
    }
  });
});

var _min = require("./rfn/min");

Object.keys(_min).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _min[key];
    }
  });
});

var _mul = require("./rfn/mul");

Object.keys(_mul).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mul[key];
    }
  });
});

var _pushCopy = require("./rfn/push-copy");

Object.keys(_pushCopy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pushCopy[key];
    }
  });
});

var _push = require("./rfn/push");

Object.keys(_push).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _push[key];
    }
  });
});

var _reductions = require("./rfn/reductions");

Object.keys(_reductions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reductions[key];
    }
  });
});

var _some = require("./rfn/some");

Object.keys(_some).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _some[key];
    }
  });
});

var _str = require("./rfn/str");

Object.keys(_str).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _str[key];
    }
  });
});

var _sub = require("./rfn/sub");

Object.keys(_sub).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sub[key];
    }
  });
});

var _benchmark = require("./xform/benchmark");

Object.keys(_benchmark).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _benchmark[key];
    }
  });
});

var _cat = require("./xform/cat");

Object.keys(_cat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cat[key];
    }
  });
});

var _converge = require("./xform/converge");

Object.keys(_converge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _converge[key];
    }
  });
});

var _convolve = require("./xform/convolve");

Object.keys(_convolve).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convolve[key];
    }
  });
});

var _dedupe = require("./xform/dedupe");

Object.keys(_dedupe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dedupe[key];
    }
  });
});

var _delayed = require("./xform/delayed");

Object.keys(_delayed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _delayed[key];
    }
  });
});

var _distinct = require("./xform/distinct");

Object.keys(_distinct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _distinct[key];
    }
  });
});

var _dropNth = require("./xform/drop-nth");

Object.keys(_dropNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dropNth[key];
    }
  });
});

var _dropWhile = require("./xform/drop-while");

Object.keys(_dropWhile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dropWhile[key];
    }
  });
});

var _drop = require("./xform/drop");

Object.keys(_drop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _drop[key];
    }
  });
});

var _duplicate = require("./xform/duplicate");

Object.keys(_duplicate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _duplicate[key];
    }
  });
});

var _filter = require("./xform/filter");

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _filter[key];
    }
  });
});

var _filterFuzzy = require("./xform/filter-fuzzy");

Object.keys(_filterFuzzy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _filterFuzzy[key];
    }
  });
});

var _flattenWith = require("./xform/flatten-with");

Object.keys(_flattenWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flattenWith[key];
    }
  });
});

var _flatten = require("./xform/flatten");

Object.keys(_flatten).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _flatten[key];
    }
  });
});

var _indexed = require("./xform/indexed");

Object.keys(_indexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _indexed[key];
    }
  });
});

var _interleave = require("./xform/interleave");

Object.keys(_interleave).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interleave[key];
    }
  });
});

var _interpose = require("./xform/interpose");

Object.keys(_interpose).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpose[key];
    }
  });
});

var _keep = require("./xform/keep");

Object.keys(_keep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keep[key];
    }
  });
});

var _labeled = require("./xform/labeled");

Object.keys(_labeled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _labeled[key];
    }
  });
});

var _mapDeep = require("./xform/map-deep");

Object.keys(_mapDeep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapDeep[key];
    }
  });
});

var _mapIndexed = require("./xform/map-indexed");

Object.keys(_mapIndexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapIndexed[key];
    }
  });
});

var _mapKeys = require("./xform/map-keys");

Object.keys(_mapKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapKeys[key];
    }
  });
});

var _mapNth = require("./xform/map-nth");

Object.keys(_mapNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapNth[key];
    }
  });
});

var _mapVals = require("./xform/map-vals");

Object.keys(_mapVals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapVals[key];
    }
  });
});

var _map = require("./xform/map");

Object.keys(_map).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _map[key];
    }
  });
});

var _mapcat = require("./xform/mapcat");

Object.keys(_mapcat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapcat[key];
    }
  });
});

var _matchFirst = require("./xform/match-first");

Object.keys(_matchFirst).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _matchFirst[key];
    }
  });
});

var _matchLast = require("./xform/match-last");

Object.keys(_matchLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _matchLast[key];
    }
  });
});

var _movingAverage = require("./xform/moving-average");

Object.keys(_movingAverage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _movingAverage[key];
    }
  });
});

var _movingMedian = require("./xform/moving-median");

Object.keys(_movingMedian).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _movingMedian[key];
    }
  });
});

var _multiplex = require("./xform/multiplex");

Object.keys(_multiplex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _multiplex[key];
    }
  });
});

var _multiplexObj = require("./xform/multiplex-obj");

Object.keys(_multiplexObj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _multiplexObj[key];
    }
  });
});

var _noop = require("./xform/noop");

Object.keys(_noop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _noop[key];
    }
  });
});

var _padLast = require("./xform/pad-last");

Object.keys(_padLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _padLast[key];
    }
  });
});

var _page = require("./xform/page");

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _page[key];
    }
  });
});

var _partitionBy = require("./xform/partition-by");

Object.keys(_partitionBy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionBy[key];
    }
  });
});

var _partitionOf = require("./xform/partition-of");

Object.keys(_partitionOf).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionOf[key];
    }
  });
});

var _partitionSort = require("./xform/partition-sort");

Object.keys(_partitionSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionSort[key];
    }
  });
});

var _partitionSync = require("./xform/partition-sync");

Object.keys(_partitionSync).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partitionSync[key];
    }
  });
});

var _partition = require("./xform/partition");

Object.keys(_partition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _partition[key];
    }
  });
});

var _pluck = require("./xform/pluck");

Object.keys(_pluck).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pluck[key];
    }
  });
});

var _rename = require("./xform/rename");

Object.keys(_rename).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rename[key];
    }
  });
});

var _sample = require("./xform/sample");

Object.keys(_sample).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sample[key];
    }
  });
});

var _scan = require("./xform/scan");

Object.keys(_scan).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _scan[key];
    }
  });
});

var _selectKeys = require("./xform/select-keys");

Object.keys(_selectKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectKeys[key];
    }
  });
});

var _sideEffect = require("./xform/side-effect");

Object.keys(_sideEffect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sideEffect[key];
    }
  });
});

var _slidingWindow = require("./xform/sliding-window");

Object.keys(_slidingWindow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _slidingWindow[key];
    }
  });
});

var _streamShuffle = require("./xform/stream-shuffle");

Object.keys(_streamShuffle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _streamShuffle[key];
    }
  });
});

var _streamSort = require("./xform/stream-sort");

Object.keys(_streamSort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _streamSort[key];
    }
  });
});

var _struct = require("./xform/struct");

Object.keys(_struct).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _struct[key];
    }
  });
});

var _swizzle = require("./xform/swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});

var _takeNth = require("./xform/take-nth");

Object.keys(_takeNth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeNth[key];
    }
  });
});

var _takeLast = require("./xform/take-last");

Object.keys(_takeLast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeLast[key];
    }
  });
});

var _takeWhile = require("./xform/take-while");

Object.keys(_takeWhile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _takeWhile[key];
    }
  });
});

var _take = require("./xform/take");

Object.keys(_take).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _take[key];
    }
  });
});

var _throttle = require("./xform/throttle");

Object.keys(_throttle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _throttle[key];
    }
  });
});

var _throttleTime = require("./xform/throttle-time");

Object.keys(_throttleTime).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _throttleTime[key];
    }
  });
});

var _toggle = require("./xform/toggle");

Object.keys(_toggle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _toggle[key];
    }
  });
});

var _trace = require("./xform/trace");

Object.keys(_trace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _trace[key];
    }
  });
});

var _wordWrap = require("./xform/word-wrap");

Object.keys(_wordWrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wordWrap[key];
    }
  });
});

var _comp = require("./func/comp");

Object.keys(_comp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comp[key];
    }
  });
});

var _compr = require("./func/compr");

Object.keys(_compr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compr[key];
    }
  });
});

var _deepTransform = require("./func/deep-transform");

Object.keys(_deepTransform).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _deepTransform[key];
    }
  });
});

var _juxtr = require("./func/juxtr");

Object.keys(_juxtr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _juxtr[key];
    }
  });
});

var _keySelector = require("./func/key-selector");

Object.keys(_keySelector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keySelector[key];
    }
  });
});

var _lookup = require("./func/lookup");

Object.keys(_lookup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lookup[key];
    }
  });
});

var _renamer = require("./func/renamer");

Object.keys(_renamer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renamer[key];
    }
  });
});

var _asIterable = require("./iter/as-iterable");

Object.keys(_asIterable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _asIterable[key];
    }
  });
});

var _choices = require("./iter/choices");

Object.keys(_choices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _choices[key];
    }
  });
});

var _concat = require("./iter/concat");

Object.keys(_concat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _concat[key];
    }
  });
});

var _cycle = require("./iter/cycle");

Object.keys(_cycle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _cycle[key];
    }
  });
});

var _interpolate = require("./iter/interpolate");

Object.keys(_interpolate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _interpolate[key];
    }
  });
});

var _iterate = require("./iter/iterate");

Object.keys(_iterate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _iterate[key];
    }
  });
});

var _keys = require("./iter/keys");

Object.keys(_keys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keys[key];
    }
  });
});

var _normRange = require("./iter/norm-range");

Object.keys(_normRange).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normRange[key];
    }
  });
});

var _pairs = require("./iter/pairs");

Object.keys(_pairs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pairs[key];
    }
  });
});

var _permutations = require("./iter/permutations");

Object.keys(_permutations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _permutations[key];
    }
  });
});

var _range = require("./iter/range");

Object.keys(_range).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range[key];
    }
  });
});

var _range2d = require("./iter/range2d");

Object.keys(_range2d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range2d[key];
    }
  });
});

var _range3d = require("./iter/range3d");

Object.keys(_range3d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _range3d[key];
    }
  });
});

var _repeat = require("./iter/repeat");

Object.keys(_repeat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeat[key];
    }
  });
});

var _repeatedly = require("./iter/repeatedly");

Object.keys(_repeatedly).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _repeatedly[key];
    }
  });
});

var _reverse = require("./iter/reverse");

Object.keys(_reverse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reverse[key];
    }
  });
});

var _vals = require("./iter/vals");

Object.keys(_vals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _vals[key];
    }
  });
});

var _wrap = require("./iter/wrap");

Object.keys(_wrap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _wrap[key];
    }
  });
});

var _zip = require("./iter/zip");

Object.keys(_zip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _zip[key];
    }
  });
});
},{"./iterator":"../node_modules/@thi.ng/transducers/iterator.js","./reduce":"../node_modules/@thi.ng/transducers/reduce.js","./reduced":"../node_modules/@thi.ng/transducers/reduced.js","./run":"../node_modules/@thi.ng/transducers/run.js","./step":"../node_modules/@thi.ng/transducers/step.js","./transduce":"../node_modules/@thi.ng/transducers/transduce.js","./rfn/add":"../node_modules/@thi.ng/transducers/rfn/add.js","./rfn/assoc-map":"../node_modules/@thi.ng/transducers/rfn/assoc-map.js","./rfn/assoc-obj":"../node_modules/@thi.ng/transducers/rfn/assoc-obj.js","./rfn/conj":"../node_modules/@thi.ng/transducers/rfn/conj.js","./rfn/count":"../node_modules/@thi.ng/transducers/rfn/count.js","./rfn/div":"../node_modules/@thi.ng/transducers/rfn/div.js","./rfn/every":"../node_modules/@thi.ng/transducers/rfn/every.js","./rfn/fill":"../node_modules/@thi.ng/transducers/rfn/fill.js","./rfn/frequencies":"../node_modules/@thi.ng/transducers/rfn/frequencies.js","./rfn/group-binary":"../node_modules/@thi.ng/transducers/rfn/group-binary.js","./rfn/group-by-map":"../node_modules/@thi.ng/transducers/rfn/group-by-map.js","./rfn/group-by-obj":"../node_modules/@thi.ng/transducers/rfn/group-by-obj.js","./rfn/last":"../node_modules/@thi.ng/transducers/rfn/last.js","./rfn/max-compare":"../node_modules/@thi.ng/transducers/rfn/max-compare.js","./rfn/max":"../node_modules/@thi.ng/transducers/rfn/max.js","./rfn/mean":"../node_modules/@thi.ng/transducers/rfn/mean.js","./rfn/min-compare":"../node_modules/@thi.ng/transducers/rfn/min-compare.js","./rfn/min":"../node_modules/@thi.ng/transducers/rfn/min.js","./rfn/mul":"../node_modules/@thi.ng/transducers/rfn/mul.js","./rfn/push-copy":"../node_modules/@thi.ng/transducers/rfn/push-copy.js","./rfn/push":"../node_modules/@thi.ng/transducers/rfn/push.js","./rfn/reductions":"../node_modules/@thi.ng/transducers/rfn/reductions.js","./rfn/some":"../node_modules/@thi.ng/transducers/rfn/some.js","./rfn/str":"../node_modules/@thi.ng/transducers/rfn/str.js","./rfn/sub":"../node_modules/@thi.ng/transducers/rfn/sub.js","./xform/benchmark":"../node_modules/@thi.ng/transducers/xform/benchmark.js","./xform/cat":"../node_modules/@thi.ng/transducers/xform/cat.js","./xform/converge":"../node_modules/@thi.ng/transducers/xform/converge.js","./xform/convolve":"../node_modules/@thi.ng/transducers/xform/convolve.js","./xform/dedupe":"../node_modules/@thi.ng/transducers/xform/dedupe.js","./xform/delayed":"../node_modules/@thi.ng/transducers/xform/delayed.js","./xform/distinct":"../node_modules/@thi.ng/transducers/xform/distinct.js","./xform/drop-nth":"../node_modules/@thi.ng/transducers/xform/drop-nth.js","./xform/drop-while":"../node_modules/@thi.ng/transducers/xform/drop-while.js","./xform/drop":"../node_modules/@thi.ng/transducers/xform/drop.js","./xform/duplicate":"../node_modules/@thi.ng/transducers/xform/duplicate.js","./xform/filter":"../node_modules/@thi.ng/transducers/xform/filter.js","./xform/filter-fuzzy":"../node_modules/@thi.ng/transducers/xform/filter-fuzzy.js","./xform/flatten-with":"../node_modules/@thi.ng/transducers/xform/flatten-with.js","./xform/flatten":"../node_modules/@thi.ng/transducers/xform/flatten.js","./xform/indexed":"../node_modules/@thi.ng/transducers/xform/indexed.js","./xform/interleave":"../node_modules/@thi.ng/transducers/xform/interleave.js","./xform/interpose":"../node_modules/@thi.ng/transducers/xform/interpose.js","./xform/keep":"../node_modules/@thi.ng/transducers/xform/keep.js","./xform/labeled":"../node_modules/@thi.ng/transducers/xform/labeled.js","./xform/map-deep":"../node_modules/@thi.ng/transducers/xform/map-deep.js","./xform/map-indexed":"../node_modules/@thi.ng/transducers/xform/map-indexed.js","./xform/map-keys":"../node_modules/@thi.ng/transducers/xform/map-keys.js","./xform/map-nth":"../node_modules/@thi.ng/transducers/xform/map-nth.js","./xform/map-vals":"../node_modules/@thi.ng/transducers/xform/map-vals.js","./xform/map":"../node_modules/@thi.ng/transducers/xform/map.js","./xform/mapcat":"../node_modules/@thi.ng/transducers/xform/mapcat.js","./xform/match-first":"../node_modules/@thi.ng/transducers/xform/match-first.js","./xform/match-last":"../node_modules/@thi.ng/transducers/xform/match-last.js","./xform/moving-average":"../node_modules/@thi.ng/transducers/xform/moving-average.js","./xform/moving-median":"../node_modules/@thi.ng/transducers/xform/moving-median.js","./xform/multiplex":"../node_modules/@thi.ng/transducers/xform/multiplex.js","./xform/multiplex-obj":"../node_modules/@thi.ng/transducers/xform/multiplex-obj.js","./xform/noop":"../node_modules/@thi.ng/transducers/xform/noop.js","./xform/pad-last":"../node_modules/@thi.ng/transducers/xform/pad-last.js","./xform/page":"../node_modules/@thi.ng/transducers/xform/page.js","./xform/partition-by":"../node_modules/@thi.ng/transducers/xform/partition-by.js","./xform/partition-of":"../node_modules/@thi.ng/transducers/xform/partition-of.js","./xform/partition-sort":"../node_modules/@thi.ng/transducers/xform/partition-sort.js","./xform/partition-sync":"../node_modules/@thi.ng/transducers/xform/partition-sync.js","./xform/partition":"../node_modules/@thi.ng/transducers/xform/partition.js","./xform/pluck":"../node_modules/@thi.ng/transducers/xform/pluck.js","./xform/rename":"../node_modules/@thi.ng/transducers/xform/rename.js","./xform/sample":"../node_modules/@thi.ng/transducers/xform/sample.js","./xform/scan":"../node_modules/@thi.ng/transducers/xform/scan.js","./xform/select-keys":"../node_modules/@thi.ng/transducers/xform/select-keys.js","./xform/side-effect":"../node_modules/@thi.ng/transducers/xform/side-effect.js","./xform/sliding-window":"../node_modules/@thi.ng/transducers/xform/sliding-window.js","./xform/stream-shuffle":"../node_modules/@thi.ng/transducers/xform/stream-shuffle.js","./xform/stream-sort":"../node_modules/@thi.ng/transducers/xform/stream-sort.js","./xform/struct":"../node_modules/@thi.ng/transducers/xform/struct.js","./xform/swizzle":"../node_modules/@thi.ng/transducers/xform/swizzle.js","./xform/take-nth":"../node_modules/@thi.ng/transducers/xform/take-nth.js","./xform/take-last":"../node_modules/@thi.ng/transducers/xform/take-last.js","./xform/take-while":"../node_modules/@thi.ng/transducers/xform/take-while.js","./xform/take":"../node_modules/@thi.ng/transducers/xform/take.js","./xform/throttle":"../node_modules/@thi.ng/transducers/xform/throttle.js","./xform/throttle-time":"../node_modules/@thi.ng/transducers/xform/throttle-time.js","./xform/toggle":"../node_modules/@thi.ng/transducers/xform/toggle.js","./xform/trace":"../node_modules/@thi.ng/transducers/xform/trace.js","./xform/word-wrap":"../node_modules/@thi.ng/transducers/xform/word-wrap.js","./func/comp":"../node_modules/@thi.ng/transducers/func/comp.js","./func/compr":"../node_modules/@thi.ng/transducers/func/compr.js","./func/deep-transform":"../node_modules/@thi.ng/transducers/func/deep-transform.js","./func/juxtr":"../node_modules/@thi.ng/transducers/func/juxtr.js","./func/key-selector":"../node_modules/@thi.ng/transducers/func/key-selector.js","./func/lookup":"../node_modules/@thi.ng/transducers/func/lookup.js","./func/renamer":"../node_modules/@thi.ng/transducers/func/renamer.js","./iter/as-iterable":"../node_modules/@thi.ng/transducers/iter/as-iterable.js","./iter/choices":"../node_modules/@thi.ng/transducers/iter/choices.js","./iter/concat":"../node_modules/@thi.ng/transducers/iter/concat.js","./iter/cycle":"../node_modules/@thi.ng/transducers/iter/cycle.js","./iter/interpolate":"../node_modules/@thi.ng/transducers/iter/interpolate.js","./iter/iterate":"../node_modules/@thi.ng/transducers/iter/iterate.js","./iter/keys":"../node_modules/@thi.ng/transducers/iter/keys.js","./iter/norm-range":"../node_modules/@thi.ng/transducers/iter/norm-range.js","./iter/pairs":"../node_modules/@thi.ng/transducers/iter/pairs.js","./iter/permutations":"../node_modules/@thi.ng/transducers/iter/permutations.js","./iter/range":"../node_modules/@thi.ng/transducers/iter/range.js","./iter/range2d":"../node_modules/@thi.ng/transducers/iter/range2d.js","./iter/range3d":"../node_modules/@thi.ng/transducers/iter/range3d.js","./iter/repeat":"../node_modules/@thi.ng/transducers/iter/repeat.js","./iter/repeatedly":"../node_modules/@thi.ng/transducers/iter/repeatedly.js","./iter/reverse":"../node_modules/@thi.ng/transducers/iter/reverse.js","./iter/vals":"../node_modules/@thi.ng/transducers/iter/vals.js","./iter/wrap":"../node_modules/@thi.ng/transducers/iter/wrap.js","./iter/zip":"../node_modules/@thi.ng/transducers/iter/zip.js"}],"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/@thi.ng/hiccup-css/impl.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indent = exports.formatDecls = exports.expand = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _transducers = require("@thi.ng/transducers");

const EMPTY = new Set();
const NO_SPACES = ":[";
const xfSel = (0, _transducers.comp)((0, _transducers.flatten)(), (0, _transducers.map)(x => NO_SPACES.indexOf(x.charAt(0)) >= 0 ? x : " " + x));

const withScope = (xf, scope) => (0, _transducers.comp)(xf, (0, _transducers.map)(x => (0, _checks.isString)(x) && x.indexOf(" .") == 0 ? x + scope : x));

const expand = (acc, parent, rules, opts) => {
  const n = rules.length;
  const sel = [];
  let curr, isFn;

  const process = (i, r) => {
    let rfn = null;

    if ((0, _checks.isArray)(r)) {
      expand(acc, makeSelector(parent, sel), r, opts);
    } else if ((0, _checks.isIterable)(r) && !(0, _checks.isString)(r)) {
      expand(acc, makeSelector(parent, sel), [...r], opts);
    } else if ((isFn = (0, _checks.isFunction)(r)) || (rfn = opts.fns[r])) {
      if (!parent.length) {
        if (rfn) {
          rfn.apply(null, rules.slice(i + 1))(acc, opts);
          return true;
        }

        r(acc, opts);
      } else if (isFn) {
        process(i, r());
      } else {
        (0, _errors.illegalArgs)(`quoted fn ('${r}') only allowed at head position`);
      }
    } else if ((0, _checks.isPlainObject)(r)) {
      curr = Object.assign(curr || {}, r);
    } else if (r != null) {
      sel.push(r);
    }
  };

  for (let i = 0; i < n; i++) {
    if (process(i, rules[i])) {
      return acc;
    }
  }

  curr && acc.push(formatRule(parent, sel, curr, opts));
  return acc;
};

exports.expand = expand;

const makeSelector = (parent, curr) => parent.length ? [...(0, _transducers.permutations)(parent, curr)] : curr;

const formatRule = (parent, sel, curr, opts) => {
  const f = opts.format;
  const space = indent(opts);
  const xf = opts.scope ? withScope(xfSel, opts.scope) : xfSel;
  return [space, (0, _transducers.transduce)((0, _transducers.map)(sel => (0, _transducers.transduce)(xf, (0, _transducers.str)(), (0, _checks.isArray)(sel) ? sel : [sel]).trim()), (0, _transducers.str)(f.ruleSep), makeSelector(parent, sel)), f.declStart, formatDecls(curr, opts), space, f.declEnd].join("");
};

const formatDecls = (rules, opts) => {
  const f = opts.format;
  const prefixes = opts.autoprefix || EMPTY;
  const space = indent(opts, opts.depth + 1);
  const acc = [];

  for (let r in rules) {
    if (rules.hasOwnProperty(r)) {
      let val = rules[r];

      if ((0, _checks.isFunction)(val)) {
        val = val(rules);
      }

      if ((0, _checks.isArray)(val)) {
        val = val.map(v => (0, _checks.isArray)(v) ? v.join(" ") : v).join(f.ruleSep);
      }

      if (prefixes.has(r)) {
        for (let v of opts.vendors) {
          acc.push(`${space}${v}${r}:${f.valSep}${val};`);
        }
      }

      acc.push(`${space}${r}:${f.valSep}${val};`);
    }
  }

  return acc.join(f.decls) + f.decls;
};

exports.formatDecls = formatDecls;

const indent = (opts, d = opts.depth) => d > 1 ? [...(0, _transducers.repeat)(opts.format.indent, d)].join("") : d > 0 ? opts.format.indent : "";

exports.indent = indent;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/transducers":"../node_modules/@thi.ng/transducers/index.js","process":"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../node_modules/@thi.ng/hiccup-css/units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.turn = exports.rad = exports.deg = exports.sec = exports.ms = exports.vw = exports.vh = exports.px = exports.percent = exports.rem = exports.ex = exports.em = void 0;

const em = x => `${x}em`;

exports.em = em;

const ex = x => `${x}ex`;

exports.ex = ex;

const rem = x => `${x}rem`;

exports.rem = rem;

const percent = x => `${x}%`;

exports.percent = percent;

const px = x => `${x >>> 0}px`;

exports.px = px;

const vh = x => `${x}vh`;

exports.vh = vh;

const vw = x => `${x}vw`;

exports.vw = vw;

const ms = x => `${x >>> 0}ms`;

exports.ms = ms;

const sec = x => `${x}s`;

exports.sec = sec;

const deg = x => `${x}deg`;

exports.deg = deg;

const rad = x => `${x}rad`;

exports.rad = rad;

const turn = x => `${x}turn`;

exports.turn = turn;
},{}],"../node_modules/@thi.ng/hiccup-css/keyframes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_keyframes = at_keyframes;

var _impl = require("./impl");

var _units = require("./units");

function at_keyframes(id, ...args) {
  const stops = args.length === 1 ? args[0] : {
    0: args[0],
    100: args[1]
  };
  return (acc, opts) => {
    const outer = (0, _impl.indent)(opts);
    opts.depth++;
    const inner = (0, _impl.indent)(opts);
    acc.push(`${outer}@keyframes ${id}${opts.format.declStart}`);

    for (let s in stops) {
      if (stops.hasOwnProperty(s)) {
        acc.push([inner, (0, _units.percent)(s), opts.format.declStart, (0, _impl.formatDecls)(stops[s], opts), inner, opts.format.declEnd].join(""));
      }
    }

    opts.depth--;
    acc.push(outer + opts.format.declEnd);
    return acc;
  };
}
},{"./impl":"../node_modules/@thi.ng/hiccup-css/impl.js","./units":"../node_modules/@thi.ng/hiccup-css/units.js"}],"../node_modules/@thi.ng/hiccup-css/animation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animation = void 0;

var _keyframes = require("./keyframes");

/**
 * Defines new `@keyframes` with given `id` and creates related class of
 * same name to configure given animation `opts`. Only the `duration`
 * option is given a default value (250ms), all others are optional.
 *
 * ```
 * css(
 *   animation(
 *     "fadein",
 *     { delay: "0.5s" },
 *     { opacity: 0 },
 *     { opacity: 1 }
 *   )
 * );
 * ```
 *
 * ```css
 * @keyframes fadein {
 *     0% {
 *         opacity: 0;
 *     }
 *     100% {
 *         opacity: 1;
 *     }
 * }
 *
 * .fadein {
 *     animation-duration: 250ms;
 *     animation-name: fadein;
 *     animation-delay: 0.5s;
 * }
 * ```
 *
 * @param id
 * @param opts
 * @param keyframes
 */
const animation = (id, opts, ...keyframes) => {
  opts = Object.assign({
    duration: "250ms",
    name: id
  }, opts);
  return [_keyframes.at_keyframes.apply(null, [id, ...keyframes]), [`.${id}`, Object.keys(opts).reduce((acc, k) => (acc[`animation-${k}`] = opts[k], acc), {})]];
};

exports.animation = animation;
},{"./keyframes":"../node_modules/@thi.ng/hiccup-css/keyframes.js"}],"../node_modules/@thi.ng/hiccup-css/attribs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attribMatches = exports.attribSuffix = exports.attribPrefix = exports.attribContains = exports.attribEq = exports.withAttrib = void 0;

const $ = op => (id, x, caseSensitve = false) => `[${id}${op}="${x}"${caseSensitve ? " i" : ""}]`;
/**
 * Returns attrib selector: `[id]`
 *
 * @param id
 */


const withAttrib = id => `[${id}]`;
/**
 * Returns attrib selector `[id=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */


exports.withAttrib = withAttrib;
const attribEq = $("");
/**
 * Returns attrib selector `[id~=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribEq = attribEq;
const attribContains = $("~");
/**
 * Returns attrib selector `[id^=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribContains = attribContains;
const attribPrefix = $("^");
/**
 * Returns attrib selector `[id$=x]`
 *
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribPrefix = attribPrefix;
const attribSuffix = $("$");
/**
 * Returns attrib selector `[id*=x]`
 * @param id
 * @param x
 * @param caseSensitive
 */

exports.attribSuffix = attribSuffix;
const attribMatches = $("*");
exports.attribMatches = attribMatches;
},{}],"../node_modules/@thi.ng/hiccup-css/comment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comment = void 0;

var _impl = require("./impl");

const comment = (body, force = false) => (acc, opts) => {
  const space = (0, _impl.indent)(opts);
  const inner = (0, _impl.indent)(opts, opts.depth + 1);

  if (opts.format.comments || force) {
    acc.push(space + "/*", body.split("\n").map(l => inner + l).join("\n"), space + "*/");
  }

  return acc;
};

exports.comment = comment;
},{"./impl":"../node_modules/@thi.ng/hiccup-css/impl.js"}],"../node_modules/@thi.ng/hiccup-css/conditional.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conditional = void 0;

var _checks = require("@thi.ng/checks");

var _impl = require("./impl");

const conditional = (type, cond, rules) => (acc, opts) => {
  const space = (0, _impl.indent)(opts);
  acc.push(`${space}${type} ${formatCond(cond)}${opts.format.declStart}`);
  opts.depth++;
  (0, _impl.expand)(acc, [], rules, opts);
  opts.depth--;
  acc.push(space + opts.format.declEnd);
  return acc;
};

exports.conditional = conditional;

const formatCond = cond => {
  if ((0, _checks.isString)(cond)) {
    return cond;
  }

  const acc = [];

  for (let c in cond) {
    if (cond.hasOwnProperty(c)) {
      let v = cond[c];

      if (v === true) {
        v = c;
      } else if (v === false) {
        v = "not " + c;
      } else if (v === "only") {
        v += " " + c;
      } else {
        v = `(${c}:${v})`;
      }

      acc.push(v);
    }
  }

  return acc.join(" and ");
};
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./impl":"../node_modules/@thi.ng/hiccup-css/impl.js"}],"../node_modules/@thi.ng/hiccup-css/css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var _checks = require("@thi.ng/checks");

var _api = require("./api");

var _impl = require("./impl");

const css = (rules, opts) => {
  opts = Object.assign({
    format: _api.COMPACT,
    vendors: _api.DEFAULT_VENDORS,
    fns: {},
    depth: 0
  }, opts);

  if ((0, _checks.isPlainObject)(rules)) {
    return (0, _impl.formatDecls)(rules, opts);
  }

  if ((0, _checks.isArray)(opts.autoprefix)) {
    opts.autoprefix = new Set(opts.autoprefix);
  }

  if ((0, _checks.isIterable)(rules) && !(0, _checks.isString)(rules)) {
    rules = [...rules];
  }

  if ((0, _checks.isArray)(rules)) {
    return (0, _impl.expand)([], [], rules, opts).join(opts.format.rules);
  }

  if ((0, _checks.isFunction)(rules)) {
    return rules([], opts).join(opts.format.rules);
  }
};

exports.css = css;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./api":"../node_modules/@thi.ng/hiccup-css/api.js","./impl":"../node_modules/@thi.ng/hiccup-css/impl.js"}],"../node_modules/@thi.ng/hiccup-css/import.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_import = void 0;

const at_import = (url, ...queries) => (acc, opts) => (acc.push(queries.length ? `@import url(${url}) ${queries.join(opts.format.ruleSep)};` : `@import url(${url});`), acc);

exports.at_import = at_import;
},{}],"../node_modules/@thi.ng/hiccup-css/inject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectStyleSheet = void 0;

// https://davidwalsh.name/add-rules-stylesheets

/**
 * Injects given CSS string as global stylesheet in DOM head. If `first`
 * is true, inserts it as first stylesheet, else (default) appends it.
 *
 * Returns created style DOM element.
 *
 * @param css
 * @param first
 */
const injectStyleSheet = (css, first = false) => {
  const head = document.getElementsByTagName("head")[0];
  const sheet = document.createElement("style");
  sheet.setAttribute("type", "text/css");

  if (sheet.styleSheet !== undefined) {
    sheet.styleSheet.cssText = css;
  } else {
    sheet.textContent = css;
  }

  if (first) {
    head.insertBefore(sheet, head.firstChild);
  } else {
    head.appendChild(sheet);
  }

  return sheet;
};

exports.injectStyleSheet = injectStyleSheet;
},{}],"../node_modules/@thi.ng/hiccup-css/media.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_media = void 0;

var _conditional = require("./conditional");

const at_media = (cond, rules) => (0, _conditional.conditional)("@media", cond, rules);

exports.at_media = at_media;
},{"./conditional":"../node_modules/@thi.ng/hiccup-css/conditional.js"}],"../node_modules/@thi.ng/hiccup-css/namespace.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_namespace = at_namespace;

function at_namespace(...args) {
  return (acc, _) => (acc.push(args.length > 1 ? `@namespace ${args[0]} url(${args[1]});` : `@namespace url(${args[0]});`), acc);
}
},{}],"../node_modules/@thi.ng/hiccup-css/supports.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.at_supports = void 0;

var _conditional = require("./conditional");

const at_supports = (cond, rules) => (0, _conditional.conditional)("@supports", cond, rules);

exports.at_supports = at_supports;
},{"./conditional":"../node_modules/@thi.ng/hiccup-css/conditional.js"}],"../node_modules/@thi.ng/hiccup-css/quoted-functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUOTED_FNS = void 0;

var _comment = require("./comment");

var _import = require("./import");

var _keyframes = require("./keyframes");

var _media = require("./media");

var _namespace = require("./namespace");

var _supports = require("./supports");

const QUOTED_FNS = {
  "@comment": _comment.comment,
  "@import": _import.at_import,
  "@keyframes": _keyframes.at_keyframes,
  "@media": _media.at_media,
  "@namespace": _namespace.at_namespace,
  "@supports": _supports.at_supports
};
exports.QUOTED_FNS = QUOTED_FNS;
},{"./comment":"../node_modules/@thi.ng/hiccup-css/comment.js","./import":"../node_modules/@thi.ng/hiccup-css/import.js","./keyframes":"../node_modules/@thi.ng/hiccup-css/keyframes.js","./media":"../node_modules/@thi.ng/hiccup-css/media.js","./namespace":"../node_modules/@thi.ng/hiccup-css/namespace.js","./supports":"../node_modules/@thi.ng/hiccup-css/supports.js"}],"../node_modules/@thi.ng/hiccup-css/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _animation = require("./animation");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _animation[key];
    }
  });
});

var _attribs = require("./attribs");

Object.keys(_attribs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _attribs[key];
    }
  });
});

var _comment = require("./comment");

Object.keys(_comment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _comment[key];
    }
  });
});

var _conditional = require("./conditional");

Object.keys(_conditional).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _conditional[key];
    }
  });
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _css[key];
    }
  });
});

var _import = require("./import");

Object.keys(_import).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _import[key];
    }
  });
});

var _inject = require("./inject");

Object.keys(_inject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inject[key];
    }
  });
});

var _keyframes = require("./keyframes");

Object.keys(_keyframes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _keyframes[key];
    }
  });
});

var _media = require("./media");

Object.keys(_media).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _media[key];
    }
  });
});

var _namespace = require("./namespace");

Object.keys(_namespace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _namespace[key];
    }
  });
});

var _quotedFunctions = require("./quoted-functions");

Object.keys(_quotedFunctions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _quotedFunctions[key];
    }
  });
});

var _supports = require("./supports");

Object.keys(_supports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _supports[key];
    }
  });
});

var _units = require("./units");

Object.keys(_units).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _units[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/hiccup-css/api.js","./animation":"../node_modules/@thi.ng/hiccup-css/animation.js","./attribs":"../node_modules/@thi.ng/hiccup-css/attribs.js","./comment":"../node_modules/@thi.ng/hiccup-css/comment.js","./conditional":"../node_modules/@thi.ng/hiccup-css/conditional.js","./css":"../node_modules/@thi.ng/hiccup-css/css.js","./import":"../node_modules/@thi.ng/hiccup-css/import.js","./inject":"../node_modules/@thi.ng/hiccup-css/inject.js","./keyframes":"../node_modules/@thi.ng/hiccup-css/keyframes.js","./media":"../node_modules/@thi.ng/hiccup-css/media.js","./namespace":"../node_modules/@thi.ng/hiccup-css/namespace.js","./quoted-functions":"../node_modules/@thi.ng/hiccup-css/quoted-functions.js","./supports":"../node_modules/@thi.ng/hiccup-css/supports.js","./units":"../node_modules/@thi.ng/hiccup-css/units.js"}],"../node_modules/@thi.ng/associative/dissoc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dissoc = dissoc;
exports.dissocObj = void 0;

function dissoc(coll, keys) {
  for (let k of keys) {
    coll.delete(k);
  }

  return coll;
}

const dissocObj = (obj, keys) => {
  for (let k of keys) {
    delete obj[k];
  }

  return obj;
};

exports.dissocObj = dissocObj;
},{}],"../node_modules/@thi.ng/associative/internal/equiv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.equivSet = exports.equivMap = void 0;

var _equiv = require("@thi.ng/equiv");

const equivMap = (a, b) => {
  if (a === b) {
    return true;
  }

  if (!(b instanceof Map) || a.size !== b.size) {
    return false;
  }

  for (let p of a.entries()) {
    if (!(0, _equiv.equiv)(b.get(p[0]), p[1])) {
      return false;
    }
  }

  return true;
};

exports.equivMap = equivMap;

const equivSet = (a, b) => {
  if (a === b) {
    return true;
  }

  if (!(b instanceof Set) || a.size !== b.size) {
    return false;
  }

  for (let k of a.keys()) {
    if (!b.has(k)) {
      return false;
    }
  }

  return true;
};

exports.equivSet = equivSet;
},{"@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js"}],"../node_modules/@thi.ng/associative/into.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.into = into;

var _checks = require("@thi.ng/checks");

function into(dest, src) {
  if ((0, _checks.isMap)(dest)) {
    for (let x of src) {
      dest.set(x[0], x[1]);
    }
  } else {
    for (let x of src) {
      dest.add(x);
    }
  }

  return dest;
}
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/associative/array-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArraySet = void 0;

var _api = require("@thi.ng/api");

var _equiv = require("@thi.ng/equiv");

var _dissoc = require("./dissoc");

var _equiv2 = require("./internal/equiv");

var _into = require("./into");

const __private = new WeakMap();

const __vals = inst => __private.get(inst).vals;
/**
 * An alternative set implementation to the native ES6 Set type. Uses
 * customizable equality/equivalence predicate and so is more useful
 * when dealing with structured data. Implements full API of native Set
 * and by the default uses `@thi.ng/equiv` for equivalence checking.
 *
 * Additionally, the type also implements the `ICopy`, `IEmpty` and
 * `IEquiv` interfaces itself.
 */


class ArraySet extends Set {
  constructor(vals, opts = {}) {
    super();

    __private.set(this, {
      equiv: opts.equiv || _equiv.equiv,
      vals: []
    });

    vals && this.into(vals);
  }

  *[Symbol.iterator]() {
    yield* __vals(this);
  }

  get [Symbol.species]() {
    return ArraySet;
  }

  get [Symbol.toStringTag]() {
    return "ArraySet";
  }

  get size() {
    return __vals(this).length;
  }

  copy() {
    const $this = __private.get(this);

    const s = new ArraySet(null, {
      equiv: $this.equiv
    });
    __private.get(s).vals = $this.vals.slice();
    return s;
  }

  empty() {
    return new ArraySet(null, this.opts());
  }

  clear() {
    __vals(this).length = 0;
  }

  first() {
    if (this.size) {
      return __vals(this)[0];
    }
  }

  add(key) {
    !this.has(key) && __vals(this).push(key);
    return this;
  }

  into(keys) {
    return (0, _into.into)(this, keys);
  }

  has(key) {
    return this.get(key, _api.SEMAPHORE) !== _api.SEMAPHORE;
  }
  /**
   * Returns the canonical value for `x`, if present. If the set
   * contains no equivalent for `x`, returns `notFound`.
   *
   * @param key
   * @param notFound
   */


  get(key, notFound) {
    const $this = __private.get(this);

    const eq = $this.equiv;
    const vals = $this.vals;

    for (let i = vals.length; --i >= 0;) {
      if (eq(vals[i], key)) {
        return vals[i];
      }
    }

    return notFound;
  }

  delete(key) {
    const $this = __private.get(this);

    const eq = $this.equiv;
    const vals = $this.vals;

    for (let i = vals.length; --i >= 0;) {
      if (eq(vals[i], key)) {
        vals.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  disj(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  equiv(o) {
    return (0, _equiv2.equivSet)(this, o);
  }

  forEach(fn, thisArg) {
    const vals = __vals(this);

    for (let i = vals.length; --i >= 0;) {
      const v = vals[i];
      fn.call(thisArg, v, v, this);
    }
  }

  *entries() {
    for (let v of __vals(this)) {
      yield [v, v];
    }
  }

  *keys() {
    yield* __vals(this);
  }

  *values() {
    yield* __vals(this);
  }

  opts() {
    return {
      equiv: __private.get(this).equiv
    };
  }

}

exports.ArraySet = ArraySet;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./internal/equiv":"../node_modules/@thi.ng/associative/internal/equiv.js","./into":"../node_modules/@thi.ng/associative/into.js"}],"../node_modules/@thi.ng/associative/common-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonKeysObj = exports.commonKeysMap = void 0;

/**
 * Like `commonKeysObj()`, but for ES6 Maps.
 *
 * @param a
 * @param b
 * @param out
 */
const commonKeysMap = (a, b, out = []) => {
  for (let k of a.keys()) {
    b.has(k) && out.push(k);
  }

  return out;
};
/**
 * Returns array of keys present in both args, i.e. the set intersection
 * of the given objects' key / property sets.
 *
 * ```
 * commonKeys({ a: 1, b: 2 }, { c: 10, b: 20, a: 30 })
 * // [ "a", "b" ]
 * ```
 *
 * @param a
 * @param b
 * @param out
 */


exports.commonKeysMap = commonKeysMap;

const commonKeysObj = (a, b, out = []) => {
  for (let k in a) {
    b.hasOwnProperty(k) && out.push(k);
  }

  return out;
};

exports.commonKeysObj = commonKeysObj;
},{}],"../node_modules/@thi.ng/associative/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureSet = exports.ensureMap = exports.objValues = exports.first = exports.copy = exports.empty = void 0;

var _checks = require("@thi.ng/checks");

const empty = (x, ctor) => (0, _checks.implementsFunction)(x, "empty") ? x.empty() : new (x[Symbol.species] || ctor)();

exports.empty = empty;

const copy = (x, ctor) => (0, _checks.implementsFunction)(x, "copy") ? x.copy() : new (x[Symbol.species] || ctor)(x);

exports.copy = copy;

const first = x => x[Symbol.iterator]().next().value;

exports.first = first;

const objValues = src => {
  const vals = [];

  for (let k in src) {
    src.hasOwnProperty(k) && vals.push(src[k]);
  }

  return vals;
};

exports.objValues = objValues;

const ensureMap = x => (0, _checks.isMap)(x) ? x : new Map(x);

exports.ensureMap = ensureMap;

const ensureSet = x => (0, _checks.isSet)(x) ? x : new Set(x);

exports.ensureSet = ensureSet;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js"}],"../node_modules/@thi.ng/associative/difference.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.difference = void 0;

var _into = require("./into");

var _utils = require("./utils");

/**
 * Computes the difference of sets `a - b` and writes results to new set
 * or optionally given set `out` (assumed to be empty for correct
 * results).
 *
 * @param a
 * @param b
 * @param out
 */
const difference = (a, b, out) => {
  if (a === b) {
    return out || (0, _utils.empty)(a, Set);
  }

  out = out ? (0, _into.into)(out, a) : (0, _utils.copy)(a, Set);

  for (let i of b) {
    out.delete(i);
  }

  return out;
};

exports.difference = difference;
},{"./into":"../node_modules/@thi.ng/associative/into.js","./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/equiv-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EquivMap = void 0;

var _api = require("@thi.ng/api");

var _equiv = require("@thi.ng/equiv");

var _arraySet = require("./array-set");

var _dissoc = require("./dissoc");

var _equiv2 = require("./internal/equiv");

var _into = require("./into");

const __private = new WeakMap();

const __map = map => __private.get(map).map;

class EquivMap extends Map {
  /**
   * Creates a new instance with optional initial key-value pairs and
   * provided options. If no `opts` are given, uses `ArraySet` for
   * storing canonical keys and `@thi.ng/equiv` for checking key
   * equivalence.
   *
   * @param pairs
   * @param opts
   */
  constructor(pairs, opts) {
    super();

    const _opts = Object.assign({
      equiv: _equiv.equiv,
      keys: _arraySet.ArraySet
    }, opts);

    __private.set(this, {
      keys: new _opts.keys(null, {
        equiv: _opts.equiv
      }),
      map: new Map(),
      opts: _opts
    });

    if (pairs) {
      this.into(pairs);
    }
  }
  /**
   * Converts given vanilla object into an `EquivMap` instance with
   * default (or optionally provided) options and returns it. By
   * default uses strict `===` equality check for `equiv` option.
   *
   * @param obj
   * @param opts
   */


  static fromObject(obj, opts) {
    const m = new EquivMap(null, Object.assign({
      equiv: (a, b) => a === b
    }, opts));

    for (let k in obj) {
      obj.hasOwnProperty(k) && m.set(k, obj[k]);
    }

    return m;
  }

  [Symbol.iterator]() {
    return this.entries();
  }

  get [Symbol.species]() {
    return EquivMap;
  }

  get [Symbol.toStringTag]() {
    return "EquivMap";
  }

  get size() {
    return __private.get(this).keys.size;
  }

  clear() {
    const $this = __private.get(this);

    $this.keys.clear();
    $this.map.clear();
  }

  empty() {
    return new EquivMap(null, __private.get(this).opts);
  }

  copy() {
    const $this = __private.get(this);

    const m = new EquivMap();

    __private.set(m, {
      keys: $this.keys.copy(),
      map: new Map($this.map),
      opts: $this.opts
    });

    return m;
  }

  equiv(o) {
    return (0, _equiv2.equivMap)(this, o);
  }

  delete(key) {
    const $this = __private.get(this);

    key = $this.keys.get(key, _api.SEMAPHORE);

    if (key !== _api.SEMAPHORE) {
      $this.map.delete(key);
      $this.keys.delete(key);
      return true;
    }

    return false;
  }

  dissoc(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  forEach(fn, thisArg) {
    for (let pair of __map(this)) {
      fn.call(thisArg, pair[1], pair[0], this);
    }
  }

  get(key, notFound) {
    const $this = __private.get(this);

    key = $this.keys.get(key, _api.SEMAPHORE);

    if (key !== _api.SEMAPHORE) {
      return $this.map.get(key);
    }

    return notFound;
  }

  has(key) {
    return __private.get(this).keys.has(key);
  }

  set(key, value) {
    const $this = __private.get(this);

    const k = $this.keys.get(key, _api.SEMAPHORE);

    if (k !== _api.SEMAPHORE) {
      $this.map.set(k, value);
    } else {
      $this.keys.add(key);
      $this.map.set(key, value);
    }

    return this;
  }

  into(pairs) {
    return (0, _into.into)(this, pairs);
  }

  entries() {
    return __map(this).entries();
  }

  keys() {
    return __map(this).keys();
  }

  values() {
    return __map(this).values();
  }

  opts() {
    return __private.get(this).opts;
  }

}

exports.EquivMap = EquivMap;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","./array-set":"../node_modules/@thi.ng/associative/array-set.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./internal/equiv":"../node_modules/@thi.ng/associative/internal/equiv.js","./into":"../node_modules/@thi.ng/associative/into.js"}],"../node_modules/@thi.ng/binary/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MASKS = void 0;
const MASKS = new Array(33).fill(0).map((_, i) => Math.pow(2, i) - 1);
exports.MASKS = MASKS;
},{}],"../node_modules/@thi.ng/binary/align.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAligned = exports.align = void 0;

/**
 * Aligns `addr` to next multiple of `size`. The latter must be a power
 * of 2.
 *
 * @param addr
 * @param size
 */
const align = (addr, size) => (size--, addr + size & ~size);
/**
 * Returns true if `addr` is aligned to wordsize `size`.
 */


exports.align = align;

const isAligned = (addr, size) => !(addr & size - 1);

exports.isAligned = isAligned;
},{}],"../node_modules/@thi.ng/binary/count.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctz32 = exports.clz32 = exports.hammingDist = exports.popCount = void 0;

/**
 * Returns number of 1 bits in `x`.
 *
 * @param x
 */
const popCount = x => (x = x - (x >>> 1 & 0x55555555), x = (x & 0x33333333) + (x >>> 2 & 0x33333333), (x + (x >>> 4) & 0xf0f0f0f) * 0x1010101 >>> 24);
/**
 * https://en.wikipedia.org/wiki/Hamming_distance
 *
 * @param x
 * @param y
 */


exports.popCount = popCount;

const hammingDist = (x, y) => popCount(x ^ y);
/**
 * Math.clz32() polyfill (corrected).
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32$revision/1426816
 *
 * @param x
 */


exports.hammingDist = hammingDist;

const clz32 = x => x !== 0 ? 31 - (Math.log(x >>> 0) / Math.LN2 | 0) : 32;

exports.clz32 = clz32;

const ctz32 = x => {
  let c = 32;
  x &= -x;
  x && c--;
  x & 0x0000ffff && (c -= 16);
  x & 0x00ff00ff && (c -= 8);
  x & 0x0f0f0f0f && (c -= 4);
  x & 0x33333333 && (c -= 2);
  x & 0x55555555 && (c -= 1);
  return c;
};

exports.ctz32 = ctz32;
},{}],"../node_modules/@thi.ng/binary/mask.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskH = exports.maskL = exports.defMask = void 0;

var _api = require("./api");

/**
 * Creates bit mask by enabling bit `a` to bit `b-1`, both in range
 * 0-32. `b` MUST be >= `a`.
 *
 * ```
 * defMask(1,31).toString(16) // 7ffffffe
 * defMask(3,8).toString(16)  // f8
 * ```
 *
 * @param a
 * @param b
 */
const defMask = (a, b) => (~_api.MASKS[a] & _api.MASKS[b]) >>> 0;
/**
 * Returns unsigned version of `x` with only lowest `n` bits.
 *
 * @param n
 * @param x
 */


exports.defMask = defMask;

const maskL = (n, x) => (x & _api.MASKS[n]) >>> 0;
/**
 * Returns unsigned version of `x` with only highest `n` bits.
 *
 * @param n
 * @param x
 */


exports.maskL = maskL;

const maskH = (n, x) => (x & ~_api.MASKS[n]) >>> 0;

exports.maskH = maskH;
},{"./api":"../node_modules/@thi.ng/binary/api.js"}],"../node_modules/@thi.ng/binary/edit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitClearWindow = exports.bitSetWindow = exports.bitSet = exports.bitFlip = exports.bitClear = void 0;

var _mask = require("./mask");

/**
 * Clears bit in given uint `x`.
 *
 * @param x value
 * @param bit bit number (0..31)
 */
const bitClear = (x, bit) => (x & ~(1 << bit)) >>> 0;
/**
 * Toggles bit in given uint `x`.
 *
 * @param x
 * @param bit
 */


exports.bitClear = bitClear;

const bitFlip = (x, bit) => (x ^ 1 << bit) >>> 0;
/**
 * Sets bit in given uint `x`.
 *
 * @param x value
 * @param bit bit number (0..31)
 */


exports.bitFlip = bitFlip;

const bitSet = (x, bit) => (x | 1 << bit) >>> 0;

exports.bitSet = bitSet;

const bitSetWindow = (x, y, from, to) => {
  const m = (0, _mask.defMask)(from, to);
  return x & ~m | y << (1 << from) & m;
};

exports.bitSetWindow = bitSetWindow;

const bitClearWindow = (x, from, to) => x & ~(0, _mask.defMask)(from, to);

exports.bitClearWindow = bitClearWindow;
},{"./mask":"../node_modules/@thi.ng/binary/mask.js"}],"../node_modules/@thi.ng/binary/float.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatToSortableInt = exports.uintBitsToFloat = exports.intBitsToFloat = exports.floatToUintBits = exports.floatToIntBits = void 0;
const F32 = new Float32Array(1);
const I32 = new Int32Array(F32.buffer);
const U32 = new Uint32Array(F32.buffer);

const floatToIntBits = x => (F32[0] = x, I32[0]);

exports.floatToIntBits = floatToIntBits;

const floatToUintBits = x => (F32[0] = x, U32[0]);

exports.floatToUintBits = floatToUintBits;

const intBitsToFloat = x => (I32[0] = x, F32[0]);

exports.intBitsToFloat = intBitsToFloat;

const uintBitsToFloat = x => (U32[0] = x, F32[0]);
/**
 * Converts given float into a sortable integer representation, using
 * raw bitwise conversion via `floatToIntBits()`.
 *
 * https://github.com/tzaeschke/phtree/blob/master/PhTreeRevisited.pdf
 * (page 3)
 *
 * @param x
 */


exports.uintBitsToFloat = uintBitsToFloat;

const floatToSortableInt = x => {
  if (x === -0) x = 0;
  const i = floatToIntBits(x);
  return x < 0 ? ~i | 1 << 31 : i;
};

exports.floatToSortableInt = floatToSortableInt;
},{}],"../node_modules/@thi.ng/binary/gray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeGray32 = exports.encodeGray32 = void 0;

/**
 * Converts 32bit unsigned int to Gray code (reflected binary). Gray
 * codes of successive values always have a Hamming distance of 1 (i.e.
 * only 1 bit changes at a time).
 *
 * https://en.wikipedia.org/wiki/Gray_code
 *
 * @param x u32
 */
const encodeGray32 = x => (x ^ x >>> 1) >>> 0;
/**
 * Converts 32bit Gray code to binary / unsigned int.
 *
 * https://en.wikipedia.org/wiki/Gray_code
 */


exports.encodeGray32 = encodeGray32;

const decodeGray32 = x => {
  x = x ^ x >>> 16;
  x = x ^ x >>> 8;
  x = x ^ x >>> 4;
  x = x ^ x >>> 2;
  x = x ^ x >>> 1;
  return x >>> 0;
};

exports.decodeGray32 = decodeGray32;
},{}],"../node_modules/@thi.ng/binary/logic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitDemux = exports.bitMux = exports.bitOai22 = exports.bitAoi22 = exports.bitOai21 = exports.bitAoi21 = exports.bitImply = exports.bitXnor = exports.bitXor = exports.bitNor = exports.bitOr = exports.bitNand = exports.bitAnd = exports.bitNot = void 0;

var _mask = require("./mask");

const bitNot = (n, x) => (0, _mask.maskL)(n, ~x);

exports.bitNot = bitNot;

const bitAnd = (n, a, b) => (0, _mask.maskL)(n, a & b);

exports.bitAnd = bitAnd;

const bitNand = (n, a, b) => (0, _mask.maskL)(n, ~(a & b));

exports.bitNand = bitNand;

const bitOr = (n, a, b) => (0, _mask.maskL)(n, a | b);

exports.bitOr = bitOr;

const bitNor = (n, a, b) => (0, _mask.maskL)(n, ~(a & b));

exports.bitNor = bitNor;

const bitXor = (n, a, b) => (0, _mask.maskL)(n, a ^ b);

exports.bitXor = bitXor;

const bitXnor = (n, a, b) => (0, _mask.maskL)(n, ~(a ^ b));

exports.bitXnor = bitXnor;

const bitImply = (n, a, b) => (0, _mask.maskL)(n, ~a | b);

exports.bitImply = bitImply;

const bitAoi21 = (n, a, b, c) => (0, _mask.maskL)(n, ~(a | b & c));

exports.bitAoi21 = bitAoi21;

const bitOai21 = (n, a, b, c) => (0, _mask.maskL)(n, ~(a & (b | c)));

exports.bitOai21 = bitOai21;

const bitAoi22 = (n, a, b, c, d) => (0, _mask.maskL)(n, ~(a & b | c & d));

exports.bitAoi22 = bitAoi22;

const bitOai22 = (n, a, b, c, d) => (0, _mask.maskL)(n, ~((a | b) & (c | d)));

exports.bitOai22 = bitOai22;

const bitMux = (n, a, b, s) => (0, _mask.maskL)(n, a & ~s | b & s);

exports.bitMux = bitMux;

const bitDemux = (n, a, b, s) => [(0, _mask.maskL)(n, a & ~s), (0, _mask.maskL)(n, b & s)];

exports.bitDemux = bitDemux;
},{"./mask":"../node_modules/@thi.ng/binary/mask.js"}],"../node_modules/@thi.ng/binary/pow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floorPow2 = exports.ceilPow2 = exports.isPow2 = void 0;

// http://graphics.stanford.edu/~seander/bithacks.html
const isPow2 = x => !!x && !(x & x - 1);

exports.isPow2 = isPow2;

const ceilPow2 = x => {
  x += x === 0;
  --x;
  x |= x >>> 1;
  x |= x >>> 2;
  x |= x >>> 4;
  x |= x >>> 8;
  x |= x >>> 16;
  return x + 1;
};

exports.ceilPow2 = ceilPow2;

const floorPow2 = x => {
  x |= x >>> 1;
  x |= x >>> 2;
  x |= x >>> 4;
  x |= x >>> 8;
  x |= x >>> 16;
  return x - (x >>> 1);
};

exports.floorPow2 = floorPow2;
},{}],"../node_modules/@thi.ng/binary/rotate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateRight = exports.rotateLeft = void 0;

/**
 * Rotates `x` `n` bits to the left.
 *
 * @param x
 * @param n
 */
const rotateLeft = (x, n) => (x << n | x >>> 32 - n) >>> 0;
/**
 * Rotates `x` `n` bits to the right.
 *
 * @param x
 * @param n
 */


exports.rotateLeft = rotateLeft;

const rotateRight = (x, n) => (x >>> n | x << 32 - n) >>> 0;

exports.rotateRight = rotateRight;
},{}],"../node_modules/@thi.ng/binary/splat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.same8 = exports.same4 = exports.splat16_32 = exports.splat8_32 = exports.splat8_24 = exports.splat4_32 = exports.splat4_24 = void 0;

/**
 * Repeats lowest nibble of `x` as 24 bit uint.
 *
 * @param x
 */
const splat4_24 = x => (x & 0xf) * 0x111111;
/**
 * Repeats lowest nibble of `x` as 32 bit uint.
 *
 * @param x
 */


exports.splat4_24 = splat4_24;

const splat4_32 = x => (x & 0xf) * 0x11111111 >>> 0;
/**
 * Repeats lowest byte of `x` as 24 bit uint.
 *
 * @param x
 */


exports.splat4_32 = splat4_32;

const splat8_24 = x => (x & 0xff) * 0x010101;
/**
 * Repeats lowest byte of `x` as 32 bit uint.
 *
 * @param x
 */


exports.splat8_24 = splat8_24;

const splat8_32 = x => (x & 0xff) * 0x01010101 >>> 0;
/**
 * Repeats lowest 16bit of `x` as 32 bit uint.
 *
 * @param x
 */


exports.splat8_32 = splat8_32;

const splat16_32 = x => (x &= 0xffff, (x << 16 | x) >>> 0);
/**
 * Returns true if bits 0-3 are same as bits 4-7.
 *
 * @param x
 */


exports.splat16_32 = splat16_32;

const same4 = x => (x >> 4 & 0xf) === (x & 0xf);
/**
 * Returns true if bits 0-7 are same as bits 8-15.
 *
 * @param x
 */


exports.same4 = same4;

const same8 = x => (x >> 8 & 0xff) === (x & 0xff);

exports.same8 = same8;
},{}],"../node_modules/@thi.ng/binary/swizzle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipBytes = exports.swizzle4 = exports.swizzle8 = exports.setLane2 = exports.setLane4 = exports.setLane8 = exports.lane2 = exports.lane4 = exports.lane8 = void 0;

/**
 * Extracts 8-bit lane from given 32bit uint.
 *
 * - Lane #0: bits 24-31
 * - Lane #1: bits 16-23
 * - Lane #2: bits 8-15
 * - Lane #3: bits 0-7
 *
 * @param x
 * @param lane
 */
const lane8 = (x, lane) => x >>> (3 - lane << 3) & 0xff;
/**
 * Extracts 4-bit lane from given 32bit uint.
 *
 * - Lane #0: bits 28-31
 * - Lane #1: bits 24-27
 * - Lane #2: bits 20-23
 * - Lane #3: bits 16-19
 * - Lane #4: bits 12-15
 * - Lane #5: bits 8-11
 * - Lane #6: bits 4-7
 * - Lane #7: bits 0-3
 *
 * @param x
 * @param lane
 */


exports.lane8 = lane8;

const lane4 = (x, lane) => x >>> (7 - lane << 2) & 0xf;

exports.lane4 = lane4;

const lane2 = (x, lane) => x >>> (15 - lane << 1) & 0x3;
/**
 * Sets 8-bit `lane` with value`y` in `x`.
 *
 * @see lane8
 *
 * @param x
 * @param y
 * @param lane
 */


exports.lane2 = lane2;

const setLane8 = (x, y, lane) => {
  const l = 3 - lane << 3;
  return (~(0xff << l) & x | (y & 0xff) << l) >>> 0;
};
/**
 * Sets 4-bit `lane` with value `y` in `x`.
 *
 * @see lane4
 *
 * @param x
 * @param y
 * @param lane
 */


exports.setLane8 = setLane8;

const setLane4 = (x, y, lane) => {
  const l = 7 - lane << 2;
  return (~(0xf << l) & x | (y & 0xf) << l) >>> 0;
};
/**
 * Sets 2-bit `lane` with value `y` in `x`.
 *
 * @see lane2
 *
 * @param x
 * @param y
 * @param lane
 */


exports.setLane4 = setLane4;

const setLane2 = (x, y, lane) => {
  const l = 15 - lane << 1;
  return (~(0x3 << l) & x | (y & 0x3) << l) >>> 0;
};
/**
 * Re-orders byte lanes in given order (MSB).
 *
 * ```
 * swizzle(0x12345678, 3, 2, 1, 0) // 0x78563412
 * swizzle(0x12345678, 1, 0, 3, 2) // 0x34127856
 * swizzle(0x12345678, 2, 2, 0, 0) // 0x56561212
 * ```
 *
 * @param x
 * @param a
 * @param b
 * @param c
 * @param d
 */


exports.setLane2 = setLane2;

const swizzle8 = (x, a, b, c, d) => (lane8(x, a) << 24 | lane8(x, b) << 16 | lane8(x, c) << 8 | lane8(x, d)) >>> 0;
/**
 *
 * @param x
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 * @param f
 * @param g
 * @param h
 */


exports.swizzle8 = swizzle8;

const swizzle4 = (x, a, b, c, d, e, f, g, h) => (lane4(x, a) << 28 | lane4(x, b) << 24 | lane4(x, c) << 20 | lane4(x, d) << 16 | lane4(x, e) << 12 | lane4(x, f) << 8 | lane4(x, g) << 4 | lane4(x, h)) >>> 0;
/**
 * Same as `swizzle8(x, 3, 2, 1, 0)`, but faster.
 *
 * @param x
 */


exports.swizzle4 = swizzle4;

const flipBytes = x => (x >>> 24 | x >> 8 & 0xff00 | (x & 0xff00) << 8 | x << 24) >>> 0;

exports.flipBytes = flipBytes;
},{}],"../node_modules/@thi.ng/binary/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

Object.keys(_api).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _api[key];
    }
  });
});

var _align = require("./align");

Object.keys(_align).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _align[key];
    }
  });
});

var _count = require("./count");

Object.keys(_count).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _count[key];
    }
  });
});

var _edit = require("./edit");

Object.keys(_edit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _edit[key];
    }
  });
});

var _float = require("./float");

Object.keys(_float).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _float[key];
    }
  });
});

var _gray = require("./gray");

Object.keys(_gray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gray[key];
    }
  });
});

var _logic = require("./logic");

Object.keys(_logic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _logic[key];
    }
  });
});

var _mask = require("./mask");

Object.keys(_mask).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mask[key];
    }
  });
});

var _pow = require("./pow");

Object.keys(_pow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pow[key];
    }
  });
});

var _rotate = require("./rotate");

Object.keys(_rotate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _rotate[key];
    }
  });
});

var _splat = require("./splat");

Object.keys(_splat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _splat[key];
    }
  });
});

var _swizzle = require("./swizzle");

Object.keys(_swizzle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _swizzle[key];
    }
  });
});
},{"./api":"../node_modules/@thi.ng/binary/api.js","./align":"../node_modules/@thi.ng/binary/align.js","./count":"../node_modules/@thi.ng/binary/count.js","./edit":"../node_modules/@thi.ng/binary/edit.js","./float":"../node_modules/@thi.ng/binary/float.js","./gray":"../node_modules/@thi.ng/binary/gray.js","./logic":"../node_modules/@thi.ng/binary/logic.js","./mask":"../node_modules/@thi.ng/binary/mask.js","./pow":"../node_modules/@thi.ng/binary/pow.js","./rotate":"../node_modules/@thi.ng/binary/rotate.js","./splat":"../node_modules/@thi.ng/binary/splat.js","./swizzle":"../node_modules/@thi.ng/binary/swizzle.js"}],"../node_modules/@thi.ng/associative/hash-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HashMap = void 0;

var _binary = require("@thi.ng/binary");

var _equiv = require("@thi.ng/equiv");

var _dissoc = require("./dissoc");

var _equiv2 = require("./internal/equiv");

var _into = require("./into");

const __private = new WeakMap();

const __iterator = (map, id) => function* () {
  for (let p of __private.get(map).bins) {
    if (p) yield p[id];
  }
};

const DEFAULT_CAP = 16;
/**
 * Configurable hash map implementation w/ ES6 Map API. Uses open
 * addressing / linear probing to resolve key collisions. Supports any
 * key types via mandatory user supplied hash function.
 *
 * See `HashMapOpts` for further configuration & behavior details.
 *
 * ```
 * import { HashMap } from "@thi.ng/associative"
 * import { hash } from "@thi.ng/vectors"
 *
 * m = new HashMap([], { hash })
 * m.set([1, 2], "a");
 * m.set([3, 4], "b");
 * m.set([1, 2], "c");
 * // HashMap { [ 1, 2 ] => 'c', [ 3, 4 ] => 'b' }
 * ```
 *
 */

class HashMap extends Map {
  constructor(pairs, opts) {
    super();
    const m = (0, _binary.ceilPow2)(Math.min(opts.cap || DEFAULT_CAP, 4)) - 1;

    __private.set(this, {
      hash: opts.hash,
      equiv: opts.equiv || _equiv.equiv,
      load: opts.load || 0.75,
      mask: m,
      bins: new Array(m + 1),
      size: 0
    });

    if (pairs) {
      this.into(pairs);
    }
  }

  get [Symbol.species]() {
    return HashMap;
  }

  get [Symbol.toStringTag]() {
    return "HashMap";
  }

  get size() {
    return __private.get(this).size;
  }

  [Symbol.iterator]() {
    return this.entries();
  }

  *entries() {
    for (let p of __private.get(this).bins) {
      if (p) yield [p[0], p[1]];
    }
  }

  keys() {
    return __iterator(this, 0)();
  }

  values() {
    return __iterator(this, 1)();
  }

  forEach(fn, thisArg) {
    for (let pair of __private.get(this).bins) {
      fn.call(thisArg, pair[1], pair[0], this);
    }
  }

  clear() {
    const $this = __private.get(this);

    $this.bins = new Array(DEFAULT_CAP);
    $this.mask = 15;
    $this.size = 0;
  }

  empty() {
    return new HashMap(null, this.opts({
      cap: DEFAULT_CAP
    }));
  }

  copy() {
    const $this = __private.get(this);

    const m = new HashMap(null, this.opts({
      cap: 4
    }));
    Object.assign(__private.get(m), {
      bins: $this.bins.slice(),
      mask: $this.mask,
      size: $this.size
    });
    return m;
  }

  equiv(o) {
    return (0, _equiv2.equivMap)(this, o);
  }

  has(key) {
    const $this = __private.get(this);

    const i = this.find(key, $this);
    return i >= 0 && $this.bins[i] != undefined;
  }

  get(key, notFound) {
    const $this = __private.get(this);

    const i = this.find(key, $this);
    return i >= 0 && $this.bins[i] ? $this.bins[i][1] : notFound;
  }

  set(key, val) {
    const $this = __private.get(this);

    let i = this.find(key, $this);

    if (i >= 0 && $this.bins[i]) {
      $this.bins[i][1] = val;
      return this;
    }

    if ($this.size > $this.mask * $this.load) {
      this.resize($this);
      i = this.find(key, $this);
    }

    $this.bins[i] = [key, val];
    $this.size++;
    return this;
  }

  delete(key) {
    const $this = __private.get(this);

    let i = this.find(key, $this);
    const bins = $this.bins;

    if (i >= 0 && !bins[i]) {
      return false;
    }

    $this.size--;
    const m = $this.mask;
    let j = i;
    let k;

    while (true) {
      delete bins[i];

      do {
        j = j + 1 & m;
        if (!bins[j]) return true;
        k = $this.hash(bins[j][0]) & m;
      } while (i <= j ? i < k && k <= j : i < k || k <= j);

      bins[i] = bins[j];
      i = j;
    }
  }

  into(pairs) {
    return (0, _into.into)(this, pairs);
  }

  dissoc(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  opts(overrides) {
    const $this = __private.get(this);

    return Object.assign({
      hash: $this.hash,
      equiv: $this.equiv,
      load: $this.load,
      cap: $this.mask + 1
    }, overrides);
  }

  find(key, $this) {
    const m = $this.mask;
    const bins = $this.bins;
    const equiv = $this.equiv;
    let i = m;
    let h = $this.hash(key) & m;

    while (bins[h] && !equiv(bins[h][0], key)) {
      i--;
      if (i < 0) return -1;
      h = h + 1 & $this.mask;
    }

    return h;
  }

  resize($this) {
    const src = $this.bins;
    const cap = ($this.mask + 1) * 2;
    $this.bins = new Array(cap);
    $this.mask = cap - 1;
    $this.size = 0;

    for (let p of src) {
      if (p) this.set(p[0], p[1]);
    }
  }

}

exports.HashMap = HashMap;
},{"@thi.ng/binary":"../node_modules/@thi.ng/binary/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./internal/equiv":"../node_modules/@thi.ng/associative/internal/equiv.js","./into":"../node_modules/@thi.ng/associative/into.js"}],"../node_modules/@thi.ng/associative/select-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectKeysObj = exports.selectKeysMap = void 0;

var _utils = require("./utils");

/**
 * Returns a new map of same type as input only containing given keys
 * (and only if they existed in the original map).
 *
 * @param src
 * @param ks selected keys
 */
const selectKeysMap = (src, ks) => {
  const dest = (0, _utils.empty)(src, Map);

  for (let k of ks) {
    src.has(k) && dest.set(k, src.get(k));
  }

  return dest;
};
/**
 * Returns a new object only containing given keys (and only if they
 * existed in the original).
 *
 * @param src
 * @param ks
 */


exports.selectKeysMap = selectKeysMap;

const selectKeysObj = (src, ks) => {
  const dest = {};

  for (let k of ks) {
    src.hasOwnProperty(k) && (dest[k] = src[k]);
  }

  return dest;
};

exports.selectKeysObj = selectKeysObj;
},{"./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/indexed.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexed = void 0;

var _equivMap = require("./equiv-map");

var _selectKeys = require("./select-keys");

var _utils = require("./utils");

/**
 * Takes an iterable of plain objects and array of indexing keys. Calls
 * `selectKeysObj` on each value and uses returned objects as new keys
 * to group original values. Returns a new `EquivMap` of sets.
 *
 * ```
 * indexed(
 *   new Set([{a: 1, b: 1}, {a: 1, b: 2}, {a: 1, b: 1, c: 2}]),
 *   ["a","b"]
 * )
 * // EquivMap {
 * //   { a: 1, b: 1 } => Set { { a: 1, b: 1 }, { a: 1, b: 1, c: 2 } },
 * //   { a: 1, b: 2 } => Set { { a: 1, b: 2 } } }
 * ```
 *
 * @param records objects to index
 * @param ks keys used for indexing
 */
const indexed = (records, ks) => {
  const res = new _equivMap.EquivMap();
  let x, ik, rv;

  for (x of records) {
    ik = (0, _selectKeys.selectKeysObj)(x, ks);
    rv = res.get(ik);
    !rv && res.set(ik, rv = (0, _utils.empty)(records, Set));
    rv.add(x);
  }

  return res;
};

exports.indexed = indexed;
},{"./equiv-map":"../node_modules/@thi.ng/associative/equiv-map.js","./select-keys":"../node_modules/@thi.ng/associative/select-keys.js","./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/intersection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intersection = void 0;

var _into = require("./into");

var _utils = require("./utils");

/**
 * Computes the intersection of sets `a` and `b` and writes results into
 * new set or optionally given set `out` (assumed to be empty for
 * correct results). If `out` is *not* given, the returned Set type will
 * be that of `a` (provided it defines `Symbol.species`).
 *
 * @param a
 * @param b
 * @param out
 */
const intersection = (a, b, out) => {
  out = out || (0, _utils.empty)(a, Set);

  if (a === b) {
    return (0, _into.into)(out, a);
  }

  if (b.size < a.size) {
    return intersection(b, a, out);
  }

  for (let i of b) {
    if (a.has(i)) {
      out.add(i);
    }
  }

  return out;
};

exports.intersection = intersection;
},{"./into":"../node_modules/@thi.ng/associative/into.js","./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/invert.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invertObj = exports.invertMap = void 0;

/**
 * Returns a new map in which the original values are used as keys and
 * original keys as values. If `dest` is given, writes results in that
 * map instead. Depending on the value type of `src` and/or if the
 * inverted map should use custom key equality semantics as provided by
 * the Map types in this package, you MUST provide a `dest` map, since
 * the default `dest` will only be a standard ES6 Map.
 *
 * ```
 * invertMap(new Map(), new Map([["a", 1], ["b", 2]]));
 * // Map { 1 => 'a', 2 => 'b' }
 * ```
 *
 * @param src
 * @param dest
 */
const invertMap = (src, dest) => {
  dest = dest || new Map();

  for (let p of src) {
    dest.set(p[1], p[0]);
  }

  return dest;
};
/**
 * Returns a new object in which the original values are used as keys
 * and original keys as values. If `dest` is given, writes results in
 * that object instead.
 *
 * ```
 * invertObj({a: 1, b: 2})
 * // { '1': 'a', '2': 'b' }
 * ```
 *
 * @param src
 * @param dest
 */


exports.invertMap = invertMap;

const invertObj = (src, dest = {}) => {
  for (let k in src) {
    dest[src[k]] = k;
  }

  return dest;
};

exports.invertObj = invertObj;
},{}],"../node_modules/@thi.ng/associative/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeObj = exports.mergeMap = void 0;

/**
 * Merges all given maps in left-to-right order into `dest`.
 * Returns `dest`.
 *
 * @param dest
 * @param xs
 */
const mergeMap = (dest, ...xs) => {
  for (let x of xs) {
    for (let pair of x) {
      dest.set(pair[0], pair[1]);
    }
  }

  return dest;
};
/**
 * Merges all given objects in left-to-right order into `dest`.
 * Returns `dest`.
 *
 * @param dest
 * @param xs
 */


exports.mergeMap = mergeMap;

const mergeObj = (dest, ...xs) => Object.assign(dest, ...xs);

exports.mergeObj = mergeObj;
},{}],"../node_modules/@thi.ng/associative/rename-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameKeysObj = exports.renameKeysMap = void 0;

var _utils = require("./utils");

/**
 * Renames keys in `src` using mapping provided by key map `km`. Does
 * support key swapping / swizzling. Does not modify original.
 *
 * @param src
 * @param km
 * @param out
 */
const renameKeysMap = (src, km, out) => {
  out = out || (0, _utils.empty)(src, Map);

  for (let [k, v] of src) {
    out.set(km.has(k) ? km.get(k) : k, v);
  }

  return out;
};
/**
 * Renames keys in `src` using mapping provided by key map `km`. Does
 * support key swapping / swizzling. Does not modify original.
 *
 * ```
 * // swap a & b, rename c
 * renameKeysObj({a: 1, b: 2, c: 3}, {a: "b", b: "a", c: "cc"})
 * // {b: 1, a: 2, cc: 3}
 * ```
 *
 * @param src
 * @param km
 */


exports.renameKeysMap = renameKeysMap;

const renameKeysObj = (src, km, out = {}) => {
  for (let k in src) {
    out[km.hasOwnProperty(k) ? km[k] : k] = src[k];
  }

  return out;
};

exports.renameKeysObj = renameKeysObj;
},{"./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/join.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinWith = exports.join = void 0;

var _commonKeys = require("./common-keys");

var _indexed = require("./indexed");

var _invert = require("./invert");

var _merge = require("./merge");

var _renameKeys = require("./rename-keys");

var _selectKeys = require("./select-keys");

var _utils = require("./utils");

/**
 * Computes the natural join between the two sets of relations. Each set
 * is assumed to have plain objects as values with at least one of the
 * keys present in both sides. Furthermore the objects in each set are
 * assumed to have the same internal structure (i.e. sets of keys).
 * Returns new set of same type as `a`.
 *
 * ```
 * join(
 *   new Set([
 *     {id: 1, name: "foo"},
 *     {id: 2, name: "bar"},
 *     {id: 3, name: "baz"}]),
 *   new Set([
 *     {id: 1, color: "red"},
 *     {id: 2, color: "blue"}])
 * )
 * // Set {
 * //   { id: 1, color: 'red', name: 'foo' },
 * //   { id: 2, color: 'blue', name: 'bar' }
 * // }
 * ```
 *
 * @param a
 * @param b
 */
const join = (a, b) => {
  if (a.size && b.size) {
    const ks = (0, _commonKeys.commonKeysObj)((0, _utils.first)(a) || {}, (0, _utils.first)(b) || {});
    let aa, bb;

    if (a.size <= b.size) {
      aa = a;
      bb = b;
    } else {
      aa = b;
      bb = a;
    }

    const idx = (0, _indexed.indexed)(aa, ks);
    const res = (0, _utils.empty)(a, Set);

    for (let x of bb) {
      const found = idx.get((0, _selectKeys.selectKeysObj)(x, ks));

      if (found) {
        for (let f of found) {
          res.add((0, _merge.mergeObj)(Object.assign({}, f), x));
        }
      }
    }

    return res;
  }

  return (0, _utils.empty)(a, Set);
};
/**
 * Similar to `join()`, computes the join between two sets of relations,
 * using the given keys in `kmap` only for joining and ignoring others.
 * `kmap` can also be used to translate join keys in `b` where
 * needed. Else, if no renaming is desired, the values in `kmap` should
 * be the same as their respective keys, e.g. `{id: "id"}`. Returns new
 * set of same type as `a`.
 *
 * ```
 * joinWith(
 *   new Set([
 *     {id: 1, name: "foo"},
 *     {id: 2, name: "bar"},
 *     {id: 3, name: "baz"}]),
 *   new Set([
 *     {type: 1, color: "red"},
 *     {type: 2, color: "blue"}]),
 *   {id: "type"}
 * )
 * // Set {
 * //   { type: 1, color: 'red', id: 1, name: 'foo' },
 * //   { type: 2, color: 'blue', id: 2, name: 'bar' } }
 * ```
 *
 * @param a
 * @param b
 * @param kmap keys to compute join for
 */


exports.join = join;

const joinWith = (a, b, kmap) => {
  if (a.size && b.size) {
    let aa, bb;
    let k;

    if (a.size <= b.size) {
      aa = a;
      bb = b;
      k = (0, _invert.invertObj)(kmap);
    } else {
      aa = b;
      bb = a;
      k = kmap;
    }

    const idx = (0, _indexed.indexed)(aa, (0, _utils.objValues)(k));
    const ks = Object.keys(k);
    const res = (0, _utils.empty)(a, Set);

    for (let x of bb) {
      const found = idx.get((0, _renameKeys.renameKeysObj)((0, _selectKeys.selectKeysObj)(x, ks), k));

      if (found) {
        for (let f of found) {
          res.add((0, _merge.mergeObj)(Object.assign({}, f), x));
        }
      }
    }

    return res;
  }

  return (0, _utils.empty)(a, Set);
};

exports.joinWith = joinWith;
joinWith(new Set([{
  a: 1,
  b: 2
}]), new Set([{
  id: 1,
  c: 2
}]), {
  a: "id"
});
},{"./common-keys":"../node_modules/@thi.ng/associative/common-keys.js","./indexed":"../node_modules/@thi.ng/associative/indexed.js","./invert":"../node_modules/@thi.ng/associative/invert.js","./merge":"../node_modules/@thi.ng/associative/merge.js","./rename-keys":"../node_modules/@thi.ng/associative/rename-keys.js","./select-keys":"../node_modules/@thi.ng/associative/select-keys.js","./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/dcons/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DCons = void 0;

var _api = require("@thi.ng/api");

var _checks = require("@thi.ng/checks");

var _compare = require("@thi.ng/compare");

var _equiv = require("@thi.ng/equiv");

var _errors = require("@thi.ng/errors");

var _transducers = require("@thi.ng/transducers");

class DCons {
  constructor(src) {
    this._length = 0;

    if (src) {
      this.into(src);
    }
  }

  get length() {
    return this._length;
  }

  copy() {
    return new DCons(this);
  }

  empty() {
    return new DCons();
  }

  clear() {
    this.release();
  }

  release() {
    let cell = this.head,
        next;

    while (cell) {
      next = cell.next;
      delete cell.value;
      delete cell.prev;
      delete cell.next;
      cell = next;
    }

    delete this.head;
    delete this.tail;
    this._length = 0;
    return true;
  }

  compare(o) {
    const n = this._length;

    if (n < o._length) {
      return -1;
    } else if (n > o._length) {
      return 1;
    } else if (n === 0) {
      return 0;
    } else {
      let ca = this.head;
      let cb = o.head;
      let res = 0;

      while (ca && res == 0) {
        res = (0, _compare.compare)(ca.value, cb.value);
        ca = ca.next;
        cb = cb.next;
      }

      return res;
    }
  }

  equiv(o) {
    if ((o instanceof DCons || (0, _checks.isArrayLike)(o)) && this._length === o.length) {
      if (this._length === 0) {
        return true;
      }

      let cell = this.head;

      for (let x of o) {
        if (!(0, _equiv.equiv)(cell.value, x)) {
          return false;
        }

        cell = cell.next;
      }

      return true;
    }

    return false;
  }

  *[Symbol.iterator]() {
    let cell = this.head;

    while (cell) {
      yield cell.value;
      cell = cell.next;
    }
  }

  *cycle() {
    while (true) {
      yield* this;
    }
  }

  $reduce(rfn, acc) {
    let cell = this.head;

    while (cell && !(0, _transducers.isReduced)(acc)) {
      acc = rfn(acc, cell.value);
      cell = cell.next;
    }

    return acc;
  }

  drop() {
    const cell = this.head;

    if (cell) {
      this.head = cell.next;

      if (this.head) {
        delete this.head.prev;
      } else {
        delete this.tail;
      }

      this._length--;
      return cell.value;
    }
  }

  cons(value) {
    const cell = {
      value,
      next: this.head
    };

    if (this.head) {
      this.head.prev = cell;
    } else {
      this.tail = cell;
    }

    this.head = cell;
    this._length++;
    return this;
  }

  insertBefore(cell, value) {
    if (!cell) {
      (0, _errors.illegalArgs)("cell is undefined");
    }

    const newCell = {
      value,
      next: cell,
      prev: cell.prev
    };

    if (cell.prev) {
      cell.prev.next = newCell;
    } else {
      this.head = newCell;
    }

    cell.prev = newCell;
    this._length++;
    return this;
  }

  insertAfter(cell, value) {
    if (!cell) {
      (0, _errors.illegalArgs)("cell is undefined");
    }

    const newCell = {
      value,
      next: cell.next,
      prev: cell
    };

    if (cell.next) {
      cell.next.prev = newCell;
    } else {
      this.tail = newCell;
    }

    cell.next = newCell;
    this._length++;
    return this;
  }

  insertBeforeNth(n, x) {
    if (n < 0) {
      n += this._length;
    }

    if (n <= 0) {
      return this.cons(x);
    } else {
      this.ensureIndex(n);
      return this.insertBefore(this.nthCellUnsafe(n), x);
    }
  }

  insertAfterNth(n, x) {
    if (n < 0) {
      n += this._length;
    }

    if (n >= this._length - 1) {
      return this.push(x);
    } else {
      this.ensureIndex(n);
      return this.insertAfter(this.nthCellUnsafe(n), x);
    }
  }

  insertSorted(value, cmp) {
    cmp = cmp || _compare.compare;
    let cell = this.head;

    while (cell) {
      if (cmp(value, cell.value) <= 0) {
        return this.insertBefore(cell, value);
      }

      cell = cell.next;
    }

    return this.push(value);
  }

  find(value) {
    let cell = this.head;

    while (cell) {
      if (cell.value === value) {
        return cell;
      }

      cell = cell.next;
    }
  }

  findWith(fn) {
    let cell = this.head;

    while (cell) {
      if (fn(cell.value)) {
        return cell;
      }

      cell = cell.next;
    }
  }

  concat(...slices) {
    const res = this.copy();

    for (let slice of slices) {
      res.into(slice);
    }

    return res;
  }

  into(src) {
    for (let x of src) {
      this.push(x);
    }
  }

  slice(from = 0, to = this.length) {
    let a = from < 0 ? from + this._length : from;
    let b = to < 0 ? to + this._length : to;

    if (a < 0 || b < 0) {
      (0, _errors.illegalArgs)("invalid indices: ${from} / ${to}");
    }

    const res = new DCons();
    let cell = this.nthCell(a);

    while (cell && ++a <= b) {
      res.push(cell.value);
      cell = cell.next;
    }

    return res;
  }

  splice(at, del = 0, insert) {
    let cell;

    if (typeof at === "number") {
      if (at < 0) {
        at += this._length;
      }

      this.ensureIndex(at);
      cell = this.nthCellUnsafe(at);
    } else {
      cell = at;
    }

    const removed = new DCons();

    if (del > 0) {
      while (cell && del-- > 0) {
        this.remove(cell);
        removed.push(cell.value);
        cell = cell.next;
      }
    } else if (cell) {
      cell = cell.next;
    }

    if (insert) {
      if (cell) {
        for (let i of insert) {
          this.insertBefore(cell, i);
        }
      } else {
        for (let i of insert) {
          this.push(i);
        }
      }
    }

    return removed;
  }

  remove(cell) {
    if (cell.prev) {
      cell.prev.next = cell.next;
    } else {
      this.head = cell.next;
    }

    if (cell.next) {
      cell.next.prev = cell.prev;
    } else {
      this.tail = cell.prev;
    }

    this._length--;
    return this;
  }

  swap(a, b) {
    if (a !== b) {
      const t = a.value;
      a.value = b.value;
      b.value = t;
    }

    return this;
  }

  push(value) {
    if (this.tail) {
      const cell = {
        value,
        prev: this.tail
      };
      this.tail.next = cell;
      this.tail = cell;
      this._length++;
      return this;
    } else {
      return this.cons(value);
    }
  }

  pop() {
    const cell = this.tail;

    if (!cell) {
      return;
    }

    this.tail = cell.prev;

    if (this.tail) {
      delete this.tail.next;
    } else {
      delete this.head;
    }

    this._length--;
    return cell.value;
  }

  first() {
    return this.head && this.head.value;
  }

  peek() {
    return this.tail && this.tail.value;
  }

  setHead(v) {
    if (this.head) {
      this.head.value = v;
      return this;
    }

    return this.cons(v);
  }

  setTail(v) {
    if (this.tail) {
      this.tail.value = v;
      return this;
    }

    return this.push(v);
  }

  setNth(n, v) {
    const cell = this.nthCell(n);
    !cell && (0, _errors.illegalArgs)(`index out of bounds: ${n}`);
    cell.value = v;
    return this;
  }

  nth(n, notFound) {
    const cell = this.nthCell(n);
    return cell ? cell.value : notFound;
  }

  nthCell(n) {
    if (n < 0) {
      n += this._length;
    }

    if (n < 0 || n >= this._length) {
      return;
    }

    return this.nthCellUnsafe(n);
  }

  rotateLeft() {
    switch (this._length) {
      case 0:
      case 1:
        return this;

      case 2:
        return this.swap(this.head, this.tail);

      default:
        return this.push(this.drop());
    }
  }

  rotateRight() {
    switch (this._length) {
      case 0:
      case 1:
        return this;

      case 2:
        return this.swap(this.head, this.tail);

      default:
        const x = this.peek();
        this.pop();
        return this.cons(x);
    }
  }

  map(fn) {
    const res = new DCons();
    let cell = this.head;

    while (cell) {
      res.push(fn(cell.value));
      cell = cell.next;
    }

    return res;
  }

  filter(pred) {
    const res = new DCons();
    let cell = this.head;

    while (cell) {
      pred(cell.value) && res.push(cell.value);
      cell = cell.next;
    }

    return res;
  }

  reduce(rfn, initial) {
    let acc = initial;
    let cell = this.head;

    while (cell) {
      // TODO add early termination support
      acc = rfn(acc, cell.value);
      cell = cell.next;
    }

    return acc;
  }

  shuffle() {
    let n = this._length;
    let cell = this.tail;

    while (n > 1) {
      let i = Math.floor(Math.random() * n);
      this.swap(this.nthCell(i), cell);
      cell = cell.prev;
      n--;
    }

    return this;
  }

  reverse() {
    let head = this.head;
    let tail = this.tail;
    let n = (this._length >>> 1) + (this._length & 1);

    while (head && tail && n > 0) {
      const t = head.value;
      head.value = tail.value;
      tail.value = t;
      head = head.next;
      tail = tail.prev;
      n--;
    }

    return this;
  }

  asHead(cell) {
    if (cell === this.head) {
      return this;
    }

    this.remove(cell);
    this.head.prev = cell;
    cell.next = this.head;
    cell.prev = undefined;
    this.head = cell;
    this._length++;
    return this;
  }

  asTail(cell) {
    if (cell === this.tail) {
      return this;
    }

    this.remove(cell);
    this.tail.next = cell;
    cell.prev = this.tail;
    cell.next = undefined;
    this.tail = cell;
    this._length++;
    return this;
  }

  toString() {
    let res = [];
    let cell = this.head;

    while (cell) {
      res.push(cell.value != null ? String(cell.value) : cell.value === undefined ? "undefined" : "null");
      cell = cell.next;
    }

    return res.join(", ");
  }

  toJSON() {
    return [...this];
  }

  ensureIndex(i) {
    (0, _api.assert)(i >= 0 && i < this._length, `index out of range: ${i}`);
  }

  nthCellUnsafe(n) {
    let cell, dir;

    if (n <= this._length >> 1) {
      cell = this.head;
      dir = "next";
    } else {
      cell = this.tail;
      dir = "prev";
      n = this._length - n - 1;
    }

    while (n-- > 0 && cell) {
      cell = cell[dir];
    }

    return cell;
  }

}

exports.DCons = DCons;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","@thi.ng/transducers":"../node_modules/@thi.ng/transducers/index.js"}],"../node_modules/@thi.ng/associative/ll-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LLSet = void 0;

var _api = require("@thi.ng/api");

var _dcons = require("@thi.ng/dcons");

var _equiv = require("@thi.ng/equiv");

var _dissoc = require("./dissoc");

var _equiv2 = require("./internal/equiv");

var _into = require("./into");

const __private = new WeakMap();

const __vals = inst => __private.get(inst).vals;
/**
 * Similar to `ArraySet`, this class is an alternative implementation of
 * the native ES6 Set API using a @thi.ng/dcons linked list as backing
 * store and a customizable value equality / equivalence predicate. By
 * the default uses `@thi.ng/equiv` for equivalence checking.
 *
 * Additionally, the type also implements the `ICopy`, `IEmpty` and
 * `IEquiv` interfaces itself.
 */


class LLSet extends Set {
  constructor(vals, opts = {}) {
    super();

    __private.set(this, {
      equiv: opts.equiv || _equiv.equiv,
      vals: new _dcons.DCons()
    });

    vals && this.into(vals);
  }

  *[Symbol.iterator]() {
    yield* __vals(this);
  }

  get [Symbol.species]() {
    return LLSet;
  }

  get [Symbol.toStringTag]() {
    return "LLSet";
  }

  get size() {
    return __vals(this).length;
  }

  copy() {
    const $this = __private.get(this);

    const s = new LLSet(null, this.opts());
    __private.get(s).vals = $this.vals.copy();
    return s;
  }

  empty() {
    return new LLSet(null, this.opts());
  }

  clear() {
    __vals(this).clear();
  }

  first() {
    if (this.size) {
      return __vals(this).head.value;
    }
  }

  add(key) {
    !this.has(key) && __vals(this).push(key);
    return this;
  }

  into(keys) {
    return (0, _into.into)(this, keys);
  }

  has(key) {
    return this.get(key, _api.SEMAPHORE) !== _api.SEMAPHORE;
  }
  /**
   * Returns the canonical (stored) value for `key`, if present. If
   * the set contains no equivalent for `key`, returns `notFound`.
   *
   * @param key
   * @param notFound
   */


  get(key, notFound) {
    const $this = __private.get(this);

    const eq = $this.equiv;
    let i = $this.vals.head;

    while (i) {
      if (eq(i.value, key)) {
        return i.value;
      }

      i = i.next;
    }

    return notFound;
  }

  delete(key) {
    const $this = __private.get(this);

    const eq = $this.equiv;
    let i = $this.vals.head;

    while (i) {
      if (eq(i.value, key)) {
        $this.vals.splice(i, 1);
        return true;
      }

      i = i.next;
    }

    return false;
  }

  disj(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  equiv(o) {
    return (0, _equiv2.equivSet)(this, o);
  }

  forEach(fn, thisArg) {
    let i = __vals(this).head;

    while (i) {
      fn.call(thisArg, i.value, i.value, this);
      i = i.next;
    }
  }

  *entries() {
    for (let v of __vals(this)) {
      yield [v, v];
    }
  }

  *keys() {
    yield* __vals(this);
  }

  *values() {
    yield* __vals(this);
  }

  opts() {
    return {
      equiv: __private.get(this).equiv
    };
  }

}

exports.LLSet = LLSet;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/dcons":"../node_modules/@thi.ng/dcons/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./internal/equiv":"../node_modules/@thi.ng/associative/internal/equiv.js","./into":"../node_modules/@thi.ng/associative/into.js"}],"../node_modules/@thi.ng/associative/merge-apply.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeApplyObj = exports.mergeApplyMap = void 0;

var _checks = require("@thi.ng/checks");

var _utils = require("./utils");

/**
 * Similar to `mergeApplyObj()`, but for ES6 Maps instead of plain objects.
 *
 * @param src
 * @param xs
 */
const mergeApplyMap = (src, xs) => {
  const res = (0, _utils.copy)(src, Map);

  for (let [k, v] of xs) {
    res.set(k, (0, _checks.isFunction)(v) ? v(res.get(k)) : v);
  }

  return res;
};
/**
 * Similar to `mergeObjWith()`, but only supports 2 args and any
 * function values in `xs` will be called with respective value in `src`
 * to produce a new / derived value for that key, i.e.
 *
 * ```
 * dest[k] = xs[k](src[k])
 * ```
 *
 * Returns new merged object and does not modify any of the inputs.
 *
 * ```
 * mergeApplyObj(
 *   {a: "hello", b: 23, c: 12},
 *   {a: (x) => x + " world", b: 42}
 * );
 * // { a: 'hello world', b: 42, c: 12 }
 * ```
 *
 * @param src
 * @param xs
 */


exports.mergeApplyMap = mergeApplyMap;

const mergeApplyObj = (src, xs) => {
  const res = Object.assign({}, src);

  for (let k in xs) {
    const v = xs[k];
    res[k] = (0, _checks.isFunction)(v) ? v(res[k]) : v;
  }

  return res;
};

exports.mergeApplyObj = mergeApplyObj;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/merge-with.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeObjWith = exports.mergeMapWith = void 0;

var _utils = require("./utils");

const mergeMapWith = (f, dest, ...xs) => {
  const res = (0, _utils.copy)(dest, Map);

  for (let x of xs) {
    for (let [k, v] of x) {
      res.set(k, res.has(k) ? f(res.get(k), v) : v);
    }
  }

  return res;
};

exports.mergeMapWith = mergeMapWith;

const mergeObjWith = (f, dest, ...xs) => {
  const res = Object.assign({}, dest);

  for (let x of xs) {
    for (let k in x) {
      const v = x[k];
      res[k] = res.hasOwnProperty(k) ? f(dest[k], v) : v;
    }
  }

  return res;
};

exports.mergeObjWith = mergeObjWith;
},{"./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/merge-deep.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeDeepObj = void 0;

var _checks = require("@thi.ng/checks");

var _mergeWith = require("./merge-with");

const mergeDeepObj = (dest, ...xs) => (0, _mergeWith.mergeObjWith)((a, b) => (0, _checks.isPlainObject)(a) && (0, _checks.isPlainObject)(b) ? mergeDeepObj(a, b) : b, dest, ...xs);

exports.mergeDeepObj = mergeDeepObj;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","./merge-with":"../node_modules/@thi.ng/associative/merge-with.js"}],"../node_modules/@thi.ng/associative/sorted-map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortedMap = void 0;

var _api = require("@thi.ng/api");

var _compare = require("@thi.ng/compare");

var _transducers = require("@thi.ng/transducers");

var _dissoc = require("./dissoc");

var _equiv = require("./internal/equiv");

var _into = require("./into");

class Node {
  constructor(k, v, h) {
    this.k = k;
    this.v = v;
    this.next = new Array(h + 1);
  }

} // stores private properties for all instances
// http://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html


const __private = new WeakMap();

class SortedMap extends Map {
  /**
   * Creates new `SortedMap` instance with optionally given pairs
   * and/or options.
   *
   * @param pairs
   * @param opts
   */
  constructor(pairs, opts = {}) {
    super();
    const cap = opts.capacity || SortedMap.DEFAULT_CAP;
    const maxh = Math.ceil(Math.log2(cap));

    __private.set(this, {
      head: new Node(null, null, 0),
      cap: Math.pow(2, maxh),
      cmp: opts.compare || _compare.compare,
      p: opts.probability || SortedMap.DEFAULT_P,
      maxh,
      length: 0,
      h: 0
    });

    if (pairs) {
      this.into(pairs);
    }
  }
  /**
   * Creates new `SortedMap` instance from given object's key-value
   * pairs.
   *
   * @param obj
   * @param opts
   */


  static fromObject(obj, opts) {
    const m = new SortedMap(null, Object.assign({
      capacity: Object.keys(obj).length
    }, opts));

    for (let k in obj) {
      obj.hasOwnProperty(k) && m.set(k, obj[k]);
    }

    return m;
  }

  get [Symbol.species]() {
    return SortedMap;
  }

  *[Symbol.iterator]() {
    let node = __private.get(this).head;

    while (node = node.next[0]) {
      yield [node.k, node.v];
    }
  }

  *entries(key, max = false) {
    const $this = __private.get(this);

    let node = $this.head;
    const cmp = $this.cmp;
    let code;

    if (max) {
      while (node = node.next[0]) {
        if (key === undefined || (code = cmp(node.k, key)) <= 0) {
          yield [node.k, node.v];
          if (code === 0) return;
        }
      }
    } else {
      while (node = node.next[0]) {
        if (key === undefined || (code = cmp(node.k, key)) >= 0) {
          yield [node.k, node.v];
        }
      }
    }
  }

  keys(key, max = false) {
    return (0, _transducers.map)(p => p[0], this.entries(key, max));
  }

  values(key, max = false) {
    return (0, _transducers.map)(p => p[1], this.entries(key, max));
  }

  get size() {
    return __private.get(this).length;
  }

  clear() {
    const $this = __private.get(this);

    $this.head = new Node(null, null, 0);
    $this.length = 0;
    $this.h = 0;
  }

  empty() {
    return new SortedMap(null, Object.assign({}, this.opts(), {
      capacity: SortedMap.DEFAULT_CAP
    }));
  }

  copy() {
    return new SortedMap(this, this.opts());
  }

  compare(o) {
    const n = this.size;
    const m = o.size;
    if (n < m) return -1;
    if (n > m) return 1;
    const i = this.entries();
    const j = o.entries();
    let x, y;
    let c;

    while (x = i.next(), y = j.next(), !x.done && !y.done) {
      if ((c = (0, _compare.compare)(x.value[0], y.value[0])) !== 0 || (c = (0, _compare.compare)(x.value[1], y.value[1])) !== 0) {
        return c;
      }
    }

    return 0;
  }

  equiv(o) {
    return (0, _equiv.equivMap)(this, o);
  }

  first() {
    const node = __private.get(this).head.next[0];

    return node ? [node.k, node.v] : undefined;
  }

  get(k, notFound) {
    const node = this.findPredNode(k).next[0];
    return node && __private.get(this).cmp(node.k, k) === 0 ? node.v : notFound;
  }

  has(key) {
    return this.get(key, _api.SEMAPHORE) !== _api.SEMAPHORE;
  }

  set(k, v) {
    const $this = __private.get(this);

    let node = $this.head;
    let level = $this.h;
    let stack = new Array(level);
    const cmp = $this.cmp;
    let code;

    while (level >= 0) {
      while (node.next[level] && (code = cmp(node.next[level].k, k)) < 0) {
        node = node.next[level];
      }

      if (node.next[level] && code === 0) {
        do {
          node.next[level].v = v;
        } while (--level >= 0);

        return this;
      }

      stack[level--] = node;
    }

    const h = this.pickHeight($this.maxh, $this.h, $this.p);
    node = new Node(k, v, h);

    while ($this.h < h) {
      stack[++$this.h] = $this.head;
    }

    for (let i = 0; i <= h; i++) {
      node.next[i] = stack[i].next[i];
      stack[i].next[i] = node;
    }

    $this.length++;

    if ($this.length >= $this.cap) {
      $this.cap *= 2;
      $this.maxh++;
    }

    return this;
  }

  delete(k) {
    const $this = __private.get(this);

    let node = $this.head;
    let level = $this.h;
    let removed = false;
    const cmp = $this.cmp;
    let code;

    while (level >= 0) {
      while (node.next[level] && (code = cmp(node.next[level].k, k)) < 0) {
        node = node.next[level];
      }

      if (node.next[level] && code === 0) {
        removed = true;
        node.next[level] = node.next[level].next[level];

        if (node == $this.head && !node.next[level]) {
          $this.h = Math.max(0, $this.h - 1);
        }
      }

      level--;
    }

    if (removed) $this.length--;
    return removed;
  }

  into(pairs) {
    return (0, _into.into)(this, pairs);
  }

  dissoc(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  forEach(fn, thisArg) {
    for (let p of this) {
      fn.call(thisArg, p[1], p[0], this);
    }
  }

  $reduce(rfn, acc) {
    let node = __private.get(this).head;

    while ((node = node.next[0]) && !(0, _transducers.isReduced)(acc)) {
      acc = rfn(acc, [node.k, node.v]);
    }

    return acc;
  }

  opts() {
    const $this = __private.get(this);

    return {
      capacity: $this.cap,
      compare: $this.cmp,
      probability: $this.p
    };
  }

  findPredNode(k) {
    const $this = __private.get(this);

    const cmp = $this.cmp;
    let node = $this.head;
    let level = $this.h;

    while (level >= 0) {
      while (node.next[level] && cmp(node.next[level].k, k) < 0) {
        node = node.next[level];
      }

      level--;
    }

    return node;
  }

  pickHeight(maxh, h, p) {
    const max = Math.min(maxh, h + 1);
    let level = 0;

    while (Math.random() < p && level < max) {
      level++;
    }

    return level;
  }

}

exports.SortedMap = SortedMap;
SortedMap.DEFAULT_CAP = 8;
SortedMap.DEFAULT_P = 1 / Math.E;
},{"@thi.ng/api":"../node_modules/@thi.ng/api/index.js","@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","@thi.ng/transducers":"../node_modules/@thi.ng/transducers/index.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./internal/equiv":"../node_modules/@thi.ng/associative/internal/equiv.js","./into":"../node_modules/@thi.ng/associative/into.js"}],"../node_modules/@thi.ng/associative/sorted-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortedSet = void 0;

var _compare = require("@thi.ng/compare");

var _transducers = require("@thi.ng/transducers");

var _dissoc = require("./dissoc");

var _equiv = require("./internal/equiv");

var _into = require("./into");

var _sortedMap = require("./sorted-map");

const __private = new WeakMap();
/**
 * Sorted set implementation with standard ES6 Set API, customizable
 * value equality and comparison semantics and additional functionality:
 *
 * - range queries (via `entries`, `keys`, `values`)
 * - multiple value addition/deletion via `into()` and `disj()`
 *
 * Furthermore, this class implements the `ICopy`, IEmpty`, `ICompare`
 * and `IEquiv` interfaces defined by `@thi.ng/api`. The latter two
 * allow instances to be used as keys themselves in other data types
 * defined in this (and other) package(s).
 *
 * This set uses a `SortedMap` as backing store and therefore has the
 * same resizing characteristics.
 */


class SortedSet extends Set {
  /**
   * Creates new instance with optional given values and/or
   * implementation options. The options are the same as used by
   * `SortedMap`.
   *
   * @param values
   * @param opts
   */
  constructor(values, opts) {
    super();

    __private.set(this, new _sortedMap.SortedMap(values ? (0, _transducers.map)(x => [x, x], values) : null, opts));
  }

  [Symbol.iterator]() {
    return this.keys();
  }

  get [Symbol.species]() {
    return SortedSet;
  }

  get [Symbol.toStringTag]() {
    return "SortedSet";
  }

  get size() {
    return __private.get(this).size;
  }

  copy() {
    return new SortedSet(this.keys(), this.opts());
  }

  empty() {
    return new SortedSet(null, Object.assign({}, this.opts(), {
      capacity: _sortedMap.SortedMap.DEFAULT_CAP
    }));
  }

  compare(o) {
    const n = this.size;
    const m = o.size;
    if (n < m) return -1;
    if (n > m) return 1;
    const i = this.entries();
    const j = o.entries();
    let x, y;
    let c;

    while (x = i.next(), y = j.next(), !x.done && !y.done) {
      if ((c = (0, _compare.compare)(x.value[0], y.value[0])) !== 0) {
        return c;
      }
    }

    return 0;
  }

  equiv(o) {
    return (0, _equiv.equivSet)(this, o);
  }

  $reduce(rfn, acc) {
    return __private.get(this).$reduce((_acc, x) => rfn(_acc, x[0]), acc);
  }

  entries(key, max = false) {
    return __private.get(this).entries(key, max);
  }

  keys(key, max = false) {
    return __private.get(this).keys(key, max);
  }

  values(key, max = false) {
    return __private.get(this).values(key, max);
  }

  add(key) {
    __private.get(this).set(key, key);

    return this;
  }

  into(keys) {
    return (0, _into.into)(this, keys);
  }

  clear() {
    __private.get(this).clear();
  }

  first() {
    const first = __private.get(this).first();

    return first ? first[0] : undefined;
  }

  delete(key) {
    return __private.get(this).delete(key);
  }

  disj(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  forEach(fn, thisArg) {
    for (let p of this) {
      fn.call(thisArg, p, p, this);
    }
  }

  has(key) {
    return __private.get(this).has(key);
  }

  get(key, notFound) {
    return __private.get(this).get(key, notFound);
  }

  opts() {
    return __private.get(this).opts();
  }

}

exports.SortedSet = SortedSet;
},{"@thi.ng/compare":"../node_modules/@thi.ng/compare/index.js","@thi.ng/transducers":"../node_modules/@thi.ng/transducers/index.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./internal/equiv":"../node_modules/@thi.ng/associative/internal/equiv.js","./into":"../node_modules/@thi.ng/associative/into.js","./sorted-map":"../node_modules/@thi.ng/associative/sorted-map.js"}],"../node_modules/@thi.ng/associative/sparse-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sparseSet = exports.SparseSet32 = exports.SparseSet16 = exports.SparseSet8 = exports.ASparseSet = void 0;

var _checks = require("@thi.ng/checks");

var _errors = require("@thi.ng/errors");

var _dissoc = require("./dissoc");

var _into = require("./into");

const __private = new WeakMap();

const fail = () => (0, _errors.illegalArgs)(`dense & sparse arrays must be of same size`);
/**
 * After "An Efficient Representation for Sparse Sets"
 * Preston Briggs and Linda Torczon (1993)
 *
 * https://research.swtch.com/sparse
 * https://programmingpraxis.com/2012/03/09/sparse-sets/
 * https://blog.molecular-matters.com/2013/07/24/adventures-in-data-oriented-design-part-3c-external-references/
 */


class ASparseSet extends Set {
  constructor(dense, sparse) {
    super();

    __private.set(this, {
      dense,
      sparse,
      n: 0
    });
  }

  [Symbol.iterator]() {
    return this.keys();
  }

  get size() {
    return __private.get(this).n;
  }

  get capacity() {
    return __private.get(this).dense.length;
  }

  clear() {
    __private.get(this).n = 0;
  }

  equiv(o) {
    if (this === o) {
      return true;
    }

    if (!(o instanceof Set) || this.size !== o.size) {
      return false;
    }

    const $this = __private.get(this);

    const d = $this.dense;

    for (let i = $this.n; --i >= 0;) {
      if (!o.has(d[i])) {
        return false;
      }
    }

    return true;
  }

  add(key) {
    const $this = __private.get(this);

    const dense = $this.dense;
    const sparse = $this.sparse;
    const max = dense.length;
    const i = sparse[key];
    const n = $this.n;

    if (key < max && n < max && !(i < n && dense[i] === key)) {
      dense[n] = key;
      sparse[key] = n;
      $this.n++;
    }

    return this;
  }

  delete(key) {
    const $this = __private.get(this);

    const dense = $this.dense;
    const sparse = $this.sparse;
    const i = sparse[key];

    if (i < $this.n && dense[i] === key) {
      const j = dense[--$this.n];
      dense[i] = j;
      sparse[j] = i;
      return true;
    }

    return false;
  }

  has(key) {
    const $this = __private.get(this);

    const i = $this.sparse[key];
    return i < $this.n && $this.dense[i] === key;
  }

  get(key, notFound = -1) {
    return this.has(key) ? key : notFound;
  }

  first() {
    const $this = __private.get(this);

    return $this.n ? $this.dense[0] : undefined;
  }

  into(keys) {
    return (0, _into.into)(this, keys);
  }

  disj(keys) {
    return (0, _dissoc.dissoc)(this, keys);
  }

  forEach(fn, thisArg) {
    const $this = __private.get(this);

    const d = $this.dense;
    const n = $this.n;

    for (let i = 0; i < n; i++) {
      const v = d[i];
      fn.call(thisArg, v, v, this);
    }
  }

  *entries() {
    const $this = __private.get(this);

    const d = $this.dense;
    const n = $this.n;

    for (let i = 0; i < n; i++) {
      yield [d[i], d[i]];
    }
  }

  *keys() {
    const $this = __private.get(this);

    const d = $this.dense;
    const n = $this.n;

    for (let i = 0; i < n; i++) {
      yield d[i];
    }
  }

  values() {
    return this.keys();
  }

  __copyTo(dest) {
    const $this = __private.get(this);

    const $c = __private.get(dest);

    $c.dense = $this.dense.slice();
    $c.sparse = $this.sparse.slice();
    $c.n = $this.n;
    return dest;
  }

}

exports.ASparseSet = ASparseSet;

class SparseSet8 extends ASparseSet {
  constructor(n, sparse) {
    (0, _checks.isNumber)(n) ? super(new Uint8Array(n), new Uint8Array(n)) : n.length === sparse.length ? super(n, sparse) : fail();
  }

  get [Symbol.species]() {
    return SparseSet8;
  }

  get [Symbol.toStringTag]() {
    return "SparseSet8";
  }

  copy() {
    return this.__copyTo(new SparseSet8(0));
  }

  empty() {
    return new SparseSet8(this.capacity);
  }

}

exports.SparseSet8 = SparseSet8;

class SparseSet16 extends ASparseSet {
  constructor(n, sparse) {
    (0, _checks.isNumber)(n) ? super(new Uint16Array(n), new Uint16Array(n)) : n.length === sparse.length ? super(n, sparse) : fail();
  }

  get [Symbol.species]() {
    return SparseSet16;
  }

  get [Symbol.toStringTag]() {
    return "SparseSet16";
  }

  copy() {
    return this.__copyTo(new SparseSet16(0));
  }

  empty() {
    return new SparseSet16(this.capacity);
  }

}

exports.SparseSet16 = SparseSet16;

class SparseSet32 extends ASparseSet {
  constructor(n, sparse) {
    (0, _checks.isNumber)(n) ? super(new Uint32Array(n), new Uint32Array(n)) : n.length === sparse.length ? super(n, sparse) : fail();
  }

  get [Symbol.species]() {
    return SparseSet32;
  }

  get [Symbol.toStringTag]() {
    return "SparseSet32";
  }

  copy() {
    return this.__copyTo(new SparseSet32(0));
  }

  empty() {
    return new SparseSet32(this.capacity);
  }

}
/**
 * Creates a new sparse set with given max. capacity (max ID + 1) and
 * chooses most memory efficient implementation, e.g. if `n` <= 256
 * returns a `SparseSet8` instance.
 *
 * @param n
 */


exports.SparseSet32 = SparseSet32;

const sparseSet = n => n < 0x100 ? new SparseSet8(n) : n < 0x10000 ? new SparseSet16(n) : new SparseSet32(n);

exports.sparseSet = sparseSet;
},{"@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/errors":"../node_modules/@thi.ng/errors/index.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./into":"../node_modules/@thi.ng/associative/into.js"}],"../node_modules/@thi.ng/associative/union.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = void 0;

var _into = require("./into");

var _utils = require("./utils");

/**
 * Computes union of sets `a` and `b` and writes results to new set or
 * optionally given set `out` (assumed to be empty for correct results).
 *
 * @param a
 * @param b
 * @param out
 */
const union = (a, b, out) => {
  out = out ? (0, _into.into)(out, a) : (0, _utils.copy)(a, Set);
  return a === b ? out : (0, _into.into)(out, b);
};

exports.union = union;
},{"./into":"../node_modules/@thi.ng/associative/into.js","./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/without-keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withoutKeysObj = exports.withoutKeysMap = void 0;

var _utils = require("./utils");

const withoutKeysMap = (src, keys) => {
  const ks = (0, _utils.ensureSet)(keys);
  const dest = (0, _utils.empty)(src, Map);

  for (let p of src.entries()) {
    const k = p[0];
    !ks.has(k) && dest.set(k, p[1]);
  }

  return dest;
};

exports.withoutKeysMap = withoutKeysMap;

const withoutKeysObj = (src, keys) => {
  const ks = (0, _utils.ensureSet)(keys);
  const dest = {};

  for (let k in src) {
    src.hasOwnProperty(k) && !ks.has(k) && (dest[k] = src[k]);
  }

  return dest;
};

exports.withoutKeysObj = withoutKeysObj;
},{"./utils":"../node_modules/@thi.ng/associative/utils.js"}],"../node_modules/@thi.ng/associative/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arraySet = require("./array-set");

Object.keys(_arraySet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _arraySet[key];
    }
  });
});

var _commonKeys = require("./common-keys");

Object.keys(_commonKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _commonKeys[key];
    }
  });
});

var _difference = require("./difference");

Object.keys(_difference).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _difference[key];
    }
  });
});

var _dissoc = require("./dissoc");

Object.keys(_dissoc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _dissoc[key];
    }
  });
});

var _equivMap = require("./equiv-map");

Object.keys(_equivMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _equivMap[key];
    }
  });
});

var _hashMap = require("./hash-map");

Object.keys(_hashMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hashMap[key];
    }
  });
});

var _indexed = require("./indexed");

Object.keys(_indexed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _indexed[key];
    }
  });
});

var _intersection = require("./intersection");

Object.keys(_intersection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _intersection[key];
    }
  });
});

var _into = require("./into");

Object.keys(_into).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _into[key];
    }
  });
});

var _invert = require("./invert");

Object.keys(_invert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _invert[key];
    }
  });
});

var _join = require("./join");

Object.keys(_join).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _join[key];
    }
  });
});

var _llSet = require("./ll-set");

Object.keys(_llSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _llSet[key];
    }
  });
});

var _mergeApply = require("./merge-apply");

Object.keys(_mergeApply).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mergeApply[key];
    }
  });
});

var _mergeDeep = require("./merge-deep");

Object.keys(_mergeDeep).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mergeDeep[key];
    }
  });
});

var _mergeWith = require("./merge-with");

Object.keys(_mergeWith).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mergeWith[key];
    }
  });
});

var _merge = require("./merge");

Object.keys(_merge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _merge[key];
    }
  });
});

var _renameKeys = require("./rename-keys");

Object.keys(_renameKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renameKeys[key];
    }
  });
});

var _selectKeys = require("./select-keys");

Object.keys(_selectKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _selectKeys[key];
    }
  });
});

var _sortedMap = require("./sorted-map");

Object.keys(_sortedMap).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sortedMap[key];
    }
  });
});

var _sortedSet = require("./sorted-set");

Object.keys(_sortedSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sortedSet[key];
    }
  });
});

var _sparseSet = require("./sparse-set");

Object.keys(_sparseSet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sparseSet[key];
    }
  });
});

var _union = require("./union");

Object.keys(_union).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _union[key];
    }
  });
});

var _withoutKeys = require("./without-keys");

Object.keys(_withoutKeys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withoutKeys[key];
    }
  });
});
},{"./array-set":"../node_modules/@thi.ng/associative/array-set.js","./common-keys":"../node_modules/@thi.ng/associative/common-keys.js","./difference":"../node_modules/@thi.ng/associative/difference.js","./dissoc":"../node_modules/@thi.ng/associative/dissoc.js","./equiv-map":"../node_modules/@thi.ng/associative/equiv-map.js","./hash-map":"../node_modules/@thi.ng/associative/hash-map.js","./indexed":"../node_modules/@thi.ng/associative/indexed.js","./intersection":"../node_modules/@thi.ng/associative/intersection.js","./into":"../node_modules/@thi.ng/associative/into.js","./invert":"../node_modules/@thi.ng/associative/invert.js","./join":"../node_modules/@thi.ng/associative/join.js","./ll-set":"../node_modules/@thi.ng/associative/ll-set.js","./merge-apply":"../node_modules/@thi.ng/associative/merge-apply.js","./merge-deep":"../node_modules/@thi.ng/associative/merge-deep.js","./merge-with":"../node_modules/@thi.ng/associative/merge-with.js","./merge":"../node_modules/@thi.ng/associative/merge.js","./rename-keys":"../node_modules/@thi.ng/associative/rename-keys.js","./select-keys":"../node_modules/@thi.ng/associative/select-keys.js","./sorted-map":"../node_modules/@thi.ng/associative/sorted-map.js","./sorted-set":"../node_modules/@thi.ng/associative/sorted-set.js","./sparse-set":"../node_modules/@thi.ng/associative/sparse-set.js","./union":"../node_modules/@thi.ng/associative/union.js","./without-keys":"../node_modules/@thi.ng/associative/without-keys.js"}],"../node_modules/@styled-system/css/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.css = exports.responsive = exports.get = void 0;

var _scales;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // based on https://github.com/developit/dlv


var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};

exports.get = get;
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = (_scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles'
}, _scales["borderTopLeftRadius"] = 'radii', _scales["borderTopRightRadius"] = 'radii', _scales.borderBottomWidth = 'borderWidths', _scales.borderBottomColor = 'colors', _scales.borderBottomStyle = 'borderStyles', _scales["borderBottomLeftRadius"] = 'radii', _scales["borderBottomRightRadius"] = 'radii', _scales.borderLeftWidth = 'borderWidths', _scales.borderLeftColor = 'colors', _scales.borderLeftStyle = 'borderStyles', _scales.borderRightWidth = 'borderWidths', _scales.borderRightColor = 'colors', _scales.borderRightStyle = 'borderStyles', _scales.boxShadow = 'shadows', _scales.textShadow = 'shadows', _scales.zIndex = 'zIndices', _scales.width = 'sizes', _scales.minWidth = 'sizes', _scales.maxWidth = 'sizes', _scales.height = 'sizes', _scales.minHeight = 'sizes', _scales.maxHeight = 'sizes', _scales.flexBasis = 'sizes', _scales.size = 'sizes', _scales.fill = 'colors', _scales.stroke = 'colors', _scales);

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});

var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];
        if (value[i] == null) continue;

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        next[media][key] = value[i];
      }
    }

    return next;
  };
};

exports.responsive = responsive;

var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get(aliases, key, key);
      var scaleName = get(scales, prop);
      var scale = get(theme, scaleName, get(theme, prop, {}));
      var transform = get(transforms, prop, get);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

exports.css = css;
var _default = css;
exports.default = _default;
},{}],"../node_modules/decamelize/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (str, sep) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  sep = typeof sep === 'undefined' ? '_' : sep;
  return str.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2').toLowerCase();
};
},{}],"../node_modules/map-obj/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (obj, cb) {
  var ret = {};
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var res = cb(key, obj[key], obj);
    ret[res[0]] = res[1];
  }

  return ret;
};
},{}],"../node_modules/decamelize-keys-deep/index.js":[function(require,module,exports) {
var decamelize = require("decamelize");
var mapObj = require("map-obj");

module.exports = function decamelizeKeysDeep(obj, options) {
  // Any falsy, which includes `null` whose typeof is `object`.
  if (!obj) {
    return obj;
  }
  // Date, whose typeof is `object` too.
  if (obj instanceof Date) {
    return obj;
  }
  // Array, whose typeof is `object` too.
  if (Array.isArray(obj)) {
    return obj.map(function(element) {
      return decamelizeKeysDeep(element, options);
    });
  }
  // So, if this is still an `object`, we might be interested in it.
  if (typeof obj === "object") {
    return mapObj(obj, function(key, value) {
      var newKey = decamelize(key, options);
      if (key !== newKey && newKey in obj) {
        throw new Error("Decamelized key `" + newKey + "` would overwrite existing key of the given JSON object");
      }
      return [newKey, decamelizeKeysDeep(value, options)];
    });
  }
  // Something else like a String or Number.
  return obj;
}

},{"decamelize":"../node_modules/decamelize/index.js","map-obj":"../node_modules/map-obj/index.js"}],"styles/fire-styles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireStyles = void 0;

var A = _interopRequireWildcard(require("@thi.ng/associative"));

var rand = _interopRequireWildcard(require("@thi.ng/random"));

var _atom = require("@thi.ng/atom");

var _paths = require("@thi.ng/paths");

var _css = _interopRequireDefault(require("@styled-system/css"));

var _decamelizeKeysDeep = _interopRequireDefault(require("decamelize-keys-deep"));

var C = _interopRequireWildcard(require("@thi.ng/checks"));

var E = _interopRequireWildcard(require("@thi.ng/equiv"));

var _hiccupCss = require("@thi.ng/hiccup-css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *@todo: Test with Router.. tomato
 **/
var queries_atom = new _atom.Atom({});
var queries_table = new _atom.Transacted(queries_atom);
queries_table.begin();

var swap_depth_0 = function swap_depth_0(atom, hier) {
  return atom.swap(function (v) {
    return _objectSpread(_defineProperty({}, hier, {}), v);
  });
};

var swap_depth_1 = function swap_depth_1(atom, hash, hier) {
  return atom.swapIn(hier, function (v) {
    return _objectSpread(_defineProperty({}, hash, {}), v);
  });
};

var swap_depth_2 = function swap_depth_2(atom, spec, hash, hier) {
  return atom.swapIn([hier, hash], function (v) {
    return _objectSpread({}, spec, {}, v);
  });
};
/**
 * @param {Atom} atom - a Transacted Atom
 * @param {Object} spec - CSS style object
 * @param {string} hash - a unique class-name
 * @param {string} heir - if a nested rule, the parent
 * Takes in a transacted atom and stores CSS rules
 * so that shared heirarchies can be reused instead of
 * naively storing every pseudo-selector and media-query
 * reduntantly for every class-name
 * */


var mergeInStyles = function mergeInStyles(atom, spec, hash, hier) {
  var state = atom.deref();
  var lv_1s = Object.keys(state);
  var has_lv_1s = !!state[hier];
  var has_lv_2s = has_lv_1s && !!state[hier][hash];
  return has_lv_1s && has_lv_2s ? swap_depth_2(atom, spec, hash, hier) : has_lv_1s ? (swap_depth_1(atom, hash, hier), swap_depth_2(atom, spec, hash, hier)) : (swap_depth_0(atom, hier), swap_depth_1(atom, hash, hier), swap_depth_2(atom, spec, hash, hier));
};
/**
 * A HOF that takes in a theme object and returns
 * a custom hash. This hash is used to save css rules
 * under a unique class-name.
 * This function tests against a few rules to decide
 * how the CSS should be stored in the Atom
 * */


var fireStyles = function fireStyles(theme) {
  return function (styles, classname) {
    var hash = "".concat(classname, "_").concat(rand.randomID(5, 'id-', '0123456789abcdefghijklmnopqrstuvwxyz'));
    var dot_hash = ".".concat(hash);
    var entries = Object.entries((0, _decamelizeKeysDeep.default)((0, _css.default)(styles)(theme), '-'));

    for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
      var _entries$_i = _slicedToArray(_entries[_i], 2),
          prop = _entries$_i[0],
          spec = _entries$_i[1];

      if (C.isObject(spec) && prop.slice(0, 1) === '&') {
        // pseudo selector
        mergeInStyles(queries_table, spec, dot_hash, prop);
      } else if (C.isObject(spec) && prop.slice(0, 6) === '@media') {
        // media query
        var rgx = /\(.*?\)/g;
        var media_query = prop.match(rgx)[0].slice(1, -1);
        mergeInStyles(queries_table, spec, dot_hash, media_query);
      } else {
        // nested object
        mergeInStyles(queries_table, _defineProperty({}, prop, spec), dot_hash);
      }
    }

    return hash;
  };
};
/**
 * takes a CSS Transacted Atom and commits all
 * pending mutations at once, then buckets the
 * CSS in order so that precedence rules are
 * applied correctly (e.g., media-queries are reversed)
 * when mapped over in final application
 * */


exports.fireStyles = fireStyles;

var unwrap_mediaQueries = function unwrap_mediaQueries(atom) {
  atom.commit();
  var init = queries_atom.deref();
  var entries = Object.entries(init); // console.table(entries)

  var m_queries = [];
  var css_basics = [];
  var css_pseudos = [];

  for (var _i2 = 0, _entries2 = entries; _i2 < _entries2.length; _i2++) {
    var entry = _entries2[_i2];
    var query = entry[0];
    var hashes = entry[1];
    var hash_list = Object.entries(hashes)[0]; // console.log('hash_list:', hash_list)

    var _query$split = query.split(':'),
        _query$split2 = _slicedToArray(_query$split, 2),
        m = _query$split2[0],
        q = _query$split2[1];

    if (m === '&') {
      css_pseudos.push([hash_list[0], [":".concat(q), hash_list[1]]]);
    } else if (q) {
      m_queries.push([(0, _hiccupCss.at_media)(_defineProperty({
        screen: true
      }, m, q), hash_list)]);
    } else {
      css_basics.push([hash_list]);
    }
  }

  return [m_queries.reverse(), css_pseudos, css_basics];
};
/**
 * Upon DOM content load, unwraps the CSS Atom and
 * injects styles for all registered components into
 * the <head> of the document
 * */


window.addEventListener('DOMContentLoaded', function (ev) {
  var ordered = unwrap_mediaQueries(queries_table);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ordered[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ready = _step.value;
      (0, _hiccupCss.injectStyleSheet)((0, _hiccupCss.css)(ready), {
        format: _hiccupCss.PRETTY
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
},{"@thi.ng/associative":"../node_modules/@thi.ng/associative/index.js","@thi.ng/random":"../node_modules/@thi.ng/random/index.js","@thi.ng/atom":"../node_modules/@thi.ng/atom/index.js","@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","@styled-system/css":"../node_modules/@styled-system/css/dist/index.esm.js","decamelize-keys-deep":"../node_modules/decamelize-keys-deep/index.js","@thi.ng/checks":"../node_modules/@thi.ng/checks/index.js","@thi.ng/equiv":"../node_modules/@thi.ng/equiv/index.js","@thi.ng/hiccup-css":"../node_modules/@thi.ng/hiccup-css/index.js"}],"styles/theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = void 0;
var theme = {
  borderWidths: {
    '0': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
    px: '1px'
  },
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: [null, '#f7fafc', '#edf2f7', '#e2e8f0', '#cbd5e0', '#a0aec0', '#718096', '#4a5568', '#2d3748', '#1a202c'],
    red: [null, '#fff5f5', '#fed7d7', '#feb2b2', '#fc8181', '#f56565', '#e53e3e', '#c53030', '#9b2c2c', '#742a2a'],
    orange: [null, '#fffaf0', '#feebc8', '#fbd38d', '#f6ad55', '#ed8936', '#dd6b20', '#c05621', '#9c4221', '#7b341e'],
    yellow: [null, '#fffff0', '#fefcbf', '#faf089', '#f6e05e', '#ecc94b', '#d69e2e', '#b7791f', '#975a16', '#744210'],
    green: [null, '#f0fff4', '#c6f6d5', '#9ae6b4', '#68d391', '#48bb78', '#38a169', '#2f855a', '#276749', '#22543d'],
    teal: [null, '#e6fffa', '#b2f5ea', '#81e6d9', '#4fd1c5', '#38b2ac', '#319795', '#2c7a7b', '#285e61', '#234e52'],
    blue: [null, '#ebf8ff', '#bee3f8', '#90cdf4', '#63b3ed', '#4299e1', '#3182ce', '#2b6cb0', '#2c5282', '#2a4365'],
    indigo: [null, '#ebf4ff', '#c3dafe', '#a3bffa', '#7f9cf5', '#667eea', '#5a67d8', '#4c51bf', '#434190', '#3c366b'],
    purple: [null, '#faf5ff', '#e9d8fd', '#d6bcfa', '#b794f4', '#9f7aea', '#805ad5', '#6b46c1', '#553c9a', '#44337a'],
    pink: [null, '#fff5f7', '#fed7e2', '#fbb6ce', '#f687b3', '#ed64a6', '#d53f8c', '#b83280', '#97266d', '#702459'],
    grayDark: '#2d3748',
    text: '#2d3748',
    background: '#fff',
    primary: '#2b6cb0',
    primaryHover: '#2c5282',
    secondary: '#718096',
    muted: '#e2e8f0',
    success: '#9ae6b4',
    info: '#63b3ed',
    warning: '#faf089',
    danger: '#feb2b2',
    light: '#f7fafc',
    dark: '#2d3748',
    textMuted: '#718096'
  },
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body: '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: 'inherit',
    monospace: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: ['0.875rem', '1rem', '1.25rem', '1.5rem', '1.875rem', '2.25rem', '3rem', '4rem', '4.5rem'],
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    body: '400',
    heading: '700'
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    body: '1.625',
    heading: '1.25'
  },
  sizes: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
    px: '1px',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screenHeight: '100vh',
    screenWidth: '100vw'
  },
  shadows: {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none'
  },
  space: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem'],
  radii: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    lg: '0.5rem',
    full: '9999px'
  },
  zIndices: {
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50',
    auto: 'auto'
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 6,
      mt: 2
    },
    h2: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 5,
      mt: 2
    },
    h3: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 4,
      mt: 3
    },
    h4: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 3
    },
    h5: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 1,
      fontSize: 2
    },
    h6: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      m: 0,
      mb: 2,
      fontSize: 1
    },
    code: {},
    pre: {},
    hr: {
      bg: 'muted',
      border: 0,
      height: '1px',
      m: 3
    }
  },
  buttons: {
    simple: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primaryHover',
        border: 'solid',
        borderColor: 'red.3'
      }
    },
    pill: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'full',
      '&:hover': {
        backgroundColor: 'primaryHover'
      }
    },
    outline: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary',
      color: 'primary',
      fontWeight: 'semibold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'white',
        borderColor: 'transparent'
      }
    },
    bordered: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primaryHover',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      '&:hover': {
        backgroundColor: 'primaryHover'
      }
    },
    disabled: {
      py: 2,
      px: 3,
      cursor: 'not-allowed',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      opacity: 0.5,
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default'
    },
    '3D': {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'primary',
      border: 'none',
      borderBottomWidth: '4px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primaryHover',
      color: 'white',
      fontWeight: 'bold',
      borderRadius: 'default',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-1px)'
      }
    },
    elevated: {
      py: 2,
      px: 3,
      cursor: 'pointer',
      fontSize: '100%',
      lineHeight: 'inherit',
      backgroundColor: 'white',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'gray.4',
      color: 'text',
      fontWeight: 'bold',
      borderRadius: 'default',
      boxShadow: 'default',
      '&:hover': {
        backgroundColor: 'gray.1'
      }
    }
  },
  inputs: {
    shadow: {
      py: 2,
      px: 3,
      fontSize: '100%',
      borderRadius: 'default',
      appearance: 'none',
      lineHeight: 'tight',
      border: 'none',
      color: 'gray.7',
      boxShadow: 'default',
      '&:focus': {
        outline: 'none',
        boxShadow: 'outline'
      }
    },
    inline: {
      py: 2,
      px: 3,
      fontSize: '100%',
      borderRadius: 'default',
      appearance: 'none',
      lineHeight: 'tight',
      backgroundColor: 'gray.2',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'gray.2',
      color: 'gray.7',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        backgroundColor: 'white'
      }
    },
    underline: {
      py: 2,
      px: 3,
      fontSize: '100%',
      borderRadius: '0px',
      appearance: 'none',
      lineHeight: 'tight',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'primary',
      color: 'gray.7',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary',
        backgroundColor: 'white'
      }
    }
  }
};
exports.theme = theme;
},{}],"styles/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fireStyles = require("./fire-styles");

Object.keys(_fireStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fireStyles[key];
    }
  });
});

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _theme[key];
    }
  });
});
},{"./fire-styles":"styles/fire-styles.js","./theme":"styles/theme.js"}],"components/button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports.button_x = void 0;

var _paths = require("@thi.ng/paths");

var _hiccupCss = require("@thi.ng/hiccup-css");

var _styles = require("../styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var default_cfg = {
  tag: 'button',
  tagDisabled: 'span'
};
var name = 'button';
var att = {
  onclick: function onclick() {
    return console.warn("no handler assigned to button 'onclick' event");
  } // a HOF that takes a config and returns an HDOM node function

};

var button_x = function button_x(thm, cfg) {
  cfg = _objectSpread({}, default_cfg, {}, cfg);
  var hash = (0, _styles.fireStyles)(thm)(_objectSpread({}, thm.buttons.simple, {
    fontSize: ['23px', '29px', '52px', '14px'],
    m: ['18px', '24px', '48px']
  }), name); // the returned node has some default styles and

  return function (ctx, attrs) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    return [cfg.tag, _objectSpread({}, att, {
      class: hash
    }, attrs)].concat(children);
  };
};

exports.button_x = button_x;
var button = button_x(_styles.theme);
exports.button = button;
},{"@thi.ng/paths":"../node_modules/@thi.ng/paths/index.js","@thi.ng/hiccup-css":"../node_modules/@thi.ng/hiccup-css/index.js","../styles":"styles/index.js"}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = require("./button");

Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _button[key];
    }
  });
});
},{"./button":"components/button.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _hdom = require("@thi.ng/hdom");

var _bus = require("./bus");

var _components = require("./components");

var _styles = require("./styles");

(0, _hdom.start)(function (ctx) {
  return ctx.bus.processQueue() ? ['div', [_components.button, null, 'hello world'], ['div', {
    style: {
      margin: '10px',
      height: '10px'
    }
  }], [_components.button, null, 'hello again']] : null;
}, {
  ctx: {
    state: _bus.state,
    bus: _bus.bus,
    theme: _styles.theme
  }
});

_bus.bus.dispatch(['init']);
},{"@thi.ng/hdom":"../node_modules/@thi.ng/hdom/index.js","./bus":"bus/index.js","./components":"components/index.js","./styles":"styles/index.js"}],"../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64928" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Local/nvs/node/10.16.2/x64/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map