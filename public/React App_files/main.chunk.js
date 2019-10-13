(window["webpackJsonpiweb_quiz"] = window["webpackJsonpiweb_quiz"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #09d3ac;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\nheader {\n\tbackground-color: #145A32;\n\tcolor: white;\n    /*height: 60px;*/\n\tpadding: 15px;\n\tmargin-bottom: 25px;\n\tpadding-bottom: 15px;\n\tfont-size: 25px;\n\n\tfont-family: 'Pacifico', cursive;\n}\n\n#root {\n    max-width: 950px;\n\twidth: 70%;\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: 100px;\n    display: flex;\n    flex-flow: column wrap;\n    font-weight: bold;\n    text-align: center;\n}\n#root > * {\n\tflex: 1 0;\n}\n.Logo {\n\twidth: fit-content;\n\t\n}\n.question_card {\n\tpadding: 20px;\n\theight: 200px;\n\tdisplay: flex;\n\tflex-flow: column wrap;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\talign-content: space-around;\n    background-color: #EAFAF1;\n\n}\n.question_card > * {\n\tflex: 1 1;\n\n}\n.question_image {\n\tflex: 1 1 100%;\n\twidth: 400px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n\n\n}\n.question_image > img{\n\twidth: 100%;\n\theight: auto;\n\tmax-height: 400px;\n}\n\n.user_card {\n\ttext-align: right;\n\tmin-width: 150px;\n\twidth: fit-content;\n\tfont-size: 10px;\n\tfont-style: italic;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tcolor: #145A32;\n\t/*background-color: #7DCEA0;*/\n\tbackground-image: linear-gradient(to right, rgba(255,0,0,0), #7DCEA0);\n\tborder-top-left-radius: 50px;\n\tborder-bottom-left-radius: 50px;\n\t/*border-top-right-radius: 15px;*/\n\t/*border-bottom-right-radius: 15px;*/\n\n\tmargin-top: 10px;\n}\n\n.user_card > img {\n\tmargin: 5px;\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 25px;\n}\n\n.user_card > .info {\n\talign-self: flex-start;\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n\tmargin-left: 10px;\n}\n.user_card > .info > b {\n\tfont-style: normal;\n\tfont-size: 15px;\n}\n\n.question {\n\tfont-size: 20px;\n}\n\n.answer {\n\tdisplay: flex;\n\tflex-direction: row wrap;\n}\n.answer > input[type=text] {\n\tborder: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n    padding: 12px 20px;\n    margin: 8px 0;\n\tflex: 1 1;\n}", ""]);



/***/ }),

/***/ "./src/Answer.js":
/*!***********************!*\
  !*** ./src/Answer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Answer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/Answer.js";

class Answer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "answer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      placeholder: "Answer...",
      value: this.props.userAnswer,
      onChange: e => {
        this.props.onQuestionAnswer(e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "OK"));
  }

}

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kike_Escritorio_Repositorios_quiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Question */ "./src/Question.js");
/* harmony import */ var _PageSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageSelector */ "./src/PageSelector.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redux/actions */ "./src/redux/actions.js");

var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/App.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_kike_Escritorio_Repositorios_quiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function App(props) {
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "QUIZ"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Question__WEBPACK_IMPORTED_MODULE_5__["default"], {
    question: props.questions[props.currentQuestion],
    onQuestionAnswer: answer => {
      props.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_7__["questionAnswer"])(props.currentQuestion, answer));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentQuestion: props.currentQuestion,
    numberOfQuestions: props.questions.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " SUBMIT ")];
}

function mapStateToProps(state) {
  return _objectSpread({}, state);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(App));

/***/ }),

/***/ "./src/PageSelector.js":
/*!*****************************!*\
  !*** ./src/PageSelector.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/PageSelector.js";

class PageSelector extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const items = [];

    for (var i = 0; i < this.props.numberOfQuestions; i++) {
      if (this.props.currentQuestion === i) {
        items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button disabled",
          value: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, i + 1));
      } else {
        items.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "button",
          value: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, i + 1));
      }
    }

    return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page_selector",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, " Prev "), items, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, " Next "))];
  }

}

/***/ }),

/***/ "./src/Question.js":
/*!*************************!*\
  !*** ./src/Question.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Question; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCard */ "./src/UserCard.js");
/* harmony import */ var _Answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Answer */ "./src/Answer.js");
/* harmony import */ var _Tips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tips */ "./src/Tips.js");
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/Question.js";




class Question extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const default_photo = {
      filename: 'default.jpg',
      mime: 'image/jpeg',
      url: '/default.jpg'
    };
    const default_user = {
      id: -1,
      isAdmin: false,
      username: 'Anonymous',
      photo: default_photo
    };
    const author = this.props.question.author || default_user;
    author.photo = author.photo || default_photo;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "question_card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "question_image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.question.attachment ? this.props.question.attachment.url : "/default.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      author: author,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.question.question), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tips__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tips: this.props.question.tips,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Answer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onQuestionAnswer: this.props.onQuestionAnswer,
      userAnswer: this.props.question.userAnswer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/Tips.js":
/*!*********************!*\
  !*** ./src/Tips.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tips; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/Tips.js";

class Tips extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.tips.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tips",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, "Tips:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, this.props.tips.map((tip, index) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }, " ", this.tip, " ");
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tips",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, " There are no tips for this question ");
  }

}

/***/ }),

/***/ "./src/UserCard.js":
/*!*************************!*\
  !*** ./src/UserCard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/UserCard.js";

class UserCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user_card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.author.photo.url,
      alt: this.props.author.username,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Question sent by: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, this.props.author.username)));
  }

}

/***/ }),

/***/ "./src/assets/mock-data.js":
/*!*********************************!*\
  !*** ./src/assets/mock-data.js ***!
  \*********************************/
/*! exports provided: questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questions", function() { return questions; });
const questions = [{
  "id": 33,
  "question": "Capital of Spain",
  "answer": "Madrid",
  "attachment": {
    "filename": "capitals/Madrid.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Madrid.jpg"
  },
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "favourite": false,
  "tips": []
}, {
  "id": 32,
  "question": "Capital of Poland",
  "answer": "Warsaw",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Warsaw.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Warsaw.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 19,
  "question": "Capital of Azerbaijan",
  "answer": "Baku",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Baku.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Baku.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 10,
  "question": "Capital of Greece",
  "answer": "Athens",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Athens.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Athens.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 7,
  "question": "Capital of Australia",
  "answer": "Canberra",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Canberra.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Canberra.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 24,
  "question": "Capital of Switzerland",
  "answer": "Bern",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Bern.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Bern.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 5,
  "question": "Capital of Russia",
  "answer": "Moscow",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Moscow.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Moscow.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 38,
  "question": "Serie de TV",
  "answer": "Perdidos",
  "author": {
    "id": 103,
    "isAdmin": false,
    "username": "spg",
    "photo": {
      "filename": "spg072.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/ef8c7ae4f48fc6c82f6c530b1dcd9c51fc2f4d6f2215b7ea78a048fae23c78ac"
    }
  },
  "attachment": {
    "filename": "dharma.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/a844b936a88c547f51857f515209eb0ff0ea7a41e65a02ba466e82934d012418"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 13,
  "question": "Capital of Madagascar",
  "answer": "Antananarivo",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Antananarivo.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Antananarivo.jpg"
  },
  "favourite": false,
  "tips": []
}, {
  "id": 18,
  "question": "Capital of Cyprus",
  "answer": "Nicosia",
  "author": {
    "id": 1,
    "isAdmin": true,
    "username": "admin",
    "photo": {
      "filename": "lechuck.jpg",
      "mime": "image/jpeg",
      "url": "https://quiz.dit.upm.es/uploads/120e194dd3a5a1fc88b1d1f2e977b7372f5aa18fab64765ce4b9d4b17b987da7"
    }
  },
  "attachment": {
    "filename": "capitals/Nicosia.jpg",
    "mime": "image/jpeg",
    "url": "https://quiz.dit.upm.es/uploads/capitals/Nicosia.jpg"
  },
  "favourite": false,
  "tips": []
}];


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_ReduxProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/ReduxProvider */ "./src/redux/ReduxProvider.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redux_ReduxProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.25bf045c.svg";

/***/ }),

/***/ "./src/redux/ReduxProvider.js":
/*!************************************!*\
  !*** ./src/redux/ReduxProvider.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReduxProvider; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _assets_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/mock-data */ "./src/assets/mock-data.js");
var _jsxFileName = "/home/kike/Escritorio/Repositorios/quiz/src/redux/ReduxProvider.js";






class ReduxProvider extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [..._assets_mock_data__WEBPACK_IMPORTED_MODULE_5__["questions"]]
    };
    this.store = this.configureStore();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_0__["Provider"], {
      store: this.store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
      store: this.store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }

  configureStore() {
    return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], this.initialState);
  }

}

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! exports provided: QUESTION_ANSWER, questionAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_ANSWER", function() { return QUESTION_ANSWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionAnswer", function() { return questionAnswer; });
const QUESTION_ANSWER = 'QUESTION_ANSWER';
function questionAnswer(index, answer) {
  return {
    type: QUESTION_ANSWER,
    payload: {
      index,
      answer
    }
  };
}

/***/ }),

/***/ "./src/redux/reducers.js":
/*!*******************************!*\
  !*** ./src/redux/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kike_Escritorio_Repositorios_quiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/actions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_home_kike_Escritorio_Repositorios_quiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function score(state = 0, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_2__["QUESTION_ANSWER"]:
      return state.map((question, i) => {
        return _objectSpread({}, question, {
          usserAnswer: action.payload.index === i ? action.payload.answer : question.usserAnswer
        });
      });

    default:
      return state;
  }
}

const GlobalState = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  score,
  finished,
  currentQuestion,
  questions
});
/* harmony default export */ __webpack_exports__["default"] = (GlobalState);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kike/Escritorio/Repositorios/quiz/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/kike/Escritorio/Repositorios/quiz/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map