/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = __webpack_require__(18);

var _MessageFactory = __webpack_require__(15);

var _MessageFactory2 = _interopRequireDefault(_MessageFactory);

var _Dirac = __webpack_require__(8);

var _Dirac2 = _interopRequireDefault(_Dirac);

var _MessageAnalyzer = __webpack_require__(12);

var _MessageAnalyzer2 = _interopRequireDefault(_MessageAnalyzer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var DiracStore = (_class = function () {
  function DiracStore() {
    _classCallCheck(this, DiracStore);

    _initDefineProp(this, "messages", _descriptor, this);

    _initDefineProp(this, "diracData", _descriptor2, this);

    _initDefineProp(this, "userData", _descriptor3, this);
  }

  _createClass(DiracStore, [{
    key: "addMessage",


    // methods
    value: function addMessage(message) {
      this.messages.unshift(message);
    }
  }, {
    key: "dispatch",
    value: function dispatch(userInput) {
      var message = _MessageAnalyzer2.default.analyze(userInput);
      this.addMessage(message);
      setTimeout(function () {
        var response = _Dirac2.default.respond(message);
        if (response.shouldAddMessage) {
          this.registerDiracInput(response.content);
        }
      }.bind(this), 1000);
    }
  }, {
    key: "registerDiracInput",
    value: function registerDiracInput(input) {
      var responseMessage = _MessageFactory2.default.createDiracMessageModel(input);
      this.addMessage(responseMessage);
    }
  }, {
    key: "changeDiracName",
    value: function changeDiracName(newName) {
      this.diracData.name = newName;
    }
  }, {
    key: "changeUserName",
    value: function changeUserName(newName) {
      this.userData.name = newName;
    }
  }]);

  return DiracStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "messages", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [{
      content: 'Say hi to Dirac, or anything else.'
    }, {
      content: 'He will do his best to give a proper response...'
    }];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "diracData", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      name: 'Dirac'
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "userData", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      name: '' };
  }
})), _class);


var store = window.store = new DiracStore();

exports.default = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringMatcher = function () {
  function StringMatcher() {
    _classCallCheck(this, StringMatcher);
  }

  _createClass(StringMatcher, [{
    key: "itMatches",
    value: function itMatches(words, text) {
      return words.join(" ") == text;
    }
  }, {
    key: "endsWith",
    value: function endsWith(words, ending) {
      var expLastWords = ending.toLowerCase().split(" ");
      var lastWords = words.slice(words.length - expLastWords.length, words.length);
      return lastWords.join(" ") == ending;
    }
  }, {
    key: "startsWith",
    value: function startsWith(words, beginning) {
      var beginWords = beginning.toLowerCase().split(" ");
      var lastWords = words.slice(0, beginWords.length);
      return lastWords.join(" ") == beginning;
    }
  }]);

  return StringMatcher;
}();

exports.default = new StringMatcher();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerCaller = function () {
  function ServerCaller() {
    _classCallCheck(this, ServerCaller);
  }

  _createClass(ServerCaller, [{
    key: "testGetRequest",
    value: function testGetRequest() {
      _axios2.default.get('testget').then(function (resp) {
        console.log(JSON.stringify(resp));
        store.registerDiracInput(resp.data.content);
      }).catch(function (err) {
        store.registerDiracInput("The ajax get test failed.");
        console.log(err);
      });
    }
  }, {
    key: "testPostRequest",
    value: function testPostRequest() {
      console.log('now going to call /ajaxpost');
      _axios2.default.post('testpost').then(function (resp) {
        console.log(JSON.stringify(resp));
        store.registerDiracInput(resp.data.content);
      }).catch(function (err) {
        store.registerDiracInput("The ajax post test failed.");
        console.log(err);
      });
    }
  }, {
    key: "callWithMessage",
    value: function callWithMessage(message) {
      _axios2.default.post('respond', message).then(function (resp) {
        store.registerDiracInput(resp.data.content);
      }).catch(function (err) {
        store.registerDiracInput("I'm sorry, something appears to be going wrong when I try to connect to the server.");
        console.log(err);
      });
    }
  }]);

  return ServerCaller;
}();

exports.default = new ServerCaller();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeFormatter = function () {
  function TimeFormatter() {
    _classCallCheck(this, TimeFormatter);
  }

  _createClass(TimeFormatter, [{
    key: "getTime",
    value: function getTime() {
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var date = new Date();
      return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    }
  }]);

  return TimeFormatter;
}();

exports.default = new TimeFormatter();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(19);

var _Message = __webpack_require__(7);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (0, _mobxReact.observer)(_class = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.keyPress = _this.keyPress.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "keyPress",
    value: function keyPress(e) {
      var event = e || window.event;
      var charCode = event.which || event.keyCode;
      //console.log('key press event');
      if (charCode == '13') {
        //console.log('enter event');
        this.props.store.dispatch(e.target.value);
        e.target.value = "";
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var env = "production";
      var containerColor = '#ddd';
      var name = this.props.store.diracData.name;
      var title = env == 'development' ? name + ' in development' : name;
      var mainContainerStyle = {
        width: '960px',
        paddingTop: '16px',
        paddingBottom: '32px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: containerColor
      };
      var chatContainerStyle = {
        width: '540px',
        margin: 'auto',
        border: '1px solid #333'
      };
      var titleStyle = {
        padding: '16px'
      };
      var inputWrapperStyle = {
        padding: '20px'
      };
      var inputStyle = {
        width: '100%',
        fontSize: 'large',
        padding: '8px'
      };
      var messageContainerStyle = {
        padding: '20px',
        fontSize: 'large'
      };
      return _react2.default.createElement(
        "div",
        { style: mainContainerStyle, className: "border-box" },
        _react2.default.createElement(
          "h1",
          { style: titleStyle },
          title
        ),
        _react2.default.createElement(
          "div",
          { style: chatContainerStyle },
          _react2.default.createElement(
            "div",
            { id: "form" },
            _react2.default.createElement(
              "div",
              { style: inputWrapperStyle },
              _react2.default.createElement("input", { style: inputStyle, type: "text", onKeyPress: this.keyPress })
            )
          ),
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "div",
            { id: "lines", style: messageContainerStyle },
            _react2.default.createElement(
              "ul",
              null,
              this.props.store.messages.map(function (m, index) {
                return _react2.default.createElement(_Message2.default, { message: m, key: index });
              })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class;

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageStyle = {
  background: 'white',
  padding: '12px',
  borderRadius: '4px',
  marginBottom: '8px',
  boxShadow: '2px 2px grey'
};

var diracStyle = {
  fontWeight: "bold",
  fontFamily: "Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace"
};

var Message = function Message(_ref) {
  var message = _ref.message;
  return _react2.default.createElement(
    'li',
    { className: 'message-li', style: messageStyle },
    _react2.default.createElement(
      'span',
      { style: diracStyle },
      message.user === "Dirac" && "Dirac",
      message.user && "⟩ "
    ),
    message.content
  );
};

exports.default = Message;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DiracStore = __webpack_require__(0);

var _DiracStore2 = _interopRequireDefault(_DiracStore);

var _DiracQuestionResponder = __webpack_require__(10);

var _DiracQuestionResponder2 = _interopRequireDefault(_DiracQuestionResponder);

var _DiracStatementResponder = __webpack_require__(11);

var _DiracStatementResponder2 = _interopRequireDefault(_DiracStatementResponder);

var _DiracCommandResponder = __webpack_require__(9);

var _DiracCommandResponder2 = _interopRequireDefault(_DiracCommandResponder);

var _TimeFormatter = __webpack_require__(3);

var _TimeFormatter2 = _interopRequireDefault(_TimeFormatter);

var _ServerCaller = __webpack_require__(2);

var _ServerCaller2 = _interopRequireDefault(_ServerCaller);

var _StringMatcher = __webpack_require__(1);

var _StringMatcher2 = _interopRequireDefault(_StringMatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dirac = function () {
  function Dirac() {
    _classCallCheck(this, Dirac);

    this.nothingCounter = 0;
    this.respondStop = false;
  }

  // Dirac entry point


  _createClass(Dirac, [{
    key: "respond",
    value: function respond(message) {
      var response = {
        content: "I am sorry, I am unable to respond to that message.", // default response
        shouldAddMessage: true // should the message be added to the store?
      };
      if (this.respondStop) {
        response.content = "";
        if (message.content == "I'm sorry" || message.content == "sorry" || message.content == "I am sorry" || message.content == "my apologies" || message.content == "I apologize") {
          response.content = "Alright then.";
          this.respondStop = false;
        }
        return response;
      }
      if (message.words.length == 0) {
        var reps = ["I can't respond to nothing.", "Please write something.", "You need to write something if you want me to respond."];
        var reps2 = ["Do you want to talk to me or fool around?", "Are you just going to keep whitespacing me all day?"];
        var reps3 = ["...", "Great.", "Good for you!", "Wow.", "Impressive."];
        var reps4 = ["Are you enjoying yourself?", "Two can play at that game you know.", "I am going to stop responding soon."];
        this.nothingCounter++;
        var arr = reps;
        if (this.nothingCounter > 5) arr = reps2;
        if (this.nothingCounter > 6) arr = reps3;
        if (this.nothingCounter > 9) arr = reps4;
        response.content = arr[Math.floor(Math.random() * arr.length)];
        if (this.nothingCounter > 12) {
          this.respondStop = true;
          response.content = "Now you've done it!";
        }
        return response;
      }
      this.nothingCounter = 0;
      switch (message.type) {
        case "question":
          _DiracQuestionResponder2.default.respond(message, response);
          break;
        case "statement":
          response.content = "I registered a statement";
          break;
        case "command":
          _DiracCommandResponder2.default.respond(message, response);
          break;
        case "calculation":
          var re = /\s*(-?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/g;
          var calc = message.content.match(re)[0];
          response.content = "I registered a calculation: " + calc + " = " + eval(calc);
          break;
        case "unknown":
          if (message.words.length == 1) {
            switch (message.words.length) {
              case 1:
                this.respondToOneWord(message.words[0], response);
                break;
              case 2:
                this.respondToTwoWords(message, response);
                break;
              default:
                this.respondToSentence(message, response);
                break;
            }
          }
          break;
      }

      return response;
    }
  }, {
    key: "respondToSentence",
    value: function respondToSentence(message, response) {
      if (_StringMatcher2.default.startsWith(message.words, "your name is")) {
        var newName = message.words.slice(3, message.words.length).join(" ");
        _DiracStore2.default.changeDiracName(newName);
        response.content = "Okay, I am now " + newName;
      }
    }
  }, {
    key: "respondToTwoWords",
    value: function respondToTwoWords(message, response) {
      response.content = "I'm sorry, I don't respond to sentences of two words.";
    }
  }, {
    key: "respondToOneWord",
    value: function respondToOneWord(word, response) {
      response.content = "I don't understand that word.";
      switch (word.toLowerCase()) {
        case 'greetings':
        case 'hello':
        case 'hi':
        case 'sup':
        case 'yo':
        case 'eyo':
          response.content = 'Hello.';
          break;
        case 'time':
          response.content = _TimeFormatter2.default.getTime();
          break;
        case 'date':
          response.content = _TimeFormatter2.default.getDate();
          break;
        case 'testget':
          response.shouldAddMessage = false;
          _ServerCaller2.default.testGetRequest();
          break;
        case 'testpost':
          response.shouldAddMessage = false;
          _ServerCaller2.default.testPostRequest();
          break;
        case 'why':
        case 'what':
        case 'where':
        case 'who':
        case 'when':
        case 'how':
          response.content = word + " what?";
          break;
        case 'shit':
        case 'fuck':
        case 'asshole':
        case 'cunt':
        case 'bitch':
          response.content = "Mind your language.";
      }
    }
  }]);

  return Dirac;
}();

exports.default = new Dirac();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StringMatcher = __webpack_require__(1);

var _StringMatcher2 = _interopRequireDefault(_StringMatcher);

var _jokes = __webpack_require__(14);

var _jokes2 = _interopRequireDefault(_jokes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiracCommandResponder = function () {
  function DiracCommandResponder() {
    _classCallCheck(this, DiracCommandResponder);
  }

  _createClass(DiracCommandResponder, [{
    key: "respond",
    value: function respond(message, response) {
      if (_StringMatcher2.default.itMatches(message.words, "tell me a joke")) {
        response.content = _jokes2.default[Math.floor(Math.random() * _jokes2.default.length)];
      } else {
        response.content = "I registered a command.";
      }
    }
  }]);

  return DiracCommandResponder;
}();

exports.default = new DiracCommandResponder();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TimeFormatter = __webpack_require__(3);

var _TimeFormatter2 = _interopRequireDefault(_TimeFormatter);

var _DiracStore = __webpack_require__(0);

var _DiracStore2 = _interopRequireDefault(_DiracStore);

var _ServerCaller = __webpack_require__(2);

var _ServerCaller2 = _interopRequireDefault(_ServerCaller);

var _StringMatcher = __webpack_require__(1);

var _StringMatcher2 = _interopRequireDefault(_StringMatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiracQuestionResponder = function () {
  function DiracQuestionResponder() {
    _classCallCheck(this, DiracQuestionResponder);
  }

  _createClass(DiracQuestionResponder, [{
    key: "callServer",


    // private
    value: function callServer(message, response) {
      _ServerCaller2.default.callWithMessage(message);
      response.shouldAddMessage = false;
    }

    // public

  }, {
    key: "respond",
    value: function respond(message, response) {
      switch (message.words[0]) {
        case "what":
          this.what(message, response);
          break;
        case "why":
          this.why(message, response);
          break;
        case "where":
          this.where(message, response);
          break;
        case "when":
          this.when(message, response);
          break;
        case "how":
          this.how(message, response);
          break;
        case "who":
          this.who(message, response);
          break;
      }
    }
  }, {
    key: "what",
    value: function what(message, response) {
      var formattedWords = message.words;
      switch (formattedWords[1]) {
        case "are":
          if (formattedWords.length === 3 && formattedWords[2] === "you") response = "I am an AI.";
          break;
        case "s":
        case "is":
          if (formattedWords.length === 4 && _StringMatcher2.default.endsWith(formattedWords, "the time")) {
            response.content = _TimeFormatter2.default.getTime();
          } else if (_StringMatcher2.default.itMatches(formattedWords, "what is your name")) {
            response.content = "My name is " + _DiracStore2.default.diracData.name + ".";
          } else {
            this.callServer(message, response);
          }
          break;
        case "was":
        case "were":
          this.callServer(message, response);
          break;
        case "time":
          if (_StringMatcher2.default.itMatches(formattedWords, "what time is it")) {
            response.content = _TimeFormatter2.default.getTime();
          }
          break;
        case "can":
          if (message.words.length == 4 && (_StringMatcher2.default.endsWith(message.words, "you do") || _StringMatcher2.default.endsWith(message.words, "you say"))) {
            response.content = "I can do simple calculations, tell the time and look stuff up on wikipedia.";
          }
      }
    }
  }, {
    key: "who",
    value: function who(message, response) {
      var formattedWords = message.words;
      response.content = "I don't know.";
      switch (formattedWords[1]) {
        case "are":
          if (formattedWords.length === 3 && formattedWords[2] === "you") response.content = "I am " + _DiracStore2.default.diracData.name + ".";else {
            this.callServer(message, response);
          }
          break;
        case "s":
        case "is":
        case "was":
        case "were":
          this.callServer(message, response);
          break;
      }
    }
  }, {
    key: "why",
    value: function why(message, response) {
      var formattedWords = message.words;
      response.content = "I don't know.";
    }
  }, {
    key: "when",
    value: function when(message, response) {
      var formattedWords = message.words;
      response.content = "I don't know.";
    }
  }, {
    key: "where",
    value: function where(message, response) {
      var formattedWords = message.words;
      response.content = "I don't know.";
    }
  }, {
    key: "how",
    value: function how(message, response) {
      var formattedWords = message.words;
      response.content = "I don't know.";
      switch (formattedWords[1]) {
        case "are":
          if (_StringMatcher2.default.itMatches(formattedWords, "how are you doing") || _StringMatcher2.default.itMatches(formattedWords, "how are you")) response.content = "I am fine, thank you.";
          break;
        case "s":
        case "is":
        case "was":
          // look it up
          break;
      }
    }
  }]);

  return DiracQuestionResponder;
}();

exports.default = new DiracQuestionResponder();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StringMatcher = __webpack_require__(1);

var _StringMatcher2 = _interopRequireDefault(_StringMatcher);

var _DiracStore = __webpack_require__(0);

var _DiracStore2 = _interopRequireDefault(_DiracStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiracStatementResponder = function () {
  function DiracStatementResponder() {
    _classCallCheck(this, DiracStatementResponder);
  }

  _createClass(DiracStatementResponder, [{
    key: 'I',
    value: function I(message, response) {
      response.content = "OK";
    }
  }, {
    key: 'my',
    value: function my(message, response) {
      if (_StringMatcher2.default.startsWith(message.words, "my name is")) {
        var rest = message.words.slice(3, message.words.length).join(" ");
        if (_DiracStore2.default.userData.name) {
          response.content = "I have your name registered as: " + rest + ". Do you want me to change it?";
        } else {
          _DiracStore2.default.changeUserName(rest);
          response.content = "Pleased to meet you, " + rest + ".";
        }
      } else response.content = "OK";
    }
  }]);

  return DiracStatementResponder;
}();

exports.default = new DiracStatementResponder();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Uncontract = __webpack_require__(13);

var _Uncontract2 = _interopRequireDefault(_Uncontract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageAnalyzer = function () {
  function MessageAnalyzer() {
    _classCallCheck(this, MessageAnalyzer);
  }

  _createClass(MessageAnalyzer, [{
    key: "analyze",
    value: function analyze(input) {
      var words = this.format(input);
      console.log('words: ' + JSON.stringify(words));
      var messageType = this.determineMessageType(input, words);
      var message = {
        content: input,
        formattedContent: words.join(" "),
        user: "Default",
        words: words,
        type: messageType
      };
      return message;
    }

    // formats raw user input to an array of words

  }, {
    key: "format",
    value: function format(input) {
      // make an array of lowercase words without punctuation
      var rawWords = input.toLowerCase().split(/[ .,"<>?.!;:]/g).filter(function (n) {
        return n != undefined && n != "";
      });
      var words = (0, _Uncontract2.default)(rawWords);
      return words;
    }

    // question, statement, command, calculation

  }, {
    key: "determineMessageType",
    value: function determineMessageType(input, words) {
      var messageType = "unknown";
      switch (words[0]) {
        case "what":
        case "why":
        case "where":
        case "when":
        case "how":
        case "who":
          messageType = "question";
          break;
        case "tell":
        case "do":
        case "say":
          messageType = "command";
          break;
      }

      // this regex checks if the message ends with a simple calculation
      var re = /\s*(-?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;
      if (input.match(re)) {
        messageType = "calculation";
      }
      return messageType;
    }
  }]);

  return MessageAnalyzer;
}();

exports.default = new MessageAnalyzer();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// ambiguous:
// hell shell ill well id

exports.default = function (words) {
  console.log();
  var formattedWords = [];
  words.forEach(function (word) {
    switch (word) {
      // is
      case "whats":
      case "whys":
      case "wheres":
      case "whens":
      case "hows":
      case "whos":
      case "theres":
      case "shes":
      case "hes":
        var uncontracted = word.slice(0, -1);
        formattedWords.push(uncontracted);
        formattedWords.push("is");
        break;
      case "what's":
      case "why's":
      case "where's":
      case "when's":
      case "how's":
      case "who's":
      case "there's":
      case "she's":
      case "he's":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("is");
        break;
      // have
      case "ive":
      case "youve":
      case "weve":
      case "theyve":
      case "couldve":
      case "mustve":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("have");
        break;
      case "i've":
      case "you've":
      case "we've":
      case "they've":
      case "could've":
      case "must've":
        var uncontracted = word.slice(0, -3);
        formattedWords.push(uncontracted);
        formattedWords.push("have");
        break;
      // will
      case "i'll":
      case "you'll":
      case "we'll":
      case "he'll":
      case "she'll":
      case "how'll":
      case "it'll":
      case "who'll":
        var uncontracted = word.slice(0, -3);
        formattedWords.push(uncontracted);
        formattedWords.push("will");
        break;
      // would
      case "youd":
        var uncontracted = word.slice(0, -1);
        formattedWords.push(uncontracted);
        formattedWords.push("would");
        break;
      case "i'd":
      case "he'd":
      case "she'd":
      case "it'd":
      case "they'd":
      case "you'd":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("would");
        break;
      // not
      case "dont":
      case "doesnt":
      case "didnt":
      case "couldnt":
      case "hadnt":
      case "neednt":
      case "isnt":
      case "shouldnt":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("not");
        break;
      case "don't":
      case "doesn't":
      case "didn't":
      case "couldn't":
      case "hadn't":
      case "needn't":
      case "isn't":
      case "shouldn't":
        var uncontracted = word.slice(0, -3);
        formattedWords.push(uncontracted);
        formattedWords.push("not");
        break;
      case "can't":
      case "cant":
        formattedWords.push("can");
        formattedWords.push("not");
      case "won't":
      case "wont":
        formattedWords.push("will");
        formattedWords.push("not");
      // extra
      case "i'm":
      case "im":
        formattedWords.push("i");
        formattedWords.push("am");
      default:
        formattedWords.push(word);
    }
  });
  return formattedWords;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["What goes up and down but does not move? Stairs.", "Where should a 500 pound alien go? On a diet.", "What did one toilet say to the other? you look flushed.", "What did one wall say to the other wall? I'll meet you at the corner."];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageFactory = function () {
  function MessageFactory() {
    _classCallCheck(this, MessageFactory);
  }

  _createClass(MessageFactory, [{
    key: 'createMessageModel',
    value: function createMessageModel(line) {
      return {
        content: line,
        user: 'Default'
      };
    }
  }, {
    key: 'createDiracMessageModel',
    value: function createDiracMessageModel(line) {
      return {
        content: line,
        user: 'Dirac'
      };
    }
  }]);

  return MessageFactory;
}();

exports.default = new MessageFactory();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(6);

var _DiracStore = __webpack_require__(0);

var _DiracStore2 = _interopRequireDefault(_DiracStore);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');
(0, _reactDom.render)(React.createElement(_App2.default, { store: _DiracStore2.default }), app);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = mobx;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = mobxReact;

/***/ })
/******/ ]);